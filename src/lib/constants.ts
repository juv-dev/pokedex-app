/**
 * En dev se pasa por el proxy de Vite (`/pokeapi` -> pokeapi.co) para evitar CORS cuando
 * una extensión o proxy local reescribe la cabecera `Access-Control-Allow-Origin`.
 * En build y en tests se usa la URL absoluta.
 */
export const POKEAPI =
  import.meta.env.DEV && import.meta.env.MODE !== 'test'
    ? '/pokeapi/api/v2'
    : 'https://pokeapi.co/api/v2'

export const TYPE_COLORS: Record<string, string> = {
  normal: '#A8A878', fire: '#F08030', water: '#6890F0', electric: '#F0C020', grass: '#78C850',
  ice: '#98D8D8', fighting: '#C03028', poison: '#A040A0', ground: '#E0C068', flying: '#A890F0',
  psychic: '#F85888', bug: '#A8B820', rock: '#B8A038', ghost: '#705898', dragon: '#7038F8',
  dark: '#705848', steel: '#B8B8D0', fairy: '#EE99AC'
}
export const TYPE_ES: Record<string, string> = {
  normal: 'Normal', fire: 'Fuego', water: 'Agua', electric: 'Eléctrico', grass: 'Planta',
  ice: 'Hielo', fighting: 'Lucha', poison: 'Veneno', ground: 'Tierra', flying: 'Volador',
  psychic: 'Psíquico', bug: 'Bicho', rock: 'Roca', ghost: 'Fantasma', dragon: 'Dragón',
  dark: 'Siniestro', steel: 'Acero', fairy: 'Hada'
}
export const TYPE_GRADIENT: Record<string, string> = {
  normal: 'linear-gradient(180deg,#B8B890,#83835E)',
  fire: 'linear-gradient(180deg,#F39755,#BB6425)',
  water: 'linear-gradient(180deg,#83A4F3,#5170BB)',
  electric: 'linear-gradient(180deg,#F3CB48,#BB9619)',
  grass: 'linear-gradient(180deg,#90D270,#5E9C3E)',
  ice: 'linear-gradient(180deg,#ABDFDF,#77A8A8)',
  fighting: 'linear-gradient(180deg,#CB554F,#96251F)',
  poison: 'linear-gradient(180deg,#B162B1,#7D327D)',
  ground: 'linear-gradient(180deg,#E6CB83,#AF9651)',
  flying: 'linear-gradient(180deg,#B8A4F3,#8370BB)',
  psychic: 'linear-gradient(180deg,#F9769D,#C1456A)',
  bug: 'linear-gradient(180deg,#B8C548,#839019)',
  rock: 'linear-gradient(180deg,#C5B15C,#907D2C)',
  ghost: 'linear-gradient(180deg,#8A76AB,#574577)',
  dragon: 'linear-gradient(180deg,#8A5CF9,#572CC1)',
  dark: 'linear-gradient(180deg,#8A7669,#574538)',
  steel: 'linear-gradient(180deg,#C5C5D8,#9090A2)',
  fairy: 'linear-gradient(180deg,#F1ABBB,#BA7786)'
}
/** Índice de cada tipo dentro de Graphics/UI/types_mini.png de Añil (IconPosition de PBS/types.txt). */
export const TYPE_ICON_INDEX: Record<string, number> = {
  normal: 0, fighting: 1, flying: 2, poison: 3, ground: 4, rock: 5, bug: 6, ghost: 7, steel: 8,
  fire: 10, water: 11, grass: 12, electric: 13, psychic: 14, ice: 15, dragon: 16, dark: 17, fairy: 18
}
/** Cantidad de fotogramas de la tira, incluido QMARKS (posición 9), que no se usa en la app. */
export const TYPE_ICON_SHEET_FRAMES = 19

