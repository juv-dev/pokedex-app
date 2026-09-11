import { describe, it, expect, beforeAll } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import AppHeader from './AppHeader.vue'
import { loadSpeciesIndex } from '../lib/engine'

async function mountHeader() {
  const wrapper = mount(AppHeader, { props: { view: 'pokedex' } })
  await flushPromises()
  return wrapper
}

describe('AppHeader navigation', () => {
  it('should mark the active section', () => {
    const dex = mount(AppHeader, { props: { view: 'pokedex' } })
    const buttons = dex.findAll('.hud-toggle button')
    expect(buttons[0].classes()).toContain('is-active')
    expect(buttons[1].classes()).not.toContain('is-active')

    const save = mount(AppHeader, { props: { view: 'save' } })
    expect(save.findAll('.hud-toggle button')[1].classes()).toContain('is-active')
  })

  it('should emit update:view with the chosen section', async () => {
    const wrapper = mount(AppHeader, { props: { view: 'pokedex' } })
    await wrapper.findAll('.hud-toggle button')[1].trigger('click')
    expect(wrapper.emitted('update:view')?.[0]).toEqual(['save'])
    await wrapper.findAll('.hud-toggle button')[0].trigger('click')
    expect(wrapper.emitted('update:view')?.[1]).toEqual(['pokedex'])
  })
})

describe('AppHeader search', () => {
  beforeAll(async () => { await loadSpeciesIndex() })

  it('should match a species by its National Dex number', async () => {
    const wrapper = await mountHeader()
    await wrapper.get('input[type="text"]').setValue('#6')
    await new Promise(r => setTimeout(r, 220))
    await flushPromises()
    const items = wrapper.findAll('.search-drop-item')
    expect(items).toHaveLength(1)
    expect(items[0].text()).toContain('006')
  })
})
