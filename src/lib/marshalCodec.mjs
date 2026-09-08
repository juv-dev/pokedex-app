const T_NIL = 0
const T_TRUE = 1
const T_FALSE = 2

class Reader {
  constructor(bytes) {
    this.b = bytes
    this.pos = 0
    this.symbols = []
    this.objects = []
  }

  byte() { return this.b[this.pos++] }
  sbyte() { const v = this.b[this.pos++]; return v < 128 ? v : v - 256 }
  take(n) { const s = this.b.subarray(this.pos, this.pos + n); this.pos += n; return Uint8Array.from(s) }

  long() {
    const c = this.sbyte()
    if (c === 0) return 0
    if (c > 0) {
      if (c < 5) { let x = 0; for (let i = 0; i < c; i++) x |= this.byte() << (8 * i); return x >>> 0 }
      return c - 5
    }
    if (c > -5) {
      const n = -c
      let x = 0
      for (let i = 0; i < n; i++) x |= this.byte() << (8 * i)
      x = x >>> 0
      return x - Math.pow(2, 8 * n)
    }
    return c + 5
  }

  reg(obj) { this.objects.push(obj); return obj }

  read() {
    const type = String.fromCharCode(this.byte())
    switch (type) {
      case '0': return { k: 'prim', p: T_NIL }
      case 'T': return { k: 'prim', p: T_TRUE }
      case 'F': return { k: 'prim', p: T_FALSE }
      case 'i': return { k: 'int', v: this.long() }
      case ':': return this.symDef()
      case ';': { const i = this.long(); return this.symbols[i] }
      case '@': { const i = this.long(); return this.objects[i] }
      case '"': return this.string()
      case 'I': return this.ivarWrapped()
      case '[': return this.array()
      case '{': return this.hash(false)
      case '}': return this.hash(true)
      case 'o': return this.object()
      case 'u': return this.userdef()
      case 'U': return this.usrmarshal()
      case 'C': return this.wrappedBuiltin()
      case 'e': return this.extended()
      case 'l': return this.bignum()
      case 'f': return this.float()
      case '/': return this.regexp()
      case 'c': case 'm': case 'M': return this.classmod(type)
      case 'S': return this.struct()
      default: throw new Error(`marshal-codec: unsupported node type '${type}' (0x${type.charCodeAt(0).toString(16)}) at ${this.pos - 1}`)
    }
  }

  symDef() {
    const len = this.long()
    const name = new TextDecoder('utf-8').decode(this.take(len))
    const sym = { k: 'sym', name }
    this.symbols.push(sym)
    return sym
  }

  readSymbolNode() {
    const type = String.fromCharCode(this.byte())
    if (type === ':') return this.symDef()
    if (type === ';') { const i = this.long(); return this.symbols[i] }
    if (type === 'I') {
      const inner = this.readSymbolNode()
      const n = this.long()
      inner.ivars = []
      for (let i = 0; i < n; i++) { const key = this.readSymbolNode(); const val = this.read(); inner.ivars.push([key, val]) }
      inner.iWrapped = true
      return inner
    }
    throw new Error(`marshal-codec: expected symbol, got '${type}' at ${this.pos - 1}`)
  }

  string() {
    const len = this.long()
    return this.reg({ k: 'str', bytes: this.take(len) })
  }

  ivarWrapped() {
    const inner = this.read()
    const n = this.long()
    inner.ivars = []
    for (let i = 0; i < n; i++) { const key = this.readSymbolNode(); const val = this.read(); inner.ivars.push([key, val]) }
    inner.iWrapped = true
    return inner
  }

  array() {
    const node = this.reg({ k: 'array', items: [] })
    const len = this.long()
    for (let i = 0; i < len; i++) node.items.push(this.read())
    return node
  }

  hash(withDefault) {
    const node = this.reg({ k: 'hash', pairs: [], withDefault })
    const len = this.long()
    for (let i = 0; i < len; i++) { const key = this.read(); const val = this.read(); node.pairs.push([key, val]) }
    if (withDefault) node.default = this.read()
    return node
  }

