import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import SaveRosterSidebar from './SaveRosterSidebar.vue'
import BoxFilter from './BoxFilter.vue'
import type { RosterEntry } from '../SaveView.vue'

function entry(p: Partial<RosterEntry> & { internalName: string }): RosterEntry {
  return {
    internalName: p.internalName,
    num: p.num ?? '#001',
    name: p.name ?? p.internalName,
    sprite: '/s.png',
    types: p.types ?? ['normal'],
    where: p.boxLabel ?? 'Equipo',
    inParty: p.inParty ?? false,
    boxIndex: p.boxIndex ?? null,
    boxLabel: p.boxLabel ?? 'Equipo'
  }
}

const roster: RosterEntry[] = [
  entry({ internalName: 'GREEDENT', name: 'Greedent', inParty: true, boxLabel: 'Equipo' }),
  entry({ internalName: 'DONPHAN', name: 'Donphan', inParty: true, boxLabel: 'Equipo' }),
  entry({ internalName: 'SCOLIPEDE', name: 'Scolipede', boxIndex: 0, boxLabel: 'Caja 1' }),
  entry({ internalName: 'YANMEGA', name: 'Yanmega', boxIndex: 1, boxLabel: 'Caja 2' })
]

const base = { activeInternalName: null, ownedCount: 212, total: 1027 }

describe('SaveRosterSidebar', () => {
  it('should show the national index header with the owned/total counter', () => {
    const wrapper = mount(SaveRosterSidebar, { props: { roster, ...base } })
    expect(wrapper.get('.hud-rail-title').text()).toBe('ÍNDICE NACIONAL')
    expect(wrapper.get('.mp-roster-total').text()).toBe('212 / 1027')
  })

  it('should list only box Pokémon, not the team (the team has its own preview)', () => {
    const wrapper = mount(SaveRosterSidebar, { props: { roster, ...base } })
    const names = wrapper.findAll('.mp-roster-name').map(n => n.text())
    expect(names).toEqual(['Scolipede', 'Yanmega'])
  })

  it('should derive box options from the roster and filter to the active box', async () => {
    const wrapper = mount(SaveRosterSidebar, { props: { roster, ...base } })
    expect(wrapper.findAll('.mp-roster-row')).toHaveLength(2)
    const filter = wrapper.findComponent(BoxFilter)
    expect(filter.props('boxes')).toEqual([
      { value: 0, label: 'Caja 1' },
      { value: 1, label: 'Caja 2' }
    ])
    filter.vm.$emit('update:model', 1)
    await wrapper.vm.$nextTick()
    const rows = wrapper.findAll('.mp-roster-row')
    expect(rows).toHaveLength(1)
    expect(rows[0].text()).toContain('Yanmega')
  })

  it('should emit select with the internal name of the clicked row', async () => {
    const wrapper = mount(SaveRosterSidebar, { props: { roster, ...base } })
    await wrapper.findAll('.mp-roster-row')[0].trigger('click')
    expect(wrapper.emitted('select')?.[0]).toEqual(['SCOLIPEDE'])
  })

  it('should not render the seen/owned footer in save context', () => {
    const wrapper = mount(SaveRosterSidebar, { props: { roster, ...base } })
    expect(wrapper.find('.hud-rail-foot').exists()).toBe(false)
  })
})
