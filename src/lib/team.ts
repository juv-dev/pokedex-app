import { POKEAPI, NATURE_ES, GENDER_ES } from './constants'
import {
  capitalizeWords,
  buildReverseSlugMap, computeTypeMatchups, computeSet, pickItem,
  pickMoveset, tryFetchPokeApi, anilLevelMoves
} from './engine'
import { getAnilSpecies, getAnilItemName, getAnilMove } from './anilData'
import type { MarshalUserObject, FoundPokemon } from './marshal'
import type { CompetitiveSet, MoveDetail, TypeMatchups, CurrentMove } from './types'

export interface TeamSummary {
  raw: MarshalUserObject
  internalName: string
  form?: number
  dexNum: number | null
  displayName: string
  nickname: string | null
  sprite: string
  types: string[]
  level: number | string
  isShiny: boolean
  speciesSlug: string
  isCustom: boolean
  ballId: string | null
  ballLabel: string
  inParty: boolean
  boxIndex: number | null
  boxName: string | null
  boxSlot: number | null
}

export async function fetchTeamSummary(found: FoundPokemon): Promise<TeamSummary | null> {
  const pokemon = found.obj
  const iv = pokemon.__ivars || {}
  const internalName = String(iv['@species'] || '')
  const sp = getAnilSpecies(internalName)
  if (!sp) return null

  const speciesMap = await buildReverseSlugMap('species', `${POKEAPI}/pokemon-species?limit=2000`)
  const resolved = await tryFetchPokeApi(internalName, speciesMap)
  const ballId = typeof iv['@poke_ball'] === 'string' ? iv['@poke_ball'] : null

  return {
    raw: pokemon,
    internalName,
    form: typeof iv['@form'] === 'number' ? (iv['@form'] as number) : 0,
    dexNum: resolved ? resolved.species.id : null,
    displayName: sp.name,
    nickname: (iv['@name'] as string) || null,
    sprite: resolved ? (resolved.pokeData.sprites?.other?.['official-artwork']?.front_default || resolved.pokeData.sprites?.front_default || '') : `/anil-sprites/${internalName.toLowerCase()}.png`,
    types: sp.types,
    level: (iv['@level'] as number) ?? '—',
    isShiny: !!iv['@shiny'],
    speciesSlug: resolved ? resolved.species.name : internalName.toLowerCase(),
    isCustom: !resolved,
    ballId,
    ballLabel: ballId ? getAnilItemName(ballId) : 'Poké Ball',
    inParty: found.inParty,
    boxIndex: found.boxIndex,
    boxName: found.boxName,
    boxSlot: found.boxSlot
  }
}

/** Orden y claves reales de Pokémon Essentials para @ev / @iv, verificado contra un save real. */
export const STAT_KEYS = ['HP', 'ATTACK', 'DEFENSE', 'SPECIAL_ATTACK', 'SPECIAL_DEFENSE', 'SPEED'] as const
export const STAT_KEY_LABELS: Record<string, string> = {
  HP: 'PS', ATTACK: 'Ataque', DEFENSE: 'Defensa',
  SPECIAL_ATTACK: 'Ataque Especial', SPECIAL_DEFENSE: 'Defensa Especial', SPEED: 'Velocidad'
}
export const EV_MAX_PER_STAT = 252
export const EV_MAX_TOTAL = 510
export const IV_MAX_PER_STAT = 31

const STATUS_ES: Record<string, string> = {
  NONE: 'Sin problemas de estado', SLEEP: 'Dormido', POISON: 'Envenenado',
  BURN: 'Quemado', PARALYSIS: 'Paralizado', FROZEN: 'Congelado', FAINT: 'Debilitado'
}

export interface TeamDetail {
  genus: string
  flavorText: string
  weightKg: string
  heightM: string
  natureLabel: string
  natureKey?: string
  genderLabel: string
  abilityLabel: string
  abilityId?: string
  itemLabel: string
  itemId?: string
  ballId: string | null
  ballLabel: string
  statusLabel: string
  happiness: number | null
  originalTrainer: string | null
  obtainLevel: number | null
  exp: number
  statsArr: number[]
  evs: number[]
  ivs: number[]
  evTotal: number
  matchups: TypeMatchups
  currentMoves: CurrentMove[]
  baseStats: number[]
}

