import type { SavedBuild, LoadedTemplateEntry, StatSextet } from './types'

export type QualityTier = 'optimo' | 'viable' | 'ajustes'

const IV_MAX = 31
const EV_MAX = 252

function evSimilarity(saved: StatSextet, template: readonly number[]): number {
  let acc = 0
  for (let i = 0; i < 6; i++) {
    acc += 1 - Math.min(Math.abs((saved[i] ?? 0) - (template[i] ?? 0)), EV_MAX) / EV_MAX
  }
  return acc / 6
}

function ivQuality(ivs: StatSextet): number {
  const avg = ivs.reduce((a, b) => a + b, 0) / 6
  return Math.max(0, Math.min(avg / IV_MAX, 1))
}

function moveOverlap(savedMoves: readonly string[], templateMoves: readonly string[]): number {
  if (!templateMoves.length) return 1
  const saved = new Set(savedMoves)
  const shared = templateMoves.filter(m => saved.has(m)).length
  return shared / templateMoves.length
}

/** 0-100: how close the saved build is to the recommended template entry. Perfect match = 100. */
export function scoreBuild(saved: SavedBuild, entry: LoadedTemplateEntry): number {
  const nature = saved.natureKey === entry.nature ? 12 : 0
  const ability = saved.abilityId === entry.ability ? 10 : 0
  const item = saved.itemId === entry.item ? 10 : 0
  const ev = evSimilarity(saved.evs, entry.evs) * 28
  const iv = ivQuality(saved.ivs) * 10
  const moves = moveOverlap(saved.moveIds, entry.moves) * 30
  return Math.round(Math.max(0, Math.min(100, nature + ability + item + ev + iv + moves)))
}

export function qualityTier(score: number): QualityTier {
  if (score >= 90) return 'optimo'
  if (score >= 70) return 'viable'
  return 'ajustes'
}

export function qualityLabel(tier: QualityTier): string {
  return tier === 'optimo' ? 'Óptimo' : tier === 'viable' ? 'Viable' : 'Requiere ajustes'
}
