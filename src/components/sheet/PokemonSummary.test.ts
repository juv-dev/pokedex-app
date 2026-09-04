import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import PokemonSummary from './PokemonSummary.vue'
import type { DexNode } from '../../lib/types'

const node = {
  dexNum: 3, displayName: 'Venusaur', genus: 'Semilla', sprite: '/anil-sprites/venusaur.png', types: ['grass', 'poison']
} as unknown as DexNode

describe('PokemonSummary', () => {
  it('should show the national number, category, name and a chip per type', () => {
    const wrapper = mount(PokemonSummary, { props: { node } })
    expect(wrapper.get('.sheet-summary-kicker').text()).toContain('#003')
    expect(wrapper.get('.sheet-summary-kicker').text()).toContain('SEMILLA')
    expect(wrapper.get('.sheet-summary-name').text()).toBe('Venusaur')
    expect(wrapper.findAll('.hud-type-chip')).toHaveLength(2)
    expect(wrapper.get('.sheet-summary-sprite').attributes('src')).toBe('/anil-sprites/venusaur.png')
  })

  it('should fall back to a dash when there is no national number', () => {
    const wrapper = mount(PokemonSummary, { props: { node: { ...node, dexNum: null } as DexNode } })
    expect(wrapper.get('.sheet-summary-kicker').text()).toContain('—')
  })
})
