import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import InstanceConfigPanel from './InstanceConfigPanel.vue'
import type { InstanceRow } from '../../lib/configureRows'
import type { PokemonDraft } from '../../lib/draftStore'
import type { MegaOption } from '../../lib/recommendedSet'
import type { MegaRecommendation } from '../../lib/megaRecommendation'

const row: InstanceRow = {
  instanceKey: 'pid:1',
  internalName: 'CHARIZARD',
  displayName: 'Charizard',
  speciesName: 'Charizard',
  num: 6,
  level: 100,
  sprite: '/s.png',
  types: ['fire', 'flying'],
  location: { source: 'team', box: null, slot: null },
  locationLabel: 'Equipo',
  slotLabel: '—'
}

const draft: PokemonDraft = {
  saveId: 's', instanceKey: 'pid:1',
  location: { source: 'team', box: null, slot: null },
  speciesId: 'CHARIZARD', selectedFormId: '', favorite: false,
  recommendedSet: {
    source: 'template', tier: 'optimo', referenceFrom: null, megaFormName: null,
    base: [78, 84, 78, 109, 85, 100],
    evs: [0, 0, 0, 252, 4, 252], ivs: [31, 31, 31, 31, 31, 31],
    moves: [{ id: 'FIREBLAST', pp: 5 }, { id: 'AIRSLASH', pp: 15 }],
    nature: 'TIMID', item: 'HEAVYDUTYBOOTS', ability: 'BLAZE'
  },
  reviewState: 'pending', updatedAt: 1
}

const megaForms: MegaOption[] = [
  { formName: 'Mega Charizard X', megaStone: 'CHARIZARDITEX', megaStoneName: 'Charizardita X', megaMove: null },
  { formName: 'Mega Charizard Y', megaStone: 'CHARIZARDITEY', megaStoneName: 'Charizardita Y', megaMove: null }
]

const recommendation: MegaRecommendation = {
  formName: 'Mega Charizard X',
  label: 'Mega Charizard X',
  reasons: ['Sube +100 de estadísticas base.', 'Resiste rock, un punto flojo compartido del equipo.']
}

function mountPanel(over: Record<string, unknown> = {}) {
  return mount(InstanceConfigPanel, {
    props: {
      row, draft, saveState: 'saved', megaForms, recommendation, favorite: false, ...over
    }
  })
}

async function mountEditing(over: Record<string, unknown> = {}) {
  const wrapper = mountPanel(over)
  await wrapper.get('.cfg-panel-edit').trigger('click')
  return wrapper
}

describe('InstanceConfigPanel', () => {
  it('should prompt to pick a Pokémon when there is no row', () => {
    const wrapper = mountPanel({ row: null })
    expect(wrapper.text()).toContain('Elegí un Pokémon')
  })

  it('should summarise a saved draft with edit and discard actions', async () => {
    const wrapper = mountPanel()
    expect(wrapper.get('.cfg-panel-done').text()).toMatch(/ya tiene su mejor configuración/i)
    expect(wrapper.find('.cfg-form-opts').exists()).toBe(false)
    await wrapper.get('.cfg-panel-discard').trigger('click')
    expect(wrapper.emitted('discard')).toBeTruthy()
  })

  it('should list the current form plus each mega once editing, current form checked', async () => {
    const wrapper = await mountEditing()
    const opts = wrapper.findAll('.cfg-form-opt')
    expect(opts).toHaveLength(3)
    expect(opts[0].text()).toContain('Forma actual')
    expect((opts[0].find('input').element as HTMLInputElement).checked).toBe(true)
  })

  it('should mark the recommended form and explain it as contextual', async () => {
    const wrapper = await mountEditing()
    const recOpt = wrapper.findAll('.cfg-form-opt').find(o => o.text().includes('Mega Charizard X'))!
    expect(recOpt.find('.cfg-form-rec').exists()).toBe(true)
    expect(wrapper.get('.cfg-form-why').text()).toMatch(/contextual/i)
    expect(wrapper.get('.cfg-form-why').text()).toMatch(/se aplica sola/i)
  })

  it('should not render a form selector when the species has no mega', async () => {
    const wrapper = await mountEditing({ megaForms: [], recommendation: { formName: '', label: 'Forma actual', reasons: [] } })
    expect(wrapper.find('.cfg-form-opts').exists()).toBe(false)
    expect(wrapper.text()).toContain('Sin formas alternativas')
  })

  it('should emit select-form when a form is chosen', async () => {
    const wrapper = await mountEditing()
    await wrapper.findAll('.cfg-form-opt input')[1].setValue(true)
    expect(wrapper.emitted('select-form')?.[0]).toEqual(['Mega Charizard X'])
  })

  it('should reflect the local draft state and the specimen facts', () => {
    const wrapper = mountPanel()
    expect(wrapper.get('.cfg-panel-save').text()).toContain('Guardado localmente')
    const facts = wrapper.get('.cfg-panel-facts').text()
    expect(facts).toContain('Nivel')
    expect(facts).toContain('Formas')
  })

  it('should show a preview and an apply action when there is no draft yet', async () => {
    const wrapper = mountPanel({ draft: undefined })
    expect(wrapper.get('.cfg-panel-preview').text()).toMatch(/vista previa/i)
    await wrapper.get('.cfg-panel-apply').trigger('click')
    expect(wrapper.emitted('apply')).toBeTruthy()
  })

  it('should open the full sheet from the specimen row', async () => {
    const wrapper = mountPanel()
    await wrapper.get('.cfg-detail-link').trigger('click')
    expect(wrapper.emitted('open-detail')).toBeTruthy()
  })

  it('should flag an already-configured instance and offer to configure it anyway', async () => {
    const wrapper = mountPanel({ draft: undefined, ready: true })
    expect(wrapper.get('.cfg-panel-optimal').text()).toMatch(/ya trae su mejor configuración/i)
    expect(wrapper.find('.cfg-form-opts').exists()).toBe(false)
    await wrapper.get('.cfg-panel-apply').trigger('click')
    expect(wrapper.emitted('apply')).toBeTruthy()
  })
})
