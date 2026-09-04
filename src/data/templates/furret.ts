import type { PokemonTemplateSet } from '../../lib/types'

const furret: PokemonTemplateSet = {
  internalName: 'FURRET',
  templates: [
    {
      role: 'pivot',
      isPrimary: true,
      confidence: 'viable',
      ability: 'FURCOAT',
      item: 'LEFTOVERS',
      nature: 'JOLLY',
      evs: [252, 0, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['KNOCKOFF', 'UTURN', 'SUPERFANG', 'BODYSLAM'],
      justification:
        'En Añil V4.13 Furret lleva Pelaje Recio de habilidad principal, que reduce a la mitad el daño físico recibido. Sobre una Defensa base 64 eso equivale a rondar los 128, así que un Normal con Velocidad 110 y PS 85 se convierte en un pivote defensivo rápido y molesto. Desarme quita objetos y castiga a Fantasmas, Ida y Vuelta cede el turno con ventaja, Superdiente recorta a la mitad los PS de cualquier muro para hacer avances, y Golpe Cuerpo aporta daño con opción de parálisis. Sin recuperación real más allá de Restos, Furret funciona pivotando y desgastando, no plantándose de muro: su punto débil es la Def. Esp. 65. Naturaleza Alegre y reparto en PS y Velocidad para conservar el tope.',
      alternatives: [
        {
          slot: 'move',
          value: 'TRICK',
          note: 'Truco endosa un objeto de bloqueo a un muro rival y lo inutiliza; combina con Cinta o Banda Elección en lugar de Restos.',
          replaces: 'SUPERFANG'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado castiga el contacto y se apila con Pelaje Recio para hacer de Furret un incordio para los físicos.'
        }
      ]
    }
  ]
}

export default furret
