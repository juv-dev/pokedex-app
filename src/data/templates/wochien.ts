import type { PokemonTemplateSet } from '../../lib/types'

const wochien: PokemonTemplateSet = {
  internalName: 'WOCHIEN',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TABLETSOFRUIN',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['LEECHSEED', 'GIGADRAIN', 'KNOCKOFF', 'PROTECT'],
      justification:
        'Wo-Chien es un muro de primera línea en Añil V4.13 gracias a la sinergia de Tablilla Debacle: la habilidad reduce el Ataque de todos los demás Pokémon, y con Defensa 100 y Def.Esp 135 sobre PS 85 lo convierte en un absorbegolpes en ambas franjas. Drenadoras sobre el rival da daño residual y curación al usar Protección, Gigadrenado recupera la mitad del daño de su STAB Planta y Desarme le quita los objetos de curación a los muros rivales mientras golpea. Restos completa la recuperación pasiva. La naturaleza Osada y el reparto en PS y Defensa refuerzan el lado que Tablilla Debacle ya mina en el rival, produciendo un muro físico casi impenetrable y un chequeo especial sólido.',
      alternatives: [
        {
          slot: 'move',
          value: 'RUINATION',
          note: 'Calamidad resta la mitad de los PS del rival, presión de desgaste a cambio de la recuperación de Gigadrenado.',
          replaces: 'GIGADRAIN'
        },
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Plancha Corporal convierte la Defensa 100 en daño físico de tipo Lucha, ideal contra el Acero que resiste a la Planta.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'nature',
          value: 'CALM',
          note: 'Naturaleza Mantilla refuerza la Defensa Especial ya altísima en equipos que necesiten priorizar ese lado sobre la Defensa.'
        }
      ]
    }
  ]
}

export default wochien
