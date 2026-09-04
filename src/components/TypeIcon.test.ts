import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TypeIcon from './TypeIcon.vue'

describe('should render accessible WikiDex type icons', () => {
  it('should point the image at the matching type file with the Spanish type label', () => {
    const wrapper = mount(TypeIcon, { props: { type: 'fire' } })
    expect(wrapper.get('img').attributes('src')).toBe('/assets/types/fire.svg')
    expect(wrapper.get('img').attributes('alt')).toBe('Fuego')
  })

  it('should hide a decorative icon from assistive technology', () => {
    const wrapper = mount(TypeIcon, { props: { type: 'water', decorative: true } })
    expect(wrapper.get('img').attributes('aria-hidden')).toBe('true')
    expect(wrapper.get('img').attributes('alt')).toBe('')
    expect(wrapper.get('img').attributes('src')).toBe('/assets/types/water.svg')
  })

  it('should fall back to the normal file for an unknown type', () => {
    const wrapper = mount(TypeIcon, { props: { type: 'not-a-real-type' } })
    expect(wrapper.get('img').attributes('src')).toBe('/assets/types/normal.svg')
  })
})
