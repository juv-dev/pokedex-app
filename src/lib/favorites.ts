const STORAGE_KEY = 'anil-dex.favorites.v1'

function browserStorage(): Storage | null {
  return typeof localStorage === 'undefined' ? null : localStorage
}

function normalize(values: unknown): string[] {
  if (!Array.isArray(values)) return []
  const seen = values
    .filter((value): value is string => typeof value === 'string')
    .map(value => value.trim().toUpperCase())
    .filter(Boolean)
  return Array.from(new Set(seen))
}

export function loadFavorites(storage: Storage | null = browserStorage()): string[] {
  if (!storage) return []
  try {
    return normalize(JSON.parse(storage.getItem(STORAGE_KEY) || '[]'))
  } catch {
    return []
  }
}

export function saveFavorites(values: readonly string[], storage: Storage | null = browserStorage()): void {
  if (!storage) return
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(normalize(values)))
  } catch {
    /* quota exceeded or storage disabled */
  }
}

export function toggleFavorite(values: readonly string[], internalName: string): string[] {
  const key = internalName.trim().toUpperCase()
  const set = new Set(normalize(values))
  if (set.has(key)) set.delete(key)
  else if (key) set.add(key)
  return [...set]
}

export function isFavorite(values: readonly string[], internalName: string): boolean {
  return normalize(values).includes(internalName.trim().toUpperCase())
}
