import { describe, expect, it } from 'vitest'
import { load, dump, symFor, int, nil, collectPokemon, ivarGet, symOrStr, asInt, hashGet, type MNode } from './marshalCodec.mjs'
import { applyRecommendedSets, applyDraftChanges, type DraftLike } from './saveEditor'
import { megaOptionsFor, type RecommendedSet } from './recommendedSet'

const STAT_KEYS = ['HP', 'ATTACK', 'DEFENSE', 'SPECIAL_ATTACK', 'SPECIAL_DEFENSE', 'SPEED']

function strNode(text: string): MNode {
  return { k: 'str', bytes: new TextEncoder().encode(text), iWrapped: true, ivars: [[symFor('E'), { k: 'prim', p: 1 }]] } as MNode
}
function hashOf(values: number[]): MNode {
  return { k: 'hash', pairs: STAT_KEYS.map((key, i) => [symFor(key), int(values[i])]) } as MNode
}
function moveObj(id: string): MNode {
  return {
    k: 'object', cls: 'Pokemon::Move',
    ivars: [[symFor('@id'), symFor(id)], [symFor('@ppup'), int(0)], [symFor('@pp'), int(15)]]
  } as MNode
}
function pokemon(species: string, level: number, pid?: number): MNode {
  return {
    k: 'object', cls: 'Pokemon',
    ivars: [
      [symFor('@species'), symFor(species)],
      [symFor('@level'), int(level)],
      ...(pid != null ? [[symFor('@personalID'), int(pid)]] as Array<[MNode, MNode]> : []),
      [symFor('@nature'), symFor('HARDY')],
      [symFor('@nature_for_stats'), nil()],
      [symFor('@shiny'), { k: 'prim', p: 2 }],
      [symFor('@ability'), symFor('OVERGROW')],
      [symFor('@ability_index'), int(0)],
      [symFor('@item'), nil()],
      [symFor('@name'), nil()],
      [symFor('@iv'), hashOf([0, 0, 0, 0, 0, 0])],
      [symFor('@ev'), hashOf([0, 0, 0, 0, 0, 0])],
      [symFor('@moves'), { k: 'array', items: [moveObj('TACKLE'), moveObj('GROWL')] }],
      [symFor('@first_moves'), { k: 'array', items: [] }],
      [symFor('@hp'), int(1)], [symFor('@totalhp'), int(1)],
      [symFor('@attack'), int(1)], [symFor('@defense'), int(1)],
      [symFor('@spatk'), int(1)], [symFor('@spdef'), int(1)], [symFor('@speed'), int(1)]
    ]
  } as MNode
}

function synthSave(): Uint8Array {
  const box: MNode = {
    k: 'object', cls: 'PokemonBox',
    ivars: [
      [symFor('@name'), strNode('Caja 1')],
      [symFor('@pokemon'), { k: 'array', items: [pokemon('PIKACHU', 50), nil(), pokemon('SNORLAX', 50)] }]
    ]
  } as MNode
  const storage: MNode = {
    k: 'object', cls: 'PokemonStorage',
    ivars: [[symFor('@boxes'), { k: 'array', items: [box] }]]
  } as MNode
  const player: MNode = {
    k: 'object', cls: 'Player',
    ivars: [[symFor('@party'), { k: 'array', items: [pokemon('GARCHOMP', 60)] }]]
  } as MNode
  const root: MNode = {
    k: 'hash',
    pairs: [[symFor('player'), player], [symFor('storage'), storage]]
  } as MNode
  return dump({ major: 4, minor: 8, root })
}

