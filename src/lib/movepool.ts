import type { TemplateGameData } from './types'
import { preEvolutionIndex } from './anilData'

const LINEAGE_DEPTH_CAP = 10

function defaultParentOf(internalName: string): string | null {
  return preEvolutionIndex().get(internalName) ?? null
}

export function preEvolutionLineage(internalName: string, gameData: TemplateGameData): string[] {
  const parentOf = gameData.preEvolutionParent ?? defaultParentOf
  const lineage: string[] = [internalName]
  const visited = new Set<string>([internalName])
  let current = internalName
  for (let depth = 0; depth < LINEAGE_DEPTH_CAP; depth++) {
    const parent = parentOf(current)
    if (!parent || visited.has(parent)) break
    lineage.push(parent)
    visited.add(parent)
    current = parent
  }
  return lineage
}

const movepoolCache = new WeakMap<TemplateGameData, Map<string, Set<string>>>()

export function legalMovepool(internalName: string, gameData: TemplateGameData): Set<string> {
  let perData = movepoolCache.get(gameData)
  if (!perData) {
    perData = new Map<string, Set<string>>()
    movepoolCache.set(gameData, perData)
  }
  const cached = perData.get(internalName)
  if (cached) return cached

  const pool = new Set<string>()
  for (const stage of preEvolutionLineage(internalName, gameData)) {
    const found = gameData.species(stage)
    if (!found) continue
    for (const lm of found.levelMoves) pool.add(lm.move)
    for (const tm of found.tutorMoves ?? []) pool.add(tm)
    for (const em of found.eggMoves ?? []) pool.add(em)
  }
  perData.set(internalName, pool)
  return pool
}
