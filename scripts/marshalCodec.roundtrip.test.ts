import { existsSync, readFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { describe, expect, it } from 'vitest'
import { load, dump } from '../src/lib/marshalCodec.mjs'

const SAVE = 'C:/Users/jesus/AppData/Roaming/Pokemon Anil/Partida 1.rxdata'

function rubyMarshal(expr: string): Uint8Array | null {
  try {
    const out = execFileSync('ruby', ['-e', `STDOUT.binmode; STDOUT.write(Marshal.dump(${expr}))`], { maxBuffer: 1 << 24 })
    return Uint8Array.from(out)
  } catch {
    return null
  }
}

function roundtrip(bytes: Uint8Array): Uint8Array {
  return dump(load(bytes))
}

describe('marshal-codec round-trip', () => {
  const cases: Array<[string, string]> = [
    ['nil', 'nil'],
    ['true', 'true'],
    ['small int', '5'],
    ['int 122', '122'],
    ['int 123', '123'],
    ['int 300', '300'],
    ['int 70000', '70000'],
    ['negative int', '-124'],
    ['big negative', '-70000'],
    ['float', '1.5'],
    ['symbol', ':species'],
    ['ascii string', '"HYPERVOICE"'],
    ['utf8 string', '"Pokémon"'],
    ['array', '[1, 2, "x", :y, nil]'],
    ['nested hash', '{ "HP" => 252, "ATTACK" => 0 }'],
    ['symbol-keyed hash', '{ a: 1, b: [2, 3] }'],
    ['shared reference', 's = "dup"; [s, s]'],
    ['struct-ish object', 'Object.new.tap { |o| o.instance_variable_set(:@x, 7) }']
  ]

  for (const [name, expr] of cases) {
    it(`should re-emit ${name} byte-for-byte`, () => {
      const original = rubyMarshal(expr)
      if (!original) return
      expect(Array.from(roundtrip(original))).toEqual(Array.from(original))
    })
  }

  it('should re-emit the real save file byte-for-byte', () => {
    if (!existsSync(SAVE)) return
    const original = Uint8Array.from(readFileSync(SAVE))
    const again = roundtrip(original)
    expect(again.length).toBe(original.length)
    let firstDiff = -1
    for (let i = 0; i < original.length; i++) {
      if (again[i] !== original[i]) { firstDiff = i; break }
    }
    expect(firstDiff).toBe(-1)
  })
})
