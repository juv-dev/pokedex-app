import type { PokemonTemplateSet } from '../../lib/types'

const ironbundle: PokemonTemplateSet = {
  internalName: 'IRONBUNDLE',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'QUARKDRIVE',
      item: 'BOOSTERENERGY',
      nature: 'TIMID',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HYDROPUMP', 'FREEZEDRY', 'ICEBEAM', 'UTURN'],
      justification:
        'Iron Bundle es un barredor especial ultrarrápido en Añil V4.13: Velocidad 136 con SpA 124, aunque de PS 56 que lo convierten en cristal. Liofilización es el STAB Hielo que golpea al tipo Agua con daño supereficaz, Hidrobomba añade el STAB Agua de 110 y Rayo Hielo da la alternativa fiable de Hielo sin depender de la precisión de la bomba. Ida y Vuelta le permite salir tras el primer golpe evitando el desgaste de su baja defensa. El Tanque de Energía Potenciadora activa Carga Cuark y refuerza su ofensa, y la naturaleza Miedosa con 252 en Velocidad lo deja por encima de casi todo el metagame. La inversión en velocidad y potencia es total porque su HP es demasiado bajo para sostenerse sin urgencia.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Gafas Elección maximizan el daño de Hidrobomba a costa de quedar bloqueado, manteniendo Ida y Vuelta como salida.',
          replaces: 'BOOSTERENERGY'
        },
        {
          slot: 'move',
          value: 'AGILITY',
          note: 'Agilidad quita la dependencia de superar en velocidad a los rivales más rápidos, a cambio del pivoteo de Ida y Vuelta.',
          replaces: 'UTURN'
        },
        {
          slot: 'move',
          value: 'ICYWIND',
          note: 'Viento Hielo ralentiza al rival al golpear, alternativa de control de velocidad al STAB fiable.',
          replaces: 'ICEBEAM'
        }
      ]
    }
  ]
}

export default ironbundle
