import type { PokemonTemplateSet } from '../../lib/types'

const zacian: PokemonTemplateSet = {
  internalName: 'ZACIAN',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'INTREPIDSWORD',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['PLAYROUGH', 'SACREDSWORD', 'CLOSECOMBAT', 'PSYCHICFANGS'],
      justification:
        'Zacian en Añil V4.13 (forma base, solo Hada) tiene un perfil de barrer sin parangón: 138 de Velocidad base lo deja por delante de casi todo el metajuego y Espada Indómita le otorga un +1 en Ataque cada vez que entra, de modo que empieza a golpear con un Ataque de 120 ya amplificado sin gastar un turno en mejora. Eso adelanta el sweep y hace innecesario Danza Espada en el set principal. Carantoña es el STAB Hada de alta fidelidad que revienta a Dragón y Siniestro; Espada Santa, al ignorar los cambios de Defensa rivales, derriba a muros que confían en Corpulencia o Defensa Férrea; A Bocajarro (120) cubre a Acero que resiste al Hada; y Psicocolmillo aporta cobertura Psíquica y además derriba pantallas. Vidasfera potencia cada golpe a cambio del 30% de PS, costo que su velocidad absoluta mitiga. Naturaleza Alegre maximiza el factor que define su rol.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta Elección eleva el pico de daño aún más (multiplicando el +1 de Espada Indómita), a costa de quedarse bloqueado en un solo tipo de movimiento por turno.'
        },
        {
          slot: 'move',
          value: 'CRUNCH',
          note: 'Triturar da cobertura Siniestra con bajada de Defensa rival y golpea a Fantasma que resiste Hada, cediendo el acierto garantizado de Espada Santa.',
          replaces: 'SACREDSWORD'
        }
      ]
    }
  ]
}

export default zacian