  object() {
    const node = this.reg({ k: 'object', cls: '', ivars: [] })
    node.cls = this.readSymbolNode().name
    const n = this.long()
    for (let i = 0; i < n; i++) { const key = this.readSymbolNode(); const val = this.read(); node.ivars.push([key, val]) }
    return node
  }

  userdef() {
    const node = this.reg({ k: 'userdef', cls: '', bytes: new Uint8Array(0) })
    node.cls = this.readSymbolNode().name
    const len = this.long()
    node.bytes = this.take(len)
    return node
  }

  usrmarshal() {
    const node = this.reg({ k: 'usrmarshal', cls: '', data: null })
    node.cls = this.readSymbolNode().name
    node.data = this.read()
    return node
  }

  wrappedBuiltin() {
    const node = this.reg({ k: 'wrapped', cls: '', inner: null })
    node.cls = this.readSymbolNode().name
    node.inner = this.read()
    return node
  }

  extended() {
    const mod = this.readSymbolNode().name
    const inner = this.read()
    inner.extendedBy = inner.extendedBy || []
    inner.extendedBy.unshift(mod)
    return inner
  }

  bignum() {
    const node = this.reg({ k: 'bignum', sign: 0, words: new Uint8Array(0) })
    node.sign = this.byte()
    const wordCount = this.long()
    node.words = this.take(wordCount * 2)
    return node
  }

  float() {
    const len = this.long()
    return this.reg({ k: 'float', bytes: this.take(len) })
  }

  regexp() {
    const len = this.long()
    const bytes = this.take(len)
    const options = this.byte()
    return this.reg({ k: 'regexp', bytes, options })
  }

  classmod(type) {
    const len = this.long()
    return this.reg({ k: 'classmod', type, bytes: this.take(len) })
  }

  struct() {
    const node = this.reg({ k: 'struct', cls: '', pairs: [] })
    node.cls = this.readSymbolNode().name
    const n = this.long()
    for (let i = 0; i < n; i++) { const key = this.readSymbolNode(); const val = this.read(); node.pairs.push([key, val]) }
    return node
  }
}

class Writer {
  constructor() {
    this.out = []
    this.symbols = new Map()
    this.objects = new Map()
  }

  byte(v) { this.out.push(v & 0xff) }
  raw(u8) { for (let i = 0; i < u8.length; i++) this.out.push(u8[i]) }

  long(n) {
    if (n === 0) { this.byte(0); return }
    if (n > 0 && n < 123) { this.byte(n + 5); return }
    if (n < 0 && n > -124) { this.byte(n - 5); return }
    const buf = []
    let x = n
    let i
    for (i = 1; i <= 4; i++) {
      buf.push(x & 0xff)
      x >>= 8
      if (x === 0) { this.byte(i); break }
      if (x === -1) { this.byte((-i) & 0xff); break }
    }
    for (const b of buf) this.byte(b)
  }

  writeSymbol(sym) {
    if (this.symbols.has(sym)) { this.byte(0x3b); this.long(this.symbols.get(sym)); return }
    this.symbols.set(sym, this.symbols.size)
    if (sym.iWrapped) {
      this.byte(0x49)
      this.writeSymbolBody(sym)
      this.long(sym.ivars.length)
      for (const [k, v] of sym.ivars) { this.writeSymbol(k); this.write(v) }
      return
    }
    this.writeSymbolBody(sym)
  }

  writeSymbolBody(sym) {
    this.byte(0x3a)
    const b = new TextEncoder().encode(sym.name)
    this.long(b.length)
    this.raw(b)
  }

  writeExtended(node) {
    if (node.extendedBy) for (const mod of node.extendedBy) {
      this.byte(0x65)
      this.writeSymbol(symFor(mod))
    }
  }

