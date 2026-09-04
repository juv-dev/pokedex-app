import { describe, it, expect } from 'vitest'
import {
  classifyRole, pickNature, natureKeyForRole, pickEVs, pickIVs, pickItem, pickItemKeys, slugify,
  capitalizeWords, statsToArr, pickAbility, pickMoveset, movesDetailedFromPool, loadSpeciesIndex
} from './engine'
import { natureSentence } from './nature'
import type { StatMap, MoveDetail } from './types'
import type { AnilMoveData } from './anilData'

function stats(hp: number, attack: number, defense: number, spa: number, spd: number, speed: number): StatMap {
  return { hp, attack, defense, 'special-attack': spa, 'special-defense': spd, speed }
}

describe('classifyRole', () => {
  it('should classify a fast high-attack Pokémon as a physical sweeper', () => {
    const { role } = classifyRole(stats(108, 130, 95, 80, 85, 102))
    expect(role).toBe('sweeper-physical')
  })

  it('should classify a bulky low-offense Pokémon with higher Defense as a physical wall', () => {
    const { role } = classifyRole(stats(250, 5, 120, 35, 80, 30))
    expect(role).toBe('wall-physical')
  })

  it('should classify Bulbasaur as a special wallbreaker', () => {
    const { role } = classifyRole(stats(45, 49, 49, 65, 65, 45))
    expect(role).toBe('breaker-special')
  })
})

describe('natureKeyForRole', () => {
  it('should map a slow physical sweeper to JOLLY', () => {
    expect(natureKeyForRole('sweeper-physical', 80)).toBe('JOLLY')
  })

  it('should map a special wall to CALM', () => {
    expect(natureKeyForRole('wall-special', 40)).toBe('CALM')
  })
})

describe('pickNature', () => {
  it('should recommend Jolly with its Essentials index for a slow physical sweeper', () => {
    expect(pickNature('sweeper-physical', 80)).toBe('Alegre (n.º 13)')
  })

  it('should recommend the physical-wall nature with its Essentials index', () => {
    expect(pickNature('wall-physical', 30)).toBe('Agitada (n.º 8)')
  })

  it('should recommend Calm with its Essentials index for a special wall', () => {
    expect(pickNature('wall-special', 40)).toBe('Serena (n.º 20)')
  })
})

describe('pickEVs', () => {
  it('should invest in Attack and Speed for a physical sweeper', () => {
    expect(pickEVs('sweeper-physical', 'attack')).toBe('252 Atq / 4 PS / 252 Vel')
  })
})

describe('pickIVs', () => {
  it('should recommend 0 Attack IV for special roles', () => {
    expect(pickIVs('sweeper-special')).toContain('0 en Ataque')
  })

  it('should recommend flat 31 IVs for physical roles', () => {
    expect(pickIVs('sweeper-physical')).toBe('31 en todo')
  })
})

describe('pickItem', () => {
  it('should recommend the Choice Scarf with its game name and number for a slow sweeper', () => {
    expect(pickItem('sweeper-physical', false, 60)).toBe('Pañuelo Elección — n.º 106')
  })

  it('should recommend Leftovers by its game name and number for a wall', () => {
    expect(pickItem('wall-special', false, 40)).toBe('Restos — n.º 117')
  })

  it('should list both Choice attacking items by game name and number for a fast sweeper', () => {
    expect(pickItem('sweeper-special', false, 120)).toBe('Cinta Elección / Gafas Elección — n.º 104 / 105')
  })
})

describe('pickItemKeys', () => {
  it('should map a slow sweeper without a boosting move to a Choice Scarf', () => {
    expect(pickItemKeys('sweeper-physical', false, 60)).toEqual(['CHOICESCARF'])
  })

  it('should map a fast sweeper to both Choice attacking items', () => {
    expect(pickItemKeys('sweeper-special', false, 120)).toEqual(['CHOICEBAND', 'CHOICESPECS'])
  })

  it('should map a wall to Leftovers', () => {
    expect(pickItemKeys('wall-physical', false, 40)).toEqual(['LEFTOVERS'])
  })
})

describe('natureSentence', () => {
  it('should describe the stat trade-off for a boosting nature', () => {
    expect(natureSentence('ADAMANT')).toBe('Esta naturaleza aumenta Ataque y reduce At. Esp..')
  })

  it('should describe the Calm trade-off as more Sp. Def and less Attack', () => {
    expect(natureSentence('CALM')).toBe('Esta naturaleza aumenta Def. Esp. y reduce Ataque.')
  })

  it('should describe a neutral nature as unmodified', () => {
    expect(natureSentence('HARDY')).toBe('Esta naturaleza es neutra — no altera sus stats.')
  })
})

describe('slugify', () => {
  it('should convert accented and spaced names into API slugs', () => {
    expect(slugify('Mr. Mime')).toBe('mr-mime')
  })
})

describe('capitalizeWords', () => {
  it('should title-case a hyphenated slug', () => {
    expect(capitalizeWords('charizard-mega-x')).toBe('Charizard Mega X')
  })
})

describe('statsToArr', () => {
  it('should order the stat map into the standard PS/Atq/Def/AtEsp/DefEsp/Vel sequence', () => {
    expect(statsToArr(stats(1, 2, 3, 4, 5, 6))).toEqual([1, 2, 3, 4, 5, 6])
  })
})

function md(name: string, type: string, dc: MoveDetail['damage_class'], power: number | null, accuracy: number | null = 100): MoveDetail {
  return { name, label: name, power, accuracy, type, damage_class: dc }
}

