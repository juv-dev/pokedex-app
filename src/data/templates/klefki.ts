import type { PokemonTemplateSet } from '../../lib/types'

const klefki: PokemonTemplateSet = {
  internalName: 'KLEFKI',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRANKSTER',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SPIKES', 'THUNDERWAVE', 'FOULPLAY', 'DAZZLINGGLEAM'],
      justification:
        'Bromista es lo que hace a Klefki: da prioridad a sus movimientos de estado, así que coloca Púas antes de que un rival más lento pueda cortar con Provocación, y reparte Onda Trueno también con prioridad para frenar sweepers. El tipo Acero-Hada aporta un muro de resistencias (Dragón, Bicho, Planta, Psíquico, Hada, y neutralidad a casi todo lo demás) que le permite entrar repetidas veces a poner capas. Juego Sucio usa el Ataque del rival, ideal para un Klefki sin inversión ofensiva y castiga a los físicos que intenten aprovecharlo; Brillo Mágico es un STAB fiable que además impide que los Siniestro, inmunes a los movimientos de Bromista, entren completamente gratis. Restos cubre el desgaste. Inversión física defensiva porque su trabajo es sobrevivir y repetir.',
      alternatives: [
        {
          slot: 'move',
          value: 'MAGICROOM',
          note: 'Anula los objetos rivales durante cinco turnos, útil contra equipos que dependen de bayas o Vidasfera.',
          replaces: 'DAZZLINGGLEAM'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Castiga a los atacantes físicos de contacto que entran a romper a Klefki, a cambio del desgaste pasivo de Restos.'
        }
      ]
    },
    {
      role: 'screens-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'PRANKSTER',
      item: 'LIGHTCLAY',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['REFLECT', 'LIGHTSCREEN', 'THUNDERWAVE', 'SPIKES'],
      justification:
        'Mismo motor, otro objetivo: pantallas con prioridad. Bromista deja Reflejo y Pantalla Luz incluso frente a un rival que intente adelantarse con Provocación, y Refleluz las estira a ocho turnos. Onda Trueno y Púas rellenan los turnos en que las pantallas siguen activas, aprovechando que Klefki suele forzar cambios. Es viable y no óptimo porque como colocador de pantallas compite con opciones más voluminosas, aunque la prioridad garantizada es una ventaja real que pocos ofrecen.',
      alternatives: [
        {
          slot: 'move',
          value: 'FOULPLAY',
          note: 'Añade una vía de daño para no ser completamente pasivo mientras duran las pantallas.',
          replaces: 'SPIKES'
        }
      ]
    }
  ]
}

export default klefki
