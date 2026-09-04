import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import BoxFilter from './BoxFilter.vue'

const boxes = [
  { value: 0, label: 'Caja 1' },
  { value: 1, label: 'Caja 2' }
]

describe('BoxFilter', () => {
  it('should mark "Todos" active when the model is all', () => {
    const w = mount(BoxFilter, { props: { boxes, model: 'all' } })
    expect(w.get('.mp-boxfilter-all').classes()).toContain('is-active')
    expect(w.get('.mp-boxfilter-all').attributes('aria-pressed')).toBe('true')
  })

  it('should emit "all" when the Todos button is pressed', async () => {
    const w = mount(BoxFilter, { props: { boxes, model: 1 } })
    await w.get('.mp-boxfilter-all').trigger('click')
    expect(w.emitted('update:model')?.[0]).toEqual(['all'])
  })

  it('should label the box selector for assistive tech', () => {
    const w = mount(BoxFilter, { props: { boxes, model: 'all' } })
    expect(w.get('.mp-boxfilter-box').attributes('aria-label')).toBe('Filtrar por caja')
  })

  it('should show the current box label on the trigger', () => {
    expect(mount(BoxFilter, { props: { boxes, model: 'all' } }).get('.mp-boxfilter-value').text()).toBe('Todas las cajas')
    expect(mount(BoxFilter, { props: { boxes, model: 1 } }).get('.mp-boxfilter-value').text()).toBe('Caja 2')
  })

  it('should pass the string form of the current box to the underlying select', () => {
    const w = mount(BoxFilter, { props: { boxes, model: 1 } })
    expect(w.findComponent({ name: 'SelectRoot' }).props('modelValue')).toBe('1')
  })

  it('should emit the numeric box value when the select changes', () => {
    const w = mount(BoxFilter, { props: { boxes, model: 'all' } })
    w.findComponent({ name: 'SelectRoot' }).vm.$emit('update:modelValue', '1')
    expect(w.emitted('update:model')?.at(-1)).toEqual([1])
  })

  it('should emit "all" when the select is cleared back to all', () => {
    const w = mount(BoxFilter, { props: { boxes, model: 1 } })
    w.findComponent({ name: 'SelectRoot' }).vm.$emit('update:modelValue', 'all')
    expect(w.emitted('update:model')?.at(-1)).toEqual(['all'])
  })
})
