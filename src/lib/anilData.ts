import pokedexRaw from '../data/anil-pokedex.json'
import movesRaw from '../data/anil-moves.json'
import moveNumbersRaw from '../data/anil-move-numbers.json'
import itemsRaw from '../data/anil-items.json'
import itemNumbersRaw from '../data/anil-item-numbers.json'
import abilitiesRaw from '../data/anil-abilities.json'
import abilityNumbersRaw from '../data/anil-ability-numbers.json'
import abilityDetailsRaw from '../data/anil-ability-details.json'
import itemDetailsRaw from '../data/anil-item-details.json'
import anilSchemaRaw from '../data/anil-schema.json'

export interface AnilEvolution { target: string; method: string; param: string | null }
export interface AnilLevelMove { level: number; move: string }
export interface AnilMegaForm {
  formName: string | null
  megaStone: string | null
  megaStoneName: string | null
  megaMove: string | null
  baseStats: number[] | null
  types: string[] | null
  abilities: string[] | null
}
export interface AnilSpecies {
  name: string
  types: string[]
  baseStats: number[]
  category: string
  flavor: string
  heightM: number
  weightKg: number
  abilities: Array<{ id: string; name: string; hidden: boolean }>
  catchRate: number | null
  happiness: number | null
  growthRate: string | null
  eggGroups: string[]
  genderRatio: string | null
  baseExp: number | null
  evolutions: AnilEvolution[]
  megas: AnilMegaForm[]
  tutorMoves: string[]
  eggMoves: string[]
  levelMoves: AnilLevelMove[]
}
export interface AnilMoveData {
  name: string
  type: string
  category: string
  power: number | null
  accuracy: number | null
  pp: number | null
  description: string
  functionCode: string
  flags: string[]
  priority: number
  target: string
  effectChance: number | null
}
export interface AnilAbilityDetail { name: string; description: string; flags: string[] }
export interface AnilItemDetail { name: string; description: string; flags: string[]; pocket: string | null }

const pokedex = pokedexRaw as unknown as Record<string, AnilSpecies>
const movesData = movesRaw as unknown as Record<string, AnilMoveData>
const moveNumbers = moveNumbersRaw as Record<string, number>
const itemNames = itemsRaw as Record<string, string>
const itemNumbers = itemNumbersRaw as Record<string, number>
const abilityNames = abilitiesRaw as Record<string, string>
const abilityNumbers = abilityNumbersRaw as Record<string, number>
const abilityDetails = abilityDetailsRaw as unknown as Record<string, AnilAbilityDetail>
const itemDetails = itemDetailsRaw as unknown as Record<string, AnilItemDetail>

export const ANIL_SCHEMA_VERSION = 2

interface AnilSchemaShape {
  version?: unknown
  sampleSpecies?: { tutorMoves?: unknown; eggMoves?: unknown } | null
}

/**
 * Verifica que los datos de Añil traen la forma esperada por el sistema de plantillas.
 * Con `shape` explícito valida ese objeto; sin argumentos valida los JSON committeados.
 * Lanza un Error nombrando cada campo ausente en lugar de dejar movepools vacíos en silencio.
 */
export function assertAnilSchema(shape?: AnilSchemaShape): void {
  const firstKey = Object.keys(pokedex)[0]
  const resolved: AnilSchemaShape = shape ?? {
    version: (anilSchemaRaw as { version?: unknown }).version,
    sampleSpecies: (firstKey ? pokedex[firstKey] : null) as AnilSchemaShape['sampleSpecies']
  }
  const missing: string[] = []
  if (typeof resolved.version !== 'number') missing.push('version')
  const sample = resolved.sampleSpecies
  if (!sample || !Array.isArray(sample.tutorMoves)) missing.push('tutorMoves')
  if (!sample || !Array.isArray(sample.eggMoves)) missing.push('eggMoves')
  if (missing.length > 0) {
    throw new Error(`anil-schema: missing or invalid field(s): ${missing.join(', ')}`)
  }
}

const itemNumberByName = new Map<string, number>()
for (const [id, name] of Object.entries(itemNames)) {
  const num = itemNumbers[id]
  if (num != null) itemNumberByName.set(name.toLowerCase(), num)
}
const abilityNumberByName = new Map<string, number>()
for (const [id, name] of Object.entries(abilityNames)) {
  const num = abilityNumbers[id]
  if (num != null && !abilityNumberByName.has(name.toLowerCase())) abilityNumberByName.set(name.toLowerCase(), num)
}

/** Especies cuyo nombre interno de Añil no calza con el slug estándar de PokéAPI. */
const SPECIES_SLUG_OVERRIDES: Record<string, string> = {
  NIDORANFE: 'nidoran-f',
  NIDORANMA: 'nidoran-m'
}

