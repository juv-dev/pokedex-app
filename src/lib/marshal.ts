export interface MarshalUserObject {
  __class: string | null
  __ivars: Record<string, unknown>
}

function isUserObject(node: unknown): node is MarshalUserObject {
  return !!node && typeof node === 'object' && '__class' in (node as object)
}

/** Lector del formato binario Ruby Marshal (usado por Pokémon Essentials para guardar partidas). */
export class MarshalReader {
  bytes: Uint8Array
  pos = 0
  symbols: string[] = []
  objects: unknown[] = []
  decoder = new TextDecoder('utf-8')

  constructor(bytes: Uint8Array) { this.bytes = bytes }

  readByte(): number { return this.bytes[this.pos++] }
  readSByte(): number { const b = this.bytes[this.pos++]; return b < 128 ? b : b - 256 }
  readBytes(n: number): Uint8Array { const b = this.bytes.subarray(this.pos, this.pos + n); this.pos += n; return b }

  readLong(): number {
    let c = this.readSByte()
    if (c === 0) return 0
    if (c > 0) {
      if (c < 5) { let x = 0; for (let i = 0; i < c; i++) x |= this.readByte() << (8 * i); return x >>> 0 }
      return c - 5
    } else {
      if (c > -5) { const n = -c; let x = 0; for (let i = 0; i < n; i++) x |= this.readByte() << (8 * i); x = x >>> 0; return x - Math.pow(2, 8 * n) }
      return c + 5
    }
  }

  readObject(): unknown {
    const type = String.fromCharCode(this.readByte())
    switch (type) {
      case '0': return null
      case 'T': return true
      case 'F': return false
      case 'i': return this.readLong()
      case ':': return this.readSymbol()
      case ';': { const idx = this.readLong(); return this.symbols[idx] }
      case '"': return this.readRegisteredString()
      case '[': return this.readArray()
      case '{': return this.readHash(false)
      case '}': return this.readHash(true)
      case 'I': return this.readIvarWrapped()
      case 'o': return this.readUserObject()
      case '@': { const idx = this.readLong(); return this.objects[idx] }
      case 'u': return this.readUserDefined()
      case 'U': return this.readUsrMarshal()
      case 'l': return this.readBignum()
      case 'f': return this.readFloatObj()
      case 'c': case 'm': return this.readClassModule()
      case 'e': { this.readObject(); return this.readObject() }
      default: throw new Error(`Tipo de Marshal desconocido '${type}' en posición ${this.pos - 1}`)
    }
  }
  readSymbol(): string { const len = this.readLong(); const b = this.readBytes(len); const s = this.decoder.decode(b); this.symbols.push(s); return s }
  readRegisteredString(): string { const len = this.readLong(); const b = this.readBytes(len); const s = this.decoder.decode(b); this.objects.push(s); return s }
  readIvarWrapped(): unknown { const inner = this.readObject(); const n = this.readLong(); for (let i = 0; i < n; i++) { this.readObject(); this.readObject() } return inner }
  readArray(): unknown[] { const len = this.readLong(); const arr: unknown[] = []; this.objects.push(arr); for (let i = 0; i < len; i++) arr.push(this.readObject()); return arr }
  readHash(hasDefault: boolean): Record<string, unknown> {
    const len = this.readLong(); const map: Record<string, unknown> = {}; this.objects.push(map)
    for (let i = 0; i < len; i++) { const k = this.readObject(); const v = this.readObject(); map[typeof k === 'string' ? k : JSON.stringify(k)] = v }
    if (hasDefault) this.readObject()
    return map
  }
  readUserObject(): MarshalUserObject {
    const placeholder: MarshalUserObject = { __class: null, __ivars: {} }
    this.objects.push(placeholder)
    placeholder.__class = this.readObject() as string
    const n = this.readLong()
    for (let i = 0; i < n; i++) { const key = this.readObject() as string; const val = this.readObject(); placeholder.__ivars[key] = val }
    return placeholder
  }
  readUserDefined(): unknown {
    const idx = this.objects.length; this.objects.push(null)
    const className = this.readObject(); const len = this.readLong(); const bytes = this.readBytes(len)
    const result = { __userdef: className, __byteLength: bytes.length }
    this.objects[idx] = result; return result
  }
  readUsrMarshal(): unknown {
    const idx = this.objects.length; this.objects.push(null)
    const className = this.readObject(); const inner = this.readObject()
    const result = { __usrmarshal: className, __data: inner }
    this.objects[idx] = result; return result
  }
  readBignum(): bigint {
    const idx = this.objects.length; this.objects.push(null)
    const sign = this.readByte(); const wordCount = this.readLong(); const bytes = this.readBytes(wordCount * 2)
    let val = 0n; for (let i = bytes.length - 1; i >= 0; i--) val = (val << 8n) | BigInt(bytes[i])
    if (sign === 45) val = -val
    this.objects[idx] = val; return val
  }
  readFloatObj(): number {
    const idx = this.objects.length; this.objects.push(null)
    const len = this.readLong(); const bytes = this.readBytes(len)
    const val = parseFloat(new TextDecoder('ascii').decode(bytes))
    this.objects[idx] = val; return val
  }
  readClassModule(): unknown {
    const idx = this.objects.length; this.objects.push(null)
    const len = this.readLong(); const bytes = this.readBytes(len)
    const val = { __classOrModuleName: this.decoder.decode(bytes) }
    this.objects[idx] = val; return val
  }
}

