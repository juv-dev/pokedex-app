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
  it('should badge a curated set as ÓPTIMO', () => {
    const wrapper = mount(CompetitivePanel, { props: { cards: [card({})], baseStats } })
    expect(wrapper.get('.sheet-comp-badge').text()).toContain('ÓPTIMO')
  })

  it('should badge any non-optimo set as VIABLE', () => {
    for (const tier of ['viable', 'auto', 'pendiente'] as const) {
      const wrapper = mount(CompetitivePanel, { props: { cards: [card({ tier })], baseStats } })
      expect(wrapper.get('.sheet-comp-badge').text()).toContain('VIABLE')
    }
  })

  it('should not render an Óptimo/Viable selector', () => {
    expect(mount(CompetitivePanel, { props: { cards: [card({})], baseStats } }).find('.sheet-plan').exists()).toBe(false)
  })

  it('should show nature, item and ability with their identifier number', () => {
    const text = mount(CompetitivePanel, { props: { cards: [card({})], baseStats } }).text()
    expect(text).toContain('Osada · n.º 5')
    expect(text).toContain('Lodo Negro · n.º 116')
    expect(text).toContain('Espesura · n.º 65')
  })

  it('should read the recommended set from the first card', () => {
    const wrapper = mount(CompetitivePanel, {
      props: { cards: [card({ natureDisplay: 'Miedosa (n.º 22)' }), card({ natureDisplay: 'Osada (n.º 5)' })], baseStats }
    })
    expect(wrapper.text()).toContain('Miedosa · n.º 22')
  })

  it('should render four quick-stat boxes', () => {
    const wrapper = mount(CompetitivePanel, { props: { cards: [card({})], baseStats } })
    expect(wrapper.findAll('.sheet-quick-box')).toHaveLength(4)
  })

  it('should add an evolution row only when an evo method is supplied', () => {
    const base = { cards: [card({})], baseStats }
    expect(mount(CompetitivePanel, { props: base }).findAll('.sheet-comp-info-row')).toHaveLength(3)
    const withEvo = mount(CompetitivePanel, { props: { ...base, evoInfo: 'Evoluciona con objeto — usando Piedra Agua' } })
    const rows = withEvo.findAll('.sheet-comp-info-row')
    expect(rows).toHaveLength(4)
    expect(rows[3].text()).toContain('Piedra Agua')
  })
})
