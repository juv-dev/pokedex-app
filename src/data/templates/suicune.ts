import type { PokemonTemplateSet } from '../../lib/types'

const suicune: PokemonTemplateSet = {
  internalName: 'SUICUNE',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRESSURE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'SCALD', 'REST', 'SLEEPTALK'],
      justification:
        'El perfil de Suicune (PS 100 / Def 115 / Def. Esp. 115) es el de un wincon defensivo, no el de un barredor rápido (Velocidad 85). Con Paz Mental subiendo At. Esp. y Def. Esp., cada turno lo vuelve más difícil de romper por el flanco especial mientras Escaldar acumula daño y quemaduras (30%) sobre los físicos que intenten pasarle por encima. Descanso y Sonámbulo le dan recuperación total sin depender de un objeto consumible y le permiten atacar aun dormido, cerrando el ciclo de estancamiento. Reparto físico defensivo con Osada porque Paz Mental ya cubre el lado especial y el flanco físico es el único por el que se lo puede quebrar antes de que acumule subidas. Presión gasta el doble de PP de los movimientos rivales, lo que ayuda a agotar a los muros que intenten aguantarlo en un duelo largo. Restos sostiene los PS entre Descansos.',
      alternatives: [
        {
          slot: 'ability',
          value: 'WATERABSORB',
          note: 'Absorbe Agua le da inmunidad total al tipo Agua y recupera 1/4 de PS al recibirlo, ideal si el equipo rival apoya el barrido en atacantes de agua.'
        },
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Rayo Hielo da cobertura contra Dragón, Planta y Tierra para una variante ofensiva sin Descanso, apoyada en Baya Atania.',
          replaces: 'SLEEPTALK'
        },
        {
          slot: 'item',
          value: 'CHESTOBERRY',
          note: 'Baya Atania despierta de inmediato tras un Descanso para una versión más ofensiva que renuncia a Sonámbulo.'
        },
        {
          slot: 'nature',
          value: 'CALM',
          note: 'Serena si el equipo necesita que Suicune frene atacantes especiales concretos desde el turno uno antes de acumular Paz Mental.'
        }
      ]
    }
  ]
}

export default suicune
