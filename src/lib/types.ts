import type { AnilSpecies, AnilMoveData } from './anilData'
import type { RoleId } from './constants'

export type StatMap = Record<string, number>

export interface PokeNamedResource {
  name: string
  url: string
}

export interface DexNode {
  internalName: string
  /** internalName de la especie de la que evoluciona/mega-evoluciona, o null si es la forma base de la línea. */
  parentInternalName: string | null
  dexNum: number | null
  displayName: string
  genus: string
  flavorText: string
  weightKg: string
  heightM: string
  evoLabel: string
  stageKind: 'base' | 'evo' | 'mega'
  sprite: string
  types: string[]
  stats: StatMap
  moveRefs: PokeNamedResource[]
  pokeMoves: PokeApiMoveEntry[]
  /** Si viene poblado (Pokémon exclusivo de Añil sin equivalente en PokéAPI), reemplaza el cálculo de movepool vía PokéAPI. */
  customLevelMoves?: LevelMove[]
  abilities: PokeApiAbilityEntry[]
  genderRate: number
  captureRate: number | null
  baseHappiness: number | null
  baseExperience: number | null
  eggGroups: PokeNamedResource[]
  isMega: boolean
  megaStone?: string | null
  speciesSlug: string
  isCustom: boolean
}

export interface PokeApiMoveEntry {
  move: PokeNamedResource
  version_group_details: Array<{
    level_learned_at: number
    move_learn_method: PokeNamedResource
    version_group: PokeNamedResource
  }>
}

export interface PokeApiAbilityEntry {
  ability: PokeNamedResource
  is_hidden: boolean
  anilId?: string
}

export type Role =
  | 'sweeper-physical'
  | 'sweeper-special'
  | 'breaker-physical'
  | 'breaker-special'
  | 'mixed'
  | 'wall-physical'
  | 'wall-special'

export interface RoleClassification {
  role: Role
  mainOffense: 'attack' | 'special-attack'
  baseSpeed: number
}

export interface CompetitiveSet {
  classification: RoleClassification
  nature: string
  natureKey: string
  evs: string
  evsArray: number[]
  ivs: string
  ivsArray: number[]
  item: string
  ability: { id: string; name: string }
}

export interface MoveDetail {
  id?: number
  name: string
  label: string
  power: number | null
  accuracy: number | null
  pp?: number
  type: string
  damage_class: 'physical' | 'special' | 'status'
  stab?: boolean
  score?: number
  isBoost?: boolean
  isRecovery?: boolean
  isUtility?: boolean
  isHazard?: boolean
}

export interface LevelMove extends MoveDetail {
  level: number
}

export interface CurrentMove extends MoveDetail {
  currentPp?: number
  maxPp?: number
}

export interface TypeMatchups {
  weak: Array<[string, number]>
  resist: Array<[string, number]>
  immune: Array<[string, number]>
  superEff: Array<[string, number]>
}

export type Confidence = 'optimo' | 'viable' | 'pendiente'
export type TemplateTier = Confidence | 'auto'
export type ValidationSeverity = 'error' | 'warning'

export type ValidationCode =
  | 'unknown-species'
  | 'registry-key-mismatch'
  | 'unknown-role'
  | 'unknown-ability'
  | 'ability-not-on-species'
  | 'unknown-item'
  | 'unknown-move'
  | 'illegal-move'
  | 'duplicate-move'
  | 'move-count'
  | 'unknown-nature'
  | 'ev-single-over-max'
  | 'ev-total-over-max'
  | 'iv-out-of-range'
  | 'missing-justification'
  | 'primary-count'
  | 'pendiente-cannot-be-primary'
  | 'synergy-technician-power'
  | 'synergy-choice-with-setup'
  | 'synergy-trickroom-fast-nature'
  | 'synergy-weather-without-source'

export interface ValidationIssue {
  code: ValidationCode
  severity: ValidationSeverity
  message: string
  path: string
}

export interface ValidationResult {
  ok: boolean
  issues: ValidationIssue[]
  errors: ValidationIssue[]
  warnings: ValidationIssue[]
}

export interface TemplateGameData {
  species: (n: string) => AnilSpecies | null
  move: (n: string) => AnilMoveData | null
  abilityName: (n: string) => string | null
  itemName: (n: string) => string | null
  legalMovepool: (n: string) => Set<string>
  natureKeys: ReadonlySet<string>
  roleIds: ReadonlySet<RoleId>
  preEvolutionParent?: (n: string) => string | null
}

export interface DowngradeOutcome {
  effectiveConfidence: Confidence
  downgraded: boolean
  reasons: ValidationCode[]
}

export type StatSextet = [number, number, number, number, number, number]

export type AlternativeSlot = 'ability' | 'item' | 'nature' | 'move'

export interface TemplateAlternative {
  slot: AlternativeSlot
  value: string
  note: string
  replaces?: string
}

export interface CompetitiveTemplate {
  role: RoleId
  isPrimary: boolean
  confidence: Confidence
  ability: string
  item: string
  nature: string
  evs: StatSextet
  ivs: StatSextet
  moves: string[]
  justification: string
  alternatives: TemplateAlternative[]
}

export interface PokemonTemplateSet {
  internalName: string
  templates: CompetitiveTemplate[]
}

export interface LoadedTemplateEntry extends CompetitiveTemplate {
  effectiveConfidence: Confidence
  downgraded: boolean
  reasons: ValidationCode[]
}

export type TemplateState = 'ready' | 'error'

export interface LoadedTemplateSet {
  internalName: string
  entries: LoadedTemplateEntry[]
  templateState?: TemplateState
  issues?: ValidationIssue[]
}

export type DiffField = 'nature' | 'ability' | 'item' | 'evs' | 'ivs' | 'move'
export type DiffStatus = 'match' | 'differs' | 'acceptable-variant'

export interface TemplateDiffRow {
  field: DiffField
  key?: string
  keyLabel?: string
  status: DiffStatus
  templateValue: string
  savedValue: string
  detail?: string
}

export type MatchReason =
  | 'primary-default'
  | 'ability-match'
  | 'item-match'
  | 'nature-match'
  | 'ev-spread-match'
  | 'moveset-overlap'

export interface TemplateMatch {
  entry: LoadedTemplateEntry
  matchReason: MatchReason
  score: number
}

export interface TemplateDiff {
  role: RoleId
  matchReason: MatchReason
  rows: TemplateDiffRow[]
  matchedCount: number
}

export interface SavedBuild {
  internalName: string
  natureKey: string
  abilityId: string
  itemId: string
  evs: StatSextet
  ivs: StatSextet
  moveIds: string[]
}

export interface TemplateAlternativeVM {
  slotLabel: string
  valueDisplay: string
  replacesDisplay?: string
  note: string
}

export interface TemplateCardVM {
  tier: TemplateTier
  tierLabel: string
  roleId: RoleId
  roleLabel: string
  abilityDisplay: string
  itemDisplay: string
  natureDisplay: string
  natureKey: string
  evs: StatSextet
  ivs: StatSextet
  moves: string[]
  moveIds: string[]
  justification: string
  note: string
  bannerText: string
  isPrimary: boolean
  alternatives: TemplateAlternativeVM[]
}
