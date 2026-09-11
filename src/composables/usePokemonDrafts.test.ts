import { describe, expect, it } from 'vitest'
import { usePokemonDrafts } from './usePokemonDrafts'
import { MemoryBackend, draftKey, type DraftBackend, type PokemonDraft } from '../lib/draftStore'
import type { RecommendedSet } from '../lib/recommendedSet'

const set: RecommendedSet = {
  source: 'heuristic', tier: 'viable', referenceFrom: null, megaFormName: null,
  base: [1, 1, 1, 1, 1, 1], evs: [0, 0, 0, 0, 0, 0], ivs: [31, 31, 31, 31, 31, 31],
  moves: [], nature: null, item: null, ability: null
}

function draft(over: Partial<PokemonDraft> & { saveId: string; instanceKey: string }): PokemonDraft {
  return {
    location: { source: 'team', box: null, slot: null },
    speciesId: 'PIKACHU', selectedFormId: '', favorite: false,
    recommendedSet: set, reviewState: 'pending', updatedAt: 0, ...over
  }
}

class FailingBackend extends MemoryBackend {
  async put(): Promise<void> { throw new Error('boom') }
}

describe('usePokemonDrafts', () => {
  it('should start empty and wipe any stale persisted drafts for the save', async () => {
    const be = new MemoryBackend()
    await be.put(draftKey('s1', 'pid:1'), draft({ saveId: 's1', instanceKey: 'pid:1' }))
    const drafts = usePokemonDrafts(be)
    await drafts.loadSave('s1')
    expect(drafts.activeSaveId.value).toBe('s1')
    expect(drafts.getDraft('pid:1')).toBeUndefined()
    expect(await be.get(draftKey('s1', 'pid:1'))).toBeNull()
  })

  it('should move an instance through saving then saved on write', async () => {
    const be = new MemoryBackend()
    const drafts = usePokemonDrafts(be)
    await drafts.saveDraft(draft({ saveId: 's1', instanceKey: 'pid:2' }))
    expect(drafts.stateOf('pid:2')).toBe('saved')
    expect(await be.get(draftKey('s1', 'pid:2'))).not.toBeNull()
  })

  it('should mark the instance state as error when the backend rejects', async () => {
    const drafts = usePokemonDrafts(new FailingBackend() as unknown as DraftBackend)
    await drafts.saveDraft(draft({ saveId: 's1', instanceKey: 'pid:3' }))
    expect(drafts.stateOf('pid:3')).toBe('error')
    expect(drafts.getDraft('pid:3')).toBeDefined()
  })

  it('should drop a draft locally and from the backend when removed', async () => {
    const be = new MemoryBackend()
    const drafts = usePokemonDrafts(be)
    await drafts.saveDraft(draft({ saveId: 's1', instanceKey: 'pid:9' }))
    expect(drafts.getDraft('pid:9')).toBeDefined()
    await drafts.removeDraft('pid:9')
    expect(drafts.getDraft('pid:9')).toBeUndefined()
    expect(drafts.stateOf('pid:9')).toBe('idle')
    expect(await be.get(draftKey('s1', 'pid:9'))).toBeNull()
  })

  it('should wipe every draft of the active save on clearAll', async () => {
    const be = new MemoryBackend()
    const drafts = usePokemonDrafts(be)
    await drafts.loadSave('s1')
    await drafts.saveDraft(draft({ saveId: 's1', instanceKey: 'a' }))
    await drafts.saveDraft(draft({ saveId: 's1', instanceKey: 'b' }))
    await drafts.clearAll()
    expect(drafts.getDraft('a')).toBeUndefined()
    expect(drafts.getDraft('b')).toBeUndefined()
    expect(await be.get(draftKey('s1', 'a'))).toBeNull()
  })

  it('should reset drafts when switching saves', async () => {
    const be = new MemoryBackend()
    const drafts = usePokemonDrafts(be)
    await drafts.loadSave('s1')
    await drafts.saveDraft(draft({ saveId: 's1', instanceKey: 'a' }))
    expect(drafts.getDraft('a')).toBeDefined()
    await drafts.loadSave('s2')
    expect(drafts.getDraft('a')).toBeUndefined()
    expect(drafts.activeSaveId.value).toBe('s2')
  })
})
