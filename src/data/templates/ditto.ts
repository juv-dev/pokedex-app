import type { PokemonTemplateSet } from '../../lib/types'

const ditto: PokemonTemplateSet = {
  internalName: 'DITTO',
  templates: [
    {
      role: 'revenge-killer',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'IMPOSTER',
      item: 'CHOICESCARF',
      nature: 'HARDY',
      evs: [252, 0, 0, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['TRANSFORM'],
      justification:
        'Ditto con Impostor es un caso genuinamente competitivo: al entrar se transforma en el rival copiando todos sus stats, movimientos y habilidad a excepción de los PS. Pañuelo Elección se conserva tras la transformación (Transformar no copia el objeto), así que la forma copiada siempre recibe +50% de Velocidad y supera a prácticamente cualquier amenaza que imite. Esto lo convierte en el revenge killer por excelencia contra barredores de setup: un rival que baila Danza Dragón o sube su Ataque Especial se ve imitado con sus propios bonus copiados intactos y eliminado ese mismo turno. Al ser el único movimiento legal, Transformar es el set completo y el reparto no cambia el resultado: la naturaleza neutral y la inversión máxima en PS y Defensa Especial solo buscan que el Pokémon copiado herede el mayor PS posible, única estadística que no se transforma. Es óptimo no por daño propio, sino porque convierte cualquier amenaza física o especial del rival en un arma reversible de un solo turno.',
      alternatives: [
        {
          slot: 'item',
          value: 'QUICKPOWDER',
          note: 'Polvo Rápido duplica la Velocidad base de Ditto solo en su forma original y deja de aportar tras transformarse; se usa únicamente para garantizar que Ditto actúe antes de imitar a un rival a plena presión.'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos dan longevidad residual a la forma copiada, a cambio de renunciar a la ventaja de Velocidad que define el rol de revenge killer.'
        }
      ]
    }
  ]
}

export default ditto
