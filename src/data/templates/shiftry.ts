import type { PokemonTemplateSet } from '../../lib/types'

const shiftry: PokemonTemplateSet = {
  internalName: 'SHIFTRY',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SHARPNESS',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'LEAFBLADE', 'NIGHTSLASH', 'SUCKERPUNCH'],
      justification:
        'Cortante potencia un 50% los movimientos cortantes, y Shiftry tiene dos STAB que se benefician: Hoja Aguda pasa de 90 a 135 y Tajo Umbrio de 70 a 105, una combinación de tipo Planta y Siniestro con muy poca resistencia compartida. Ataque 110 y Velocidad 90 lo sitúan como rompemuros que además puede limpiar tras una Danza Espada. Golpe Bajo, aunque no es cortante, aporta la prioridad que la Velocidad 90 no garantiza y remata a los frágiles veloces y a los psíquicos y fantasmas que intentan hacer revenge. Orbe Vida da el tramo extra de daño; Alegre maximiza la Velocidad para no depender solo de la prioridad. La habilidad es la oculta, pero está disponible en la especie.',
      alternatives: [
        {
          slot: 'ability',
          value: 'WINDRIDER',
          note: 'Para equipos de Viento Afín: inmunidad a movimientos de viento y subida de Ataque cuando el Viento Afín está activo.'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Potencia inmediata sin subir; obliga a cambiar Danza Espada por un cuarto ataque como Tajo Cruzado.'
        },
        {
          slot: 'move',
          value: 'XSCISSOR',
          note: 'Cobertura de Bicho potenciada por Cortante contra otros Planta y Siniestro.',
          replaces: 'SUCKERPUNCH'
        },
        {
          slot: 'nature',
          value: 'ADAMANT',
          note: 'Más daño si hay apoyo de Velocidad o se prioriza el golpe tras subir.'
        }
      ]
    }
  ]
}

export default shiftry
