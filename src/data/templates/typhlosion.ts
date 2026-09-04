import type { PokemonTemplateSet } from '../../lib/types'

const typhlosion: PokemonTemplateSet = {
  internalName: 'TYPHLOSION',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'BERSERK',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['ERUPTION', 'BOOMBURST', 'FOCUSBLAST', 'EARTHPOWER'],
      justification:
        'En Añil V4.13 Typhlosion es Fuego/Normal con At. Esp. 109 y Velocidad 110, y ese cambio de tipo le da Estruendo como STAB de 140 sin contrapartida, que además atraviesa Sustituto. Estallido pega 150 a PS máximos como STAB de Fuego, y entre los dos STAB solo hace falta cubrir Roca y Acero: Onda Certera y Tierra Viva se encargan de eso y de los Fuego rivales. Cólera sube el At. Esp. cada vez que un ataque lo deja por debajo del 50% de PS, y el retroceso de Vidasfera o el daño de trampas ayudan a activarlo, así que un solo intercambio puede dejarlo con +1 y una potencia difícil de contener. Naturaleza Miedosa y máxima Velocidad para conservar el tope y limpiar tras un poco de desgaste al rival.',
      alternatives: [
        {
          slot: 'move',
          value: 'FLAMETHROWER',
          note: 'Lanzallamas cambia el pico de Estallido por potencia constante que no depende de los PS, más fiable en partidas largas.',
          replaces: 'ERUPTION'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Gafas Elección dan un salto de daño inmediato para un papel de rompemuros, a cambio de quedar bloqueado en un movimiento.',
        },
        {
          slot: 'move',
          value: 'SHADOWBALL',
          note: 'Bola Sombra golpea a los Fantasma que son inmunes al STAB Normal y baja la Def. Esp., con precisión perfecta frente a Onda Certera.',
          replaces: 'FOCUSBLAST'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'BERSERK',
      item: 'CHOICESPECS',
      nature: 'MODEST',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FIREBLAST', 'BOOMBURST', 'FOCUSBLAST', 'EARTHPOWER'],
      justification:
        'Uso de rompemuros puro: Gafas Elección sobre naturaleza Modesta llevan la potencia de un At. Esp. base 109 a cifras que perforan defensivos neutrales de una pasada. Llamarada es el STAB de Fuego estable al estar bloqueado en un movimiento, Estruendo aporta el STAB Normal de 140 y las coberturas Onda Certera y Tierra Viva cubren Roca y Acero. Se mantiene 252 en Velocidad porque, aun bloqueado, la base 110 deja fuera a buena parte del metajuego ofensivo. Cólera sigue funcionando como recompensa si sobrevive por debajo del 50%, pero el objetivo es abrir agujeros para el resto del equipo.',
      alternatives: [
        {
          slot: 'move',
          value: 'FLAMETHROWER',
          note: 'Lanzallamas sacrifica potencia por precisión perfecta, preferible si la partida no admite fallar el STAB principal.',
          replaces: 'FIREBLAST'
        },
        {
          slot: 'nature',
          value: 'TIMID',
          note: 'Priorizar Velocidad sobre potencia para no perder ninguna carrera relevante a costa de algo de daño de ruptura.'
        },
        {
          slot: 'move',
          value: 'EXTRASENSORY',
          note: 'Paranormal castiga a Lucha y Veneno que entran cómodos frente a los STAB, con probabilidad de retroceso.',
          replaces: 'EARTHPOWER'
        }
      ]
    }
  ]
}

export default typhlosion
