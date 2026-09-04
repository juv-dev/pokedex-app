import type { PokemonTemplateSet } from '../../lib/types'

const sawk: PokemonTemplateSet = {
  internalName: 'SAWK',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MOLDBREAKER',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CLOSECOMBAT', 'KNOCKOFF', 'STONEEDGE', 'ICEPUNCH'],
      justification:
        'Sawk tiene 125 de Ataque y 85 de Velocidad con defensas de 75/75/75, un rompemuros directo de un solo tipo ofensivo. Su habilidad oculta Rompemoldes anula las habilidades del rival al calcular daño y efectos, así que A Bocajarro atraviesa a los que dependen de Levitación, Robustez o reducciones por habilidad, y también evita ser amilanado. A Bocajarro es el STAB de Lucha de 120 de potencia; Desarme castiga a Fantasma y Psíquico que resisten Lucha y les quita el objeto; Roca Afilada cubre a Volador, Fuego, Hielo y Bicho; Puño Hielo pega a Volador, Dragón, Tierra y Planta. La Cinta Elección lleva su Ataque a valores que rompen equipos defensivos desde el turno uno, y naturaleza Firme prioriza esa potencia porque los 85 de Velocidad no alcanzan para barrer aunque sí para adelantarse a la mayoría de muros.',
      alternatives: [
        {
          slot: 'move',
          value: 'POISONJAB',
          note: 'Cobertura de veneno para las Hadas que frenan por completo a A Bocajarro.',
          replaces: 'ICEPUNCH'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Permite cambiar de movimiento turno a turno a cambio de menos potencia y del retroceso del objeto.'
        },
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Asegura adelantarse a la base 80 y a otros 85 neutros si se prefiere Velocidad sobre potencia bruta.'
        }
      ]
    }
  ]
}

export default sawk
