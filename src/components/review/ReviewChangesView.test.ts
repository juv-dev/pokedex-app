import { describe, expect, it, vi, beforeEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import ReviewChangesView from './ReviewChangesView.vue'
import * as editor from '../../lib/saveEditor'
import { usePokemonDrafts } from '../../composables/usePokemonDrafts'
import { MemoryBackend } from '../../lib/draftStore'
import { instanceKeyOf } from '../../lib/instanceKey'
import type { TeamSummary } from '../../lib/team'
import type { PokemonDraft } from '../../lib/draftStore'
import type { RecommendedSet } from '../../lib/recommendedSet'

vi.mock('../../lib/saveEditor', () => ({
  applyDraftChanges: vi.fn(),
  downloadBytes: vi.fn()
}))

const applyMock = editor.applyDraftChanges as unknown as ReturnType<typeof vi.fn>
const downloadMock = editor.downloadBytes as unknown as ReturnType<typeof vi.fn>

function applyResult(over: Partial<editor.DraftApplyResult> = {}): editor.DraftApplyResult {
  return { output: new Uint8Array([1, 2, 3]), applied: 3, records: [], diffs: [], verified: true, ...over }
}

let pid = 1
function mon(over: Partial<TeamSummary> & { internalName: string }): TeamSummary {
  return {
    raw: { __class: 'Pokemon', __ivars: { '@personalID': pid++ } },
    dexNum: 6, displayName: over.internalName, nickname: null, sprite: '/s.png', types: ['fire'],
    level: 100, isShiny: false, speciesSlug: '', isCustom: false, ballId: null, ballLabel: '',
    inParty: false, boxIndex: 0, boxName: 'Caja 1', boxSlot: 0, ...over
  }
}

function set(over: Partial<RecommendedSet> = {}): RecommendedSet {
  return {
    source: 'template', tier: 'optimo', referenceFrom: null, megaFormName: null,
    base: [1, 1, 1, 1, 1, 1], evs: [0, 0, 0, 0, 0, 0], ivs: [31, 31, 31, 31, 31, 31],
    moves: [{ id: 'A', pp: 5 }, { id: 'B', pp: 5 }, { id: 'C', pp: 5 }, { id: 'D', pp: 5 }],
    nature: 'TIMID', item: 'X', ability: 'Y', ...over
  }
}

function draftFor(s: TeamSummary, over: Partial<PokemonDraft> = {}): PokemonDraft {
  return {
    saveId: 'save:test', instanceKey: instanceKeyOf(s),
    location: { source: 'box', box: 0, slot: 0 },
    speciesId: s.internalName, selectedFormId: '', favorite: false,
    recommendedSet: set(), reviewState: 'pending', updatedAt: 1, ...over
  }
}

async function mountView(summaries: TeamSummary[], seed: PokemonDraft[] = [], bytes: Uint8Array | null = new Uint8Array([9])) {
  const drafts = usePokemonDrafts(new MemoryBackend())
  for (const d of seed) await drafts.saveDraft(d)
  const wrapper = mount(ReviewChangesView, { props: { summaries, drafts, bytes } })
  await flushPromises()
  return { wrapper, drafts }
}

beforeEach(() => {
  pid = 1
  applyMock.mockReset()
  downloadMock.mockReset()
})

describe('ReviewChangesView', () => {
  it('should count analysed, configured, megas and untouched', async () => {
    const a = mon({ internalName: 'CHARIZARD', inParty: true })
    const b = mon({ internalName: 'BLASTOISE', boxSlot: 1 })
    const c = mon({ internalName: 'VENUSAUR', boxSlot: 2 })
    const { wrapper } = await mountView([a, b, c], [
      draftFor(a),
      draftFor(b, { selectedFormId: 'Mega Blastoise X', recommendedSet: set({ tier: 'mega', megaFormName: 'Mega Blastoise X' }) })
    ])
    const tiles = wrapper.findAll('.rev-tile .rev-n').map(n => n.text())
    expect(tiles).toEqual(['3', '2', '1', '1'])
    expect(wrapper.findAll('.chg')).toHaveLength(2)
  })

  it('should emit edit with the instance key and back', async () => {
    const a = mon({ internalName: 'CHARIZARD', inParty: true })
    const { wrapper } = await mountView([a], [draftFor(a)])
    await wrapper.get('.chg-edit').trigger('click')
    expect(wrapper.emitted('edit')?.[0]).toEqual([instanceKeyOf(a)])
    await wrapper.get('.rev-back').trigger('click')
    expect(wrapper.emitted('back')).toHaveLength(1)
  })

  it('should disable confirm and show an empty state with no drafts', async () => {
    const { wrapper } = await mountView([mon({ internalName: 'CHARIZARD', inParty: true })])
    expect((wrapper.get('.rev-confirm').element as HTMLButtonElement).disabled).toBe(true)
    expect(wrapper.get('.rev-empty').text()).toMatch(/no configuraste/i)
  })

  it('should warn about incomplete sets', async () => {
    const a = mon({ internalName: 'CHARIZARD', inParty: true })
    const { wrapper } = await mountView([a], [
      draftFor(a, { recommendedSet: set({ moves: [{ id: 'A', pp: 5 }] }) })
    ])
    expect(wrapper.get('.rev-warn').text()).toMatch(/set incompleto/i)
  })

  it('should always show the backup warning', async () => {
    const a = mon({ internalName: 'CHARIZARD', inParty: true })
    const { wrapper } = await mountView([a], [draftFor(a)])
    expect(wrapper.get('.rev-backup').text()).toMatch(/respaldo/i)
  })

  it('should run applyDraftChanges and download the fixed name when verification passes', async () => {
    applyMock.mockReturnValue(applyResult({ applied: 5 }))
    const a = mon({ internalName: 'CHARIZARD', inParty: true })
    const { wrapper } = await mountView([a], [draftFor(a)])
    await wrapper.get('.rev-confirm').trigger('click')
    await flushPromises()
    expect(applyMock).toHaveBeenCalledWith(expect.any(Uint8Array), expect.any(Array))
    expect(downloadMock).toHaveBeenCalledWith(expect.any(Uint8Array), 'Pokemon_Anil_optimizado.rxdata')
    expect(wrapper.text()).toContain('5 sets aplicados')

    await wrapper.get('.rev-confirm').trigger('click')
    expect(wrapper.emitted('done')).toBeTruthy()
  })

  it('should hide the download and explain when verification fails', async () => {
    applyMock.mockReturnValue(applyResult({ verified: false, diffs: ['$.player.x', '$.player.y'] }))
    const a = mon({ internalName: 'CHARIZARD', inParty: true })
    const { wrapper } = await mountView([a], [draftFor(a)])
    await wrapper.get('.rev-confirm').trigger('click')
    await flushPromises()
    expect(wrapper.get('.rev-result').classes()).toContain('is-bad')
    expect(wrapper.text()).toContain('No se ofrece la descarga')
    expect(wrapper.text()).toContain('no se modificó')
    expect(downloadMock).not.toHaveBeenCalled()
  })

  it('should surface a serialization error', async () => {
    applyMock.mockImplementation(() => { throw new Error('bad symbol') })
    const a = mon({ internalName: 'CHARIZARD', inParty: true })
    const { wrapper } = await mountView([a], [draftFor(a)])
    await wrapper.get('.rev-confirm').trigger('click')
    await flushPromises()
    expect(wrapper.get('.rev-error').text()).toContain('bad symbol')
  })
})
