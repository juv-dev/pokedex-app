import type { PokemonTemplateSet } from '../../lib/types'

const screamtail: PokemonTemplateSet = {
  internalName: 'SCREAMTAIL',
  templates: [
    {
      role: 'support',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PROTOSYNTHESIS',
      item: 'HEAVYDUTYBOOTS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['WISH', 'PROTECT', 'ENCORE', 'THUNDERWAVE'],
      justification:
        'Scream Tail es una de las mejores piezas de apoyo de Añil V4.13 por su perfil: PS 115 / Def.Esp 115 / Velocidad 111 con Defensa 99. El bucle Deseo + Protección transfiere curación a la pieza que entra, y Otra Vez ancla al oponente en su último movimiento mientras Onda Trueno mina la velocidad de cualquier adversario. Botas Gruesas evita que un apoyo tan reentrante pague trampas cada vez, y Maniobra con 252 en PS y Defensa refuerza el lado más débil de su muro. La Velocidad 111 permite actuar antes que la mayoría de sets defensivos para colocar el Deseo o el Encoro. Paleosíntesis, en equipos con sol, sube su Defensa Especial ya alta y consolida el papel de muro especial.',
      alternatives: [
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Trampa Rocas añade control de entrada sobre el paquete de apoyo, a cambio de la curación en equipo de Deseo.',
          replaces: 'WISH'
        },
        {
          slot: 'move',
          value: 'DAZZLINGGLEAM',
          note: 'Fulgor Destello da un STAB Hada para no ser meramente pasivo frente a enraged y rottugar, a cambio de un hueco de utilidad.',
          replaces: 'THUNDERWAVE'
        },
        {
          slot: 'move',
          value: 'DISABLE',
          note: 'Anular bloquea el único movimiento viable del rival tras el Encoro, endureciendo el control, a cambio de la parálisis de Onda Trueno.',
          replaces: 'THUNDERWAVE'
        }
      ]
    },
    {
      role: 'screens-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'PROTOSYNTHESIS',
      item: 'LIGHTCLAY',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['REFLECT', 'LIGHTSCREEN', 'ENCORE', 'THUNDERWAVE'],
      justification:
        'Uso secundario de colocador de pantallas: la Velocidad 111 y el volumen de Scream Tail le permiten desplegar Reflejo y Pantalla de Luz antes de ser castigado, y Arcilla de Luz prolonga la duración de ambas para proteger el setup del equipo. Otra Vez y Onda Trueno mantienen la utilidad de control. Es viable y no óptimo porque Scream Tail rinde más repartiendo curación con Deseo que dedicando turnos a las pantallas, pero es una opción sólida en equipos de barrera y setup.',
      alternatives: [
        {
          slot: 'nature',
          value: 'CALM',
          note: 'Mantilla refuerza la Defensa Especial ya alta en lugar de la Defensa, según el lado que el equipo necesite apuntalar.'
        }
      ]
    }
  ]
}

export default screamtail