  write(node) {
    if (node.k === 'prim') {
      if (node.p === T_NIL) return this.byte(0x30)
      if (node.p === T_TRUE) return this.byte(0x54)
      return this.byte(0x46)
    }
    if (node.k === 'int') { this.byte(0x69); return this.long(node.v) }
    if (node.k === 'sym') return this.writeSymbol(node)

    if (this.objects.has(node)) { this.byte(0x40); return this.long(this.objects.get(node)) }

    this.writeExtended(node)

    const wrapI = node.iWrapped && node.ivars && (node.k === 'str' || node.k === 'array' || node.k === 'hash' || node.k === 'regexp' || node.k === 'userdef' || node.k === 'wrapped')
    if (wrapI) this.byte(0x49)

    this.objects.set(node, this.objects.size)

    switch (node.k) {
      case 'str': this.byte(0x22); this.long(node.bytes.length); this.raw(node.bytes); break
      case 'float': this.byte(0x66); this.long(node.bytes.length); this.raw(node.bytes); break
      case 'bignum': this.byte(0x6c); this.byte(node.sign); this.long(node.words.length / 2); this.raw(node.words); break
      case 'regexp': this.byte(0x2f); this.long(node.bytes.length); this.raw(node.bytes); this.byte(node.options); break
      case 'classmod': this.byte(node.type.charCodeAt(0)); this.long(node.bytes.length); this.raw(node.bytes); break
      case 'array':
        this.byte(0x5b); this.long(node.items.length)
        for (const it of node.items) this.write(it)
        break
      case 'hash':
        this.byte(node.withDefault ? 0x7d : 0x7b); this.long(node.pairs.length)
        for (const [key, val] of node.pairs) { this.write(key); this.write(val) }
        if (node.withDefault) this.write(node.default)
        break
      case 'object':
        this.byte(0x6f); this.writeSymbol(symFor(node.cls)); this.long(node.ivars.length)
        for (const [key, val] of node.ivars) { this.writeSymbol(key); this.write(val) }
        break
      case 'userdef':
        this.byte(0x75); this.writeSymbol(symFor(node.cls)); this.long(node.bytes.length); this.raw(node.bytes)
        break
      case 'usrmarshal':
        this.byte(0x55); this.writeSymbol(symFor(node.cls)); this.write(node.data)
        break
      case 'wrapped':
        this.byte(0x43); this.writeSymbol(symFor(node.cls)); this.write(node.inner)
        break
      case 'struct':
        this.byte(0x53); this.writeSymbol(symFor(node.cls)); this.long(node.pairs.length)
        for (const [key, val] of node.pairs) { this.writeSymbol(key); this.write(val) }
        break
      default:
        throw new Error(`marshal-codec: cannot write node kind '${node.k}'`)
    }

    if (wrapI) {
      this.long(node.ivars.length)
      for (const [key, val] of node.ivars) { this.writeSymbol(key); this.write(val) }
    }
  }
}

const SYM_CACHE = new Map()
function symFor(name) {
  if (!SYM_CACHE.has(name)) SYM_CACHE.set(name, { k: 'sym', name })
  return SYM_CACHE.get(name)
}

export function load(bytes) {
  const r = new Reader(bytes)
  const major = r.byte()
  const minor = r.byte()
  if (major !== 4) throw new Error(`marshal-codec: unsupported Marshal major version ${major}`)
  const root = r.read()
  return { major, minor, root }
}

export function dump(doc) {
  const w = new Writer()
  w.byte(doc.major)
  w.byte(doc.minor)
  w.write(doc.root)
  return Uint8Array.from(w.out)
}

export function nil() { return { k: 'prim', p: T_NIL } }
export function bool(v) { return { k: 'prim', p: v ? T_TRUE : T_FALSE } }
export function int(v) { return { k: 'int', v } }
export function str(text) { return { k: 'str', bytes: new TextEncoder().encode(text), iWrapped: true, ivars: [[{ k: 'sym', name: 'E' }, { k: 'prim', p: T_TRUE }]] } }

export function isNil(node) { return !node || (node.k === 'prim' && node.p === T_NIL) }
export function isTrue(node) { return !!node && node.k === 'prim' && node.p === T_TRUE }
export function asString(node) { return node && node.k === 'str' ? new TextDecoder('utf-8').decode(node.bytes) : null }
export function asInt(node) { return node && node.k === 'int' ? node.v : null }

export function ivarGet(node, name) {
  if (!node || !node.ivars) return undefined
  const hit = node.ivars.find(([k]) => k.name === name)
  return hit ? hit[1] : undefined
}

