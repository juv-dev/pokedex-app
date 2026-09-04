import type { PokemonTemplateSet } from '../../lib/types'

const tropius: PokemonTemplateSet = {
  internalName: 'TROPIUS',
  templates: [
    {
      role: 'stall',
      isPrimary: true,
      confidence: 'viable',
      ability: 'HARVEST',
      item: 'SITRUSBERRY',
      nature: 'CALM',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['LEECHSEED', 'SUBSTITUTE', 'ROOST', 'DRAGONPULSE'],
      justification:
        'Cosecha tiene un 50% de recuperar la baya consumida al final de cada turno, y el 100% bajo sol, así que con Baya Zidra Tropius regenera PS de forma casi ilimitada. Drenadoras más Sustituto forman el núcleo: el rival pierde PS cada turno para alimentar a Tropius mientras el Sustituto bloquea estados y golpes directos, y Respiro cierra cualquier hueco de PS. Pulso Dragón es la única baza ofensiva, suficiente para no ser un pasivo total ante otros Dragón y Volador. El tipo Planta/Volador aporta inmunidad a Tierra y a los movimientos de polvo y absorbe las Drenadoras rivales. Serena maximiza la Defensa Especial; Tropius no invierte en Ataque porque su plan es el desgaste.',
      alternatives: [
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos da recuperación constante sin depender del azar de Cosecha si no se quiere jugar alrededor de la baya.'
        },
        {
          slot: 'move',
          value: 'AIRSLASH',
          note: 'Tajo Aéreo es STAB con 30% de amedrentamiento para presionar a Planta y Lucha.',
          replaces: 'DRAGONPULSE'
        },
        {
          slot: 'move',
          value: 'SYNTHESIS',
          note: 'Síntesis cura más bajo sol si el equipo lleva invocador, aunque queda a merced del clima rival.',
          replaces: 'ROOST'
        }
      ]
    }
  ]
}

export default tropius
