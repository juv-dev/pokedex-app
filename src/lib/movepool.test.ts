import { describe, it, expect } from 'vitest'
import { preEvolutionLineage, legalMovepool } from './movepool'
import type { TemplateGameData } from './types'
import type { AnilSpecies } from './anilData'
import type { RoleId } from './constants'

function species(partial: Partial<AnilSpecies> & { name: string }): AnilSpecies {
  return {
    name: partial.name,
    types: partial.types ?? ['normal'],
    baseStats: partial.baseStats ?? [50, 50, 50, 50, 50, 50],
    category: '',
    flavor: '',
    heightM: 0,
    weightKg: 0,
    abilities: partial.abilities ?? [],
    catchRate: null,
    happiness: null,
    growthRate: null,
    eggGroups: [],
    genderRatio: null,
    baseExp: null,
    evolutions: partial.evolutions ?? [],
    megas: [],
    tutorMoves: partial.tutorMoves ?? [],
    eggMoves: partial.eggMoves ?? [],
    levelMoves: partial.levelMoves ?? []
  }
}

function makeGameData(opts: {
  speciesMap: Record<string, AnilSpecies>
  parents?: Record<string, string>
}): TemplateGameData {
  return {
    species: (n) => opts.speciesMap[n] ?? null,
    move: () => null,
    abilityName: () => null,
    itemName: () => null,
    legalMovepool: () => new Set<string>(),
    natureKeys: new Set<string>(),
    roleIds: new Set<RoleId>(),
    preEvolutionParent: opts.parents ? (n) => opts.parents?.[n] ?? null : undefined
  }
}

describe('legalMovepool', () => {
  it('should include every SPIDOPS tutor move plus its own level moves', () => {
    const spidops = species({
      name: 'Spidops',
      tutorMoves: ['SPIKES', 'TOXICSPIKES', 'KNOCKOFF', 'UTURN', 'TAUNT', 'POISONJAB'],
      levelMoves: [{ level: 1, move: 'TACKLE' }, { level: 12, move: 'BUGBITE' }]
    })
    const gd = makeGameData({ speciesMap: { SPIDOPS: spidops }, parents: {} })
    const pool = legalMovepool('SPIDOPS', gd)
    expect(pool.has('SPIKES')).toBe(true)
    expect(pool.has('TOXICSPIKES')).toBe(true)
    expect(pool.has('KNOCKOFF')).toBe(true)
    expect(pool.has('UTURN')).toBe(true)
    expect(pool.has('TAUNT')).toBe(true)
    expect(pool.has('TACKLE')).toBe(true)
    expect(pool.has('BUGBITE')).toBe(true)
  })

  it('should treat an absent egg-move list as an empty contribution without throwing', () => {
    const noEgg = species({ name: 'NoEgg', tutorMoves: ['SPIKES'], levelMoves: [] })
    delete (noEgg as { eggMoves?: string[] }).eggMoves
    const gd = makeGameData({ speciesMap: { NOEGG: noEgg }, parents: {} })
    expect(() => legalMovepool('NOEGG', gd)).not.toThrow()
    expect([...legalMovepool('NOEGG', gd)]).toEqual(['SPIKES'])
  })

  it('should inherit a move the lineage root learns down to the final evolution', () => {
    const root = species({ name: 'Root', levelMoves: [{ level: 1, move: 'ANCIENTMOVE' }] })
    const mid = species({ name: 'Mid', levelMoves: [{ level: 10, move: 'MIDMOVE' }] })
    const tip = species({ name: 'Tip', levelMoves: [{ level: 20, move: 'TIPMOVE' }] })
    const gd = makeGameData({
      speciesMap: { ROOT: root, MID: mid, TIP: tip },
      parents: { TIP: 'MID', MID: 'ROOT' }
    })
    const pool = legalMovepool('TIP', gd)
    expect(pool.has('ANCIENTMOVE')).toBe(true)
    expect(pool.has('MIDMOVE')).toBe(true)
    expect(pool.has('TIPMOVE')).toBe(true)
  })
})

describe('preEvolutionLineage', () => {
  it('should return self followed by every ancestor in walk order', () => {
    const gd = makeGameData({
      speciesMap: {
        ROOT: species({ name: 'Root' }),
        MID: species({ name: 'Mid' }),
        TIP: species({ name: 'Tip' })
      },
      parents: { TIP: 'MID', MID: 'ROOT' }
    })
    expect(preEvolutionLineage('TIP', gd)).toEqual(['TIP', 'MID', 'ROOT'])
  })

  it('should stop without infinite-looping when the lineage contains a cycle', () => {
    const gd = makeGameData({
      speciesMap: {
        A: species({ name: 'A', levelMoves: [{ level: 1, move: 'AMOVE' }] }),
        B: species({ name: 'B', levelMoves: [{ level: 1, move: 'BMOVE' }] })
      },
      parents: { A: 'B', B: 'A' }
    })
    expect(preEvolutionLineage('A', gd)).toEqual(['A', 'B'])
    expect(() => legalMovepool('A', gd)).not.toThrow()
    expect(legalMovepool('A', gd).has('BMOVE')).toBe(true)
  })

  it('should cap the lineage walk at depth 10 for an over-long parent chain', () => {
    const speciesMap: Record<string, AnilSpecies> = {}
    const parents: Record<string, string> = {}
    for (let i = 0; i < 20; i++) {
      speciesMap['S' + i] = species({ name: 'S' + i })
      if (i > 0) parents['S' + (i - 1)] = 'S' + i
    }
    const gd = makeGameData({ speciesMap, parents })
    const lineage = preEvolutionLineage('S0', gd)
    expect(lineage[0]).toBe('S0')
    expect(lineage.length).toBe(11)
  })
})
