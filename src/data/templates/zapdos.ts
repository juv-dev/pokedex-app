import type { PokemonTemplateSet } from '../../lib/types'

const zapdos: PokemonTemplateSet = {
  internalName: 'ZAPDOS',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STATIC',
      item: 'HEAVYDUTYBOOTS',
      nature: 'BOLD',
      evs: [248, 0, 216, 0, 0, 44],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['THUNDERBOLT', 'HURRICANE', 'ROOST', 'VOLTSWITCH'],
      justification:
        'Zapdos en Añil V4.13 tiene At. Esp. 125, PS 90, Velocidad 100 y defensas 85/90, un pivote defensivo que además amenaza con daño real. Botas Gruesas anulan Trampa Rocas y le permiten entrar una y otra vez, Respiro recupera la mitad de los PS y Voltiocambio mantiene el ritmo cediendo el turno con ventaja. Rayo es el STAB fiable y Vendaval castiga a Planta, Lucha y Bicho y pega neutro a los Tierra, que son inmunes a la parte eléctrica. Elec. Estática puede paralizar al que lo golpee por contacto, un extra que frena a los físicos. Reparto físico defensivo con algo de Velocidad para superar a otros base 90 tras el reparto y naturaleza Osada.',
      alternatives: [
        {
          slot: 'move',
          value: 'DEFOG',
          note: 'Vendaval de tipo Volador para retirar trampas del campo propio, cambio útil si el equipo carece de control de trampas.',
          replaces: 'VOLTSWITCH'
        },
        {
          slot: 'move',
          value: 'HEATWAVE',
          note: 'Onda Ígnea golpea a los Acero que resisten Rayo y Vendaval, con mejor precisión que Vendaval.',
          replaces: 'HURRICANE'
        },
        {
          slot: 'ability',
          value: 'PRESSURE',
          note: 'Presión favorece los enfrentamientos largos por desgaste de PP frente a otros muros.'
        },
        {
          slot: 'nature',
          value: 'TIMID',
          note: 'Con reparto 252 At. Esp. / 252 Velocidad, Zapdos pasa a un rol más ofensivo de pivote rápido, a cambio de volumen defensivo.'
        }
      ]
    }
  ]
}

export default zapdos
