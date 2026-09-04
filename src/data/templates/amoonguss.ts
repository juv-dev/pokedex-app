import type { PokemonTemplateSet } from '../../lib/types'

const amoonguss: PokemonTemplateSet = {
  internalName: 'AMOONGUSS',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'REGENERATOR',
      item: 'BLACKSLUDGE',
      nature: 'BOLD',
      evs: [252, 0, 176, 0, 80, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SPORE', 'GIGADRAIN', 'SLUDGEBOMB', 'SYNTHESIS'],
      justification:
        'PS 114 con Def 70 / Def.Esp 80 y Regeneración lo convierten en un pivote defensivo que recupera 1/3 de sus PS cada vez que sale, ya sea por cambio manual o forzado. Esporas es la mejor herramienta de sueño del juego: 100% de precisión y desactiva una amenaza durante varios turnos, dando al equipo un turno franco. Gigadrenado es la STAB de Planta con robo de vida, que sumado a Regeneración y Síntesis lo hace extremadamente difícil de desgastar. Bomba Lodo es la STAB de Veneno para no quedar como presa pasiva y castigar a las Hadas. Síntesis es la recuperación activa cuando no puede permitirse cambiar. Naturaleza Osada y reparto físico defensivo porque su Def.Esp. de partida ya es decente y la mayoría de sus contras son físicas; Lodo Negro por la cura pasiva adicional, dado que su tipo Veneno lo hace inmune al propio daño del objeto.',
      alternatives: [
        {
          slot: 'move',
          value: 'CLEARSMOG',
          note: 'Elimina los aumentos de un sweeper que intente montarse encima, a cambio de la STAB con opción de envenenar.',
          replaces: 'SLUDGEBOMB'
        },
        {
          slot: 'move',
          value: 'FOULPLAY',
          note: 'Usa el Ataque del rival para no ser pasivo frente a físicos; Regeneración cubre parte de la curación perdida.',
          replaces: 'SYNTHESIS'
        },
        {
          slot: 'move',
          value: 'TOXIC',
          note: 'Desgaste directo a muros y voluminosos que no temen a la STAB de Veneno.',
          replaces: 'SLUDGEBOMB'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Castiga a los atacantes de contacto que fuerzan el cambio; se pierde la cura pasiva de Lodo Negro.'
        }
      ]
    }
  ]
}

export default amoonguss
