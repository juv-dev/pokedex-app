import type { PokemonTemplateSet } from '../../lib/types'

const vanilluxe: PokemonTemplateSet = {
  internalName: 'VANILLUXE',
  templates: [
    {
      role: 'weather-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SNOWWARNING',
      item: 'ICYROCK',
      nature: 'MODEST',
      evs: [252, 0, 4, 252, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['AURORAVEIL', 'BLIZZARD', 'FREEZEDRY', 'DAZZLINGGLEAM'],
      justification:
        'Vanilluxe es el mejor invocador de nevada del rango: Nevada la activa al entrar y Roca Helada la extiende a ocho turnos, tiempo suficiente para que el equipo la aproveche. La nevada resuelve dos problemas a la vez: Ventisca pasa a tener precisión perfecta y Velo Aurora queda disponible, reduciendo el daño físico y especial que recibe todo el equipo durante cinco turnos. Sobre esa base, At.Esp. 130 con naturaleza Modesta convierte a Vanilluxe en algo más que un soporte: Ventisca es la STAB de Hielo de máxima potencia, Liofilización mantiene el daño de Hielo y además castiga a los Agua que suelen entrar a frenar a los tipo Hielo, y Deslumbrar es la STAB de Hada que pega a Dragón, Siniestro y Lucha. El reparto 252 PS / 252 At.Esp. prioriza volumen para poder volver a entrar y reactivar la nevada varias veces en la partida, ya que su Velocidad 79 no le da un nicho ofensivo por iniciativa.',
      alternatives: [
        {
          slot: 'ability',
          value: 'PODERGELIDO',
          note: 'En equipos con otro invocador de nevada, sube un 50% la potencia de Hielo y la Velocidad, superando a Nevada como pieza puramente ofensiva.'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Pura potencia si no se busca alargar la nevada ni instalar Velo Aurora de forma sostenida.'
        },
        {
          slot: 'move',
          value: 'FLASHCANNON',
          note: 'Castiga a otros Hielo y a Roca en el espejo; se pierde la cobertura de Hada contra Dragón y Siniestro.',
          replaces: 'DAZZLINGGLEAM'
        },
        {
          slot: 'move',
          value: 'MIRRORCOAT',
          note: 'Sorprende y elimina a los atacantes especiales que entran a reventar al setter antes de que instale el clima.',
          replaces: 'AURORAVEIL'
        }
      ]
    }
  ]
}

export default vanilluxe
