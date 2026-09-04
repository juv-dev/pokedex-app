import type { PokemonTemplateSet } from '../../lib/types'

const vivillon: PokemonTemplateSet = {
  internalName: 'VIVILLON',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'COMPOUNDEYES',
      item: 'LIFEORB',
      nature: 'MODEST',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['QUIVERDANCE', 'HURRICANE', 'BUGBUZZ', 'SLEEPPOWDER'],
      justification:
        'Bicho/Volador con At. Esp. 105, Def.Esp 90 y Velocidad 89. Ojo Compuesto en Añil sube la precisión de sus movimientos un 30%, lo que deja Somnífero cerca del 98% y Vendaval en torno al 91% de acierto: un usuario de Danza Aleteo que además duerme de forma fiable a su check antes de barrer. Danza Aleteo sube At. Esp., Def.Esp y Velocidad un nivel; Vendaval es el STAB Volador de 110 y Zumbido el STAB Bicho de 90 con posible -1 Def.Esp. Modesta porque Danza Aleteo ya cubre la Velocidad y el pico de daño es lo que importa. Se asume el retroceso de Vidasfera al no tener Muro Mágico.',
      alternatives: [
        {
          slot: 'ability',
          value: 'TINTEDLENS',
          note: 'Los golpes poco eficaces hacen daño completo, así Vendaval y Zumbido quedan casi sin muro tras un Danza Aleteo, a cambio de la precisión de Somnífero y Vendaval.'
        },
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Si el equipo ya tiene control del sueño, Sustituto lo protege de estado y prioridad mientras sube.',
          replaces: 'SLEEPPOWDER'
        },
        {
          slot: 'move',
          value: 'ENERGYBALL',
          note: 'Cobertura de tipo Planta para Agua, Roca y Tierra, a cambio del STAB Bicho.',
          replaces: 'BUGBUZZ'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Longevidad sin retroceso si preferís varias oportunidades de setup.'
        }
      ]
    }
  ]
}

export default vivillon
