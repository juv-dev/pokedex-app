/**
 * Tematización por tipo, portada 1:1 desde `Añil Dex - HUD.dc.html`
 * (bloque `<script type="text/x-dc">`, funciones `hexRgb` / `themeForColors` / `TYPE_RAMP`).
 * Cada tipo aporta una rampa [claro, oscuro, texto] y de ahí se derivan todos los
 * gradientes de panel/carta que el diseño aplica a los contenedores.
 */

type Ramp = readonly [string, string, string]

const TYPE_RAMP: Record<string, Ramp> = {
  fire: ['#ff9d4d', '#e2651a', '#2a1000'],
  dragon: ['#a682ff', '#6a34e0', '#f4ecff'],
  flying: ['#c9baff', '#8f7ae0', '#1e1440'],
  water: ['#6fbcff', '#2a6fd6', '#04203f'],
  grass: ['#9fe07a', '#4e9c2c', '#0f2c08'],
  poison: ['#c877d6', '#8b3aa0', '#f8ecff'],
  normal: ['#d6d2bd', '#a09a80', '#241f10'],
  steel: ['#cfd4e6', '#8b93ad', '#151a2b'],
  ghost: ['#a48ad0', '#6a4f9e', '#f2ecff'],
  ground: ['#f0d68a', '#c39a37', '#2e2005'],
  rock: ['#d3c184', '#9a8433', '#241c04'],
  electric: ['#ffe470', '#e0b616', '#2d2200'],
  bug: ['#cbdb6a', '#8a9a20', '#1e2404'],
  ice: ['#bdf0f0', '#6fc4cf', '#062629'],
  fighting: ['#ea6d63', '#b3241c', '#2c0603'],
  fairy: ['#ffb6c8', '#e0728f', '#3a0d1a'],
  dark: ['#9b8677', '#5d4a3c', '#f4ece5'],
  psychic: ['#ff9dbb', '#e04e7d', '#3a0517']
}
const FALLBACK: Ramp = ['#9d97c9', '#5f5990', '#12102b']

export function rampFor(type: string | undefined): Ramp {
  return (type && TYPE_RAMP[type]) || FALLBACK
}

function hexRgb(h: string): string {
  return [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)).join(',')
}
function channels(h: string): number[] {
  return hexRgb(h).split(',').map(Number)
}

export function typeGradient(type: string): string {
  const r = rampFor(type)
  return `linear-gradient(180deg,${r[0]},${r[1]})`
}
export function typeFg(type: string): string {
  return rampFor(type)[2]
}

/** Fondo plano y tenue del chip: color del tipo mezclado hacia navy. */
export function typeChipBg(type: string): string {
  const c = channels(rampFor(type)[1])
  const navy = [22, 20, 46]
  const mix = c.map((v, i) => Math.round(v * 0.26 + navy[i] * 0.74)).join(',')
  return `rgba(${mix},.92)`
}
/** Color de texto/borde del chip: el tono claro de la rampa del tipo. */
export function typeChipText(type: string): string {
  return rampFor(type)[0]
}

export interface HudTheme {
  light: string
  dark: string
  fg: string
  grad: string
  glow: string
  panel: string
  card1Top: string
  card1Bot: string
  card2Top: string
  card2Bot: string
  bgA: string
  bgB: string
  bgC: string
}

export function hudThemeFor(types: readonly string[] | undefined): HudTheme {
  const primary = types && types.length ? types[0] : undefined
  const [light, dark, fg] = rampFor(primary)
  const NAVY = [20, 18, 44]
  const dr = channels(dark)
  const lr = channels(light)
  // Mezcla un color hacia el navy base para que ningún tipo brillante reviente el fondo.
  const toNavy = (c: number[], t: number): string =>
    c.map((v, i) => Math.round(v * (1 - t) + NAVY[i] * t)).join(',')
  const mix = (base: number[], t: number): string =>
    base.map((c, i) => Math.round(c * (1 - t) + dr[i] * t)).join(',')
  const mixL = (base: number[], t: number): string =>
    base.map((c, i) => Math.round(c * (1 - t) + lr[i] * t)).join(',')
  return {
    light,
    dark,
    fg,
    grad: `linear-gradient(180deg,${light},${dark})`,
    glow: `rgba(${hexRgb(light)},.32)`,
    panel: `rgba(${toNavy(dr, 0.6)},.5)`,
    card1Top: `rgba(${mixL([104, 92, 214], 0.22)},.42)`,
    card1Bot: `rgba(${mix([38, 33, 92], 0.28)},.72)`,
    card2Top: `rgba(${mix([60, 54, 140], 0.22)},.45)`,
    card2Bot: `rgba(${mix([26, 23, 66], 0.28)},.72)`,
    bgA: `rgba(${toNavy(dr, 0.5)},.4)`,
    bgB: `rgba(${toNavy(lr, 0.55)},.22)`,
    bgC: `rgba(${toNavy(dr, 0.55)},.22)`
  }
}

/** Variables CSS que consume `style.css` para pintar paneles/cartas con el tema del Pokémon activo. */
export function hudThemeVars(types: readonly string[] | undefined): Record<string, string> {
  const t = hudThemeFor(types)
  return {
    '--th-light': t.light,
    '--th-dark': t.dark,
    '--th-fg': t.fg,
    '--th-grad': t.grad,
    '--th-glow': t.glow,
    '--th-panel': t.panel,
    '--th-card1-top': t.card1Top,
    '--th-card1-bot': t.card1Bot,
    '--th-card2-top': t.card2Top,
    '--th-card2-bot': t.card2Bot,
    '--th-bg-a': t.bgA,
    '--th-bg-b': t.bgB,
    '--th-bg-c': t.bgC
  }
}
