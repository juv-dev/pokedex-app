import type { PokemonTemplateSet } from '../../lib/types'

const grumpig: PokemonTemplateSet = {
  internalName: 'GRUMPIG',
  templates: [
    {
      role: 'wall-special',
      isPrimary: true,
      confidence: 'viable',
      ability: 'THICKFAT',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'PSYSHOCK', 'FOCUSBLAST', 'REST'],
      justification:
        'Def. Esp. 110 más Sebo (reduce a la mitad el daño de Fuego y Hielo) hacen de Grumpig un muro especial muy sólido. Paz Mental convierte esa longevidad en condición de victoria: Psicoataque (Psyshock) rompe a los muros especiales rivales al golpear por Defensa, Bola Focal cubre a Siniestro y Acero, y Reposo es la única recuperación fiable del movepool. Serena con PS y Def. Esp. al máximo para que la primera Paz Mental ya lo saque del rango de la mayoría de atacantes especiales.',
      alternatives: [
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Muro puro que reparte parálisis en lugar de prepararse.',
          replaces: 'CALMMIND'
        },
        {
          slot: 'move',
          value: 'TAUNT',
          note: 'Corta la preparación y el stall rival.',
          replaces: 'FOCUSBLAST'
        },
        {
          slot: 'item',
          value: 'CHESTOBERRY',
          note: 'Despierta de inmediato del primer Reposo para no ceder momentum.'
        }
      ]
    }
  ]
}

export default grumpig
