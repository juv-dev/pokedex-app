import { getAnilSpecies } from './anilData'
import { classifyRole } from './engine'
import { ROLE_LABEL, type RoleId } from './constants'
import type { StatMap } from './types'
import type { AnilMegaForm } from './anilData'

export interface MegaRecommendation {
  formName: string
  label: string
  reasons: string[]
}

export interface MegaRecInput {
  internalName: string
  /** Types of every other team member, for coverage context. */
  teamTypes: string[][]
}

/** Defensive relations: `double` = attacking types that hit this type for 2x, `half` for 0.5x, `zero` for 0x. */
const CHART: Record<string, { double?: string[]; half?: string[]; zero?: string[] }> = {
  normal: { double: ['fighting'], zero: ['ghost'] },
  fire: { double: ['water', 'ground', 'rock'], half: ['fire', 'grass', 'ice', 'bug', 'steel', 'fairy'] },
  water: { double: ['grass', 'electric'], half: ['fire', 'water', 'ice', 'steel'] },
  electric: { double: ['ground'], half: ['electric', 'flying', 'steel'] },
  grass: { double: ['fire', 'ice', 'poison', 'flying', 'bug'], half: ['water', 'grass', 'electric', 'ground'] },
  ice: { double: ['fire', 'fighting', 'rock', 'steel'], half: ['ice'] },
  fighting: { double: ['flying', 'psychic', 'fairy'], half: ['rock', 'bug', 'dark'] },
  poison: { double: ['ground', 'psychic'], half: ['grass', 'fighting', 'poison', 'bug', 'fairy'] },
  ground: { double: ['water', 'grass', 'ice'], half: ['poison', 'rock'], zero: ['electric'] },
  flying: { double: ['electric', 'ice', 'rock'], half: ['grass', 'fighting', 'bug'], zero: ['ground'] },
  psychic: { double: ['bug', 'ghost', 'dark'], half: ['fighting', 'psychic'] },
  bug: { double: ['fire', 'flying', 'rock'], half: ['grass', 'fighting', 'ground'] },
  rock: { double: ['water', 'grass', 'fighting', 'ground', 'steel'], half: ['normal', 'fire', 'poison', 'flying'] },
  ghost: { double: ['ghost', 'dark'], half: ['poison', 'bug'], zero: ['normal', 'fighting'] },
  dragon: { double: ['ice', 'dragon', 'fairy'], half: ['fire', 'water', 'grass', 'electric'] },
  dark: { double: ['fighting', 'bug', 'fairy'], half: ['ghost', 'dark'], zero: ['psychic'] },
  steel: { double: ['fire', 'fighting', 'ground'], half: ['normal', 'grass', 'ice', 'flying', 'psychic', 'bug', 'rock', 'dragon', 'steel', 'fairy'], zero: ['poison'] },
  fairy: { double: ['poison', 'steel'], half: ['fighting', 'bug', 'dark'], zero: ['dragon'] }
}

function incomingMultiplier(attack: string, defenders: readonly string[]): number {
  let mult = 1
  for (const def of defenders) {
    const rel = CHART[def]
    if (!rel) continue
    if (rel.zero?.includes(attack)) return 0
    if (rel.double?.includes(attack)) mult *= 2
    else if (rel.half?.includes(attack)) mult *= 0.5
  }
  return mult
}

function weaknesses(types: readonly string[]): Set<string> {
  const out = new Set<string>()
  for (const atk of Object.keys(CHART)) {
    if (incomingMultiplier(atk, types) > 1) out.add(atk)
  }
  return out
}

function resistances(types: readonly string[]): Set<string> {
  const out = new Set<string>()
  for (const atk of Object.keys(CHART)) {
    if (incomingMultiplier(atk, types) < 1) out.add(atk)
  }
  return out
}

function statMap(stats: number[]): StatMap {
  return { hp: stats[0], attack: stats[1], defense: stats[2], 'special-attack': stats[3], 'special-defense': stats[4], speed: stats[5] }
}

interface Candidate {
  formName: string
  label: string
  stats: number[]
  types: string[]
  ability: string | null
}

