import type { PokemonTemplateSet } from '../../lib/types'

const breloom: PokemonTemplateSet = {
  internalName: 'BRELOOM',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TECHNICIAN',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SPORE', 'BULLETSEED', 'MACHPUNCH', 'SWORDSDANCE'],
      justification:
        'Ataque 130 con Velocidad 70 marca a un rompemuros físico que necesita compensar su falta de velocidad, y esa compensación es Espora: sueño con 100 de precisión que neutraliza un objetivo por completo. Experto multiplica por 1,5 los movimientos de 60 o menos de potencia, lo que convierte a Disparo Demora (25 por golpe, de dos a cinco impactos) en un STAB de tipo Planta de potencia efectiva muy alta que además rompe Sustituto y Banda Focus, y a Ultrapuño (40, prioridad +1) en un golpe de prioridad de 60 efectivos que salva la Velocidad. Danza Espada aprovecha el turno que regala Espora para disparar el Ataque a un rango que rompe muros neutrales. Orbe Vida da el empujón final; Alegre asegura adelantar a la mayor cantidad posible de objetivos antes de dormir o golpear.',
      alternatives: [
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Garantiza colocar Espora aún contra un lead más rápido o más fuerte.'
        },
        {
          slot: 'ability',
          value: 'POISONHEAL',
          note: 'Cambia a un set de Orbe Toxico con Sustituto y Puno Certero que se cura 1/8 por turno en vez del set de Experto.'
        },
        {
          slot: 'move',
          value: 'SEEDBOMB',
          note: 'STAB de Planta de daño fijo sin la varianza de los impactos múltiples, a costa de romper peor el Sustituto.',
          replaces: 'BULLETSEED'
        },
        {
          slot: 'move',
          value: 'ROCKTOMB',
          note: 'Con Experto queda en 90 y baja la Velocidad; cobertura para Volador y Fuego.',
          replaces: 'SWORDSDANCE'
        }
      ]
    }
  ]
}

export default breloom
