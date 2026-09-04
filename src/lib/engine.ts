import {
  POKEAPI, TYPE_COLORS, NATURE_ES, NATURE_NUM,
  PHYSICAL_BOOSTS, SPECIAL_BOOSTS, RECOVERY
} from './constants'
import {
  getAnilSpecies, getAnilMove, getAnilAbilityName, getAnilItemName, getAnilItemNumber, getAnilItemNumberByName,
  anilSlugOverride, evoMethodLabel, allAnilSpecies, type AnilSpecies, type AnilMoveData
} from './anilData'
import type {
  DexNode, StatMap, RoleClassification, CompetitiveSet, MoveDetail, LevelMove,
  TypeMatchups, Role
} from './types'

const jsonCache = new Map<string, unknown>()
export async function fetchJson<T = any>(url: string): Promise<T> {
  if (jsonCache.has(url)) return jsonCache.get(url) as T
  const res = await fetch(url)
  if (!res.ok) throw new Error(`pokeapi ${res.status} -> ${url}`)
  const data = (await res.json()) as T
  jsonCache.set(url, data)
  return data
}

export async function mapPool<T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>): Promise<(R | null)[]> {
  const ret: (R | null)[] = new Array(items.length).fill(null)
  let i = 0
  async function worker() {
    while (i < items.length) {
      const idx = i++
      try { ret[idx] = await fn(items[idx]) }
      catch { ret[idx] = null }
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker))
  return ret
}

export function slugify(str: string): string {
  return str.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}
