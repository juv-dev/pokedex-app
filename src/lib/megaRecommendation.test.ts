import { describe, expect, it } from 'vitest'
import { recommendMegaForTeam } from './megaRecommendation'
import { getAnilSpecies } from './anilData'

describe('recommendMegaForTeam', () => {
  it('should return the current form for a species with no mega', () => {
    const rec = recommendMegaForTeam({ internalName: 'PIDGEY', teamTypes: [] })
    expect(rec.formName).toBe('')
    expect(rec.reasons).toEqual([])
  })

  it('should pick a mega and explain the raw stat gain even with no team context', () => {
    const rec = recommendMegaForTeam({ internalName: 'CHARIZARD', teamTypes: [] })
    expect(getAnilSpecies('CHARIZARD')?.megas.length).toBeGreaterThan(0)
    expect(rec.formName).not.toBe('')
    expect(rec.reasons.join(' ')).toMatch(/estad[ií]sticas base/i)
  })

  it('should prefer the form that covers a weakness the team shares', () => {
    const rec = recommendMegaForTeam({
      internalName: 'CHARIZARD',
      teamTypes: [['fire', 'flying'], ['bug', 'flying']]
    })
    expect(rec.formName).toBe('Mega Charizard X')
    expect(rec.reasons.join(' ')).toMatch(/resiste/i)
  })

  it('should never claim a universally best mega — the reason is team-scoped', () => {
    const rec = recommendMegaForTeam({ internalName: 'CHARIZARD', teamTypes: [['grass'], ['grass']] })
    expect(rec.reasons.join(' ')).not.toMatch(/mejor mega/i)
  })
})
