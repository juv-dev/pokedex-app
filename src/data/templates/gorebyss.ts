import type { PokemonTemplateSet } from '../../lib/types'

const gorebyss: PokemonTemplateSet = {
  internalName: 'GOREBYSS',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'viable',
      ability: 'SWIFTSWIM',
      item: 'WHITEHERB',
      nature: 'MODEST',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHELLSMASH', 'HYDROPUMP', 'ICEBEAM', 'SIGNALBEAM'],
      justification:
        'Mismo plan que Huntail pero por el flanco especial: Rompecoraza deja el Ataque Especial 114 en niveles imposibles de resistir para un muro y duplica la Velocidad 52. Hidrobomba es el STAB de máxima potencia, y Rayo Hielo y Rayo Señal cubren Dragón, Planta, Volador, Tierra y Psíquico. Hierba Blanca restaura las defensas bajadas por Rompecoraza en el mismo turno. Modesta sobre Miedosa porque la subida x2 de Velocidad ya basta para superar al formato y la potencia extra asegura los KO. Nado Rápido no aporta al plan de Rompecoraza pero habilita una variante alternativa de barredor bajo lluvia sin gastar el turno de setup.',
      alternatives: [
        {
          slot: 'nature',
          value: 'TIMID',
          note: 'Miedosa para ganar los espejos de Rompecoraza y no depender de la subida en las carreras a +2.'
        },
        {
          slot: 'move',
          value: 'SCALD',
          note: 'Escaldar da un STAB fiable con quemadura si se prefiere consistencia a la potencia de Hidrobomba.',
          replaces: 'HYDROPUMP'
        },
        {
          slot: 'move',
          value: 'DRAININGKISS',
          note: 'Beso Drenaje recupera un 75% del daño para mitigar la fragilidad tras el setup, a cambio de la cobertura Hielo.',
          replaces: 'ICEBEAM'
        }
      ]
    }
  ]
}

export default gorebyss
