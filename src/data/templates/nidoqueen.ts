import type { PokemonTemplateSet } from '../../lib/types'

const nidoqueen: PokemonTemplateSet = {
  internalName: 'NIDOQUEEN',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SHEERFORCE',
      item: 'LIFEORB',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['EARTHPOWER', 'SLUDGEWAVE', 'ICEBEAM', 'STEALTHROCK'],
      justification:
        'El nicho de Nidoqueen en Añil V4.13 nace de la sinergia entre Potencia Bruta y Vidasfera. Potencia Bruta ("sube un 30% la potencia de los movimientos con efectos secundarios, pero anula el efecto") potencia Tierra Viva, Onda Tóxica y Rayo Hielo, y como esos ataques dejan de contar como "con efecto secundario" para la penalización, Vidasfera no descuenta PS al usarlos: se obtiene el pico de daño del objeto sin su desgaste. Con PS 90 / Def 87 / Def.Esp 85 y tipo Veneno/Tierra, Nidoqueen entra varias veces durante la partida, coloca Trampa Rocas y devuelve daño fuerte y repetible en lugar de romper de un golpe. Tierra Viva es el STAB principal, Onda Tóxica el segundo STAB que además pisa Púas Tóxicas rivales sin envenenarse, y Rayo Hielo cubre a Dragón, Vuelo y Tierra. Reparto en PS y At.Esp. con Modesta: la Velocidad 76 es causa perdida y no compensa invertir en ella.',
      alternatives: [
        {
          slot: 'move',
          value: 'FIREBLAST',
          note: 'Llamarada potenciada por Potencia Bruta rompe a Acero como Skarmory o Ferrothorn; se cede el control de trampas de Trampa Rocas.',
          replaces: 'STEALTHROCK'
        },
        {
          slot: 'move',
          value: 'THUNDERBOLT',
          note: 'Rayo castiga a Agua y Vuelo voluminosos que absorben el resto del set.',
          replaces: 'ICEBEAM'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos prioriza la permanencia sobre el pico de daño y encaja mejor si el set se orienta a colocar Trampa Rocas y Púas Tóxicas.'
        }
      ]
    }
  ]
}

export default nidoqueen
