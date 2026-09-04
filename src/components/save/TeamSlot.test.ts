import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TeamSlot from './TeamSlot.vue'

const mon = {
  internalName: 'WIGGLYTUFF',
  sprite: '/anil-sprites/wigglytuff.png',
  num: '#040',
  name: 'Wigglytuff',
  level: 50,
  types: ['normal', 'fairy']
}

describe('TeamSlot', () => {
  it('should render an empty sidebar slot as a non-interactive placeholder', () => {
    const wrapper = mount(TeamSlot, { props: { index: 1 } })
    expect(wrapper.element.tagName).toBe('DIV')
    expect(wrapper.text()).toContain('ESPACIO 01')
    expect(wrapper.text()).toContain('Sin Pokémon')
  })

  it('should render a filled slot as a button and emit select with the internal name', async () => {
    const wrapper = mount(TeamSlot, { props: { index: 3, mon } })
    expect(wrapper.element.tagName).toBe('BUTTON')
    expect(wrapper.text()).toContain('#040')
    expect(wrapper.text()).toContain('Wigglytuff')
    await wrapper.trigger('click')
    expect(wrapper.emitted('select')?.[0]).toEqual(['WIGGLYTUFF'])
  })

  it('should show level and types in the preview layout', () => {
    const wrapper = mount(TeamSlot, { props: { index: 2, mon, layout: 'preview' } })
    expect(wrapper.text()).toContain('Nv. 50')
    expect(wrapper.findAll('.mp-slot-type')).toHaveLength(2)
  })

  it('should mark team members when requested', () => {
    const wrapper = mount(TeamSlot, { props: { index: 1, mon, teamMark: true } })
    expect(wrapper.get('.mp-slot-mark').attributes('aria-label')).toBe('En el equipo')
  })
})
