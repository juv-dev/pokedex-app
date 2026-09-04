import type { PokemonTemplateSet } from '../../lib/types'

const silvally: PokemonTemplateSet = {
  internalName: 'SILVALLY',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'RKSSYSTEM',
      item: 'FIGHTINGMEMORY',
      nature: 'IMPISH',
      evs: [252, 4, 252, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['MULTIATTACK', 'PARTINGSHOT', 'DEFOG', 'THUNDERWAVE'],
      justification:
        'Silvally en Añil V4.13 tiene Sistema RKS, que "cambia su tipo según el disco que lleve instalado", y todos sus stats en 95, lo que lo convierte en un pivot defensivo de tipo variable. Con el Disco Lucha (FightingMemory) Silvally pasa a ser tipo Lucha, resiste Roca y Siniestro y su Movimiento Múltiple (120, STAB de tipo Lucha por el disco) castiga a Normal, Roca, Acero y Siniestro, mientras que la utilidad cubre la defensa: Canción de Despedida baja Ataque y At. Esp. del entrante y cambia a un compañero, Niebla elimina las trampas del propio campo y Onda Trueno mengua a los set-up rápidos. Naturaleza Agitada y reparto en PS y Defensa aprovechan que los 95s de base igualan a la inversión defensiva y que la debilidad lateral física exigirá la pared. La variación de disco permite calibrar el tipo contra el match-up del equipo manteniendo la misma estructura.',
      alternatives: [
        {
          slot: 'item',
          value: 'WATERMEMORY',
          note: 'Tipo Agua con Múltiples movimientos que castiga a Fuego y Roca, y todo un conjunto de resistencias distinto para otros match-ups.'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Ida y Vuelta gana el cambio sin requerir ser golpeado, en lugar de la reducción de stats de Canción de Despedida.'
        }
      ]
    }
  ]
}

export default silvally