describe('applyRecommendedSets', () => {
  it('should apply EVs, IVs and moves to every reachable Pokémon and verify clean', async () => {
    const res = await applyRecommendedSets(synthSave(), { includeNatureItemAbility: false, onlyOptimo: false })
    expect(res.totals.mons).toBe(3)
    expect(res.totals.applied).toBe(3)
    expect(res.totals.structuralDiffs).toBe(0)
    expect(res.totals.verifyFail).toBe(0)
    expect(res.verified).toBe(true)
  })

  it('should write the recommended EVs and moves onto the Pokémon', async () => {
    const res = await applyRecommendedSets(synthSave(), { includeNatureItemAbility: false, onlyOptimo: false })
    const mons = collectPokemon(load(res.output))
    for (const m of mons) {
      const species = symOrStr(ivarGet(m.node, '@species'))
      const rec = res.records.find(r => r.species === species)!
      const ev = STAT_KEYS.map(k => asInt(hashGet(ivarGet(m.node, '@ev'), k)))
      expect(ev).toEqual(rec.evAfter)
      const moves = (ivarGet(m.node, '@moves') as unknown as { items: MNode[] }).items.map(x => symOrStr(ivarGet(x, '@id')))
      expect(moves).toEqual(rec.movesAfter)
      expect(moves).toHaveLength(4)
    }
  })

  it('should leave nature untouched by default and stamp it when the flag is on', async () => {
    const off = await applyRecommendedSets(synthSave(), { includeNatureItemAbility: false, onlyOptimo: false })
    expect(off.totals.natureApplied).toBe(0)
    const monOff = collectPokemon(load(off.output)).find(m => symOrStr(ivarGet(m.node, '@species')) === 'PIKACHU')!
    expect(symOrStr(ivarGet(monOff.node, '@nature'))).toBe('HARDY')

    const on = await applyRecommendedSets(synthSave(), { includeNatureItemAbility: true, onlyOptimo: false })
    expect(on.totals.natureApplied).toBeGreaterThan(0)
    expect(on.verified).toBe(true)
    const rec = on.records.find(r => r.natureApplied)!
    const monOn = collectPokemon(load(on.output)).find(m => symOrStr(ivarGet(m.node, '@species')) === rec.species)!
    expect(symOrStr(ivarGet(monOn.node, '@nature'))).toBe(rec.natureWanted)
  })

  it('should recompute the stored stats from the new spread', async () => {
    const res = await applyRecommendedSets(synthSave(), { includeNatureItemAbility: false, onlyOptimo: false })
    const mon = collectPokemon(load(res.output)).find(m => symOrStr(ivarGet(m.node, '@species')) === 'SNORLAX')!
    const totalhp = asInt(ivarGet(mon.node, '@totalhp'))
    const hp = asInt(ivarGet(mon.node, '@hp'))
    expect(totalhp).toBeGreaterThan(1)
    expect(hp).toBe(totalhp)
  })

  it('should self round-trip the produced save', async () => {
    const res = await applyRecommendedSets(synthSave(), { includeNatureItemAbility: true, onlyOptimo: false })
    const again = dump(load(res.output))
    expect(again.length).toBe(res.output.length)
    expect([...again]).toEqual([...res.output])
  })

  it('should apply the full mega build (item, ability, nature) for a chosen mega form', async () => {
    const forms = megaOptionsFor('GARCHOMP')
    expect(forms.length).toBeGreaterThan(0)
    const form = forms[0]

    const res = await applyRecommendedSets(synthSave(), {
      includeNatureItemAbility: false,
      onlyOptimo: false,
      megaChoices: { GARCHOMP: form.formName }
    })
    expect(res.verified).toBe(true)
    expect(res.totals.megaApplied).toBe(1)

    const rec = res.records.find(r => r.species === 'GARCHOMP')!
    expect(rec.mega).toBe(form.formName)
    expect(rec.tier).toBe('mega')
    expect(rec.itemApplied).toBe(true)
    expect(rec.natureApplied).toBe(true)
    expect(rec.abilityApplied).toBe(true)

    const mon = collectPokemon(load(res.output)).find(m => symOrStr(ivarGet(m.node, '@species')) === 'GARCHOMP')!
    if (form.megaStone) expect(symOrStr(ivarGet(mon.node, '@item'))).toBe(form.megaStone)
    expect(symOrStr(ivarGet(mon.node, '@nature'))).toBe(rec.natureWanted)
    // other Pokémon keep the base build (no mega)
    expect(res.records.find(r => r.species === 'PIKACHU')!.mega).toBeNull()
  })
})

