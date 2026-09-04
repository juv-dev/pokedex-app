import type { PokemonTemplateSet } from '../../lib/types'

const shaymin: PokemonTemplateSet = {
  internalName: 'SHAYMIN',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SERENEGRACE',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SEEDFLARE', 'AIRSLASH', 'EARTHPOWER', 'DAZZLINGGLEAM'],
      justification:
        'Velocidad 130 y At.Esp 120. Dicha duplica los efectos secundarios: Fulgor baja dos niveles la Def.Esp del rival el 80% de las veces y Tajo Aéreo amedrenta el 60%, así que cada ataque debilita o traba al oponente y facilita el turno siguiente. Fulgor es un STAB de 120, Tajo Aéreo el segundo STAB con retención, y Tierra Viva más Brillo Mágico cubren Fuego, Veneno, Acero y Roca. Vidasfera para el pico; con 75 de defensas el rol es barrer, no aguantar.',
      alternatives: [
        {
          slot: 'move',
          value: 'PSYCHIC',
          note: 'Pega a Veneno y Lucha; Brillo Mágico cubre Dragón y Siniestro, se elige según el equipo rival.',
          replaces: 'DAZZLINGGLEAM'
        }
      ]
    },
    {
      role: 'revenge-killer',
      isPrimary: false,
      confidence: 'viable',
      ability: 'SERENEGRACE',
      item: 'CHOICESCARF',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SEEDFLARE', 'AIRSLASH', 'EARTHPOWER', 'PSYCHIC'],
      justification:
        'Con Pañuelo Elección, Shaymin supera a todo el tier ofensivo y revanchea manteniendo la presión de secundarios de Dicha: Fulgor deja marcado al switch-in con -2 de Def.Esp y Tajo Aéreo amedrenta. Tierra Viva castiga a los Acero que intentan pararlo y Psíquico cubre Veneno y Lucha.',
      alternatives: [
        {
          slot: 'move',
          value: 'DAZZLINGGLEAM',
          note: 'Cobertura a Dragón y Siniestro en lugar de a Veneno y Lucha.',
          replaces: 'PSYCHIC'
        }
      ]
    }
  ]
}

export default shaymin
