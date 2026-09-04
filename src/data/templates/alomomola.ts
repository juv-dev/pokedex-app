import type { PokemonTemplateSet } from '../../lib/types'

const alomomola: PokemonTemplateSet = {
  internalName: 'ALOMOMOLA',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'REGENERATOR',
      item: 'ROCKYHELMET',
      nature: 'BOLD',
      evs: [4, 0, 252, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['WISH', 'PROTECT', 'SCALD', 'FLIPTURN'],
      justification:
        'PS 165 es su estadística definitoria: con Def 80 y naturaleza Osada es un muro físico enorme, y con Regeneración recupera 1/3 de esos PS gigantes cada vez que sale. Deseo cura aproximadamente la mitad de su vida máxima, una cantidad brutal en cifras absolutas que puede pasar a compañeros frágiles. Protección asegura que Deseo caiga sobre sí misma cuando lo necesita y sirve para explorar y sumar turnos de Regeneración. Escaldar es la STAB con opción de quemar para no ser pasiva contra físicos. Viraje es el movimiento de pivote que aprovecha una entrada segura para traer a un compañero encima del Deseo, manteniendo el momentum y reactivando Regeneración. Casco Dentado castiga a cada atacante de contacto que intente forzar el cambio. El reparto reparte defensas porque su Def.Esp. base de 45 es tan baja que solo la enorme reserva de PS la sostiene, y ahí es donde más rinde la inversión.',
      alternatives: [
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Retira objetos del rival; a cambio de la opción de quemar y del daño de STAB de Escaldar.',
          replaces: 'SCALD'
        },
        {
          slot: 'move',
          value: 'TOXIC',
          note: 'Desgaste directo a muros y voluminosos que ignoran el resto del set.',
          replaces: 'SCALD'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Cura pasiva propia en vez del daño de contacto de Casco Dentado.'
        },
        {
          slot: 'ability',
          value: 'HEALER',
          note: 'Un 30% de curar el estado de un aliado; fuera de combates dobles su valor cae y Regeneración es superior en individuales.'
        }
      ]
    }
  ]
}

export default alomomola
