import type { PokemonTemplateSet } from '../../lib/types'

const mimikyu: PokemonTemplateSet = {
  internalName: 'MIMIKYU',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'DISGUISE',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'PLAYROUGH', 'SHADOWCLAW', 'SHADOWSNEAK'],
      justification:
        'Mimikyu en Añil V4.13 conserva Disfraz, que hace que el primer ataque recibido solo cuente 1/8 de sus PS máximos, y eso garantiza el turno de Danza Espada: puede subir Ataque al máximo sin riesgo de ser tumbado en el intento. Con Ataque 105 y dos STABs, Carantoña (90, Hada) pega a Siniestro, Dragón y Lucha mientras Cuchillada Sombría (70, Fantasma) cubre a los Fantasma y Psíquico que resisten Hada; Cuchilla Sombría (40, prioridad +1, STAB Fantasma) remata a barredores de mayor velocidad una vez roto el disfraz. Velocidad 96 con Alegre y 252 EV en Velocidad le permite adelantarse a la mayoría del tier tras montar. Reparto 4 PS / 252 At. / 252 Vel con Alegre y Vidasfera: el disfraz absorbe el primer golpe, y a partir de ahí cada ataque suyo es a máxima potencia. La Cuchilla Sombría asegura el remate aunque el disfraz ya haya caído.',
      alternatives: [
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Longevidad para un segundo ciclo de Danza Espada, aceptando menos potencia por golpe que con Vidasfera.'
        },
        {
          slot: 'move',
          value: 'DRAINPUNCH',
          note: 'Puño Drenaje da recuperación y golpea limpio a los Acero y Normal que resisten los STABs Hada y Fantasma, a cambio de perder Cuchilla Sombría.'
        },
        {
          slot: 'item',
          value: 'LUMBERRY',
          note: 'Baya Ziuela limpia la parálisis o el sueño que puedan romper el barrido tras montar, a cambio de la potencia de Vidasfera.'
        }
      ]
    }
  ]
}

export default mimikyu
