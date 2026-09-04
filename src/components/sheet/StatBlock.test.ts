import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import StatBlock from './StatBlock.vue'

const base = {
  baseStats: [80, 100, 123, 122, 120, 80],
  evs: [252, 0, 252, 0, 4, 0],
  ivs: [31, 31, 31, 31, 31, 31]
}

describe('StatBlock', () => {
  it('should render six base-stat bars by default', () => {
    const wrapper = mount(StatBlock, { props: base })
    expect(wrapper.findAll('[role="progressbar"]').length).toBeGreaterThanOrEqual(6)
  })

  it('should expose Base, EVs and IVs by default', () => {
    const wrapper = mount(StatBlock, { props: base })
    const triggers = wrapper.findAll('.sheet-seg-item').map(t => t.text())
    expect(triggers).toEqual(['Base', 'EVs', 'IVs'])
  })

  it('should still support hiding the IVs tab via the showIvs prop', () => {
    const wrapper = mount(StatBlock, { props: { ...base, showIvs: false } })
    const triggers = wrapper.findAll('.sheet-seg-item').map(t => t.text())
    expect(triggers).toEqual(['Base', 'EVs'])
  })

  it('should not render a total or a recommended-distribution box', () => {
    const wrapper = mount(StatBlock, { props: base })
    expect(wrapper.find('.sheet-stats-total').exists()).toBe(false)
    expect(wrapper.find('.sheet-stats-rec').exists()).toBe(false)
  })
})
