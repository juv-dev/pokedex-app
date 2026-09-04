import type { PokemonTemplateSet } from '../../lib/types'

const florges: PokemonTemplateSet = {
  internalName: 'FLORGES',
  templates: [
    {
      role: 'wall-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'GRASSYSURGE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['MOONBLAST', 'WISH', 'AROMATHERAPY', 'PROTECT'],
      justification:
        'Hada puro con PS 78 / Def 68 / Def.Esp 154. La Def.Esp es tan alta que aguanta ataques especiales sin inversión, así que los EVs van a PS y Defensa para tapar el lado físico, que es su grieta real. Herbogénesis (habilidad oculta) crea un campo de hierba al entrar: 1/16 de PS de cura por turno a todo el equipo a ras de suelo y reducción del daño de Terremoto y Bofetón Lodo, y eso se apila con Deseo Cura y Restos para una longevidad enorme. Deseo Cura pasa recuperación a un compañero, Aromaterapia limpia los estados de todo el equipo, Fuerza Lunar es el STAB fiable con posible -1 At. Esp. al rival, y Protección asegura el turno de Deseo Cura y escala el daño residual y de campo.',
      alternatives: [
        {
          slot: 'ability',
          value: 'FLORACION',
          note: 'Si no querés dar campo de hierba al rival; el rol defensivo se sostiene igual aunque la habilidad no aporte en combate.'
        },
        {
          slot: 'move',
          value: 'SYNTHESIS',
          note: 'Recuperación instantánea propia, potenciada por el campo de hierba, en vez del apoyo de Deseo Cura.',
          replaces: 'PROTECT'
        },
        {
          slot: 'move',
          value: 'CALMMIND',
          note: 'Win condition defensiva a largo plazo, a cambio del apoyo de Aromaterapia al equipo.',
          replaces: 'AROMATHERAPY'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Castiga a los físicos de contacto que buscan romperla, a cambio de la recuperación pasiva de Restos.'
        }
      ]
    }
  ]
}

export default florges
