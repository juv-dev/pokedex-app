import type { PokemonTemplateSet } from '../../lib/types'

const tangela: PokemonTemplateSet = {
  internalName: 'TANGELA',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'viable',
      ability: 'REGENERATOR',
      item: 'EVIOLITE',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['GIGADRAIN', 'KNOCKOFF', 'SLEEPPOWDER', 'SYNTHESIS'],
      justification:
        'Tangela evoluciona a Tangrowth, así que puede equipar Mineral Evolutivo, que sube su Defensa y Def. Esp. un 50%. Con Defensa 115 de base, esa subida la deja como muro físico muy sólido; su punto débil es la Def. Esp. 40, que el Mineral solo palía en parte. Regeneración le devuelve un tercio de los PS máximos cada vez que sale de combate, de modo que cada cambio es curación gratuita y puede repetir entradas frente a atacantes físicos. Gigadrenado es el STAB que además roba PS, sumándose a Regeneración y a Fotosíntesis para hacerla muy difícil de desgastar; Desarme quita objetos y castiga a Psíquicos y Fantasmas; Somnífero deja fuera de juego a una amenaza o a un rival que quiera montar setup. Osada y máximo reparto en PS y Defensa para exprimir su flanco físico, que es lo único que hace de forma destacada.',
      alternatives: [
        {
          slot: 'ability',
          value: 'GRASSYSURGE',
          note: 'Herbogénesis crea un campo de hierba al entrar que potencia los movimientos de Planta, cura de forma pasiva a los que están en el suelo y debilita Terremoto; útil en equipos de campo, a cambio de la recuperación por cambio de Regeneración.'
        },
        {
          slot: 'move',
          value: 'LEECHSEED',
          note: 'Drenadoras aporta desgaste pasivo continuo y presiona a rivales que no atacan, cediendo la incapacitación inmediata de Somnífero.',
          replaces: 'SLEEPPOWDER'
        },
        {
          slot: 'move',
          value: 'POWERWHIP',
          note: 'Latigazo (120) da un STAB físico contundente para no ser tan pasiva contra rivales inmunes al drenado, a costa de la recuperación de Gigadrenado.',
          replaces: 'GIGADRAIN'
        }
      ]
    }
  ]
}

export default tangela
