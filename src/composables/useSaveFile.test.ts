import { describe, expect, it, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import { useSaveFile } from './useSaveFile'
import type { TeamSummary } from '../lib/team'
import type { FoundPokemon } from '../lib/marshal'

const readSaveFile = vi.fn<(file: File) => Promise<FoundPokemon[]>>()
const fetchTeamSummary = vi.fn<(p: FoundPokemon) => Promise<TeamSummary | null>>()

vi.mock('../lib/marshal', () => ({ readSaveFile: (f: File) => readSaveFile(f) }))
vi.mock('../lib/team', async orig => ({
  ...(await orig<typeof import('../lib/team')>()),
  fetchTeamSummary: (p: FoundPokemon) => fetchTeamSummary(p)
}))

function summary(over: Partial<TeamSummary> & { internalName: string }): TeamSummary {
  return {
    raw: { __class: 'Pokemon', __ivars: { '@personalID': Math.floor(Math.random() * 1e9) } },
    dexNum: 1, displayName: over.internalName, nickname: null, sprite: '', types: [],
    level: 100, isShiny: false, speciesSlug: '', isCustom: false, ballId: null, ballLabel: '',
    inParty: false, boxIndex: 0, boxName: 'Caja 1', boxSlot: 0, ...over
  }
}

const found: FoundPokemon = { obj: { __class: 'Pokemon', __ivars: {} }, inParty: false, boxIndex: 0, boxName: 'Caja 1', boxSlot: 0 }

beforeEach(() => {
  readSaveFile.mockReset()
  fetchTeamSummary.mockReset()
})

describe('useSaveFile', () => {
  it('should derive roster, team slots, owned names and a save id from the summaries', () => {
    const save = useSaveFile()
    save.summaries.value = [
      summary({ internalName: 'PIKACHU', inParty: true }),
      summary({ internalName: 'RAICHU', boxIndex: 2, boxSlot: 4 }),
      summary({ internalName: 'PIKACHU', boxIndex: 2, boxSlot: 5 })
    ]
    expect(save.loaded.value).toBe(true)
    expect(save.roster.value.map(r => r.internalName)).toEqual(['PIKACHU', 'RAICHU', 'PIKACHU'])
    expect(save.ownedInternalNames.value).toEqual(['PIKACHU', 'RAICHU'])
    expect(save.teamMons.value.filter(Boolean)).toHaveLength(1)
    expect(save.saveId.value).toMatch(/^save:/)
  })

  it('should reach "analizada" when the file yields Pokémon', async () => {
    readSaveFile.mockResolvedValue([found])
    fetchTeamSummary.mockResolvedValue(summary({ internalName: 'PIKACHU' }))
    const save = useSaveFile()
    await save.readFile(new File(['x'], 'Partida 1.rxdata'))
    await nextTick()
    expect(save.status.value).toBe('analizada')
    expect(save.summaries.value).toHaveLength(1)
    expect(save.bytes.value).toBeInstanceOf(Uint8Array)
  })

  it('should classify an empty parse as incompatible', async () => {
    readSaveFile.mockResolvedValue([])
    const save = useSaveFile()
    await save.readFile(new File(['x'], 'x.rxdata'))
    expect(save.status.value).toBe('incompatible')
  })

  it('should classify a bad Marshal header as incompatible and a mid-parse failure as corrupto', async () => {
    const save = useSaveFile()
    readSaveFile.mockRejectedValueOnce(new Error('Formato Marshal no reconocido'))
    await save.readFile(new File(['x'], 'x.rxdata'))
    expect(save.status.value).toBe('incompatible')

    readSaveFile.mockRejectedValueOnce(new Error("Tipo de Marshal desconocido 'z' en posición 42"))
    await save.readFile(new File(['x'], 'x.rxdata'))
    expect(save.status.value).toBe('corrupto')
  })

  it('should fall back to error-lectura for an unknown failure and drop the bytes', async () => {
    readSaveFile.mockRejectedValue(new Error('boom'))
    const save = useSaveFile()
    await save.readFile(new File(['x'], 'x.rxdata'))
    expect(save.status.value).toBe('error-lectura')
    expect(save.bytes.value).toBeNull()
  })

  it('should reset back to sin-archivo', () => {
    const save = useSaveFile()
    save.summaries.value = [summary({ internalName: 'PIKACHU' })]
    save.reset()
    expect(save.loaded.value).toBe(false)
    expect(save.status.value).toBe('sin-archivo')
  })
})
