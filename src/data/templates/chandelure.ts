import type { PokemonTemplateSet } from '../../lib/types'

const chandelure: PokemonTemplateSet = {
  internalName: 'CHANDELURE',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'INFILTRATOR',
      item: 'LIFEORB',
      nature: 'MODEST',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FIREBLAST', 'SHADOWBALL', 'ENERGYBALL', 'SUBSTITUTE'],
      justification:
        'At.Esp. 145 con un STAB Fuego/Fantasma que solo el tipo Normal ignora por completo: Chandelure es un rompemuros especial de primer orden. Allanamiento es la habilidad clave en este rol porque atraviesa Sustituto, Pantalla de Luz, Reflejo y Neblina, así que ni los equipos de pantallas ni los sub-seed lo detienen. Llamarada es la STAB de máxima potencia; Bola Sombra es la segunda STAB, que en conjunto solo dejan a Normal fuera y castigan a Psíquico y otros Fantasma; Energibola pega a Agua, Roca y Tierra voluminosos, sus contras naturales. Sustituto aprovecha que su potencia fuerza cambios constantes: se refugia en el turno de cambio, y gracias a Allanamiento los sustitutos rivales no lo frenan a él. Naturaleza Modesta con máxima Velocidad y At.Esp.; Vidasfera para pasar umbrales de 2HKO, coste asumible en un atacante cuyo plan es no recibir golpes.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Convierte a Chandelure en revenge killer que supera a base 120 o menos; se combina con Truco para lastrar a un muro.'
        },
        {
          slot: 'move',
          value: 'TRICK',
          note: 'Con Pañuelo Elección, entrega el objeto a un muro y lo bloquea en un movimiento.',
          replaces: 'SUBSTITUTE'
        },
        {
          slot: 'move',
          value: 'CALMMIND',
          note: 'Plan de barrido tras un turno de mejora, aprovechando la Def.Esp. 90.',
          replaces: 'SUBSTITUTE'
        },
        {
          slot: 'move',
          value: 'FLAMETHROWER',
          note: '100% de precisión frente al 85% de Llamarada si se prioriza la consistencia.',
          replaces: 'FIREBLAST'
        },
        {
          slot: 'ability',
          value: 'FLAMEBODY',
          note: 'Un 30% de quemar por contacto, valor defensivo con Def.Esp. 90; se pierde el ignorar sustitutos y pantallas.'
        }
      ]
    }
  ]
}

export default chandelure