export const NATURE_TABLE: ReadonlyArray<{ key: string; es: string; raises: string | null; lowers: string | null }> = [
  { key: 'HARDY', es: 'Fuerte', raises: null, lowers: null },
  { key: 'LONELY', es: 'Huraña', raises: 'Ataque', lowers: 'Defensa' },
  { key: 'BRAVE', es: 'Audaz', raises: 'Ataque', lowers: 'Velocidad' },
  { key: 'ADAMANT', es: 'Firme', raises: 'Ataque', lowers: 'At. Esp.' },
  { key: 'NAUGHTY', es: 'Pícara', raises: 'Ataque', lowers: 'Def. Esp.' },
  { key: 'BOLD', es: 'Osada', raises: 'Defensa', lowers: 'Ataque' },
  { key: 'DOCILE', es: 'Dócil', raises: null, lowers: null },
  { key: 'RELAXED', es: 'Plácida', raises: 'Defensa', lowers: 'Velocidad' },
  { key: 'IMPISH', es: 'Agitada', raises: 'Defensa', lowers: 'At. Esp.' },
  { key: 'LAX', es: 'Floja', raises: 'Defensa', lowers: 'Def. Esp.' },
  { key: 'TIMID', es: 'Miedosa', raises: 'Velocidad', lowers: 'Ataque' },
  { key: 'HASTY', es: 'Activa', raises: 'Velocidad', lowers: 'Defensa' },
  { key: 'SERIOUS', es: 'Seria', raises: null, lowers: null },
  { key: 'JOLLY', es: 'Alegre', raises: 'Velocidad', lowers: 'At. Esp.' },
  { key: 'NAIVE', es: 'Ingenua', raises: 'Velocidad', lowers: 'Def. Esp.' },
  { key: 'MODEST', es: 'Modesta', raises: 'At. Esp.', lowers: 'Ataque' },
  { key: 'MILD', es: 'Afable', raises: 'At. Esp.', lowers: 'Defensa' },
  { key: 'QUIET', es: 'Mansa', raises: 'At. Esp.', lowers: 'Velocidad' },
  { key: 'BASHFUL', es: 'Tímida', raises: null, lowers: null },
  { key: 'RASH', es: 'Alocada', raises: 'At. Esp.', lowers: 'Def. Esp.' },
  { key: 'CALM', es: 'Serena', raises: 'Def. Esp.', lowers: 'Ataque' },
  { key: 'GENTLE', es: 'Amable', raises: 'Def. Esp.', lowers: 'Defensa' },
  { key: 'SASSY', es: 'Grosera', raises: 'Def. Esp.', lowers: 'Velocidad' },
  { key: 'CAREFUL', es: 'Cauta', raises: 'Def. Esp.', lowers: 'At. Esp.' },
  { key: 'QUIRKY', es: 'Rara', raises: null, lowers: null }
]

export const NATURE_EFFECT: Record<string, [string, string]> = {}
export const NATURE_NUM: Record<string, number> = {}
NATURE_TABLE.forEach((n, i) => {
  NATURE_NUM[n.key] = i
  if (n.raises && n.lowers) NATURE_EFFECT[n.key] = [n.raises, n.lowers]
})

export const MEGA_STONE_MAP: Record<string, string> = {
  venusaur: 'Venusaurita', 'charizard-x': 'Charizardita X', 'charizard-y': 'Charizardita Y',
  blastoise: 'Blastoisinita', beedrill: 'Beedrillita', pidgeot: 'Pidgeotita', alakazam: 'Alakazita',
  slowbro: 'Slowbronita', gengar: 'Gengarita', kangaskhan: 'Kangaskhanita', pinsir: 'Pinsirita',
  gyarados: 'Gyaradosita', aerodactyl: 'Aerodactylita', 'mewtwo-x': 'Mewtwonita X', 'mewtwo-y': 'Mewtwonita Y',
  ampharos: 'Ampharosita', steelix: 'Steelixita', scizor: 'Scizorita', heracross: 'Heracronita',
  houndoom: 'Houndoominita', tyranitar: 'Tyranitarita', sceptile: 'Sceptilita', blaziken: 'Blazikenita',
  swampert: 'Swampertita', gardevoir: 'Gardevoirita', sableye: 'Sablenita', mawile: 'Mawilita',
  aggron: 'Aggronita', medicham: 'Medichamita', manectric: 'Manectita', sharpedo: 'Sharpedonita',
  camerupt: 'Cameruptita', altaria: 'Altarianita', banette: 'Banettita', absol: 'Absolita',
  glalie: 'Glalitita', salamence: 'Salamencita', metagross: 'Metagrossita', latias: 'Latiasita',
  latios: 'Latiosita', lopunny: 'Lopunnita', garchomp: 'Garchompita', lucario: 'Lucarionita',
  abomasnow: 'Abomasita', gallade: 'Galladita', audino: 'Audinita', diancie: 'Diancita'
}

export const PHYSICAL_BOOSTS = ['SWORDSDANCE', 'DRAGONDANCE', 'BULKUP', 'COIL', 'SHIFTGEAR']
export const SPECIAL_BOOSTS = ['NASTYPLOT', 'QUIVERDANCE', 'CALMMIND', 'TAILGLOW']
export const RECOVERY = ['RECOVER', 'ROOST', 'SOFTBOILED', 'SLACKOFF', 'SYNTHESIS', 'MORNINGSUN', 'MOONLIGHT', 'MILKDRINK', 'SHOREUP', 'WISH']
export const UTILITY = ['STEALTHROCK', 'SPIKES', 'TOXIC', 'WILLOWISP', 'THUNDERWAVE', 'DEFOG', 'RAPIDSPIN', 'TAUNT', 'SUBSTITUTE', 'PROTECT', 'GLARE', 'TOXICSPIKES']

export type RoleGroup = 'offense' | 'defense' | 'utility' | 'support'

export interface RoleMeta {
  labelEs: string
  descriptionEs: string
  group: RoleGroup
  heuristic: boolean
}

