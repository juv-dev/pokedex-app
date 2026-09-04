import type { PokemonTemplateSet } from '../../lib/types'

const infernape: PokemonTemplateSet = {
  internalName: 'INFERNAPE',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'IRONFIST',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CLOSECOMBAT', 'FLAREBLITZ', 'MACHPUNCH', 'GUNKSHOT'],
      justification:
        'Ataque y At. Esp. iguales (104) con Velocidad 108, pero la línea física aprovecha mejor el movepool gracias a Puño Férreo, que sube 20% los golpes de puño. Puño Certero (Mach Punch, 40 a ~48) da prioridad de tipo Lucha para rematar frágiles pese a que ya es rápido. A Bocajarro y Envite Ígneo son el STAB dual de 120 de potencia (Envite Ígneo se hiere 1/3, asumible en un sweeper de vida corta). Lanzamugre castiga a Hadas y a los Psíquico y Planta que frenan al STAB de Lucha. Vidasfera cierra los KO límite; Alegre evita perder la carrera de Velocidad. Mar Llamas es un plus por debajo de 1/3 de PS. Se prefieren cuatro ataques a Danza Espada porque su fragilidad (76/71/71) recompensa la presión inmediata antes que el turno de preparación.',
      alternatives: [
        {
          slot: 'move',
          value: 'SWORDSDANCE',
          note: 'Si el equipo limpia a las Hadas, +2 Ataque convierte a Infernape en un finalizador de partida.',
          replaces: 'GUNKSHOT'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Momentum de pivote contra el cambio en lugar de la cobertura de Veneno.',
          replaces: 'GUNKSHOT'
        },
        {
          slot: 'move',
          value: 'THUNDERPUNCH',
          note: 'Cobertura eléctrica potenciada por Puño Férreo para Agua y Volador.',
          replaces: 'GUNKSHOT'
        },
        {
          slot: 'move',
          value: 'STONEEDGE',
          note: 'Pega a Volador, Fuego y Bicho que resisten ambos STAB.',
          replaces: 'GUNKSHOT'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'BLAZE',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'FIREBLAST', 'FOCUSBLAST', 'VACUUMWAVE'],
      justification:
        'Golpe Bajo (Nasty Plot) lleva el At. Esp. 104 a rango de romper muros. Llamarada y A Bocajarro Especial (Focus Blast) son el STAB dual con cobertura casi perfecta; Onda Vacío da prioridad de tipo Lucha para rematar pese a los 108 de Velocidad. Mar Llamas potencia el STAB de Fuego 50% por debajo de 1/3 de PS, un extra cuando la Vidasfera ya lo desgastó. Miedosa para conservar la Velocidad ofensiva. Es "viable" y no "óptimo" porque el set físico con Puño Certero de Puño Férreo no depende de la precisión 70 de A Bocajarro Especial y explota mejor el movepool.',
      alternatives: [
        {
          slot: 'move',
          value: 'GRASSKNOT',
          note: 'Cobertura de Planta a los Agua y Tierra pesados en vez de la prioridad de Onda Vacío.',
          replaces: 'VACUUMWAVE'
        },
        {
          slot: 'move',
          value: 'FLAMETHROWER',
          note: 'STAB de Fuego fiable (90, 100 de precisión) si no querés la autobajada de Llamarada fallada.',
          replaces: 'FIREBLAST'
        }
      ]
    }
  ]
}

export default infernape
