import { describe, expect, it, beforeEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import ConfigureView from './ConfigureView.vue'
import { usePokemonDrafts } from '../../composables/usePokemonDrafts'
import { MemoryBackend } from '../../lib/draftStore'
import { instanceKeyOf } from '../../lib/instanceKey'
import { saveFavorites } from '../../lib/favorites'
import { recommendedSetFor } from '../../lib/recommendedSet'
import { STAT_KEYS, type TeamSummary } from '../../lib/team'

let pid = 1
function mon(over: Partial<TeamSummary> & { internalName: string }): TeamSummary {
  return {
    raw: { __class: 'Pokemon', __ivars: { '@personalID': pid++ } },
    dexNum: 6, displayName: over.internalName, nickname: null, sprite: '/s.png', types: ['fire'],
    level: 100, isShiny: false, speciesSlug: over.internalName.toLowerCase(), isCustom: false,
    ballId: null, ballLabel: '', inParty: false, boxIndex: 0, boxName: 'Caja 1', boxSlot: 0, ...over
  }
}

function mountView(summaries: TeamSummary[]) {
  const drafts = usePokemonDrafts(new MemoryBackend())
  const wrapper = mount(ConfigureView, {
    props: { summaries, saveId: 'save:test', drafts, fileName: 'Partida 1.rxdata' }
  })
  const idle = () => (wrapper.vm as unknown as { whenIdle: () => Promise<void> }).whenIdle()
  return { wrapper, drafts, idle }
}

async function selectFirst(wrapper: ReturnType<typeof mountView>['wrapper'], idle: () => Promise<void>) {
  await wrapper.get('.cfg-card').trigger('click')
  await idle()
  await flushPromises()
}

beforeEach(() => {
  pid = 1
  saveFavorites([])
})

describe('ConfigureView', () => {
  it('should render one card per instance', () => {
    const { wrapper } = mountView([
      mon({ internalName: 'CHARIZARD', inParty: true }),
      mon({ internalName: 'PIKACHU', boxSlot: 1 })
    ])
    expect(wrapper.findAll('.cfg-card')).toHaveLength(2)
  })

  it('should not create a draft on select but persist one when the set is applied', async () => {
    const summary = mon({ internalName: 'CHARIZARD', inParty: true })
    const { wrapper, drafts, idle } = mountView([summary])
    const key = instanceKeyOf(summary)

    await selectFirst(wrapper, idle)
    expect(drafts.getDraft(key)).toBeUndefined()

    await wrapper.get('.cfg-panel-apply').trigger('click')
    await idle()
    await flushPromises()

    const draft = drafts.getDraft(key)
    expect(draft).toBeDefined()
    expect(draft?.speciesId).toBe('CHARIZARD')
    expect(draft?.recommendedSet.moves.length).toBeGreaterThan(0)
    expect(drafts.stateOf(key)).toBe('saved')
    expect(wrapper.text()).toContain('Guardado localmente')
  })

  it('should apply the recommended set to every pending instance in bulk', async () => {
    const mons = [
      mon({ internalName: 'CHARIZARD', inParty: true }),
      mon({ internalName: 'PIKACHU', boxSlot: 1 }),
      mon({ internalName: 'BLASTOISE', boxSlot: 2 })
    ]
    const { wrapper, drafts, idle } = mountView(mons)
    await wrapper.get('.cfg-apply-all').trigger('click')
    await idle()
    await flushPromises()
    for (const m of mons) expect(drafts.getDraft(instanceKeyOf(m))).toBeDefined()
    expect(wrapper.text()).toContain('3 cambios guardados')
    expect(wrapper.get('.cfg-review').text()).toContain('Revisar 3 cambios')
  })

  it('should recompute the set when a mega form is chosen', async () => {
    const summary = mon({ internalName: 'CHARIZARD', inParty: true, dexNum: 6 })
    const { wrapper, drafts, idle } = mountView([summary])
    await selectFirst(wrapper, idle)

    const radios = wrapper.findAll('.cfg-form-opt input')
    expect(radios.length).toBeGreaterThan(1)
    await radios[1].setValue(true)
    await idle()
    await flushPromises()

    const draft = drafts.getDraft(instanceKeyOf(summary))!
    expect(draft.selectedFormId).not.toBe('')
    expect(draft.recommendedSet.megaFormName).toBe(draft.selectedFormId)
  })

  it('should filter by team scope and by search', async () => {
    const { wrapper } = mountView([
      mon({ internalName: 'CHARIZARD', inParty: true }),
      mon({ internalName: 'PIKACHU', boxSlot: 1 }),
      mon({ internalName: 'BLASTOISE', boxSlot: 2 })
    ])
    await wrapper.findAll('.cfg-scope-tab')[1].trigger('click')
    expect(wrapper.findAll('.cfg-card')).toHaveLength(1)

    await wrapper.findAll('.cfg-scope-tab')[0].trigger('click')
    await wrapper.get('.cfg-search input').setValue('pika')
    expect(wrapper.findAll('.cfg-card')).toHaveLength(1)
    expect(wrapper.get('.cfg-card').text()).toContain('Pikachu')
  })

  it('should cap the gallery at six cards per page', () => {
    const many = Array.from({ length: 20 }, (_, i) => mon({ internalName: 'CHARIZARD', boxSlot: i }))
    const { wrapper } = mountView(many)
    expect(wrapper.findAll('.cfg-card')).toHaveLength(6)
    expect(wrapper.find('.cfg-pager').exists()).toBe(true)
  })

  it('should emit open-detail for the active instance', async () => {
    const summary = mon({ internalName: 'CHARIZARD', inParty: true })
    const { wrapper, idle } = mountView([summary])
    await selectFirst(wrapper, idle)
    await wrapper.get('.cfg-detail-link').trigger('click')
    expect(wrapper.emitted('open-detail')?.[0]).toEqual([instanceKeyOf(summary), [summary.internalName]])
  })

  it('should emit the currently filtered order, not the raw roster order, alongside open-detail', async () => {
    const summaries = [
      mon({ internalName: 'CHARIZARD', inParty: true }),
      mon({ internalName: 'PIKACHU', boxSlot: 1 }),
      mon({ internalName: 'BLASTOISE', boxSlot: 2 })
    ]
    const { wrapper, idle } = mountView(summaries)
    await wrapper.get('.cfg-search input').setValue('pika')
    await idle()
    await wrapper.get('.cfg-card').trigger('click')
    await idle()
    await wrapper.get('.cfg-detail-link').trigger('click')
    expect(wrapper.emitted('open-detail')?.[0]).toEqual([instanceKeyOf(summaries[1]), ['PIKACHU']])
  })

  it('should toggle a favorite from the card heart', async () => {
    const { wrapper } = mountView([mon({ internalName: 'CHARIZARD', inParty: true })])
    await wrapper.get('.cfg-card-fav').trigger('click')
    expect(wrapper.get('.cfg-card-fav').classes()).toContain('is-on')
  })

  it('should emit change-file from the load-another-save action', async () => {
    const { wrapper } = mountView([mon({ internalName: 'CHARIZARD', inParty: true })])
    await wrapper.get('.cfg-change-file').trigger('click')
    expect(wrapper.emitted('change-file')).toBeTruthy()
  })

  it('should surface an all-done state when every instance already carries its best set', async () => {
    const set = await recommendedSetFor('DUSTOX')
    expect(set).toBeTruthy()
    const summary: TeamSummary = {
      ...mon({ internalName: 'DUSTOX', inParty: true, types: ['bug', 'poison'] }),
      raw: {
        __class: 'Pokemon',
        __ivars: {
          '@personalID': 1,
          '@level': 100,
          '@nature': set!.nature ?? 'HARDY',
          '@ability': set!.ability ?? '',
          '@item': set!.item ?? '',
          '@ev': Object.fromEntries(STAT_KEYS.map((k, i) => [k, set!.evs[i] ?? 0])),
          '@iv': Object.fromEntries(STAT_KEYS.map((k, i) => [k, set!.ivs[i] ?? 31])),
          '@moves': set!.moves.map(m => ({ __ivars: { '@id': m.id, '@pp': m.pp, '@ppup': 0 } }))
        }
      }
    }
    const { wrapper, idle } = mountView([summary])
    await idle()
    await flushPromises()

    expect(wrapper.get('.cfg-alldone').text()).toMatch(/ya está optimizada/i)
    expect(wrapper.find('.cfg-card').exists()).toBe(true)
    await wrapper.get('.cfg-alldone-btn').trigger('click')
    expect(wrapper.emitted('change-file')).toBeTruthy()
  })

  it('should recognise a re-imported mega by its held stone and label the card with that form', async () => {
    const set = await recommendedSetFor('CHARIZARD', { megaFormName: 'Mega Charizard X' })
    expect(set).toBeTruthy()
    const summary: TeamSummary = {
      ...mon({ internalName: 'CHARIZARD', inParty: true, dexNum: 6, types: ['fire', 'flying'] }),
      raw: {
        __class: 'Pokemon',
        __ivars: {
          '@personalID': 1,
          '@level': 100,
          '@nature': set!.nature ?? 'HARDY',
          '@ability': set!.ability ?? '',
          '@item': set!.item ?? 'CHARIZARDITEX',
          '@ev': Object.fromEntries(STAT_KEYS.map((k, i) => [k, set!.evs[i] ?? 0])),
          '@iv': Object.fromEntries(STAT_KEYS.map((k, i) => [k, set!.ivs[i] ?? 31])),
          '@moves': set!.moves.map(m => ({ __ivars: { '@id': m.id, '@pp': m.pp, '@ppup': 0 } }))
        }
      }
    }
    const { wrapper, drafts, idle } = mountView([summary])
    await idle()
    await flushPromises()

    expect(drafts.getDraft(instanceKeyOf(summary))).toBeUndefined()
    expect(wrapper.get('.cfg-card-name').text()).toBe('Mega Charizard X')
    expect(wrapper.get('.cfg-card').text()).toMatch(/mejor configuración/i)
  })

  it('should flag only the Galarian Corsola as still able to evolve', async () => {
    const { wrapper } = mountView([
      mon({ internalName: 'CORSOLA', form: 1, boxSlot: 0 }),
      mon({ internalName: 'CORSOLA', form: 0, boxSlot: 1 })
    ])
    const evoTab = wrapper.findAll('.cfg-scope-tab').find(t => /sin evolucionar/i.test(t.text()))
    expect(evoTab).toBeTruthy()
    expect(evoTab!.text()).toBe('Sin evolucionar1')

    expect(wrapper.findAll('.cfg-card')).toHaveLength(2)
    await evoTab!.trigger('click')
    expect(wrapper.findAll('.cfg-card')).toHaveLength(1)
  })
})
