import { getAnilSpecies, getAnilMove } from './anilData'
import { computeSet, movesDetailedFromPool, pickMoveset } from './engine'
import { resolveCompetitiveTemplate, buildGameData } from './templateRegistry'
import { legalMovepool } from './movepool'
import type { StatMap } from './types'
import type { AnilMegaForm } from './anilData'

export interface MoveTarget {
  id: string
  pp: number
}

export interface RecommendedSet {
  source: 'template' | 'heuristic'
  tier: string
  referenceFrom: string | null
  megaFormName: string | null
  base: number[]
  evs: number[]
  ivs: number[]
  moves: MoveTarget[]
  nature: string | null
  item: string | null
  ability: string | null
}

export interface MegaOption {
  formName: string
  megaStone: string | null
  megaStoneName: string | null
  megaMove: string | null
}

function statMap(base: number[]): StatMap {
  return {
    hp: base[0],
    attack: base[1],
    defense: base[2],
    'special-attack': base[3],
    'special-defense': base[4],
    speed: base[5]
  }
}

function moveTarget(id: string): MoveTarget {
  return { id, pp: getAnilMove(id)?.pp ?? 5 }
}

/** Mega forms of a species, in declaration order (empty when it has none). */
export function megaOptionsFor(internalName: string): MegaOption[] {
  const sp = getAnilSpecies(internalName)
  if (!sp) return []
  return sp.megas
    .filter((m): m is AnilMegaForm & { formName: string } => !!m.formName)
    .map(m => ({ formName: m.formName, megaStone: m.megaStone, megaStoneName: m.megaStoneName, megaMove: m.megaMove }))
}

function heuristicSet(internalName: string): RecommendedSet | null {
  const sp = getAnilSpecies(internalName)
  if (!sp || !sp.baseStats || sp.baseStats.length < 6) return null
  const set = computeSet({ stats: statMap(sp.baseStats), isMega: false })
  const pool = [...legalMovepool(internalName, buildGameData())]
  const detailed = movesDetailedFromPool(pool, getAnilMove)
  const chosen = pickMoveset(detailed, sp.types, set.classification.role, set.classification.mainOffense, set.item)
  return {
    source: 'heuristic',
    tier: 'viable',
    referenceFrom: null,
    megaFormName: null,
    base: sp.baseStats.slice(0, 6),
    evs: set.evsArray,
    ivs: set.ivsArray,
    moves: chosen.slice(0, 4).map(m => moveTarget(m.name)),
    nature: set.natureKey ?? null,
    item: null,
    ability: set.ability?.id || null
  }
}

/**
 * Set tuned for a mega form: EVs, IVs, nature, moves and ability come from the mega's stats and
 * typing, and the held item is its Mega Stone. `base` stays the base species' stats because the
 * stored, out-of-battle Pokémon is still the base form (the game re-derives mega stats in battle).
 */
function megaSet(internalName: string, formName: string): RecommendedSet | null {
  const sp = getAnilSpecies(internalName)
  if (!sp || !sp.baseStats || sp.baseStats.length < 6) return null
  const mega = sp.megas.find(m => m.formName === formName)
  if (!mega) return null

  const megaStats = mega.baseStats && mega.baseStats.length >= 6 ? mega.baseStats : sp.baseStats
  const megaTypes = mega.types && mega.types.length ? mega.types : sp.types
  const set = computeSet({ stats: statMap(megaStats), isMega: true, megaStone: mega.megaStoneName })

  const pool = [...legalMovepool(internalName, buildGameData())]
  const detailed = movesDetailedFromPool(pool, getAnilMove)
  let chosen = pickMoveset(detailed, megaTypes, set.classification.role, set.classification.mainOffense, set.item)
    .slice(0, 4)
    .map(m => m.name)
  if (mega.megaMove && !chosen.includes(mega.megaMove)) {
    chosen = [mega.megaMove, ...chosen].slice(0, 4)
  }

  return {
    source: 'heuristic',
    tier: 'mega',
    referenceFrom: null,
    megaFormName: formName,
    base: sp.baseStats.slice(0, 6),
    evs: set.evsArray,
    ivs: set.ivsArray,
    moves: chosen.map(moveTarget),
    nature: set.natureKey ?? null,
    item: mega.megaStone,
    ability: mega.abilities && mega.abilities.length ? mega.abilities[0] : set.ability?.id || null
  }
}

async function templateSet(internalName: string): Promise<RecommendedSet | null> {
  const resolved = await resolveCompetitiveTemplate(internalName)
  if (!resolved) return null
  const entries = resolved.loaded.entries
  const entry = entries.find(e => e.isPrimary) ?? entries[0]
  const sp = getAnilSpecies(internalName)
  const base = sp && sp.baseStats && sp.baseStats.length >= 6 ? sp.baseStats.slice(0, 6) : null
  if (!base || !entry || !Array.isArray(entry.evs) || !Array.isArray(entry.ivs) || !Array.isArray(entry.moves) || entry.moves.length === 0) {
    return null
  }
  return {
    source: 'template',
    tier: entry.effectiveConfidence ?? entry.confidence ?? 'optimo',
    referenceFrom: resolved.referenceFrom,
    megaFormName: null,
    base,
    evs: entry.evs.slice(0, 6),
    ivs: entry.ivs.slice(0, 6),
    moves: entry.moves.slice(0, 4).map(moveTarget),
    nature: entry.nature ?? null,
    item: entry.item ?? null,
    ability: entry.ability ?? null
  }
}

/**
 * The competitive set the sheet would show for a species: a curated template entry when one
 * exists (possibly inherited from its evolution family), otherwise the heuristic build. Pass a
 * mega form name to get the mega-tuned build instead (full item/ability/nature/EV/IV/moves).
 */
export async function recommendedSetFor(
  internalName: string,
  opts: { megaFormName?: string | null } = {}
): Promise<RecommendedSet | null> {
  if (opts.megaFormName) {
    try {
      return megaSet(internalName, opts.megaFormName)
    } catch {
      return null
    }
  }
  try {
    const t = await templateSet(internalName)
    if (t) return t
  } catch {
    /* fall through to heuristic */
  }
  try {
    return heuristicSet(internalName)
  } catch {
    return null
  }
}
