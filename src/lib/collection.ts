import type { TeamSummary } from './team'

function normalizeInternalNames(values: unknown): string[] {
  if (!Array.isArray(values)) return []
  const normalized = values
    .filter((value): value is string => typeof value === 'string')
    .map(value => value.trim().toUpperCase())
    .filter(Boolean)
  return Array.from(new Set(normalized))
}

function browserStorage(): Storage | null {
  return typeof localStorage === 'undefined' ? null : localStorage
}

export function loadInternalNames(key: string, storage: Storage | null = browserStorage()): string[] {
  if (!storage) return []
  try {
    return normalizeInternalNames(JSON.parse(storage.getItem(key) || '[]'))
  } catch {
    return []
  }
}

export function saveInternalNames(key: string, values: readonly string[], storage: Storage | null = browserStorage()): void {
  if (!storage) return
  storage.setItem(key, JSON.stringify(normalizeInternalNames(values)))
}

export function markInternalName(values: readonly string[], internalName: string): string[] {
  return normalizeInternalNames([...values, internalName])
}

export function uniqueOwnedInternalNames(summaries: readonly Pick<TeamSummary, 'internalName'>[]): string[] {
  return normalizeInternalNames(summaries.map(summary => summary.internalName))
}