export async function fetchTeamDetail(summary: TeamSummary): Promise<TeamDetail> {
  const iv = summary.raw.__ivars || {}
  const sp = getAnilSpecies(summary.internalName)!

  const rawNature = iv['@nature'] as string | undefined
  const natureLabel = rawNature ? (NATURE_ES[rawNature] ? `${NATURE_ES[rawNature]} (${capitalizeWords(rawNature.toLowerCase())})` : rawNature) : '—'
  const genderLabel = GENDER_ES[iv['@gender'] as number] || '—'

  const itemInternal = iv['@item'] as string | undefined
  const itemLabel = itemInternal ? getAnilItemName(itemInternal) : 'Ninguno'
  const ballInternal = summary.ballId || (iv['@poke_ball'] as string | undefined) || null
  const ballLabel = ballInternal ? getAnilItemName(ballInternal) : summary.ballLabel || '—'
  const abilityInternal = iv['@ability'] as string | undefined
  const abilityLabel = abilityInternal ? (sp.abilities.find(a => a.id === abilityInternal)?.name || capitalizeWords(abilityInternal.toLowerCase())) : '—'
  const abilityId = abilityInternal || undefined

  const statusRaw = (iv['@status'] as string) || 'NONE'
  const statusLabel = STATUS_ES[statusRaw] || capitalizeWords(statusRaw.toLowerCase())

  const ownerObj = iv['@owner'] as MarshalUserObject | undefined
  const originalTrainer = (ownerObj?.__ivars?.['@name'] as string) || null

  const rawMoves = ((iv['@moves'] as any[]) || []).map(m => m?.__ivars).filter(Boolean)
  const currentMoves: CurrentMove[] = rawMoves.map(mv => {
    const internal = String(mv['@id'] || '')
    const md = getAnilMove(internal)
    if (!md) return null
    const basePp = md.pp || 0
    const ppup = (mv['@ppup'] as number) || 0
    const maxPp = Math.floor(basePp + basePp * 0.2 * ppup)
    return {
      name: internal, label: md.name, type: md.type,
      damage_class: md.category.toLowerCase() as 'physical' | 'special' | 'status',
      power: md.power, accuracy: md.accuracy,
      currentPp: mv['@pp'] as number, maxPp
    } as CurrentMove
  }).filter((m): m is CurrentMove => m !== null)

  const statsArr = [
    (iv['@totalhp'] as number) ?? (iv['@hp'] as number) ?? 0,
    (iv['@attack'] as number) ?? 0, (iv['@defense'] as number) ?? 0,
    (iv['@spatk'] as number) ?? 0, (iv['@spdef'] as number) ?? 0, (iv['@speed'] as number) ?? 0
  ]

  const evMap = (iv['@ev'] as Record<string, number>) || {}
  const ivMap = (iv['@iv'] as Record<string, number>) || {}
  const evs = STAT_KEYS.map(k => evMap[k] ?? 0)
  const ivs = STAT_KEYS.map(k => ivMap[k] ?? 0)
  const evTotal = evs.reduce((a, b) => a + b, 0)

  const matchups = await computeTypeMatchups(summary.types)

  return {
    genus: sp.category, flavorText: sp.flavor,
    weightKg: sp.weightKg.toFixed(1), heightM: sp.heightM.toFixed(1),
    natureLabel, natureKey: rawNature || undefined, genderLabel, abilityLabel, abilityId,
    itemLabel, itemId: itemInternal || undefined, ballId: ballInternal, ballLabel, statusLabel,
    happiness: (iv['@happiness'] as number) ?? null,
    originalTrainer,
    obtainLevel: (iv['@obtain_level'] as number) ?? null,
    exp: (iv['@exp'] as number) || 0, statsArr, evs, ivs, evTotal, matchups,
    currentMoves,
    baseStats: sp.baseStats
  }
}

export async function fetchOptimalSet(internalName: string, types: string[]): Promise<{ set: CompetitiveSet; movesChosen: MoveDetail[] }> {
  const sp = getAnilSpecies(internalName)!
  const [hp, attack, defense, spa, spd, speed] = sp.baseStats
  const stats = { hp, attack, defense, 'special-attack': spa, 'special-defense': spd, speed }
  const set = computeSet({ stats, isMega: false })
  set.item = pickItem(set.classification.role, false, set.classification.baseSpeed)
  const movesDetailed: MoveDetail[] = Array.from(new Map(anilLevelMoves(sp).map(m => [m.name, m])).values())
  const movesChosen = pickMoveset(movesDetailed, types, set.classification.role, set.classification.mainOffense, set.item)
  return { set, movesChosen }
}
