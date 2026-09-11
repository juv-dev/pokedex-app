import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import InstanceGallery from './InstanceGallery.vue'
import type { InstanceRow } from '../../lib/configureRows'

function row(over: Partial<InstanceRow> & { instanceKey: string; internalName: string }): InstanceRow {
  return {
    displayName: over.internalName,
    speciesName: over.internalName,
    num: 6,
    level: 100,
    sprite: '/s.png',
    types: ['fire'],
    location: { source: 'box', box: 0, slot: 0 },
    locationLabel: 'Caja 1',
    slotLabel: '1',
    ...over
  }
}

const rows = [
  row({ instanceKey: 'a', internalName: 'CHARIZARD' }),
  row({ instanceKey: 'b', internalName: 'PIKACHU', locationLabel: 'Equipo', slotLabel: '—' })
]

describe('InstanceGallery', () => {
  it('should render a card per row and mark the active one', () => {
    const wrapper = mount(InstanceGallery, {
      props: { rows, activeKey: 'b', favorites: new Set<string>(), draftState: () => 'none' }
    })
    const cards = wrapper.findAll('.cfg-card')
    expect(cards).toHaveLength(2)
    expect(cards[1].classes()).toContain('is-active')
  })

  it('should emit select without triggering favorite, and favorite without select', async () => {
    const wrapper = mount(InstanceGallery, {
      props: { rows, activeKey: null, favorites: new Set<string>(['CHARIZARD']), draftState: () => 'none' }
    })
    await wrapper.findAll('.cfg-card')[0].trigger('click')
    expect(wrapper.emitted('select')?.[0]).toEqual(['a'])

    await wrapper.findAll('.cfg-card-fav')[1].trigger('click')
    expect(wrapper.emitted('toggle-favorite')?.[0]).toEqual(['PIKACHU'])
    expect(wrapper.emitted('select')).toHaveLength(1)
  })

  it('should check an applied card and dot a saving one', () => {
    const saved = mount(InstanceGallery, {
      props: { rows, activeKey: null, favorites: new Set<string>(), draftState: (k: string) => (k === 'a' ? 'saved' as const : 'none' as const) }
    })
    expect(saved.findAll('.cfg-card-check')).toHaveLength(1)
    expect(saved.findAll('.cfg-card-dot')).toHaveLength(0)

    const saving = mount(InstanceGallery, {
      props: { rows, activeKey: null, favorites: new Set<string>(), draftState: (k: string) => (k === 'a' ? 'saving' as const : 'none' as const) }
    })
    expect(saving.findAll('.cfg-card-dot')).toHaveLength(1)
  })
})
