import type { PokemonTemplateSet } from '../../lib/types'

const darmanitan: PokemonTemplateSet = {
  internalName: 'DARMANITAN',
  templates: [
    {
      role: 'revenge-killer',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SHEERFORCE',
      item: 'CHOICESCARF',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FLAREBLITZ', 'EARTHQUAKE', 'ROCKSLIDE', 'UTURN'],
      justification:
        'Ataque 140 base es tan alto que Darmanitan no necesita Cinta para romper: el Pañuelo Elección soluciona su único problema real, una Velocidad 95 que se queda a mitad de tabla. Con Alegre y Pañuelo pasa a revenge killear al metajuego ofensivo. Potencia Bruta sube un 30% los movimientos con efecto secundario y les anula el efecto, así que Envite Ígneo y Pedrada ganan potencia (el retroceso de Envite Ígneo se mantiene porque no es un efecto secundario). Terremoto es la cobertura perfecta para Roca, Acero y Fuego rivales, y Ida y Vuelta aprovecha el bloqueo de movimiento para salir con ventaja en vez de comerse un cambio. Modo Daruma es una habilidad reactiva de nicho; Potencia Bruta es la que da valor constante.',
      alternatives: [
        {
          slot: 'move',
          value: 'STONEEDGE',
          note: 'Más potencia que Pedrada contra Volador, a costa de perder el impulso de Potencia Bruta y bajar a 80 de precisión.',
          replaces: 'ROCKSLIDE'
        },
        {
          slot: 'move',
          value: 'SUPERPOWER',
          note: 'Golpe Lucha para Normal y Acero voluminosos; reduce defensas del usuario tras el impacto.',
          replaces: 'UTURN'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Cambia el control de Velocidad por flexibilidad de objetivo; Potencia Bruta anula el retroceso de la Vidasfera en los movimientos que potencia.'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'SHEERFORCE',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FLAREBLITZ', 'EARTHQUAKE', 'ROCKSLIDE', 'UTURN'],
      justification:
        'Misma base ofensiva enfocada a romper en lugar de a revenge killear: Cinta Elección más Firme y Potencia Bruta llevan Envite Ígneo a números que atraviesan muros neutrales que normalmente frenarían un ataque de Fuego. Terremoto y Pedrada son la cobertura y Ida y Vuelta permite salir tras forzar un cambio. Es la versión secundaria porque sin el Pañuelo, Velocidad 95 lo deja expuesto a la ofensiva rápida y al recoil de Envite Ígneo sumado a la prioridad enemiga, así que rinde mejor cuando el equipo ya tiene control de Velocidad.',
      alternatives: [
        {
          slot: 'move',
          value: 'ZENHEADBUTT',
          note: 'STAB Psíquico potenciado por Potencia Bruta contra Lucha y Veneno; útil si Terremoto ya cubre a los Acero del equipo rival.',
          replaces: 'ROCKSLIDE'
        }
      ]
    }
  ]
}

export default darmanitan
