import { describe, it, expect } from 'vitest'
import { allAnilSpecies } from './anilData'

const rawSources = import.meta.glob(
  ['../**/*.ts', '../**/*.vue', '!../**/*.test.ts', '!../**/*.d.ts'],
  { query: '?raw', import: 'default', eager: true }
) as Record<string, string>

const SPECIES = new Set(Object.keys(allAnilSpecies()))

const EQUALITY_PATTERNS = [
  /(?:===|!==)\s*(['"])([A-Za-z0-9_]+)\1/g,
  /(['"])([A-Za-z0-9_]+)\1\s*(?:===|!==)/g,
  /\bcase\s+(['"])([A-Za-z0-9_]+)\1\s*:/g
]

describe('no per-species branching in src/', () => {
  const entries = Object.entries(rawSources)

  it('should discover a meaningful set of source files to scan', () => {
    expect(entries.length).toBeGreaterThan(5)
    expect(entries.some(([path]) => path.endsWith('.vue'))).toBe(true)
  })

  it('should not compare or switch any value against a species internalName literal', () => {
    const offenders: string[] = []
    for (const [path, text] of entries) {
      for (const pattern of EQUALITY_PATTERNS) {
        for (const match of text.matchAll(pattern)) {
          if (SPECIES.has(match[2])) offenders.push(`${path} :: ${match[0].trim()}`)
        }
      }
    }
    expect(offenders).toEqual([])
  })

  it('should trip on a synthetic per-species equality check', () => {
    const sample = "if (internalName === 'SPIDOPS') return curatedSpidops()"
    const hits: string[] = []
    for (const pattern of EQUALITY_PATTERNS) {
      for (const match of sample.matchAll(pattern)) {
        if (SPECIES.has(match[2])) hits.push(match[0])
      }
    }
    expect(hits.length).toBeGreaterThan(0)
  })
})
