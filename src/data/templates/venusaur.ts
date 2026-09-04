import type { PokemonTemplateSet } from '../../lib/types'

const venusaur: PokemonTemplateSet = {
  internalName: 'VENUSAUR',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'OVERGROW',
      item: 'BLACKSLUDGE',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['GIGADRAIN', 'SLUDGEBOMB', 'SLEEPPOWDER', 'SYNTHESIS'],
      justification:
        'En Añil V4.13 Venusaur base tiene PS 80 / Def 83 / Def.Esp 100 y Velocidad 80, sin Sebo (esa habilidad es exclusiva de la Mega X), así que su papel real es el de un tanque de tipo Planta/Veneno que devuelve daño constante mientras se cura solo. Síntesis ("restaura PS del usuario, la cantidad varía según el clima") le da la recuperación fiable que ni Drenadoras ni Absorbe Nutrientes por sí solos garantizan, y con clima neutro devuelve la mitad de los PS. Somnífero (75 de precisión) desactiva a un rival por varios turnos y compensa la falta de Velocidad. Gigadrenado (75, STAB, cura la mitad del daño hecho) mantiene los PS arriba turno tras turno y castiga a los tipos Agua y Tierra que intentan entrar; Bomba Lodo (90, STAB, 30% de envenenar) es el golpe fijo contra Hadas y muros de tipo Planta y aprovecha que Planta/Veneno anula las Púas Tóxicas rivales al pisarlas. Lodo Negro cura 1/16 por turno solo a los de tipo Veneno y daña a quien se lo robe con Truco. El reparto 252 PS / 252 Def con Osada tapa el lado físico, que es de donde llega la mayoría de la presión que este núcleo quiere absorber (Lucha, Agua y Tierra físicos); el Ataque queda sin invertir porque el set es íntegramente especial.',
      alternatives: [
        {
          slot: 'move',
          value: 'LEECHSEED',
          note: 'Drenadoras suma desgaste pasivo y recuperación contra rivales a los que no se puede dormir; se cede la desactivación inmediata de Somnífero.',
          replaces: 'SLEEPPOWDER'
        },
        {
          slot: 'move',
          value: 'TOXIC',
          note: 'Tóxico convierte a Venusaur en un reloj contra otros muros y rivales pasivos, a cambio del golpe inmediato de Bomba Lodo.',
          replaces: 'SLUDGEBOMB'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos da la misma cura de 1/16 sin depender del tipo y sin castigar el robo de objeto; opción neutra si el rival no lleva Truco.'
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
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['GROWTH', 'GIGADRAIN', 'SLUDGEBOMB', 'SLEEPPOWDER'],
      justification:
        'Variante de barrido que depende de que el equipo tenga una fuente de sol. Clorofila ("mientras haya clima soleado el Pokémon duplica su Velocidad") lleva el tramo 80 a un efectivo 160, por delante de casi todo el metajuego, y Desarrollo bajo sol sube el Ataque y el Ataque Especial dos niveles en un solo turno ("aumenta el Ataque y el Ataque Especial", con efecto doble en clima soleado). Con +2 de Ataque Especial, Gigadrenado y Bomba Lodo desde una base 100 se vuelven golpes de barrido reales, y Gigadrenado repone el desgaste de Orbe Vida. Somnífero abre el turno de setup contra un rival que no amenaza de inmediato. Es "viable" y no "óptimo" porque sin sol activo Venusaur se queda en Velocidad 80 y el plan entero se cae; el set del tanque no arrastra esa dependencia.',
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
          note: 'Semilla Milagro sube Gigadrenado un 20% sin el desgaste de Orbe Vida; deja el lado Veneno sin potenciar.'
        }
      ]
    }
  ]
}

export default venusaur
