import { describe, it, expect } from 'vitest'
import { buildGameData, loadTemplateSet, resolveCompetitiveTemplate, validateAllTemplates } from './templateRegistry'
import { TEMPLATE_LOADERS, fileKeyToInternalName } from '../data/templates'
import type { PokemonTemplateSet, CompetitiveTemplate } from './types'

function baseEntry(overrides: Partial<CompetitiveTemplate> = {}): CompetitiveTemplate {
  return {
    role: 'hazard-lead',
    isPrimary: true,
    confidence: 'optimo',
    ability: 'STAKEOUT',
    item: 'FOCUSSASH',
    nature: 'IMPISH',
    evs: [252, 0, 252, 0, 4, 0],
    ivs: [31, 31, 31, 31, 31, 31],
    moves: ['STICKYWEB', 'SPIKES', 'UTURN', 'KNOCKOFF'],
    justification: 'Injected fixture entry for registry tests.',
    alternatives: [],
    ...overrides
  }
}

function fixtureSet(internalName: string, templates?: CompetitiveTemplate[]): PokemonTemplateSet {
  return { internalName, templates: templates ?? [baseEntry()] }
}

function loaderFor(set: PokemonTemplateSet): () => Promise<{ default: PokemonTemplateSet }> {
  return async () => ({ default: set })
}

describe('fileKeyToInternalName', () => {
  it('should map a glob file key to the uppercased internal name', () => {
    expect(fileKeyToInternalName('./spidops.ts')).toBe('SPIDOPS')
    expect(fileKeyToInternalName('/abs/path/src/data/templates/spidops.ts')).toBe('SPIDOPS')
  })
})

describe('loadTemplateSet', () => {
  it('should resolve the shipped SPIDOPS set with an effectiveConfidence on every entry', async () => {
    const loaded = await loadTemplateSet('SPIDOPS')
    expect(loaded).not.toBeNull()
    expect(loaded?.internalName).toBe('SPIDOPS')
    expect(loaded?.templateState).toBe('ready')
    expect(loaded?.entries.length).toBeGreaterThanOrEqual(2)
    for (const entry of loaded?.entries ?? []) {
      expect(['optimo', 'viable', 'pendiente']).toContain(entry.effectiveConfidence)
    }
    expect(loaded?.entries.some((e) => e.effectiveConfidence !== 'pendiente')).toBe(true)
  })

  it('should return null for a species with no curated module', async () => {
    expect(await loadTemplateSet('NOT_A_SPECIES')).toBeNull()
  })

  it('should surface registry-key-mismatch when the file key differs from the module internalName', async () => {
    const loaders = new Map([['TAROUNTULA', loaderFor(fixtureSet('SPIDOPS'))]])
    const loaded = await loadTemplateSet('TAROUNTULA', loaders)
    const issues = loaded?.issues ?? []
    expect(issues.map((i) => i.code)).toContain('registry-key-mismatch')
    expect(issues.find((i) => i.code === 'registry-key-mismatch')?.severity).toBe('error')
  })

  it('should mark templateState error when the anil schema assertion throws', async () => {
    const loaders = new Map([['SPIDOPS', loaderFor(fixtureSet('SPIDOPS'))]])
    const throwingAssert = (): void => {
      throw new Error('anil-schema: missing or invalid field(s): version')
    }
    const loaded = await loadTemplateSet('SPIDOPS', loaders, throwingAssert)
    expect(loaded?.templateState).toBe('error')
  })

  it('should not downgrade a clean entry to pendiente over a sibling set-level error', async () => {
    const good = baseEntry({ isPrimary: true })
    const alsoPrimary = baseEntry({ isPrimary: true, confidence: 'viable', role: 'hazard-setter' })
    const loaders = new Map([['SPIDOPS', loaderFor(fixtureSet('SPIDOPS', [good, alsoPrimary]))]])
    const loaded = await loadTemplateSet('SPIDOPS', loaders)
    expect((loaded?.issues ?? []).map((i) => i.code)).toContain('primary-count')
    expect(loaded?.entries.every((e) => e.effectiveConfidence === e.confidence)).toBe(true)
  })
})

describe('resolveCompetitiveTemplate', () => {
  const LINE_TIMEOUT_MS = 30000

  it(
    'should return the own template with referenceFrom null for a curated species',
    async () => {
      const resolved = await resolveCompetitiveTemplate('VENUSAUR')
      expect(resolved).not.toBeNull()
      expect(resolved?.referenceFrom).toBeNull()
      expect(resolved?.loaded.internalName).toBe('VENUSAUR')
    },
    LINE_TIMEOUT_MS
  )

  it(
    'should inherit the evolved form template for a pre-evolution',
    async () => {
      const resolved = await resolveCompetitiveTemplate('BULBASAUR')
      expect(resolved).not.toBeNull()
      expect(resolved?.referenceFrom).toBe('VENUSAUR')
      expect(resolved?.loaded.internalName).toBe('VENUSAUR')
    },
    LINE_TIMEOUT_MS
  )

  it(
    'should not inherit when the pre-evolution branches into multiple curated forms',
    async () => {
      expect(await resolveCompetitiveTemplate('EEVEE')).toBeNull()
    },
    LINE_TIMEOUT_MS
  )

  it(
    'should return null for a species with no template anywhere in its line',
    async () => {
      expect(await resolveCompetitiveTemplate('SMEARGLE')).toBeNull()
    },
    LINE_TIMEOUT_MS
  )
})

describe('validateAllTemplates gate', () => {
  const GATE_TIMEOUT_MS = 30000

  it(
    'should report no error-severity issues for the shipped SPIDOPS module',
    async () => {
      const map = await validateAllTemplates(buildGameData(), TEMPLATE_LOADERS)
      const spidops = map.get('SPIDOPS')
      expect(spidops).toBeDefined()
      expect(spidops?.errors).toEqual([])
      expect(spidops?.ok).toBe(true)
    },
    GATE_TIMEOUT_MS
  )

  it(
    'should validate every registered module without an error-severity issue',
    async () => {
      const map = await validateAllTemplates(buildGameData(), TEMPLATE_LOADERS)
      expect(map.size).toBeGreaterThanOrEqual(1)
      for (const [, result] of map) {
        expect(result.errors).toEqual([])
      }
    },
    GATE_TIMEOUT_MS
  )
})
