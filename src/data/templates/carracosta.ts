import type { PokemonTemplateSet } from '../../lib/types'

const carracosta: PokemonTemplateSet = {
  internalName: 'CARRACOSTA',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STURDY',
      item: 'WHITEHERB',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHELLSMASH', 'LIQUIDATION', 'STONEEDGE', 'AQUAJET'],
      justification:
        'Robustez y Rompecoraza forman el núcleo: aunque Velocidad 32 y el perfil 74/133/65 lo dejarían fuera de cualquier ofensiva, Robustez garantiza sobrevivir con 1 PS al primer golpe desde PS máximos, y ese turno se usa para Rompecoraza. La Hierba Blanca revierte de inmediato la bajada de Defensa y Def. Esp. del propio Rompecoraza, así que Carracosta queda a +2 en Ataque, At. Esp. y Velocidad sin la fragilidad que suele acompañar a la jugada. Tras la subida, Hidroariete o Fuerza Marina y Roca Afilada son el doble STAB, y Acua Jet da prioridad para rematar a rivales debilitados o más rápidos que hayan quedado a rango. Firme maximiza el Ataque físico, que es donde pega más fuerte. El plan es entrar limpio, comer un golpe con Robustez, subir y cerrar.',
      alternatives: [
        {
          slot: 'item',
          value: 'WEAKNESSPOLICY',
          note: 'Si el rival golpea con un supereficaz no letal, suma +2 en ambos ataques encima de Rompecoraza; a cambio no limpia las bajadas de defensa.'
        },
        {
          slot: 'move',
          value: 'EARTHQUAKE',
          note: 'Cobertura Tierra para los Acero y Eléctrico que resisten el doble STAB, a cambio de la prioridad de Acua Jet.',
          replaces: 'AQUAJET'
        },
        {
          slot: 'move',
          value: 'CRUNCH',
          note: 'Golpe Siniestro para los Fantasma y Psíquico que frenan la ofensiva de Roca y Agua.',
          replaces: 'STONEEDGE'
        }
      ]
    }
  ]
}

export default carracosta
