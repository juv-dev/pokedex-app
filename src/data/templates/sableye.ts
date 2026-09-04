import type { PokemonTemplateSet } from '../../lib/types'

const sableye: PokemonTemplateSet = {
  internalName: 'SABLEYE',
  templates: [
    {
      role: 'stall',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRANKSTER',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['WILLOWISP', 'RECOVER', 'FOULPLAY', 'TAUNT'],
      justification:
        'Bromista da prioridad a los movimientos de estado, lo que permite a Sableye adelantar Fuego Fatuo, Recuperación y Mofa incluso ante rivales más rápidos. El tipo Siniestro/Fantasma solo tiene la debilidad de Hada, así que con reparto físico defensivo aguanta la mayoría de los ataques neutrales. Fuego Fatuo quema a los físicos que intenta frenar; Recuperación con prioridad mantiene los PS; Jugarreta usa el Ataque del rival, de modo que Sableye no necesita invertir en el suyo y castiga sobre todo a los físicos potentes; Mofa corta trampas, recuperación y setup rival, que es como Sableye gana los duelos de desgaste. Los Pokémon de tipo Siniestro son inmunes a los movimientos lanzados con Bromista, un punto ciego a tener presente.',
      alternatives: [
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Quita objetos en vez de escalar con el Ataque rival; mejor contra objetivos de Ataque bajo.',
          replaces: 'FOULPLAY'
        },
        {
          slot: 'move',
          value: 'ENCORE',
          note: 'Bloquea al rival en un movimiento de apoyo y fuerza el cambio, a cambio del control de trampas de Mofa.',
          replaces: 'TAUNT'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Suma daño por contacto sobre los físicos ya quemados.'
        }
      ]
    }
  ]
}

export default sableye
