import type { PokemonTemplateSet } from '../../lib/types'

const whiscash: PokemonTemplateSet = {
  internalName: 'WHISCASH',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'viable',
      ability: 'OBLIVIOUS',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONDANCE', 'LIQUIDATION', 'EARTHQUAKE', 'STONEEDGE'],
      justification:
        'Agua/Tierra solo tiene una debilidad (Planta, x4), así que Whiscash encuentra turnos de preparación tras sus 110 de PS. Danza Dragón corrige la floja Velocidad 60; Chorro de Agua (Liquidación) y Terremoto son doble STAB casi sin resistencias, y Roca Afilada cubre a las respuestas Agua/Volador y a los Planta inmunes a Tierra. Despiste bloquea Mofa e Intimidación, que de otro modo cortarían la barrida en seco. Firme con reparto voluminoso para sobrevivir a la prioridad tras una mejora.',
      alternatives: [
        {
          slot: 'move',
          value: 'WATERFALL',
          note: 'Retroceso y precisión perfecta frente a la bajada de Defensa de Liquidación.',
          replaces: 'LIQUIDATION'
        },
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Pega a Planta y Dragón en el cambio, a costa de la cobertura de Roca.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Poder inmediato si el equipo puede absorber el desgaste pasivo.'
        }
      ]
    }
  ]
}

export default whiscash
