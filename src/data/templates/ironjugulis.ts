import type { PokemonTemplateSet } from '../../lib/types'

const ironjugulis: PokemonTemplateSet = {
  internalName: 'IRONJUGULIS',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'QUARKDRIVE',
      item: 'BOOSTERENERGY',
      nature: 'TIMID',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DARKPULSE', 'HURRICANE', 'EARTHPOWER', 'FLASHCANNON'],
      justification:
        'Iron Jugulis es el atacante especial oscuro/volador de Añil V4.13: SpA 122 y Velocidad 108. Pulso Umbrío y Vendaval forman la doble STAB con la que castiga a los muros psíquicos y planta, y Piedra Tierra cubre a los tipos Roca y Eléctrico que resisten Volador, mientras Cañón Resplandor pega a los Hada que amenazan su tipado. El Tanque de Energía Potenciadora activa Carga Cuark y refuerza su ofensa. La naturaleza Miedosa con 252 en Velocidad lo deja por encima de la base 108 y PS 94 le dan, a diferencia de otros barredores especiales, margen para errar un Vendaval. Volador de baja precisión se compensa con la capacidad de cambiar de objetivo y pivotar.',
      alternatives: [
        {
          slot: 'move',
          value: 'AIRSLASH',
          note: 'Corte Aéreo sacrifica 30 de potencia de Vendaval por precisión perfecta y 30% de flinch, más fiable en competición pareja.',
          replaces: 'HURRICANE'
        },
        {
          slot: 'move',
          value: 'TAILWIND',
          note: 'Viento Afín dobla la velocidad del equipo al entrar, rol de apoyo a costa de un hueco de ataque (solo sin Cinta).',
          replaces: 'FLASHCANNON'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Gafas Elección dan el pico de daño de Pulso Umbrío a costa de quedar bloqueado, manteniendo la pérdida de ritmo controlada.',
          replaces: 'BOOSTERENERGY'
        }
      ]
    }
  ]
}

export default ironjugulis
