import type { PokemonTemplateSet } from '../../lib/types'

const seismitoad: PokemonTemplateSet = {
  internalName: 'SEISMITOAD',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SWIFTSWIM',
      item: 'LIFEORB',
      nature: 'MODEST',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['HYDROPUMP', 'EARTHPOWER', 'SLUDGEWAVE', 'ICEPUNCH'],
      justification:
        'Seismitoad es Agua/Tierra con 90 de Ataque Especial, 105 de PS y 74 de Velocidad, y su habilidad Nado Rápido duplica esa Velocidad bajo lluvia hasta cerca de 300 puntos efectivos, por lo que el rol es sweeper especial de equipo de lluvia. Hidrobomba es el STAB de agua de máxima potencia y la lluvia lo refuerza aún más; Tierra Viva es el segundo STAB que pega a Eléctrico, Veneno, Acero, Fuego y Roca e ignora la Defensa física. La combinación Agua más Tierra solo la resisten bien los Planta, y Onda Tóxica los golpea de lleno además de a las Hadas. Puño Hielo, aun saliendo del Ataque físico, cubre a Dragón, Volador y a los Planta más defensivos. Naturaleza Modesta porque la duplicación de Nado Rápido ya cubre la Velocidad, y Vidasfera para maximizar cada golpe sin encadenarse a un movimiento.',
      alternatives: [
        {
          slot: 'move',
          value: 'RAINDANCE',
          note: 'Hace el set autosuficiente activando su propia lluvia si el equipo no trae un invocador fijo.',
          replaces: 'ICEPUNCH'
        },
        {
          slot: 'ability',
          value: 'WATERABSORB',
          note: 'Con Restos y reparto a PS: pivote defensivo que recupera PS al recibir ataques de agua en lugar de barrer con lluvia.'
        },
        {
          slot: 'move',
          value: 'SCALD',
          note: 'STAB de agua fiable con posible quemadura para una versión menos arriesgada sin depender de Hidrobomba.',
          replaces: 'HYDROPUMP'
        }
      ]
    }
  ]
}

export default seismitoad
