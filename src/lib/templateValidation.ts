import type {
  PokemonTemplateSet, CompetitiveTemplate, TemplateGameData,
  ValidationResult, ValidationIssue, ValidationCode, DowngradeOutcome
} from './types'
import { NATURE_TABLE, PHYSICAL_BOOSTS, SPECIAL_BOOSTS } from './constants'

const MAX_EV_SINGLE = 252
const MAX_EV_TOTAL = 510
const MIN_IV = 0
const MAX_IV = 31
const MIN_MOVES = 1
const MAX_MOVES = 4
const TECHNICIAN_BP_CEILING = 60

const CHOICE_ITEMS = new Set(['CHOICEBAND', 'CHOICESPECS', 'CHOICESCARF'])
const TECHNICIAN_ABILITIES = new Set(['TECHNICIAN'])
const WEATHER_ABILITIES = new Set(['DRIZZLE', 'DROUGHT', 'SANDSTREAM', 'SNOWWARNING', 'DESOLATELAND', 'PRIMORDIALSEA'])
const WEATHER_MOVES = new Set(['RAINDANCE', 'SUNNYDAY', 'SANDSTORM', 'HAIL', 'SNOWSCAPE', 'CHILLYRECEPTION'])
const SETUP_MOVES = new Set<string>([...PHYSICAL_BOOSTS, ...SPECIAL_BOOSTS])
const SPEED_RAISING_NATURES = new Set(NATURE_TABLE.filter((n) => n.raises === 'Velocidad').map((n) => n.key))

function issue(code: ValidationCode, severity: 'error' | 'warning', message: string, path: string): ValidationIssue {
  return { code, severity, message, path }
}

function evTotal(evs: readonly number[]): number {
  return evs.reduce((sum, v) => sum + v, 0)
}

function pushSynergyWarnings(
  entry: CompetitiveTemplate,
  gameData: TemplateGameData,
  base: string,
  issues: ValidationIssue[]
): void {
  if (TECHNICIAN_ABILITIES.has(entry.ability)) {
    const benefits = entry.moves.some((m) => {
      const md = gameData.move(m)
      return md != null && md.power != null && md.power > 0 && md.power <= TECHNICIAN_BP_CEILING
    })
    if (!benefits) {
      issues.push(issue('synergy-technician-power', 'warning',
        'Technician ability with no move at or below 60 BP to benefit from it.', `${base}.ability`))
    }
  }

  if (CHOICE_ITEMS.has(entry.item) && entry.moves.some((m) => SETUP_MOVES.has(m))) {
    issues.push(issue('synergy-choice-with-setup', 'warning',
      'Choice item paired with a setup move.', `${base}.item`))
  }

  if (entry.role === 'trick-room-setter' && SPEED_RAISING_NATURES.has(entry.nature)) {
    issues.push(issue('synergy-trickroom-fast-nature', 'warning',
      'Trick Room role with a Speed-raising nature.', `${base}.nature`))
  }

  if (entry.role === 'weather-setter') {
    const hasSource = WEATHER_ABILITIES.has(entry.ability) || entry.moves.some((m) => WEATHER_MOVES.has(m))
    if (!hasSource) {
      issues.push(issue('synergy-weather-without-source', 'warning',
        'Weather role with no weather-setting move or ability on the set.', base))
    }
  }
}

