import type { PokemonTemplateSet } from '../../lib/types'

const glaceon: PokemonTemplateSet = {
  internalName: 'GLACEON',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'viable',
      ability: 'PODERGELIDO',
      item: 'LIFEORB',
      nature: 'MODEST',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['ICEBEAM', 'FREEZEDRY', 'SHADOWBALL', 'EARTHPOWER'],
      justification:
        'At.Esp 130 con Def 110 / Def.Esp 95. Las tres habilidades de Glaceon dependen del clima frío: Poder Gélido sube un 50% el daño de tipo Hielo y la Velocidad (base 65) mientras nieva, así que en un equipo de nieve Glaceon pasa de lento y potente a inmediato y demoledor. Rayo Hielo de STAB y Rayo Áurea, que además es supereficaz contra Agua; Bola Sombra y Tierra Viva rompen a los Acero y Fuego que aguantan el hielo. Se queda en Viable porque, sin nieve activa, su Velocidad base 65 lo deja expuesto pese a la potencia.',
      alternatives: [
        {
          slot: 'move',
          value: 'CALMMIND',
          note: 'En equipo de nieve, con la Velocidad y potencia de Poder Gélido ya activas, monta un barredor especial.',
          replaces: 'EARTHPOWER'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Máxima potencia sin retroceso si el equipo prefiere que Glaceon sea un rompemuros puro.'
        }
      ]
    }
  ]
}

export default glaceon