export function capitalizeWords(str: string): string {
  return str.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

const GEN_RANGES: Array<[number, number, string]> = [
  [1, 151, 'I'], [152, 251, 'II'], [252, 386, 'III'], [387, 493, 'IV'], [494, 649, 'V'],
  [650, 721, 'VI'], [722, 809, 'VII'], [810, 905, 'VIII'], [906, 1025, 'IX']
]
/** Generación en números romanos a partir del nº nacional; null para especies exclusivas de Añil. */
export function pokemonGeneration(dexNum: number | null): string | null {
  if (dexNum == null) return null
  const hit = GEN_RANGES.find(([lo, hi]) => dexNum >= lo && dexNum <= hi)
  return hit ? hit[2] : null
}

const GEN_REGION: Record<string, string> = {
  I: 'Kanto', II: 'Johto', III: 'Hoenn', IV: 'Sinnoh', V: 'Teselia',
  VI: 'Kalos', VII: 'Alola', VIII: 'Galar', IX: 'Paldea'
}
/** Región de origen a partir del nº nacional; "Añil" para especies exclusivas del juego. */
export function pokemonRegion(dexNum: number | null): string {
  const gen = pokemonGeneration(dexNum)
  return gen ? GEN_REGION[gen] ?? 'Añil' : 'Añil'
}
export function esName(namesArr: Array<{ language: { name: string }; name: string }> | undefined, fallback: string): string {
  const es = (namesArr || []).find(n => n.language.name === 'es')
  return es ? es.name : fallback
}
export function esGenus(species: any): string {
  const g = (species.genera || []).find((g: any) => g.language.name === 'es')
  return g ? g.genus : ''
}
export function esFlavorText(species: any): string {
  const entries = (species.flavor_text_entries || []).filter((e: any) => e.language.name === 'es')
  if (!entries.length) return ''
  const raw = entries[entries.length - 1].flavor_text
  return raw.replace(/[\n\f\r]+/g, ' ').replace(/\s+/g, ' ').trim()
}
export function artworkUrl(pokeData: any): string {
  return pokeData?.sprites?.other?.['official-artwork']?.front_default || pokeData?.sprites?.front_default || ''
}

/** Palabras clave de nombres de forma de Añil (ES/EN) hacia el sufijo real usado por PokéAPI. */
const MEGA_FORM_KEYWORDS: Array<[RegExp, string]> = [
  [/curvada|curly/i, 'curly'],
  [/l[aá]nguida|droopy/i, 'droopy'],
  [/recta|stretchy/i, 'stretchy'],
  [/vetusta|original/i, 'original']
]

/**
 * Resuelve la variante de mega correcta en PokéAPI para un formName de Añil.
 * Prioridad: sufijo X/Y -> palabra clave de forma con nombre -> única variante -> primera no-X/Y.
 * Añil a veces separa en X/Y una mega que en PokéAPI es una sola variante (ej. Mega Venusaur),
 * por eso cae de vuelta a la variante única en vez de fallar en silencio.
 */
function findMegaVarietyUrl(species: any, formName: string | null): string | null {
  const varieties: Array<{ pokemon: { name: string; url: string } }> = species?.varieties || []
  const megaVarieties = varieties.filter(v => v.pokemon.name.includes('-mega'))
  if (!megaVarieties.length) return null
  if (megaVarieties.length === 1) return megaVarieties[0].pokemon.url

  const letter = formName?.trim().match(/\b([XY])$/i)?.[1]?.toLowerCase()
  if (letter) {
    const byLetter = megaVarieties.find(v => v.pokemon.name.endsWith(`-mega-${letter}`))
    if (byLetter) return byLetter.pokemon.url
  }
  for (const [re, suffix] of MEGA_FORM_KEYWORDS) {
    if (re.test(formName || '')) {
      const byKeyword = megaVarieties.find(v => v.pokemon.name.includes(`-${suffix}`))
      if (byKeyword) return byKeyword.pokemon.url
    }
  }
  const fallback = megaVarieties.find(v => !/-mega-[xy]$/.test(v.pokemon.name)) || megaVarieties[0]
  return fallback.pokemon.url
}

async function fetchMegaArtwork(species: any, formName: string | null): Promise<string | null> {
  const url = findMegaVarietyUrl(species, formName)
  if (!url) return null
  try {
    const pokeData = await fetchJson<any>(url)
    return artworkUrl(pokeData) || null
  } catch { return null }
}

/**
 * Formas de mega de Añil donde PokéAPI no trae un artwork correcto y distinto por forma —
 * arte real recortado del propio juego (Graphics/Pokemon/Front/<ESPECIE>_<n>.png, frame 0 de
 * la hoja de animación, verificado forma por forma contra PBS/pokemon_forms.txt) y servido
 * localmente en public/anil-sprites/megas/. No es fan-art: es el sprite que el juego realmente
 * usa, así que no hay problema de derechos de autor distinto al del resto del proyecto.
 *
 * - VENUSAUR/BLASTOISE/GENGAR: Añil les inventó una separación X/Y que el Venusaur/Blastoise/
 *   Gengar real nunca tuvo (solo Charizard y Mewtwo la tienen de verdad) — PokéAPI solo trae
 *   UNA variante mega para estos tres, así que sin este override X e Y mostrarían la misma foto.
 * - TATSUGIRI: PokéAPI resuelve una variante por forma pero le falta el artwork oficial en 2
 *   de las 3 (curvada/lánguida); la forma recta sí trae artwork real y usa PokéAPI directo.
 * - Las 26 especies de MEGA_SPRITE_OVERRIDES son megas 100% inventadas por Añil sin ningún
 *   equivalente oficial ni en PokéAPI ni en Bulbapedia — su único arte real es el del juego.
 */
const MEGA_SPRITE_OVERRIDES: Record<string, string> = {
  BUTTERFREE: 'butterfree', PIKACHU: 'pikachu', MACHAMP: 'machamp', KINGLER: 'kingler',
  LAPRAS: 'lapras', EEVEE: 'eevee', SNORLAX: 'snorlax', JUMPLUFF: 'jumpluff',
  GARBODOR: 'garbodor', RILLABOOM: 'rillaboom', CINDERACE: 'cinderace', INTELEON: 'inteleon',
  CORVIKNIGHT: 'corviknight', ORBEETLE: 'orbeetle', DREDNAW: 'drednaw', COALOSSAL: 'coalossal',
  FLAPPLE: 'flapple', APPLETUN: 'appletun', SANDACONDA: 'sandaconda', TOXTRICITY: 'toxtricity',
  CENTISKORCH: 'centiskorch', HATTERENE: 'hatterene', GRIMMSNARL: 'grimmsnarl', ALCREMIE: 'alcremie',
  COPPERAJAH: 'copperajah', DURALUDON: 'duraludon'
}
const MEGA_SPRITE_FORM_OVERRIDES: Record<string, Array<{ test: RegExp; file: string }>> = {
  VENUSAUR: [{ test: /x/i, file: 'venusaur-x' }, { test: /y/i, file: 'venusaur-y' }],
  BLASTOISE: [{ test: /x/i, file: 'blastoise-x' }, { test: /y/i, file: 'blastoise-y' }],
  GENGAR: [{ test: /x/i, file: 'gengar-x' }, { test: /y/i, file: 'gengar-y' }],
  TATSUGIRI: [
    { test: /curvada|curly/i, file: 'tatsugiri-curly' },
    { test: /l[aá]nguida|droopy/i, file: 'tatsugiri-droopy' }
  ]
}
function localMegaSpriteUrl(internalName: string, formName: string | null): string | null {
  const simple = MEGA_SPRITE_OVERRIDES[internalName]
  if (simple) return `/anil-sprites/megas/${simple}.png`
  const forms = MEGA_SPRITE_FORM_OVERRIDES[internalName]
  if (forms && formName) {
    const match = forms.find(f => f.test.test(formName))
    if (match) return `/anil-sprites/megas/${match.file}.png`
  }
  return null
}

/** Placeholder honesto cuando ni PokéAPI ni el override local tienen arte real para esta mega. */
const MEGA_PLACEHOLDER_SPRITE = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">'
  + '<circle cx="100" cy="100" r="92" fill="none" stroke="#3d5a4c" stroke-width="3" stroke-dasharray="10 8"/>'
  + '<text x="100" y="92" text-anchor="middle" font-family="sans-serif" font-size="26" font-weight="800" fill="#7fa392">MEGA</text>'
  + '<text x="100" y="138" text-anchor="middle" font-family="sans-serif" font-size="52" font-weight="800" fill="#3d5a4c">?</text>'
  + '</svg>'
)

