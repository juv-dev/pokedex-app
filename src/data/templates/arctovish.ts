import type { PokemonTemplateSet } from '../../lib/types'

const arctovish: PokemonTemplateSet = {
  internalName: 'ARCTOVISH',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SLUSHRUSH',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FISHIOUSREND', 'ICICLECRASH', 'CRUNCH', 'FLIPTURN'],
      justification:
        'Arctovish en Añil V4.13 combina Agua/Hielo con Ataque 115 y Quitanieves, que duplica su Velocidad mientras haya nieve: de los 55 de base se dispara muy por encima de la mayoría del metajuego, y esa superioridad de velocidad convierte a Branquibocado en un STAB que casi siempre golpea primero y se duplica hasta 170 de potencia efectiva, un nivel de daño contundente para un rompemuros que entra puntual. Chuzos cubre con su STAB de Hielo a Planta, Tierra y Dragón que resisten Agua; Triturar alcanza a Fantasma y Psíquico; y Viraje recupera el momentum cuando la nieve esté por agotarse o el rival traiga un chequeo. La naturaleza Alegre prioriza maximizar el doble de velocidad del clima. Vidasfera potencia cada golpe a cambio del 30% de PS, un coste aceptable porque Arctovish se juega como intercambio de quiebre. Su debilidad doble Hielo (4x a Fuego, 2x a Lucha, Roca y Acero) es el tradeoff del rol y exige entrada calculada.',
      alternatives: [
        {
          slot: 'item',
          value: 'MUSCLEBAND',
          note: 'Cinta Fuerte potencia los movimientos físicos con menos coste de PS que Vidasfera, cediendo parte del pico de daño.'
        }
      ]
    }
  ]
}

export default arctovish
