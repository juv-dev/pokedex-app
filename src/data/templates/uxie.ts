import type { PokemonTemplateSet } from '../../lib/types'

const uxie: PokemonTemplateSet = {
  internalName: 'UXIE',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LEVITATE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'UTURN', 'KNOCKOFF', 'THUNDERWAVE'],
      justification:
        'Def 130 / Def.Esp 130 con Levitación: un muro mixto que aguanta golpes de ambos lados varias veces por partida. Trampa Rocas de entrada, Ida y Vuelta lo hace un pivote pese a no tener nada más ofensivo, Desarme quita objetos defensivos y mete algo de chip, y Onda Trueno reparte parálisis para el equipo. Osada para reforzar el lado físico, que es el más expuesto a la hora de entrar a colocar.',
      alternatives: [
        {
          slot: 'move',
          value: 'YAWN',
          note: 'Fuerza cambios y regala turnos para colocar o pivotar, en lugar de la parálisis.',
          replaces: 'THUNDERWAVE'
        },
        {
          slot: 'move',
          value: 'PSYCHIC',
          note: 'STAB para no ser pasivo total contra rivales que ignoran el estado.',
          replaces: 'KNOCKOFF'
        }
      ]
    },
    {
      role: 'screens-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'LEVITATE',
      item: 'LIGHTCLAY',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['REFLECT', 'LIGHTSCREEN', 'STEALTHROCK', 'UTURN'],
      justification:
        'Con Velocidad 95 y volumen enorme, Uxie coloca Reflejo y Pantalla de Luz de forma fiable frente a la mayoría de leads. Refleluz alarga las barreras a ocho turnos, y aún le sobra un hueco para Trampa Rocas y otro para Ida y Vuelta, con lo que deja al equipo con barreras, trampas y momentum de una sola entrada.',
      alternatives: [
        {
          slot: 'move',
          value: 'MEMENTO',
          note: 'Sacrificio que baja dos niveles el ataque físico y especial del rival y da entrada libre a un sweeper.',
          replaces: 'UTURN'
        }
      ]
    }
  ]
}

export default uxie