export function getAnilSpecies(internalName: string): AnilSpecies | null {
  return pokedex[internalName] || null
}
export function allAnilSpecies(): Record<string, AnilSpecies> {
  return pokedex
}

let preEvoIndexCache: Map<string, string> | null = null
/** Invierte una sola vez todas las aristas `evolutions` en un `Map<hijo, padre inmediato>`. */
export function preEvolutionIndex(): Map<string, string> {
  if (preEvoIndexCache) return preEvoIndexCache
  const index = new Map<string, string>()
  for (const [parent, sp] of Object.entries(pokedex)) {
    for (const evo of sp.evolutions) {
      if (evo.target && !index.has(evo.target)) index.set(evo.target, parent)
    }
  }
  preEvoIndexCache = index
  return index
}

/** Sube por la cadena evolutiva real hasta encontrar la forma base (nadie más evoluciona a esta especie). */
export function findRootInternalName(internalName: string): string {
  const index = preEvolutionIndex()
  let current = internalName
  const visited = new Set<string>([current])
  for (let i = 0; i < 10; i++) {
    const parent = index.get(current)
    if (!parent || visited.has(parent)) break
    current = parent
    visited.add(parent)
  }
  return current
}
export function getAnilMove(internalName: string): AnilMoveData | null {
  return movesData[internalName] || null
}
export function getAnilMoveNumber(internalName: string): number | null {
  return moveNumbers[internalName] ?? null
}
export function getAnilItemName(internalName: string): string {
  return itemNames[internalName] || internalName
}
export function getAnilAbilityName(internalName: string): string {
  const key = internalName.trim()
  return abilityNames[key] || key
}
/** Estricta: devuelve `null` cuando el id no existe, para poder probar existencia real. */
export function lookupAnilAbilityName(internalName: string): string | null {
  return abilityDetails[internalName.trim()]?.name ?? null
}
/** Detalle completo de la habilidad (nombre, descripción en español, flags) o `null` si no existe. */
export function getAnilAbilityDetail(internalName: string): AnilAbilityDetail | null {
  return abilityDetails[internalName.trim()] ?? null
}
/** Estricta: devuelve `null` cuando el id no existe, para poder probar existencia real. */
export function lookupAnilItemName(internalName: string): string | null {
  return itemDetails[internalName]?.name ?? null
}
export function getAnilAbilityNumber(internalName: string): number | null {
  return abilityNumbers[internalName.trim()] ?? null
}
export function getAnilItemNumber(internalName: string): number | null {
  return itemNumbers[internalName] ?? null
}
export function getAnilItemNumberByName(displayName: string): number | null {
  return itemNumberByName.get(String(displayName).toLowerCase()) ?? null
}
export function getAnilAbilityNumberByName(displayName: string): number | null {
  return abilityNumberByName.get(String(displayName).toLowerCase()) ?? null
}
export function anilSlugOverride(internalName: string): string | null {
  return SPECIES_SLUG_OVERRIDES[internalName.replace(/_/g, '').toUpperCase()] || null
}

const CAT_ES: Record<string, string> = { Physical: 'Físico', Special: 'Especial', Status: 'Estado' }
export function anilMoveCategoryEs(category: string): string {
  return CAT_ES[category] || category
}

export function evoMethodLabel(method: string, param: string | null): string {
  const item = param ? getAnilItemName(param) : ''
  switch (method) {
    case 'Level': return `Evoluciona subiendo de nivel — nivel ${param}`
    case 'LevelMale': return `Evoluciona subiendo de nivel (macho) — nivel ${param}`
    case 'LevelFemale': return `Evoluciona subiendo de nivel (hembra) — nivel ${param}`
    case 'Item': return `Evoluciona con objeto — usando ${item}`
    case 'Happiness': return 'Evoluciona subiendo de nivel — felicidad alta'
    case 'HappinessDay': return 'Evoluciona subiendo de nivel — felicidad alta, de día'
    case 'HappinessNight': return 'Evoluciona subiendo de nivel — felicidad alta, de noche'
    case 'HappinessMoveType': return 'Evoluciona subiendo de nivel — felicidad alta, conociendo cierto tipo de movimiento'
    case 'DayHoldItem': return `Evoluciona subiendo de nivel — de día, llevando ${item}`
    case 'NightHoldItem': return `Evoluciona subiendo de nivel — de noche, llevando ${item}`
    case 'TradeItem': return `Evoluciona por intercambio — llevando ${item}`
    case 'Trade': return 'Evoluciona por intercambio'
    case 'HasMove': return `Evoluciona subiendo de nivel — sabiendo cierto movimiento`
    case 'LocationMap': return 'Evoluciona subiendo de nivel — en cierta zona'
    default: return `Evoluciona subiendo de nivel${param ? ' — ' + method + ' ' + param : ' — ' + method}`
  }
}
