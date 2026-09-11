import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ChangeRow from './ChangeRow.vue'
import type { PokemonDraft } from '../../lib/draftStore'

function draft(over: Partial<PokemonDraft> = {}): PokemonDraft {
  return {
    saveId: 's', instanceKey: 'pid:9',
    location: { source: 'box', box: 6, slot: 3 },
    speciesId: 'GYARADOS', selectedFormId: '', favorite: false,
    recommendedSet: {
      source: 'template', tier: 'optimo', referenceFrom: null, megaFormName: null,
      base: [1, 1, 1, 1, 1, 1], evs: [0, 0, 0, 0, 0, 0], ivs: [31, 31, 31, 31, 31, 31],
      moves: [], nature: null, item: null, ability: null
    },
    reviewState: 'pending', updatedAt: 1, ...over
  }
}

const base = { speciesName: 'Gyarados', locationLabel: 'Caja 7', slotLabel: '4', nickname: null }

describe('ChangeRow', () => {
  it('should describe the recommended-set payload when no mega is chosen', () => {
    const wrapper = mount(ChangeRow, { props: { draft: draft(), ...base } })
    expect(wrapper.find('.chg-form-to').exists()).toBe(false)
    expect(wrapper.get('.chg-form-plain').text()).toMatch(/set recomendado/i)
  })

  it('should show the chosen mega as the final form and label it as a mega change', () => {
    const wrapper = mount(ChangeRow, {
      props: { draft: draft({ selectedFormId: 'Mega Gyarados', recommendedSet: { ...draft().recommendedSet, tier: 'mega' } }), ...base }
    })
    expect(wrapper.get('.chg-form-to').text()).toBe('Mega Gyarados')
    expect(wrapper.get('.chg-tier').text()).toContain('Mega')
  })

  it('should label an optimised set for the current form', () => {
    const wrapper = mount(ChangeRow, { props: { draft: draft(), ...base } })
    expect(wrapper.get('.chg-tier').text()).toBe('Set optimizado')
  })

  it('should emit edit with its instance key', async () => {
    const wrapper = mount(ChangeRow, { props: { draft: draft(), ...base } })
    await wrapper.get('.chg-edit').trigger('click')
    expect(wrapper.emitted('edit')?.[0]).toEqual(['pid:9'])
  })
})
