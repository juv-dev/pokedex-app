import moveNumbers from '../data/anil-move-numbers.json'

/**
 * Número real del movimiento en el listado del propio juego (Pokémon Añil),
 * extraído del orden de los bloques [INTERNALNAME] en su PBS/moves.txt real.
 * No es un número de PokéAPI ni inventado.
 */
export function getAnilMoveNumber(nameOrSlug: string): number | null {
  const key = String(nameOrSlug).replace(/[_-]/g, '').toUpperCase()
  const map = moveNumbers as Record<string, number>
  return map[key] ?? null
}
