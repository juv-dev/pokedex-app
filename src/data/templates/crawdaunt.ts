import type { PokemonTemplateSet } from '../../lib/types'

const crawdaunt: PokemonTemplateSet = {
  internalName: 'CRAWDAUNT',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'ADAPTABILITY',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'CRABHAMMER', 'KNOCKOFF', 'AQUAJET'],
      justification:
        'Adaptable eleva el bono de STAB de x1,5 a x2, así que Martillazo (100 de potencia, crítico frecuente) y Desarme quedan con números de arma de elección aun sin objeto de elección. Ataque 120 y doble STAB Agua/Siniestro casi sin resistencias comunes lo hacen un rompemuros de manual. Danza Espada lo lleva a rangos de OHKO y Chorro de Agua, también potenciado por Adaptable, es la prioridad que compensa la pobre Velocidad 55 y remata a rivales más rápidos ya tocados. Es frágil (63/85/55), por lo que Vidasfera y Danza Espada buscan romper antes de caer. Firme porque su Velocidad no compite con nada.',
      alternatives: [
        {
          slot: 'move',
          value: 'LIQUIDATION',
          note: 'Precisión perfecta frente al 90% de Martillazo, a cambio del ratio de crítico alto.',
          replaces: 'CRABHAMMER'
        },
        {
          slot: 'move',
          value: 'CLOSECOMBAT',
          note: 'Cobertura inmediata contra muros Normal y Acero sin depender de la prioridad.',
          replaces: 'AQUAJET'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Rompe desde el turno uno sin gastar la mejora; en ese caso se sustituye Danza Espada por un cuarto ataque como A Bocajarro.'
        }
      ]
    }
  ]
}

export default crawdaunt
