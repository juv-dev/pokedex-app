import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import SetComparison from './SetComparison.vue'
import type { TemplateDiff } from '../../lib/types'

const diff: TemplateDiff = {
  role: 'sweeper-special',
  matchReason: 'primary-default',
  matchedCount: 2,
  rows: [
    { field: 'nature', status: 'match', templateValue: 'Miedosa', savedValue: 'Miedosa' },
    { field: 'item', status: 'differs', templateValue: 'Botas Gruesas', savedValue: 'Vidasfera' },
    { field: 'move', keyLabel: 'Vendaval', status: 'differs', templateValue: 'Llamarada', savedValue: 'Vendaval', detail: 'Llamarada pega más fuerte.' }
  ]
}

describe('SetComparison', () => {
  it('should render nothing without a diff', () => {
    expect(mount(SetComparison, { props: { diff: null } }).find('.setcmp').exists()).toBe(false)
  })

  it('should stay collapsed until toggled and then show only the non-matching rows', async () => {
    const wrapper = mount(SetComparison, { props: { diff } })
    expect(wrapper.find('.setcmp-body').exists()).toBe(false)
    expect(wrapper.text()).toContain('2 cambios')

    await wrapper.get('.setcmp-toggle').trigger('click')
    const rows = wrapper.findAll('.setcmp-table tbody tr')
    expect(rows).toHaveLength(2)
    expect(rows[0].text()).toContain('Vidasfera')
    expect(rows[0].text()).toContain('Botas Gruesas')
    expect(wrapper.text()).toContain('Llamarada pega más fuerte.')
  })

  it('should say there are no differences when every row matches', async () => {
    const clean: TemplateDiff = { ...diff, rows: [diff.rows[0]] }
    const wrapper = mount(SetComparison, { props: { diff: clean } })
    expect(wrapper.text()).toContain('sin diferencias')
    await wrapper.get('.setcmp-toggle').trigger('click')
    expect(wrapper.get('.setcmp-empty').text()).toMatch(/ya coincide/i)
  })
})
