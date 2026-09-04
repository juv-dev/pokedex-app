import type { PokemonTemplateSet } from '../../lib/types'

const roaringmoon: PokemonTemplateSet = {
  internalName: 'ROARINGMOON',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PROTOSYNTHESIS',
      item: 'BOOSTERENERGY',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONDANCE', 'OUTRAGE', 'CRUNCH', 'EARTHQUAKE'],
      justification:
        'Roaring Moon de Añil es un barrefuerte físico con Ataque 139, Velocidad 119 y PS 105. Paleosíntesis sube su característica más alta (el Ataque) al llevar Energía Potenciadora, garantizando el impulso sin depender de que haya sol, y encima se apila con Danza Dragón (+1 Ataque y +1 Velocidad): el resultado es que en dos turnos alcanza Ataque y Velocidad muy por encima de la franja. Enfado (120) es el STAB de Dragón de máxima potencia para romper muros, Triturar es el STAB Siniestro con 20% de bajar la Defensa, y Terremoto cubre Acero y Roca que resisten el par Dragón/Siniestro. Naturaleza Alegre y reparto en Ataque y Velocidad para superar a la cada vez más poblada franja de 120-135; la baja Defensa Especial (55) queda compensada por la velocidad y por no hacerse target en el setup.',
      alternatives: [
        {
          slot: 'move',
          value: 'STONEEDGE',
          note: 'Roca Afilada pega a Volador que resiste el par y a Fuego, a cambio de la cobertura de suelo de Terremoto.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'move',
          value: 'DRAGONCLAW',
          note: 'Garra Dragón evita la confusión al final de Enfado, a costa de 40 puntos de potencia frente a los muros.',
          replaces: 'OUTRAGE'
        }
      ]
    }
  ]
}

export default roaringmoon
