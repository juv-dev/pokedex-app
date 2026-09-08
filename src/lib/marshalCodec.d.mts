export interface MNode {
  k: 'prim' | 'int' | 'sym' | 'str' | 'float' | 'bignum' | 'array' | 'hash' | 'object' | 'userdef' | 'usrmarshal' | 'wrapped' | 'classmod' | 'struct'
  [key: string]: unknown
}

export interface MarshalDoc {
  major: number
  minor: number
  root: MNode
}

export interface FoundMon {
  node: MNode
  inParty: boolean
  boxIndex: number | null
  boxName: string | null
  slot: number | null
}

export function load(bytes: Uint8Array): MarshalDoc
export function dump(doc: MarshalDoc): Uint8Array

export function nil(): MNode
export function bool(v: boolean): MNode
export function int(v: number): MNode
export function str(text: string): MNode
export function symFor(name: string): MNode
export function symNode(name: string): MNode

export function isNil(node: MNode | undefined | null): boolean
export function asString(node: MNode | undefined | null): string | null
export function asInt(node: MNode | undefined | null): number | null
export function symOrStr(node: MNode | undefined | null): string | null

export function isTrue(node: MNode | undefined | null): boolean
export function ivarGet(node: MNode | undefined | null, name: string): MNode | undefined
export function ivarSet(node: MNode, name: string, valueNode: MNode): void
export function hashGet(node: MNode | undefined | null, key: string): MNode | undefined
export function hashSetString(node: MNode, key: string, valueNode: MNode): void
export function hashSetKey(node: MNode, keyName: string, valueNode: MNode): boolean

export function buildSymTable(doc: MarshalDoc): Map<string, MNode>
export function collectPokemon(doc: MarshalDoc): FoundMon[]
export function structuralDiff(a: MNode, b: MNode, allowPokemonMutations: boolean): string[]
export function eachObject(doc: MarshalDoc, visit: (node: MNode) => void): void
