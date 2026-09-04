import { describe, it, expect } from 'vitest'
import { selectClosestTemplate, diffSavedVsTemplate } from './templateDiff'
import type {
  TemplateGameData, LoadedTemplateEntry, LoadedTemplateSet, SavedBuild, StatSextet, DiffStatus
} from './types'
import type { AnilSpecies } from './anilData'
import type { RoleId } from './constants'

const SPECIES_ABILITIES = [
  { id: 'STAKEOUT', name: 'Vigía', hidden: false },
  { id: 'TECHNICIAN', name: 'Técnico', hidden: false },
  { id: 'INSOMNIA', name: 'Insomnio', hidden: true }
]

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
    tutorMoves: ['SPIKES', 'TOXICSPIKES', 'KNOCKOFF', 'UTURN', 'POISONJAB', 'FIRSTIMPRESSION', 'STICKYWEB'],
    eggMoves: [],
    levelMoves: []
  }
}

const LEGAL = new Set(['SPIKES', 'TOXICSPIKES', 'KNOCKOFF', 'UTURN', 'POISONJAB', 'FIRSTIMPRESSION', 'STICKYWEB'])

const gameData: TemplateGameData = {
  species: (n) => (n === 'SPIDOPS' ? spidops() : null),
  move: () => null,
  abilityName: (n) => ({ STAKEOUT: 'Vigía', TECHNICIAN: 'Técnico', INSOMNIA: 'Insomnio', LEVITATE: 'Levitación' } as Record<string, string>)[n] ?? null,
  itemName: (n) => ({ CHOICEBAND: 'Banda Elección', LEFTOVERS: 'Restos', FOCUSSASH: 'Banda Focus', ROCKYHELMET: 'Casco Dentado' } as Record<string, string>)[n] ?? null,
  legalMovepool: () => new Set(LEGAL),
  natureKeys: new Set(['ADAMANT', 'JOLLY', 'IMPISH', 'BOLD']),
  roleIds: new Set(['hazard-lead', 'breaker-physical', 'wall-physical'] as RoleId[])
}

function entry(partial: Partial<LoadedTemplateEntry>): LoadedTemplateEntry {
  return {
    role: partial.role ?? 'breaker-physical',
    isPrimary: partial.isPrimary ?? false,
    confidence: partial.confidence ?? 'optimo',
    ability: partial.ability ?? 'STAKEOUT',
    item: partial.item ?? 'CHOICEBAND',
    nature: partial.nature ?? 'ADAMANT',
    evs: partial.evs ?? [4, 252, 0, 0, 0, 252],
    ivs: partial.ivs ?? [31, 31, 31, 31, 31, 31],
    moves: partial.moves ?? ['FIRSTIMPRESSION', 'KNOCKOFF', 'UTURN', 'POISONJAB'],
    justification: partial.justification ?? 'x',
    alternatives: partial.alternatives ?? [],
    effectiveConfidence: partial.effectiveConfidence ?? 'optimo',
    downgraded: partial.downgraded ?? false,
    reasons: partial.reasons ?? []
  }
}

function saved(partial: Partial<SavedBuild>): SavedBuild {
  return {
    internalName: partial.internalName ?? 'SPIDOPS',
    natureKey: partial.natureKey ?? 'ADAMANT',
    abilityId: partial.abilityId ?? 'STAKEOUT',
    itemId: partial.itemId ?? 'CHOICEBAND',
    evs: partial.evs ?? [4, 252, 0, 0, 0, 252],
    ivs: partial.ivs ?? [31, 31, 31, 31, 31, 31],
    moveIds: partial.moveIds ?? ['FIRSTIMPRESSION', 'KNOCKOFF', 'UTURN', 'POISONJAB']
  }
}

const evs = (a: number[]): StatSextet => a as StatSextet

