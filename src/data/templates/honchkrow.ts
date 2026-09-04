import type { PokemonTemplateSet } from '../../lib/types'

const honchkrow: PokemonTemplateSet = {
  internalName: 'HONCHKROW',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MOXIE',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BRAVEBIRD', 'SUCKERPUNCH', 'SUPERPOWER', 'PURSUIT'],
      justification:
        'Ataque 125 con una Velocidad de solo 71. Autoestima convierte cada K.O. en un nivel de Ataque, de modo que un único derribo lo deja rompiendo equipos pese a la Velocidad mediocre. Pájaro Osado es el STAB principal; Golpe Bajo, con prioridad +1, compensa la lentitud y remata; A Bocajarro cubre Acero, Roca y Normal; Persecución atrapa a los Psíquico y Fantasma que intenten cambiar y dobla su potencia en esa jugada. Vidasfera por encima de Cinta Elección para no quedar bloqueado en el movimiento equivocado cuando el rival cambia. Firme para maximizar la potencia, ya que la Velocidad es causa perdida.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Potencia fija mayor desde el primer turno si el equipo asume el bloqueo de movimiento.'
        },
        {
          slot: 'move',
          value: 'LASHOUT',
          note: 'STAB siniestro fiable cuando no hay presa que atrapar con Persecución y Golpe Bajo puede fallar.',
          replaces: 'PURSUIT'
        },
        {
          slot: 'move',
          value: 'ROOST',
          note: 'Alarga la vida útil como rompemuros a cambio de la utilidad de atrapar con Persecución.',
          replaces: 'PURSUIT'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'INSOMNIA',
      item: 'LIFEORB',
      nature: 'MODEST',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'DARKPULSE', 'HEATWAVE', 'HURRICANE'],
      justification:
        'Ataque Especial 105 y un movepool especial amplio. Maquinación dispara Pulso Umbrío, Onda Ígnea y Vendaval a rangos que rompen muros; Vendaval golpea a Lucha y Planta que resisten el resto, y Onda Ígnea castiga a los Acero. Insomnio evita que lo duerman mientras prepara. Perfil secundario frente al set físico porque la Velocidad 71 sigue siendo el lastre y ninguno de estos ataques tiene prioridad. El IV de Ataque en 0 reduce el daño de confusión y de Juego Sucio.',
      alternatives: [
        {
          slot: 'ability',
          value: 'MOXIE',
          note: 'Si se prioriza el efecto bola de nieve tras un K.O. sobre la inmunidad al sueño.'
        },
        {
          slot: 'move',
          value: 'ROOST',
          note: 'Longevidad para varias rondas de presión si el equipo aporta la potencia de cierre.',
          replaces: 'HURRICANE'
        }
      ]
    }
  ]
}

export default honchkrow
