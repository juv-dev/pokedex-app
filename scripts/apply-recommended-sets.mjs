import { copyFileSync, existsSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import { basename, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  load, dump, ivarGet, ivarSet, hashSetString, asString, asInt, int
} from '../src/lib/marshalCodec.mjs'

const HERE = dirname(fileURLToPath(import.meta.url))
const SETS_PATH = join(HERE, 'recommended-sets.json')

const STAT_KEYS = ['HP', 'ATTACK', 'DEFENSE', 'SPECIAL_ATTACK', 'SPECIAL_DEFENSE', 'SPEED']
const STAT_IVARS = ['@totalhp', '@attack', '@defense', '@spatk', '@spdef', '@speed']
const ALLOWED_POKEMON_IVARS = new Set([
  '@ev', '@iv', '@moves', '@hp', '@totalhp', '@attack', '@defense', '@spatk', '@spdef', '@speed'
])

const NATURE_MOD = {
  HARDY: null, DOCILE: null, SERIOUS: null, BASHFUL: null, QUIRKY: null,
  LONELY: [1, 2], BRAVE: [1, 5], ADAMANT: [1, 3], NAUGHTY: [1, 4],
  BOLD: [2, 1], RELAXED: [2, 5], IMPISH: [2, 3], LAX: [2, 4],
  TIMID: [5, 1], HASTY: [5, 2], JOLLY: [5, 3], NAIVE: [5, 4],
  MODEST: [3, 1], MILD: [3, 2], QUIET: [3, 5], RASH: [3, 4],
  CALM: [4, 1], GENTLE: [4, 2], SASSY: [4, 5], CAREFUL: [4, 3]
}

function symOrStr(node) {
  if (!node) return null
  if (node.k === 'sym') return node.name
  return asString(node)
}

function buildSymTable(doc) {
  const table = new Map()
  const seen = new Set()
  function w(n) {
    if (!n || typeof n !== 'object' || seen.has(n)) return
    seen.add(n)
    if (n.k === 'sym') { if (!table.has(n.name)) table.set(n.name, n); return }
    if (n.items) n.items.forEach(w)
    if (n.pairs) n.pairs.forEach(([k, v]) => { w(k); w(v) })
    if (n.ivars) n.ivars.forEach(([k, v]) => { w(k); w(v) })
    if (n.default) w(n.default)
    if (n.data) w(n.data)
    if (n.inner) w(n.inner)
  }
  w(doc.root)
  return table
}

function hashSetKey(hashNode, keyName, valueNode, symTable) {
  const hit = hashNode.pairs.find(([k]) => (k.k === 'sym' && k.name === keyName) || asString(k) === keyName)
  if (!hit) throw new Error(`clave ${keyName} ausente en hash`)
  hit[1] = valueNode
}

function cloneNode(node) {
  if (node === null || typeof node !== 'object') return node
  const copy = { ...node }
  if (node.bytes) copy.bytes = Uint8Array.from(node.bytes)
  if (node.words) copy.words = Uint8Array.from(node.words)
  if (node.items) copy.items = node.items.map(cloneNode)
  if (node.pairs) copy.pairs = node.pairs.map(([k, v]) => [cloneNode(k), cloneNode(v)])
  if (node.ivars) copy.ivars = node.ivars.map(([k, v]) => [cloneNode(k), cloneNode(v)])
  if (node.default) copy.default = cloneNode(node.default)
  if (node.data) copy.data = cloneNode(node.data)
  if (node.inner) copy.inner = cloneNode(node.inner)
  if (node.extendedBy) copy.extendedBy = [...node.extendedBy]
  return copy
}

function setStringBytes(strNode, text) {
  strNode.bytes = new TextEncoder().encode(text)
}

function collectPokemon(doc) {
  const found = []
  const seen = new Set()

  function walkBox(boxNode, boxIndex) {
    const nameNode = ivarGet(boxNode, '@name')
    const boxName = asString(nameNode) || `Caja ${boxIndex + 1}`
    const pokemonArr = ivarGet(boxNode, '@pokemon')
    if (!pokemonArr || pokemonArr.k !== 'array') return
    pokemonArr.items.forEach((p, slot) => {
      if (p && p.k === 'object' && p.cls === 'Pokemon' && !seen.has(p)) {
        seen.add(p)
        found.push({ node: p, inParty: false, boxIndex, boxName, slot })
      }
    })
  }

  function walk(node, inParty) {
    if (!node || typeof node !== 'object' || seen.has(node)) return
    if (node.k === 'sym' || node.k === 'int' || node.k === 'prim' || node.k === 'str' ||
        node.k === 'float' || node.k === 'bignum' || node.k === 'userdef' || node.k === 'classmod') {
      seen.add(node)
      return
    }
    seen.add(node)
    if (node.k === 'object' && node.cls === 'Pokemon') {
      if (inParty) found.push({ node, inParty: true, boxIndex: null, boxName: null, slot: null })
      return
    }
    if (node.k === 'object' && node.cls === 'PokemonStorage') {
      const boxes = ivarGet(node, '@boxes')
      if (boxes && boxes.k === 'array') {
        boxes.items.forEach((b, i) => { if (b && b.k === 'object') walkBox(b, i) })
      }
      return
    }
    if (node.k === 'array') { node.items.forEach(it => walk(it, inParty)); return }
    if (node.k === 'hash') { node.pairs.forEach(([k, v]) => { walk(k, inParty); walk(v, inParty) }); return }
    if (node.ivars) {
      node.ivars.forEach(([k, v]) => walk(v, inParty || k.name === '@party'))
    }
    if (node.default) walk(node.default, inParty)
    if (node.data) walk(node.data, inParty)
    if (node.inner) walk(node.inner, inParty)
  }

  walk(doc.root, false)
  return found
}

function calcStats(base, ivs, evs, level, natureKey) {
  const mod = NATURE_MOD[natureKey] ?? null
  const out = []
  for (let i = 0; i < 6; i++) {
    const inner = Math.floor((2 * base[i] + (ivs[i] ?? 31) + Math.floor((evs[i] ?? 0) / 4)) * level / 100)
    if (i === 0) {
      out.push(base[0] === 1 ? 1 : inner + level + 10)
    } else {
      let pv = 100
      if (mod) { if (mod[0] === i) pv = 110; else if (mod[1] === i) pv = 90 }
      out.push(Math.floor((inner + 5) * pv / 100))
    }
  }
  return out
}

function diffNodes(a, b, path, diffs, seen) {
  if (a === b) return
  if (!a || !b || typeof a !== 'object' || typeof b !== 'object') {
    if (a !== b) diffs.push(path)
    return
  }
  if (seen.has(a)) return
  seen.add(a)
  if (diffs.length > 200) return
  if (a.k !== b.k) { diffs.push(`${path}<kind ${a.k}!=${b.k}>`); return }
  switch (a.k) {
    case 'prim': if (a.p !== b.p) diffs.push(path); return
    case 'int': if (a.v !== b.v) diffs.push(path); return
    case 'sym': if (a.name !== b.name) diffs.push(path); return
    case 'str': case 'float':
      if (Buffer.compare(Buffer.from(a.bytes), Buffer.from(b.bytes)) !== 0) diffs.push(path)
      return
    case 'bignum':
      if (a.sign !== b.sign || Buffer.compare(Buffer.from(a.words), Buffer.from(b.words)) !== 0) diffs.push(path)
      return
    case 'classmod':
      if (a.type !== b.type || Buffer.compare(Buffer.from(a.bytes), Buffer.from(b.bytes)) !== 0) diffs.push(path)
      return
    case 'userdef':
      if (a.cls !== b.cls || Buffer.compare(Buffer.from(a.bytes), Buffer.from(b.bytes)) !== 0) diffs.push(path)
      return
    case 'array':
      if (a.items.length !== b.items.length) { diffs.push(`${path}<len ${a.items.length}!=${b.items.length}>`); return }
      a.items.forEach((it, i) => diffNodes(it, b.items[i], `${path}[${i}]`, diffs, seen))
      return
    case 'hash':
      if (a.pairs.length !== b.pairs.length) { diffs.push(`${path}<hash len>`); return }
      a.pairs.forEach(([ak, av], i) => {
        diffNodes(ak, b.pairs[i][0], `${path}{k${i}}`, diffs, seen)
        diffNodes(av, b.pairs[i][1], `${path}{v${i}}`, diffs, seen)
      })
      if (a.default || b.default) diffNodes(a.default, b.default, `${path}{default}`, diffs, seen)
      return
    case 'object': {
      if (a.cls !== b.cls) { diffs.push(`${path}<cls ${a.cls}!=${b.cls}>`); return }
      if (a.ivars.length !== b.ivars.length) { diffs.push(`${path}<ivar count>`); return }
      const allow = a.cls === 'Pokemon'
      a.ivars.forEach(([ak, av], i) => {
        const [bk, bv] = b.ivars[i]
        if (ak.name !== bk.name) { diffs.push(`${path}.${ak.name}<name!=${bk.name}>`); return }
        if (allow && ALLOWED_POKEMON_IVARS.has(ak.name)) return
        diffNodes(av, bv, `${path}.${ak.name}`, diffs, seen)
      })
      return
    }
    case 'usrmarshal':
      if (a.cls !== b.cls) { diffs.push(`${path}<U cls>`); return }
      diffNodes(a.data, b.data, `${path}<U>`, diffs, seen)
      return
    case 'wrapped':
      if (a.cls !== b.cls) { diffs.push(`${path}<C cls>`); return }
      diffNodes(a.inner, b.inner, `${path}<C>`, diffs, seen)
      return
    case 'struct':
      if (a.cls !== b.cls || a.pairs.length !== b.pairs.length) { diffs.push(`${path}<struct>`); return }
      a.pairs.forEach(([, av], i) => diffNodes(av, b.pairs[i][1], `${path}<s${i}>`, diffs, seen))
      return
    default:
      diffs.push(`${path}<unhandled ${a.k}>`)
  }
}

function main() {
  const savePath = process.argv[2]
  if (!savePath) {
    console.error('uso: node scripts/apply-recommended-sets.mjs "<ruta a Partida X.rxdata>" [--out <ruta>]')
    process.exit(1)
  }
  if (!existsSync(savePath)) {
    console.error(`no existe el archivo: ${savePath}`)
    process.exit(1)
  }
  const outFlag = process.argv.indexOf('--out')
  const dir = dirname(savePath)
  const stem = basename(savePath).replace(/\.rxdata$/i, '')
  const outPath = outFlag > -1 ? process.argv[outFlag + 1] : join(dir, `${stem}.applied.rxdata`)
  const reportPath = join(dir, `${stem}.sets-report.txt`)

  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\..+/, '').replace('T', '-')
  const backupPath = join(dir, `${basename(savePath)}.backup-${stamp}`)
  copyFileSync(savePath, backupPath)
  if (!existsSync(backupPath) || readFileSync(backupPath).length !== readFileSync(savePath).length) {
    console.error('no se pudo crear el backup; aborto sin tocar nada')
    process.exit(2)
  }

  const original = Uint8Array.from(readFileSync(savePath))
  const sets = JSON.parse(readFileSync(SETS_PATH, 'utf8'))

  const originalDoc = load(original)
  const doc = load(original)

  const symTable = buildSymTable(doc)
  const getSym = (name) => {
    let s = symTable.get(name)
    if (!s) { s = { k: 'sym', name }; symTable.set(name, s) }
    return s
  }

  const mons = collectPokemon(doc)
  const lines = []
  const report = []
  const records = []
  let applied = 0
  let noSet = 0
  let noMoves = 0

  for (const m of mons) {
    const species = symOrStr(ivarGet(m.node, '@species'))
    const level = asInt(ivarGet(m.node, '@level')) ?? 100
    const where = m.inParty ? 'Equipo' : `${m.boxName} slot ${m.slot}`
    const target = species ? sets[species] : null
    if (!target) { noSet++; report.push(`SKIP  ${species || '???'} (${where}) — sin set en el catálogo`); continue }

    const evNode = ivarGet(m.node, '@ev')
    const ivNode = ivarGet(m.node, '@iv')
    const movesNode = ivarGet(m.node, '@moves')
    if (!evNode || evNode.k !== 'hash' || !ivNode || ivNode.k !== 'hash') {
      report.push(`SKIP  ${species} (${where}) — sin @ev/@iv legibles`)
      noSet++
      continue
    }

    const beforeEv = STAT_KEYS.map(k => asInt(hashLookup(evNode, k)))
    const beforeIv = STAT_KEYS.map(k => asInt(hashLookup(ivNode, k)))
    const beforeStats = STAT_IVARS.map(iv => asInt(ivarGet(m.node, iv)))
    const beforeMoves = movesNode && movesNode.k === 'array'
      ? movesNode.items.map(mv => symOrStr(ivarGet(mv, '@id'))).filter(Boolean)
      : []
    const nickname = symOrStr(ivarGet(m.node, '@name'))
    const shiny = ivarGet(m.node, '@shiny')
    const isShiny = !!(shiny && shiny.k === 'prim' && shiny.p === 1)

    STAT_KEYS.forEach((k, i) => hashSetKey(evNode, k, int(target.evs[i] ?? 0), symTable))
    STAT_KEYS.forEach((k, i) => hashSetKey(ivNode, k, int(target.ivs[i] ?? 31), symTable))

    let movesApplied = beforeMoves
    if (movesNode && movesNode.k === 'array') {
      const tpl = movesNode.items.find(mv => mv && mv.k === 'object' && mv.cls === 'Pokemon::Move')
      movesNode.items = target.moves.map(mt => ({
        k: 'object',
        cls: 'Pokemon::Move',
        ivars: [
          [getSym('@id'), getSym(mt.id)],
          [getSym('@ppup'), int(0)],
          [getSym('@pp'), int(mt.pp ?? 5)]
        ]
      }))
      if (!tpl) noMoves++
      movesApplied = target.moves.map(mt => mt.id)
    } else {
      noMoves++
    }

    const natureKey = (symOrStr(ivarGet(m.node, '@nature_for_stats')) || symOrStr(ivarGet(m.node, '@nature')) || 'HARDY').toUpperCase()
    const stats = calcStats(target.base, target.ivs, target.evs, level, natureKey)
    ivarSet(m.node, '@totalhp', int(stats[0]))
    ivarSet(m.node, '@hp', int(stats[0]))
    STAT_IVARS.slice(1).forEach((iv, i) => ivarSet(m.node, iv, int(stats[i + 1])))

    applied++
    const wantNature = target.nature || '—'
    const natureNote = wantNature !== '—' && wantNature.toUpperCase() !== natureKey ? `  [set quiere naturaleza ${wantNature}, tiene ${natureKey}]` : ''

    records.push({
      species,
      nickname: nickname || null,
      shiny: isShiny,
      level,
      inParty: m.inParty,
      boxIndex: m.boxIndex,
      boxName: m.boxName,
      slot: m.slot,
      tier: target.tier,
      source: target.source,
      referenceFrom: target.referenceFrom,
      natureCurrent: natureKey,
      natureWanted: target.nature || null,
      itemWanted: target.item || null,
      abilityWanted: target.ability || null,
      evBefore: beforeEv,
      evAfter: target.evs,
      ivBefore: beforeIv,
      ivAfter: target.ivs,
      statsBefore: beforeStats,
      statsAfter: stats,
      movesBefore: beforeMoves,
      movesAfter: movesApplied
    })
    lines.push(
      `OK    ${species.padEnd(14)} L${String(level).padEnd(3)} ${where}\n` +
      `        EV ${beforeEv.join('/')}  ->  ${target.evs.join('/')}\n` +
      `        MOV ${beforeMoves.join(', ')}\n` +
      `         -> ${movesApplied.join(', ')}\n` +
      `        stats -> PS ${stats[0]} Atk ${stats[1]} Def ${stats[2]} AtEsp ${stats[3]} DefEsp ${stats[4]} Vel ${stats[5]}  (${target.tier})${natureNote}` +
      (target.item ? `\n        set: objeto ${target.item} · habilidad ${target.ability || '—'} (NO aplicados)` : '')
    )
  }

  const out = dump(doc)
  writeFileSync(outPath, Buffer.from(out))

  const check = load(Uint8Array.from(readFileSync(outPath)))
  const diffs = []
  diffNodes(originalDoc.root, check.root, '$', diffs, new Set())
  if (diffs.length > 0) {
    unlinkSync(outPath)
    console.error(`VERIFICACION FALLIDA: ${diffs.length} diferencias fuera de @ev/@iv/@moves/stats. Aborto y borro ${outPath}.`)
    console.error(diffs.slice(0, 30).join('\n'))
    console.error(`El original y el backup (${backupPath}) quedan intactos.`)
    process.exit(3)
  }

  const checkMons = collectPokemon(check)
  let verifyFail = 0
  for (const m of checkMons) {
    const species = symOrStr(ivarGet(m.node, '@species'))
    const target = species ? sets[species] : null
    if (!target) continue
    const ev = STAT_KEYS.map(k => asInt(hashLookup(ivarGet(m.node, '@ev'), k)))
    const iv = STAT_KEYS.map(k => asInt(hashLookup(ivarGet(m.node, '@iv'), k)))
    const mv = (ivarGet(m.node, '@moves')?.items || []).map(x => symOrStr(ivarGet(x, '@id')))
    const evOk = ev.every((v, i) => v === (target.evs[i] ?? 0))
    const ivOk = iv.every((v, i) => v === (target.ivs[i] ?? 31))
    const mvOk = mv.length === target.moves.length && mv.every((id, i) => id === target.moves[i].id)
    if (!(evOk && ivOk && mvOk)) verifyFail++
  }

  const header = [
    `Archivo original : ${savePath}`,
    `Backup           : ${backupPath}`,
    `Archivo generado : ${outPath}   <-- probá este en el juego; si va bien, renombralo a ${basename(savePath)}`,
    ``,
    `Pokémon en la partida : ${mons.length}`,
    `Sets aplicados        : ${applied}`,
    `Sin set en catálogo   : ${noSet}`,
    `Sin movimientos base  : ${noMoves}`,
    `Re-verificación EV/IV/MOV con fallo : ${verifyFail}`,
    `Diff estructural fuera de lo permitido : ${diffs.length} (0 = perfecto)`,
    ``,
    `Solo se modificaron EVs, IVs, movimientos y las estadísticas guardadas.`,
    `Naturaleza, objeto y habilidad NO se tocaron (mirá las notas por Pokémon).`,
    `${'='.repeat(72)}`,
    ``
  ].join('\n')

  const body = header + lines.join('\n\n') + '\n\n' + report.join('\n') + '\n'
  writeFileSync(reportPath, body, 'utf8')

  const jsonPath = reportPath.replace(/\.txt$/, '.json')
  writeFileSync(jsonPath, JSON.stringify({
    savePath,
    backupPath,
    outPath,
    generatedAt: new Date().toISOString(),
    totals: { mons: mons.length, applied, noSet, noMoves, verifyFail, structuralDiffs: diffs.length },
    statKeys: STAT_KEYS,
    records
  }, null, 2) + '\n', 'utf8')

  console.log(header)
  console.log(`(reporte por Pokémon: ${reportPath})`)
  console.log(`(datos para vista visual: ${jsonPath})`)
  if (verifyFail > 0) {
    console.error(`ATENCION: ${verifyFail} Pokémon no quedaron con los valores esperados. Revisá el reporte antes de usar el archivo.`)
    process.exit(4)
  }
}

function hashLookup(hashNode, key) {
  if (!hashNode || hashNode.k !== 'hash') return null
  const hit = hashNode.pairs.find(([k]) => asString(k) === key || (k.k === 'sym' && k.name === key))
  return hit ? hit[1] : null
}

main()
