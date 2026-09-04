import type { PokemonTemplateSet } from '../../lib/types'

const scovillain: PokemonTemplateSet = {
  internalName: 'SCOVILLAIN',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'CHLOROPHYLL',
      item: 'LIFEORB',
      nature: 'MODEST',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SUNNYDAY', 'GROWTH', 'SOLARBEAM', 'FIREBLAST'],
      justification:
        'El núcleo es autosuficiente: Clorofila duplica su Velocidad (base 95, ya alta) durante el sol, y Scovillain monta su propio Día Soleado para activarla sin depender de un compañero. Desarrollo sube Ataque y Ataque Especial al máximo en sol (niveles +2 en ambos), y con Ataque Especial 108 y ambos STAB potenciados por el sol, Rayo Solar se lanza en un turno (130) y Lanzallamas pega aún más fuerte con la Vidasfera. Naturaleza Modesta y reparto en Ataque Especial y Velocidad aprovechan el despegue. Sus 65 PS y frágiles defensas lo obligan a entrar rápido y limpiar antes de sufrir retaliación; la alternativa con Fuego Solar de equipo externo permite reservar el turno del clima para otro ataque.',
      alternatives: [
        {
          slot: 'move',
          value: 'OVERHEAT',
          note: 'Cambia Lanzallamas por un pico de 130 para romper un muro concreto, sacrificando la precisión y la fiabilidad del ataque sostenido.'
        },
        {
          slot: 'ability',
          value: 'MOODY',
          note: 'Voluble ofrece un boost aleatorio y caótico sin depender del sol, inviable como núcleo fiable de sweeper.'
        }
      ]
    }
  ]
}

export default scovillain
