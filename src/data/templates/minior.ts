import type { PokemonTemplateSet } from '../../lib/types'

const minior: PokemonTemplateSet = {
  internalName: 'MINIOR',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SHIELDSDOWN',
      item: 'WHITEHERB',
      nature: 'ADAMANT',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHELLSMASH', 'ACROBATICS', 'STONEEDGE', 'EARTHQUAKE'],
      justification:
        'Minior en Añil V4.13 tiene Escudo Debilitado, que mantiene su coraza defensiva (Defensa 100, Def. Esp. 100) mientras tenga más de la mitad de PS y solo pasa a su forma ofensiva al romperla. Rompecoraza (Shell Smash) es el núcleo: sube Ataque, At. Esp. y Velocidad en dos niveles a costa de bajar Defensa y Def. Esp., y Hierba Blanca anula esa reducción, de modo que la coraza defensiva con 100/100 se conserva intacta mientras el atacante queda con +2/+2/+2. Acrobacias (55, STAB Volador, pero que dobla su potencia a 110 al no llevar objeto) aprovecha que la Hierba Blanca se consume tras la subida de stats: el golpe de tipo Volador sale a máxima potencia sin pagar por artículo. Roca Afilada (100, STAB Roca) es la cobertura de cierre y Terremoto (100) cubre a los Acero y Veneno que resisten Volador y Roca. Firme y 252 en Ataque con 252 en Velocidad; la coraza y la naturaleza garantizan el turno de Shell Smash y luego el barrido físico.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Más pico de daño a costa del volumen: se busca el Sweep antes de que el rival toque la coraza.'
        },
        {
          slot: 'move',
          value: 'ROCKPOLISH',
          note: 'Pulimento (sube Velocidad 2 sin bajar defensas) prioriza la velocidad sobre el daño, cediendo la potencia de Rompecoraza.'
        },
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Alegre da más Velocidad inicial en el arranque después de Rompecoraza, a costa de menor potencia por golpe.'
        }
      ]
    }
  ]
}

export default minior
