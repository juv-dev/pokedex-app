import { describe, it, expect } from 'vitest'
import { getAnilAbilityName, getAnilAbilityNumber, getAnilAbilityNumberByName, getAnilItemNumber, getAnilItemNumberByName, lookupAnilAbilityName, lookupAnilItemName, assertAnilSchema, preEvolutionIndex, findRootInternalName, evolutionsForForm, canEvolve, evoMethodLabel, ANIL_SCHEMA_VERSION } from './anilData'
import anilSchema from '../data/anil-schema.json'

describe('getAnilAbilityName', () => {
  it('should resolve an internal ability id to its Spanish name', () => {
    expect(getAnilAbilityName('THICKFAT')).toBe('Sebo')
  })

  it('should return the internal id unchanged when it is unknown', () => {
    expect(getAnilAbilityName('NOT_A_REAL_ABILITY')).toBe('NOT_A_REAL_ABILITY')
  })

  it('should tolerate surrounding whitespace in the internal id', () => {
    expect(getAnilAbilityName(' THICKFAT ')).toBe('Sebo')
    expect(lookupAnilAbilityName('THICKFAT ')).toBe('Sebo')
    expect(getAnilAbilityNumber(' THICKFAT')).toBe(47)
  })
})

describe('getAnilAbilityNumber', () => {
  it('should return the PBS ordinal for an internal ability id', () => {
    expect(getAnilAbilityNumber('THICKFAT')).toBe(47)
  })

  it('should return the PBS ordinal for Shield Dust', () => {
    expect(getAnilAbilityNumber('SHIELDDUST')).toBe(19)
  })

  it('should return null for an unknown ability id', () => {
    expect(getAnilAbilityNumber('NOT_A_REAL_ABILITY')).toBeNull()
  })
})

describe('getAnilAbilityNumberByName', () => {
  it('should return the PBS ordinal for a Spanish ability name', () => {
    expect(getAnilAbilityNumberByName('Polvo Escudo')).toBe(19)
  })

  it('should be case-insensitive', () => {
    expect(getAnilAbilityNumberByName('sebo')).toBe(47)
  })

  it('should return null for an unknown ability name', () => {
    expect(getAnilAbilityNumberByName('Not An Ability')).toBeNull()
  })
})

describe('getAnilItemNumber', () => {
  it('should return the PBS ordinal for an internal item id', () => {
    expect(getAnilItemNumber('LEFTOVERS')).toBe(117)
  })
})

describe('getAnilItemNumberByName', () => {
  it('should return the PBS ordinal for a mega stone Spanish name', () => {
    expect(getAnilItemNumberByName('Snorlaxita')).toBe(331)
  })

  it('should return null for an unknown item name', () => {
    expect(getAnilItemNumberByName('Not An Item')).toBeNull()
  })
})

describe('lookupAnilAbilityName', () => {
  it('should resolve a known internal ability id to its name', () => {
    expect(lookupAnilAbilityName('THICKFAT')).toBe('Sebo')
  })

  it('should return null for an unknown ability id', () => {
    expect(lookupAnilAbilityName('NOT_A_REAL_ABILITY')).toBeNull()
  })
})

describe('lookupAnilItemName', () => {
  it('should resolve a known internal item id to its name', () => {
    expect(lookupAnilItemName('LEFTOVERS')).toBe('Restos')
  })

  it('should return null for an unknown item id', () => {
    expect(lookupAnilItemName('NOT_A_REAL_ITEM')).toBeNull()
  })
})

describe('assertAnilSchema', () => {
  it('should throw naming the version field when the shape has no version', () => {
    expect(() => assertAnilSchema({ sampleSpecies: { tutorMoves: [], eggMoves: [] } }))
      .toThrowError(/version/)
  })

  it('should throw naming tutorMoves when the sample species lacks it', () => {
    expect(() => assertAnilSchema({ version: 2, sampleSpecies: { eggMoves: [] } }))
      .toThrowError(/tutorMoves/)
  })

  it('should not throw for a shape carrying version and the new species fields', () => {
    expect(() => assertAnilSchema({ version: 2, sampleSpecies: { tutorMoves: [], eggMoves: [] } }))
      .not.toThrow()
  })
})

describe('preEvolutionIndex', () => {
  it('should map a child species to its immediate pre-evolution', () => {
    const index = preEvolutionIndex()
    expect(index.get('SPIDOPS')).toBe('TAROUNTULA')
    expect(index.get('IVYSAUR')).toBe('BULBASAUR')
    expect(index.get('VENUSAUR')).toBe('IVYSAUR')
  })

  it('should not register a base-form species as a child', () => {
    expect(preEvolutionIndex().has('BULBASAUR')).toBe(false)
  })

  it('should return the same memoized Map instance on repeated calls', () => {
    expect(preEvolutionIndex()).toBe(preEvolutionIndex())
  })
})