function pidSave(): Uint8Array {
  const box: MNode = {
    k: 'object', cls: 'PokemonBox',
    ivars: [
      [symFor('@name'), strNode('Caja 1')],
      [symFor('@pokemon'), { k: 'array', items: [pokemon('LEDIAN', 50, 111), nil(), pokemon('LEDIAN', 50, 222)] }]
    ]
  } as MNode
  const storage: MNode = { k: 'object', cls: 'PokemonStorage', ivars: [[symFor('@boxes'), { k: 'array', items: [box] }]] } as MNode
  const player: MNode = { k: 'object', cls: 'Player', ivars: [[symFor('@party'), { k: 'array', items: [pokemon('GARCHOMP', 60, 333)] }]] } as MNode
  const root: MNode = { k: 'hash', pairs: [[symFor('player'), player], [symFor('storage'), storage]] } as MNode
  return dump({ major: 4, minor: 8, root })
}

function draftFor(instanceKey: string, speciesId: string, over: Partial<RecommendedSet> = {}): DraftLike {
  return {
    instanceKey,
    speciesId,
    selectedFormId: over.megaFormName ?? '',
    recommendedSet: {
      source: 'heuristic', tier: 'viable', referenceFrom: null, megaFormName: null,
      base: [40, 35, 50, 55, 110, 85],
      evs: [4, 0, 0, 0, 252, 252], ivs: [31, 31, 31, 31, 31, 31],
      moves: [{ id: 'SWORDSDANCE', pp: 20 }, { id: 'MACHPUNCH', pp: 30 }, { id: 'KNOCKOFF', pp: 20 }, { id: 'DUALWINGBEAT', pp: 10 }],
      nature: 'JOLLY', item: 'LIFEORB', ability: 'SWARM', ...over
    }
  }
}

describe('applyDraftChanges', () => {
  it('should apply one set per instance matched by @personalID and verify clean', () => {
    const res = applyDraftChanges(pidSave(), [draftFor('pid:111', 'LEDIAN')])
    expect(res.applied).toBe(1)
    expect(res.diffs).toEqual([])
    expect(res.verified).toBe(true)
    expect(res.records[0].applied).toBe(true)
  })

  it('should touch only the targeted instance, leaving its same-species sibling untouched', () => {
    const original = pidSave()
    const res = applyDraftChanges(original, [draftFor('pid:111', 'LEDIAN')])
    const mons = collectPokemon(load(res.output))
    const byPid = (p: number) => mons.find(m => asInt(ivarGet(m.node, '@personalID')) === p)!

    const changed = byPid(111)
    expect(STAT_KEYS.map(k => asInt(hashGet(ivarGet(changed.node, '@ev'), k)))).toEqual([4, 0, 0, 0, 252, 252])
    const changedMoves = (ivarGet(changed.node, '@moves') as unknown as { items: MNode[] }).items.map(x => symOrStr(ivarGet(x, '@id')))
    expect(changedMoves).toEqual(['SWORDSDANCE', 'MACHPUNCH', 'KNOCKOFF', 'DUALWINGBEAT'])

    const untouched = byPid(222)
    expect(STAT_KEYS.map(k => asInt(hashGet(ivarGet(untouched.node, '@ev'), k)))).toEqual([0, 0, 0, 0, 0, 0])
    const untouchedMoves = (ivarGet(untouched.node, '@moves') as unknown as { items: MNode[] }).items.map(x => symOrStr(ivarGet(x, '@id')))
    expect(untouchedMoves).toEqual(['TACKLE', 'GROWL'])
  })

  it('should reopen the produced save and re-serialise it identically', () => {
    const res = applyDraftChanges(pidSave(), [draftFor('pid:111', 'LEDIAN'), draftFor('pid:333', 'GARCHOMP')])
    const again = dump(load(res.output))
    expect([...again]).toEqual([...res.output])
  })

  it('should fall back to box+slot when the key carries no personal id', () => {
    const res = applyDraftChanges(pidSave(), [draftFor('loc:box0:2:LEDIAN', 'LEDIAN')])
    expect(res.applied).toBe(1)
    expect(res.verified).toBe(true)
  })

  it('should record a skip when the instance is not in the save', () => {
    const res = applyDraftChanges(pidSave(), [draftFor('pid:999', 'LEDIAN')])
    expect(res.applied).toBe(0)
    expect(res.records[0].applied).toBe(false)
    expect(res.records[0].skippedReason).toMatch(/no se encontr/i)
  })
})
