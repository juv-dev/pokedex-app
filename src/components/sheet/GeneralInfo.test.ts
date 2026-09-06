import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import GeneralInfo from './GeneralInfo.vue'
import type { DexNode } from '../../lib/types'

function node(p: Partial<DexNode>): DexNode {
  return {
    dexNum: 3, displayName: 'Venusaur', genus: 'Semilla', heightM: '2.0', weightKg: '100.0',
    eggGroups: [{ name: 'monster', url: '' }, { name: 'grass', url: '' }],
    abilities: [
      { ability: { name: 'overgrow', url: '' }, is_hidden: false },
      { ability: { name: 'chlorophyll', url: '' }, is_hidden: true }
    ],
    ...p
  } as unknown as DexNode
}

describe('GeneralInfo', () => {
  it('should list species, height and weight', () => {
    const text = mount(GeneralInfo, { props: { node: node({}) } }).text()
    expect(text).toContain('Semilla')
    expect(text).toContain('2.0 m')
    expect(text).toContain('100.0 kg')
  })

  it('should not render the egg group or abilities rows', () => {
    const text = mount(GeneralInfo, { props: { node: node({}) } }).text()
    expect(text).not.toContain('Grupo huevo')
    expect(text).not.toContain('Habilidades')
  })

  const regionValue = (dexNum: number | null) =>
    mount(GeneralInfo, { props: { node: node({ dexNum }) } }).findAll('.sheet-info-row')[3].get('dd').text()

  it('should show the origin region derived from the national number', () => {
    expect(regionValue(3)).toBe('Kanto')
    expect(regionValue(260)).toBe('Hoenn')
    expect(regionValue(906)).toBe('Paldea')
  })

  it('should label Añil-only species when there is no national number', () => {
    expect(regionValue(null)).toBe('Añil')
  })
})
