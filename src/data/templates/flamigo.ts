import type { PokemonTemplateSet } from '../../lib/types'

const flamigo: PokemonTemplateSet = {
  internalName: 'FLAMIGO',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SCRAPPY',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'HIGHJUMPKICK', 'BRAVEBIRD', 'LIQUIDATION'],
      justification:
        'Flamigo combina el doble STAB de lucha y volador con Intrépido, que permite a sus movimientos de Lucha golpear a los de tipo Fantasma y lo hace inmune a Intimidación, eliminando el problema de cobertura que sufre el tipo Lucha. Danza Espada duplica el Ataque 115, Patada Salto Alta (90 de precisión, 130 de potencia) es el remate de lucha, Pájaro Osado el STAB de volador con retroceso y Hidroariete la cobertura de agua que castiga a Roca y Fuego. Naturaleza Firme y 252 At. / 252 PS: la Velocidad 90 es usable pero no dominante, así que se prioriza la potencia y el volumen que le dan PS 82 / Def 74. Vidasfera añade daño sin sacrificar la flexibilidad del setup.',
      alternatives: [
        {
          slot: 'ability',
          value: 'CAMORRISTA',
          note: 'Sube un 20% solo las patadas (Patada Salto Alta, Patada Baja, Doble Patada), a cambio de perder el golpe limpio a Fantasma y la inmunidad a Intimidación de Intrépido.'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Impulso inmediato de Patada Salto Alta y Pájaro Osado al entrar, renunciando a Danza Espada por el bloqueo de movimiento.'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Evita el desgaste de Trampa Rocas al pivotar con Bicho o cambiar, cediendo el boost de la Vidasfera.'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Mantiene el momentum en lugar de la cobertura de agua ante Roca y Fuego.',
          replaces: 'LIQUIDATION'
        }
      ]
    }
  ]
}

export default flamigo