export interface FoundPokemon {
  obj: MarshalUserObject
  inParty: boolean
  /** Índice de la caja del PC (0-based) donde está, o null si es del equipo. */
  boxIndex: number | null
  /** Nombre real de la caja tal como está en tu partida (ej. "Caja 1"), o null si es del equipo. */
  boxName: string | null
  /** Posición real (0-based) dentro del array de la caja, respetando huecos vacíos; null si es del equipo. */
  boxSlot: number | null
}

/**
 * Recorre el árbol del save buscando Pokemon. Reconoce específicamente la clase real de
 * Pokémon Essentials `PokemonStorage` (ivar `@boxes`, array de `PokemonBox`, cada una con
 * `@name` y `@pokemon` — ver Data/Scripts/044_Pokemon-related/005_PokemonStorage.rb del juego)
 * para poder etiquetar cada Pokémon de caja con su caja y mantener el orden real de sus slots.
 * Los Pokémon sueltos fuera del equipo y de las cajas (Salón de la Fama, errantes, guardería)
 * se ignoran: no forman parte de la colección que muestra la partida.
 */
export function findAllPokemon(root: unknown): FoundPokemon[] {
  const found: FoundPokemon[] = []
  const visited = new Set<unknown>()

  function walkBox(box: MarshalUserObject, boxIndex: number) {
    if (visited.has(box)) return
    visited.add(box)
    const boxName = (box.__ivars['@name'] as string) || `Caja ${boxIndex + 1}`
    const pokemonArr = box.__ivars['@pokemon']
    if (!Array.isArray(pokemonArr)) return
    pokemonArr.forEach((p, boxSlot) => {
      if (isUserObject(p) && p.__class === 'Pokemon' && !visited.has(p)) {
        visited.add(p)
        found.push({ obj: p, inParty: false, boxIndex, boxName, boxSlot })
      }
    })
  }

  function walk(node: unknown, inParty: boolean) {
    if (node === null || typeof node !== 'object') return
    if (visited.has(node)) return
    visited.add(node)
    if (Array.isArray(node)) { node.forEach(n => walk(n, inParty)); return }
    if (isUserObject(node)) {
      if (node.__class === 'Pokemon') { if (inParty) found.push({ obj: node, inParty: true, boxIndex: null, boxName: null, boxSlot: null }); return }
      if (node.__class === 'PokemonStorage') {
        const boxes = node.__ivars['@boxes']
        if (Array.isArray(boxes)) { boxes.forEach((b, i) => { if (isUserObject(b)) walkBox(b, i) }); return }
      }
      Object.entries(node.__ivars).forEach(([key, val]) => walk(val, inParty || key === '@party'))
      return
    }
    Object.entries(node as Record<string, unknown>).forEach(([key, val]) => walk(val, inParty || key === '@party'))
  }
  walk(root, false)
  return found
}

export async function readSaveFile(file: File): Promise<FoundPokemon[]> {
  const buf = await file.arrayBuffer()
  const bytes = new Uint8Array(buf)
  const reader = new MarshalReader(bytes)
  const major = reader.readByte()
  reader.readByte()
  if (major !== 4) throw new Error('Formato Marshal no reconocido')
  const root = reader.readObject()
  return findAllPokemon(root)
}
