import type { PokemonTemplateSet } from '../../lib/types'

const armaldo: PokemonTemplateSet = {
  internalName: 'ARMALDO',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'viable',
      ability: 'BATTLEARMOR',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'STONEEDGE', 'XSCISSOR', 'AQUAJET'],
      justification:
        'Ataque 125 y un volumen 75/100/80 permiten a Armaldo montar Danza Espada frente a los físicos que aguanta. Armadura Batalla elimina el riesgo de que un crítico fortuito rompa un turno defensivo. El doble STAB Roca/Bicho de Roca Afilada y Tijera X pega fuerte pero lo frenan los Acero, así que la prioridad de Chorro de Agua es lo que en realidad cierra partidas dada la Velocidad 45. Firme, con reparto voluminoso para que el turno de preparación sea fiable.',
      alternatives: [
        {
          slot: 'move',
          value: 'RAPIDSPIN',
          note: 'Variante de retirada de trampas que conserva prioridad y STAB.',
          replaces: 'SWORDSDANCE'
        },
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Lead dedicado a colocar trampas.',
          replaces: 'AQUAJET'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Durabilidad en lugar del pico de daño de Vidasfera.'
        }
      ]
    }
  ]
}

export default armaldo
