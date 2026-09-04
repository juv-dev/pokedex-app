import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { TYPE_COLORS, TYPE_GRADIENT, TYPE_ICON_INDEX, TYPE_ICON_SHEET_FRAMES } from './constants'
import TypeIcon from '../components/TypeIcon.vue'

describe('type constant maps', () => {
  it('should expose a gradient literal for every TYPE_COLORS key', () => {
    for (const key of Object.keys(TYPE_COLORS)) {
      expect(typeof TYPE_GRADIENT[key]).toBe('string')
      expect(TYPE_GRADIENT[key]).toMatch(/^linear-gradient\(/)
    }
    expect(Object.keys(TYPE_GRADIENT).sort()).toEqual(Object.keys(TYPE_COLORS).sort())
  })

  it('should expose a sprite sheet index inside the sheet bounds for every TYPE_COLORS key', () => {
    for (const key of Object.keys(TYPE_COLORS)) {
      expect(Number.isInteger(TYPE_ICON_INDEX[key])).toBe(true)
      expect(TYPE_ICON_INDEX[key]).toBeGreaterThanOrEqual(0)
      expect(TYPE_ICON_INDEX[key]).toBeLessThan(TYPE_ICON_SHEET_FRAMES)
    }
    expect(Object.keys(TYPE_ICON_INDEX).sort()).toEqual(Object.keys(TYPE_COLORS).sort())
  })

  it('should map every type to a distinct sprite sheet frame', () => {
    const indices = Object.values(TYPE_ICON_INDEX)
    expect(new Set(indices).size).toBe(indices.length)
  })

  it('should include a normal key as the icon fallback', () => {
    expect(TYPE_ICON_INDEX.normal).toBe(0)
  })
})

describe('TypeIcon', () => {
  it('should reference the WikiDex file for a known type', () => {
    const wrapper = mount(TypeIcon, { props: { type: 'fire' } })
    expect(wrapper.get('img').attributes('src')).toBe('/assets/types/fire.svg')
  })

  it('should fall back to the normal file for an unknown type', () => {
    const wrapper = mount(TypeIcon, { props: { type: 'not-a-real-type' } })
    expect(wrapper.get('img').attributes('src')).toBe('/assets/types/normal.svg')
  })
})