export function ivarSet(node, name, valueNode) {
  if (!node.ivars) node.ivars = []
  const hit = node.ivars.find(([k]) => k.name === name)
  if (hit) hit[1] = valueNode
  else node.ivars.push([symFor(name), valueNode])
}

export function hashGet(node, key) {
  if (!node || node.k !== 'hash') return undefined
  const hit = node.pairs.find(([k]) => asString(k) === key || (k.k === 'sym' && k.name === key))
  return hit ? hit[1] : undefined
}

export function hashSetString(node, key, valueNode) {
  const hit = node.pairs.find(([k]) => asString(k) === key)
  if (hit) hit[1] = valueNode
  else node.pairs.push([str(key), valueNode])
}

export function eachObject(doc, visit) {
  const seen = new Set()
  function walk(node) {
    if (!node || typeof node !== 'object' || seen.has(node)) return
    seen.add(node)
    visit(node)
    if (node.ivars) for (const [, v] of node.ivars) walk(v)
    if (node.items) node.items.forEach(walk)
    if (node.pairs) for (const [k, v] of node.pairs) { walk(k); walk(v) }
    if (node.default) walk(node.default)
    if (node.data) walk(node.data)
    if (node.inner) walk(node.inner)
  }
  walk(doc.root)
}

export { symFor }
export function symNode(name) { return symFor(name) }

export function symOrStr(node) {
  if (!node) return null
  if (node.k === 'sym') return node.name
  if (node.k === 'str') return new TextDecoder('utf-8').decode(node.bytes)
  return null
}

/** Replaces the value of an existing sym- or string-keyed pair. Returns false if the key is absent (never adds). */
export function hashSetKey(node, keyName, valueNode) {
  if (!node || node.k !== 'hash') return false
  const hit = node.pairs.find(([k]) => (k.k === 'sym' && k.name === keyName) || asString(k) === keyName)
  if (!hit) return false
  hit[1] = valueNode
  return true
}

/** Map of symbol name -> the interned sym node already present in the document. */
export function buildSymTable(doc) {
  const table = new Map()
  const seen = new Set()
  function w(n) {
    if (!n || typeof n !== 'object' || seen.has(n)) return
    seen.add(n)
    if (n.k === 'sym') { if (!table.has(n.name)) table.set(n.name, n); return }
    if (n.items) n.items.forEach(w)
    if (n.pairs) n.pairs.forEach(([k, v]) => { w(k); w(v) })
    if (n.ivars) n.ivars.forEach(([k, v]) => { w(k); w(v) })
    if (n.default) w(n.default)
    if (n.data) w(n.data)
    if (n.inner) w(n.inner)
  }
  w(doc.root)
  return table
}

/** Pokémon `o` nodes reachable through @party and PokemonStorage boxes (standalone ones are ignored). */
export function collectPokemon(doc) {
  const found = []
  const seen = new Set()

  function walkBox(boxNode, boxIndex) {
    const boxName = symOrStr(ivarGet(boxNode, '@name')) || `Caja ${boxIndex + 1}`
    const arr = ivarGet(boxNode, '@pokemon')
    if (!arr || arr.k !== 'array') return
    arr.items.forEach((p, slot) => {
      if (p && p.k === 'object' && p.cls === 'Pokemon' && !seen.has(p)) {
        seen.add(p)
        found.push({ node: p, inParty: false, boxIndex, boxName, slot })
      }
    })
  }

  function walk(node, inParty) {
    if (!node || typeof node !== 'object' || seen.has(node)) return
    if (['sym', 'int', 'prim', 'str', 'float', 'bignum', 'userdef', 'classmod'].includes(node.k)) { seen.add(node); return }
    seen.add(node)
    if (node.k === 'object' && node.cls === 'Pokemon') {
      if (inParty) found.push({ node, inParty: true, boxIndex: null, boxName: null, slot: null })
      return
    }
    if (node.k === 'object' && node.cls === 'PokemonStorage') {
      const boxes = ivarGet(node, '@boxes')
      if (boxes && boxes.k === 'array') boxes.items.forEach((b, i) => { if (b && b.k === 'object') walkBox(b, i) })
      return
    }
    if (node.k === 'array') { node.items.forEach(it => walk(it, inParty)); return }
    if (node.k === 'hash') { node.pairs.forEach(([k, v]) => { walk(k, inParty); walk(v, inParty) }); return }
    if (node.ivars) node.ivars.forEach(([k, v]) => walk(v, inParty || k.name === '@party'))
    if (node.default) walk(node.default, inParty)
    if (node.data) walk(node.data, inParty)
    if (node.inner) walk(node.inner, inParty)
  }

  walk(doc.root, false)
  return found
}

