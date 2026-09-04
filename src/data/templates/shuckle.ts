import type { PokemonTemplateSet } from '../../lib/types'

const shuckle: PokemonTemplateSet = {
  internalName: 'SHUCKLE',
  templates: [
    {
      role: 'hazard-lead',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STURDY',
      item: 'MENTALHERB',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STICKYWEB', 'STEALTHROCK', 'ENCORE', 'KNOCKOFF'],
      justification:
        'Defensa 230 y Def.Esp 230 con PS 20 y todo lo demás ínfimo lo hacen el mejor colocador dedicado de Red Viscosa del juego: aguanta prácticamente cualquier golpe no supereficaz y Robustez garantiza que sobreviva al peor caso para dejar al menos una trampa. Red Viscosa baja la Velocidad de todo lo que entre y Trampa Rocas suma el daño de cambio; juntas hunden a los equipos ofensivos rivales desde el turno 1. Hierba Mental anula el primer intento de Mofa, que es la única forma limpia de impedirle colocar. Bucle castiga al rival que se queda a preparar o a recuperarse encerrándolo en ese movimiento, y Desarme aprovecha que Shuckle suele sobrevivir dos turnos para quitar el objeto del lead rival antes de caer. Reparto en PS y Defensa con Agitada porque el lado físico es el que más lo amenaza por contacto y porque no hay nada ofensivo que invertir.',
      alternatives: [
        {
          slot: 'move',
          value: 'TOXIC',
          note: 'Tóxico envenena al muro o al Pokémon defensivo que entre a frenar las trampas, a cambio de la utilidad inmediata de Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'move',
          value: 'FINALGAMBIT',
          note: 'Sacrificio iguala los PS del rival a los suyos: casi nada de daño por PS 20, sirve solo como último recurso desesperado.',
          replaces: 'ENCORE'
        },
        {
          slot: 'item',
          value: 'REDCARD',
          note: 'Tarjeta Roja fuerza el cambio del rival tras golpear a Shuckle, útil para arrastrar a algo a la Red Viscosa, a cambio de la protección contra Mofa.'
        }
      ]
    }
  ]
}

export default shuckle
