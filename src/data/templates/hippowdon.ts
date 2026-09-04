import type { PokemonTemplateSet } from '../../lib/types'

const hippowdon: PokemonTemplateSet = {
  internalName: 'HIPPOWDON',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SANDSTREAM',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['EARTHQUAKE', 'SLACKOFF', 'STEALTHROCK', 'WHIRLWIND'],
      justification:
        'PS 108 y Defensa 118. Chorro Arena instala tormenta de arena al entrar, que sube la Defensa Especial de los tipos Roca y desgasta al resto, tapando en parte su flanco especial débil de 72. Descanso es recuperación fiable del 50%; Trampa Rocas aprovecha la seguridad de sus cambios; Ventisca fuerza cambios, acumula el daño de arena y trampas e impide el setup rival. Terremoto es el STAB obligatorio. Agitada y máxima Defensa para batir a los atacantes físicos.',
      alternatives: [
        {
          slot: 'move',
          value: 'ICEFANG',
          note: 'Contra Dragón, Planta y Volador que entrarían gratis frente al phazing.',
          replaces: 'WHIRLWIND'
        },
        {
          slot: 'move',
          value: 'YAWN',
          note: 'Fuerza cambios sin ceder el control del campo si el equipo ya tiene otra forma de frenar el setup.',
          replaces: 'WHIRLWIND'
        },
        {
          slot: 'item',
          value: 'SMOOTHROCK',
          note: 'Alarga la arena a ocho turnos si el equipo la aprovecha ofensivamente, a cambio de la recuperación pasiva de Restos.'
        }
      ]
    }
  ]
}

export default hippowdon
