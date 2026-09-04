import type { PokemonTemplateSet } from '../../lib/types'

const leafeon: PokemonTemplateSet = {
  internalName: 'LEAFEON',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'viable',
      ability: 'CHLOROPHYLL',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'LEAFBLADE', 'KNOCKOFF', 'XSCISSOR'],
      justification:
        'Atq 110 / Def 130 / Velocidad 95. Fuera del sol, tanto Clorofila como Defensa Hoja quedan inactivas, así que Leafeon depende de su Defensa 130 para montar Danza Espada ante atacantes físicos que no lo amenacen. Hoja Aguda es un STAB fiable con ratio de crítico alto; Desarme y Tijera X son la única cobertura real, y el conjunto lo frenan Acero, Fuego, Volador y Veneno, por eso se queda en Viable. Se elige Clorofila porque en un equipo de sol dobla la Velocidad y convierte este mismo set en un barredor genuino, mientras que Defensa Hoja no aporta nada útil sin sol.',
      alternatives: [
        {
          slot: 'move',
          value: 'SYNTHESIS',
          note: 'Recuperación para un uso más resistente, a cambio de la cobertura de Tijera X; se cura al máximo bajo sol.',
          replaces: 'XSCISSOR'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Ignora Trampa Rocas y Púas para entrar varias veces a preparar Danza Espada.'
        }
      ]
    }
  ]
}

export default leafeon