describe('findRootInternalName', () => {
  it('should walk the full lineage up to the base form', () => {
    expect(findRootInternalName('VENUSAUR')).toBe('BULBASAUR')
  })

  it('should return a two-stage child root', () => {
    expect(findRootInternalName('SPIDOPS')).toBe('TAROUNTULA')
  })

  it('should return the input unchanged for a base form', () => {
    expect(findRootInternalName('BULBASAUR')).toBe('BULBASAUR')
  })
})

describe('evolutionsForForm', () => {
  it('should add the Galarian form evolution on top of the base list', () => {
    const galar = evolutionsForForm('CORSOLA', 1)
    expect(galar.some(e => e.target === 'CURSOLA' && e.method === 'Level' && e.param === '38')).toBe(true)
  })

  it('should fall back to the bare base list for a form with no override', () => {
    expect(evolutionsForForm('CORSOLA', 0)).toEqual([])
    expect(evolutionsForForm('BULBASAUR', 0).map(e => e.target)).toContain('IVYSAUR')
  })
})

describe('canEvolve', () => {
  it('should report a Galarian Corsola as still able to evolve', () => {
    expect(canEvolve('CORSOLA', 1)).toBe(true)
  })

  it('should report a regular Corsola as fully evolved', () => {
    expect(canEvolve('CORSOLA', 0)).toBe(false)
    expect(canEvolve('CORSOLA')).toBe(false)
  })

  it('should keep the base evolution for a cosmetic form with a None-method entry', () => {
    expect(canEvolve('PIKACHU', 2)).toBe(true)
  })
})

describe('evoMethodLabel', () => {
  it('should describe a plain level-up evolution with its level', () => {
    expect(evoMethodLabel('Level', '16')).toBe('Evoluciona subiendo de nivel — nivel 16')
  })

  it('should describe the Tyrogue stat-comparison evolutions as plain level-up, without leaking the raw method name', () => {
    expect(evoMethodLabel('AttackGreater', '23')).toBe('Evoluciona subiendo de nivel — nivel 23')
    expect(evoMethodLabel('DefenseGreater', '23')).toBe('Evoluciona subiendo de nivel — nivel 23')
    expect(evoMethodLabel('AtkDefEqual', '23')).toBe('Evoluciona subiendo de nivel — nivel 23')
  })

  it('should prefix the Tyrogue stat-comparison evolutions with their origin species when given', () => {
    expect(evoMethodLabel('AttackGreater', '23', 'Tyrogue')).toBe('Desde Tyrogue · subiendo de nivel — nivel 23')
    expect(evoMethodLabel('DefenseGreater', '23', 'Tyrogue')).toBe('Desde Tyrogue · subiendo de nivel — nivel 23')
    expect(evoMethodLabel('AtkDefEqual', '23', 'Tyrogue')).toBe('Desde Tyrogue · subiendo de nivel — nivel 23')
  })

  it('should describe a night-only level-up evolution, without leaking the raw method name', () => {
    expect(evoMethodLabel('LevelNight', '20')).toBe('Evoluciona subiendo de nivel — nivel 20, de noche')
  })

  it('should describe a female-only item evolution, without leaking the raw method name', () => {
    expect(evoMethodLabel('ItemFemale', 'DAWNSTONE')).toBe('Evoluciona con objeto (hembra) — usando Piedra Alba')
  })

  it('should describe the Wurmple nature-gated evolutions without leaking the raw method name', () => {
    expect(evoMethodLabel('Cascoon', '7')).toBe('Evoluciona subiendo de nivel — nivel 7, según su naturaleza (hacia Cascoon)')
    expect(evoMethodLabel('Silcoon', '7')).toBe('Evoluciona subiendo de nivel — nivel 7, según su naturaleza (hacia Silcoon)')
  })

  it('should describe the Nincada split evolution into Ninjask and Shedinja without leaking the raw method name', () => {
    expect(evoMethodLabel('Ninjask', '20')).toBe('Evoluciona subiendo de nivel — nivel 20')
    expect(evoMethodLabel('Shedinja', '20')).toBe('Aparece al evolucionar Nincada a Ninjask, con una Poké Ball libre en la mochila')
  })

  it('should describe a trade-for-species evolution by resolving the target species name', () => {
    expect(evoMethodLabel('TradeSpecies', 'SHELMET')).toBe('Evoluciona por intercambio — junto a un Shelmet')
  })
})

describe('ANIL_SCHEMA_VERSION', () => {
  it('should equal the version in the committed anil-schema.json', () => {
    expect(ANIL_SCHEMA_VERSION).toBe((anilSchema as { version: number }).version)
  })
})
