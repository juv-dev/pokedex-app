import type { PokemonTemplateSet } from '../../lib/types'

const togedemaru: PokemonTemplateSet = {
  internalName: 'TOGEDEMARU',
  templates: [
    {
      role: 'pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'IRONBARBS',
      item: 'ROCKYHELMET',
      nature: 'JOLLY',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['ZINGZAP', 'IRONHEAD', 'UTURN', 'NUZZLE'],
      justification:
        'Togedemaru en Añil V4.13 tiene tipo Eléctrico/Acero y Púas de Hierro ("inflige al rival 1/8 de sus PS si este golpea con un movimiento de contacto"), que junto a Casco Dentado castiga a casi todos los atacantes físicos de contacto. Con Velocidad 96 y Ataque 98, es un pivot rápido: Raspa Trueno (80, prioridad 0, STAB Eléctrico) y Cabeza de Hierro (80, STAB Acero) aportan dos STABs con chance de retroceso, y Moflete (20, prioridad 0) paraliza a sus dos posibles contras físicas. Ida y Vuelta es el núcleo del pivot: entra, absorbe o castiga un contacto con Púas de Hierro y Casco, y cede el turno. Naturaleza Alegre y reparto en Ataque y Velocidad para que el castigo físico y el cambio salgan antes; el reparto en PS con la naturaleza ya alta le da la reserva de un pivot.',
      alternatives: [
        {
          slot: 'move',
          value: 'FAKEOUT',
          note: 'Espejismo (prioridad +3) da un golpe gratuito de apertura que además retrocede, cediendo la parálisis de Moflete.'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos dan longevidad a un pivot que reparte castigo pasivo, en lugar de la doble presión de daño de contacto del Casco.'
        },
        {
          slot: 'move',
          value: 'SPIKYSHIELD',
          note: 'Escudo Pincho (prioridad +4) protege y castiga al que toca de contacto, cediendo uno de los STABs.'
        }
      ]
    }
  ]
}

export default togedemaru
