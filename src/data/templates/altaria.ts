import type { PokemonTemplateSet } from '../../lib/types'

const altaria: PokemonTemplateSet = {
  internalName: 'ALTARIA',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PIXILATE',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONDANCE', 'RETURN', 'ROOST', 'EARTHQUAKE'],
      justification:
        'En Añil V4.13 Altaria tiene Piel Feérica sin necesidad de piedra activadora: Retorno pasa a ser de tipo Hada con un 20% extra de potencia. No lleva STAB porque Altaria es Volador/Dragón, pero queda como un golpe neutro casi perfecto que además pega de lleno a Dragón, Siniestro y Lucha. Su volumen 75/90/95 más Recuperación (Roost) lo convierten en una condición de victoria difícil de tumbar. Danza Dragón corrige la Velocidad 80, que es su único punto flojo, y Terremoto castiga a los Acero, Veneno y Fuego que frenan al tipo Hada. Restos para aguantar los turnos de preparación. Firme porque el volumen le permite mejorar varias veces y el daño importa más que llegar antes.',
      alternatives: [
        {
          slot: 'move',
          value: 'BODYSLAM',
          note: 'También se convierte en Hada por Piel Feérica; cambia potencia por un 30% de parálisis que ayuda a montar la barrida.',
          replaces: 'RETURN'
        },
        {
          slot: 'move',
          value: 'DRAGONCLAW',
          note: 'STAB de Dragón real para el espejo contra otros Altaria y Dragones que no temen a Terremoto.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Supera a la capa de 100 de Velocidad tras una sola Danza Dragón, sacrificando potencia.'
        }
      ]
    }
  ]
}

export default altaria
