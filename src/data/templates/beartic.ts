import type { PokemonTemplateSet } from '../../lib/types'

const beartic: PokemonTemplateSet = {
  internalName: 'BEARTIC',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SLUSHRUSH',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'ICICLECRASH', 'LIQUIDATION', 'CLOSECOMBAT'],
      justification:
        'Beartic es el barredor de nevada del rango: Ataque 130 sobre Velocidad 50 que Quitanieves duplica a 100 efectivos mientras haya nevada, lo que lo deja por delante del tier ofensivo cuando un compañero —Vanilluxe con Nevada es el socio natural en este mismo lote— levanta el clima. Danza Espada aprovecha sus PS 95 para armar un turno y llevar el Ataque a cifras que rompen resistencias. Rompehielos es la STAB de Hielo con opción de amedrentar; Hidroariete cubre a Fuego, Roca y Tierra; A Bocajarro castiga a Acero, Normal y otros Hielo. Naturaleza Firme porque la nevada ya resuelve la Velocidad y conviene todo el Ataque; Vidasfera para maximizar el daño sin encadenarse a un movimiento. Fuera de la nevada su Velocidad 50 lo deja expuesto, así que es una pieza de equipo de clima, no un cierre en solitario.',
      alternatives: [
        {
          slot: 'move',
          value: 'EARTHQUAKE',
          note: 'Castiga a Acero, Fuego y Veneno sin bajar defensas como A Bocajarro.',
          replaces: 'CLOSECOMBAT'
        },
        {
          slot: 'move',
          value: 'AQUAJET',
          note: 'Prioridad para hacer de revenge killer cuando la nevada no está activa.',
          replaces: 'SWORDSDANCE'
        },
        {
          slot: 'ability',
          value: 'SWIFTSWIM',
          note: 'Mismo esquema de barrido bajo lluvia en vez de nevada.'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Potencia máxima sin Danza Espada cuando la nevada ya cubre la Velocidad.',
          replaces: 'LIFEORB'
        },
        {
          slot: 'move',
          value: 'MOUNTAINGALE',
          note: '100 de potencia (85% de precisión) para un pico de daño mayor que Rompehielos.',
          replaces: 'ICICLECRASH'
        }
      ]
    }
  ]
}

export default beartic
