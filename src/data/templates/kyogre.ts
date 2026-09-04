import type { PokemonTemplateSet } from '../../lib/types'

const kyogre: PokemonTemplateSet = {
  internalName: 'KYOGRE',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'DRIZZLE',
      item: 'CHOICESPECS',
      nature: 'MODEST',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['WATERSPOUT', 'ORIGINPULSE', 'THUNDER', 'ICEBEAM'],
      justification:
        'Llovizna instala lluvia al entrar, lo que sube un 50% los movimientos de Agua y deja Rayo con 100 de precisión. Con Ataque Especial 150 y Gafas Elección, Hidrochorro bajo lluvia partiendo de PS máximos es de los ataques más potentes del juego; Pulso Primigenio es el STAB fiable cuando Kyogre ya está mermado y su potencia cae, Rayo revienta a los otros Agua y a los Volador, y Rayo Hielo cae sobre Dragón y Planta. Modesta con inversión total en Ataque Especial y Velocidad. El plan es entrar sano y disparar Hidrochorro antes de recibir daño que reduzca su potencia.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Con Miedosa, el Pañuelo Elección convierte a Kyogre en revenge killer que frena ofensivas rápidas, a costa de la potencia de las Gafas.'
        },
        {
          slot: 'move',
          value: 'SURF',
          note: 'Surf mantiene la potencia aunque Kyogre esté dañado, útil si no se puede preservar la barra de PS para Hidrochorro.',
          replaces: 'WATERSPOUT'
        },
        {
          slot: 'move',
          value: 'CALMMIND',
          note: 'Con Restos en lugar de Gafas, Paz Mental sobre Rayo Hielo lo hace un wincon de lluvia más resistente.',
          replaces: 'ICEBEAM'
        }
      ]
    }
  ]
}

export default kyogre
