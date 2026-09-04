import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import MoveList from './MoveList.vue'
import type { TemplateCardVM, TemplateGameData } from '../../lib/types'

const gameData = {
  move: (id: string) => ({
    GIGADRAIN: { name: 'Gigadrenado', type: 'grass', category: 'Special', power: 75, accuracy: 100, pp: 10 },
    TOXIC: { name: 'Tóxico', type: 'poison', category: 'Status', power: null, accuracy: 90, pp: 10 }
  }[id])
} as unknown as TemplateGameData

const card = {
  moveIds: ['GIGADRAIN', 'TOXIC'], moves: ['Gigadrenado', 'Tóxico']
} as TemplateCardVM

describe('MoveList', () => {
  it('should show an empty state when there is no set', () => {
    const wrapper = mount(MoveList, { props: { card: null, gameData, nodeTypes: ['grass'] } })
    expect(wrapper.get('.sheet-moves-empty').text()).toContain('Sin datos')
  })

  it('should build each row from the real set data', () => {
    const wrapper = mount(MoveList, { props: { card, gameData, nodeTypes: ['grass', 'poison'] } })
    const rows = wrapper.findAll('.sheet-move')
    expect(rows).toHaveLength(2)
    expect(rows[0].text()).toContain('Gigadrenado')
    expect(rows[0].text()).toContain('75')
    expect(rows[0].text()).toContain('10')
  })

  it('should flag STAB, utility and coverage from the move category and types', () => {
    const wrapper = mount(MoveList, { props: { card, gameData, nodeTypes: ['grass', 'poison'] } })
    const rows = wrapper.findAll('.sheet-move-meta').map(m => m.text())
    expect(rows[0]).toContain('STAB')
    expect(rows[1]).toContain('Utilidad')
  })
})
