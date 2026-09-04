import type { PokemonTemplateSet } from '../../lib/types'

const aurorus: PokemonTemplateSet = {
  internalName: 'AURORUS',
  templates: [
    {
      role: 'screens-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SNOWWARNING',
      item: 'LIGHTCLAY',
      nature: 'BOLD',
      evs: [252, 0, 200, 0, 56, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['AURORAVEIL', 'FREEZEDRY', 'EARTHPOWER', 'STEALTHROCK'],
      justification:
        'PS 123 y un reparto defensivo decente sostienen un lead de utilidad, y Nevada es la pieza clave: al entrar activa la nevada, requisito de Velo Aurora, que reduce el daño físico y especial recibido por el equipo durante cinco turnos. Refleluz estira esas cinco a ocho. Con esa base, el turno 1 casi siempre entra Velo Aurora o Trampa Rocas. Frío Polar es el STAB spameable que además golpea supereficaz a los tipos Agua que suelen entrar a un tipo Roca-Hielo; Tierra Viva castiga Acero y Fuego que ignoran el hielo. La inversión maximiza PS y Defensa física porque el lado especial ya está cubierto por la propia nevada y por Velo Aurora mientras dura. Naturaleza Osada sobre una ofensiva porque el trabajo es aguantar y colocar, no barrer.',
      alternatives: [
        {
          slot: 'move',
          value: 'ENCORE',
          note: 'Bloquea al rival en un movimiento de apoyo o setup y regala un turno al equipo, a cambio de la trampa de Roca.',
          replaces: 'STEALTHROCK'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Parálisis para frenar a un sweeper rápido si el equipo ya tiene otro colocador de Trampa Rocas.',
          replaces: 'EARTHPOWER'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Ignora Trampa Rocas al entrar si el rol pasa a ser puramente ofensivo sin pantallas.'
        }
      ]
    }
  ]
}

export default aurorus
