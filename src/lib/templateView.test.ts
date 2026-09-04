import { describe, it, expect } from 'vitest'
import { toCardVM, heuristicToCardVM, TIER_LABEL } from './templateView'
import type { TemplateGameData, LoadedTemplateEntry, CompetitiveSet, MoveDetail } from './types'
import type { AnilMoveData } from './anilData'
import type { RoleId } from './constants'
import { ROLE_LABEL } from './constants'

function move(name: string): AnilMoveData {
  return {
    name, type: 'bug', category: 'Status', power: null, accuracy: null, pp: null,
    description: '', functionCode: '', flags: [], priority: 0, target: 'Normal', effectChance: null
  }
}

const gameData: TemplateGameData = {
  species: () => null,
  move: (n) => (n === 'SPIKES' ? move('Púas') : null),
  abilityName: (n) => ({ THICKFAT: 'Sebo', SHIELDDUST: 'Polvo Escudo', CUSTOMABIL: 'Custom' } as Record<string, string>)[n] ?? null,
  itemName: (n) => ({ LEFTOVERS: 'Restos' } as Record<string, string>)[n] ?? null,
  legalMovepool: () => new Set<string>(),
  natureKeys: new Set(['ADAMANT']),
  roleIds: new Set(['hazard-lead', 'sweeper-physical'] as RoleId[])
}

function loaded(partial: Partial<LoadedTemplateEntry>): LoadedTemplateEntry {
  return {
    role: partial.role ?? 'hazard-lead',
    isPrimary: partial.isPrimary ?? true,
    confidence: partial.confidence ?? 'optimo',
    ability: partial.ability ?? 'THICKFAT',
    item: partial.item ?? 'LEFTOVERS',
    nature: partial.nature ?? 'ADAMANT',
    evs: partial.evs ?? [252, 0, 4, 0, 0, 252],
    ivs: partial.ivs ?? [31, 31, 31, 31, 31, 31],
    moves: partial.moves ?? ['SPIKES'],
    justification: partial.justification ?? 'Hazard lead rationale.',
    alternatives: partial.alternatives ?? [],
    effectiveConfidence: partial.effectiveConfidence ?? 'viable',
    downgraded: partial.downgraded ?? false,
    reasons: partial.reasons ?? []
  }
}

function computeSetOutput(): CompetitiveSet {
  return {
    classification: { role: 'sweeper-physical', mainOffense: 'attack', baseSpeed: 100 },
    nature: 'Firme (n.º 3)',
    natureKey: 'ADAMANT',
    evs: '252 Atq / 4 PS / 252 Vel',
    evsArray: [4, 252, 0, 0, 0, 252],
    ivs: '31 en todo',
    ivsArray: [31, 31, 31, 31, 31, 31],
    item: 'Banda Elección — n.º 8',
    ability: { id: '', name: '' }
  }
}

const chosenMoves: MoveDetail[] = [
  { name: 'CLOSECOMBAT', label: 'A Bocajarro', power: 120, accuracy: 100, type: 'fighting', damage_class: 'physical' }
]

describe('TIER_LABEL', () => {
  it('should map every tier to its Spanish label', () => {
    expect(TIER_LABEL).toMatchObject({
      optimo: 'Óptimo',
      viable: 'Viable',
      pendiente: 'Pendiente de validación',
      auto: 'Calculado'
    })
  })
})

describe('toCardVM', () => {
  it('should build a curated card view model with a resolved tier label and role label', () => {
    const vm = toCardVM(loaded({ effectiveConfidence: 'viable', role: 'hazard-lead' }), gameData)
    expect(vm.tier).toBe('viable')
    expect(vm.tierLabel).toBe('Viable')
    expect(vm.roleLabel).toBe(ROLE_LABEL['hazard-lead'])
    expect(vm.isPrimary).toBe(true)
    expect(vm.evs).toEqual([252, 0, 4, 0, 0, 252])
    expect(vm.moves).toEqual(['Púas (n.º 360)'])
    expect(vm.justification).toBe('Hazard lead rationale.')
  })

  it('should resolve the ability dex number inside the adapter', () => {
    const vm = toCardVM(loaded({ ability: 'SHIELDDUST' }), gameData)
    expect(vm.abilityDisplay).toBe('Polvo Escudo (n.º 19)')
  })

  it('should show the ability name alone when no dex number resolves', () => {
    const vm = toCardVM(loaded({ ability: 'CUSTOMABIL' }), gameData)
    expect(vm.abilityDisplay).toBe('Custom')
  })

  it('should carry a pendiente banner only when the effective confidence is pendiente', () => {
    expect(toCardVM(loaded({ effectiveConfidence: 'viable' }), gameData).bannerText).toBe('')
    expect(toCardVM(loaded({ effectiveConfidence: 'pendiente' }), gameData).bannerText.length).toBeGreaterThan(0)
  })
})

describe('heuristicToCardVM', () => {
  it('should build an auto-tier card view model from engine output', () => {
    const vm = heuristicToCardVM(computeSetOutput(), chosenMoves, gameData)
    expect(vm.tier).toBe('auto')
    expect(vm.tierLabel).toBe(TIER_LABEL.auto)
    expect(vm.roleLabel).toBe(ROLE_LABEL['sweeper-physical'])
    expect(vm.evs).toEqual([4, 252, 0, 0, 0, 252])
    expect(vm.moves).toEqual(['A Bocajarro'])
    expect(vm.isPrimary).toBe(false)
  })

  it('should produce the exact same view model shape as the curated adapter', () => {
    const curated = toCardVM(loaded({}), gameData)
    const heuristic = heuristicToCardVM(computeSetOutput(), chosenMoves, gameData)
    expect(Object.keys(heuristic).sort()).toEqual(Object.keys(curated).sort())
  })

  it('should resolve the ability dex number when an ability is supplied', () => {
    const vm = heuristicToCardVM(computeSetOutput(), chosenMoves, gameData, { id: 'THICKFAT' })
    expect(vm.abilityDisplay).toBe('Sebo (n.º 47)')
  })

  it('should prefer the engine-picked ability on the set over the override argument', () => {
    const set = { ...computeSetOutput(), ability: { id: 'SHIELDDUST', name: 'Polvo Escudo' } }
    const vm = heuristicToCardVM(set, chosenMoves, gameData, { id: 'THICKFAT' })
    expect(vm.abilityDisplay).toBe('Polvo Escudo (n.º 19)')
  })
})
