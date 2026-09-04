import type { PokemonTemplateSet } from '../../lib/types'

const miltank: PokemonTemplateSet = {
  internalName: 'MILTANK',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'THICKFAT',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['MILKDRINK', 'BODYSLAM', 'HEALBELL', 'EARTHQUAKE'],
      justification:
        'Miltank (PS 95 / Def 105 / Def. Esp. 70) es un tanque físico con recuperación fiable y buena Velocidad (100) para su rol. Sebo reduce a la mitad el daño de Fuego y Hielo, lo que parchea justo el flanco especial más flojo y le da entradas seguras contra dos de los tipos ofensivos más comunes. Batido restaura la mitad de los PS. Golpe Cuerpo hace daño constante y paraliza un 30%, control de estado que aprovecha su Velocidad para molestar a lo que entre. Cascabel Cura limpia estados de todo el equipo. Terremoto castiga a los Acero y Roca que la ven como cambio gratis. Reparto físico defensivo con Agitada. Restos añade la cura pasiva que le permite superar cadenas largas de daño.',
      alternatives: [
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Trampa Rocas le da función de colocador si el equipo carece de otra, cediendo la cobertura de Terremoto.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Onda Trueno reparte parálisis de forma más fiable que el efecto secundario de Golpe Cuerpo, a cambio de la cobertura de Tierra.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'ability',
          value: 'SAPSIPPER',
          note: 'Herbívoro da inmunidad al tipo Planta y sube el Ataque al recibirlo, útil si el equipo sufre con atacantes de planta más que con Fuego o Hielo.'
        },
        {
          slot: 'ability',
          value: 'SCRAPPY',
          note: 'Intrépido permite que Golpe Cuerpo alcance a los Fantasma y la vuelve inmune a Intimidación.'
        }
      ]
    }
  ]
}

export default miltank