describe('pickAbility', () => {
  const detailOf = (id: string) => ({
    HUGEPOWER: { description: 'Duplica la estadística de Ataque del Pokémon.', flags: [] },
    MULTISCALE: { description: 'Reduce el daño sufrido a la mitad si los PS están al máximo.', flags: [] },
    HONEYGATHER: { description: 'Es posible que encuentre Miel al concluir el combate.', flags: [] }
  } as Record<string, { description: string; flags: string[] }>)[id] ?? null

  it('should pick a damage-boosting ability for an offensive role', () => {
    const picked = pickAbility(
      [
        { id: 'HONEYGATHER', name: 'Recogemiel', hidden: false },
        { id: 'HUGEPOWER', name: 'Potencia', hidden: true }
      ],
      'sweeper-physical', detailOf
    )
    expect(picked.id).toBe('HUGEPOWER')
  })

  it('should pick a damage-reducing ability for a wall role', () => {
    const picked = pickAbility(
      [
        { id: 'HONEYGATHER', name: 'Recogemiel', hidden: false },
        { id: 'MULTISCALE', name: 'Multiescamas', hidden: false }
      ],
      'wall-physical', detailOf
    )
    expect(picked.id).toBe('MULTISCALE')
  })

  it('should fall back to the first non-hidden ability when nothing scores', () => {
    const picked = pickAbility(
      [
        { id: 'FIRSTHIDDEN', name: 'Oculta', hidden: true },
        { id: 'FIRSTVISIBLE', name: 'Visible', hidden: false },
        { id: 'SECONDVISIBLE', name: 'Segunda', hidden: false }
      ],
      'sweeper-physical', () => null
    )
    expect(picked).toEqual({ id: 'FIRSTVISIBLE', name: 'Visible' })
  })
})

describe('pickMoveset', () => {
  it('should give a wall a hazard move and a recovery move', () => {
    const pool: MoveDetail[] = [
      md('EARTHQUAKE', 'ground', 'physical', 100),
      md('STEALTHROCK', 'rock', 'status', null),
      md('RECOVER', 'normal', 'status', null),
      md('TOXIC', 'poison', 'status', null),
      md('IRONHEAD', 'steel', 'physical', 80)
    ]
    const chosen = pickMoveset(pool, ['ground'], 'wall-physical', 'attack', 'Restos — n.º 117')
    const ids = chosen.map(m => m.name)
    expect(ids).toContain('STEALTHROCK')
    expect(ids).toContain('RECOVER')
    expect(chosen.find(m => m.name === 'STEALTHROCK')?.isHazard).toBe(true)
    expect(chosen.find(m => m.name === 'RECOVER')?.isRecovery).toBe(true)
  })

  it('should include a matching setup move for a setup sweeper', () => {
    const pool: MoveDetail[] = [
      md('DRAGONCLAW', 'dragon', 'physical', 80),
      md('EARTHQUAKE', 'ground', 'physical', 100),
      md('SWORDSDANCE', 'normal', 'status', null),
      md('FIREPUNCH', 'fire', 'physical', 75)
    ]
    const chosen = pickMoveset(pool, ['dragon'], 'sweeper-physical', 'attack', 'Vidasfera — n.º 100')
    const boost = chosen.find(m => m.name === 'SWORDSDANCE')
    expect(boost).toBeDefined()
    expect(boost?.isBoost).toBe(true)
  })

  it('should never pick a status move for a Choice-locked set', () => {
    const pool: MoveDetail[] = [
      md('DRAGONCLAW', 'dragon', 'physical', 80),
      md('EARTHQUAKE', 'ground', 'physical', 100),
      md('SWORDSDANCE', 'normal', 'status', null),
      md('UTURN', 'bug', 'physical', 70),
      md('FIREPUNCH', 'fire', 'physical', 75)
    ]
    const chosen = pickMoveset(pool, ['dragon'], 'breaker-physical', 'attack', 'Banda Elección — n.º 8')
    expect(chosen.every(m => m.damage_class !== 'status')).toBe(true)
    expect(chosen.map(m => m.name)).not.toContain('SWORDSDANCE')
  })

  it('should select a coverage move that only the full legal pool provides', () => {
    const pool: MoveDetail[] = [
      md('POUND', 'normal', 'physical', 40),
      md('ANCIENTPOWER', 'rock', 'special', 60)
    ]
    const chosen = pickMoveset(pool, ['normal'], 'breaker-special', 'special-attack', 'Gafas Elección — n.º 105')
    expect(chosen.map(m => m.name)).toContain('ANCIENTPOWER')
  })
})

describe('loadSpeciesIndex', () => {
  it('should number every entry sequentially from 1 in the Añil Pokédex order', async () => {
    const idx = await loadSpeciesIndex()
    expect(idx.length).toBeGreaterThan(0)
    expect(idx[0].num).toBe(1)
    idx.forEach((entry, i) => {
      expect(entry.num).toBe(i + 1)
      expect(entry.types.length).toBeGreaterThan(0)
      expect(entry.statTotal).toBeGreaterThan(0)
    })
  })

  it('should return a stable cached reference across calls', async () => {
    const a = await loadSpeciesIndex()
    const b = await loadSpeciesIndex()
    expect(a).toBe(b)
  })
})

describe('movesDetailedFromPool', () => {
  it('should map legal-pool ids through the game move lookup into MoveDetail', () => {
    const data: Record<string, AnilMoveData> = {
      KNOCKOFF: {
        name: 'Desarme', type: 'dark', category: 'Physical', power: 65, accuracy: 100, pp: 20,
        description: '', functionCode: '', flags: [], priority: 0, target: 'NearOther', effectChance: null
      }
    }
    const out = movesDetailedFromPool(['KNOCKOFF', 'UNKNOWNTUTORMOVE'], id => data[id] ?? null)
    expect(out).toHaveLength(1)
    expect(out[0]).toMatchObject({ name: 'KNOCKOFF', label: 'Desarme', type: 'dark', damage_class: 'physical', power: 65 })
  })
})
