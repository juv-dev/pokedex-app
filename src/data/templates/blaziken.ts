import type { PokemonTemplateSet } from '../../lib/types'

const blaziken: PokemonTemplateSet = {
  internalName: 'BLAZIKEN',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SPEEDBOOST',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'FLAREBLITZ', 'HIGHJUMPKICK', 'PROTECT'],
      justification:
        'Impulso sube un nivel de Velocidad al final de cada turno, así que la base 80 de Blaziken deja de importar: tras uno o dos turnos supera a todo el tier. Protección es la pieza que ata el conjunto: gasta un turno seguro para encajar la primera subida de Velocidad sin recibir daño, y encadena con Danza Espada para llegar a +2 de Ataque. Con Ataque 120 base más Danza Espada, Envite Ígneo (120, STAB) y Patada Salto Alta (130, STAB) son golpes de cierre que pocos muros aguantan. Firme maximiza el daño porque Impulso ya resuelve la Velocidad. Vidasfera empuja los cálculos por encima de los umbrales de OHKO clave a cambio del 10% de PS por golpe.',
      alternatives: [
        {
          slot: 'move',
          value: 'CLOSECOMBAT',
          note: 'A Bocajarro elimina el riesgo de autolesión de Patada Salto Alta si falla, a cambio de bajarse Defensa y Def. Esp.',
          replaces: 'HIGHJUMPKICK'
        },
        {
          slot: 'move',
          value: 'THUNDERPUNCH',
          note: 'Puño Trueno castiga a los Agua y Vuelo voluminosos que frenan el doble STAB, cediendo la seguridad de Protección.',
          replaces: 'PROTECT'
        },
        {
          slot: 'move',
          value: 'STONEEDGE',
          note: 'Roca Afilada pega a los Vuelo y Fuego que resisten ambas STAB, útil si el equipo ya aporta control de velocidad y no necesita Protección.',
          replaces: 'PROTECT'
        },
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Alegre para acumular menos turnos de Impulso antes de superar a los Pañuelo Elección más rápidos, a costa del pico de daño.'
        }
      ]
    }
  ]
}

export default blaziken
