import type { PokemonTemplateSet } from '../../lib/types'

const arctozolt: PokemonTemplateSet = {
  internalName: 'ARCTOZOLT',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SLUSHRUSH',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BOLTBEAK', 'ICICLECRASH', 'BULLDOZE', 'STONEEDGE'],
      justification:
        'Arctozolt en Añil V4.13 tiene Ataque 115 y Velocidad 55, y su sinergia de Añil es Quitanieves (oculta): duplica la Velocidad bajo granizo y lo hace inmune al daño del clima. Con la velocidad duplicada, Electropico (85, que se dobla si el rival no actuó aún) pega primero y castiga a casi todo; Chuzos (STAB Hielo físico de 85) cubre a Volador, Tierra y Planta que resisten Eléctrico; Terratemblor (60 Tierra) golpea a otros Eléctricos y la Roca Afilada (100) completa frente a Fuego, Volador y Bicho. Natura Alegre con 252 PS / 252 At. explota la duplicación de velocidad y compensa su fragilidad (PS 90). La Vidasfera da el 30% extra a un Doble tipo Eléctrico/Hielo que entra sobre el granizo, duplica velocidad, revienta con Electropico y no se concibe para aguantar de pie: es un golpeador de clima puro.',
      alternatives: [
        {
          slot: 'ability',
          value: 'VOLTABSORB',
          note: 'Absorbe Elec. convierte daño Eléctrico en curación para pivotes, sin la duplicación de velocidad del clima.'
        },
        {
          slot: 'move',
          value: 'ICESPINNER',
          note: 'Pirueta Helada (STAB Hielo de precisión 100) además elimina el campo del rival, cediendo la cobertura de Roca Afilada.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'move',
          value: 'TRIPLEAXEL',
          note: 'Triple Axel (3 golpes de 20/40/60) castiga sustitutos y robustez con precisión 90, alternativa física de Hielo a Chuzos.'
        }
      ]
    }
  ]
}

export default arctozolt