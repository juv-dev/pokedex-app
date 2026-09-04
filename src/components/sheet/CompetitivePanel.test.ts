import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import CompetitivePanel from './CompetitivePanel.vue'
import type { TemplateCardVM } from '../../lib/types'

function card(p: Partial<TemplateCardVM>): TemplateCardVM {
  return {
    tier: 'optimo', tierLabel: 'Óptimo', roleId: 'wall-physical', roleLabel: 'Muro físico',
    abilityDisplay: 'Espesura (n.º 65)', itemDisplay: 'Lodo Negro (n.º 116)', natureDisplay: 'Osada (n.º 5)',
    natureKey: 'BOLD', evs: [252, 0, 252, 0, 4, 0], ivs: [31, 31, 31, 31, 31, 31],
    moves: [], moveIds: [], justification: '', note: '', bannerText: '', isPrimary: true, alternatives: [],
    ...p
  } as TemplateCardVM
}

const baseStats = [80, 82, 83, 100, 100, 80]

describe('CompetitivePanel', () => {
  it('should show the competitive tier badge', () => {
    expect(mount(CompetitivePanel, { props: { cards: [card({})], baseStats, plan: 'opt' } }).get('.sheet-comp-badge').text()).toContain('ÓPTIMO')
    const viable = mount(CompetitivePanel, { props: { cards: [card({ tier: 'viable', tierLabel: 'Viable' })], baseStats, plan: 'via' } })
    expect(viable.get('.sheet-comp-badge').text()).toContain('VIABLE')
  })

  it('should always render the Óptimo/Viable selector', () => {
    expect(mount(CompetitivePanel, { props: { cards: [card({})], baseStats, plan: 'opt' } }).find('.sheet-plan').exists()).toBe(true)
    expect(mount(CompetitivePanel, { props: { cards: [card({}), card({ tier: 'viable' })], baseStats, plan: 'opt' } }).find('.sheet-plan').exists()).toBe(true)
  })

  it('should show nature, item and ability with their identifier number', () => {
    const text = mount(CompetitivePanel, { props: { cards: [card({})], baseStats, plan: 'opt' } }).text()
    expect(text).toContain('Osada · n.º 5')
    expect(text).toContain('Lodo Negro · n.º 116')
    expect(text).toContain('Espesura · n.º 65')
  })

  it('should read the active template from the plan prop', () => {
    const wrapper = mount(CompetitivePanel, {
      props: { cards: [card({}), card({ natureDisplay: 'Miedosa (n.º 22)' })], baseStats, plan: 'via' }
    })
    expect(wrapper.text()).toContain('Miedosa · n.º 22')
  })

  it('should render four quick-stat boxes', () => {
    const wrapper = mount(CompetitivePanel, { props: { cards: [card({})], baseStats, plan: 'opt' } })
    expect(wrapper.findAll('.sheet-quick-box')).toHaveLength(4)
  })

  it('should add an evolution row only when an evo method is supplied', () => {
    const base = { cards: [card({})], baseStats, plan: 'opt' as const }
    expect(mount(CompetitivePanel, { props: base }).findAll('.sheet-comp-info-row')).toHaveLength(3)
    const withEvo = mount(CompetitivePanel, { props: { ...base, evoInfo: 'Evoluciona con objeto — usando Piedra Agua' } })
    const rows = withEvo.findAll('.sheet-comp-info-row')
    expect(rows).toHaveLength(4)
    expect(rows[3].text()).toContain('Piedra Agua')
  })
})
