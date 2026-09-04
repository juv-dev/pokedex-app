import type { PokemonTemplateSet } from '../../lib/types'

const ironhands: PokemonTemplateSet = {
  internalName: 'IRONHANDS',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'QUARKDRIVE',
      item: 'ASSAULTVEST',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAINPUNCH', 'THUNDERPUNCH', 'EARTHQUAKE', 'ICEPUNCH'],
      justification:
        'Iron Hands es el atacante voluminoso por antonomasia de Añil V4.13: PS 154 y Ataque 140 con Velocidad 50. El Chaleco Asalto cubre su Defensa Especial 68 y lo convierte en un chequeo mixto que además golpea con la mayor estadística ofensiva del juego. Los cuatro huecos son ataques porque el Chaleco bloquea los de estado: Puño Drenaje recupera la mitad del daño y sostiene los 154 de PS, Puño Trueno da el STAB Eléctrico y Terremoto y Puño Hielo la cobertura. El Tanque de Energía Potenciadora no cabe en este set, así que Carga Cuark se activa con campo eléctrico ajeno o se prescinde de ella: la base es la enorme defensa física y el drenaje. Naturaleza Firme con 252 en PS y Ataque minimiza su rareza de velocidad baja.',
      alternatives: [
        {
          slot: 'move',
          value: 'PLAYROUGH',
          note: 'Carantoña da cobertura Hada contra el tipo Lucha que lo amenaza, a costa del golpe a Volador/Hada de Puño Hielo.',
          replaces: 'ICEPUNCH'
        },
        {
          slot: 'move',
          value: 'FAKEOUT',
          note: 'Sorpresa da un golpe con prioridad +3 en la primera entrada para golpear antes de la Velocidad 50, a cambio de un movimiento de cobertura.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos libera el hueco del Chaleco para sustituir un ataque por Refuerzo (Iron Defense) y ganar longevidad defensiva sin la restricción de solo movimientos de ataque.'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'QUARKDRIVE',
      item: 'SITRUSBERRY',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BELLYDRUM', 'DRAINPUNCH', 'THUNDERPUNCH', 'ICEPUNCH'],
      justification:
        'Variante explosiva que aprovecha el Ataque 140 con Tambor: Tambor pone el Ataque al máximo a costa de la mitad de los PS, y la Baya Zidra recupera ese coste al instante. Carga Cuark, activada con campo eléctrico ajeno o precedida de un movimiento de campo, refuerza aún más la escalada. Puño Drenaje cura tras el golpe y los 154 de PS con el Tambor dan un margen enorme para aguantar y rematar. Es viable y no óptimo porque necesita un turno para montar el Tambor y depende de acertar antes de ser castigado por su Velocidad 50, mientras que el Chaleco da una consistencia partido a partido que el all-in no garantiza.',
      alternatives: [
        {
          slot: 'nature',
          value: 'BRAVE',
          note: 'Naturaleza Osada con IV de Velocidad a 0 lo convierte en un devastador bajo Espacio Raro tras el Tamborío.'
        }
      ]
    }
  ]
}

export default ironhands
