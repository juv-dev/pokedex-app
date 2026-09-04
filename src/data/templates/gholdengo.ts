import type { PokemonTemplateSet } from '../../lib/types'

const gholdengo: PokemonTemplateSet = {
  internalName: 'GHOLDENGO',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'GOODASGOLD',
      item: 'LEFTOVERS',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'MAKEITRAIN', 'SHADOWBALL', 'RECOVER'],
      justification:
        'Gholdengo es el atacante especial acero/fantasma de Añil V4.13 con el SpA 133 más alto de su tipado. La sinergia central es Cuerpo Áureo: la inmunidad a los movimientos de estado ajenos hace que Maquinación se monte ajeno a Espora, Onda Trueno, Tóxico y Fuego Fatuo, los controles con los que suele frenarse a un setup ofensivo. Fiebre Dorada, STAB Acero de 120, es el golpe principal aunque baje un escalón el At.Esp., y Recuperación restaura la mitad de los PS para sostener a un PS 87 que no es un muro. Bola Sombra da la segunda STAB. Naturaleza Modesta con 252 en At.Esp. y PS, apoyado en un tipado que le da once resistencias y tres inmunidades.',
      alternatives: [
        {
          slot: 'move',
          value: 'THUNDERBOLT',
          note: 'Rayo cubre a los Agua y Volador que resisten Acero, a cambio de la recuperación de Recuperación.',
          replaces: 'RECOVER'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera eleva el pico de daño de Fiebre Dorada a costa de desgaste, para cerrar muros sin depender del setup completo.'
        },
        {
          slot: 'move',
          value: 'PSYSHOCK',
          note: 'Psicocarga apunta a la Defensa en lugar de la Defensa Especial, para romper muros especiales que apilaría contra Acero.',
          replaces: 'THUNDERBOLT'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'GOODASGOLD',
      item: 'CHOICESPECS',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['MAKEITRAIN', 'SHADOWBALL', 'THUNDERBOLT', 'PSYSHOCK'],
      justification:
        'Variante de rompemuros con Gafas Elección que explota el SpA 133 sin preparación: Fiebre Dorada como STAB spameable, Bola Sombra, Rayo y Psicocarga como cobertura que cubre los huecos del tipado. Cuerpo Áureo sigue anulando el control de estado ajeno, de modo que un Gholdengo de Gafas no puede ser desarmado ni dormido. Es viable y no óptimo porque renuncia al crecimiento de Maquinación y a la recuperación, volviéndolo predecible pese a la potencia inmediata.',
      alternatives: [
        {
          slot: 'nature',
          value: 'TIMID',
          note: 'Naturaleza Miedosa sacrifica algo de potencia por superar la base 85/90 de velocidad del metagame, útil en equipos sin apoyo de velocidad.',
          replaces: 'MODEST'
        }
      ]
    }
  ]
}

export default gholdengo
