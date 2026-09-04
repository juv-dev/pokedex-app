import type { PokemonTemplateSet } from '../../lib/types'

const cefireon: PokemonTemplateSet = {
  internalName: 'CEFIREON',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'COMPOUNDEYES',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HURRICANE', 'THUNDERBOLT', 'DAZZLINGGLEAM', 'ROOST'],
      justification:
        'Cefireon, el Eeveelution de tipo Volador de Añil, tiene Velocidad 130 (la más alta de su línea) y Ataque Especial 110. Ojo Compuesto eleva la precisión de sus movimientos un 30%, y eso es lo que hace jugable a su firma Vendaval (110, 70% base de precisión): con la habilidad pasa a acertar ~el 91% de las veces, convirtiéndolo en el STAB Volador de máxima potencia fiable. Rayo es el STAB Eléctrico de cobertura, Destello Brillante golpea a Siniestro y Dragón, y Roost le da la recuperación que un sweeper rápido necesita para quedarse limpio con el coste de Vidasfera. Naturaleza Miedosa y reparto en At. Esp. y Velocidad para explotar los 130 de base y superar a casi todo el formato.',
      alternatives: [
        {
          slot: 'ability',
          value: 'LIGHTNINGROD',
          note: 'Pararrayos atrae y absorbe los ataques Eléctricos subiendo su At. Esp., útil frente a equipos con pivote eléctrico, a cambio de perder la precisión de Vendaval.'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Ida y Vuelta pivotea sin perder el momentum, a costa de la recuperación instantánea de Roost.',
          replaces: 'ROOST'
        }
      ]
    }
  ]
}

export default cefireon
