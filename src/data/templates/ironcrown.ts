import type { PokemonTemplateSet } from '../../lib/types'

const ironcrown: PokemonTemplateSet = {
  internalName: 'IRONCROWN',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'QUARKDRIVE',
      item: 'BOOSTERENERGY',
      nature: 'MODEST',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'TACHYONCUTTER', 'PSYSHOCK', 'EXPANDINGFORCE'],
      justification:
        'Iron Crown tiene Ataque Especial 122 y Velocidad 98 sobre el tipo Acero/Psíquico, con Defensa Especial 108. Carga Cuark con Energía Potenciadora sube su Ataque Especial, y Paz Mental apila +1 At. Esp. y +1 Def. Esp. para volverse un barrefuerte especial difícil de bajar. Tajo Taquión (50 x2 golpes, STAB Acero, precisión perfecta) es su firma de daño fiable que evade una capa de protección, Psicocarga (80) ataca contra la Defensa en vez de la Defensa Especial y rompe a los muros especiales, y Vasta Fuerza (80, STAB Psíquico) se potencia aún más bajo el campo psíquico. Naturaleza Modesta y reparto en At. Esp. y Velocidad; con Velocidad 98 y Paz Mental puede adelantarse y fortificarse a la vez, convirtiéndose en un cierre de partida especial muy consistente.',
      alternatives: [
        {
          slot: 'move',
          value: 'VOLTSWITCH',
          note: 'Voltiocambio añade un pivote eléctrico para reposicionarse con daño, a cambio de Fuerza Expansiva como STAB de área.',
          replaces: 'EXPANDINGFORCE'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Gafas Elección maximizan la salida instantánea sin setup, a costa de perder Paz Mental y la capacidad de fortificarse.'
        }
      ]
    }
  ]
}

export default ironcrown
