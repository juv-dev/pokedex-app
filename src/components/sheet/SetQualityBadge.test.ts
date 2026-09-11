import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import SetQualityBadge from './SetQualityBadge.vue'

describe('SetQualityBadge', () => {
  it('should label each tier and show its range', () => {
    const optimo = mount(SetQualityBadge, { props: { score: 96, tier: 'optimo' } })
    expect(optimo.text()).toContain('Óptimo')
    expect(optimo.text()).toContain('90–100')
    expect(optimo.get('.setq').classes()).toContain('setq--optimo')

    expect(mount(SetQualityBadge, { props: { score: 78, tier: 'viable' } }).text()).toContain('Viable')
    const ajustes = mount(SetQualityBadge, { props: { score: 40, tier: 'ajustes' } })
    expect(ajustes.text()).toContain('Requiere ajustes')
    expect(ajustes.text()).toContain('0–69')
  })

  it('should show the numeric score out of 100', () => {
    expect(mount(SetQualityBadge, { props: { score: 83, tier: 'viable' } }).get('.setq-score').text()).toContain('83')
  })
})
