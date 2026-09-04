import type { PokemonTemplateSet } from '../../lib/types'

const gougingfire: PokemonTemplateSet = {
  internalName: 'GOUGINGFIRE',
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
      moves: ['DRAGONDANCE', 'FLAREBLITZ', 'OUTRAGE', 'STONEEDGE'],
      justification:
        'Gouging Fire auna Ataque 115, Defensa 121 y PS 105 sobre el tipo Fuego/Dragón: un barrefuerte voluminoso que aguanta el golpe del setup. Paleosíntesis con Energía Potenciadora sube su Ataque de forma autónoma, y Danza Dragón le da +1 Ataque y +1 Velocidad, de modo que en un turno acumula un Ataque altísimo y se adelanta en velocidad. Envite Ígneo (120, STAB Fuego) spamea quemando en contacto, Enfado (120, STAB Dragón) rompe muros aunque confunde al final, y Roca Afilada pega a Volador que resiste el par. Naturaleza Alegre y reparto en Ataque y Velocidad para, tras una Danza Dragón, superar la franja más rápida; con PS 105 y Defensa 121 el set sobrevive al cambio y a un golpe neutral.',
      alternatives: [
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos y Sol Matinal, en un set con tres ataques más recuperación, ceden el impulso inmediato de la Paleosíntesis por longevidad.'
        },
        {
          slot: 'move',
          value: 'EARTHQUAKE',
          note: 'Terremoto cubre a Roca y Acero que resisten Fuego/Dragón, a cambio del golpe crítico afilado contra Voladores.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'nature',
          value: 'ADAMANT',
          note: 'Firme maximiza el daño bruto tras la Danza Dragón, asumiendo que el +1 de Velocidad ya cubre a los rivales más rápidos.'
        }
      ]
    }
  ]
}

export default gougingfire
