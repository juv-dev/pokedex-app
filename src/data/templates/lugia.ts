import type { PokemonTemplateSet } from '../../lib/types'

const lugia: PokemonTemplateSet = {
  internalName: 'LUGIA',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MULTISCALE',
      item: 'HEAVYDUTYBOOTS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['AEROBLAST', 'ROOST', 'WHIRLWIND', 'ICEBEAM'],
      justification:
        'Compensación reduce a la mitad el daño recibido mientras Lugia esté a PS máximos, así que sobre PS 106 / Def 130 / Def. Esp. 154 de base se convierte en el mejor muro mixto disponible: casi ningún golpe neutro lo baja de la mitad en un solo turno. Botas Gruesas es casi obligatorio porque cualquier chip de Trampa Rocas al entrar rompe Compensación y anula su mayor ventaja. Respiro restaura la mitad de los PS y reactiva la habilidad. Remolino fuerza cambios y suma daño de trampas del rival mientras frena a los que montan setup enfrente. Aerochorro es el STAB fiable (alta probabilidad de crítico) para no quedar pasivo, y Rayo Hielo castiga a los Dragón, Tierra y Planta que entrarían gratis. Reparto físico defensivo con Osada porque la Def. Esp. 154 ya es enorme de base y el flanco físico es el que conviene parchear.',
      alternatives: [
        {
          slot: 'move',
          value: 'DEFOG',
          note: 'Despejar convierte a Lugia en retirada de trampas del equipo, cediendo el phazing de Remolino.',
          replaces: 'WHIRLWIND'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Onda Trueno aporta control de velocidad y castiga a los cambios ofensivos, a cambio de la cobertura de Rayo Hielo.',
          replaces: 'ICEBEAM'
        },
        {
          slot: 'nature',
          value: 'CALM',
          note: 'Serena si el equipo ya cubre el flanco físico y Lugia debe frenar atacantes especiales concretos.'
        },
        {
          slot: 'ability',
          value: 'PRESSURE',
          note: 'Presión duplica el gasto de PP rival para ganar duelos de desgaste largos si el equipo controla bien las trampas y Compensación es difícil de mantener.'
        }
      ]
    }
  ]
}

export default lugia
