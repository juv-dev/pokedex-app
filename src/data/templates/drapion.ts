import type { PokemonTemplateSet } from '../../lib/types'

const drapion: PokemonTemplateSet = {
  internalName: 'DRAPION',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'BATTLEARMOR',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'KNOCKOFF', 'CROSSPOISON', 'EARTHQUAKE'],
      justification:
        'Velocidad 95 y Defensa 110. Danza Espada aprovecha esa Defensa para prepararse frente a ataques físicos. Desarme retira el objeto y pega fuerte; Veneno Cruzado es el STAB con alta probabilidad de crítico; Terremoto cubre Acero, Fuego, Roca y Veneno rival. El tipo Veneno/Siniestro solo teme a Tierra, que su volumen ayuda a anticipar. Armadura Batalla anula los golpes críticos, clave para un sweeper que se prepara sin miedo a un crítico afortunado. Alegre para el tope de Velocidad.',
      alternatives: [
        {
          slot: 'move',
          value: 'POISONJAB',
          note: 'STAB de potencia estable si el azar de crítico de Veneno Cruzado no compensa.',
          replaces: 'CROSSPOISON'
        },
        {
          slot: 'move',
          value: 'AQUATAIL',
          note: 'Contra Tierra y Roca físicos como Hippowdon y colocadores de Roca que aguantan el resto.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'ability',
          value: 'SNIPER',
          note: 'Con Veneno Cruzado si se busca daño de crítico multiplicado por 2,25 en vez de la inmunidad a críticos.'
        }
      ]
    },
    {
      role: 'hazard-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'BATTLEARMOR',
      item: 'LEFTOVERS',
      nature: 'JOLLY',
      evs: [252, 0, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['TOXICSPIKES', 'KNOCKOFF', 'TAUNT', 'EARTHQUAKE'],
      justification:
        'Con Velocidad 95, Drapion es un colocador rápido de Trampa Púas y un usuario fiable de Mofa que frena a otros colocadores, la recuperación y el setup rival. Desarme aporta utilidad de objeto y daño al pivotar. Terremoto evita ser paja total ante Acero y Veneno. Armadura Batalla mantiene la fiabilidad. Perfil viable de control de campo.',
      alternatives: [
        {
          slot: 'move',
          value: 'WHIRLWIND',
          note: 'Fuerza cambios sobre las Púas y el Toxispás en lugar de frenar setup con Mofa.',
          replaces: 'TAUNT'
        }
      ]
    }
  ]
}

export default drapion
