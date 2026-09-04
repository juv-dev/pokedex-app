import type { PokemonTemplateSet } from '../../lib/types'

const electivire: PokemonTemplateSet = {
  internalName: 'ELECTIVIRE',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MOTORDRIVE',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['WILDCHARGE', 'EARTHQUAKE', 'ICEPUNCH', 'KNOCKOFF'],
      justification:
        'Atq 123 y Velocidad 95 con Electromotor, que da inmunidad total a Eléctrico y además sube un nivel la Velocidad si le lanzan un ataque de ese tipo: Electivire entra gratis a otros Eléctricos y sale reforzado. Carga Salvaje es el STAB físico; Terremoto, Puño Hielo y Desarme forman una cobertura casi perfecta que solo frenan de forma segura Ferrothorn y algún Tierra/Roca físico. Vidasfera para no quedar encerrado en el movimiento equivocado. Firme sobre Alegre porque a Velocidad 95 no gana las carreras clave de todos modos y el rol es de rompemuros.',
      alternatives: [
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Empata o supera a la base 95 rival y a los +Velocidad base 80, a cambio de algo de potencia.'
        },
        {
          slot: 'move',
          value: 'CROSSCHOP',
          note: 'Rompe a Normal y Acero con más contundencia que Desarme, a cambio de la utilidad de quitar objeto y de 20 puntos de precisión.',
          replaces: 'KNOCKOFF'
        }
      ]
    },
    {
      role: 'revenge-killer',
      isPrimary: false,
      confidence: 'viable',
      ability: 'MOTORDRIVE',
      item: 'CHOICESCARF',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['WILDCHARGE', 'EARTHQUAKE', 'ICEPUNCH', 'VOLTSWITCH'],
      justification:
        'Con Pañuelo Elección, Electivire pasa de base 95 a superar a todo el tier ofensivo y revanchea con Carga Salvaje o la cobertura de Terremoto y Puño Hielo. Voltiocambio mantiene el momentum cuando el rival trae un check, y Electromotor sigue dando la lectura segura frente a Eléctricos y a otro Voltiocambio. Alegre es obligatoria en el set de Pañuelo.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cambia el control de Velocidad por un pico de daño de rompemuros puro.'
        }
      ]
    }
  ]
}

export default electivire
