import type { PokemonTemplateSet } from '../../lib/types'

const zygarde: PokemonTemplateSet = {
  internalName: 'ZYGARDE',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'POWERCONSTRUCT',
      item: 'LEFTOVERS',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONDANCE', 'THOUSANDARROWS', 'EXTREMESPEED', 'OUTRAGE'],
      justification:
        'Agrupamiento cambia por completo la lectura del set: cuando los PS de Zygarde bajan de la mitad adopta su Forma Completa, ganando de golpe muchísima resistencia. Eso convierte a un Danza Dragón normal en algo mucho más difícil de frenar, porque el intento de revenge suele activar la transformación en lugar de matarlo. Con la danza instalada, Mil Flechas es la STAB principal: 90 de potencia de tipo Tierra que además acierta a los Volador y los baja al suelo, cerrando el hueco habitual de la cobertura terrestre. Enfado es el golpe pesado de Dragón, y Veloc. Extrema da prioridad +2 para rematar sweepers rivales antes de que actúen. Naturaleza Alegre y Velocidad máxima para maximizar el valor de cada danza. Restos alimenta la longevidad que sostiene todo el plan.',
      alternatives: [
        {
          slot: 'move',
          value: 'STONEEDGE',
          note: 'Cobertura de Roca contra los Volador que resisten Dragón y no quieres depender solo del descenso de Mil Flechas.',
          replaces: 'OUTRAGE'
        },
        {
          slot: 'move',
          value: 'COREENFORCER',
          note: 'STAB de Dragón especial que anula la habilidad del rival si ya actuó, útil contra Multiescamas o Levitación.',
          replaces: 'OUTRAGE'
        }
      ]
    },
    {
      role: 'bulky-attacker',
      isPrimary: false,
      confidence: 'viable',
      ability: 'POWERCONSTRUCT',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['THOUSANDARROWS', 'EXTREMESPEED', 'OUTRAGE', 'GLARE'],
      justification:
        'Reparto voluminoso que aprovecha 108/121/95 de base y la red de seguridad de Agrupamiento sin depender de setup. Reptar paraliza a un objetivo pese a ser de tipo Eléctrico inmune a Onda Trueno, lo que le permite frenar sweepers para el equipo; Mil Flechas y Enfado son el daño principal y Veloc. Extrema el remate prioritario. Restos y la Forma Completa lo hacen extremadamente difícil de tumbar en una sola secuencia. Es viable y no óptimo porque sin Danza Dragón su Velocidad base de 95 no le permite cerrar partidas por sí solo.',
      alternatives: [
        {
          slot: 'move',
          value: 'COIL',
          note: 'Sube Ataque, Defensa y Precisión: una vía de setup más lenta pero que refuerza el volumen que ya define a este set.',
          replaces: 'GLARE'
        }
      ]
    }
  ]
}

export default zygarde
