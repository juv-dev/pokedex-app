import type { PokemonTemplateSet } from '../../lib/types'

const quaquaval: PokemonTemplateSet = {
  internalName: 'QUAQUAVAL',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MOXIE',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['AQUASTEP', 'CLOSECOMBAT', 'KNOCKOFF', 'TRIPLEAXEL'],
      justification:
        'Doble bola de nieve: Danza Acuática es un STAB Agua de 80 de potencia que sube la Velocidad del usuario un nivel en cada uso, y Autoestima sube el Ataque un nivel con cada KO. Con Ataque 120 de base, cada danza que conecta acerca el barrido y cada KO lo acelera. A Bocajarro (120, STAB Lucha) es el golpe de cierre contra los muros que resisten Agua, Desarme cubre Fantasma, que es inmune a Lucha, y Psíquico, y Triple Axel pega a Volador, Dragón y Planta que resisten el dúo Agua/Lucha. La Vidasfera potencia las dos danzas necesarias para arrancar. Alegre con 252 de Velocidad: tras una sola Danza Acuática, Quaquaval supera a casi todo el tramo ofensivo del tier con Velocidad efectiva por encima de 400.',
      alternatives: [
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Banda Aguante garantiza la primera Danza Acuática contra un rival más rápido, a cambio del pico de daño de la Vidasfera.'
        },
        {
          slot: 'move',
          value: 'WAVECRASH',
          note: 'Envite Acuático (120 STAB sin condición) sustituye la bola de nieve de Danza Acuática por daño inmediato, con retroceso de 1/3.',
          replaces: 'AQUASTEP'
        },
        {
          slot: 'move',
          value: 'FLIPTURN',
          note: 'Viraje conserva el momentum cuando el barrido no arranca, cediendo la cobertura de Triple Axel.',
          replaces: 'TRIPLEAXEL'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'MOXIE',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['LIQUIDATION', 'CLOSECOMBAT', 'KNOCKOFF', 'TRIPLEAXEL'],
      justification:
        'Quaquaval sin preparación: la Cinta Elección sobre Ataque 120 convierte Hidroariete y A Bocajarro en golpes de rompemuros, y Autoestima premia cada KO incluso con el movimiento bloqueado. PS 85 y Defensa 80 le permiten entrar a cambiar varias veces, y Triple Axel completa la cobertura contra los tipos que resisten Agua y Lucha. Firme maximiza el pico de daño porque el ritmo lo marca la Cinta, no la Velocidad 85. Es viable y no óptimo porque el bloqueo de la Cinta impide escalar con Danza Acuática, perdiendo la identidad de bola de nieve del set principal.',
      alternatives: [
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Ida y Vuelta pivotea entre objetivos sin perder el impulso ofensivo, cediendo la cobertura hielo.',
          replaces: 'TRIPLEAXEL'
        },
        {
          slot: 'move',
          value: 'UPPERHAND',
          note: 'Palma Rauda (prioridad +3) gana el duelo contra movimientos de prioridad rival, a cambio de un cuarto hueco situacional en un set bloqueado.',
          replaces: 'TRIPLEAXEL'
        }
      ]
    }
  ]
}

export default quaquaval