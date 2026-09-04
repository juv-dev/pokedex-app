import type { PokemonTemplateSet } from '../../lib/types'

const sirfetchd: PokemonTemplateSet = {
  internalName: 'SIRFETCHD',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SCRAPPY',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CLOSECOMBAT', 'KNOCKOFF', 'BRAVEBIRD', 'FIRSTIMPRESSION'],
      justification:
        'El perfil de Sirfetch\'d en Añil V4.13 (Ataque 135 / Velocidad 65 / PS 62) es el de un rompemuros puro: no se le puede barrer, pero su Ataque base y la Cinta Elección lo convierten en un castigo de entrada y un rematador de prioridad. Intrépido (oculta) permite que sus movimientos de Lucha alcancen a los Fantasma y lo hace inmune a Intimidación, dos sinergias que en Añil definen el set. A Bocajarro (120) y Pájaro Osado (120) forman la doble cobertura Lucha/Volador, Desarme quita objetos y Escaramuza (prioridad +2) aprovecha que es lento: al entrar contra un rival que va a atacar igualmente, revienta en el turno 1. Naturaleza Firme y reparto en PS y Ataque; la Velocidad baja se cubre con prioridad, por eso Escaramuza es fija. Sirfetch\'d no lleva Doble Filo porque depende de la primera vez que entra para presionar.',
      alternatives: [
        {
          slot: 'move',
          value: 'SWORDSDANCE',
          note: 'Requiere soltar la Cinta Elección: Danza Espada transforma el set en un montador que cobra cambio y cierra con 135 base duplicado.',
          replaces: 'FIRSTIMPRESSION'
        },
        {
          slot: 'move',
          value: 'METEORASSAULT',
          note: 'Asalto Estelar (150, STAB Lucha, precisión 100) es el golpe duro de cierre cuando el rival ya no puede quitar el turno, a cambio de perder la cobertura Volador.',
          replaces: 'BRAVEBIRD'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos sostienen a un montador con Danza Espada, renunciando al 50% de Ataque de la Cinta por longevidad.'
        }
      ]
    }
  ]
}

export default sirfetchd