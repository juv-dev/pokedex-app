import type { TeamSummary } from './team'
import { instanceKeyOf, locationOf, type InstanceLocation } from './instanceKey'
import { getAnilSpecies } from './anilData'

export interface InstanceRow {
  instanceKey: string
  internalName: string
  form?: number
  displayName: string
  speciesName: string
  num: number | null
  level: number | string
  sprite: string
  types: string[]
  location: InstanceLocation
  locationLabel: string
  slotLabel: string
}

export interface Scope {
  scope: 'all' | 'team' | 'box'
  box: number | 'all'
}

export interface RowFilter extends Scope {
  query: string
  favOnly: boolean
  favorites: ReadonlySet<string>
}

function speciesNameOf(internalName: string, fallback: string): string {
  return getAnilSpecies(internalName)?.name ?? fallback
}

export function buildInstanceRows(summaries: readonly TeamSummary[]): InstanceRow[] {
  return [...summaries]
    .sort((a, b) => {
      if (a.inParty !== b.inParty) return a.inParty ? -1 : 1
      if ((a.boxIndex ?? 999) !== (b.boxIndex ?? 999)) return (a.boxIndex ?? 999) - (b.boxIndex ?? 999)
      return (a.boxSlot ?? 999) - (b.boxSlot ?? 999)
    })
    .map(s => {
      const location = locationOf(s)
      return {
        instanceKey: instanceKeyOf(s),
        internalName: s.internalName,
        form: s.form ?? 0,
        displayName: s.nickname || s.displayName,
        speciesName: speciesNameOf(s.internalName, s.displayName),
        num: s.dexNum,
        level: s.level,
        sprite: s.sprite,
        types: s.types,
        location,
        locationLabel: s.inParty ? 'Equipo' : (s.boxName || `Caja ${(s.boxIndex ?? 0) + 1}`),
        slotLabel: s.inParty || s.boxSlot == null ? '—' : String(s.boxSlot + 1)
      }
    })
}

function matchesQuery(row: InstanceRow, query: string): boolean {
  const q = query.trim().toLowerCase()
  if (!q) return true
  const num = q.replace(/^#/, '')
  if (/^\d+$/.test(num) && row.num === Number(num)) return true
  return (
    row.speciesName.toLowerCase().includes(q) ||
    row.displayName.toLowerCase().includes(q) ||
    row.internalName.toLowerCase().includes(q) ||
    row.locationLabel.toLowerCase().includes(q) ||
    (row.slotLabel !== '—' && row.slotLabel === num)
  )
}

export function filterRows(rows: readonly InstanceRow[], filter: RowFilter): InstanceRow[] {
  return rows.filter(row => {
    if (filter.scope === 'team' && row.location.source !== 'team') return false
    if (filter.scope === 'box') {
      if (row.location.source !== 'box') return false
      if (filter.box !== 'all' && row.location.box !== filter.box) return false
    }
    if (filter.favOnly && !filter.favorites.has(row.internalName.toUpperCase())) return false
    return matchesQuery(row, filter.query)
  })
}

export function boxOptions(rows: readonly InstanceRow[]): Array<{ index: number; label: string }> {
  const map = new Map<number, string>()
  for (const row of rows) {
    if (row.location.source === 'box' && row.location.box != null) map.set(row.location.box, row.locationLabel)
  }
  return [...map.entries()].sort((a, b) => a[0] - b[0]).map(([index, label]) => ({ index, label }))
}

export function paginate<T>(items: readonly T[], page: number, pageSize: number): T[] {
  const start = (page - 1) * pageSize
  return items.slice(start, start + pageSize)
}
