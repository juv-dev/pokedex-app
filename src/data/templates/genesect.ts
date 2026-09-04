import type { PokemonTemplateSet } from '../../lib/types'

const genesect: PokemonTemplateSet = {
  internalName: 'GENESECT',
  templates: [
    {
      role: 'pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'DOWNLOAD',
      item: 'CHOICESCARF',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['UTURN', 'ICEBEAM', 'THUNDERBOLT', 'FLAMETHROWER'],
      justification:
        'Ataque 120, Ataque Especial 120 y Velocidad 99 con Descarga, que al entrar compara las defensas del rival y sube el Ataque o el Ataque Especial según cuál sea más baja, hacen de Genesect un pivote ofensivo que llega reforzado a cada cambio. Pañuelo Elección sobre la base 99 lo lanza por delante de casi todo el entorno, e Ida y Vuelta convierte su entrada potenciada por Descarga en momentum inmediato mientras el rival duda. Rayo Hielo, Rayo y Lanzallamas son la cobertura que castiga a Tierra, Dragón, Volador, Agua, Acero y Planta. Miedosa para asegurar el tope de Velocidad con el Pañuelo; el IV de Ataque a 0 minimiza confusión y Juego Sucio dado que solo Ida y Vuelta es físico y su daño no es la prioridad.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Gafas Elección para un pico de daño mucho mayor si el equipo ya tiene control de velocidad.'
        },
        {
          slot: 'move',
          value: 'BUGBUZZ',
          note: 'Zumbido es la STAB de Bicho contra Psíquico, Siniestro y Planta.',
          replaces: 'FLAMETHROWER'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'DOWNLOAD',
      item: 'SHOCKDRIVE',
      nature: 'MODEST',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['TECHNOBLAST', 'ICEBEAM', 'FLAMETHROWER', 'UTURN'],
      justification:
        'Lectura de rompemuros: con la CrioROM equipada, Tecnoexplosión pasa a ser de tipo Eléctrico con 120 de potencia y 100 de precisión, un golpe de cobertura muy fuerte que se combina con la subida de Ataque Especial que casi siempre da Descarga. Rayo Hielo y Lanzallamas completan la cobertura e Ida y Vuelta mantiene la opción de pivoteo. Es viable y no óptima porque sin Pañuelo su Velocidad 99 lo deja empatado o por detrás de buena parte del entorno ofensivo.',
      alternatives: [
        {
          slot: 'move',
          value: 'BUGBUZZ',
          note: 'Zumbido como STAB de Bicho si se prefiere daño de tipo propio a la cobertura de Fuego.',
          replaces: 'FLAMETHROWER'
        }
      ]
    }
  ]
}

export default genesect
