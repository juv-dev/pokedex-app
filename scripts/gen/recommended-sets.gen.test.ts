import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { describe, it } from 'vitest'
import { allAnilSpecies } from '../../src/lib/anilData'
import { recommendedSetFor, type RecommendedSet } from '../../src/lib/recommendedSet'

const OUT = resolve(__dirname, '../recommended-sets.json')

describe('generate recommended-sets.json', () => {
  it.runIf(process.env.GEN_SETS === '1')('should write one recommended set per Anil species', async () => {
    const names = Object.keys(allAnilSpecies())
    const result: Record<string, RecommendedSet> = {}
    let template = 0
    let heuristic = 0
    let skipped = 0

    for (const name of names) {
      const target = await recommendedSetFor(name)
      if (!target) { skipped++; continue }
      if (target.source === 'template') template++
      else heuristic++
      result[name] = target
    }

    mkdirSync(dirname(OUT), { recursive: true })
    writeFileSync(OUT, JSON.stringify(result, null, 2) + '\n', 'utf8')
    // eslint-disable-next-line no-console
    console.log(`recommended-sets.json: ${Object.keys(result).length} species (template ${template}, heuristic ${heuristic}, skipped ${skipped})`)
  }, 120000)
})
