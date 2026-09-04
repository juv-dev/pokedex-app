import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TeamSidebar from './TeamSidebar.vue'

const mon = {
  internalName: 'GREEDENT',
  sprite: '/s/greedent.png',
  num: '#820',
  name: 'Greedent',
  level: 55,
  types: ['normal']
}

describe('TeamSidebar', () => {
  it('should render the empty team with six slots and a zero counter', () => {
    const wrapper = mount(TeamSidebar, { props: { slots: [], readState: 'Offline' } })
    expect(wrapper.get('.hud-rail-title').text()).toBe('MI EQUIPO')
    expect(wrapper.get('.mp-sidebar-count').text()).toBe('0 / 6')
    expect(wrapper.findAll('.mp-slot')).toHaveLength(6)
    expect(wrapper.get('.mp-sidebar-foot').text()).toContain('Sin cargar')
    expect(wrapper.get('.mp-sidebar-foot').text()).toContain('Offline')
  })

  it('should show the file name and real member count once a save is loaded', () => {
    const wrapper = mount(TeamSidebar, {
      props: { slots: [mon, mon], fileName: 'Partida 1.rxdata', readState: 'Offline' }
    })
    expect(wrapper.get('.mp-sidebar-count').text()).toBe('2 / 6')
    expect(wrapper.get('.mp-sidebar-foot').text()).toContain('Partida 1.rxdata')
  })

  it('should emit select with the internal name when a filled slot is activated', async () => {
    const wrapper = mount(TeamSidebar, { props: { slots: [mon], readState: 'Offline' } })
    await wrapper.get('button.mp-slot').trigger('click')
    expect(wrapper.emitted('select')?.[0]).toEqual(['GREEDENT'])
  })
})
