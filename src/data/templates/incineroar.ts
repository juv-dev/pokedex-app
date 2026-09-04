import type { PokemonTemplateSet } from '../../lib/types'

const incineroar: PokemonTemplateSet = {
  internalName: 'INCINEROAR',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'INTIMIDATE',
      item: 'LEFTOVERS',
      nature: 'CAREFUL',
      evs: [252, 0, 0, 0, 252, 4],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['PARTINGSHOT', 'KNOCKOFF', 'FLAREBLITZ', 'UTURN'],
      justification:
        'Incineroar en Añil V4.13 es el pivote defensivo por excelencia gracias a su habilidad oculta Intimidación, que baja el Ataque del rival un nivel al entrar, y a un volumen de PS 95 / Def 90 / Def.Esp 90 digno de una pared. Última Palabra (Parting Shot) baja Ataque y At.Esp. del rival un nivel y cede el turno a un compañero que entra sin gastar cambio, la herramienta de rotación más fuerte del juego; Desarme quita el objeto al rival y castiga los cambios. Envite Ígneo (120, STAB) es el golpe de castigo físico puro y U-Turn ofrece un segundo movimiento de cambio para mantener el momentum. Reparto 252 PS / 252 Def.Esp. con Cauta cubre el flanco especial que Intimidación no toca, completando un perfil equilibrado. Restos le dan longevidad porque no hay recuperación en su repertorio legal. La Velocidad 60 no importa: Última Palabra y U-Turn lo convierten en un pivote que ordena el campo y castiga entrar con Desarme.',
      alternatives: [
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado castiga a los atacantes físicos de contacto y complementa a Intimidación, a cambio de no recuperar PS con Restos.'
        },
        {
          slot: 'move',
          value: 'WILLOWISP',
          note: 'Fuego Fatuo corta el Ataque físico a la mitad y permite ablandar muros y barredores, renunciando al golpe de Envite Ígneo.',
          replaces: 'FLAREBLITZ'
        },
        {
          slot: 'move',
          value: 'FAKEOUT',
          note: 'Sorpresa (prioridad +3, solo primer turno) da un flinch fiable de apertura para entrar con Intimidación y mantener el control del turno, a cambio del segundo movimiento de cambio.',
          replaces: 'UTURN'
        }
      ]
    }
  ]
}

export default incineroar