describe('selectClosestTemplate', () => {
  it('should pick the entry that matches the saved ability and name the ability signal', () => {
    const primary = entry({ isPrimary: true, ability: 'STAKEOUT', item: 'LEFTOVERS', nature: 'JOLLY', evs: evs([0, 0, 0, 0, 0, 0]), moves: [] })
    const other = entry({ ability: 'TECHNICIAN', item: 'LEFTOVERS', nature: 'JOLLY', evs: evs([0, 0, 0, 0, 0, 0]), moves: [] })
    const set: LoadedTemplateSet = { internalName: 'SPIDOPS', entries: [primary, other] }
    const match = selectClosestTemplate(saved({ abilityId: 'TECHNICIAN', itemId: 'X', natureKey: 'Z', evs: evs([0, 0, 0, 0, 0, 0]), moveIds: [] }), set, gameData)
    expect(match?.entry).toBe(other)
    expect(match?.matchReason).toBe('ability-match')
    expect(match?.score).toBe(3)
  })

  it('should break a score tie in favour of the primary entry', () => {
    const a = entry({ isPrimary: false, ability: 'STAKEOUT', item: 'X', nature: 'Z', evs: evs([0, 0, 0, 0, 0, 0]), moves: [] })
    const b = entry({ isPrimary: true, ability: 'STAKEOUT', item: 'X', nature: 'Z', evs: evs([0, 0, 0, 0, 0, 0]), moves: [] })
    const set: LoadedTemplateSet = { internalName: 'SPIDOPS', entries: [a, b] }
    const match = selectClosestTemplate(saved({ abilityId: 'STAKEOUT', itemId: 'none', natureKey: 'none', evs: evs([0, 0, 0, 0, 0, 0]), moveIds: [] }), set, gameData)
    expect(match?.entry).toBe(b)
  })

  it('should fall back to the primary with primary-default when every entry scores zero', () => {
    const primary = entry({ isPrimary: true, ability: 'STAKEOUT', item: 'LEFTOVERS', nature: 'ADAMANT', evs: evs([4, 252, 0, 0, 0, 252]), moves: ['KNOCKOFF'] })
    const other = entry({ ability: 'TECHNICIAN', item: 'ROCKYHELMET', nature: 'IMPISH', evs: evs([252, 0, 252, 0, 0, 0]), moves: ['SPIKES'] })
    const set: LoadedTemplateSet = { internalName: 'SPIDOPS', entries: [primary, other] }
    const match = selectClosestTemplate(saved({ abilityId: 'NONE', itemId: 'NONE', natureKey: 'NONE', evs: evs([0, 0, 0, 0, 0, 0]), moveIds: [] }), set, gameData)
    expect(match?.entry).toBe(primary)
    expect(match?.matchReason).toBe('primary-default')
    expect(match?.score).toBe(0)
  })

  it('should never select a pendiente entry even when it matches perfectly', () => {
    const pendiente = entry({ isPrimary: false, confidence: 'pendiente', effectiveConfidence: 'pendiente', ability: 'TECHNICIAN', item: 'CHOICEBAND', nature: 'ADAMANT', evs: evs([4, 252, 0, 0, 0, 252]), moves: ['FIRSTIMPRESSION', 'KNOCKOFF', 'UTURN', 'POISONJAB'] })
    const primary = entry({ isPrimary: true, ability: 'STAKEOUT', item: 'LEFTOVERS', nature: 'JOLLY', evs: evs([0, 0, 0, 0, 0, 0]), moves: [] })
    const set: LoadedTemplateSet = { internalName: 'SPIDOPS', entries: [pendiente, primary] }
    const match = selectClosestTemplate(saved({ abilityId: 'TECHNICIAN', itemId: 'CHOICEBAND', natureKey: 'ADAMANT', evs: evs([4, 252, 0, 0, 0, 252]), moveIds: ['FIRSTIMPRESSION', 'KNOCKOFF', 'UTURN', 'POISONJAB'] }), set, gameData)
    expect(match?.entry).toBe(primary)
  })

  it('should return null when every entry is pendiente', () => {
    const p1 = entry({ isPrimary: true, confidence: 'pendiente', effectiveConfidence: 'pendiente' })
    const set: LoadedTemplateSet = { internalName: 'SPIDOPS', entries: [p1] }
    expect(selectClosestTemplate(saved({}), set, gameData)).toBeNull()
  })

  it('should diff a wall-spread save against the viable wall alternative, not the wallbreaker primary', () => {
    const wallbreaker = entry({ isPrimary: true, role: 'breaker-physical', item: 'CHOICEBAND', nature: 'ADAMANT', evs: evs([4, 252, 0, 0, 0, 252]), moves: ['FIRSTIMPRESSION', 'OUTRAGE'] })
    const wall = entry({ isPrimary: false, confidence: 'viable', effectiveConfidence: 'viable', role: 'wall-physical', item: 'LEFTOVERS', nature: 'IMPISH', evs: evs([252, 0, 252, 0, 4, 0]), moves: ['SPIKES', 'KNOCKOFF'] })
    const set: LoadedTemplateSet = { internalName: 'SPIDOPS', entries: [wallbreaker, wall] }
    const match = selectClosestTemplate(saved({ abilityId: 'NONE', itemId: 'NONE', natureKey: 'NONE', evs: evs([252, 0, 252, 0, 4, 0]), moveIds: [] }), set, gameData)
    expect(match?.entry).toBe(wall)
    expect(match?.matchReason).toBe('ev-spread-match')
  })
})