export async function computeTypeMatchups(types: string[]): Promise<TypeMatchups> {
  const typeData = await Promise.all(types.map(t => fetchJson<any>(`${POKEAPI}/type/${t}`)))
  const mult: Record<string, number> = {}
  Object.keys(TYPE_COLORS).forEach(t => { mult[t] = 1 })
  typeData.forEach(td => {
    td.damage_relations.double_damage_from.forEach((t: any) => { mult[t.name] = (mult[t.name] ?? 1) * 2 })
    td.damage_relations.half_damage_from.forEach((t: any) => { mult[t.name] = (mult[t.name] ?? 1) * 0.5 })
    td.damage_relations.no_damage_from.forEach((t: any) => { mult[t.name] = (mult[t.name] ?? 1) * 0 })
  })
  const superEff: Record<string, number> = {}
  typeData.forEach(td => {
    td.damage_relations.double_damage_to.forEach((t: any) => { superEff[t.name] = 2 })
  })
  const weak = Object.entries(mult).filter(([, m]) => m > 1).sort((a, b) => b[1] - a[1])
  const resist = Object.entries(mult).filter(([, m]) => m > 0 && m < 1).sort((a, b) => a[1] - b[1])
  const immune = Object.entries(mult).filter(([, m]) => m === 0)
  const superEffList = Object.entries(superEff)
  return { weak, resist, immune, superEff: superEffList }
}

export function statsToMap(statsArr: Array<{ stat: { name: string }; base_stat: number }>): StatMap {
  const map: StatMap = {}
  statsArr.forEach(s => { map[s.stat.name] = s.base_stat })
  return map
}
export function statsToArr(statsMap: StatMap): number[] {
  return [statsMap.hp, statsMap.attack, statsMap.defense, statsMap['special-attack'], statsMap['special-defense'], statsMap.speed]
}
function statArrayToMap(arr: number[]): StatMap {
  return { hp: arr[0], attack: arr[1], defense: arr[2], 'special-attack': arr[3], 'special-defense': arr[4], speed: arr[5] }
}

const GENDER_RATIO_TO_RATE: Record<string, number> = {
  AlwaysMale: 0, FemaleOneEighth: 1, Female25Percent: 2, Female50Percent: 4,
  Female75Percent: 6, FemaleSevenEighths: 7, AlwaysFemale: 8, Genderless: -1
}

/** Traduce el movepool real de Añil (pokemon.txt + moves.txt) a nuestro formato LevelMove. */
export function anilLevelMoves(sp: AnilSpecies): LevelMove[] {
  return sp.levelMoves.map(lm => {
    const md = getAnilMove(lm.move)
    if (!md) return null
    return {
      level: lm.level, name: lm.move, label: md.name, type: md.type,
      damage_class: md.category.toLowerCase() as 'physical' | 'special' | 'status',
      power: md.power, accuracy: md.accuracy, pp: md.pp ?? undefined
    } as LevelMove
  }).filter((m): m is LevelMove => m !== null)
}

async function resolveSpeciesMap(): Promise<Map<string, string>> {
  return buildReverseSlugMap('species', `${POKEAPI}/pokemon-species?limit=2000`)
}

export async function tryFetchPokeApi(internalName: string, speciesMap: Map<string, string>): Promise<{ species: any; pokeData: any } | null> {
  const slug = anilSlugOverride(internalName) || resolveViaMap(speciesMap, internalName)
  if (!slug) return null
  try {
    const species = await fetchJson<any>(`${POKEAPI}/pokemon-species/${slug}`)
    const defaultVariety = species.varieties.find((v: any) => v.is_default) || species.varieties[0]
    const pokeData = await fetchJson<any>(defaultVariety.pokemon.url)
    return { species, pokeData }
  } catch { return null }
}

async function buildAnilNode(
  internalName: string, evoLabel: string, stageKind: 'base' | 'evo' | 'mega',
  megaStone: string | null, speciesMap: Map<string, string>,
  statOverride?: number[], typeOverride?: string[], abilitiesOverride?: string[],
  megaFormName?: string | null, parentInternalName: string | null = null
): Promise<DexNode | null> {
  const sp = getAnilSpecies(internalName)
  if (!sp) return null
  const resolved = await tryFetchPokeApi(internalName, speciesMap)
  const types = typeOverride && typeOverride.length ? typeOverride : sp.types
  const stats = statOverride && statOverride.length ? statArrayToMap(statOverride) : statArrayToMap(sp.baseStats)
  const abilities = (abilitiesOverride && abilitiesOverride.length
    ? abilitiesOverride.map(a => ({ ability: { name: getAnilAbilityName(a), url: '' }, is_hidden: false, anilId: a }))
    : sp.abilities.map(a => ({ ability: { name: a.name, url: '' }, is_hidden: a.hidden, anilId: a.id })))

  if (resolved) {
    const { species, pokeData } = resolved
    let sprite = artworkUrl(pokeData)
    // Formas mega: nodo `mega` explícito, o especie de Añil llamada "Mega ..." resuelta como evolución.
    const isMegaForm = stageKind === 'mega' || /^mega\s/i.test(sp.name)
    if (isMegaForm) {
      const localOverride = localMegaSpriteUrl(internalName, megaFormName ?? sp.name)
      if (localOverride) {
        sprite = localOverride
      } else if (stageKind === 'mega') {
        const megaArt = await fetchMegaArtwork(species, megaFormName ?? null)
        sprite = megaArt || MEGA_PLACEHOLDER_SPRITE
      }
    }
    return {
      internalName,
      parentInternalName,
      dexNum: species.id,
      displayName: sp.name,
      genus: sp.category || esGenus(species),
      flavorText: sp.flavor || esFlavorText(species),
      weightKg: (sp.weightKg || pokeData.weight / 10).toFixed(1),
      heightM: (sp.heightM || pokeData.height / 10).toFixed(1),
      evoLabel,
      stageKind,
      sprite,
      types,
      stats,
      moveRefs: [],
      pokeMoves: [],
      customLevelMoves: anilLevelMoves(sp),
      abilities,
      genderRate: sp.genderRatio ? (GENDER_RATIO_TO_RATE[sp.genderRatio] ?? species.gender_rate) : species.gender_rate,
      captureRate: sp.catchRate ?? species.capture_rate,
      baseHappiness: sp.happiness ?? species.base_happiness,
      baseExperience: sp.baseExp ?? pokeData.base_experience,
      eggGroups: sp.eggGroups.length ? sp.eggGroups.map(g => ({ name: g, url: '' })) : species.egg_groups,
      isMega: stageKind === 'mega',
      megaStone,
      speciesSlug: species.name,
      isCustom: false
    }
  }

  // Pokémon exclusivo de Añil, sin equivalente en PokéAPI: usamos únicamente datos reales del juego.
  return {
    internalName,
    parentInternalName,
    dexNum: null,
    displayName: sp.name,
    genus: sp.category,
    flavorText: sp.flavor,
    weightKg: sp.weightKg.toFixed(1),
    heightM: sp.heightM.toFixed(1),
    evoLabel,
    stageKind,
    sprite: `/anil-sprites/${internalName.toLowerCase()}.png`,
    types,
    stats,
    moveRefs: [],
    pokeMoves: [],
    customLevelMoves: anilLevelMoves(sp),
    abilities,
    genderRate: sp.genderRatio ? (GENDER_RATIO_TO_RATE[sp.genderRatio] ?? 4) : 4,
    captureRate: sp.catchRate,
    baseHappiness: sp.happiness,
    baseExperience: sp.baseExp,
    eggGroups: sp.eggGroups.map(g => ({ name: g, url: '' })),
    isMega: stageKind === 'mega',
    megaStone,
    speciesSlug: internalName.toLowerCase(),
    isCustom: true
  }
}

