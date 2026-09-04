import type { PokemonTemplateSet } from '../../lib/types'

const manaphy: PokemonTemplateSet = {
  internalName: 'MANAPHY',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'HYDRATION',
      item: 'LEFTOVERS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['TAILGLOW', 'SURF', 'ICEBEAM', 'ENERGYBALL'],
      justification:
        'Base 100 en todo. Luz Endógena sube el At.Esp tres niveles de golpe, y con 100/100/100 de aguante Manaphy tiene turnos de sobra para usarla incluso ante ofensivas. Surf es el STAB fiable, Rayo Hielo y Bola Energía cubren a Dragón, Planta y a los Agua/Tierra que resisten el agua. Tras +3, un solo Manaphy barre equipos completos. Miedosa para superar a la base 100 rival y a los +Velocidad base 90.',
      alternatives: [
        {
          slot: 'move',
          value: 'DAZZLINGGLEAM',
          note: 'Cobertura a Dragón y Siniestro en lugar del castigo a Agua/Tierra de Bola Energía.',
          replaces: 'ENERGYBALL'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Más potencia inmediata tras Luz Endógena, a costa de PS por ataque.'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'HYDRATION',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 4, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['RAINDANCE', 'REST', 'TAILGLOW', 'SURF'],
      justification:
        'Hidratación cura cualquier problema de estado al final del turno si llueve, así que Danza Lluvia más Descanso es recuperación total sin quedar dormido: Manaphy se vuelve casi imposible de desgastar. Desde ese núcleo, Luz Endógena y Surf (potenciado un 50% por la lluvia) cierran la partida. Osada para maximizar el aguante mientras se recicla la lluvia.',
      alternatives: [
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Cobertura a Dragón si el equipo no necesita el segundo turno de preparación de lluvia.',
          replaces: 'RAINDANCE'
        }
      ]
    }
  ]
}

export default manaphy
