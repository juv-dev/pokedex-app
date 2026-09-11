import type { TeamSummary } from './team'

export interface InstanceLocation {
  source: 'team' | 'box'
  box: number | null
  slot: number | null
}

type LocationInput = Pick<TeamSummary, 'inParty' | 'boxIndex' | 'boxSlot'>
type IdentityInput = Pick<TeamSummary, 'raw' | 'internalName' | 'inParty' | 'boxIndex' | 'boxSlot'>

export function locationOf(summary: LocationInput): InstanceLocation {
  return summary.inParty
    ? { source: 'team', box: null, slot: null }
    : { source: 'box', box: summary.boxIndex, slot: summary.boxSlot }
}

export function personalIdOf(summary: Pick<TeamSummary, 'raw'>): number | null {
  const value = summary.raw?.__ivars?.['@personalID']
  return typeof value === 'number' ? value : null
}

/**
 * Stable key for one concrete Pokémon instance inside a save. Prefers @personalID (a 32-bit
 * integer unique per Pokémon in Essentials); falls back to location + species. Two Pokémon of
 * the same species get different keys.
 */
export function instanceKeyOf(summary: IdentityInput): string {
  const pid = personalIdOf(summary)
  if (pid != null) return `pid:${pid}`
  const loc = locationOf(summary)
  const where = loc.source === 'team' ? 'team' : `box${loc.box}:${loc.slot}`
  return `loc:${where}:${summary.internalName}`
}

function hash32(input: string): string {
  let h = 2166136261
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return (h >>> 0).toString(36)
}

/** Save identifier stable across reloads of the same file. */
export function saveIdOf(fileName: string, summaries: ReadonlyArray<Pick<TeamSummary, 'raw'>>): string {
  const pids = summaries
    .map(personalIdOf)
    .filter((n): n is number => n != null)
    .slice(0, 8)
  return `save:${hash32(`${fileName}|${summaries.length}|${pids.join(',')}`)}`
}
