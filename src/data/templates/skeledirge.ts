import type { PokemonTemplateSet } from '../../lib/types'

const skeledirge: PokemonTemplateSet = {
  internalName: 'SKELEDIRGE',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'UNAWARE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['TORCHSONG', 'HEX', 'WILLOWISP', 'SLACKOFF'],
      justification:
        'Ignorante ("ignora los cambios tanto positivos como negativos en las características del rival, salvo la Velocidad") convierte a Skeledirge en el freno de los setup sweepers: un rival con Danza Espada o Paz Mental acumulada recibe el daño de sus estadísticas base. El set convierte esa supervivencia en condición de victoria con Canto Ardiente: 80 de potencia STAB que sube el Ataque Especial del usuario en cada uso, de modo que quedarse en Skeledirge es regalarle el acumulo. Fuego Fatuo quema al que no puede romper la pared y activa la duplicación de Infortunio (65→130 contra objetivos con problema de estado), y Relajo restaura la mitad de los PS máximos. Osada con PS y Defensa porque Defensa 100 es la pared y el Canto Ardiente se encarga del daño; la Velocidad 66 es irrelevante en un tanque.',
      alternatives: [
        {
          slot: 'item',
          value: 'THROATSPRAY',
          note: 'Espray Bucal suma un +1 de Ataque Especial extra en el primer Canto Ardiente (movimiento de sonido), para un arranque más ofensivo.'
        },
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Sustituto protege el acumulo de Canto Ardiente de estados y daño directo, a cambio de la sinergia de Infortunio con el estado del rival.',
          replaces: 'HEX'
        },
        {
          slot: 'move',
          value: 'YAWN',
          note: 'Bostezo fuerza cambios que Canto Ardiente castiga con +1 de acumulo, a cambio del daño residual y la activación de Infortunio de Fuego Fatuo.',
          replaces: 'WILLOWISP'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'UNAWARE',
      item: 'THROATSPRAY',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['TORCHSONG', 'SHADOWBALL', 'EARTHPOWER', 'WILLOWISP'],
      justification:
        'Versión ofensiva del mismo núcleo: el Espray Bucal se consume al primer Canto Ardiente (movimiento de sonido) y suma un +1 de Ataque Especial al +1 del propio movimiento, arrancando el acumulo con dos niveles. Bola Sombra es el STAB Fantasma con 20% de bajar la Defensa Especial rival, Tierra Viva cubre los Acero y Veneno que resisten Fuego, y Fuego Fatuo conserva la utilidad defensiva de Ignorante. Modesta con 252 de PS sostiene la entrada y los 252 de Ataque Especial con un perfil que sigue queriendo aguantar. Es viable y no óptimo porque sin la inversión máxima en Defensa, Skeledirge pierde parte de lo que hace único a Ignorante: frenar a los setup físicos.',
      alternatives: [
        {
          slot: 'move',
          value: 'OVERHEAT',
          note: 'Sofoco (130) da el golpe de apertura máximo en Fuego a cambio de bajar el acumulo ganado por Canto Ardiente.',
          replaces: 'WILLOWISP'
        }
      ]
    }
  ]
}

export default skeledirge