import type { PokemonTemplateSet } from '../../lib/types'

const milotic: PokemonTemplateSet = {
  internalName: 'MILOTIC',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'COMPETITIVE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SCALD', 'RECOVER', 'HAZE', 'FLIPTURN'],
      justification:
        'Con PS 95, Defensa 79 y Defensa Especial 125, Milotic funciona como pivote defensivo especial que además castiga cualquier intento de minarlo: Tenacidad sube dos niveles el Ataque Especial cada vez que el rival le reduce una característica, así que Intimidación, Bilis, Electrotela o una bajada de Defensa lo convierten al instante en una amenaza ofensiva. Recuperación le da cura fiable del 50% sin depender del clima, Niebla borra todas las subidas de características para no perder ante un sweeper que se refuerce en su cara, y Escaldar quema al 30% para mermar a los físicos que buscan aprovechar su Defensa media. Vuelta Rápida conserva el ritmo y cede el turno a un compañero con ventaja. Reparto físicamente defensivo con Osada porque la Defensa Especial base 125 ya no necesita inversión y el flanco físico es el único explotable.',
      alternatives: [
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Cobertura directa para Dragón, Tierra y Volador si el equipo ya controla el setup rival por otras vías.',
          replaces: 'HAZE'
        },
        {
          slot: 'ability',
          value: 'MARVELSCALE',
          note: 'Escama Especial sube la Defensa un 50% mientras Milotic sufra un estado; opción más pasiva y estable frente a equipos sin bajadas de características que activen Tenacidad.'
        },
        {
          slot: 'nature',
          value: 'CALM',
          note: 'Vuelca la resistencia al flanco especial si la amenaza principal del rival es un atacante especial potente.'
        }
      ]
    }
  ]
}

export default milotic
