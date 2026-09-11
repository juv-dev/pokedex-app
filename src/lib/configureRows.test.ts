import { describe, expect, it } from 'vitest'
import { buildInstanceRows, filterRows, boxOptions, paginate, type RowFilter } from './configureRows'
import type { TeamSummary } from './team'

function mon(over: Partial<TeamSummary> & { internalName: string }): TeamSummary {
  return {
    raw: { __class: 'Pokemon', __ivars: { '@personalID': Math.floor(Math.random() * 1e9) } },
    dexNum: 25,
    displayName: over.internalName,
    nickname: null,
    sprite: '/s.png',
    types: ['electric'],
    level: 50,
    isShiny: false,
    speciesSlug: over.internalName.toLowerCase(),
    isCustom: false,
    ballId: null,
    ballLabel: 'Poké Ball',
    inParty: false,
    boxIndex: null,
    boxName: null,
    boxSlot: null,
    ...over
  }
}

const summaries = [
  mon({ internalName: 'PIKACHU', inParty: true, dexNum: 25 }),
  mon({ internalName: 'BULBASAUR', boxIndex: 0, boxSlot: 2, boxName: 'Caja 1', dexNum: 1 }),
  mon({ internalName: 'CHARIZARD', boxIndex: 0, boxSlot: 0, boxName: 'Caja 1', dexNum: 6, nickname: 'Ziggy' }),
  mon({ internalName: 'GYARADOS', boxIndex: 2, boxSlot: 4, boxName: 'Caja 3', dexNum: 130 })
]
const rows = buildInstanceRows(summaries)

function filter(over: Partial<RowFilter>): RowFilter {
  return { scope: 'all', box: 'all', query: '', favOnly: false, favorites: new Set(), ...over }
}

describe('buildInstanceRows', () => {
  it('should sort team-first then by box and slot, with labels', () => {
    expect(rows.map(r => r.internalName)).toEqual(['PIKACHU', 'CHARIZARD', 'BULBASAUR', 'GYARADOS'])
    expect(rows[0].locationLabel).toBe('Equipo')
    expect(rows[1].locationLabel).toBe('Caja 1')
    expect(rows[1].slotLabel).toBe('1')
    expect(rows[1].displayName).toBe('Ziggy')
  })

  it('should carry the instance form, defaulting to 0', () => {
    const [regular, galar] = buildInstanceRows([
      mon({ internalName: 'CORSOLA' }),
      mon({ internalName: 'CORSOLA', form: 1 })
    ])
    expect(regular.form ?? 0).toBe(0)
    expect(galar.form).toBe(1)
  })
})

describe('filterRows', () => {
  it('should filter by scope team', () => {
    expect(filterRows(rows, filter({ scope: 'team' })).map(r => r.internalName)).toEqual(['PIKACHU'])
  })

  it('should filter by box scope and a specific box', () => {
    expect(filterRows(rows, filter({ scope: 'box', box: 0 })).map(r => r.internalName)).toEqual(['CHARIZARD', 'BULBASAUR'])
    expect(filterRows(rows, filter({ scope: 'box', box: 2 })).map(r => r.internalName)).toEqual(['GYARADOS'])
  })

  it('should match the query by species, nickname, number, box or slot', () => {
    expect(filterRows(rows, filter({ query: 'ziggy' })).map(r => r.internalName)).toEqual(['CHARIZARD'])
    expect(filterRows(rows, filter({ query: '#130' })).map(r => r.internalName)).toEqual(['GYARADOS'])
    expect(filterRows(rows, filter({ query: 'caja 1' })).map(r => r.internalName)).toEqual(['CHARIZARD', 'BULBASAUR'])
  })

  it('should keep only favorites when favOnly is set', () => {
    const favorites = new Set(['GYARADOS'])
    expect(filterRows(rows, filter({ favOnly: true, favorites })).map(r => r.internalName)).toEqual(['GYARADOS'])
  })
})

describe('boxOptions', () => {
  it('should list the boxes present, sorted', () => {
    expect(boxOptions(rows)).toEqual([{ index: 0, label: 'Caja 1' }, { index: 2, label: 'Caja 3' }])
  })
})

describe('paginate', () => {
  it('should slice the current page', () => {
    expect(paginate([1, 2, 3, 4, 5], 2, 2)).toEqual([3, 4])
    expect(paginate([1, 2, 3, 4, 5], 3, 2)).toEqual([5])
  })
})
