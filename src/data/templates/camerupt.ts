import type { PokemonTemplateSet } from '../../lib/types'

const camerupt: PokemonTemplateSet = {
  internalName: 'CAMERUPT',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SHEERFORCE',
      item: 'LIFEORB',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FIREBLAST', 'EARTHPOWER', 'FLASHCANNON', 'STEALTHROCK'],
      justification:
        'Sin Mega en Añil V4.13, este es el molde definitivo de Camerupt: Potencia Bruta sube un 30% los movimientos con efecto secundario y, además, anula el retroceso de Vidasfera en esos ataques, así que pega como un usuario de objeto de elección conservando los cuatro espacios. Llamarada y Tierra Viva son cobertura casi perfecta sobre un At. Esp. 105, y Foco Resplandor castiga a los Hada, Roca y Hielo. Velocidad 40 significa que siempre encaja el primer golpe, de modo que el último espacio guarda Trampa Rocas en vez de más cobertura. Modesta para el máximo poder inmediato; el reparto en PS ayuda a encajar ese primer golpe.',
      alternatives: [
        {
          slot: 'move',
          value: 'ANCIENTPOWER',
          note: 'Pega a los Fuego y Volador inmunes a Tierra, a costa de la cobertura de acero de Foco Resplandor.',
          replaces: 'FLASHCANNON'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Se compromete a un movimiento por aún más potencia, perdiendo la utilidad de Trampa Rocas.'
        },
        {
          slot: 'nature',
          value: 'QUIET',
          note: 'Bajo un Espacio Raro aliado, la Velocidad 40 pasa a ser una ventaja.'
        }
      ]
    }
  ]
}

export default camerupt
