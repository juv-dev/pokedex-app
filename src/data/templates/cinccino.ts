import type { PokemonTemplateSet } from '../../lib/types'

const cinccino: PokemonTemplateSet = {
  internalName: 'CINCCINO',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SKILLLINK',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['TAILSLAP', 'BULLETSEED', 'ROCKBLAST', 'KNOCKOFF'],
      justification:
        'Encadenado obliga a que los movimientos de golpes múltiples peguen siempre el máximo de veces, así que Bofetón Lodo, Bala Semilla y Pedrada quedan fijos en cinco impactos: 125 de potencia efectiva cada uno, y además rompen Sustituto, Robustez y Banda Aguante y no fallan a mitad de secuencia. Con Ataque 95 y Velocidad 115 base, más la Vidasfera, eso es un limpiador rápido con cobertura repartida: Bala Semilla pega a Agua, Tierra y Roca; Pedrada a Fuego, Hielo, Volador y Bicho; Bofetón Lodo es el STAB. Desarme es el cuarto hueco imprescindible porque los tipo Fantasma son inmunes al STAB Normal y podrían entrar gratis; de paso quita el objeto. El perfil 75/60/60 es frágil, así que actúa como limpiador de final de partida, no como pivote.',
      alternatives: [
        {
          slot: 'item',
          value: 'SILKSCARF',
          note: 'Refuerza solo Bofetón Lodo sin el retroceso de la Vidasfera; alarga la vida útil del limpiador a cambio de potencia en los golpes de cobertura.'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Convierte a Cinccino en pivote ofensivo que mantiene el ritmo, a cambio de dejar vía libre a los Fantasma.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'move',
          value: 'TRIPLEAXEL',
          note: 'Cobertura Hielo fija de tres golpes contra Volador, Tierra, Dragón y Planta, en lugar del alcance de Pedrada.',
          replaces: 'ROCKBLAST'
        },
        {
          slot: 'item',
          value: 'KINGSROCK',
          note: 'Cada uno de los cinco impactos puede amedrentar por separado: cadena de flinch como plan alternativo de presión.'
        }
      ]
    }
  ]
}

export default cinccino
