import type { PokemonTemplateSet } from '../../lib/types'

const electrode: PokemonTemplateSet = {
  internalName: 'ELECTRODE',
  templates: [
    {
      role: 'lead',
      isPrimary: true,
      confidence: 'viable',
      ability: 'ELECTRICSURGE',
      item: 'TERRAINEXTENDER',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['VOLTSWITCH', 'THUNDERBOLT', 'TAUNT', 'EXPLOSION'],
      justification:
        'El perfil de Electrode en Añil V4.13 es Velocidad 150 con ofensivas discretas (At. Esp. 90), así que su valor no está en el daño sino en llegar primero. Electrogénesis crea un campo eléctrico nada más entrar, que sube un 30% los movimientos eléctricos de todo el equipo, impide que los Pokémon en el suelo se duerman y potencia los movimientos eléctricos que escalan con el campo. Con Velocidad 150 es el invocador de campo eléctrico más rápido disponible, lo que le permite establecerlo antes que cualquier otro lead y ceder el turno con Voltiocambio manteniendo el impulso. Mofa frena trampas, pantallas y recuperación del lead rival, y Explosión (250 de potencia) es la salida cuando ya cumplió su función, quitando de en medio a un muro o a una amenaza. Cubresuelos alarga el campo de cinco a ocho turnos para que el equipo lo aproveche varias veces. Miedosa y máxima Velocidad porque ese 150 es el único recurso real que aporta y no se puede recortar.',
      alternatives: [
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Banda Aguante garantiza dejar el campo y una acción extra (Mofa o Explosión) frente a un lead más rápido tras Trampa Rocas u otro chip previo.'
        },
        {
          slot: 'move',
          value: 'ELECTROWEB',
          note: 'Electrotela baja la Velocidad del rival al pivotar, útil si el equipo prefiere control de velocidad al chip inmediato de Rayo.',
          replaces: 'THUNDERBOLT'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Onda Trueno deja paralizado a un setup sweeper que intente entrar gratis, a cambio de la presión de daño de Rayo.',
          replaces: 'THUNDERBOLT'
        }
      ]
    }
  ]
}

export default electrode