/**
 * Arma la línea evolutiva completa (+ megas) a partir de datos REALES de Añil
 * (PBS/pokemon.txt y PBS/pokemon_forms.txt), no del endpoint de evolución de PokéAPI.
 * PokéAPI solo se usa para sprite/detalle cuando la especie existe ahí tal cual.
 */
export async function buildAnilNodes(internalName: string, isRoot: boolean, speciesMap?: Map<string, string>, visited: Set<string> = new Set()): Promise<DexNode[]> {
  if (visited.has(internalName)) return []
  visited.add(internalName)
  const map = speciesMap || await resolveSpeciesMap()
  const sp = getAnilSpecies(internalName)
  if (!sp) return []

  const baseNode = await buildAnilNode(internalName, isRoot ? 'Forma base' : '', isRoot ? 'base' : 'evo', null, map)
  if (!baseNode) return []
  let list: DexNode[] = [baseNode]

  for (const mega of sp.megas) {
    const megaNode = await buildAnilNode(
      internalName,
      mega.megaMove ? `Se activa conociendo ${getAnilMove(mega.megaMove)?.name || mega.megaMove} (sin piedra)` : `Requiere ${mega.megaStoneName} equipada en combate`,
      'mega',
      mega.megaMove ? null : mega.megaStoneName,
      map,
      mega.baseStats || undefined,
      mega.types || undefined,
      mega.abilities || undefined,
      mega.formName,
      internalName
    )
    if (megaNode) {
      megaNode.displayName = mega.formName || `Mega ${sp.name}`
      list.push(megaNode)
    }
  }

  for (const evo of sp.evolutions) {
    const label = evoMethodLabel(evo.method, evo.param)
    const childList = await buildAnilNodesFromEdge(evo.target, label, map, visited, internalName)
    list = list.concat(childList)
  }
  return list
}

async function buildAnilNodesFromEdge(internalName: string, evoLabel: string, speciesMap: Map<string, string>, visited: Set<string>, parentInternalName: string): Promise<DexNode[]> {
  if (visited.has(internalName)) return []
  visited.add(internalName)
  const sp = getAnilSpecies(internalName)
  if (!sp) return []
  const node = await buildAnilNode(internalName, evoLabel, 'evo', null, speciesMap, undefined, undefined, undefined, undefined, parentInternalName)
  if (!node) return []
  let list: DexNode[] = [node]

  for (const mega of sp.megas) {
    const megaNode = await buildAnilNode(
      internalName,
      mega.megaMove ? `Se activa conociendo ${getAnilMove(mega.megaMove)?.name || mega.megaMove} (sin piedra)` : `Requiere ${mega.megaStoneName} equipada en combate`,
      'mega',
      mega.megaMove ? null : mega.megaStoneName,
      speciesMap,
      mega.baseStats || undefined,
      mega.types || undefined,
      mega.abilities || undefined,
      mega.formName,
      internalName
    )
    if (megaNode) {
      megaNode.displayName = mega.formName || `Mega ${sp.name}`
      list.push(megaNode)
    }
  }

  for (const evo of sp.evolutions) {
    const label = evoMethodLabel(evo.method, evo.param)
    const childList = await buildAnilNodesFromEdge(evo.target, label, speciesMap, visited, internalName)
    list = list.concat(childList)
  }
  return list
}

