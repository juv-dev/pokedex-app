import type { PokemonTemplateSet } from '../../lib/types'

const lunatone: PokemonTemplateSet = {
  internalName: 'LUNATONE',
  templates: [
    {
      role: 'trick-room-setter',
      isPrimary: true,
      confidence: 'viable',
      ability: 'LEVITATE',
      item: 'LIFEORB',
      nature: 'QUIET',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['TRICKROOM', 'PSYCHIC', 'POWERGEM', 'EARTHPOWER'],
      justification:
        'At. Esp. 115 sobre un cuerpo de Velocidad 70, con IV de Velocidad 0 y naturaleza Mansa, hace de Lunatone a la vez el colocador de Espacio Raro y uno de los atacantes más veloces dentro de él. Levitación lo mantiene a salvo de los movimientos de Tierra que castigan a los Psíquicos lentos. Psíquico y Joya de Luz son doble STAB, y Tierra Viva cubre a los Acero y Siniestro que los resisten. Vidasfera porque Espacio Raro solo dura cinco turnos y cada golpe tiene que contar.',
      alternatives: [
        {
          slot: 'move',
          value: 'MOONBLAST',
          note: 'Pega a los Siniestro y Dragón que frenan a ambos STAB.',
          replaces: 'EARTHPOWER'
        },
        {
          slot: 'move',
          value: 'NASTYPLOT',
          note: 'Condición de victoria por preparación en equipos que no juegan Espacio Raro.',
          replaces: 'TRICKROOM'
        },
        {
          slot: 'item',
          value: 'POWERHERB',
          note: 'Permite un Rayo Meteórico inmediato como golpe pesado puntual en lugar de Joya de Luz.'
        }
      ]
    }
  ]
}

export default lunatone
