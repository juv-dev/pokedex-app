import type { PokemonTemplateSet } from '../../lib/types'

const victini: PokemonTemplateSet = {
  internalName: 'VICTINI',
  templates: [
    {
      role: 'revenge-killer',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'VICTORYSTAR',
      item: 'CHOICESCARF',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['VCREATE', 'WILDCHARGE', 'ZENHEADBUTT', 'UTURN'],
      justification:
        'Base 100 en todo y Tinovictoria, que sube la Precisión propia un 10% (Envite Ígneo pasa a un 100% real). Con Pañuelo Elección revanchea a todo el tier ofensivo: Envite Ígneo (180 de potencia) pega un pico enorme aunque baje Def, Def.Esp y Velocidad, y como Victini se cambia tras Ida y Vuelta esas bajadas no llegan a importar. Carga Salvaje y Cabezazo Zen completan la cobertura. Alegre para asegurar el matchup de Velocidad que da sentido al Pañuelo.',
      alternatives: [
        {
          slot: 'move',
          value: 'FLAREBLITZ',
          note: 'STAB de Fuego que no baja las estadísticas propias, a cambio de mucha menos potencia que Envite Ígneo.',
          replaces: 'VCREATE'
        },
        {
          slot: 'move',
          value: 'TRICK',
          note: 'Pasa el Pañuelo Elección a un muro y lo inutiliza para el resto de la partida.',
          replaces: 'ZENHEADBUTT'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'VICTORYSTAR',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['VCREATE', 'WILDCHARGE', 'ZENHEADBUTT', 'UTURN'],
      justification:
        'Los mismos cuatro movimientos con Cinta Elección convierten a Victini en un rompemuros: Envite Ígneo con precisión asegurada por Tinovictoria destroza casi cualquier switch-in, e Ida y Vuelta permite salir antes de sufrir demasiado por las bajadas de estadística acumuladas.',
      alternatives: [
        {
          slot: 'move',
          value: 'FOCUSBLAST',
          note: 'Cobertura especial a Roca y Normal que resisten Envite Ígneo, aprovechando el +10% de precisión de Tinovictoria.',
          replaces: 'WILDCHARGE'
        }
      ]
    }
  ]
}

export default victini
