import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ScopeSelector from './ScopeSelector.vue'

const boxes = [{ index: 0, label: 'Caja 1' }, { index: 2, label: 'Caja 3' }]

describe('ScopeSelector', () => {
  it('should mark the active scope and emit on change', async () => {
    const wrapper = mount(ScopeSelector, { props: { scope: 'all', box: 'all', boxes } })
    const tabs = wrapper.findAll('.cfg-scope-tab')
    expect(tabs[0].classes()).toContain('is-active')
    await tabs[2].trigger('click')
    expect(wrapper.emitted('update:scope')?.[0]).toEqual(['box'])
  })

  it('should only show the box picker in box scope', async () => {
    const wrapper = mount(ScopeSelector, { props: { scope: 'all', box: 'all', boxes } })
    expect(wrapper.find('.cfg-scope-box').exists()).toBe(false)
    await wrapper.setProps({ scope: 'box' })
    expect(wrapper.find('.cfg-scope-box').exists()).toBe(true)
    expect(wrapper.findAll('option')).toHaveLength(3)
  })

  it('should emit a numeric box index', async () => {
    const wrapper = mount(ScopeSelector, { props: { scope: 'box', box: 'all', boxes } })
    await wrapper.get('select').setValue('2')
    expect(wrapper.emitted('update:box')?.[0]).toEqual([2])
  })
})
