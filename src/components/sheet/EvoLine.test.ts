import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import EvoLine from './EvoLine.vue'
import type { DexNode } from '../../lib/types'

function n(p: Partial<DexNode>): DexNode {
  return {
    internalName: 'X', parentInternalName: null, displayName: 'X', sprite: '/s.png',
    types: ['grass'], stageKind: 'base', evoLabel: '', ...p
  } as unknown as DexNode
}

const line = [
  n({ internalName: 'BULBASAUR', displayName: 'Bulbasaur' }),
  n({ internalName: 'IVYSAUR', displayName: 'Ivysaur', parentInternalName: 'BULBASAUR', stageKind: 'evo', evoLabel: 'Nivel 16' }),
  n({ internalName: 'VENUSAUR', displayName: 'Venusaur', parentInternalName: 'IVYSAUR', stageKind: 'evo', evoLabel: 'Nivel 32' })
]

describe('EvoLine', () => {
  it('should render nothing for a single-stage species', () => {
    const wrapper = mount(EvoLine, { props: { nodes: [n({})], activeIdx: 0 } })
    expect(wrapper.find('.sheet-evo').exists()).toBe(false)
  })

  it('should list every non-mega form with its method and a form counter', () => {
    const wrapper = mount(EvoLine, { props: { nodes: line, activeIdx: 1 } })
    expect(wrapper.get('.sheet-evo-head').text()).toContain('3 formas')
    const rows = wrapper.findAll('.sheet-evo-row')
    expect(rows).toHaveLength(3)
    expect(rows[0].text()).toContain('Forma base')
    expect(rows[2].text()).toContain('Nivel 32')
  })

  it('should keep mega forms out of the list', () => {
    const nodes = [...line, n({ internalName: 'VENUSAUR_MEGA', displayName: 'Mega Venusaur', stageKind: 'mega', parentInternalName: 'VENUSAUR' })]
    const wrapper = mount(EvoLine, { props: { nodes, activeIdx: 0 } })
    expect(wrapper.findAll('.sheet-evo-row')).toHaveLength(3)
  })

  it('should mark the active form as current', () => {
    const wrapper = mount(EvoLine, { props: { nodes: line, activeIdx: 2 } })
    const rows = wrapper.findAll('.sheet-evo-row')
    expect(rows[2].classes()).toContain('is-current')
    expect(rows[0].classes()).not.toContain('is-current')
  })

  it('should highlight the pre-mega form when the active node is a mega', () => {
    const nodes = [...line, n({ internalName: 'VENUSAUR_MEGA', displayName: 'Mega Venusaur', stageKind: 'mega', parentInternalName: 'VENUSAUR' })]
    const wrapper = mount(EvoLine, { props: { nodes, activeIdx: 3 } })
    const rows = wrapper.findAll('.sheet-evo-row')
    expect(rows[2].classes()).toContain('is-current')
  })

  it('should emit the node index when a form is chosen', async () => {
    const wrapper = mount(EvoLine, { props: { nodes: line, activeIdx: 2 } })
    await wrapper.findAll('.sheet-evo-row')[0].trigger('click')
    expect(wrapper.emitted('select')?.[0]).toEqual([0])
  })
})
