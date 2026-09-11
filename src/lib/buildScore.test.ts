import { describe, expect, it } from 'vitest'
import { scoreBuild, qualityTier, qualityLabel } from './buildScore'
import type { SavedBuild, LoadedTemplateEntry } from './types'

const entry: LoadedTemplateEntry = {
  role: 'sweeper-special',
  isPrimary: true,
  confidence: 'optimo',
  ability: 'BLAZE',
  item: 'HEAVYDUTYBOOTS',
  nature: 'TIMID',
  evs: [0, 0, 0, 252, 4, 252],
  ivs: [31, 31, 31, 31, 31, 31],
  moves: ['FIREBLAST', 'AIRSLASH', 'FOCUSBLAST', 'ROOST'],
  justification: '',
  alternatives: [],
  effectiveConfidence: 'optimo',
  downgraded: false,
  reasons: []
}

function saved(over: Partial<SavedBuild> = {}): SavedBuild {
  return {
    internalName: 'CHARIZARD',
    natureKey: 'TIMID',
    abilityId: 'BLAZE',
    itemId: 'HEAVYDUTYBOOTS',
    evs: [0, 0, 0, 252, 4, 252],
    ivs: [31, 31, 31, 31, 31, 31],
    moveIds: ['FIREBLAST', 'AIRSLASH', 'FOCUSBLAST', 'ROOST'],
    ...over
  }
}

describe('scoreBuild', () => {
  it('should score an identical build at 100 / Óptimo', () => {
    const score = scoreBuild(saved(), entry)
    expect(score).toBe(100)
    expect(qualityTier(score)).toBe('optimo')
  })

  it('should drop to Viable when nature, item and one move differ', () => {
    const score = scoreBuild(saved({
      natureKey: 'MODEST', itemId: 'LIFEORB', moveIds: ['FIREBLAST', 'AIRSLASH', 'FOCUSBLAST', 'DRAGONPULSE']
    }), entry)
    expect(score).toBeGreaterThanOrEqual(70)
    expect(score).toBeLessThan(90)
    expect(qualityTier(score)).toBe('viable')
  })

  it('should fall to Requiere ajustes with a wrong spread, no shared moves and low IVs', () => {
    const score = scoreBuild(saved({
      natureKey: 'BOLD', abilityId: 'SOLARPOWER', itemId: 'LEFTOVERS',
      evs: [252, 252, 0, 0, 4, 0], ivs: [20, 0, 15, 10, 12, 8],
      moveIds: ['TACKLE', 'GROWL', 'EMBER', 'LEER']
    }), entry)
    expect(score).toBeLessThan(70)
    expect(qualityLabel(qualityTier(score))).toBe('Requiere ajustes')
  })

  it('should map tiers to the documented ranges', () => {
    expect(qualityTier(95)).toBe('optimo')
    expect(qualityTier(90)).toBe('optimo')
    expect(qualityTier(89)).toBe('viable')
    expect(qualityTier(70)).toBe('viable')
    expect(qualityTier(69)).toBe('ajustes')
  })
})
