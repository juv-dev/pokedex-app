import type { PokemonTemplateSet } from '../../lib/types'

const sawsbuck: PokemonTemplateSet = {
  internalName: 'SAWSBUCK',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'CHLOROPHYLL',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'HORNLEECH', 'DOUBLEEDGE', 'HIGHHORSEPOWER'],
      justification:
        'Sawsbuck es el barredor de sol del rango: Ataque 115 y Velocidad 105 base, y Clorofila duplica esa Velocidad mientras haya clima soleado, dejándolo por delante de todo el metajuego cuando un compañero levanta el sol. Por eso pide un invocador de Día Soleado en el equipo. Danza Espada aprovecha su buena Velocidad para armar un turno y llevar el Ataque a cifras que rompen incluso resistencias. Asta Drenaje es la STAB de Planta con recuperación, que compensa el desgaste de Vidasfera y Doble Filo; Doble Filo es la STAB de Normal de máxima potencia; Fuerza Equina cubre a Acero, Fuego, Roca y Veneno, los tipos que resisten ambas STAB. Naturaleza Alegre porque el sol ya resuelve el pico de Velocidad y conviene conservar toda la iniciativa base para cuando el clima decae; Vidasfera para maximizar el daño de cada golpe sin encadenarse a un movimiento.',
      alternatives: [
        {
          slot: 'ability',
          value: 'SAPSIPPER',
          note: 'Herbívoro da inmunidad a Planta y un nivel de Ataque sin depender del clima, para equipos que no usan sol.'
        },
        {
          slot: 'move',
          value: 'JUMPKICK',
          note: 'Mayor potencia (100) contra Acero y Roca, con riesgo de daño de retroceso si falla o el rival es inmune.',
          replaces: 'HIGHHORSEPOWER'
        },
        {
          slot: 'move',
          value: 'WILDCHARGE',
          note: 'Castiga a Volador y Agua que ignoran a Fuerza Equina; añade retroceso al desgaste propio.',
          replaces: 'HIGHHORSEPOWER'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Potencia inmediata sin Danza Espada cuando el sol ya cubre la Velocidad; exige retirar Danza Espada del set.',
          replaces: 'LIFEORB'
        }
      ]
    }
  ]
}

export default sawsbuck
