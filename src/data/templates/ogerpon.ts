import type { PokemonTemplateSet } from '../../lib/types'

const ogerpon: PokemonTemplateSet = {
  internalName: 'OGERPON',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'DEFIANT',
      item: 'FOCUSSASH',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'IVYCUDGEL', 'PLAYROUGH', 'KNOCKOFF'],
      justification:
        'Ogerpon de Añil es un tipo Planta puro con Ataque 120 y Velocidad 110, y su habilidad Competitivo sube su Ataque cada vez que el rival le baja una característica: eso convierte las Intimidaciones o bajadas de Velocidad del contrario en un +2 gratuito con el que entrar a barrer. Danza Espada aporta el setup principal (+2 Ataque), Garrote Liana es el STAB Planta de 100 con 100% de precisión (más fiable que Latigazo de 85), Cachete (90 de tipo Hada) castiga a Siniestro y Dragón que resisten Planta, y Desarme quita el objeto y golpea Siniestro. Banda Aguante garantiza quedarse a 1 PS tras un golpe mortal, y con la Naturaleza Alegre y el reparto en Ataque y Velocidad esa ventaja basta para dar la Danza Espada y barrer al turno siguiente.',
      alternatives: [
        {
          slot: 'move',
          value: 'POWERWHIP',
          note: 'Latigazo (120, 85% preciso) da el STAB Planta de máximo daño para romper muros, a cambio de la fiabilidad del 100% de Garrote Liana.',
          replaces: 'IVYCUDGEL'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Ida y Vuelta pivotea para conservar el factor sorpresa de Competitivo, a costa de un slot de cobertura.',
          replaces: 'KNOCKOFF'
        }
      ]
    }
  ]
}

export default ogerpon
