import type { PokemonTemplateSet } from '../../lib/types'

const porygonz: PokemonTemplateSet = {
  internalName: 'PORYGONZ',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'DOWNLOAD',
      item: 'LIFEORB',
      nature: 'MODEST',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'TRIATTACK', 'THUNDERBOLT', 'ICEBEAM'],
      justification:
        'At.Esp 135. Descarga compara la Defensa y la Defensa Especial del rival al entrar y sube la ofensiva correspondiente: contra la mayoría del metajuego es un +1 At.Esp gratis, que Más Psique amplifica hasta +3. Tri Ataque es el STAB con triple estado posible (paraliza, quema o congela), y Rayo más Rayo Hielo forman la cobertura BoltBeam que solo frenan los Acero y algún muro especial. Vidasfera para el pico de daño. Modesta prioriza la potencia; a base 90 no es un sweeper de Velocidad.',
      alternatives: [
        {
          slot: 'move',
          value: 'DARKPULSE',
          note: 'Pega a los Fantasma, que son inmunes a Tri Ataque, a cambio del STAB con estados.',
          replaces: 'ICEBEAM'
        },
        {
          slot: 'nature',
          value: 'TIMID',
          note: 'Supera a la base 90 neutral y a varios rompemuros lentos, sacrificando algo de potencia.'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'ADAPTABILITY',
      item: 'CHOICESPECS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['TRIATTACK', 'THUNDERBOLT', 'ICEBEAM', 'DARKPULSE'],
      justification:
        'Adaptable eleva la bonificación de STAB a x2 en lugar de x1,5, así que Tri Ataque con Gafas Elección desde At.Esp 135 pega como un movimiento de unos 160 de potencia con precisión perfecta y triple estado. Rayo, Rayo Hielo y Pulso Umbrío cubren lo que resiste el Normal. Miedosa para no ser superado con facilidad al quedar encerrado.',
      alternatives: [
        {
          slot: 'move',
          value: 'TRICK',
          note: 'Pasa las Gafas Elección a un muro y lo inutiliza para el resto de la partida.',
          replaces: 'DARKPULSE'
        }
      ]
    }
  ]
}

export default porygonz
