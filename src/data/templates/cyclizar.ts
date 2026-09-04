import type { PokemonTemplateSet } from '../../lib/types'

const cyclizar: PokemonTemplateSet = {
  internalName: 'CYCLIZAR',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'viable',
      ability: 'REGENERATOR',
      item: 'HEAVYDUTYBOOTS',
      nature: 'CAREFUL',
      evs: [252, 0, 76, 0, 180, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHEDTAIL', 'RAPIDSPIN', 'UTURN', 'KNOCKOFF'],
      justification:
        'Cyclizar es el pivote de sustitución por excelencia: Autotomía crea un sustituto y cambia de Pokémon, permitiendo que un compañero entre con el sustituto intacto y sin coste de salud, mientras Regeneración recupera 1/3 de sus PS al abandonar el campo. La Velocidad 121 garantiza actuar primero, y Giro Rápido retira las trampas propias para que el sustituto y el pivoteo no se paguen con desgaste. Ida y Vuelta mantiene el momentum y añade otra salida de campo, y Desarme castiga a los entrantes quitándoles el objeto. Las Botas Gruesas evitan que Trampa Rocas erosione el turno de Autotomía. Naturaleza Cauta con defensas especiales refuerza el lado más débil mientras se apoya en la Velocidad para no sufrir antes de pivotar.',
      alternatives: [
        {
          slot: 'ability',
          value: 'SHEDSKIN',
          note: 'Mudar ofrece un 30% de curación de estado por turno, sin la recuperación de PS por cambio de Regeneración.'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Recuperación pasiva si se decide no pivotar tanto, a costa de sufrir Trampa Rocas en cada reentrada sin Botas.'
        },
        {
          slot: 'move',
          value: 'DRAGONTAIL',
          note: 'Cola Dragón fuerza el cambio del rival con prioridad negativa, cediendo la retirada de trampas de Giro Rápido.',
          replaces: 'RAPIDSPIN'
        }
      ]
    }
  ]
}

export default cyclizar