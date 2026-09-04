import type { PokemonTemplateSet } from '../../lib/types'

const lycanroc: PokemonTemplateSet = {
  internalName: 'LYCANROC',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SANDRUSH',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'STONEEDGE', 'EARTHQUAKE', 'CLOSECOMBAT'],
      justification:
        'En Añil V4.13 Lycanroc es una sola forma con Ímpetu Arena disponible, y ese es el motor del set: la Velocidad 112 se duplica durante la tormenta de arena ("aumenta x2 la Velocidad... y evita que sufra daño de esta"), así que con 252 EVs y Firme, Lycanroc supera en arena a todo el metagame sin invertir naturaleza en velocidad. Danza Espada compensa las defensas 65/65 con un Ataque 115 que pasa a niveles de rompemuros, y la cobertura clásica de tres golpes: Roca Afilada y Terremoto como doble STAB con precisión y potencia altas, y A Bocajarro (120, STAB Lucha) para Acero, Normal y Roca que resisten el combo Tierra/Roca. Vidasfera sube el daño de cada golpe; el retroceso se paga una sola vez porque en arena el rival no llega a atacar dos veces. Firme y 252 en Velocidad mantienen el orden interno contra otros usuarios de arena, que también duplican su Velocidad. El set depende de que el clima esté activo: sin arena, 112 de Velocidad queda expuesto ante sweepers de 120-130 de base.',
      alternatives: [
        {
          slot: 'move',
          value: 'SANDSTORM',
          note: 'Tormenta Arena permite auto-activar Ímpetu Arena en el turno uno sin depender de un compañero de clima, a costa de perder la cobertura de A Bocajarro.',
          replaces: 'CLOSECOMBAT'
        },
        {
          slot: 'move',
          value: 'ACCELEROCK',
          note: 'Acelroca (prioridad +1, STAB Roca) castiga a rivales más rápidos fuera de arena y a usuarios de prioridad, cediendo el golpe masivo de A Bocajarro.',
          replaces: 'CLOSECOMBAT'
        },
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Garantiza el turno de Danza Espada contra cualquier rival, a cambio del pico de daño de Vidasfera.'
        }
      ]
    }
  ]
}

export default lycanroc