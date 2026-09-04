import { describe, it, expect } from 'vitest'
import { validateTemplate, applyConfidenceDowngrade, validateAllTemplates } from './templateValidation'
import type {
  TemplateGameData, CompetitiveTemplate, PokemonTemplateSet, ValidationResult, ValidationCode
} from './types'
import type { AnilSpecies, AnilMoveData } from './anilData'
import type { RoleId } from './constants'
import { NATURE_TABLE, ROLE_REGISTRY } from './constants'

const SPECIES_ABILITIES = [
  { id: 'STAKEOUT', name: 'Vigía', hidden: true },
  { id: 'TECHNICIAN', name: 'Técnico', hidden: false }
]

const MOVE_TABLE: Record<string, Partial<AnilMoveData> & { name: string }> = {
  SPIKES: { name: 'Púas', category: 'Status', power: null },
  TOXICSPIKES: { name: 'Púas Tóxicas', category: 'Status', power: null },
  KNOCKOFF: { name: 'Desarme', category: 'Physical', power: 65 },
  UTURN: { name: 'Ida y Vuelta', category: 'Physical', power: 70 },
  TAUNT: { name: 'Mofa', category: 'Status', power: null },
  POISONJAB: { name: 'Puya Nociva', category: 'Physical', power: 80 },
  FIRSTIMPRESSION: { name: 'Escaramuza', category: 'Physical', power: 90 },
  SWORDSDANCE: { name: 'Danza Espada', category: 'Status', power: null },
  OUTRAGE: { name: 'Enfado', category: 'Physical', power: 120 }
}

const LEGAL_MOVES = new Set([
  'SPIKES', 'TOXICSPIKES', 'KNOCKOFF', 'UTURN', 'TAUNT', 'POISONJAB', 'FIRSTIMPRESSION', 'SWORDSDANCE'
])

function move(partial: Partial<AnilMoveData> & { name: string }): AnilMoveData {
  return {
    name: partial.name,
    type: partial.type ?? 'normal',
    category: partial.category ?? 'Physical',
    power: partial.power ?? null,
    accuracy: partial.accuracy ?? null,
    pp: partial.pp ?? null,
    description: '',
    functionCode: '',
    flags: [],
    priority: partial.priority ?? 0,
    target: partial.target ?? 'Normal',
    effectChance: partial.effectChance ?? null
  }
}

function spidops(): AnilSpecies {
  return {
    name: 'Spidops',
    types: ['bug'],
    baseStats: [60, 79, 92, 52, 86, 35],
    category: '',
    flavor: '',
    heightM: 1,
    weightKg: 16.5,
    abilities: SPECIES_ABILITIES,
    catchRate: 45,
    happiness: 50,
    growthRate: null,
    eggGroups: [],
    genderRatio: null,
    baseExp: null,
    evolutions: [],
    megas: [],
    tutorMoves: [...LEGAL_MOVES],
    eggMoves: [],
    levelMoves: []
  }
}

const gameData: TemplateGameData = {
  species: (n) => (['SPIDOPS', 'BADMON', 'TAROUNTULA'].includes(n) ? spidops() : null),
  move: (n) => (MOVE_TABLE[n] ? move(MOVE_TABLE[n]) : null),
  abilityName: (n) => ({ STAKEOUT: 'Vigía', TECHNICIAN: 'Técnico', LEVITATE: 'Levitación' } as Record<string, string>)[n] ?? null,
  itemName: (n) => ({ CHOICEBAND: 'Banda Elección', LEFTOVERS: 'Restos', FOCUSSASH: 'Banda Focus' } as Record<string, string>)[n] ?? null,
  legalMovepool: () => new Set(LEGAL_MOVES),
  natureKeys: new Set(NATURE_TABLE.map((n) => n.key)),
  roleIds: new Set(Object.keys(ROLE_REGISTRY) as RoleId[])
}

function validEntry(): CompetitiveTemplate {
  return {
    role: 'hazard-lead',
    isPrimary: true,
    confidence: 'optimo',
    ability: 'STAKEOUT',
    item: 'FOCUSSASH',
    nature: 'JOLLY',
    evs: [252, 0, 4, 0, 0, 252],
    ivs: [31, 31, 31, 31, 31, 31],
    moves: ['SPIKES', 'TOXICSPIKES', 'KNOCKOFF', 'UTURN'],
    justification: 'Hazard lead: Spikes and Toxic Spikes chip, Knock Off strips items, U-turn keeps momentum.',
    alternatives: []
  }
}

function run(
  overrides: Partial<CompetitiveTemplate>,
  extra?: { internalName?: string; expectedKey?: string; templates?: CompetitiveTemplate[] }
): ValidationResult {
  const templates = extra?.templates ?? [{ ...validEntry(), ...overrides }]
  const set: PokemonTemplateSet = { internalName: extra?.internalName ?? 'SPIDOPS', templates }
  return validateTemplate(set, gameData, extra?.expectedKey)
}

