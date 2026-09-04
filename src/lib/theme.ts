import { TYPE_COLORS } from './constants'

export interface MonTheme {
  c1: string
  c2: string
}

function toChannels(hex: string): [number, number, number] | null {
  const clean = hex.replace('#', '').trim()
  if (clean.length !== 6) return null
  const r = Number.parseInt(clean.slice(0, 2), 16)
  const g = Number.parseInt(clean.slice(2, 4), 16)
  const b = Number.parseInt(clean.slice(4, 6), 16)
  if ([r, g, b].some(n => Number.isNaN(n))) return null
  return [r, g, b]
}

function darken(hex: string, amount: number): string {
  const ch = toChannels(hex)
  if (!ch) return hex
  const scale = (c: number) => Math.max(0, Math.min(255, Math.round(c * (1 - amount))))
  return '#' + ch.map(c => scale(c).toString(16).padStart(2, '0')).join('')
}

export function typeTheme(types: readonly string[]): MonTheme | null {
  if (!types || types.length === 0) return null
  const c1 = TYPE_COLORS[types[0]]
  if (!c1) return null
  const rawSecond = types.length > 1 ? TYPE_COLORS[types[1]] : undefined
  const c2 = rawSecond ?? darken(c1, 0.34)
  return { c1, c2 }
}
