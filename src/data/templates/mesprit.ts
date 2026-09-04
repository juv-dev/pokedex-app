import type { PokemonTemplateSet } from '../../lib/types'

const mesprit: PokemonTemplateSet = {
  internalName: 'MESPRIT',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LEVITATE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 4, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'UTURN', 'PSYCHIC', 'HEALINGWISH'],
      justification:
        'Reparto 80/105/105/105/105/80: volumen equilibrado en ambos lados con Levitación (sin debilidad a Tierra). Coloca Trampa Rocas con comodidad, pivota con Ida y Vuelta, castiga con Psíquico para no ser pasivo, y remata su utilidad con Deseo Cura: se sacrifica para devolver PS y estado completos al Pokémon que entre, ideal para reponer un sweeper o un muro clave. Osada para aguantar mejor el lado físico al entrar.',
      alternatives: [
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Parálisis para el equipo en lugar del sacrificio curativo, si Mesprit debe quedarse en el campo.',
          replaces: 'HEALINGWISH'
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Quita objetos defensivos y mete chip, a cambio del STAB directo de Psíquico.',
          replaces: 'PSYCHIC'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'LEVITATE',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['PSYCHIC', 'THUNDERBOLT', 'ICEBEAM', 'UTURN'],
      justification:
        'Los mismos 105 de At.Esp con Vidasfera y naturaleza Miedosa hacen de Mesprit un rompemuros de medio tier: Psíquico de STAB, Rayo y Rayo Hielo cubren casi todo lo demás, e Ida y Vuelta mantiene el momentum y evita quedar bloqueado. Sin ventaja de Velocidad real, el rol es de presión, no de barrido.',
      alternatives: [
        {
          slot: 'move',
          value: 'DAZZLINGGLEAM',
          note: 'Cobertura a Siniestro y Dragón en lugar del Rayo Hielo.',
          replaces: 'ICEBEAM'
        }
      ]
    }
  ]
}

export default mesprit
