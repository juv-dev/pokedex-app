import type { PokemonTemplateSet } from '../../lib/types'

const staraptor: PokemonTemplateSet = {
  internalName: 'STARAPTOR',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'RECKLESS',
      item: 'CHOICEBAND',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BRAVEBIRD', 'CLOSECOMBAT', 'DOUBLEEDGE', 'UTURN'],
      justification:
        'Ataque 120 y Velocidad 100 con Audaz (habilidad oculta), que sube 20% los movimientos que también hieren al usuario: Pájaro Osado (120) queda cerca de 144 de potencia base efectiva antes del STAB, uno de los ataques de tipo Volador más fuertes del juego. Doble Filo es el segundo STAB potenciado igual. A Bocajarro rompe Acero, Roca y Normal que aguantan Volador. Ida y Vuelta mantiene el momentum y evita quedar bloqueado en el movimiento equivocado. Cinta Elección porque su fragilidad (85/70/60) lo hace un rompedor de entrada y salida, no un sweeper que se queda a montar. Alegre para pelear la carrera con las bases 100. Intimidación se reserva para un uso defensivo que sus defensas no sostienen.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Revenge killer: la Velocidad 100 pasa a 150 efectiva y supera a todo el tier natural y a scarfers lentos.'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Flexibilidad de movimientos a cambio del retroceso sumado de Vidasfera y Audaz.'
        },
        {
          slot: 'move',
          value: 'QUICKATTACK',
          note: 'Prioridad para rematar, también potenciada por Audaz cuando corresponde.',
          replaces: 'UTURN'
        },
        {
          slot: 'move',
          value: 'FINALGAMBIT',
          note: 'Sacrificio que inflige daño fijo igual a tus PS actuales para abrir un hueco.',
          replaces: 'DOUBLEEDGE'
        }
      ]
    }
  ]
}

export default staraptor