describe('diffSavedVsTemplate', () => {
  function statusOf(rows: { field: string; key?: string; status: DiffStatus }[], field: string, key?: string): DiffStatus | undefined {
    return rows.find((r) => r.field === field && (key === undefined || r.key === key))?.status
  }

  it('should mark every field match for an identical saved build', () => {
    const e = entry({})
    const diff = diffSavedVsTemplate(saved({}), e, gameData)
    expect(statusOf(diff.rows, 'nature')).toBe('match')
    expect(statusOf(diff.rows, 'ability')).toBe('match')
    expect(statusOf(diff.rows, 'item')).toBe('match')
    expect(statusOf(diff.rows, 'evs')).toBe('match')
    expect(statusOf(diff.rows, 'ivs')).toBe('match')
    expect(statusOf(diff.rows, 'move', 'KNOCKOFF')).toBe('match')
    expect(diff.rows.every((r) => ['match', 'differs', 'acceptable-variant'].includes(r.status))).toBe(true)
  })

  it('should mark an off-template ability that is legal for the species as acceptable-variant', () => {
    const diff = diffSavedVsTemplate(saved({ abilityId: 'INSOMNIA' }), entry({ ability: 'STAKEOUT' }), gameData)
    expect(statusOf(diff.rows, 'ability')).toBe('acceptable-variant')
  })

  it('should mark an off-template item that exists in the PBS as acceptable-variant', () => {
    const diff = diffSavedVsTemplate(saved({ itemId: 'ROCKYHELMET' }), entry({ item: 'CHOICEBAND' }), gameData)
    expect(statusOf(diff.rows, 'item')).toBe('acceptable-variant')
  })

  it('should mark an off-template saved move that is in the legal movepool as acceptable-variant', () => {
    const diff = diffSavedVsTemplate(
      saved({ moveIds: ['FIRSTIMPRESSION', 'KNOCKOFF', 'UTURN', 'STICKYWEB'] }),
      entry({ moves: ['FIRSTIMPRESSION', 'KNOCKOFF', 'UTURN', 'POISONJAB'] }),
      gameData
    )
    expect(statusOf(diff.rows, 'move', 'STICKYWEB')).toBe('acceptable-variant')
  })

  it('should mark a template move absent from the save as differs', () => {
    const diff = diffSavedVsTemplate(
      saved({ moveIds: ['FIRSTIMPRESSION', 'KNOCKOFF', 'UTURN'] }),
      entry({ moves: ['FIRSTIMPRESSION', 'KNOCKOFF', 'UTURN', 'POISONJAB'] }),
      gameData
    )
    expect(statusOf(diff.rows, 'move', 'POISONJAB')).toBe('differs')
  })

  it('should mark nature, EV and IV deviations as differs', () => {
    const diff = diffSavedVsTemplate(
      saved({ natureKey: 'JOLLY', evs: evs([0, 0, 0, 0, 0, 0]), ivs: evs([31, 0, 31, 31, 31, 31]) }),
      entry({ nature: 'ADAMANT', evs: evs([4, 252, 0, 0, 0, 252]), ivs: evs([31, 31, 31, 31, 31, 31]) }),
      gameData
    )
    expect(statusOf(diff.rows, 'nature')).toBe('differs')
    expect(statusOf(diff.rows, 'evs')).toBe('differs')
    expect(statusOf(diff.rows, 'ivs')).toBe('differs')
  })

  it('should mark an ability not on the species or an unknown item as differs', () => {
    const diff = diffSavedVsTemplate(saved({ abilityId: 'LEVITATE', itemId: 'FAKEITEM' }), entry({}), gameData)
    expect(statusOf(diff.rows, 'ability')).toBe('differs')
    expect(statusOf(diff.rows, 'item')).toBe('differs')
  })

  it('should never emit a status outside match, differs and acceptable-variant', () => {
    const diff = diffSavedVsTemplate(saved({ abilityId: 'LEVITATE', itemId: 'FAKEITEM', moveIds: ['FIRSTIMPRESSION', 'BADMOVE'] }), entry({}), gameData)
    for (const row of diff.rows) {
      expect(['match', 'differs', 'acceptable-variant']).toContain(row.status)
    }
  })
})
