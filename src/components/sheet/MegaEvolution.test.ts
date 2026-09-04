import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import MegaEvolution from './MegaEvolution.vue'
import type { DexNode } from '../../lib/types'

const stats = (n: number) => ({ hp: n, attack: n, defense: n, 'special-attack': n, 'special-defense': n, speed: n })

function n(p: Partial<DexNode>): DexNode {
  return {
    displayName: 'X', sprite: '/s.png', types: ['grass'], stageKind: 'base',
    megaStone: null, evoLabel: '', stats: stats(80), ...p
  } as unknown as DexNode
}

describe('MegaEvolution', () => {
  it('should render nothing when the line has no mega forms', () => {
    const wrapper = mount(MegaEvolution, { props: { nodes: [n({}), n({ stageKind: 'evo' })], activeIdx: 0 } })
    expect(wrapper.find('.sheet-mega').exists()).toBe(false)
  })

  it('should list the mega forms with a form counter', () => {
    const nodes = [
      n({ displayName: 'Venusaur' }),
      n({ displayName: 'Mega Venusaur', stageKind: 'mega', megaStone: 'Venusaurita', types: ['grass', 'poison'] })
    ]
    const wrapper = mount(MegaEvolution, { props: { nodes, activeIdx: 1 } })
    expect(wrapper.get('.sheet-mega-head').text()).toContain('1 forma')
    expect(wrapper.findAll('.sheet-mega-card')).toHaveLength(1)
    expect(wrapper.get('.sheet-mega-card').classes()).toContain('is-current')
  })

  it('should mark exactly one form as the strongest, even on a base-stat tie', () => {
    const nodes = [
      n({ displayName: 'Venusaur' }),
      n({ displayName: 'Mega Venusaur X', stageKind: 'mega', megaStone: 'Venusaurita X', stats: { ...stats(100), attack: 150 } }),
      n({ displayName: 'Mega Venusaur Y', stageKind: 'mega', megaStone: 'Venusaurita Y', stats: { ...stats(100), attack: 120, defense: 130 } })
    ]
    const wrapper = mount(MegaEvolution, { props: { nodes, activeIdx: 1 } })
    const stars = wrapper.findAll('.sheet-mega-star')
    expect(stars).toHaveLength(1)
    const strong = wrapper.findAll('.sheet-mega-card').find(c => c.classes().includes('is-strongest'))
    expect(strong?.text()).toContain('Mega Venusaur X')
  })

  it('should emit the node index when a form is chosen', async () => {
    const nodes = [n({}), n({ stageKind: 'mega', megaStone: 'Venusaurita' })]
    const wrapper = mount(MegaEvolution, { props: { nodes, activeIdx: 0 } })
    await wrapper.get('.sheet-mega-card').trigger('click')
    expect(wrapper.emitted('select')?.[0]).toEqual([1])
  })
})
