import type { PokemonTemplateSet } from '../../lib/types'

const naganadel: PokemonTemplateSet = {
  internalName: 'NAGANADEL',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'BEASTBOOST',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'SLUDGEWAVE', 'DRACOMETEOR', 'FIREBLAST'],
      justification:
        'Naganadel combina Ataque Especial 117 y Velocidad 121 con Ultraimpulso, que sube la estadística más alta (At.Esp.) cada vez que derriba a un rival: un solo KO ya le da +1 de At.Esp. acumulable. Maquinación duplica el At.Esp. en un turno y convierte a Onda Tóxica (95, STAB Veneno) y Cometa Draco (130, STAB Dragón) en golpes de cierre; Llamarada es el complemento imprescindible porque Acero es inmune a Veneno y resiste Dragón, y sin cobertura de Fuego Metagross, Ferrothorn o Corviknight frenan el set entero. Vidasfera multiplica todo por 1,3 y no penaliza la velocidad, que es la segunda mejor baza del Pokémon: Miedosa con 252 At.Esp. / 252 Vel. supera a casi todo el metagame sin delegar en objetos de velocidad. El desgaste de Cometa Draco (-2 At.Esp.) se compensa con Maquinación o con el propio Ultraimpulso tras un KO.',
      alternatives: [
        {
          slot: 'move',
          value: 'DRAGONPULSE',
          note: 'Pulso Dragón (85) sacrifica el pico de Cometa Draco por no bajar At.Esp. al usarlo, útil contra equipos con varios chequeos de Dragón.',
          replaces: 'DRACOMETEOR'
        },
        {
          slot: 'move',
          value: 'THUNDERBOLT',
          note: 'Rayo cubre Agua y Volador (Corviknight es neutro de todos modos por su tipo Acero) a cambio de la potencia de Llamarada contra Acero.',
          replaces: 'FIREBLAST'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'BEASTBOOST',
      item: 'CHOICESPECS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRACOMETEOR', 'SLUDGEWAVE', 'FIREBLAST', 'UTURN'],
      justification:
        'Variante de rompemuros sin turno de preparación: Gafas Elección llevan Cometa Draco (130 base, STAB) a un pico inmediato y Onda Tóxica y Llamarada completan la cobertura que ya no necesita Maquinación. Ida y Vuelta es la cuarta ranura clásica de los sets de elección: cuando el rival saca un muro especial, Naganadel cede el turno recuperando momentum sin quedar bloqueado en el movimiento equivocado. Ultraimpulso sigue funcionando igual: cada KO sube At.Esp., así que el desgaste de Cometa Draco se repone derribando. Es viable y no óptimo porque sin Maquinación ni Vidasfera pierde el potencial de barrer equipos enteros y depende de los cambios del rival para no ser castigado, aunque a cambio entrega daño inmediato desde el primer turno.',
      alternatives: [
        {
          slot: 'move',
          value: 'DRAGONPULSE',
          note: 'Pulso Dragón evita el desgaste de Cometa Draco con las Gafas, cediendo el pico de 130 de potencia.',
          replaces: 'DRACOMETEOR'
        },
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Pañuelo Elección convierte a Naganadel en revenge killer de Velocidad 121 x1,5, a costa del pico de daño de las Gafas.'
        }
      ]
    }
  ]
}

export default naganadel