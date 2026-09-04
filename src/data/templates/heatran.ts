import type { PokemonTemplateSet } from '../../lib/types'

const heatran: PokemonTemplateSet = {
  internalName: 'HEATRAN',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'FLASHFIRE',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 0, 4, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'MAGMASTORM', 'EARTHPOWER', 'TAUNT'],
      justification:
        'At.Esp 130 con aguante 91/106/106 y tipo Fuego/Acero, que resiste diez tipos. Absorbe Fuego le da inmunidad total a ese tipo y potencia el propio un 50% al activarse, lo que convierte a Heatran en un cambio seguro frente a muchas ofensivas de Fuego. Coloca Trampa Rocas, Lava Tormenta atrapa a un rival de dos a cinco turnos y lo desgasta, Tierra Viva pega a otros Acero y Fuego, y Mofa frena a muros y colocadores rivales. Serena para reforzar el lado especial, que es por donde más se le busca.',
      alternatives: [
        {
          slot: 'move',
          value: 'LAVAPLUME',
          note: 'STAB de Fuego con 100 de precisión y quemadura fiable, a cambio del atrapado de Lava Tormenta.',
          replaces: 'MAGMASTORM'
        },
        {
          slot: 'move',
          value: 'WILLOWISP',
          note: 'Quema a los físicos que intenta parar, en lugar de frenar movimientos de estado.',
          replaces: 'TAUNT'
        },
        {
          slot: 'item',
          value: 'AIRBALLOON',
          note: 'Inmunidad temporal a Tierra para entrar con seguridad ante otros Heatran y ante Tierras.'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'FLASHFIRE',
      item: 'CHOICESPECS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['MAGMASTORM', 'EARTHPOWER', 'FLASHCANNON', 'FIREBLAST'],
      justification:
        'Con Gafas Elección, Lava Tormenta atrapa y castiga al switch-in mientras Tierra Viva, Foco Resplandor y Onda Ígnea cubren el resto. El tipo Fuego/Acero y Absorbe Fuego le dan multitud de entradas gratuitas antes de disparar. Miedosa para superar a la base 77 neutral y a varios rompemuros lentos.',
      alternatives: [
        {
          slot: 'nature',
          value: 'MODEST',
          note: 'Sube el pico de daño a cambio de perder las carreras de Velocidad contra la base 77 rival.'
        }
      ]
    }
  ]
}

export default heatran
