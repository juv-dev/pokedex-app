import type { PokemonTemplateSet } from '../../lib/types'

const froslass: PokemonTemplateSet = {
  internalName: 'FROSLASS',
  templates: [
    {
      role: 'hazard-lead',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'CURSEDBODY',
      item: 'FOCUSSASH',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SPIKES', 'TAUNT', 'ICEBEAM', 'DESTINYBOND'],
      justification:
        'Velocidad 110 y acceso a Mofa, Púas y Beso Mortal la hacen un lead de trampas de manual. Banda Aguante garantiza al menos una acción. Mofa antes que nada frena trampas, setup y recuperación del rival; Púas quedan colocadas; Beso Mortal convierte su fragilidad (70/70/70) en un intercambio forzado con la amenaza que la remate. El tipo Hielo/Fantasma no puede quitar sus propias trampas, pero bloquea el Giro Rápido enemigo. Cuerpo Maldito tiene un 30% de anular el movimiento que la golpea, un extra defensivo sin coste. Rayo Hielo es el ataque para no ser pasiva total y castigar a los Tierra y Dragón que entran.',
      alternatives: [
        {
          slot: 'move',
          value: 'SHADOWBALL',
          note: 'STAB de Fantasma que pega a los Psíquico y Fantasma que amenazan el duelo de leads.',
          replaces: 'ICEBEAM'
        },
        {
          slot: 'move',
          value: 'ICYWIND',
          note: 'Control de Velocidad para el equipo, a cambio de daño directo.',
          replaces: 'ICEBEAM'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Parálisis persistente en lugar del intercambio único de Beso Mortal.',
          replaces: 'DESTINYBOND'
        }
      ]
    }
  ]
}

export default froslass
