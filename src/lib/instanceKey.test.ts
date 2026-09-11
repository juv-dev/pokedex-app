import { describe, expect, it } from 'vitest'
import { instanceKeyOf, locationOf, personalIdOf, saveIdOf } from './instanceKey'
import type { TeamSummary } from './team'

function summary(over: Partial<TeamSummary> & { internalName: string }): TeamSummary {
  return {
    raw: { __class: 'Pokemon', __ivars: {} },
    dexNum: null,
    displayName: over.internalName,
    nickname: null,
    sprite: '',
    types: [],
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

function withPid(internalName: string, pid: number): TeamSummary {
  return summary({ internalName, raw: { __class: 'Pokemon', __ivars: { '@personalID': pid } } })
}

describe('locationOf', () => {
  it('should report a team location for party members', () => {
    expect(locationOf(summary({ internalName: 'PIKACHU', inParty: true }))).toEqual({ source: 'team', box: null, slot: null })
  })

  it('should report the box and slot for stored Pokémon', () => {
    expect(locationOf(summary({ internalName: 'PIKACHU', inParty: false, boxIndex: 6, boxSlot: 4 })))
      .toEqual({ source: 'box', box: 6, slot: 4 })
  })
})

describe('personalIdOf', () => {
  it('should read a numeric @personalID', () => {
    expect(personalIdOf(withPid('PIKACHU', 12345))).toBe(12345)
  })

  it('should return null when @personalID is missing', () => {
    expect(personalIdOf(summary({ internalName: 'PIKACHU' }))).toBeNull()
  })
})

describe('instanceKeyOf', () => {
  it('should prefer the personal id when present', () => {
    expect(instanceKeyOf(withPid('PIKACHU', 999))).toBe('pid:999')
  })

  it('should fall back to location and species when no personal id', () => {
    expect(instanceKeyOf(summary({ internalName: 'LEDIAN', boxIndex: 0, boxSlot: 3 }))).toBe('loc:box0:3:LEDIAN')
    expect(instanceKeyOf(summary({ internalName: 'LEDIAN', inParty: true }))).toBe('loc:team:LEDIAN')
  })

  it('should give two same-species instances different keys', () => {
    const a = instanceKeyOf(withPid('LEDIAN', 1))
    const b = instanceKeyOf(withPid('LEDIAN', 2))
    expect(a).not.toBe(b)
  })
})

describe('saveIdOf', () => {
  it('should be stable for the same file and roster', () => {
    const roster = [withPid('A', 1), withPid('B', 2), withPid('C', 3)]
    expect(saveIdOf('Partida 1.rxdata', roster)).toBe(saveIdOf('Partida 1.rxdata', roster))
  })

  it('should differ when the roster differs', () => {
    const a = saveIdOf('Partida 1.rxdata', [withPid('A', 1)])
    const b = saveIdOf('Partida 1.rxdata', [withPid('A', 1), withPid('B', 2)])
    expect(a).not.toBe(b)
  })
})
