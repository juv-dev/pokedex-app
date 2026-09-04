import type { PokemonTemplateSet } from '../../lib/types'

const hoopa: PokemonTemplateSet = {
  internalName: 'HOOPA',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MAGICIAN',
      item: 'LIFEORB',
      nature: 'MODEST',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'PSYSHOCK', 'SHADOWBALL', 'FOCUSBLAST'],
      justification:
        'At.Esp 150 es una de las cifras más altas del juego, pero 70 de Velocidad lo dejan fuera de la carrera ofensiva, así que su lugar natural es el de rompemuros que primero acumula y luego destroza. Maquinación dobla el At.Esp, y desde ese pico Psicocarga golpea por el lado físico a muros especiales como Blissey y a los Veneno; Bola Sombra cubre el espejo contra otros Psíquico y a los Fantasma; Onda Certera rompe a los Siniestro y Acero que si no la aguantan indefinidamente. Vidasfera potencia todo el set a cambio de PS. Prestidigitador roba el objeto del primer rival al que golpee con daño directo, un plus situacional que puede quitarle los Restos o la Vidasfera a un muro. Modesta porque la Velocidad no se arregla; IV de Ataque a 0 por la confusión.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Presión inmediata sin turno de setup: se cambia Maquinación por un cuarto ataque como Rayo o Truco.'
        },
        {
          slot: 'move',
          value: 'THUNDERBOLT',
          note: 'Cobertura de Eléctrico contra Agua y Volador si el equipo ya tiene con qué romper Acero.',
          replaces: 'FOCUSBLAST'
        },
        {
          slot: 'move',
          value: 'PSYCHIC',
          note: 'Más potencia bruta que Psicocarga contra objetivos con Defensa Especial baja.',
          replaces: 'PSYSHOCK'
        }
      ]
    }
  ]
}

export default hoopa
