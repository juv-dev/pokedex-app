import type { PokemonTemplateSet } from '../../lib/types'

const kilowattrel: PokemonTemplateSet = {
  internalName: 'KILOWATTREL',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'VOLTABSORB',
      item: 'LIFEORB',
      nature: 'MODEST',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['THUNDERBOLT', 'HURRICANE', 'VOLTSWITCH', 'ROOST'],
      justification:
        'Kilowattrel en Añil V4.13 es un atacante especial de Velocidad 125 y Ataque Especial 105: bastante frágil (PS 70 / Def 60 / Def. Esp. 60), su valor es golpear primero y salir rápido. Absorbe Elec. ("si le alcanza un movimiento de tipo Eléctrico, no le afecta y recupera 1/4 de sus PS máximos") le da una inmunidad valiosa en el tipo eléctrico/flying y curación ante los STAB Eléctricos rivales y los cambios de Voltio. Rayo es el STAB Eléctrico fiable; Vendaval es el STAB Volador de 110 de potencia que además confunde (con precisión 70, perfecta bajo lluvia, que el equipo puede aportar); Voltiocambio mantiene el momentum de un atacante rápido que no puede quedarse cuerpo a cuerpo; y Respiro recupera y quita el tipo Volador un turno para tapar la debilidad a Roca. Vidasfera maximiza el pico de daño. Naturaleza Modesta y reparto en Ataque Especial y Velocidad, apostando por superar la franja de Velocidad 125 sin necesidad de naturaleza de Velocidad.',
      alternatives: [
        {
          slot: 'ability',
          value: 'COMPETITIVE',
          note: 'Tenacidad sube dos niveles el Ataque Especial ante cada bajada de características, castigando a Intimidación y a los movimientos de debilitado.',
          replaces: 'VOLTABSORB'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Gafas Elección elevan el pico de daño a cambio de quedar bloqueado en un movimiento, con Voltiocambio para salir.',
          replaces: 'LIFEORB'
        },
        {
          slot: 'move',
          value: 'TAILWIND',
          note: 'Viento Afín duplica la Velocidad del equipo, útil de apoyo a cambio de la recuperación de Respiro.',
          replaces: 'ROOST'
        }
      ]
    }
  ]
}

export default kilowattrel
