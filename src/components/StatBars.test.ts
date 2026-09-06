import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import StatBars from './StatBars.vue'

describe('StatBars', () => {
  it('should render one row per base stat with its raw value', () => {
    const wrapper = mount(StatBars, { props: { stats: [45, 49, 49, 65, 65, 45] } })
    const rows = wrapper.findAll('.hud-stat-row')
    expect(rows).toHaveLength(6)
    expect(rows[0].get('.hud-stat-val').text()).toBe('45')
    expect(rows[3].get('.hud-stat-val').text()).toBe('65')
  })

  it('should clamp the progress bar to its max when a stat exceeds 180', () => {
    const wrapper = mount(StatBars, { props: { stats: [250, 10, 10, 75, 135, 55] } })
    const rows = wrapper.findAll('.hud-stat-row')
    expect(rows[0].get('.hud-stat-val').text()).toBe('250')
    expect(rows[0].get('[role="progressbar"]').attributes('aria-valuenow')).toBe('180')
    expect(rows[0].get('.hud-stat-fill').attributes('style')).toContain('width: 100%')
  })

  it('should mark the nature-raised and nature-lowered stats', () => {
    const wrapper = mount(StatBars, { props: { stats: [80, 82, 83, 100, 100, 80], raisesIdx: 5, lowersIdx: 1 } })
    const rows = wrapper.findAll('.hud-stat-row')
    expect(rows[5].get('.mark').text()).toBe('▲')
    expect(rows[1].get('.mark').text()).toBe('▼')
  })
})
