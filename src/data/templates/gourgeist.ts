import type { PokemonTemplateSet } from '../../lib/types'

const gourgeist: PokemonTemplateSet = {
  internalName: 'GOURGEIST',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'FLASHFIRE',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['WILLOWISP', 'LEECHSEED', 'SYNTHESIS', 'POLTERGEIST'],
      justification:
        'Defensa 122 sobre 85 de PS es una base de muro físico de primer nivel, y Absorbe Fuego la completa: convierte la debilidad x2 a Fuego del tipo Planta-Fantasma en inmunidad total, y de paso potencia sus propios ataques de fuego si alguna vez recibe uno. Síntesis es recuperación instantánea de la mitad de los PS; Drenadoras suma curación pasiva y desgaste; Fuego Fatuo reduce a la mitad el daño físico entrante y arruina a los atacantes que lo tienen por presa fácil. Golpe Fantasma da un STAB de castigo de 110 usando el objeto del rival. El tipo Fantasma aporta inmunidad a Normal y Lucha. Inversión física defensiva máxima. La habilidad es forzada por los datos de Añil, pero encaja perfectamente con el rol.',
      alternatives: [
        {
          slot: 'move',
          value: 'SHADOWSNEAK',
          note: 'Prioridad de tipo Fantasma para rematar sweepers debilitados o frágiles, a cambio de la potencia de Golpe Fantasma.',
          replaces: 'POLTERGEIST'
        },
        {
          slot: 'move',
          value: 'POWERWHIP',
          note: 'STAB de Planta de gran potencia contra Agua y Tierra si el equipo no necesita el castigo de objeto.',
          replaces: 'POLTERGEIST'
        },
        {
          slot: 'move',
          value: 'FOULPLAY',
          note: 'Castiga a los atacantes físicos usando su propio Ataque cuando Fuego Fatuo no basta.',
          replaces: 'WILLOWISP'
        }
      ]
    }
  ]
}

export default gourgeist
