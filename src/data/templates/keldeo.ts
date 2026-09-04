import type { PokemonTemplateSet } from '../../lib/types'

const keldeo: PokemonTemplateSet = {
  internalName: 'KELDEO',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'JUSTIFIED',
      item: 'LEFTOVERS',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['CALMMIND', 'SECRETSWORD', 'HYDROPUMP', 'VACUUMWAVE'],
      justification:
        'Ataque Especial 129 y Velocidad 108 con 91/90/90 de físico sostienen un plan de Paz Mental sólido. Lo que hace único a Keldeo es Sable Místico: es un ataque de tipo Lucha especial que golpea contra la Defensa física del objetivo, así que la dupla Sable Místico más Hidrobomba pega desde el lado especial pero reparte el daño entre ambas defensas, y en conjunto solo la resisten unos pocos tipos. Onda Vacío da prioridad para rematar frágiles rápidos y para no depender de la Velocidad tras varias mejoras del rival. Justiciero le regala un nivel de Ataque si le alcanza un movimiento de tipo Siniestro, lo que castiga a quien intente frenarlo con esa cobertura. Restos alarga el ciclo de Paz Mental; Miedosa con IV de Ataque a 0 para maximizar la Velocidad.',
      alternatives: [
        {
          slot: 'move',
          value: 'SCALD',
          note: 'Escaldar cambia potencia por precisión perfecta y opción de quemadura que ablanda a los físicos.',
          replaces: 'HYDROPUMP'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera para un pico de daño mayor renunciando a la regeneración pasiva de Restos.'
        },
        {
          slot: 'move',
          value: 'FLIPTURN',
          note: 'Voltiocambio acuático da momentum de pivoteo si el equipo prefiere no comprometerse a barrer.',
          replaces: 'VACUUMWAVE'
        }
      ]
    },
    {
      role: 'revenge-killer',
      isPrimary: false,
      confidence: 'viable',
      ability: 'JUSTIFIED',
      item: 'CHOICESCARF',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['HYDROPUMP', 'SECRETSWORD', 'VACUUMWAVE', 'ICYWIND'],
      justification:
        'Pañuelo Elección sobre base 108 de Velocidad lo convierte en un revenge killer que adelanta a casi todo el entorno no prioritario. Hidrobomba y Sable Místico mantienen la cobertura casi perfecta de la especie, Onda Vacío remata con prioridad y Viento Hielo permite frenar a un rival más rápido bajándole la Velocidad al entrar. Es viable frente al set de Paz Mental cuando el equipo necesita control de velocidad más que un ganador de partidas.',
      alternatives: [
        {
          slot: 'move',
          value: 'SCALD',
          note: 'Escaldar por fiabilidad si Hidrobomba falla cálculos en un rol de revenge.',
          replaces: 'HYDROPUMP'
        }
      ]
    }
  ]
}

export default keldeo
