import type { PokemonTemplateSet } from '../../lib/types'

const vikavolt: PokemonTemplateSet = {
  internalName: 'VIKAVOLT',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LEVITATE',
      item: 'CHOICESPECS',
      nature: 'QUIET',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['THUNDERBOLT', 'BUGBUZZ', 'ENERGYBALL', 'VOLTSWITCH'],
      justification:
        'Vikavolt es el rompemuros especial más potente del tramo: At.Esp 145 con PS 77 / Def 90 y Levitación, que le da inmunidad completa a Tierra (una de las coberturas más comunes) y un buen turno de entrada libre. Con Velocidad 43, no corre: es un abusador natural de Espacio Raro, por eso la naturaleza Mansa sube At.Esp. y baja Velocidad y el IV de Velocidad se deja a 0 para moverse primero bajo Espacio Raro. Voltiocambio (STAB Eléctrico) es el golpe de rotación que cede el turno si se sale de Espacio Raro; Rayo (90) y Zumbido (90, STAB Bicho) cubren la doble STAB, y Energibola golpea a Tierra y Roca que resisten Eléctrico. Gafas Elección maximizan el poder de un set puramente ofensivo y Levitación compensa la única debilidad defensiva grave. Reparto 252 At.Esp / 252 PS para aguantar la entrada de Trampa o un golpe y devolver el daño máximo.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera permite alternar entre Voltiocambio y los ataques sin quedar bloqueado en un movimiento, a cambio de perder el multiplicador de Gafas Elección.'
        },
        {
          slot: 'move',
          value: 'STICKYWEB',
          note: 'Red Viscosa en el campo rival al entrar es apoyo puro que complementa la lentitud del equipo en rotación, renunciando a un golpe de cobertura.',
          replaces: 'ENERGYBALL'
        }
      ]
    }
  ]
}

export default vikavolt