export const ROLE_REGISTRY = {
  'sweeper-physical': { labelEs: 'Sweeper Físico', descriptionEs: 'Atacante físico rápido que busca barrer tras superar en velocidad al rival.', group: 'offense', heuristic: true },
  'sweeper-special': { labelEs: 'Sweeper Especial', descriptionEs: 'Atacante especial rápido que busca barrer tras superar en velocidad al rival.', group: 'offense', heuristic: true },
  'breaker-physical': { labelEs: 'Wallbreaker Físico', descriptionEs: 'Atacante físico potente que rompe muros aun sin ventaja de velocidad.', group: 'offense', heuristic: true },
  'breaker-special': { labelEs: 'Wallbreaker Especial', descriptionEs: 'Atacante especial potente que rompe muros aun sin ventaja de velocidad.', group: 'offense', heuristic: true },
  mixed: { labelEs: 'Atacante Mixto', descriptionEs: 'Atacante que reparte daño entre el lado físico y el especial.', group: 'offense', heuristic: true },
  'wall-physical': { labelEs: 'Muro Físico', descriptionEs: 'Pared defensiva orientada a resistir el daño físico.', group: 'defense', heuristic: true },
  'wall-special': { labelEs: 'Muro Especial', descriptionEs: 'Pared defensiva orientada a resistir el daño especial.', group: 'defense', heuristic: true },
  'setup-sweeper': { labelEs: 'Sweeper con Setup', descriptionEs: 'Barredor que primero usa un movimiento de mejora y luego intenta cerrar la partida.', group: 'offense', heuristic: false },
  tank: { labelEs: 'Tanque', descriptionEs: 'Pokémon voluminoso que aguanta golpes mientras devuelve daño constante.', group: 'defense', heuristic: false },
  'bulky-attacker': { labelEs: 'Atacante Resistente', descriptionEs: 'Ofensivo con inversión defensiva para atacar varias veces durante la partida.', group: 'offense', heuristic: false },
  lead: { labelEs: 'Lead', descriptionEs: 'Pokémon pensado para abrir la partida y marcar el ritmo inicial.', group: 'utility', heuristic: false },
  'hazard-lead': { labelEs: 'Lead de Trampas', descriptionEs: 'Lead cuyo objetivo principal es colocar trampas de entrada cuanto antes.', group: 'utility', heuristic: false },
  'hazard-setter': { labelEs: 'Colocador de Trampas', descriptionEs: 'Coloca trampas de entrada como Púas o Trampa Rocas a lo largo de la partida.', group: 'utility', heuristic: false },
  'hazard-removal': { labelEs: 'Retirada de Trampas', descriptionEs: 'Elimina las trampas de entrada del propio campo con Defensa o Giro Rápido.', group: 'utility', heuristic: false },
  pivot: { labelEs: 'Pivote', descriptionEs: 'Gana o cede el turno con movimientos de cambio para mantener el momentum.', group: 'utility', heuristic: false },
  'defensive-pivot': { labelEs: 'Pivote Defensivo', descriptionEs: 'Pivote voluminoso que absorbe ataques y reposiciona al equipo con seguridad.', group: 'defense', heuristic: false },
  'revenge-killer': { labelEs: 'Revenge Killer', descriptionEs: 'Elimina amenazas debilitadas mediante prioridad o velocidad superior.', group: 'offense', heuristic: false },
  stall: { labelEs: 'Stall', descriptionEs: 'Desgasta al rival con daño residual, recuperación y estados alterados.', group: 'defense', heuristic: false },
  support: { labelEs: 'Apoyo', descriptionEs: 'Facilita el trabajo del resto del equipo con utilidad y control de campo.', group: 'support', heuristic: false },
  'screens-setter': { labelEs: 'Colocador de Pantallas', descriptionEs: 'Instala Pantalla Luz y Reflejo para reducir el daño recibido por el equipo.', group: 'support', heuristic: false },
  'status-spreader': { labelEs: 'Propagador de Estados', descriptionEs: 'Reparte parálisis, quemaduras o envenenamientos para minar al rival.', group: 'utility', heuristic: false },
  'trick-room-setter': { labelEs: 'Colocador de Espacio Raro', descriptionEs: 'Activa Espacio Raro para que los Pokémon lentos ataquen primero.', group: 'support', heuristic: false },
  'weather-setter': { labelEs: 'Invocador de Clima', descriptionEs: 'Establece un clima que potencia la estrategia principal del equipo.', group: 'support', heuristic: false },
  cleric: { labelEs: 'Clérigo', descriptionEs: 'Cura estados alterados y restaura PS del equipo con Alivio o Deseo Cura.', group: 'support', heuristic: false }
} as const satisfies Record<string, RoleMeta>

export type RoleId = keyof typeof ROLE_REGISTRY

export const ROLE_LABEL: Record<RoleId, string> =
  Object.fromEntries(Object.entries(ROLE_REGISTRY).map(([k, v]) => [k, v.labelEs])) as Record<RoleId, string>

export const NATURE_ES: Record<string, string> = Object.fromEntries(NATURE_TABLE.map(n => [n.key, n.es]))

export const GENDER_ES: Record<number, string> = { 0: '♂ Macho', 1: '♀ Hembra', 2: 'Sin género' }
