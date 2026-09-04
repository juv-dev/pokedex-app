import type { PokemonTemplateSet } from '../../lib/types'

const trevenant: PokemonTemplateSet = {
  internalName: 'TREVENANT',
  templates: [
    {
      role: 'stall',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'HARVEST',
      item: 'SITRUSBERRY',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['WILLOWISP', 'LEECHSEED', 'HORNLEECH', 'POLTERGEIST'],
      justification:
        'PS 85 y Defensa 86 no son cifras de muro por sí solas, pero Cosecha las multiplica: con un 50% de probabilidad cada turno (100% bajo sol) recupera la Baya Zidra consumida, generando un flujo de curación difícil de agotar. Sobre esa base, Drenadoras y Rayo Absorción devuelven PS de forma pasiva y activa, y Fuego Fatuo reduce a la mitad el daño de los atacantes físicos que intenten romperlo. Golpe Fantasma es el STAB de castigo: 110 de potencia usando el objeto del rival, que además elimina ese objeto. El tipo Fantasma le da inmunidad a Normal y Lucha, las coberturas típicas contra muros. Inversión física defensiva pura. Se prefiere Cosecha a Cacheo o Cura Natural porque es la única habilidad que sostiene el ciclo de desgaste indefinidamente.',
      alternatives: [
        {
          slot: 'move',
          value: 'BLOCK',
          note: 'Atrapa al rival para desgastarlo sin escapatoria con Drenadoras y quemadura, a cambio de la utilidad de Fuego Fatuo generalizada.',
          replaces: 'WILLOWISP'
        },
        {
          slot: 'move',
          value: 'PROTECT',
          note: 'Escala Drenadoras y quemadura un turno extra y activa una tirada más de Cosecha antes de recibir daño.',
          replaces: 'POLTERGEIST'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Desgaste pasivo garantizado si el rival lleva formas de anular bayas; renuncia al bucle de Cosecha.'
        }
      ]
    },
    {
      role: 'trick-room-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'HARVEST',
      item: 'SITRUSBERRY',
      nature: 'BRAVE',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['TRICKROOM', 'POLTERGEIST', 'HORNLEECH', 'DRAINPUNCH'],
      justification:
        'Ataque 110 y solo 56 de Velocidad hacen de Trevenant un abusador natural de Espacio Raro además de su instalador. Con naturaleza Audaz e IV de Velocidad a 0 actúa primero durante los cuatro turnos de Espacio Raro y pega con Golpe Fantasma a 110, Rayo Absorción y Puño Drenaje, los dos últimos con robo de PS para mantenerse en pie. Cosecha con Baya Zidra le da longevidad para instalar Espacio Raro más de una vez por partida. Es viable y no óptimo porque su rendimiento depende de que el equipo esté montado alrededor de Espacio Raro.',
      alternatives: [
        {
          slot: 'move',
          value: 'WOODHAMMER',
          note: 'STAB de Planta de 120 para turnos en que hace falta el máximo daño posible, a cambio del retroceso.',
          replaces: 'HORNLEECH'
        }
      ]
    }
  ]
}

export default trevenant
