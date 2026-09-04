import type { PokemonTemplateSet } from '../../lib/types'

const veluza: PokemonTemplateSet = {
  internalName: 'VELUZA',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SHARPNESS',
      item: 'LEFTOVERS',
      nature: 'JOLLY',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FILLETAWAY', 'AQUACUTTER', 'PSYCHOCUT', 'XSCISSOR'],
      justification:
        'Veluza es una bomba de setup en un solo plato: Deslome sube Ataque, Ataque Especial y Velocidad dos niveles a costa de quedarse a mitad de PS, y Cortante incrementa un 50% todos los movimientos cortantes. Tajo Acuático, el STAB de agua física de 70, pasa a 105 de potencia con la habilidad; Psicocorte sube a 105 como cobertura de psíquica; Tijera X a 120. Con Velocidad 100 ya elevada por Deslome, Veluza supera a casi todo y puede barrer. Restos compensan la autolesión de Deslome, y la naturaleza Alegre asegura rebasar al base 100 rival antes y después del boost. El doble tipo agua/psíquico con esta cobertura deja hueco mínimo, y Recuperación queda como alternativa defensiva.',
      alternatives: [
        {
          slot: 'item',
          value: 'SITRUSBERRY',
          note: 'Baya cicatrizante que suaviza el coste de la mitad de los PS de Deslome, cediendo la recuperación pasiva de Restos.'
        },
        {
          slot: 'move',
          value: 'NIGHTSLASH',
          note: 'Tajo Umbrío, que con Cortante llega a 105 de potencia y castiga a Psíquico y Fantasma, cediendo la cobertura de bicho.',
          replaces: 'XSCISSOR'
        },
        {
          slot: 'nature',
          value: 'ADAMANT',
          note: 'Más potencia si la velocidad la cubre un compañero o campo, a costa de rebasar al base 100 neutro con menos margen.'
        }
      ]
    }
  ]
}

export default veluza