export function validateTemplate(
  set: PokemonTemplateSet,
  gameData: TemplateGameData,
  expectedKey?: string
): ValidationResult {
  const issues: ValidationIssue[] = []
  const species = gameData.species(set.internalName)

  if (expectedKey != null && expectedKey !== set.internalName) {
    issues.push(issue('registry-key-mismatch', 'error',
      `Registry key "${expectedKey}" does not match module internalName "${set.internalName}".`, 'internalName'))
  }
  if (!species) {
    issues.push(issue('unknown-species', 'error', `Unknown species "${set.internalName}".`, 'internalName'))
  }

  const primaryCount = set.templates.filter((t) => t.isPrimary).length
  if (primaryCount !== 1) {
    issues.push(issue('primary-count', 'error',
      `Expected exactly one primary entry, found ${primaryCount}.`, 'templates'))
  }

  const legal = gameData.legalMovepool(set.internalName)
  const speciesAbilities = new Set((species?.abilities ?? []).map((a) => a.id))

  set.templates.forEach((entry, i) => {
    const base = `templates[${i}]`

    if (!gameData.roleIds.has(entry.role)) {
      issues.push(issue('unknown-role', 'error', `Unknown role "${entry.role}".`, `${base}.role`))
    }

    const abilityName = gameData.abilityName(entry.ability)
    if (abilityName == null) {
      issues.push(issue('unknown-ability', 'error', `Unknown ability "${entry.ability}".`, `${base}.ability`))
    } else if (species && !speciesAbilities.has(entry.ability)) {
      issues.push(issue('ability-not-on-species', 'error',
        `Ability "${entry.ability}" is not available on ${set.internalName}.`, `${base}.ability`))
    }

    if (gameData.itemName(entry.item) == null) {
      issues.push(issue('unknown-item', 'error', `Unknown item "${entry.item}".`, `${base}.item`))
    }

    if (entry.moves.length < MIN_MOVES || entry.moves.length > MAX_MOVES) {
      issues.push(issue('move-count', 'error',
        `Entry must declare ${MIN_MOVES}-${MAX_MOVES} moves, found ${entry.moves.length}.`, `${base}.moves`))
    }
    const seen = new Set<string>()
    entry.moves.forEach((mv, j) => {
      const movePath = `${base}.moves[${j}]`
      if (seen.has(mv)) {
        issues.push(issue('duplicate-move', 'error', `Duplicate move "${mv}".`, movePath))
      }
      seen.add(mv)
      if (gameData.move(mv) == null) {
        issues.push(issue('unknown-move', 'error', `Unknown move "${mv}".`, movePath))
      } else if (!legal.has(mv)) {
        issues.push(issue('illegal-move', 'error',
          `Move "${mv}" is not in the legal movepool for ${set.internalName}.`, movePath))
      }
    })

    if (!gameData.natureKeys.has(entry.nature)) {
      issues.push(issue('unknown-nature', 'error', `Unknown nature "${entry.nature}".`, `${base}.nature`))
    }

    if (entry.evs.some((v) => v > MAX_EV_SINGLE)) {
      issues.push(issue('ev-single-over-max', 'error', `A single EV exceeds ${MAX_EV_SINGLE}.`, `${base}.evs`))
    }
    if (evTotal(entry.evs) > MAX_EV_TOTAL) {
      issues.push(issue('ev-total-over-max', 'error', `EV total exceeds ${MAX_EV_TOTAL}.`, `${base}.evs`))
    }
    if (entry.ivs.some((v) => v < MIN_IV || v > MAX_IV)) {
      issues.push(issue('iv-out-of-range', 'error', `An IV falls outside ${MIN_IV}-${MAX_IV}.`, `${base}.ivs`))
    }

    if (entry.justification.trim().length === 0) {
      issues.push(issue('missing-justification', 'error', 'Entry justification is empty.', `${base}.justification`))
    }

    if (entry.confidence === 'pendiente' && entry.isPrimary) {
      issues.push(issue('pendiente-cannot-be-primary', 'error',
        'A pendiente entry cannot be the primary.', base))
    }

    pushSynergyWarnings(entry, gameData, base, issues)
  })

  const errors = issues.filter((x) => x.severity === 'error')
  const warnings = issues.filter((x) => x.severity === 'warning')
  return { ok: errors.length === 0, issues, errors, warnings }
}

export function applyConfidenceDowngrade(
  entry: CompetitiveTemplate,
  result: ValidationResult
): DowngradeOutcome {
  const reasons: ValidationCode[] = []
  for (const err of result.errors) {
    if (!reasons.includes(err.code)) reasons.push(err.code)
  }
  if (entry.justification.trim().length === 0 && !reasons.includes('missing-justification')) {
    reasons.push('missing-justification')
  }
  const downgraded = reasons.length > 0
  return {
    effectiveConfidence: downgraded ? 'pendiente' : entry.confidence,
    downgraded,
    reasons
  }
}

export async function validateAllTemplates(
  gameData: TemplateGameData,
  loaders: ReadonlyMap<string, () => Promise<{ default: PokemonTemplateSet }>>
): Promise<Map<string, ValidationResult>> {
  const out = new Map<string, ValidationResult>()
  for (const [key, load] of loaders) {
    const mod = await load()
    out.set(key, validateTemplate(mod.default, gameData, key))
  }
  return out
}
