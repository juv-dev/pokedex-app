import type {
  TemplateGameData, CompetitiveTemplate, LoadedTemplateEntry, LoadedTemplateSet,
  SavedBuild, TemplateMatch, TemplateDiff, TemplateDiffRow, DiffStatus, MatchReason
} from './types'
import { NATURE_ES } from './constants'

const EV_LABELS = ['PS', 'Atq', 'Def', 'At.Esp', 'Def.Esp', 'Vel']

function natureLabel(key: string): string {
  return NATURE_ES[key] ?? key
}

function evLabel(evs: readonly number[]): string {
  const parts = evs
    .map((v, i) => (v > 0 ? `${v} ${EV_LABELS[i] ?? i}` : null))
    .filter((p): p is string => p != null)
  return parts.length ? parts.join(' · ') : 'Sin EVs'
}

function ivLabel(ivs: readonly number[]): string {
  return ivs.every((v) => v === 31) ? 'Máximos (31)' : ivs.join('/')
}

const SCORE_ABILITY = 3
const SCORE_ITEM = 2
const SCORE_NATURE = 2
const SCORE_EV_BOTH = 2
const SCORE_EV_ONE = 1
const MOVE_OVERLAP_CAP = 4

interface Contributions {
  ability: number
  item: number
  nature: number
  ev: number
  moves: number
}

function topTwoEvIndices(evs: readonly number[]): Set<number> {
  const ranked = evs
    .map((v, i) => [i, v] as [number, number])
    .filter(([, v]) => v > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([i]) => i)
  return new Set(ranked)
}

function contributions(saved: SavedBuild, entry: CompetitiveTemplate): Contributions {
  const savedTop = topTwoEvIndices(saved.evs)
  const templateTop = topTwoEvIndices(entry.evs)
  let overlap = 0
  for (const i of savedTop) if (templateTop.has(i)) overlap++
  const shared = entry.moves.filter((m) => saved.moveIds.includes(m)).length
  return {
    ability: saved.abilityId === entry.ability ? SCORE_ABILITY : 0,
    item: saved.itemId === entry.item ? SCORE_ITEM : 0,
    nature: saved.natureKey === entry.nature ? SCORE_NATURE : 0,
    ev: overlap >= 2 ? SCORE_EV_BOTH : overlap === 1 ? SCORE_EV_ONE : 0,
    moves: Math.min(shared, MOVE_OVERLAP_CAP)
  }
}

function totalScore(c: Contributions): number {
  return c.ability + c.item + c.nature + c.ev + c.moves
}

function dominantReason(c: Contributions): MatchReason {
  const ranked: Array<[number, MatchReason]> = [
    [c.ability, 'ability-match'],
    [c.moves, 'moveset-overlap'],
    [c.item, 'item-match'],
    [c.nature, 'nature-match'],
    [c.ev, 'ev-spread-match']
  ]
  let best: [number, MatchReason] | null = null
  for (const candidate of ranked) {
    if (candidate[0] > 0 && (best === null || candidate[0] > best[0])) best = candidate
  }
  return best ? best[1] : 'primary-default'
}

function isEligible(entry: LoadedTemplateEntry): boolean {
  return entry.effectiveConfidence === 'optimo' || entry.effectiveConfidence === 'viable'
}

export function selectClosestTemplate(
  saved: SavedBuild,
  set: LoadedTemplateSet,
  _gameData: TemplateGameData
): TemplateMatch | null {
  const scored = set.entries
    .map((entry, order) => ({ entry, order }))
    .filter(({ entry }) => isEligible(entry))
    .map(({ entry, order }) => {
      const c = contributions(saved, entry)
      return { entry, order, c, score: totalScore(c) }
    })
  if (scored.length === 0) return null

  const maxScore = Math.max(...scored.map((s) => s.score))
  if (maxScore === 0) {
    const primary = scored.find((s) => s.entry.isPrimary) ?? scored[0]
    return { entry: primary.entry, matchReason: 'primary-default', score: 0 }
  }

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score
    if (a.entry.isPrimary !== b.entry.isPrimary) return a.entry.isPrimary ? -1 : 1
    return a.order - b.order
  })
  const winner = scored[0]
  return { entry: winner.entry, matchReason: dominantReason(winner.c), score: winner.score }
}

function arraysEqual(a: readonly number[], b: readonly number[]): boolean {
  return a.length === b.length && a.every((v, i) => v === b[i])
}

export function diffSavedVsTemplate(
  saved: SavedBuild,
  entry: LoadedTemplateEntry,
  gameData: TemplateGameData
): TemplateDiff {
  const rows: TemplateDiffRow[] = []
  const legal = gameData.legalMovepool(saved.internalName)
  const species = gameData.species(saved.internalName)
  const speciesAbilities = new Set((species?.abilities ?? []).map((a) => a.id))
  const abilityLabel = (id: string): string => gameData.abilityName(id) ?? id
  const itemLabel = (id: string): string => gameData.itemName(id) ?? id
  const moveLabel = (id: string): string => gameData.move(id)?.name ?? id

  rows.push({
    field: 'nature',
    status: saved.natureKey === entry.nature ? 'match' : 'differs',
    templateValue: natureLabel(entry.nature),
    savedValue: natureLabel(saved.natureKey)
  })

  let abilityStatus: DiffStatus
  if (saved.abilityId === entry.ability) abilityStatus = 'match'
  else if (gameData.abilityName(saved.abilityId) != null && speciesAbilities.has(saved.abilityId)) abilityStatus = 'acceptable-variant'
  else abilityStatus = 'differs'
  rows.push({ field: 'ability', status: abilityStatus, templateValue: abilityLabel(entry.ability), savedValue: abilityLabel(saved.abilityId) })

  let itemStatus: DiffStatus
  if (saved.itemId === entry.item) itemStatus = 'match'
  else if (gameData.itemName(saved.itemId) != null) itemStatus = 'acceptable-variant'
  else itemStatus = 'differs'
  rows.push({ field: 'item', status: itemStatus, templateValue: itemLabel(entry.item), savedValue: saved.itemId ? itemLabel(saved.itemId) : '' })

  rows.push({
    field: 'evs',
    status: arraysEqual(saved.evs, entry.evs) ? 'match' : 'differs',
    templateValue: evLabel(entry.evs),
    savedValue: evLabel(saved.evs)
  })
  rows.push({
    field: 'ivs',
    status: arraysEqual(saved.ivs, entry.ivs) ? 'match' : 'differs',
    templateValue: ivLabel(entry.ivs),
    savedValue: ivLabel(saved.ivs)
  })

  for (const mv of entry.moves) {
    const present = saved.moveIds.includes(mv)
    rows.push({
      field: 'move',
      key: mv,
      keyLabel: moveLabel(mv),
      status: present ? 'match' : 'differs',
      templateValue: moveLabel(mv),
      savedValue: present ? moveLabel(mv) : ''
    })
  }
  for (const mv of saved.moveIds) {
    if (entry.moves.includes(mv)) continue
    rows.push({
      field: 'move',
      key: mv,
      keyLabel: moveLabel(mv),
      status: legal.has(mv) ? 'acceptable-variant' : 'differs',
      templateValue: '',
      savedValue: moveLabel(mv)
    })
  }

  const c = contributions(saved, entry)
  return {
    role: entry.role,
    matchReason: dominantReason(c),
    rows,
    matchedCount: rows.filter((r) => r.status === 'match').length
  }
}
