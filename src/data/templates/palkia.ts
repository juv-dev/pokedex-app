import type { PokemonTemplateSet } from '../../lib/types'

const palkia: PokemonTemplateSet = {
  internalName: 'PALKIA',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRESSURE',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HYDROPUMP', 'DRACOMETEOR', 'FIREBLAST', 'THUNDERBOLT'],
      justification:
        'At.Esp 150 y Velocidad 100 con tipo Agua/Dragón, de cobertura ofensiva casi irresistible: solo la resisten de forma segura otros Agua/Dragón y algún Hada. Hidrobomba y Cometa Draco pican durísimo, Onda Ígnea rompe a los Acero y a las Hadas de Acero, y Rayo castiga a otros Agua y Volador. Vidasfera para no quedar encerrado en el movimiento equivocado. Miedosa para asegurar el matchup contra la base 100 y los +Velocidad base 90.',
      alternatives: [
        {
          slot: 'move',
          value: 'SPACIALREND',
          note: 'STAB de Dragón de 100 con 95 de precisión y crítico alto; más fiable que Hidrobomba y no baja el At.Esp como Cometa Draco.',
          replaces: 'HYDROPUMP'
        },
        {
          slot: 'nature',
          value: 'MODEST',
          note: 'Más potencia a cambio de ceder algunas carreras de Velocidad a la base 100.'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'PRESSURE',
      item: 'CHOICESPECS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SPACIALREND', 'HYDROPUMP', 'DRACOMETEOR', 'FIREBLAST'],
      justification:
        'Desgarro Espacial (100 de potencia, 95 de precisión, crítico alto) es un STAB de Dragón fiable que no baja el At.Esp, ideal para quedar encerrado sin perder potencia. Con Gafas Elección y Miedosa, Palkia rompe equipos enteros; Hidrobomba y Cometa Draco quedan para el pico máximo y Onda Ígnea para los Acero.',
      alternatives: [
        {
          slot: 'move',
          value: 'THUNDERBOLT',
          note: 'Cobertura a otros Agua y a Volador en lugar del segundo STAB de Fuego.',
          replaces: 'FIREBLAST'
        }
      ]
    }
  ]
}

export default palkia
