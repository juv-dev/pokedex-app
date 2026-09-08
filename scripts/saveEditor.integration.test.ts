import { existsSync, readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { load, dump, collectPokemon, ivarGet, symOrStr, asInt, hashGet } from '../src/lib/marshalCodec.mjs'
import { applyRecommendedSets } from '../src/lib/saveEditor'

const SAVE = 'C:/Users/jesus/AppData/Roaming/Pokemon Anil/Partida 1.rxdata'
const STAT_KEYS = ['HP', 'ATTACK', 'DEFENSE', 'SPECIAL_ATTACK', 'SPECIAL_DEFENSE', 'SPEED']

function bytes(): Uint8Array {
  return Uint8Array.from(readFileSync(SAVE))
}

describe.skipIf(!existsSync(SAVE))('applyRecommendedSets (real save)', () => {
  it('should change only EV/IV/moves/stats and pass verification', async () => {
    const res = await applyRecommendedSets(bytes(), { includeNatureItemAbility: false, onlyOptimo: false })
    expect(res.totals.applied).toBeGreaterThan(150)
    expect(res.totals.structuralDiffs).toBe(0)
    expect(res.totals.verifyFail).toBe(0)
    expect(res.verified).toBe(true)
  })

  it('should produce a well-formed save that re-serialises to itself', async () => {
    const res = await applyRecommendedSets(bytes(), { includeNatureItemAbility: false, onlyOptimo: false })
    const again = dump(load(res.output))
    expect(again.length).toBe(res.output.length)
    expect(Buffer.compare(Buffer.from(again), Buffer.from(res.output))).toBe(0)
  })

  it('should write the target EVs and moves onto each applied Pokémon', async () => {
    const res = await applyRecommendedSets(bytes(), { includeNatureItemAbility: false, onlyOptimo: false })
    const doc = load(res.output)
    const mons = collectPokemon(doc)
    const applied = new Set(res.records.filter(r => r.applied).map(r => r.species + ':' + r.boxName + ':' + r.slot))
    let checked = 0
    for (const m of mons) {
      const species = symOrStr(ivarGet(m.node, '@species'))
      const key = species + ':' + m.boxName + ':' + m.slot
      const rec = res.records.find(r => r.species === species && r.boxName === m.boxName && r.slot === m.slot)
      if (!rec || !rec.applied || !applied.has(key)) continue
      const ev = STAT_KEYS.map(k => asInt(hashGet(ivarGet(m.node, '@ev'), k)))
      expect(ev).toEqual(rec.evAfter)
      const moves = (ivarGet(m.node, '@moves') as { items: unknown[] }).items.map(x => symOrStr(ivarGet(x as never, '@id')))
      expect(moves).toEqual(rec.movesAfter)
      checked++
    }
    expect(checked).toBeGreaterThan(150)
  })

  it('should also set nature when includeNatureItemAbility is on', async () => {
    const res = await applyRecommendedSets(bytes(), { includeNatureItemAbility: true, onlyOptimo: false })
    expect(res.verified).toBe(true)
    expect(res.totals.natureApplied).toBeGreaterThan(0)
    const changed = res.records.find(r => r.natureApplied)
    expect(changed).toBeTruthy()
    const doc = load(res.output)
    const mon = collectPokemon(doc).find(m => symOrStr(ivarGet(m.node, '@species')) === changed!.species)
    expect(symOrStr(ivarGet(mon!.node, '@nature'))).toBe(changed!.natureWanted)
  })

  it('should apply fewer Pokémon when onlyOptimo is on', async () => {
    const all = await applyRecommendedSets(bytes(), { includeNatureItemAbility: false, onlyOptimo: false })
    const opt = await applyRecommendedSets(bytes(), { includeNatureItemAbility: false, onlyOptimo: true })
    expect(opt.totals.applied).toBeLessThan(all.totals.applied)
    expect(opt.verified).toBe(true)
  })
})
