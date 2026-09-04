import type { PokemonTemplateSet } from '../../lib/types'

const arceus: PokemonTemplateSet = {
  internalName: 'ARCEUS',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MULTITYPE',
      item: 'LEFTOVERS',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'EXTREMESPEED', 'EARTHQUAKE', 'SHADOWCLAW'],
      justification:
        'Base 120 en todas las estadísticas. Sin tabla equipada, Multitipo deja a Arceus como tipo Normal y libre para llevar Restos. Danza Espada más Veloc. Extrema (prioridad +2 desde 120 de Atq) es el clásico "Extreme Killer": barre equipos debilitados y revanchea sin depender de su Velocidad. Terremoto y Garra Umbría cubren a los Acero, Roca y Fantasma que frenan o son inmunes al Normal. Alegre para superar a los checks de Velocidad antes de montar la Danza.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Más potencia inmediata en Veloc. Extrema y la cobertura, a costa de PS por ataque.'
        },
        {
          slot: 'move',
          value: 'FLAREBLITZ',
          note: 'Rompe a Ferrothorn y a los Acero de Planta; se cambia por Garra Umbría si el equipo ya cubre a los Fantasma.',
          replaces: 'SHADOWCLAW'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'MULTITYPE',
      item: 'LEFTOVERS',
      nature: 'TIMID',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'JUDGMENT', 'RECOVER', 'ICEBEAM'],
      justification:
        'La otra cara de sus 120 uniformes: Paz Mental más Sentencia (tipo Normal sin tabla) y Recuperación lo hacen un wincon especial casi imposible de romper una vez montado, gracias a sus 120/120/120 de aguante. Rayo Hielo cubre a los Tierra y Dragón que resisten el Normal. Miedosa para preparar con seguridad ante ofensivas.',
      alternatives: [
        {
          slot: 'move',
          value: 'FIREBLAST',
          note: 'Cobertura a Acero como Ferrothorn en lugar del castigo a Tierra/Dragón de Rayo Hielo.',
          replaces: 'ICEBEAM'
        }
      ]
    }
  ]
}

export default arceus
