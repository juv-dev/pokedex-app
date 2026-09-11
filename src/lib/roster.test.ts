import { describe, expect, it } from 'vitest'
import { buildRoster } from './roster'
import type { TeamSummary } from './team'

function mon(over: Partial<TeamSummary> & { internalName: string }): TeamSummary {
  return {
    raw: { __class: 'Pokemon', __ivars: {} },
    dexNum: 25,
    displayName: over.internalName,
    nickname: null,
    sprite: '/s.png',
    types: ['electric'],
    level: 100,
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

describe('buildRoster', () => {
  it('should sort team first, then by box and slot', () => {
    const roster = buildRoster([
      mon({ internalName: 'C', boxIndex: 1, boxSlot: 0 }),
      mon({ internalName: 'A', inParty: true }),
      mon({ internalName: 'B', boxIndex: 0, boxSlot: 5 }),
      mon({ internalName: 'D', boxIndex: 0, boxSlot: 1 })
    ])
    expect(roster.map(r => r.internalName)).toEqual(['A', 'D', 'B', 'C'])
  })

  it('should label the location and keep a stable per-instance key', () => {
    const roster = buildRoster([
      mon({ internalName: 'PIKACHU', inParty: true, raw: { __class: 'Pokemon', __ivars: { '@personalID': 7 } } }),
      mon({ internalName: 'RAICHU', boxIndex: 2, boxSlot: 3, boxName: 'Caja 3' })
    ])
    expect(roster[0].boxLabel).toBe('Equipo')
    expect(roster[0].instanceKey).toBe('pid:7')
    expect(roster[1].boxLabel).toBe('Caja 3')
    expect(roster[1].instanceKey).toBe('loc:box2:3:RAICHU')
  })

  it('should give two same-species box instances different keys', () => {
    const roster = buildRoster([
      mon({ internalName: 'LEDIAN', boxIndex: 0, boxSlot: 0 }),
      mon({ internalName: 'LEDIAN', boxIndex: 6, boxSlot: 0 })
    ])
    expect(roster[0].key).not.toBe(roster[1].key)
    expect(roster[0].instanceKey).not.toBe(roster[1].instanceKey)
  })
})
