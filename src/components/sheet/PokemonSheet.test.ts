import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import PokemonSheet from './PokemonSheet.vue'
import StatBlock from './StatBlock.vue'
import type { DexNode, TemplateGameData, TemplateCardVM } from '../../lib/types'

const gameData = { move: () => undefined } as unknown as TemplateGameData

function card(evs: number[], ivs: number[]): TemplateCardVM {
  return {
    tier: 'optimo', tierLabel: 'Óptimo', roleId: 'wall-physical', roleLabel: 'Muro físico',
    abilityDisplay: '', itemDisplay: '', natureDisplay: '', natureKey: 'TIMID',
    evs, ivs, moves: [], moveIds: [], justification: '', note: '', bannerText: '', isPrimary: true, alternatives: []
  } as unknown as TemplateCardVM
}

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

  it('should keep the general-info panel in save context', () => {
    const wrapper = mount(PokemonSheet, { props: { ...baseProps, context: 'save' as const, crumbs: ['Mi partida', 'Caja 1', 'Venusaur'] } })
    expect(wrapper.find('.sheet-info').exists()).toBe(true)
    expect(wrapper.find('.sheet-summary').exists()).toBe(true)
  })

  it('should show a labelled back control in save context', () => {
    const dex = mount(PokemonSheet, { props: { ...baseProps, context: 'dex' as const } })
    expect(dex.find('.sheet-back-label').exists()).toBe(false)
    const save = mount(PokemonSheet, { props: { ...baseProps, context: 'save' as const } })
    expect(save.get('.sheet-back-label').text()).toContain('Vista del equipo')
  })

  it('should emit back when the breadcrumb button is pressed', async () => {
    const wrapper = mount(PokemonSheet, { props: { ...baseProps, context: 'save' as const } })
    await wrapper.get('.sheet-back').trigger('click')
    expect(wrapper.emitted('back')).toBeTruthy()
  })

  it('should offer species navigation in both contexts when neighbours exist', () => {
    const dex = mount(PokemonSheet, { props: { ...baseProps, context: 'dex' as const, prevAvailable: true, nextAvailable: true } })
    expect(dex.findAll('.sheet-nav-btn')).toHaveLength(2)
    const save = mount(PokemonSheet, { props: { ...baseProps, context: 'save' as const, prevAvailable: true } })
    expect(save.find('.sheet-nav').exists()).toBe(true)
  })

  it('should hide species navigation when no neighbour is available', () => {
    const wrapper = mount(PokemonSheet, { props: { ...baseProps, context: 'save' as const } })
    expect(wrapper.find('.sheet-nav').exists()).toBe(false)
  })

  it('should render the evolution line only when the family has more than one form', () => {
    const alone = mount(PokemonSheet, { props: { ...baseProps, context: 'dex' as const } })
    expect(alone.find('.sheet-evo').exists()).toBe(false)

    const ivysaur = { ...node, internalName: 'IVYSAUR', displayName: 'Ivysaur', stageKind: 'evo', parentInternalName: 'VENUSAUR', evoLabel: 'Nivel 16' } as unknown as DexNode
    const family = mount(PokemonSheet, { props: { ...baseProps, nodes: [node, ivysaur], context: 'dex' as const } })
    expect(family.find('.sheet-evo').exists()).toBe(true)
    expect(family.findAll('.sheet-evo-row')).toHaveLength(2)
  })

  it('should feed the recommended set EVs and IVs to the stat block, ignoring the save file values', () => {
    const recommended = card([4, 0, 0, 252, 0, 252], [31, 0, 31, 31, 31, 31])
    const wrapper = mount(PokemonSheet, {
      props: {
        ...baseProps, context: 'save' as const, cards: [recommended],
        saveEvs: [0, 0, 0, 0, 0, 0], saveIvs: [0, 0, 0, 0, 0, 0]
      }
    })
    const stats = wrapper.findComponent(StatBlock)
    expect(stats.props('evs')).toEqual([4, 0, 0, 252, 0, 252])
    expect(stats.props('ivs')).toEqual([31, 0, 31, 31, 31, 31])
  })
})
