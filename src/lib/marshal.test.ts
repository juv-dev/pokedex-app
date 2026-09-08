import { describe, expect, it } from 'vitest'
import { findAllPokemon, type MarshalUserObject } from './marshal'

function mon(species: string): MarshalUserObject {
  return { __class: 'Pokemon', __ivars: { '@species': species } }
}

function box(name: string, pokemon: unknown[]): MarshalUserObject {
  return { __class: 'PokemonBox', __ivars: { '@name': name, '@pokemon': pokemon } }
}

function speciesOf(obj: MarshalUserObject): string {
  return String(obj.__ivars['@species'])
}

describe('findAllPokemon', () => {
  const storage: MarshalUserObject = {
    __class: 'PokemonStorage',
    __ivars: {
      '@boxes': [
        box('Caja 1', [mon('LEDIAN'), null, mon('PIDGEY')]),
        box('Caja 2', [mon('LEDIAN'), mon('EEVEE')])
      ]
    }
  }
  const root = { '@party': [mon('PIKACHU'), mon('CHARMANDER')], storage }

  it('should tag party Pokémon with no box position', () => {
    const party = findAllPokemon(root).filter(p => p.inParty)
    expect(party.map(p => speciesOf(p.obj))).toEqual(['PIKACHU', 'CHARMANDER'])
    expect(party.every(p => p.boxIndex === null && p.boxSlot === null)).toBe(true)
  })

  it('should record the real slot index within each box, skipping empty slots', () => {
    const boxMons = findAllPokemon(root).filter(p => !p.inParty)
    expect(boxMons.map(p => [speciesOf(p.obj), p.boxIndex, p.boxSlot])).toEqual([
      ['LEDIAN', 0, 0],
      ['PIDGEY', 0, 2],
      ['LEDIAN', 1, 0],
      ['EEVEE', 1, 1]
    ])
  })

  it('should keep the same species that lives in two different boxes as two entries', () => {
    const ledians = findAllPokemon(root).filter(p => speciesOf(p.obj) === 'LEDIAN')
    expect(ledians.map(p => p.boxIndex)).toEqual([0, 1])
  })

  it('should ignore standalone Pokémon outside the party and boxes', () => {
    const withHallOfFame = {
      '@party': [mon('PIKACHU')],
      storage,
      hallOfFame: [{ __class: 'Pokemon', __ivars: { '@species': 'VICTREEBEL', '@level': 100 } }]
    }
    const species = findAllPokemon(withHallOfFame).map(p => speciesOf(p.obj))
    expect(species).not.toContain('VICTREEBEL')
  })
})
