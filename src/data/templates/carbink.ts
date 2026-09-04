import type { PokemonTemplateSet } from '../../lib/types'

const carbink: PokemonTemplateSet = {
  internalName: 'CARBINK',
  templates: [
    {
      role: 'screens-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STURDY',
      item: 'LIGHTCLAY',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['REFLECT', 'LIGHTSCREEN', 'STEALTHROCK', 'MISTYEXPLOSION'],
      justification:
        'Defensa 150 y Def.Esp 150 con solo 50 de PS: el volumen bruto es enorme pero la vida es corta, y ahí entra Robustez, que garantiza sobrevivir a cualquier golpe desde PS máximos. Eso convierte a Carbink en un colocador de pantallas casi infalible: aguanta el primer golpe sí o sí y deja Reflejo y Pantalla Luz, extendidas a ocho turnos por Refleluz. Trampa Rocas añade daño de entrada en el mismo lead, y Explosión Cortante es la salida: hace daño de tipo Hada y deja paso limpio a la ofensiva del equipo una vez cumplida la función. El tipo Roca-Hada le da resistencias útiles (Normal, Volador, Fuego, Siniestro, Bicho) para plantar el lead contra buena parte de los abridores habituales. Inversión en PS y Defensa física porque Robustez ya cubre el golpe único.',
      alternatives: [
        {
          slot: 'move',
          value: 'MOONBLAST',
          note: 'STAB de Hada persistente si el equipo no quiere sacrificar a Carbink con Explosión Cortante.',
          replaces: 'MISTYEXPLOSION'
        },
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Aprovecha la Defensa 150 como daño ofensivo y castiga a los Acero y Roca que entran a las pantallas.',
          replaces: 'STEALTHROCK'
        }
      ]
    },
    {
      role: 'trick-room-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'STURDY',
      item: 'MENTALHERB',
      nature: 'RELAXED',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['TRICKROOM', 'STEALTHROCK', 'MOONBLAST', 'BODYPRESS'],
      justification:
        'La misma idea de lead irrompible aplicada a Espacio Raro. Con 50 de Velocidad base, naturaleza Plácida e IV de Velocidad a 0, Carbink es uno de los Pokémon más lentos posibles, ideal para que el equipo lento actúe primero durante cuatro turnos. Robustez asegura que Espacio Raro suba aunque el rival intente noquear al lead. Trampa Rocas aprovecha el mismo turno de utilidad; Fuerza Bruta usa la Defensa 150 como ataque y Luz Lunar da un STAB de Hada fiable. Hierba Mental evita que Provocación corte la instalación. Es viable y no óptimo porque depende de que el equipo esté construido alrededor de Espacio Raro.',
      alternatives: [
        {
          slot: 'move',
          value: 'MISTYEXPLOSION',
          note: 'Cierra el turno de Espacio Raro haciendo hueco de inmediato para el atacante lento, a cambio de perder presencia en el campo.',
          replaces: 'BODYPRESS'
        }
      ]
    }
  ]
}

export default carbink
