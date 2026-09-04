import type { PokemonTemplateSet } from '../../lib/types'

const machamp: PokemonTemplateSet = {
  internalName: 'MACHAMP',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'NOGUARD',
      item: 'ASSAULTVEST',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DYNAMICPUNCH', 'KNOCKOFF', 'ICEPUNCH', 'STONEEDGE'],
      justification:
        'Machamp con Indefenso, que hace que todos los movimientos acierten siempre, convierte a Puño Dinámico en un STAB de 100 de potencia con 100% de precisión que además confunde siempre, una fuente de disrupción enorme. Con Ataque 130 y PS 90 / Def 80 / Def. Esp. 85, el Chaleco Asalto lo transforma en un chequeo físico y especial que pivota entre sus objetivos sin dejar de golpear fuerte. Desarme quita objetos y castiga a los cambios; Puño Hielo cubre a Volador, Tierra y Dragón; Roca Afilada, con precisión perfecta gracias a la habilidad, pega a Fuego y Volador que resisten Lucha. Naturaleza Firme y reparto en PS y Ataque para maximizar potencia y aprovechar el volumen que da el Chaleco. La Velocidad 55 es baja, pero el planteamiento no depende de ella: Machamp golpea después y aguanta. Indefenso también implica que los ataques rivales nunca fallan contra él, un coste asumible frente a la fiabilidad total de Puño Dinámico.',
      alternatives: [
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos permiten sustituir un ataque por Corpulencia o ganar longevidad sin objeto ofensivo, en un set de tres ataques.'
        },
        {
          slot: 'move',
          value: 'HEAVYSLAM',
          note: 'Cuerpo Pesado alcanza a las Hada como Clefable que muran el tipo Lucha, cediendo la cobertura contra Fuego y Volador.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'move',
          value: 'BULLETPUNCH',
          note: 'Puño Certero, con prioridad +1, revienta a amenazas frágiles y más rápidas dado el problema de Velocidad 55, a cambio de la cobertura de Hielo.',
          replaces: 'ICEPUNCH'
        },
        {
          slot: 'ability',
          value: 'GUTS',
          note: 'Agallas habilita el set alternativo de rompedor con Llamasfera descrito en la segunda plantilla.'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'GUTS',
      item: 'FLAMEORB',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FACADE', 'CLOSECOMBAT', 'KNOCKOFF', 'ICEPUNCH'],
      justification:
        'Variante de rompemuros que usa Agallas: al sufrir un problema de estado, el Ataque sube un 50% y se ignora la reducción de Ataque por quemadura. Con Llamasfera autoinfligida, Machamp llega a un Ataque efectivo muy alto y queda inmune a otros estados como parálisis, sueño o envenenamiento. Fingido pasa de 70 a 140 de potencia con la quemadura activa y se suma al x1,5 de Agallas, volviéndose un STAB Normal brutal; A Bocajarro es el golpe de tipo Lucha de máxima potencia; Puño Hielo y Desarme completan la cobertura y la utilidad. Naturaleza Firme y reparto en PS y Ataque. Es viable y no óptimo porque necesita un turno para que la Llamasfera se active, sufre el desgaste de la quemadura sin Muro Mágico y A Bocajarro baja sus defensas en un Pokémon ya lento.',
      alternatives: [
        {
          slot: 'move',
          value: 'STONEEDGE',
          note: 'Roca Afilada pega a Volador y Fuego que resisten Lucha y Normal, cediendo la cobertura de Hielo contra Tierra y Dragón.',
          replaces: 'ICEPUNCH'
        }
      ]
    }
  ]
}

export default machamp
