import type { PokemonTemplateSet } from '../../lib/types'

const lopunny: PokemonTemplateSet = {
  internalName: 'LOPUNNY',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'viable',
      ability: 'SCRAPPY',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FAKEOUT', 'HIGHJUMPKICK', 'RETURN', 'ICEPUNCH'],
      justification:
        'Sin Mega, Lopunny es un atacante físico de Ataque 106 y Velocidad 105. Intrépido hace que Normal y Lucha alcancen a los Fantasma, de modo que Retroceso más Patada Salto Alta no tienen ningún tipo que las frene por inmunidad. Camorrista potencia un 20% las patadas: Patada Salto Alta rinde como 156 de potencia efectiva, lo que la vuelve su golpe principal pese al riesgo de fallo. Sorpresa da prioridad +3 para picar, romper focos y rematar. Puño Hielo cubre Volador, Tierra, Dragón y Planta. Al no tener más mejora que Ejercicio, Lopunny rinde como presencia ofensiva inmediata y no como sweeper con setup, de ahí Vidasfera y Alegre para el tope de Velocidad. Perfil viable, no óptimo, por la falta de longevidad y de un movimiento de mejora fiable.',
      alternatives: [
        {
          slot: 'move',
          value: 'CLOSECOMBAT',
          note: 'STAB de Lucha seguro: sin retroceso ni riesgo de fallo, a cambio de la potencia extra de Camorrista sobre Patada Salto Alta.',
          replaces: 'HIGHJUMPKICK'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Pivota y conserva el momentum si el equipo prefiere no comprometerse con Sorpresa.',
          replaces: 'FAKEOUT'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Máxima potencia inmediata; obliga a jugar tres ataques más Ida y Vuelta y renuncia a repetir Sorpresa.'
        }
      ]
    }
  ]
}

export default lopunny
