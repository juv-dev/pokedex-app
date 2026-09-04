import type { PokemonTemplateSet } from '../../lib/types'

const azelf: PokemonTemplateSet = {
  internalName: 'AZELF',
  templates: [
    {
      role: 'hazard-lead',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LEVITATE',
      item: 'FOCUSSASH',
      nature: 'JOLLY',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'TAUNT', 'KNOCKOFF', 'EXPLOSION'],
      justification:
        'Velocidad 115 y Atq 125 con Levitación. Como lead suicida: Mofa antes que nada frena trampas, setup y recuperación del rival; Trampa Rocas queda colocada; Desarme mete chip y quita el objeto al lead enemigo; y Autodestrucción (250 de potencia) se lleva por delante a la siguiente amenaza. Banda Aguante asegura ejecutar el plan completo incluso contra un lead más rápido o más fuerte. Alegre para ganar el mayor número de duelos de Velocidad.',
      alternatives: [
        {
          slot: 'move',
          value: 'PSYCHIC',
          note: 'Daño STAB inmediato si se prefiere presión ofensiva sobre la utilidad de quitar objeto.',
          replaces: 'KNOCKOFF'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'LEVITATE',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'PSYCHIC', 'FIREBLAST', 'THUNDERBOLT'],
      justification:
        'At.Esp 125, igual de alto que el Atq, y Velocidad 115. Con Más Psique y Miedosa, Psíquico de STAB más Onda Ígnea y Rayo forman una cobertura casi perfecta tras el +2, y la Velocidad alta le deja atacar antes que la mayoría del tier. Vidasfera para el pico de daño; con Def.Esp 70 el plan es preparar y barrer, no aguantar.',
      alternatives: [
        {
          slot: 'move',
          value: 'PSYSHOCK',
          note: 'Golpea la Defensa física del rival, rompiendo muros especiales como Blissey.',
          replaces: 'PSYCHIC'
        }
      ]
    }
  ]
}

export default azelf
