import type { PokemonTemplateSet } from '../../lib/types'

const comfey: PokemonTemplateSet = {
  internalName: 'COMFEY',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TRIAGE',
      item: 'LEFTOVERS',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 0, 4],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'DRAININGKISS', 'GIGADRAIN', 'SYNTHESIS'],
      justification:
        'Comfey en Añil V4.13 tiene Primer Auxilio, que "aumenta en 3 la prioridad de los movimientos que curan PS directamente", y eso es el núcleo del set: Beso Drenante (60, STAB Hada) cura al usuario y además sale a prioridad +3, es decir, antes que cualquier ataque normal del tier salvo la prioridad +4; Giga Drenado (75, STAB Planta) repite el patrón y cubre a Roca, Agua y Tierra; Síntesis (prioridad +3 por Triage) restaura la mitad de los PS en el turno más rápido del combate. Con Paz Mental subiendo At. Esp. y Def. Esp. y Def. Esp. 110 de base, Comfey es casi imposible de tumbar mientras cura. Modesta y 252 en At. Esp. maximizan el daño de los dos golpes con prioridad; 252 en PS le dan la reserva que Triage convierte en supervivencia. Restos suman la cura pasiva que falta entre drenajes.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Sube el daño de Beso Drenante y Giga Drenado, aceptando que cada golpe cueste 10% de PS; el drenaje compensa parte del desgaste.'
        },
        {
          slot: 'move',
          value: 'LEECHSEED',
          note: 'Drenadoras añade daño pasivo contra muros, a cambio de la cura inmediata de Síntesis.'
        },
        {
          slot: 'ability',
          value: 'NATURALCURE',
          note: 'Variante sin Triage que usa a Comfey como clérigo con Aromaterapia y Cura Natural, cediendo por completo el planteamiento de prioridad.'
        }
      ]
    }
  ]
}

export default comfey
