import type { PokemonTemplateSet } from '../../lib/types'

const dubwool: PokemonTemplateSet = {
  internalName: 'DUBWOOL',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'FLUFFY',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['COTTONGUARD', 'BODYPRESS', 'DOUBLEEDGE', 'THUNDERWAVE'],
      justification:
        'El único set competitivo real de Dubwool en Añil V4.13 es el de muro físico, y este es el óptimo: Peluche divide a la mitad todo el daño de contacto, lo que anula a la mayoría de atacantes físicos, y Rizo Algodón añade tres niveles de Defensa sobre la base 100 en un solo turno; con eso, Plancha Corporal —que usa la Defensa en lugar del Ataque 80— pasa de presión a amenaza real que castiga a Normal, Roca, Acero y Siniestro. Doble Filo es el STAB Normal de 120 con el que puede responder sin depender de los refuerzos, y Onda Trueno mengua a los rivales rápidos para que no se escapen cuando la pared ya cumplió. Restos son la única recuperación sostenida disponible, ya que su movepool no tiene curación directa fuera de Descanso. Agitada con 252 PS / 252 Defensa para maximizar el muro. Limitación real: Peluche duplica el daño de los movimientos de Fuego que no son de contacto, así que no puede quedarse delante de un lanzallamas.',
      alternatives: [
        {
          slot: 'move',
          value: 'REST',
          note: 'Descanso da la única recuperación completa disponible, cediendo el control de velocidad de Onda Trueno.',
          replaces: 'THUNDERWAVE'
        },
        {
          slot: 'move',
          value: 'BATONPASS',
          note: 'Relevo pasa los refuerzos de Rizo Algodón a un compañero ofensivo, cediendo el daño de Doble Filo.',
          replaces: 'DOUBLEEDGE'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado castiga aún más a los atacantes de contacto que Peluche ya frena, a cambio de la recuperación pasiva.'
        }
      ]
    }
  ]
}

export default dubwool