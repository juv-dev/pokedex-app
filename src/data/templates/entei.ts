import type { PokemonTemplateSet } from '../../lib/types'

const entei: PokemonTemplateSet = {
  internalName: 'ENTEI',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRESSURE',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SACREDFIRE', 'EXTREMESPEED', 'STONEEDGE', 'STOMPINGTANTRUM'],
      justification:
        'Entei tiene Ataque 115, PS 115 y Velocidad 100: con Cinta Elección pega como un rompemuros de primera y encima entra a media partida a castigar. Fuego Sagrado (100, STAB, 50% de quemadura) es un golpe de spam que además marca a los muros físicos que lo aguanten. Velocidad Extrema (prioridad +2) es su rasgo distintivo con Cinta: revienta amenazas debilitadas y barredores rápidos aunque quede bloqueado en el movimiento. Roca Afilada cubre a los Vuelo y Fuego rivales, y Pataleta pega a los Roca y Acero que resisten el Fuego. Firme maximiza el daño y los 252 en Velocidad aseguran adelantar a la base 90-100 neutra. Presión desgasta los PP de lo que intente frenarlo repetidamente.',
      alternatives: [
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Alegre para ganar las carreras contra otras bases 100 y ciertos barredores, a costa del pico de daño de Fuego Sagrado.'
        },
        {
          slot: 'move',
          value: 'FLAREBLITZ',
          note: 'Envite Ígneo cambia 100 de potencia y 95 de precisión por 120 fiables, a cambio del retroceso de 1/3.',
          replaces: 'SACREDFIRE'
        },
        {
          slot: 'ability',
          value: 'FLASHFIRE',
          note: 'Absorbe Fuego da inmunidad al tipo Fuego y potencia sus llamas un 50% al recibirlo, útil como pivote defensivo contra otros atacantes de fuego.'
        },
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Pañuelo Elección lo pasa a revenge killer puro que además conserva Velocidad Extrema para lo que sobreviva con prioridad.'
        }
      ]
    }
  ]
}

export default entei
