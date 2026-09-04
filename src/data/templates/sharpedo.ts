import type { PokemonTemplateSet } from '../../lib/types'

const sharpedo: PokemonTemplateSet = {
  internalName: 'SHARPEDO',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SPEEDBOOST',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['PROTECT', 'LIQUIDATION', 'CRUNCH', 'CLOSECOMBAT'],
      justification:
        'El perfil es de barredor puro: Ataque 120 y Velocidad 100, pero Defensa 50 / Def. Esp. 50 / PS 70 lo dejan sin margen para encajar golpes. Impulso sube la Velocidad un nivel al final de cada turno, así que Protección en el primer turno asegura una mejora sin arriesgar la vida y, a partir de ahí, Sharpedo supera a todo el tier. Chorro de Agua (Liquidación) es STAB de 85 con opción de bajar Defensa, Triturar es el segundo STAB y A Bocajarro cubre a los tipos Normal, Acero y Roca que aguantan sus STAB. Objeto Vidasfera porque su fragilidad hace que nunca dure lo suficiente como para que importe el desgaste, y necesita el pico de daño para cerrar. Alegre para llegar a 100 antes de mejorar y quedar en torno a 150 tras un solo turno de Impulso.',
      alternatives: [
        {
          slot: 'ability',
          value: 'ACOMETIDA',
          note: 'Con Acometida (50% de Velocidad y 20% de Ataque solo en el turno de entrada) y Banda Elección se convierte en un rompemuros inmediato que no depende de gastar un turno en Protección.'
        },
        {
          slot: 'move',
          value: 'PSYCHICFANGS',
          note: 'Rompe Pantalla Luz y Reflejo y castiga a los tipos Veneno, a cambio de la cobertura de A Bocajarro.',
          replaces: 'CLOSECOMBAT'
        },
        {
          slot: 'move',
          value: 'WAVECRASH',
          note: 'Más potencia bruta de STAB agua si el retroceso es asumible dado que Sharpedo rara vez cambia.',
          replaces: 'LIQUIDATION'
        }
      ]
    }
  ]
}

export default sharpedo
