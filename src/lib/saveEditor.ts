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

export interface DraftLike {
  instanceKey: string
  speciesId: string
  selectedFormId: string
  recommendedSet: RecommendedSet
}

export interface DraftChangeRecord {
  instanceKey: string
  species: string
  location: string
  formTo: string
  tier: string
  applied: boolean
  skippedReason: string | null
}

export interface DraftApplyResult {
  output: Uint8Array
  applied: number
  records: DraftChangeRecord[]
  diffs: string[]
  verified: boolean
}

function pidFromKey(instanceKey: string): number | null {
  const m = /^pid:(\d+)$/.exec(instanceKey)
  return m ? Number(m[1]) : null
}

function locFromKey(instanceKey: string): { box: number | null; slot: number | null } | null {
  const box = /^loc:box(\d+):(\d+):/.exec(instanceKey)
  if (box) return { box: Number(box[1]), slot: Number(box[2]) }
  if (/^loc:team:/.test(instanceKey)) return { box: null, slot: null }
  return null
}

function applySetToNode(node: MNode, set: RecommendedSet, getSym: (n: string) => MNode): void {
  const evNode = ivarGet(node, '@ev')
  const ivNode = ivarGet(node, '@iv')
  if (evNode && evNode.k === 'hash') STAT_KEYS.forEach((k, i) => hashSetKey(evNode, k, int(set.evs[i] ?? 0)))
  if (ivNode && ivNode.k === 'hash') STAT_KEYS.forEach((k, i) => hashSetKey(ivNode, k, int(set.ivs[i] ?? 31)))

  const movesNode = ivarGet(node, '@moves')
  if (movesNode && movesNode.k === 'array') {
    movesNode.items = set.moves.map(mt => buildMoveNode(mt.id, mt.pp ?? 5, getSym))
  }

  const species = symOrStr(ivarGet(node, '@species')) ?? ''
  if (set.nature) {
    ivarSet(node, '@nature', getSym(set.nature))
    ivarSet(node, '@nature_for_stats', getSym(set.nature))
  }
  if (set.item) ivarSet(node, '@item', getSym(set.item))
  if (set.ability) {
    const idx = (getAnilSpecies(species)?.abilities ?? []).findIndex(a => a.id === set.ability)
    ivarSet(node, '@ability', getSym(set.ability))
    if (idx >= 0) ivarSet(node, '@ability_index', int(idx))
  }

  const level = asInt(ivarGet(node, '@level')) ?? 100
  const natureKey = (set.nature ?? symOrStr(ivarGet(node, '@nature_for_stats')) ?? symOrStr(ivarGet(node, '@nature')) ?? 'HARDY').toUpperCase()
  const stats = calcStats(set.base, set.ivs, set.evs, level, natureKey)
  ivarSet(node, '@totalhp', int(stats[0]))
  ivarSet(node, '@hp', int(stats[0]))
  STAT_IVARS.slice(1).forEach((iv, i) => ivarSet(node, iv, int(stats[i + 1])))
}

/**
 * Applies one confirmed set per concrete instance (matched by @personalID, then by box+slot).
 * Every Pokémon without a draft is left untouched. The output is re-parsed and structurally
 * diffed against the original: only the whitelisted Pokémon ivars may change.
 */
export function applyDraftChanges(bytes: Uint8Array, drafts: readonly DraftLike[]): DraftApplyResult {
  const originalDoc = load(bytes)
  const doc = load(bytes)
  const symTable = new Map<string, MNode>()
  const getSym = (name: string): MNode => {
    let s = symTable.get(name)
    if (!s) { s = symFor(name); symTable.set(name, s) }
    return s
  }

  const mons = collectPokemon(doc)
  const byPid = new Map<number, typeof mons[number]>()
  const byLoc = new Map<string, typeof mons[number]>()
  const claimedLoc = new Set<string>()
  for (const m of mons) {
    const pid = asInt(ivarGet(m.node, '@personalID'))
    if (pid != null) byPid.set(pid, m)
    if (!m.inParty && m.boxIndex != null && m.slot != null) byLoc.set(`box${m.boxIndex}:${m.slot}`, m)
  }

  const records: DraftChangeRecord[] = []
  let applied = 0

  for (const draft of drafts) {
    const pid = pidFromKey(draft.instanceKey)
    let target = pid != null ? byPid.get(pid) : undefined
    if (!target) {
      const loc = locFromKey(draft.instanceKey)
      if (loc && loc.box != null && loc.slot != null) target = byLoc.get(`box${loc.box}:${loc.slot}`)
      else if (loc) {
        target = mons.find(m => m.inParty && !claimedLoc.has('team:' + m.node) && symOrStr(ivarGet(m.node, '@species')) === draft.speciesId)
        if (target) claimedLoc.add('team:' + target.node)
      }
    }

    const base: DraftChangeRecord = {
      instanceKey: draft.instanceKey,
      species: draft.speciesId,
      location: target ? (target.inParty ? 'Equipo' : `${target.boxName} · ${(target.slot ?? 0) + 1}`) : '—',
      formTo: draft.selectedFormId || 'Forma actual',
      tier: draft.recommendedSet.tier,
      applied: false,
      skippedReason: null
    }

    if (!target) {
      base.skippedReason = 'no se encontró el ejemplar en la partida'
      records.push(base)
      continue
    }

    applySetToNode(target.node, draft.recommendedSet, getSym)
    base.applied = true
    records.push(base)
    applied++
  }

  const output = dump(doc)
  const reparsed = load(output)
  const diffs = structuralDiff(originalDoc.root, reparsed.root, true)

  let perInstanceOk = true
  const checkMons = collectPokemon(reparsed)
  const checkByPid = new Map<number, typeof checkMons[number]>()
  for (const m of checkMons) {
    const pid = asInt(ivarGet(m.node, '@personalID'))
    if (pid != null) checkByPid.set(pid, m)
  }
  for (const draft of drafts) {
    const pid = pidFromKey(draft.instanceKey)
    const node = pid != null ? checkByPid.get(pid)?.node : undefined
    if (!node) continue
    const ev = STAT_KEYS.map(k => asInt(hashGet(ivarGet(node, '@ev'), k)))
    const mv = moveIds(ivarGet(node, '@moves'))
    const evOk = ev.every((v, i) => v === (draft.recommendedSet.evs[i] ?? 0))
    const mvOk = mv.length === draft.recommendedSet.moves.length && mv.every((id, i) => id === draft.recommendedSet.moves[i].id)
    if (!(evOk && mvOk)) perInstanceOk = false
  }

  return {
    output,
    applied,
    records,
    diffs,
    verified: diffs.length === 0 && perInstanceOk
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
