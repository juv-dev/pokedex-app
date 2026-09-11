import type { TeamSummary } from './team'
import { instanceKeyOf } from './instanceKey'

export interface TeamSlotMon {
  internalName: string
  sprite: string
  num: string
  name: string
  level?: number | string
  types?: string[]
}

export interface RosterEntry {
  instanceKey: string
  internalName: string
  num: string
  name: string
  sprite: string
  types: string[]
  where: string
  inParty: boolean
  boxIndex: number | null
  boxLabel: string
  boxSlot: number | null
  key: string
}

function pad3(n: number): string {
  return '#' + String(n).padStart(3, '0')
}

/** Roster entries sorted team-first, then by box and slot. Key is stable per instance. */
export function buildRoster(summaries: readonly TeamSummary[]): RosterEntry[] {
  const list = [...summaries].sort((a, b) => {
    if (a.inParty !== b.inParty) return a.inParty ? -1 : 1
    if ((a.boxIndex ?? 999) !== (b.boxIndex ?? 999)) return (a.boxIndex ?? 999) - (b.boxIndex ?? 999)
    return (a.boxSlot ?? 999) - (b.boxSlot ?? 999)
  })
  return list.map((s, i) => {
    const boxLabel = s.inParty ? 'Equipo' : (s.boxName || `Caja ${(s.boxIndex ?? 0) + 1}`)
    const boxSlot = s.inParty ? null : s.boxSlot
    return {
      instanceKey: instanceKeyOf(s),
      internalName: s.internalName,
      num: s.dexNum != null ? pad3(s.dexNum) : pad3(i + 1),
      name: s.nickname || s.displayName,
      sprite: s.sprite,
      types: s.types,
      where: boxLabel,
      inParty: s.inParty,
      boxIndex: s.inParty ? null : s.boxIndex,
      boxLabel,
      boxSlot,
      key: s.inParty ? `party:${i}` : `box:${s.boxIndex}:${boxSlot}:${s.internalName}`
    }
  })
}
