const TYPE_FILE: Record<string, string> = {
  normal: 'normal', fire: 'fire', water: 'water', electric: 'electric', grass: 'grass',
  ice: 'ice', fighting: 'fighting', poison: 'poison', ground: 'ground', flying: 'flying',
  psychic: 'psychic', bug: 'bug', rock: 'rock', ghost: 'ghost', dragon: 'dragon',
  dark: 'dark', steel: 'steel', fairy: 'fairy', hada: 'fairy'
}

export function typeIconUrl(type: string | null | undefined): string {
  const file = TYPE_FILE[String(type ?? '').toLowerCase()] ?? 'normal'
  return `/assets/types/${file}.svg`
}

const BALL_FILE: Record<string, string> = {
  POKEBALL: 'pokeball', GREATBALL: 'greatball', ULTRABALL: 'ultraball', MASTERBALL: 'masterball',
  SAFARIBALL: 'safariball', FASTBALL: 'fastball', LEVELBALL: 'levelball', LUREBALL: 'lureball',
  HEAVYBALL: 'heavyball', LOVEBALL: 'loveball', FRIENDBALL: 'friendball', MOONBALL: 'moonball',
  SPORTBALL: 'sportball', LUXURYBALL: 'luxuryball', NESTBALL: 'nestball', PREMIERBALL: 'premierball',
  NETBALL: 'netball', TIMERBALL: 'timerball', DIVEBALL: 'diveball', REPEATBALL: 'repeatball',
  HEALBALL: 'healball', DUSKBALL: 'duskball', QUICKBALL: 'quickball', CHERISHBALL: 'cherishball',
  DREAMBALL: 'dreamball', BEASTBALL: 'beastball'
}

export function ballIconUrl(ballId: string | null | undefined): string {
  const key = String(ballId ?? '').toUpperCase().replace(/[^A-Z]/g, '')
  return `/assets/poke-balls/${BALL_FILE[key] ?? 'pokeball'}.png`
}