export function classifyRole(stats: StatMap): RoleClassification {
  const hp = stats.hp, atk = stats.attack, def = stats.defense
  const spa = stats['special-attack'], spd = stats['special-defense'], spe = stats.speed
  const bulk = hp + def + spd
  const mainOffense: 'attack' | 'special-attack' = atk >= spa ? 'attack' : 'special-attack'
  const mainOffenseVal = Math.max(atk, spa)
  const isMixed = Math.abs(atk - spa) <= Math.max(atk, spa) * 0.12 && mainOffenseVal >= 85
  const isFast = spe >= 95 || spe >= bulk / 2.3
  const isBulky = bulk >= 300 && mainOffenseVal < bulk * 0.42

  let role: Role
  if (isBulky && !isFast) {
    role = def >= spd ? 'wall-physical' : 'wall-special'
  } else if (isMixed) {
    role = 'mixed'
  } else if (isFast) {
    role = mainOffense === 'attack' ? 'sweeper-physical' : 'sweeper-special'
  } else {
    role = mainOffense === 'attack' ? 'breaker-physical' : 'breaker-special'
  }
  return { role, mainOffense, baseSpeed: spe }
}

export function natureKeyForRole(role: Role, baseSpeed: number): string {
  switch (role) {
    case 'sweeper-physical': return baseSpeed >= 100 ? 'ADAMANT' : 'JOLLY'
    case 'sweeper-special': return baseSpeed >= 100 ? 'MODEST' : 'TIMID'
    case 'breaker-physical': return 'ADAMANT'
    case 'breaker-special': return 'MODEST'
    case 'mixed': return baseSpeed >= 90 ? 'NAIVE' : 'RASH'
    case 'wall-physical': return 'IMPISH'
    case 'wall-special': return 'CALM'
  }
}
export function pickNature(role: Role, baseSpeed: number): string {
  const key = natureKeyForRole(role, baseSpeed)
  return `${NATURE_ES[key]} (n.º ${NATURE_NUM[key]})`
}
export function pickEVs(role: Role, mainOffense: 'attack' | 'special-attack'): string {
  switch (role) {
    case 'sweeper-physical': return '252 Atq / 4 PS / 252 Vel'
    case 'sweeper-special': return '252 At. Esp. / 4 PS / 252 Vel'
    case 'breaker-physical': return '252 Atq / 252 PS / 4 Def'
    case 'breaker-special': return '252 At. Esp. / 252 PS / 4 Def. Esp.'
    case 'mixed': return mainOffense === 'attack' ? '252 Atq / 252 Vel / 4 PS' : '252 At. Esp. / 252 Vel / 4 PS'
    case 'wall-physical': return '252 PS / 252 Def / 4 Def. Esp.'
    case 'wall-special': return '252 PS / 252 Def. Esp. / 4 Def'
  }
}
/** Mismo reparto que pickEVs, pero como array [PS,Atq,Def,AtEsp,DefEsp,Vel] con los 6 valores explícitos. */
export function pickEVsArray(role: Role, mainOffense: 'attack' | 'special-attack'): number[] {
  switch (role) {
    case 'sweeper-physical': return [4, 252, 0, 0, 0, 252]
    case 'sweeper-special': return [4, 0, 0, 252, 0, 252]
    case 'breaker-physical': return [252, 252, 4, 0, 0, 0]
    case 'breaker-special': return [252, 0, 0, 252, 4, 0]
    case 'mixed': return mainOffense === 'attack' ? [4, 252, 0, 0, 0, 252] : [4, 0, 0, 252, 0, 252]
    case 'wall-physical': return [252, 0, 252, 0, 4, 0]
    case 'wall-special': return [252, 0, 4, 0, 252, 0]
  }
}
export function pickIVs(role: Role): string {
  if (role === 'sweeper-special' || role === 'breaker-special') {
    return '31 en todo excepto 0 en Ataque (minimiza el daño de Golpe Bajo / confusión)'
  }
  return '31 en todo'
}
/** Mismo criterio que pickIVs, como array [PS,Atq,Def,AtEsp,DefEsp,Vel] con los 6 valores explícitos. */
export function pickIVsArray(role: Role): number[] {
  if (role === 'sweeper-special' || role === 'breaker-special') return [31, 0, 31, 31, 31, 31]
  return [31, 31, 31, 31, 31, 31]
}
export function pickItemKeys(role: Role, hasBoostMove: boolean, baseSpeed: number): string[] {
  switch (role) {
    case 'sweeper-physical':
    case 'sweeper-special':
      if (hasBoostMove) return ['LIFEORB']
      return baseSpeed < 110 ? ['CHOICESCARF'] : ['CHOICEBAND', 'CHOICESPECS']
    case 'breaker-physical': return ['CHOICEBAND']
    case 'breaker-special': return ['CHOICESPECS']
    case 'mixed': return ['LIFEORB']
    case 'wall-physical':
    case 'wall-special': return ['LEFTOVERS']
  }
}
export function pickItem(role: Role, hasBoostMove: boolean, baseSpeed: number): string {
  const keys = pickItemKeys(role, hasBoostMove, baseSpeed)
  const names = keys.map(getAnilItemName).join(' / ')
  const nums = keys.map(getAnilItemNumber).filter((n): n is number => n != null)
  return nums.length ? `${names} — n.º ${nums.join(' / ')}` : names
}
type AbilityDetailLookup = (id: string) => { description: string; flags: string[] } | null
type SpeciesAbility = { id: string; name: string; hidden: boolean }

