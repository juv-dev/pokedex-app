import type { PokemonTemplateSet } from '../../lib/types'

const baxcalibur: PokemonTemplateSet = {
  internalName: 'BAXCALIBUR',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'THERMALEXCHANGE',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONDANCE', 'ICICLECRASH', 'EARTHQUAKE', 'ICESHARD'],
      justification:
        'Baxcalibur es el sweeping físico de la línea Frigibax en Añil V4.13: Ataque 145, PS 115 y Defensa 92. La sinergia central es Termoconversión: inmunidad a la quemadura que, en un físico de tipo Hielo tan dependiente del Ataque, es exactamente la protección que un Danza Dragón necesita para montarse sin ser debilitado, además de subir el Ataque extra si un movimiento Fuego lo alcanza. Chuzos es el STAB Hielo de 85/90, Terremoto cubre a los Acero y Roca que resisten Hielo, y Esquirla Helada con prioridad +1 remata objetivos ralentizados donde la Velocidad 87 no llega. Naturaleza Firme con PS y Ataque maximizados, con Restos para sostener los 115 de PS. La orientación a Danza Dragón convierte su moderada velocidad en un desbordamiento de la línea de 100.',
      alternatives: [
        {
          slot: 'move',
          value: 'GLAIVERUSH',
          note: 'Asalto Espadón da STAB Dragón de 120 con precisión perfecta pero deja a Baxcalibur expuesto a daño doble el turno siguiente, reservado a cierres con predicción.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera eleva el pico de daño de los golpes tras el baile a costa de desgaste, útil si el equipo no puede sostenerlo.',
          replaces: 'LEFTOVERS'
        },
        {
          slot: 'move',
          value: 'SCALESHOT',
          note: 'Ráfaga Escamas ataca de 2 a 5 veces y sube la Velocidad bajando Defensa, alternativa de alza de velocidad sin el turno de setup.',
          replaces: 'ICESHARD'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'THERMALEXCHANGE',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['GLAIVERUSH', 'ICICLECRASH', 'EARTHQUAKE', 'ICESHARD'],
      justification:
        'Variante de rompemuros con Cinta Elección: el Ataque 145 convertido en pico de daño inmediato. Asalto Espadón, pese a su vulnerabilidad el turno siguiente, es un STAB Dragón de 120 con precisión total que rompe muros, Chuzos y Terremoto completan la cobertura y Esquirla Helada da prioridad de remate. Termoconversión sigue protegiendo del debilitamiento por quemadura. Es viable y no óptimo porque requiere predecir los cruces con un movimiento de doble vulnerabilidad y pierde la capacidad de sostenerse de la versión con Danza Dragón y Restos.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera da un pico de daño alternativo al de la Cinta sin bloquear el movimiento, a costa de desgaste en un conjunto ya de corta duración.'
        }
      ]
    }
  ]
}

export default baxcalibur
