import type {
  TemplateGameData, LoadedTemplateSet, LoadedTemplateEntry, TemplateState,
  PokemonTemplateSet, ValidationResult, ValidationIssue
} from './types'
import type { RoleId } from './constants'
import { NATURE_TABLE, ROLE_REGISTRY } from './constants'
import {
  getAnilSpecies, getAnilMove, lookupAnilAbilityName, lookupAnilItemName,
  preEvolutionIndex, assertAnilSchema
} from './anilData'
import { legalMovepool } from './movepool'
import { validateTemplate, applyConfidenceDowngrade } from './templateValidation'
import { TEMPLATE_LOADERS, type TemplateLoader } from '../data/templates'

export { validateAllTemplates } from './templateValidation'

let gameDataSingleton: TemplateGameData | null = null

export function buildGameData(): TemplateGameData {
  if (gameDataSingleton) return gameDataSingleton
  const gameData: TemplateGameData = {
    species: (n) => getAnilSpecies(n),
    move: (n) => getAnilMove(n),
    abilityName: (n) => lookupAnilAbilityName(n),
    itemName: (n) => lookupAnilItemName(n),
    legalMovepool: (n) => legalMovepool(n, gameData),
    natureKeys: new Set(NATURE_TABLE.map((n) => n.key)),
    roleIds: new Set(Object.keys(ROLE_REGISTRY) as RoleId[]),
    preEvolutionParent: (n) => preEvolutionIndex().get(n) ?? null
  }
  gameDataSingleton = gameData
  return gameData
}

function scopeResultToEntry(result: ValidationResult, index: number): ValidationResult {
  const prefix = `templates[${index}]`
  const owned = (issue: ValidationIssue): boolean =>
    issue.path === prefix || issue.path.startsWith(`${prefix}.`) || issue.path.startsWith(`${prefix}[`)
  const issues = result.issues.filter(owned)
  const errors = issues.filter((i) => i.severity === 'error')
  const warnings = issues.filter((i) => i.severity === 'warning')
  return { ok: errors.length === 0, issues, errors, warnings }
}

function toLoadedSet(
  set: PokemonTemplateSet,
  gameData: TemplateGameData,
  expectedKey: string,
  templateState: TemplateState
): LoadedTemplateSet {
  const result = validateTemplate(set, gameData, expectedKey)
  const entries: LoadedTemplateEntry[] = set.templates.map((template, index) => {
    const outcome = applyConfidenceDowngrade(template, scopeResultToEntry(result, index))
    return {
      ...template,
      effectiveConfidence: outcome.effectiveConfidence,
      downgraded: outcome.downgraded,
      reasons: outcome.reasons
    }
  })
  return { internalName: set.internalName, entries, templateState, issues: result.issues }
}

const setCache = new Map<string, Promise<LoadedTemplateSet | null>>()

export function loadTemplateSet(
  internalName: string,
  loaders: ReadonlyMap<string, TemplateLoader> = TEMPLATE_LOADERS,
  assertSchema: () => void = assertAnilSchema
): Promise<LoadedTemplateSet | null> {
  const memoize = loaders === TEMPLATE_LOADERS && assertSchema === assertAnilSchema
  if (memoize) {
    const hit = setCache.get(internalName)
    if (hit) return hit
  }
  const pending = resolveTemplateSet(internalName, loaders, assertSchema)
  if (memoize) setCache.set(internalName, pending)
  return pending
}

export async function resolveCompetitiveTemplate(
  internalName: string,
  loaders: ReadonlyMap<string, TemplateLoader> = TEMPLATE_LOADERS,
  assertSchema: () => void = assertAnilSchema
): Promise<{ loaded: LoadedTemplateSet; referenceFrom: string | null } | null> {
  const own = await loadTemplateSet(internalName, loaders, assertSchema)
  if (own !== null) return { loaded: own, referenceFrom: null }

  const evolutionTargets = (name: string): string[] =>
    (getAnilSpecies(name)?.evolutions ?? []).map((evo) => evo.target).filter((target) => target.length > 0)

  const visited = new Set<string>([internalName])
  let level = evolutionTargets(internalName)

  for (let depth = 0; depth < 4 && level.length > 0; depth++) {
    const names = level.filter((name) => !visited.has(name))
    for (const name of names) visited.add(name)

    const hits: Array<{ name: string; loaded: LoadedTemplateSet }> = []
    for (const name of names) {
      const candidate = await loadTemplateSet(name, loaders, assertSchema)
      if (candidate !== null) hits.push({ name, loaded: candidate })
    }
    if (hits.length === 1) return { loaded: hits[0].loaded, referenceFrom: hits[0].name }
    if (hits.length >= 2) return null

    level = names.flatMap(evolutionTargets)
  }
  return null
}

async function resolveTemplateSet(
  internalName: string,
  loaders: ReadonlyMap<string, TemplateLoader>,
  assertSchema: () => void
): Promise<LoadedTemplateSet | null> {
  const load = loaders.get(internalName)
  if (!load) return null
  const module = await load()
  const gameData = buildGameData()
  try {
    assertSchema()
  } catch {
    return toLoadedSet(module.default, gameData, internalName, 'error')
  }
  return toLoadedSet(module.default, gameData, internalName, 'ready')
}
