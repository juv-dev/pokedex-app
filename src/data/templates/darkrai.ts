import type { PokemonTemplateSet } from '../../lib/types'

const darkrai: PokemonTemplateSet = {
  internalName: 'DARKRAI',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'BADDREAMS',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'DARKPULSE', 'SLUDGEBOMB', 'FOCUSBLAST'],
      justification:
        'Velocidad 125 y At.Esp 135 con tipo Siniestro puro. Más Psique lleva a rango de KO en una sola subida. Pulso Umbrío es el STAB con amedrentar, Bomba Lodo pega a las Hadas que frenan el Siniestro y Foco Resplandor a Siniestro, Acero y Normal. Mal Sueño añade 1/8 de daño por turno a cualquier rival dormido, con sinergia con compañeros que induzcan sueño. Vidasfera para el pico de daño; con 70/90/90 de aguante el plan es preparar y barrer.',
      alternatives: [
        {
          slot: 'move',
          value: 'DARKVOID',
          note: 'Puede dormir a un rival y activar Mal Sueño, pero en Añil tiene solo 50 de precisión: uso arriesgado.',
          replaces: 'FOCUSBLAST'
        },
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Pega a Tierra, Dragón y Volador; se cambia por Bomba Lodo si el equipo ya cubre a las Hadas.',
          replaces: 'SLUDGEBOMB'
        },
        {
          slot: 'move',
          value: 'PSYSHOCK',
          note: 'Rompe muros especiales como Blissey golpeando su Defensa física.',
          replaces: 'FOCUSBLAST'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'BADDREAMS',
      item: 'CHOICESPECS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DARKPULSE', 'SLUDGEBOMB', 'FOCUSBLAST', 'ICEBEAM'],
      justification:
        'Con Gafas Elección y Miedosa, Pulso Umbrío desde 135 de At.Esp revienta a casi todo lo que no lo resista, y la Velocidad 125 le deja disparar antes que la mayoría del tier. Bomba Lodo, Foco Resplandor y Rayo Hielo cubren Hada, Acero y Dragón.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Sacrifica potencia por la libertad de no quedar encerrado en un movimiento.'
        }
      ]
    }
  ]
}

export default darkrai