const ALLOWED_POKEMON_IVARS = new Set([
  '@ev', '@iv', '@moves', '@hp', '@totalhp', '@attack', '@defense', '@spatk', '@spdef', '@speed',
  '@nature', '@nature_for_stats', '@item', '@ability', '@ability_index'
])

function bytesKey(n) {
  if (n.k === 'str' || n.k === 'float' || n.k === 'classmod') return String.fromCharCode(...n.bytes)
  if (n.k === 'userdef') return n.cls + '|' + String.fromCharCode(...n.bytes)
  if (n.k === 'bignum') return n.sign + ':' + String.fromCharCode(...n.words)
  return ''
}

/**
 * Lists every path where `b` differs from `a`. When `allowPokemonMutations`, changes to the
 * whitelisted ivars of a `Pokemon` object are not reported (that is the intended edit surface).
 */
export function structuralDiff(a, b, allowPokemonMutations) {
  const diffs = []
  const seen = new Set()
  function walk(x, y, path) {
    if (x === y || diffs.length > 100) return
    if (!x || !y || typeof x !== 'object' || typeof y !== 'object') { if (x !== y) diffs.push(path); return }
    if (seen.has(x)) return
    seen.add(x)
    if (x.k !== y.k) { diffs.push(`${path}<kind ${x.k}!=${y.k}>`); return }
    switch (x.k) {
      case 'prim': if (x.p !== y.p) diffs.push(path); return
      case 'int': if (x.v !== y.v) diffs.push(path); return
      case 'sym': if (x.name !== y.name) diffs.push(path); return
      case 'str': case 'float': case 'classmod': case 'bignum': case 'userdef':
        if (bytesKey(x) !== bytesKey(y)) diffs.push(path); return
      case 'array':
        if (x.items.length !== y.items.length) { diffs.push(`${path}<len>`); return }
        x.items.forEach((it, i) => walk(it, y.items[i], `${path}[${i}]`))
        return
      case 'hash':
        if (x.pairs.length !== y.pairs.length) { diffs.push(`${path}<hlen>`); return }
        x.pairs.forEach(([xk, xv], i) => { walk(xk, y.pairs[i][0], `${path}{k${i}}`); walk(xv, y.pairs[i][1], `${path}{v${i}}`) })
        if (x.default || y.default) walk(x.default || nil(), y.default || nil(), `${path}{def}`)
        return
      case 'object': {
        if (x.cls !== y.cls) { diffs.push(`${path}<cls>`); return }
        if (x.ivars.length !== y.ivars.length) { diffs.push(`${path}<ivc>`); return }
        const skip = allowPokemonMutations && x.cls === 'Pokemon'
        x.ivars.forEach(([xk, xv], i) => {
          const [yk, yv] = y.ivars[i]
          if (xk.name !== yk.name) { diffs.push(`${path}.${xk.name}<key>`); return }
          if (skip && ALLOWED_POKEMON_IVARS.has(xk.name)) return
          walk(xv, yv, `${path}.${xk.name}`)
        })
        return
      }
      case 'usrmarshal': walk(x.data, y.data, `${path}<U>`); return
      case 'wrapped': walk(x.inner, y.inner, `${path}<C>`); return
      case 'struct':
        if (x.cls !== y.cls || x.pairs.length !== y.pairs.length) { diffs.push(`${path}<struct>`); return }
        x.pairs.forEach(([, xv], i) => walk(xv, y.pairs[i][1], `${path}<s${i}>`))
        return
    }
  }
  walk(a, b, '$')
  return diffs
}
