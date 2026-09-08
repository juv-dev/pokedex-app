import { describe, expect, it } from 'vitest'
import { megaOptionsFor, recommendedSetFor } from './recommendedSet'
import { getAnilSpecies } from './anilData'

describe('megaOptionsFor', () => {
  it('should list the mega forms of a species that has them', () => {
    const forms = megaOptionsFor('CHARIZARD')
    expect(forms.length).toBeGreaterThan(0)
    expect(forms.every(f => typeof f.formName === 'string' && f.formName.length > 0)).toBe(true)
  })

  it('should return an empty list for an unknown species', () => {
    expect(megaOptionsFor('NOT_A_POKEMON')).toEqual([])
  })
})

describe('recommendedSetFor', () => {
  it('should return the base build by default', async () => {
    const set = await recommendedSetFor('GARCHOMP')
    expect(set).not.toBeNull()
    expect(set!.megaFormName).toBeNull()
    expect(set!.base).toEqual(getAnilSpecies('GARCHOMP')!.baseStats.slice(0, 6))
  })

  it('should return the mega build when a mega form is requested', async () => {
    const form = megaOptionsFor('GARCHOMP')[0]
    const set = await recommendedSetFor('GARCHOMP', { megaFormName: form.formName })
    expect(set).not.toBeNull()
    expect(set!.tier).toBe('mega')
    expect(set!.megaFormName).toBe(form.formName)
    // stored stats stay the base form's; only the build is mega-tuned
    expect(set!.base).toEqual(getAnilSpecies('GARCHOMP')!.baseStats.slice(0, 6))
    if (form.megaStone) expect(set!.item).toBe(form.megaStone)
    expect(set!.ability).toBeTruthy()
    expect(set!.moves).toHaveLength(4)
  })

  it('should fall back to null for a mega form name that does not exist', async () => {
    const set = await recommendedSetFor('GARCHOMP', { megaFormName: 'Mega Nonexistent' })
    expect(set).toBeNull()
  })
})
