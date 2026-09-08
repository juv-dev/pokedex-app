import {
  load, dump, int, symFor, symOrStr, asInt, isTrue,
  ivarGet, ivarSet, hashGet, hashSetKey, collectPokemon, structuralDiff,
  type MarshalDoc, type MNode
} from './marshalCodec.mjs'
import { NATURE_TABLE } from './constants'
import { getAnilSpecies } from './anilData'
import { recommendedSetFor, type RecommendedSet } from './recommendedSet'

const STAT_KEYS = ['HP', 'ATTACK', 'DEFENSE', 'SPECIAL_ATTACK', 'SPECIAL_DEFENSE', 'SPEED'] as const
const STAT_IVARS = ['@totalhp', '@attack', '@defense', '@spatk', '@spdef', '@speed'] as const
const STAT_ES_INDEX: Record<string, number> = {
  'Ataque': 1, 'Defensa': 2, 'At. Esp.': 3, 'Def. Esp.': 4, 'Velocidad': 5
}

function natureMod(key: string): [number, number] | null {
  const n = NATURE_TABLE.find(t => t.key === key)
  if (!n || !n.raises || !n.lowers) return null
  return [STAT_ES_INDEX[n.raises], STAT_ES_INDEX[n.lowers]]
}

function calcStats(base: number[], ivs: number[], evs: number[], level: number, natureKey: string): number[] {
  const mod = natureMod(natureKey)
  const out: number[] = []
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

export interface SetRecord {
  species: string
  nickname: string | null
  shiny: boolean
  level: number
  inParty: boolean
  boxName: string | null
  slot: number | null
  tier: string
  source: RecommendedSet['source']
  mega: string | null
  applied: boolean
  skippedReason: string | null
  natureCurrent: string
  natureWanted: string | null
  natureApplied: boolean
  itemWanted: string | null
  itemApplied: boolean
  abilityWanted: string | null
  abilityApplied: boolean
  evBefore: number[]
  evAfter: number[]
  ivBefore: number[]
  ivAfter: number[]
  statsBefore: number[]
  statsAfter: number[]
  movesBefore: string[]
  movesAfter: string[]
}

export interface ApplyOptions {
  includeNatureItemAbility: boolean
  onlyOptimo: boolean
  /** species internal name -> chosen mega form name; that Pokémon gets the full mega build. */
  megaChoices?: Record<string, string>
}

export interface ApplyResult {
  output: Uint8Array
  records: SetRecord[]
  totals: {
    mons: number
    applied: number
    skipped: number
    natureApplied: number
    megaApplied: number
    structuralDiffs: number
    verifyFail: number
  }
  diffs: string[]
  verified: boolean
}

function moveIds(movesNode: MNode | undefined): string[] {
  if (!movesNode || movesNode.k !== 'array') return []
  return (movesNode.items as MNode[]).map(mv => symOrStr(ivarGet(mv, '@id')) ?? '').filter(Boolean)
}

function buildMoveNode(id: string, pp: number, getSym: (n: string) => MNode): MNode {
  return {
    k: 'object',
    cls: 'Pokemon::Move',
    ivars: [
      [getSym('@id'), getSym(id)],
      [getSym('@ppup'), int(0)],
      [getSym('@pp'), int(pp)]
    ]
  } as MNode
}

export async function applyRecommendedSets(bytes: Uint8Array, opts: ApplyOptions): Promise<ApplyResult> {
  const originalDoc = load(bytes)
  const doc = load(bytes)

  const symTable = new Map<string, MNode>()
  const getSym = (name: string): MNode => {
    let s = symTable.get(name)
    if (!s) { s = symFor(name); symTable.set(name, s) }
    return s
  }

  const megaOf = (species: string): string => opts.megaChoices?.[species] || ''
  const cacheKey = (species: string): string => `${species}|${megaOf(species)}`

  const mons = collectPokemon(doc)
  const uniqueSpecies = [...new Set(mons.map(m => symOrStr(ivarGet(m.node, '@species'))).filter((s): s is string => !!s))]
  const setCache = new Map<string, RecommendedSet | null>()
  await Promise.all(uniqueSpecies.map(async name => {
    const mega = megaOf(name)
    setCache.set(cacheKey(name), await recommendedSetFor(name, mega ? { megaFormName: mega } : {}))
  }))

  const records: SetRecord[] = []
  let applied = 0
  let skipped = 0
  let natureAppliedCount = 0
  let megaAppliedCount = 0

  for (const m of mons) {
    const species = symOrStr(ivarGet(m.node, '@species')) ?? ''
    const level = asInt(ivarGet(m.node, '@level')) ?? 100
    const nickname = symOrStr(ivarGet(m.node, '@name'))
    const shiny = isTrue(ivarGet(m.node, '@shiny'))
    const natureCurrent = (symOrStr(ivarGet(m.node, '@nature_for_stats')) || symOrStr(ivarGet(m.node, '@nature')) || 'HARDY').toUpperCase()

    const target = species ? setCache.get(cacheKey(species)) ?? null : null
    const isMegaPick = !!megaOf(species) && !!target?.megaFormName
    const evNode = ivarGet(m.node, '@ev')
    const ivNode = ivarGet(m.node, '@iv')
    const movesNode = ivarGet(m.node, '@moves')

    const evBefore = STAT_KEYS.map(k => asInt(hashGet(evNode, k)) ?? 0)
    const ivBefore = STAT_KEYS.map(k => asInt(hashGet(ivNode, k)) ?? 31)
    const statsBefore = STAT_IVARS.map(iv => asInt(ivarGet(m.node, iv)) ?? 0)
    const movesBefore = moveIds(movesNode)

    const baseRecord: SetRecord = {
      species, nickname, shiny, level, inParty: m.inParty, boxName: m.boxName, slot: m.slot,
      tier: target?.tier ?? '—', source: target?.source ?? 'heuristic',
      mega: target?.megaFormName ?? null,
      applied: false, skippedReason: null,
      natureCurrent, natureWanted: target?.nature ?? null, natureApplied: false,
      itemWanted: target?.item ?? null, itemApplied: false,
      abilityWanted: target?.ability ?? null, abilityApplied: false,
      evBefore, evAfter: evBefore, ivBefore, ivAfter: ivBefore,
      statsBefore, statsAfter: statsBefore, movesBefore, movesAfter: movesBefore
    }

    if (!target) {
      baseRecord.skippedReason = 'sin set en el catálogo'
      records.push(baseRecord); skipped++; continue
    }
    if (opts.onlyOptimo && target.tier !== 'optimo') {
      baseRecord.skippedReason = 'no es óptimo'
      records.push(baseRecord); skipped++; continue
    }
    if (!evNode || evNode.k !== 'hash' || !ivNode || ivNode.k !== 'hash') {
      baseRecord.skippedReason = 'no se pudo leer @ev/@iv'
      records.push(baseRecord); skipped++; continue
    }

    STAT_KEYS.forEach((k, i) => hashSetKey(evNode, k, int(target.evs[i] ?? 0)))
    STAT_KEYS.forEach((k, i) => hashSetKey(ivNode, k, int(target.ivs[i] ?? 31)))

    let movesAfter = movesBefore
    if (movesNode && movesNode.k === 'array') {
      movesNode.items = target.moves.map(mt => buildMoveNode(mt.id, mt.pp ?? 5, getSym))
      movesAfter = target.moves.map(mt => mt.id)
    }

    let natureForStats = natureCurrent
    const applyNatureItemAbility = opts.includeNatureItemAbility || isMegaPick
    if (applyNatureItemAbility) {
      if (target.nature) {
        ivarSet(m.node, '@nature', getSym(target.nature))
        ivarSet(m.node, '@nature_for_stats', getSym(target.nature))
        natureForStats = target.nature.toUpperCase()
        baseRecord.natureApplied = true
        natureAppliedCount++
      }
      if (target.item) {
        ivarSet(m.node, '@item', getSym(target.item))
        baseRecord.itemApplied = true
      }
      if (target.ability) {
        const idx = (getAnilSpecies(species)?.abilities ?? []).findIndex(a => a.id === target.ability)
        ivarSet(m.node, '@ability', getSym(target.ability))
        if (idx >= 0) ivarSet(m.node, '@ability_index', int(idx))
        baseRecord.abilityApplied = true
      }
    }
    if (isMegaPick) megaAppliedCount++

    const stats = calcStats(target.base, target.ivs, target.evs, level, natureForStats)
    ivarSet(m.node, '@totalhp', int(stats[0]))
    ivarSet(m.node, '@hp', int(stats[0]))
    STAT_IVARS.slice(1).forEach((iv, i) => ivarSet(m.node, iv, int(stats[i + 1])))

    baseRecord.applied = true
    baseRecord.evAfter = target.evs.slice(0, 6)
    baseRecord.ivAfter = target.ivs.slice(0, 6)
    baseRecord.statsAfter = stats
    baseRecord.movesAfter = movesAfter
    records.push(baseRecord)
    applied++
  }

  const output = dump(doc)

  const reparsed = load(output)
  const diffs = structuralDiff(originalDoc.root, reparsed.root, true)

  const checkMons = collectPokemon(reparsed)
  let verifyFail = 0
  for (const cm of checkMons) {
    const species = symOrStr(ivarGet(cm.node, '@species')) ?? ''
    const target = species ? setCache.get(cacheKey(species)) ?? null : null
    if (!target || (opts.onlyOptimo && target.tier !== 'optimo')) continue
    const ev = STAT_KEYS.map(k => asInt(hashGet(ivarGet(cm.node, '@ev'), k)))
    const iv = STAT_KEYS.map(k => asInt(hashGet(ivarGet(cm.node, '@iv'), k)))
    const mv = moveIds(ivarGet(cm.node, '@moves'))
    const evOk = ev.every((v, i) => v === (target.evs[i] ?? 0))
    const ivOk = iv.every((v, i) => v === (target.ivs[i] ?? 31))
    const mvOk = mv.length === target.moves.length && mv.every((id, i) => id === target.moves[i].id)
    if (!(evOk && ivOk && mvOk)) verifyFail++
  }

  return {
    output,
    records,
    totals: {
      mons: mons.length,
      applied,
      skipped,
      natureApplied: natureAppliedCount,
      megaApplied: megaAppliedCount,
      structuralDiffs: diffs.length,
      verifyFail
    },
    diffs,
    verified: diffs.length === 0 && verifyFail === 0
  }
}

export function downloadBytes(bytes: Uint8Array, filename: string): void {
  const ab = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer
  const blob = new Blob([ab], { type: 'application/octet-stream' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export type { MarshalDoc }
