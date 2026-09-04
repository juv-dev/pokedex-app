import type { PokemonTemplateSet } from '../../lib/types'

const whimsicott: PokemonTemplateSet = {
  internalName: 'WHIMSICOTT',
  templates: [
    {
      role: 'support',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRANKSTER',
      item: 'LEFTOVERS',
      nature: 'TIMID',
      evs: [252, 0, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['MOONBLAST', 'ENCORE', 'LEECHSEED', 'UTURN'],
      justification:
        'Bromista da prioridad a los movimientos de estado, y ese es todo el valor de Whimsicott: Bilis lanza Otra Vez y Drenadoras antes que el rival, sin importar la Velocidad. Otra Vez con prioridad bloquea a un setup sweeper o a un rival que se recupera y regala el cambio; Drenadoras mete daño residual y recupera PS aunque Whimsicott salga. Voz Lunar es el STAB obligatorio para no ser pasto de Mofa y para castigar a Dragón, Siniestro y Lucha. Ida y Vuelta conserva el momentum y aprovecha Velocidad 116 para elegir el turno de salida. Restos y el reparto 252/252 lo mantienen entrando varias veces. Nota sobre Bromista en Añil: los rivales de tipo Siniestro son inmunes a estos movimientos de estado, así que contra ellos hay que jugar con Voz Lunar e Ida y Vuelta.',
      alternatives: [
        {
          slot: 'move',
          value: 'TAILWIND',
          note: 'Control de Velocidad para todo el equipo durante cuatro turnos; se prioriza con Bromista, a cambio del pivoteo de Ida y Vuelta.',
          replaces: 'UTURN'
        },
        {
          slot: 'move',
          value: 'TAUNT',
          note: 'Bromista adelanta Mofa para cerrar a muros y a otros colocadores de trampas, a costa del chip continuo de Drenadoras.',
          replaces: 'LEECHSEED'
        },
        {
          slot: 'move',
          value: 'MEMENTO',
          note: 'Sacrificio con prioridad que baja dos niveles Ataque y At. Esp. del rival para abrir a un compañero de setup.',
          replaces: 'UTURN'
        }
      ]
    },
    {
      role: 'sweeper-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'INFILTRATOR',
      item: 'CHOICESPECS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['MOONBLAST', 'GIGADRAIN', 'PSYCHIC', 'UTURN'],
      justification:
        'Uso ofensivo de tier más bajo: Velocidad 116 y At. Esp. 97 con Gafas Elección lo convierten en un limpiador que llega antes que casi toda la ofensiva. Allanamiento es preferible aquí porque atraviesa Sustituto y las pantallas, que son lo que suele salvar a los objetivos frágiles a los que apunta. Voz Lunar y Gigadrenado son el doble STAB, con recuperación en el lado Planta, y Psíquico castiga a Veneno y Lucha. Ida y Vuelta evita quedar bloqueado en un movimiento muerto y mantiene el ritmo. At. Esp. 97 sin subir no rompe muros, por eso es un rol secundario frente al de apoyo con Bromista, que es lo que de verdad define a Whimsicott.',
      alternatives: [
        {
          slot: 'move',
          value: 'ENERGYBALL',
          note: 'Cambia la recuperación de Gigadrenado por 90 de potencia fija y la bajada de Def. Esp.; más presión contra muros.',
          replaces: 'GIGADRAIN'
        }
      ]
    }
  ]
}

export default whimsicott
