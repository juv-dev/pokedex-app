import { describe, it, expect } from 'vitest'
import { typeTheme } from './theme'
import { TYPE_COLORS } from './constants'

describe('typeTheme', () => {
  it('should map a dual-type pair to the two matching TYPE_COLORS entries', () => {
    const theme = typeTheme(['fire', 'flying'])
    expect(theme).toEqual({ c1: TYPE_COLORS.fire, c2: TYPE_COLORS.flying })
  })

  it('should keep both colours defined for a mono-type, deriving a darker c2 from c1', () => {
    const theme = typeTheme(['water'])
    expect(theme).not.toBeNull()
    expect(theme!.c1).toBe(TYPE_COLORS.water)
    expect(theme!.c2).toMatch(/^#[0-9a-f]{6}$/)
    expect(theme!.c2).not.toBe(theme!.c1)
  })

  it('should fall back to the derived c2 when the second type is unknown', () => {
    const theme = typeTheme(['grass', 'not-a-type'])
    expect(theme).not.toBeNull()
    expect(theme!.c1).toBe(TYPE_COLORS.grass)
    expect(theme!.c2).toMatch(/^#[0-9a-f]{6}$/)
  })

  it('should return null for an empty list', () => {
    expect(typeTheme([])).toBeNull()
  })

  it('should return null when no type is valid', () => {
    expect(typeTheme(['nope'])).toBeNull()
  })
})
