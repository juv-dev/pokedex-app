import type { PokemonTemplateSet } from '../../lib/types'

const magneton: PokemonTemplateSet = {
  internalName: 'MAGNETON',
  templates: [
    {
      role: 'pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MAGNETPULL',
      item: 'CHOICESCARF',
      nature: 'TIMID',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['VOLTSWITCH', 'THUNDERBOLT', 'FLASHCANNON', 'SIGNALBEAM'],
      justification:
        'El perfil de Magneton en Añil V4.13 es el de un atacante especial que le gana a Magnezone, su evolución a nivel 45, un único as bajo la manga: Velocidad base 70 contra 60. Con Pañuelo Elección y naturaleza Miedosa, Magneton corre en el tramo equivalente a base 105 y supera a cualquier rival con Velocidad base 104 o inferior, mientras que Magnezone con el mismo objeto se queda en el equivalente a base 90. Eso lo convierte en el usuario de Imán más rápido de la línea: entra ante un tipo Acero, lo atrapa y decide entre rematarlo con Cañón Resplandor o escapar con Voltiocambio, que cede el turno a un compañero sin perder presión. Rayo es la STAB Eléctrica fiable y Rayo Señal cubre a los tipos Planta, que resisten Eléctrico, y a los Siniestro y Psíquico que resisten Acero. El reparto 252 At. Esp. / 252 Vel. con Miedosa maximiza justo lo que sostiene al set: la velocidad del Pañuelo y la potencia de las STAB, con los 4 puntos restantes en PS. Imán es la habilidad correcta porque el set necesita moverse primero: Cálculo Final exige atacar en último lugar, justo lo contrario de lo que busca un Pañuelo Elección.',
      alternatives: [
        {
          slot: 'ability',
          value: 'STURDY',
          note: 'Robustez garantiza aguantar un golpe a PS máximos y ejecutar la Voltiocambio de salida o un Rayo letal aunque el rival ataque primero; se pierde el control sobre los aceros.',
          replaces: 'MAGNETPULL'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Quedarse bloqueado en Parálisis tras atrapar a un acero que resiste ambas STAB degrada al entrante y facilita el barrido posterior.',
          replaces: 'SIGNALBEAM'
        },
        {
          slot: 'item',
          value: 'MAGNET',
          note: 'Imán eleva un 20% los movimientos Eléctricos para un set sin Pañuelo que acepta el tramo de velocidad real de Magneton a cambio de más daño sostenido.'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'ANALYTIC',
      item: 'CHOICESPECS',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['THUNDERBOLT', 'FLASHCANNON', 'VOLTSWITCH', 'SIGNALBEAM'],
      justification:
        'Variante de rompemuros con Cálculo Final, que aumenta la potencia un 30% cuando el usuario es el último en atacar: sin inversión de Velocidad casi todo el meta actúa antes que Magneton y la habilidad se activa turno tras turno, elevando Rayo a un golpe efectivo de 117 de potencia y Cañón Resplandor a 104, ambos con el multiplicador fijado por Gafas Elección. El reparto 252 PS / 252 At. Esp. con Modesta aprovecha la Defensa 95 y la Def. Esp. 70 para entrar varias veces, algo que la naturaleza Miedosa del set principal sacrifica. Voltiocambio conserva la salida de momentum y Rayo Señal la cobertura contra Planta, Siniestro y Psíquico. Es viable y no óptimo porque renunciar al Pañuelo deja la Velocidad 70 expuesta a los sweepers rápidos y porque el atrapado de acero de Imán se pierde al elegir la habilidad oculta.',
      alternatives: [
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Parálisis para apoyar al equipo cuando el rival resiste ambas STAB; encaja porque Cálculo Final no exige mantener la Velocidad.',
          replaces: 'SIGNALBEAM'
        },
        {
          slot: 'item',
          value: 'EVIOLITE',
          note: 'Mineral Evolutivo eleva la Defensa y la Def. Esp. un 50% para un pivote voluminoso que mantiene Imán y la Velocidad 70, a costa del pico de las Gafas Elección.'
        }
      ]
    }
  ]
}

export default magneton