function codes(r: ValidationResult): ValidationCode[] {
  return r.issues.map((i) => i.code)
}

describe('validateTemplate error codes', () => {
  it('should report unknown-species for an internalName absent from game data', () => {
    expect(codes(run({}, { internalName: 'NOTAMON' }))).toContain('unknown-species')
  })

  it('should report registry-key-mismatch when the expected key differs from the module internalName', () => {
    const r = run({}, { expectedKey: 'TAROUNTULA' })
    expect(codes(r)).toContain('registry-key-mismatch')
  })

  it('should report unknown-role for a role missing from the registry', () => {
    expect(codes(run({ role: 'not-a-real-role' as RoleId }))).toContain('unknown-role')
  })

  it('should report unknown-ability for an ability id that does not resolve', () => {
    expect(codes(run({ ability: 'NOPE' }))).toContain('unknown-ability')
  })

  it('should report ability-not-on-species for a known ability the species cannot have', () => {
    expect(codes(run({ ability: 'LEVITATE' }))).toContain('ability-not-on-species')
  })

  it('should report unknown-item for an item id that does not resolve', () => {
    expect(codes(run({ item: 'NOPE' }))).toContain('unknown-item')
  })

  it('should report unknown-move for a move id that does not resolve', () => {
    expect(codes(run({ moves: ['SPIKES', 'TOXICSPIKES', 'KNOCKOFF', 'NOPEMOVE'] }))).toContain('unknown-move')
  })

  it('should report illegal-move for a known move outside the legal movepool', () => {
    expect(codes(run({ moves: ['SPIKES', 'TOXICSPIKES', 'KNOCKOFF', 'OUTRAGE'] }))).toContain('illegal-move')
  })

  it('should report duplicate-move when the same move appears twice', () => {
    expect(codes(run({ moves: ['SPIKES', 'SPIKES', 'KNOCKOFF', 'UTURN'] }))).toContain('duplicate-move')
  })

  it('should report move-count when an entry declares more than four moves', () => {
    expect(codes(run({ moves: ['SPIKES', 'TOXICSPIKES', 'KNOCKOFF', 'UTURN', 'TAUNT'] }))).toContain('move-count')
  })

  it('should report unknown-nature for a nature key not in the table', () => {
    expect(codes(run({ nature: 'NOTANATURE' }))).toContain('unknown-nature')
  })

  it('should report ev-single-over-max when one EV exceeds 252', () => {
    expect(codes(run({ evs: [253, 0, 0, 0, 0, 252] }))).toContain('ev-single-over-max')
  })

  it('should report ev-total-over-max when the EV total exceeds 510', () => {
    expect(codes(run({ evs: [252, 252, 252, 0, 0, 0] }))).toContain('ev-total-over-max')
  })

  it('should report iv-out-of-range when an IV is above 31', () => {
    expect(codes(run({ ivs: [31, 31, 32, 31, 31, 31] }))).toContain('iv-out-of-range')
  })

  it('should report missing-justification when the justification is blank', () => {
    expect(codes(run({ justification: '   ' }))).toContain('missing-justification')
  })

  it('should report primary-count when no entry is marked primary', () => {
    expect(codes(run({ isPrimary: false }))).toContain('primary-count')
  })

  it('should report pendiente-cannot-be-primary for a pendiente entry marked primary', () => {
    expect(codes(run({ confidence: 'pendiente', isPrimary: true }))).toContain('pendiente-cannot-be-primary')
  })

  it('should scope issue paths to the entry index', () => {
    const r = run({ moves: ['SPIKES', 'TOXICSPIKES', 'KNOCKOFF', 'NOPEMOVE'] })
    const unknown = r.issues.find((i) => i.code === 'unknown-move')
    expect(unknown?.path).toBe('templates[0].moves[3]')
  })
})

describe('validateTemplate warning codes', () => {
  it('should warn synergy-technician-power when Technician has no move at or below 60 BP and keep ok true', () => {
    const r = run({ ability: 'TECHNICIAN', moves: ['KNOCKOFF', 'UTURN', 'POISONJAB', 'FIRSTIMPRESSION'] })
    const warn = r.warnings.find((w) => w.code === 'synergy-technician-power')
    expect(warn?.severity).toBe('warning')
    expect(r.ok).toBe(true)
  })

  it('should warn synergy-choice-with-setup when a Choice item is paired with a setup move', () => {
    const r = run({ item: 'CHOICEBAND', moves: ['SWORDSDANCE', 'KNOCKOFF', 'UTURN', 'POISONJAB'] })
    expect(r.warnings.map((w) => w.code)).toContain('synergy-choice-with-setup')
    expect(r.ok).toBe(true)
  })

  it('should warn synergy-trickroom-fast-nature for a Trick Room role with a Speed-raising nature', () => {
    const r = run({ role: 'trick-room-setter', nature: 'JOLLY' })
    expect(r.warnings.map((w) => w.code)).toContain('synergy-trickroom-fast-nature')
    expect(r.ok).toBe(true)
  })

  it('should warn synergy-weather-without-source for a weather role with no weather move or ability', () => {
    const r = run({ role: 'weather-setter' })
    expect(r.warnings.map((w) => w.code)).toContain('synergy-weather-without-source')
    expect(r.ok).toBe(true)
  })
})

