import { describe, expect, it } from 'vitest'
import { isFavorite, loadFavorites, saveFavorites, toggleFavorite } from './favorites'

function fakeStorage(): Storage {
  const map = new Map<string, string>()
  return {
    get length() { return map.size },
    clear: () => map.clear(),
    getItem: (k: string) => map.get(k) ?? null,
    key: (i: number) => [...map.keys()][i] ?? null,
    removeItem: (k: string) => map.delete(k),
    setItem: (k: string, v: string) => { map.set(k, v) }
  } as Storage
}

describe('favorites', () => {
  it('should round-trip through storage, normalised and de-duplicated', () => {
    const store = fakeStorage()
    saveFavorites([' pikachu ', 'PIKACHU', 'ledian'], store)
    expect(loadFavorites(store)).toEqual(['PIKACHU', 'LEDIAN'])
  })

  it('should return an empty list when storage has nothing or invalid json', () => {
    const store = fakeStorage()
    expect(loadFavorites(store)).toEqual([])
    store.setItem('anil-dex.favorites.v1', '{ not json')
    expect(loadFavorites(store)).toEqual([])
  })

  it('should add on first toggle and remove on the second', () => {
    let list: string[] = []
    list = toggleFavorite(list, 'pikachu')
    expect(list).toEqual(['PIKACHU'])
    expect(isFavorite(list, 'PIKACHU')).toBe(true)
    list = toggleFavorite(list, 'PIKACHU')
    expect(list).toEqual([])
    expect(isFavorite(list, 'pikachu')).toBe(false)
  })

  it('should not throw when storage is unavailable', () => {
    expect(() => saveFavorites(['PIKACHU'], null)).not.toThrow()
    expect(loadFavorites(null)).toEqual([])
  })
})