function score(candidate: Candidate, base: Candidate, teamWeakShared: Set<string>): { value: number; reasons: string[] } {
  const reasons: string[] = []
  let value = 0

  const bst = candidate.stats.reduce((a, b) => a + b, 0)
  const baseBst = base.stats.reduce((a, b) => a + b, 0)
  const delta = bst - baseBst
  if (candidate.formName !== '' && delta > 0) {
    value += Math.min(delta / 30, 4)
    reasons.push(`Sube +${delta} de estadísticas base.`)
  }

  if (candidate.formName !== '' && candidate.stats[5] >= 100 && base.stats[5] < 100) {
    value += 1
    reasons.push(`Pasa a ${candidate.stats[5]} de Velocidad: golpea antes que el metajuego base 100.`)
  }

  const resists = resistances(candidate.types)
  const baseResists = resistances(base.types)
  const covered = [...teamWeakShared].filter(t => resists.has(t) && !baseResists.has(t))
  if (covered.length) {
    value += Math.min(covered.length * 1.5, 4.5)
    reasons.push(`Resiste ${covered.slice(0, 2).join(' y ')}, un punto flojo compartido del equipo.`)
  }

  const newWeak = [...weaknesses(candidate.types)].filter(t => !weaknesses(base.types).has(t) && teamWeakShared.has(t))
  if (newWeak.length) {
    value -= newWeak.length
    reasons.push(`Suma debilidad a ${newWeak[0]}, que el equipo ya sufre.`)
  }

  if (candidate.formName !== '') {
    const role = classifyRole(statMap(candidate.stats)).role
    const baseRole = classifyRole(statMap(base.stats)).role
    if (role !== baseRole) {
      value += 0.5
      reasons.push(`Su rol pasa a ${ROLE_LABEL[role as RoleId] ?? role}.`)
    }
  }

  return { value, reasons }
}

function megaCandidate(sp: NonNullable<ReturnType<typeof getAnilSpecies>>, mega: AnilMegaForm): Candidate {
  return {
    formName: mega.formName ?? `Mega ${sp.name}`,
    label: mega.formName ?? `Mega ${sp.name}`,
    stats: mega.baseStats && mega.baseStats.length >= 6 ? mega.baseStats : sp.baseStats,
    types: mega.types && mega.types.length ? mega.types : sp.types,
    ability: mega.abilities && mega.abilities.length ? mega.abilities[0] : null
  }
}

/**
 * A single "recommended for this team" form (or the current form). Context-driven: never claims
 * a universally best mega, and the caller must not auto-apply it.
 */
export function recommendMegaForTeam(input: MegaRecInput): MegaRecommendation {
  const sp = getAnilSpecies(input.internalName)
  if (!sp || !sp.megas.length) {
    return { formName: '', label: 'Forma actual', reasons: [] }
  }

  const base: Candidate = { formName: '', label: 'Forma actual', stats: sp.baseStats, types: sp.types, ability: null }

  const teamWeakCount = new Map<string, number>()
  for (const types of input.teamTypes) {
    for (const w of weaknesses(types)) teamWeakCount.set(w, (teamWeakCount.get(w) ?? 0) + 1)
  }
  const teamWeakShared = new Set([...teamWeakCount.entries()].filter(([, n]) => n >= 2).map(([t]) => t))

  const candidates = [base, ...sp.megas.map(m => megaCandidate(sp, m))]
  let best = { candidate: base, value: 0, reasons: [] as string[] }
  for (const candidate of candidates) {
    const s = score(candidate, base, teamWeakShared)
    if (candidate.formName === '') continue
    if (s.value > best.value) best = { candidate, value: s.value, reasons: s.reasons }
  }

  if (best.candidate.formName === '' || best.value < 1.5) {
    return {
      formName: '',
      label: 'Forma actual',
      reasons: ['La forma actual ya cumple su rol; ninguna mega aporta una ventaja clara para este equipo.']
    }
  }

  return { formName: best.candidate.formName, label: best.candidate.label, reasons: best.reasons.slice(0, 3) }
}
