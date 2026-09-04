import type { PokemonTemplateSet } from '../../lib/types'

const floatzel: PokemonTemplateSet = {
  internalName: 'FLOATZEL',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SWIFTSWIM',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['WAVECRASH', 'ICESPINNER', 'LOWKICK', 'AQUAJET'],
      justification:
        'Velocidad 115 y Ataque 110 sobre un cuerpo frágil (85/55/50) definen a un sweeper puro. Embate Ola (Wave Crash, 120) es el STAB de máxima potencia; su retroceso de 1/3 se asume por el rol ofensivo. Rueda Hielo cubre Planta, Dragón, Volador y Tierra y elimina campos activos. Patada Baja pega durísimo a Normales y Aceros pesados que resisten Agua. Acua Jet da prioridad para rematar. Vidasfera para el empujón general de daño. Nado Rápido es el detalle a explotar: bajo lluvia la Velocidad se duplica y Floatzel supera a todo el metajuego, por lo que en equipos de lluvia conviene pasar a naturaleza Firme y maximizar potencia. Velo Agua solo evita quemaduras.',
      alternatives: [
        {
          slot: 'nature',
          value: 'ADAMANT',
          note: 'En equipos de lluvia con Nado Rápido la Velocidad ya está resuelta; maximizá el Ataque.'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Rompedor puro; conservá Acua Jet o Voltiotorno como salida para no quedar bloqueado.'
        },
        {
          slot: 'move',
          value: 'LIQUIDATION',
          note: 'STAB sin retroceso con posible bajar Defensa, para partidas largas.',
          replaces: 'WAVECRASH'
        },
        {
          slot: 'move',
          value: 'CRUNCH',
          note: 'Pega a Fantasma y Psíquico y a Slowbro; perdés el golpe a Normal y Acero pesado.',
          replaces: 'LOWKICK'
        },
        {
          slot: 'move',
          value: 'FLIPTURN',
          note: 'Momentum de pivote a cambio de la prioridad de Acua Jet.',
          replaces: 'AQUAJET'
        }
      ]
    }
  ]
}

export default floatzel
