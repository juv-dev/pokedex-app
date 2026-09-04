import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import PokemonSheet from './PokemonSheet.vue'
import type { DexNode, TemplateGameData } from '../../lib/types'

const gameData = { move: () => undefined } as unknown as TemplateGameData

const node = {
  internalName: 'VENUSAUR', dexNum: 3, displayName: 'Venusaur', genus: 'Semilla',
  sprite: '/s.png', types: ['grass', 'poison'], heightM: '2.0', weightKg: '100.0',
  stats: { hp: 80, attack: 82, defense: 83, 'special-attack': 100, 'special-defense': 100, speed: 80 },
  eggGroups: [{ name: 'monster', url: '' }],
  abilities: [{ ability: { name: 'overgrow', url: '' }, is_hidden: false }],
  stageKind: 'base', isMega: false, megaStone: null, evoLabel: ''
} as unknown as DexNode

const baseProps = {
  node, nodes: [node], idx: 0, cards: [], gameData, crumbs: ['Pokédex', '#003', 'Venusaur']
}

describe('PokemonSheet', () => {
  it('should render the breadcrumb and the core panels in dex context', () => {
    const wrapper = mount(PokemonSheet, { props: { ...baseProps, context: 'dex' as const } })
    expect(wrapper.get('.sheet-back').text()).toContain('Venusaur')
    expect(wrapper.find('.sheet-summary').exists()).toBe(true)
    expect(wrapper.find('.sheet-info').exists()).toBe(true)
    expect(wrapper.find('.sheet-stats').exists()).toBe(true)
    expect(wrapper.find('.sheet-mega').exists()).toBe(false)
  })

  it('should drop the general-info panel in save context', () => {
    const wrapper = mount(PokemonSheet, { props: { ...baseProps, context: 'save' as const, crumbs: ['Mi partida', 'Caja 1', 'Venusaur'] } })
    expect(wrapper.find('.sheet-info').exists()).toBe(false)
    expect(wrapper.find('.sheet-summary').exists()).toBe(true)
  })

  it('should emit back when the breadcrumb button is pressed', async () => {
    const wrapper = mount(PokemonSheet, { props: { ...baseProps, context: 'save' as const } })
    await wrapper.get('.sheet-back').trigger('click')
    expect(wrapper.emitted('back')).toBeTruthy()
  })

  it('should offer species navigation only in dex context', () => {
    const dex = mount(PokemonSheet, { props: { ...baseProps, context: 'dex' as const, prevAvailable: true, nextAvailable: true } })
    expect(dex.findAll('.sheet-nav-btn')).toHaveLength(2)
    const save = mount(PokemonSheet, { props: { ...baseProps, context: 'save' as const, prevAvailable: true } })
    expect(save.find('.sheet-nav').exists()).toBe(false)
  })
})