const OFFENSE_ABILITY_HINTS: RegExp[] = [
  /duplica (el|la|su) (ataque|at\. esp\.|ataque especial|velocidad|estad[íi]stica de (ataque|velocidad))/i,
  /duplica el da[ñn]o/i,
  /potencia (los|sus|el) (movimientos|ataques|ataque)/i,
  /aumenta (el|la|su|en un nivel)[^.]{0,26}(ataque|at\. esp\.|ataque especial|velocidad)/i,
  /sube[^.]{0,18}(ataque|velocidad)/i,
  /x1,5|x2,25|x2 en lugar de x1,5|de x1,5 a x2/i,
  /\bprioridad\b/i,
  /golpe cr[íi]tico|golpes cr[íi]ticos/i,
  /ignora (los cambios|la reducci[óo]n|ser atra)/i,
  /no le afecta/i
]
const OFFENSE_ABILITY_PENALTY: RegExp[] = [
  /reduce (a la mitad )?(el|los) da[ñn]o|da[ñn]o (sufrido|recibido)[^.]{0,20}(mitad|25%)|a la mitad el da[ñn]o (recibido|sufrido)/i,
  /bloquea los golpes cr[íi]ticos/i,
  /aumenta[^.]{0,20}defensa|sube la defensa/i
]
const WALL_ABILITY_HINTS: RegExp[] = [
  /restaura|recupera \d\/\d/i,
  /reduce (a la mitad )?[^.]{0,20}da[ñn]o|da[ñn]o (sufrido|recibido)[^.]{0,20}(mitad|25%)|a la mitad el da[ñn]o/i,
  /\binmun|no le afecta/i,
  /evita (ser |el |la |las |que )?(envenen|quemad|par[áa]lisis|paraliz|congel|el sue[ñn]o|dormido|bajen|baje|disminuya|se reduzcan)/i,
  /bloquea los golpes cr[íi]ticos/i,
  /de un solo golpe|debilitarlo de un/i,
  /\babsorbe\b/i,
  /atrae y neutraliza|pararrayos/i,
  /cura[^.]{0,20}problemas de estado/i,
  /sube la defensa|aumenta[^.]{0,20}defensa/i
]
const WALL_ABILITY_PENALTY: RegExp[] = [
  /duplica el da[ñn]o|duplica (el|la|su) (ataque|velocidad)|potencia los movimientos/i
]

function abilityHintScore(description: string, hints: RegExp[]): number {
  let score = 0
  for (const re of hints) if (re.test(description)) score++
  return score
}

export function pickAbility(
  abilities: SpeciesAbility[],
  role: Role,
  getDetail: AbilityDetailLookup
): { id: string; name: string } {
  if (!abilities.length) return { id: '', name: '' }
  const fallback = abilities.find(a => !a.hidden) ?? abilities[0]
  const wall = role.startsWith('wall')
  const reward = wall ? WALL_ABILITY_HINTS : OFFENSE_ABILITY_HINTS
  const penalty = wall ? WALL_ABILITY_PENALTY : OFFENSE_ABILITY_PENALTY

  let best = fallback
  let bestScore = 0
  abilities.forEach((ability, index) => {
    const description = getDetail(ability.id)?.description ?? ''
    if (!description) return
    let score = abilityHintScore(description, reward) - abilityHintScore(description, penalty)
    if (ability.hidden) score -= 0.25
    score -= index * 0.001
    if (score > bestScore) {
      bestScore = score
      best = ability
    }
  })
  return { id: best.id, name: best.name }
}

function resolveSetAbility(
  isMega: boolean,
  abilities: SpeciesAbility[],
  role: Role,
  getDetail: AbilityDetailLookup
): { id: string; name: string } {
  if (!abilities.length) return { id: '', name: '' }
  if (isMega) {
    const forced = abilities.find(a => !a.hidden) ?? abilities[0]
    return { id: forced.id, name: forced.name }
  }
  return pickAbility(abilities, role, getDetail)
}

export function computeSet(
  node: { stats: StatMap; isMega: boolean; megaStone?: string | null },
  abilities: SpeciesAbility[] = [],
  getAbilityDetail: AbilityDetailLookup = () => null
): CompetitiveSet {
  const classification = classifyRole(node.stats)
  const natureKey = natureKeyForRole(classification.role, classification.baseSpeed)
  const nature = pickNature(classification.role, classification.baseSpeed)
  const evs = pickEVs(classification.role, classification.mainOffense)
  const evsArray = pickEVsArray(classification.role, classification.mainOffense)
  const ivs = pickIVs(classification.role)
  const ivsArray = pickIVsArray(classification.role)
  const megaStoneNum = node.megaStone ? getAnilItemNumberByName(node.megaStone) : null
  const item = node.isMega
    ? (node.megaStone
        ? `${node.megaStone} — n.º ${megaStoneNum ?? '?'} (obligatoria para activar esta forma)`
        : 'Ninguno (se activa con el movimiento correspondiente)')
    : pickItem(classification.role, false, classification.baseSpeed)
  const ability = resolveSetAbility(node.isMega, abilities, classification.role, getAbilityDetail)
  return { classification, nature, natureKey, evs, evsArray, ivs, ivsArray, item, ability }
}

