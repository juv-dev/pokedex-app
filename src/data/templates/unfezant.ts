import type { PokemonTemplateSet } from '../../lib/types'

const unfezant: PokemonTemplateSet = {
  internalName: 'UNFEZANT',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SUPERLUCK',
      item: 'HEAVYDUTYBOOTS',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['AIRSLASH', 'HYPERVOICE', 'HEATWAVE', 'ROOST'],
      justification:
        'El rebalanceo de Añil da a Unfezant 115 de Ataque Especial junto con 93 de Velocidad y 80/80 de defensas físicas, convirtiéndolo en un atacante especial y no en el pájaro físico habitual. Aire Afilado es el STAB volador fiable de 80 de potencia con opción de amedrentar; Vozarrón es el STAB normal especial que pega neutro a lo que resiste Volador. Onda Ígnea rompe a los Acero, Roca y Bicho que frenan a los dos STAB. Vuelo restaura la mitad de los PS y le da longevidad para atacar varias veces. Botas Gruesas son casi obligadas en un tipo Volador que perdería un 25 por ciento de PS por Trampa Rocas en cada reentrada. Afortunado sube el índice de crítico en uno, un extra modesto pero es la única de sus dos habilidades con impacto competitivo, ya que Rivalidad es condicional al género del rival.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Sube mucho la potencia y encierra en un movimiento; pide reemplazar Vuelo por un cuarto ataque como Ida y Vuelta.'
        },
        {
          slot: 'move',
          value: 'HURRICANE',
          note: 'STAB volador de 110 de potencia con posible confusión y precisión perfecta bajo lluvia, a costa de un 70 de precisión base.',
          replaces: 'AIRSLASH'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Cede el turno a un compañero y mantiene el momentum si se prefiere pivotar antes que recuperar.',
          replaces: 'ROOST'
        }
      ]
    }
  ]
}

export default unfezant
