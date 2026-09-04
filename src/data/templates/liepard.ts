import type { PokemonTemplateSet } from '../../lib/types'

const liepard: PokemonTemplateSet = {
  internalName: 'LIEPARD',
  templates: [
    {
      role: 'support',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRANKSTER',
      item: 'LEFTOVERS',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['ENCORE', 'TAUNT', 'KNOCKOFF', 'UTURN'],
      justification:
        'Con 120 de Velocidad y defensas de 70/60/60, Liepard no aguanta golpes, así que su valor está en su habilidad oculta Bromista, que da prioridad a los movimientos de estado. Bilis fuerza al rival a repetir su último movimiento durante tres turnos y suele generar un cambio gratis o bloquear a un Pokémon que acaba de subir características; Mofa, también con prioridad, apaga trampas, recuperación y setup antes de que el rival actúe. Desarme aprovecha los 110 de Ataque para pegar fuerte y quitar el objeto, y Ida y Vuelta mantiene el momentum tras cumplir la función de apoyo. El reparto ofensivo con naturaleza Alegre existe para que Desarme e Ida y Vuelta hagan daño real, ya que Bilis y Mofa funcionan igual sin inversión. Restos le da una fuente de recuperación pasiva para varias entradas a lo largo de la partida. Conviene recordar que los rivales de tipo Siniestro son inmunes a Bilis y Mofa lanzadas con Bromista.',
      alternatives: [
        {
          slot: 'move',
          value: 'FOULPLAY',
          note: 'Usa el Ataque del rival, ideal contra físicos fuertes; deja sin uso la inversión en Ataque.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Parálisis con prioridad para minar la Velocidad del equipo rival en lugar de cortar un movimiento concreto.',
          replaces: 'TAUNT'
        },
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Garantiza una acción de apoyo contra un lead más rápido o más fuerte, a cambio de la recuperación pasiva de Restos.'
        }
      ]
    }
  ]
}

export default liepard
