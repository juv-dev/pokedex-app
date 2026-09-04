import { describe, it, expect, beforeAll } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import AppHeader from './AppHeader.vue'
import { loadSpeciesIndex } from '../lib/engine'

async function mountHeader() {
  const wrapper = mount(AppHeader, { props: { view: 'dex' } })
  await flushPromises()
  return wrapper
}

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
