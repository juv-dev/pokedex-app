import type { PokemonTemplateSet } from '../../lib/types'

const articuno: PokemonTemplateSet = {
  internalName: 'ARTICUNO',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'viable',
      ability: 'PRESSURE',
      item: 'HEAVYDUTYBOOTS',
      nature: 'CALM',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FREEZEDRY', 'HURRICANE', 'ROOST', 'DEFOG'],
      justification:
        'Articuno en Añil V4.13 tiene Def. Esp. 125, Defensa 100 y PS 90, un muro mixto con acceso a Respiro como recuperación fiable. Su tipo Hielo/Volador recibe daño cuádruple de Trampa Rocas, así que Botas Gruesas es prácticamente obligado para poder pivotar sin fundirse en dos entradas. Liofilización golpea de forma supereficaz a los Agua, cubriendo el punto ciego habitual del tipo Hielo, y Vendaval es el STAB Volador. Vendaval limpia las trampas del campo propio y Respiro sostiene los PS. Presión acelera el gasto de PP del rival en enfrentamientos largos. Naturaleza Serena y reparto en PS y Def. Esp. para aguantar la ofensiva especial.',
      alternatives: [
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Ida y Vuelta convierte a Articuno en un pivote que cede el turno con ventaja, a cambio del control de trampas de Vendaval.',
          replaces: 'DEFOG'
        },
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Rayo Hielo pega más fuerte de forma general cuando no hace falta el efecto supereficaz de Liofilización contra los Agua.',
          replaces: 'FREEZEDRY'
        },
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Sustituto aprovecha Presión para un plan de desgaste por PP contra rivales sin forma de romper el clon.',
          replaces: 'DEFOG'
        }
      ]
    }
  ]
}

export default articuno
