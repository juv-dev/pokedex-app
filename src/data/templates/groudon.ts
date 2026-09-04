import type { PokemonTemplateSet } from '../../lib/types'

const groudon: PokemonTemplateSet = {
  internalName: 'GROUDON',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'DROUGHT',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'PRECIPICEBLADES', 'FIREPUNCH', 'STONEEDGE'],
      justification:
        'Sequía instala sol, que potencia un 50% los movimientos de Fuego. Danza Espada dobla el Ataque 150 y transforma a Groudon en un rompedor: Filo del Abismo es el STAB Tierra de 120 de potencia, Puño Fuego bajo sol cae sobre Acero, Planta y Hielo que frenan a Tierra, y Roca Afilada completa la cobertura contra Volador y Fuego. Vidasfera y Firme para la máxima presión; su Velocidad 90 no basta para barrer sin ayuda, así que el rol es de sweeper con setup que rompe antes de ceder el turno.',
      alternatives: [
        {
          slot: 'move',
          value: 'ROCKPOLISH',
          note: 'Pulimento resuelve el problema de Velocidad en lugar de la potencia, mejor contra ofensivas rápidas.',
          replaces: 'SWORDSDANCE'
        },
        {
          slot: 'move',
          value: 'HIGHHORSEPOWER',
          note: 'Fuerza Equina cambia el 120/85 de Filo del Abismo por 95/95 si se prioriza no fallar.',
          replaces: 'PRECIPICEBLADES'
        },
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Convierte el turno de preparación en utilidad de trampas si el equipo carece de colocador.',
          replaces: 'SWORDSDANCE'
        }
      ]
    },
    {
      role: 'hazard-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'DROUGHT',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'PRECIPICEBLADES', 'FIREPUNCH', 'STONEEDGE'],
      justification:
        'El cuerpo de PS 100 / Defensa 140 aguanta para colocar Trampa Rocas y aportar el sol de Sequía al equipo. Filo del Abismo y Puño Fuego, potenciado por el sol, mantienen la presión ofensiva desde Ataque 150 sin necesidad de reforzarse, y Roca Afilada cubre a los Volador. Restos y un reparto voluminoso con Firme priorizan repetir entradas.',
      alternatives: [
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Onda Trueno reparte parálisis para apoyar al equipo, a cambio de la cobertura de Roca Afilada.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'move',
          value: 'WILLOWISP',
          note: 'Fuego Fatuo quema a los físicos que buscan aprovechar la falta de recuperación, a cambio de Roca Afilada.',
          replaces: 'STONEEDGE'
        }
      ]
    }
  ]
}

export default groudon
