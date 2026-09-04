import type { PokemonTemplateSet } from '../../lib/types'

const flygon: PokemonTemplateSet = {
  internalName: 'FLYGON',
  templates: [
    {
      role: 'pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LEVITATE',
      item: 'CHOICESCARF',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['EARTHQUAKE', 'DRAGONCLAW', 'UTURN', 'FIREPUNCH'],
      justification:
        'Velocidad 110 más Banda Elección hace de Flygon uno de los revenge killers más rápidos del tier, y Levitación le regala una inmunidad a Tierra para entrar gratis. Sus ofensivas de 100/100 son medianas, así que su trabajo es control de velocidad y desgaste, no romper: Ida y Vuelta mantiene el momentum y castiga cambios, Terremoto es el STAB fiable, Garra Dragón resuelve el espejo con otros Dragones sin quedar encerrado en la confusión de Enfado, y Puño Fuego pega a los Acero, Planta y Hielo (líneas tipo Ferrothorn o Kartana). Alegre para asegurar el tope de Velocidad con la Scarf.',
      alternatives: [
        {
          slot: 'move',
          value: 'OUTRAGE',
          note: 'Más potencia de STAB Dragón si se asume el bloqueo y la confusión posterior.',
          replaces: 'DRAGONCLAW'
        },
        {
          slot: 'move',
          value: 'STONEEDGE',
          note: 'Pega a los Volador y Fuego que entran contra Terremoto y Puño Fuego.',
          replaces: 'FIREPUNCH'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cambia el escalón de velocidad por poder de ruptura, con Ida y Vuelta evitando que quede como peso muerto.'
        }
      ]
    }
  ]
}

export default flygon
