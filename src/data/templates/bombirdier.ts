import type { PokemonTemplateSet } from '../../lib/types'

const bombirdier: PokemonTemplateSet = {
  internalName: 'BOMBIRDIER',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'viable',
      ability: 'ROCKYPAYLOAD',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['KNOCKOFF', 'STONEEDGE', 'ROCKBLAST', 'BRAVEBIRD'],
      justification:
        'Bombirdier explota Transportarrocas, que potencia los movimientos de roca un 50%: con la Cinta Elección y Ataque 113, Roca Afilada se convierte en un STAB de cobertura devastador y Pedrada rompe sustitutos y objetos de un solo uso. La cobertura de siniestro (Desarme) quita objetos, y Pájaro Osado es la STAB de volador con retroceso. La Velocidad 82 deja al set como rompemuros y no barredor: entra desde el cambio, golpea fuerte con la Cinta y rota. Entusiasmo [H] solo ofrece el mismo bonus de Ataque con 20% de precisión perdida, así que Transportarrocas es estrictamente mejor para acertar las rocas. Naturaleza Firme y 252 At. maximizan el daño; el Ataque Especial 60 queda sin invertir por ser un set íntegro físico.',
      alternatives: [
        {
          slot: 'ability',
          value: 'HUSTLE',
          note: 'Entusiasmo da el mismo +50% a todos los movimientos, no solo roca, pero resta 20% de precisión a los ofensivos, arriesgando Pájaro Osado y Roca Afilada.'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Daño comparable sin el bloqueo de movimiento de la Cinta, cediendo el pico de potencia de un objeto de un solo uso a cambio de poder cambiar de golpe.'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Ida y Vuelta mantiene el momentum al romper, cediendo la cuchilla de Pedrada contra sustitutos.',
          replaces: 'ROCKBLAST'
        },
        {
          slot: 'item',
          value: 'EXPERTBELT',
          note: 'Potencia solo los golpes supereficaces, ganando flexibilidad de set suelto a cambio de menos daño neutro.'
        }
      ]
    }
  ]
}

export default bombirdier