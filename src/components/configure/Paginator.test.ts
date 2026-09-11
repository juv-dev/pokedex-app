import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Paginator from './Paginator.vue'

describe('Paginator', () => {
  it('should show the current range', () => {
    const wrapper = mount(Paginator, { props: { page: 2, totalPages: 3, pageSize: 30, total: 65 } })
    expect(wrapper.get('.cfg-pager-range').text()).toBe('31–60 de 65')
  })

  it('should hide the nav when there is a single page', () => {
    const wrapper = mount(Paginator, { props: { page: 1, totalPages: 1, pageSize: 30, total: 12 } })
    expect(wrapper.find('.cfg-pager-nav').exists()).toBe(false)
  })

  it('should emit page changes within bounds', async () => {
    const wrapper = mount(Paginator, { props: { page: 1, totalPages: 5, pageSize: 30, total: 140 } })
    await wrapper.get('[aria-label="Página siguiente"]').trigger('click')
    expect(wrapper.emitted('update:page')?.[0]).toEqual([2])
    await wrapper.get('[aria-label="Página anterior"]').trigger('click')
    expect(wrapper.emitted('update:page')).toHaveLength(1)
  })
})
