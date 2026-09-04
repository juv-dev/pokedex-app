import type {
  TemplateGameData, LoadedTemplateEntry, CompetitiveSet, MoveDetail, TemplateCardVM, TemplateTier,
  TemplateAlternative, TemplateAlternativeVM
} from './types'
import { ROLE_LABEL, NATURE_ES, NATURE_NUM } from './constants'
import { getAnilAbilityNumber, getAnilAbilityNumberByName, getAnilItemNumber, getAnilMoveNumber } from './anilData'

const SLOT_LABEL: Record<TemplateAlternative['slot'], string> = {
  ability: 'Habilidad',
  item: 'Objeto',
  nature: 'Naturaleza',
  move: 'Movimiento'
}

function withNumber(name: string, num: number | null): string {
  return num != null ? `${name} (n.º ${num})` : name
}

export const TIER_LABEL: Record<TemplateTier, string> = {
  optimo: 'Óptimo',
  viable: 'Viable',
  pendiente: 'Pendiente de validación',
  auto: 'Calculado'
}

const HEURISTIC_NOTE =
  'Set calculado automáticamente a partir de stats base y movepool real.'
const HEURISTIC_BANNER = ''
const PENDIENTE_BANNER = 'Plantilla degradada a pendiente de validación por la revisión automática.'

function resolveAbilityDisplay(abilityId: string, gameData: TemplateGameData): string {
  if (!abilityId) return ''
  const name = gameData.abilityName(abilityId) ?? abilityId
  const num = getAnilAbilityNumber(abilityId) ?? getAnilAbilityNumberByName(name)
  return num != null ? `${name} (n.º ${num})` : name
}

function natureDisplay(natureKey: string): string {
  const es = NATURE_ES[natureKey]
  if (!es) return natureKey
  const num = NATURE_NUM[natureKey]
  return num != null ? `${es} (n.º ${num})` : es
}

function moveDisplay(moveId: string, gameData: TemplateGameData): string {
  return withNumber(gameData.move(moveId)?.name ?? moveId, getAnilMoveNumber(moveId))
}

function itemDisplay(itemId: string, gameData: TemplateGameData): string {
  return withNumber(gameData.itemName(itemId) ?? itemId, getAnilItemNumber(itemId))
}

function alternativeVM(alt: TemplateAlternative, gameData: TemplateGameData): TemplateAlternativeVM {
  const valueDisplay =
    alt.slot === 'ability' ? resolveAbilityDisplay(alt.value, gameData)
      : alt.slot === 'item' ? itemDisplay(alt.value, gameData)
        : alt.slot === 'nature' ? natureDisplay(alt.value)
          : moveDisplay(alt.value, gameData)
  return {
    slotLabel: SLOT_LABEL[alt.slot],
    valueDisplay,
    replacesDisplay: alt.replaces ? moveDisplay(alt.replaces, gameData) : undefined,
    note: alt.note
  }
}

const CATEGORY_TO_DAMAGE_CLASS: Record<string, MoveDetail['damage_class']> = {
  Physical: 'physical',
  Special: 'special',
  Status: 'status'
}

export function templateMovesToDetails(moveIds: string[], gameData: TemplateGameData): MoveDetail[] {
  return moveIds.map((id) => {
    const data = gameData.move(id)
    return {
      name: id,
      label: data?.name ?? id,
      power: data?.power ?? null,
      accuracy: data?.accuracy ?? null,
      pp: data?.pp ?? undefined,
      type: data?.type ?? 'normal',
      damage_class: CATEGORY_TO_DAMAGE_CLASS[data?.category ?? ''] ?? 'status'
    }
  })
}

export function toCardVM(entry: LoadedTemplateEntry, gameData: TemplateGameData): TemplateCardVM {
  const tier: TemplateTier = entry.effectiveConfidence
  return {
    tier,
    tierLabel: TIER_LABEL[tier],
    roleId: entry.role,
    roleLabel: ROLE_LABEL[entry.role],
    abilityDisplay: resolveAbilityDisplay(entry.ability, gameData),
    itemDisplay: itemDisplay(entry.item, gameData),
    natureDisplay: natureDisplay(entry.nature),
    natureKey: String(entry.nature || '').toUpperCase(),
    evs: entry.evs,
    ivs: entry.ivs,
    moves: entry.moves.map((m) => moveDisplay(m, gameData)),
    moveIds: [...entry.moves],
    justification: entry.justification,
    note: '',
    bannerText: tier === 'pendiente' ? PENDIENTE_BANNER : '',
    isPrimary: entry.isPrimary,
    alternatives: entry.alternatives.map((a) => alternativeVM(a, gameData))
  }
}

export function heuristicToCardVM(
  set: CompetitiveSet,
  movesChosen: MoveDetail[],
  gameData: TemplateGameData,
  ability?: { id?: string; label?: string }
): TemplateCardVM {
  const abilitySource = set.ability && set.ability.id
    ? { id: set.ability.id, label: set.ability.name }
    : ability
  const abilityDisplay = abilitySource
    ? resolveAbilityDisplay(abilitySource.id ?? abilitySource.label ?? '', gameData)
    : ''
  return {
    tier: 'auto',
    tierLabel: TIER_LABEL.auto,
    roleId: set.classification.role,
    roleLabel: ROLE_LABEL[set.classification.role],
    abilityDisplay,
    itemDisplay: set.item,
    natureDisplay: set.nature,
    natureKey: String(set.natureKey || '').toUpperCase(),
    evs: set.evsArray as TemplateCardVM['evs'],
    ivs: set.ivsArray as TemplateCardVM['ivs'],
    moves: movesChosen.map((m) => m.label || m.name),
    moveIds: movesChosen.map((m) => m.name),
    justification: '',
    note: HEURISTIC_NOTE,
    bannerText: HEURISTIC_BANNER,
    isPrimary: false,
    alternatives: []
  }
}
