import type { PokemonTemplateSet } from '../../lib/types'

const gallade: PokemonTemplateSet = {
  internalName: 'GALLADE',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SHARPNESS',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'PSYCHOCUT', 'SACREDSWORD', 'NIGHTSLASH'],
      justification:
        'Atq 125 con Cortante, que sube un 50% la potencia de los movimientos cortantes: Psicocorte pasa de 70 a 105, Espada Santa de 90 a 135 (además ignora los cambios de estadística del rival) y Tajo Umbrío de 70 a 105, los tres con ratio de crítico alto. Danza Espada lleva el conjunto a rango de KO. Psicocorte y Espada Santa cubren la mayor parte del tier; Tajo Umbrío castiga a Fantasma y Psíquico que frenan la combinación. Impasible y Justiciero son reactivas; Cortante es proactiva y define el set. Firme porque a base 80 la Velocidad no gana carreras decisivas.',
      alternatives: [
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Empata con la base 80 rival y supera a los Adamant base 70, a cambio de potencia.'
        },
        {
          slot: 'move',
          value: 'LEAFBLADE',
          note: 'Rompe a Agua, Tierra y Roca; se cambia por Tajo Umbrío si el equipo ya cubre a los Fantasma.',
          replaces: 'NIGHTSLASH'
        }
      ]
    },
    {
      role: 'revenge-killer',
      isPrimary: false,
      confidence: 'viable',
      ability: 'SHARPNESS',
      item: 'CHOICESCARF',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['PSYCHOCUT', 'SACREDSWORD', 'NIGHTSLASH', 'LEAFBLADE'],
      justification:
        'Con Pañuelo Elección, Gallade supera a todo el tier ofensivo y revanchea con movimientos cortantes potenciados por Cortante: Psicocorte y Espada Santa de STAB, Tajo Umbrío y Hoja Aguda de cobertura. Espada Santa ignora subidas de Defensa, muy útil para castigar a un setup sweeper rival antes de que barra.',
      alternatives: [
        {
          slot: 'move',
          value: 'ZENHEADBUTT',
          note: 'Más potencia bruta de STAB sin el bonus de Cortante, a cambio de bajar a 90 de precisión.',
          replaces: 'PSYCHOCUT'
        }
      ]
    }
  ]
}

export default gallade
