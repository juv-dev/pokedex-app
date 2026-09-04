import type { PokemonTemplateSet } from '../../lib/types'

const vileplume: PokemonTemplateSet = {
  internalName: 'VILEPLUME',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'EFFECTSPORE',
      item: 'BLACKSLUDGE',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['GIGADRAIN', 'SLUDGEBOMB', 'SLEEPPOWDER', 'STRENGTHSAP'],
      justification:
        'Vileplume en Añil V4.13 tiene At.Esp 110 y un volumen sólido de PS 75 / Def 85 / Def.Esp 95, con Velocidad 50: es un tanque de tipo Planta/Veneno que devuelve daño constante mientras se cura. Absorbefuerza ("baja el Ataque del rival y restaura PS del usuario equivalentes al valor de Ataque del rival") es su recuperación y a la vez desarma a los atacantes físicos que quieran romperlo. Gigadrenado (75, STAB, cura la mitad del daño) mantiene los PS arriba y castiga a Agua y Tierra; Bomba Lodo (90, STAB) es el golpe fijo contra Hadas y muros Planta y aprovecha que el tipo Veneno anula las Púas Tóxicas rivales al pisarlas. Somnífero desactiva a un rival y compensa la falta de Velocidad. Efecto Espora como habilidad oculta ("30% de dormir, envenenar o paralizar al hacer contacto al recibir un ataque") suma castigo pasivo a todo el que lo golpee de contacto. Lodo Negro cura 1/16 por turno solo a los de tipo Veneno. Reparto físico defensivo con Osada porque Def 85 es el lado por reforzar.',
      alternatives: [
        {
          slot: 'move',
          value: 'LEECHSEED',
          note: 'Drenadoras suma desgaste pasivo contra rivales a los que no se puede dormir; se cede la recuperación inmediata de Absorbe Fuerza.',
          replaces: 'STRENGTHSAP'
        },
        {
          slot: 'move',
          value: 'MOONBLAST',
          note: 'Fuerza Lunar castiga a Dragón y Siniestro y da un golpe neutro más amplio que Bomba Lodo contra objetivos concretos.',
          replaces: 'SLUDGEBOMB'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos da la misma cura de 1/16 sin depender del tipo y sin castigar el robo de objeto con Truco.'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'CHLOROPHYLL',
      item: 'LIFEORB',
      nature: 'MODEST',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['GROWTH', 'GIGADRAIN', 'SLUDGEBOMB', 'SLEEPPOWDER'],
      justification:
        'Variante de barrido que depende de que el equipo tenga una fuente de sol. Clorofila ("mientras haya clima soleado el Pokémon duplica su Velocidad") lleva el tramo 50 a un efectivo 100, y Desarrollo bajo sol sube Ataque y Ataque Especial dos niveles en un turno. Con +2 de At.Esp. desde una base 110, Gigadrenado y Bomba Lodo se vuelven golpes de barrido reales y Gigadrenado repone el desgaste de Vidasfera. Somnífero abre el turno de setup contra un rival que no amenaza de inmediato. Es "viable" y no "óptimo" porque sin sol activo Vileplume se queda en Velocidad 50 y el plan se cae; el set del tanque no arrastra esa dependencia.',
      alternatives: [
        {
          slot: 'move',
          value: 'WEATHERBALL',
          note: 'Bajo sol, Bola Clima pasa a tipo Fuego y 100 de potencia, cobertura limpia contra Acero y Planta que resisten los dos STAB.',
          replaces: 'SLEEPPOWDER'
        },
        {
          slot: 'item',
          value: 'MIRACLESEED',
          note: 'Semilla Milagro sube Gigadrenado un 20% sin el desgaste de Vidasfera; deja el lado Veneno sin potenciar.'
        }
      ]
    }
  ]
}

export default vileplume