/** Movepool real de Añil ya resuelto en el nodo (ver customLevelMoves / anilLevelMoves). */
export function levelMovesOf(node: DexNode): LevelMove[] {
  return node.customLevelMoves || []
}

const HAZARD_MOVES = ['STEALTHROCK', 'SPIKES', 'TOXICSPIKES', 'STICKYWEB']
const PIVOT_MOVES = ['UTURN', 'VOLTSWITCH', 'FLIPTURN']
const WALL_STATUS_MOVES = ['TAUNT', 'KNOCKOFF', 'WILLOWISP', 'THUNDERWAVE', 'TOXIC', 'DEFOG', 'RAPIDSPIN', 'HAZE']

const POOL_CATEGORY_TO_CLASS: Record<string, MoveDetail['damage_class']> = {
  Physical: 'physical', Special: 'special', Status: 'status'
}

export function movesDetailedFromPool(ids: string[], moveOf: (id: string) => AnilMoveData | null): MoveDetail[] {
  const out: MoveDetail[] = []
  const seen = new Set<string>()
  for (const id of ids) {
    if (seen.has(id)) continue
    seen.add(id)
    const data = moveOf(id)
    if (!data) continue
    out.push({
      name: id,
      label: data.name,
      power: data.power,
      accuracy: data.accuracy,
      pp: data.pp ?? undefined,
      type: data.type,
      damage_class: POOL_CATEGORY_TO_CLASS[data.category] ?? 'status'
    })
  }
  return out
}

export function pickMoveset(movesDetailed: MoveDetail[], types: string[], role: Role, mainOffense: 'attack' | 'special-attack', item: string): MoveDetail[] {
  const isChoiceLocked = /Elecci[óo]n/.test(item)
  const isWall = role.startsWith('wall')
  const isSetupRole = role === 'sweeper-physical' || role === 'sweeper-special'
    || role === 'breaker-physical' || role === 'breaker-special'
  const wantedCategory: 'physical' | 'special' | null =
    isWall || role === 'mixed' ? null : (mainOffense === 'attack' ? 'physical' : 'special')

  const byId = new Map(movesDetailed.map(m => [m.name, m]))
  const allDamaging = movesDetailed
    .filter(m => m.damage_class !== 'status' && (m.power ?? 0) > 0)
    .map(m => ({
      ...m,
      stab: types.includes(m.type),
      score: (m.power || 0)
        * (types.includes(m.type) ? 1.5 : 1)
        * (wantedCategory && m.damage_class !== wantedCategory ? 0.55 : 1)
        * ((m.accuracy ?? 100) < 70 ? 0.8 : 1)
    }))
    .sort((a, b) => (b.score || 0) - (a.score || 0))
  const damaging = wantedCategory
    ? allDamaging.filter(m => m.damage_class === wantedCategory || m.stab)
    : allDamaging
  const damagingOffCat = wantedCategory
    ? allDamaging.filter(m => m.damage_class !== wantedCategory && !m.stab)
    : []

  const chosen: MoveDetail[] = []
  const usedTypes = new Set<string>()
  const usedNames = new Set<string>()
  const CAP = 4

  function take(move: MoveDetail, meta: Partial<MoveDetail>): boolean {
    if (chosen.length >= CAP || usedNames.has(move.name)) return false
    chosen.push({ ...move, ...meta })
    usedTypes.add(move.type)
    usedNames.add(move.name)
    return true
  }
  function takeFirstLegal(ids: string[], meta: Partial<MoveDetail>): boolean {
    for (const id of ids) {
      const found = byId.get(id)
      if (found) return take(found, meta)
    }
    return false
  }
  function addStab(limit: number): number {
    let added = 0
    for (const m of damaging) {
      if (added >= limit || chosen.length >= CAP) break
      if (usedNames.has(m.name) || !m.stab || usedTypes.has(m.type)) continue
      if (take(m, { stab: true })) added++
    }
    if (added === 0) {
      const best = damaging.find(m => !usedNames.has(m.name))
      if (best && take(best, { stab: best.stab })) added++
    }
    return added
  }
  function addCoverage(limit: number): number {
    let added = 0
    for (const m of damaging) {
      if (added >= limit || chosen.length >= CAP) break
      if (usedNames.has(m.name) || usedTypes.has(m.type)) continue
      if (take(m, { stab: m.stab })) added++
    }
    for (const m of damaging) {
      if (added >= limit || chosen.length >= CAP) break
      if (usedNames.has(m.name)) continue
      if (take(m, { stab: m.stab })) added++
    }
    return added
  }
  function fillOffCategory(): void {
    for (const m of damagingOffCat) {
      if (chosen.length >= CAP) break
      if (usedNames.has(m.name)) continue
      take(m, { stab: m.stab })
    }
  }
  function fillRemaining(allowStatus: boolean): void {
    for (const m of movesDetailed) {
      if (chosen.length >= CAP) break
      if (m.damage_class === 'status' && !allowStatus) continue
      take(m, m.damage_class === 'status' ? { isUtility: true } : { stab: types.includes(m.type) })
    }
  }

  if (isChoiceLocked) {
    addStab(2)
    addCoverage(3)
    if (chosen.length < CAP) takeFirstLegal(PIVOT_MOVES, { isUtility: true })
    addCoverage(CAP)
    if (chosen.length < CAP) fillOffCategory()
    fillRemaining(false)
    return chosen.slice(0, CAP)
  }

  if (isWall) {
    addStab(1)
    takeFirstLegal(HAZARD_MOVES, { isHazard: true })
    takeFirstLegal(RECOVERY, { isRecovery: true })
    takeFirstLegal(WALL_STATUS_MOVES, { isUtility: true })
    if (chosen.length < CAP) takeFirstLegal(HAZARD_MOVES, { isHazard: true })
    if (chosen.length < CAP) addCoverage(CAP)
    if (chosen.length < CAP) fillRemaining(true)
    return chosen.slice(0, CAP)
  }

  const boostList = mainOffense === 'attack' ? PHYSICAL_BOOSTS : SPECIAL_BOOSTS
  addStab(2)
  if (isSetupRole) takeFirstLegal(boostList, { isBoost: true })
  addCoverage(CAP)
  if (chosen.length < CAP) takeFirstLegal(RECOVERY, { isRecovery: true })
  if (chosen.length < CAP) fillOffCategory()
  if (chosen.length < CAP) fillRemaining(false)
  return chosen.slice(0, CAP)
}

