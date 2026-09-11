import { readonly, ref } from 'vue'
import {
  loadFavorites, saveFavorites,
  toggleFavorite as toggle, isFavorite as includes
} from '../lib/favorites'

const favorites = ref<string[]>(loadFavorites())

/** Shared favorites list, persisted to localStorage, used by both the Pokédex and Mi partida. */
export function useFavorites() {
  function toggleFavorite(internalName: string): void {
    favorites.value = toggle(favorites.value, internalName)
    saveFavorites(favorites.value)
  }

  function isFavorite(internalName: string): boolean {
    return includes(favorites.value, internalName)
  }

  return { favorites: readonly(favorites), toggleFavorite, isFavorite }
}
