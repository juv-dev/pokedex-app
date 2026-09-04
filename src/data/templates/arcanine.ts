import type { PokemonTemplateSet } from '../../lib/types'

const arcanine: PokemonTemplateSet = {
  internalName: 'ARCANINE',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'INTIMIDATE',
      item: 'HEAVYDUTYBOOTS',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FLAREBLITZ', 'EXTREMESPEED', 'CLOSECOMBAT', 'MORNINGSUN'],
      justification:
        'Arcanine en Añil V4.13 es un atacante resistente de manual: PS 90 / Def 80 / Def. Esp. 80 más Intimidación, que baja el Ataque del rival al entrar, le permiten alternar entradas durante toda la partida, y Sol Matinal le da recuperación propia real, algo poco común en un ofensivo de tipo Fuego. Envite Ígneo es el STAB de máxima potencia; Velocidad Extrema, con prioridad +2, remata amenazas frágiles más rápidas y compensa la Velocidad 95; A Bocajarro cubre a Roca, Acero, Normal y Siniestro que resisten o aguantan el Fuego. Botas Gruesas son clave: un pivote de tipo Fuego que entra repetidamente no puede perder la mitad de sus PS a Trampa Rocas cada vez. Naturaleza Firme y reparto en PS y Ataque para maximizar el daño de Envite Ígneo y A Bocajarro mientras la habilidad y Sol Matinal sostienen la longevidad; la Velocidad 95 no alcanza un umbral decisivo que justifique una naturaleza ofensiva de Velocidad.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera sube todos los golpes, incluido Velocidad Extrema para revenge kills, a cambio de la inmunidad a Trampa Rocas que mantiene sano al pivote con Intimidación.'
        },
        {
          slot: 'move',
          value: 'WILLOWISP',
          note: 'Fuego Fatuo convierte a Arcanine en un chequeo físico que quema a lo que entra, cediendo la auto-recuperación.',
          replaces: 'MORNINGSUN'
        },
        {
          slot: 'move',
          value: 'WILDCHARGE',
          note: 'Voltio Cruel golpea a Agua y Volador voluminosos como Gyarados, Pelipper o Mantine que muran Fuego y Lucha, añadiendo retroceso.',
          replaces: 'CLOSECOMBAT'
        },
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Alegre supera a otros base 95 y a los base 100 neutros para presionarlos antes de que actúen, a cambio de potencia en Envite Ígneo.'
        }
      ]
    }
  ]
}

export default arcanine
