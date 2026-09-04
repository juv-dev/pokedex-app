import type { PokemonTemplateSet } from '../../lib/types'

const serperior: PokemonTemplateSet = {
  internalName: 'SERPERIOR',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'CONTRARY',
      item: 'LEFTOVERS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['LEAFSTORM', 'PSYCHOBOOST', 'GIGADRAIN', 'LEECHSEED'],
      justification:
        'Velocidad 113 y tipo Planta/Psíquico. Respondón invierte la bajada de At.Esp tanto de Lluvia de Hojas como de Psicoataque, convirtiendo dos STAB de 130 y 140 de potencia en subidas de +2 cada vez que Serperior ataca. Gigadrenado da un STAB fiable con recuperación para el spam sin gastar el objeto, y Drenadoras desgasta a los muros que aguantan las dos coberturas. Importante: Paz Mental es anti-sinérgica con Respondón, ya que bajaría las estadísticas, por eso el conjunto solo se refuerza atacando. Lo frenan Siniestro, Acero, Fuego y Bicho.',
      alternatives: [
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Bloquea el estado y facilita acumular subidas de Respondón sin miedo a la predicción.',
          replaces: 'LEECHSEED'
        },
        {
          slot: 'move',
          value: 'DRAGONPULSE',
          note: 'Cobertura a Planta y Dragón, a cambio de la recuperación de Gigadrenado.',
          replaces: 'GIGADRAIN'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Más potencia inmediata mientras se acumulan las subidas, a costa de PS por ataque.'
        }
      ]
    }
  ]
}

export default serperior
