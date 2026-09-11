import { describe, expect, it } from 'vitest'
import { MemoryBackend, draftKey, type PokemonDraft } from './draftStore'
import type { RecommendedSet } from './recommendedSet'

const set: RecommendedSet = {
  source: 'heuristic',
  tier: 'viable',
  referenceFrom: null,
  megaFormName: null,
  base: [60, 78, 135, 91, 85, 36],
  evs: [252, 0, 252, 0, 4, 0],
  ivs: [31, 31, 31, 31, 31, 31],
  moves: [{ id: 'BODYPRESS', pp: 10 }],
  nature: 'RELAXED',
  item: 'LEFTOVERS',
  ability: 'SHELLARMOR'
}

function draft(over: Partial<PokemonDraft> & { saveId: string; instanceKey: string }): PokemonDraft {
  return {
    location: { source: 'box', box: 0, slot: 0 },
    speciesId: 'TURTONATOR',
    selectedFormId: '',
    favorite: false,
    recommendedSet: set,
    reviewState: 'pending',
    updatedAt: 1,
    ...over
  }
}

describe('draftKey', () => {
  it('should namespace the instance key under the save id', () => {
    expect(draftKey('save:abc', 'pid:12')).toBe('save:abc::pid:12')
  })
})

describe('MemoryBackend', () => {
  it('should store and read a draft back', async () => {
    const be = new MemoryBackend()
    const d = draft({ saveId: 's1', instanceKey: 'pid:1' })
    await be.put(draftKey('s1', 'pid:1'), d)
    expect(await be.get(draftKey('s1', 'pid:1'))).toEqual(d)
    expect(await be.get(draftKey('s1', 'missing'))).toBeNull()
  })

  it('should list only the drafts of one save', async () => {
    const be = new MemoryBackend()
    await be.put(draftKey('s1', 'a'), draft({ saveId: 's1', instanceKey: 'a' }))
    await be.put(draftKey('s1', 'b'), draft({ saveId: 's1', instanceKey: 'b' }))
    await be.put(draftKey('s2', 'c'), draft({ saveId: 's2', instanceKey: 'c' }))
    const listed = await be.list('s1')
    expect(listed.map(x => x.instanceKey).sort()).toEqual(['a', 'b'])
  })

  it('should remove one draft and clear a whole save', async () => {
    const be = new MemoryBackend()
    await be.put(draftKey('s1', 'a'), draft({ saveId: 's1', instanceKey: 'a' }))
    await be.put(draftKey('s1', 'b'), draft({ saveId: 's1', instanceKey: 'b' }))
    await be.remove(draftKey('s1', 'a'))
    expect((await be.list('s1')).map(x => x.instanceKey)).toEqual(['b'])
    await be.clearSave('s1')
    expect(await be.list('s1')).toEqual([])
  })

  it('should copy on write so later mutation of the input does not leak in', async () => {
    const be = new MemoryBackend()
    const d = draft({ saveId: 's1', instanceKey: 'a', favorite: false })
    await be.put(draftKey('s1', 'a'), d)
    d.favorite = true
    expect((await be.get(draftKey('s1', 'a')))?.favorite).toBe(false)
  })
})