describe('validateTemplate scenarios', () => {
  it('should report every broken category on a multi-error Spidops set', () => {
    const r = run({
      ability: 'LEVITATE',
      item: 'NOPE',
      moves: ['OUTRAGE', 'SPIKES', 'TOXICSPIKES', 'KNOCKOFF'],
      evs: [252, 252, 20, 0, 0, 0]
    })
    expect(r.ok).toBe(false)
    const cs = codes(r)
    expect(cs).toContain('ability-not-on-species')
    expect(cs).toContain('unknown-item')
    expect(cs).toContain('illegal-move')
    expect(cs).toContain('ev-total-over-max')
  })

  it('should pass a valid Spidops hazard lead with no errors', () => {
    const r = run({})
    expect(r.ok).toBe(true)
    expect(r.errors).toEqual([])
  })
})

describe('applyConfidenceDowngrade', () => {
  function result(partial: Partial<ValidationResult>): ValidationResult {
    return { ok: true, issues: [], errors: [], warnings: [], ...partial }
  }
  const err = (code: ValidationCode) =>
    ({ code, severity: 'error' as const, message: '', path: 'templates[0]' })

  it('should downgrade an entry with an entry-scoped error to pendiente with the triggering code', () => {
    const out = applyConfidenceDowngrade(validEntry(), result({ ok: false, issues: [err('illegal-move')], errors: [err('illegal-move')] }))
    expect(out.effectiveConfidence).toBe('pendiente')
    expect(out.downgraded).toBe(true)
    expect(out.reasons).toEqual(['illegal-move'])
  })

  it('should list each distinct triggering code only once', () => {
    const errs = [err('illegal-move'), err('illegal-move'), err('unknown-item')]
    const out = applyConfidenceDowngrade(validEntry(), result({ ok: false, issues: errs, errors: errs }))
    expect(out.reasons).toEqual(['illegal-move', 'unknown-item'])
  })

  it('should downgrade to pendiente for a blank justification even with no errors', () => {
    const out = applyConfidenceDowngrade({ ...validEntry(), justification: '   ' }, result({}))
    expect(out.effectiveConfidence).toBe('pendiente')
    expect(out.reasons).toContain('missing-justification')
  })

  it('should leave a clean viable entry unchanged', () => {
    const out = applyConfidenceDowngrade({ ...validEntry(), confidence: 'viable' }, result({}))
    expect(out.effectiveConfidence).toBe('viable')
    expect(out.downgraded).toBe(false)
    expect(out.reasons).toEqual([])
  })

  it('should never upgrade a pendiente entry', () => {
    const out = applyConfidenceDowngrade({ ...validEntry(), confidence: 'pendiente', isPrimary: false }, result({}))
    expect(out.effectiveConfidence).toBe('pendiente')
    expect(out.downgraded).toBe(false)
  })

  it('should not downgrade for a warning-only result', () => {
    const out = applyConfidenceDowngrade(
      validEntry(),
      result({ warnings: [{ code: 'synergy-technician-power', severity: 'warning', message: '', path: 'templates[0].ability' }] })
    )
    expect(out.downgraded).toBe(false)
  })
})

describe('validateAllTemplates', () => {
  const loader = (set: PokemonTemplateSet) => async () => ({ default: set })

  it('should validate every entry in the injected loader map keyed by internalName', async () => {
    const loaders = new Map([
      ['SPIDOPS', loader({ internalName: 'SPIDOPS', templates: [validEntry()] })],
      ['BADMON', loader({ internalName: 'BADMON', templates: [{ ...validEntry(), item: 'NOPE' }] })]
    ])
    const map = await validateAllTemplates(gameData, loaders)
    expect(map.get('SPIDOPS')?.ok).toBe(true)
    expect(map.get('BADMON')?.ok).toBe(false)
  })

  it('should flag a registry key that does not match the module internalName', async () => {
    const loaders = new Map([
      ['TAROUNTULA', loader({ internalName: 'SPIDOPS', templates: [validEntry()] })]
    ])
    const map = await validateAllTemplates(gameData, loaders)
    expect(map.get('TAROUNTULA')?.issues.map((i) => i.code)).toContain('registry-key-mismatch')
  })
})
