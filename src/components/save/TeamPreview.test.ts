import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TeamPreview from './TeamPreview.vue'

const mon = (n: number) => ({
  internalName: `MON${n}`,
  sprite: `/s/${n}.png`,
  num: `#00${n}`,
  name: `Mon ${n}`,
  level: 40,
  types: ['normal']
})

describe('TeamPreview', () => {
  it('should always render exactly six slots', () => {
    const wrapper = mount(TeamPreview, { props: { slots: [] } })
    expect(wrapper.findAll('.mp-slot')).toHaveLength(6)
  })

  it('should read as a preview before a save is loaded', () => {
    const wrapper = mount(TeamPreview, { props: { slots: [] } })
    expect(wrapper.get('.mp-preview-head h2').text()).toBe('Vista previa del equipo')
    expect(wrapper.get('.mp-preview-count').text()).toBe('0 / 6 detectados')
  })

  it('should become the team view once members are detected', () => {
    const wrapper = mount(TeamPreview, { props: { slots: [mon(1), mon(2), null, null, null, null] } })
    expect(wrapper.get('.mp-preview-head h2').text()).toBe('Vista del equipo')
    expect(wrapper.get('.mp-preview-count').text()).toBe('2 / 6 detectados')
    expect(wrapper.text()).toContain('Mon 1')
  })

  it('should show an explicit waiting state instead of empty slots while loading', () => {
    const wrapper = mount(TeamPreview, { props: { slots: [], loading: true } })
    expect(wrapper.get('.mp-preview').attributes('aria-busy')).toBe('true')
    expect(wrapper.get('.mp-preview-wait').text()).toContain('Analizando tu partida')
    expect(wrapper.find('.mp-preview-grid').exists()).toBe(false)
    expect(wrapper.findAll('.mp-slot')).toHaveLength(0)
  })

  it('should emit select with the internal name when a filled card is clicked', async () => {
    const wrapper = mount(TeamPreview, { props: { slots: [mon(1), null, null, null, null, null] } })
    await wrapper.get('button.mp-slot').trigger('click')
    expect(wrapper.emitted('select')?.[0]).toEqual(['MON1'])
  })
})