export function describeMovePick(m: MoveDetail, types: string[]): string {
  if (m.isHazard) return 'Trampa de entrada — castiga cada cambio del rival.'
  if (m.isBoost) return 'Potencia sus stats antes de atacar — impulsa el barrido.'
  if (m.isRecovery) return 'Recuperación — sostiene al Pokémon en partidas largas.'
  if (m.isUtility) return 'Utilidad / control de partida.'
  if (types.includes(m.type)) return 'STAB — daño de tipo propio, base del set.'
  return 'Cobertura — pega tipos que su STAB no alcanza.'
}

export function moveShortTag(m: MoveDetail): string {
  if (m.isHazard) return 'Trampa'
  if (m.isBoost) return 'Impulso'
  if (m.isRecovery) return 'Recuperación'
  if (m.isUtility) return 'Utilidad'
  if (m.stab) return 'STAB'
  return 'Cobertura'
}

export interface SpeciesIndexEntry {
  internalName: string
  name: string
  num: number
  types: string[]
  statTotal: number
}

/**
 * Especies exclusivas de Añil (fake legendaries y cierres de línea) que no existen en PokéAPI:
 * su arte real del juego vive en public/anil-sprites/<internalname>.png, igual que el resto de
 * species sin equivalente en PokéAPI. Se declaran como DATOS (membership), no como branching por
 * especie, para que la franja del índice reutilice el spriter local sin violar la regla
 * "sin branching por especie" del proyecto.
 */
const LOCAL_SPRITES = new Set(['ROYALEON', 'CEFIREON'])

/** Ruta del sprite local para una especie exclusiva de Añil, o '' si no aplica. */
export function localSpriteUrl(internalName: string | null | undefined): string {
  return internalName && LOCAL_SPRITES.has(internalName)
    ? `/anil-sprites/${internalName.toLowerCase()}.png`
    : ''
}

let dexOrder: string[] | null = null
/** Orden e índice tal cual la Pokédex de Añil: el orden de claves de `anil-pokedex.json` (PBS). */
export function familyOrderedSpeciesKeys(): string[] {
  if (!dexOrder) dexOrder = Object.keys(allAnilSpecies())
  return dexOrder
}
export function speciesNationalNumber(internalName: string): number {
  const i = familyOrderedSpeciesKeys().indexOf(internalName)
  return i < 0 ? 0 : i + 1
}

let speciesIndex: SpeciesIndexEntry[] | null = null
export async function loadSpeciesIndex(): Promise<SpeciesIndexEntry[]> {
  if (speciesIndex) return speciesIndex
  const dict = allAnilSpecies()
  speciesIndex = familyOrderedSpeciesKeys().map((internalName, i) => {
    const sp = dict[internalName]
    return {
      internalName,
      name: sp.name,
      num: i + 1,
      types: sp.types,
      statTotal: sp.baseStats.reduce((a, b) => a + b, 0)
    }
  })
  return speciesIndex
}

const reverseMapCache: Record<string, Map<string, string>> = {}
const reverseMapInflight: Record<string, Promise<Map<string, string>>> = {}
/**
 * Mapa slug interno -> slug PokéAPI. Si PokéAPI no está disponible (offline o CORS) devuelve
 * un mapa vacío y no lo cachea, de modo que la app usa datos locales de Añil y reintenta luego.
 */
export async function buildReverseSlugMap(cacheKey: string, url: string): Promise<Map<string, string>> {
  if (reverseMapCache[cacheKey]) return reverseMapCache[cacheKey]
  if (cacheKey in reverseMapInflight) return reverseMapInflight[cacheKey]
  reverseMapInflight[cacheKey] = (async () => {
    const map = new Map<string, string>()
    try {
      const data = await fetchJson<any>(url)
      data.results.forEach((r: any) => { map.set(r.name.replace(/-/g, '').toUpperCase(), r.name) })
      reverseMapCache[cacheKey] = map
    } catch {
      /* PokéAPI no disponible: se sigue con los datos locales. */
    }
    delete reverseMapInflight[cacheKey]
    return map
  })()
  return reverseMapInflight[cacheKey]
}
export function resolveViaMap(map: Map<string, string>, rawId: unknown): string | null {
  if (!rawId) return null
  const key = String(rawId).replace(/_/g, '').replace(/-/g, '').toUpperCase()
  return map.get(key) || null
}
