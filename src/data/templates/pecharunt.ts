import type { PokemonTemplateSet } from '../../lib/types'

const pecharunt: PokemonTemplateSet = {
  internalName: 'PECHARUNT',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'POISONPUPPETEER',
      item: 'BLACKSLUDGE',
      nature: 'SASSY',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['MALIGNANTCHAIN', 'SHADOWBALL', 'FOULPLAY', 'RECOVER'],
      justification:
        'Pecharunt destaca por su Defensa 160 con el resto de estadísticas repartidas en 88, un perfil de tanque puro sobre el tipo Veneno/Fantasma. Su habilidad Títere Tóxico es el núcleo: envenena gravemente al rival que alcanza con sus movimientos de veneno y además lo confunde. Cadena Virulenta (100, STAB Veneno) envenena gravemente casi siempre y, con la habilidad, añade la confusión, un combo de desgaste duro; Bola Sombra es el STAB Fantasma, Juego Sucio se nutre del Ataque del rival para castigar a los atacantes físicos sin depender de los 88 propios, y Recuperación sostiene el ciclo. Lodo Negro recupera PS gradualmente al ser de tipo Veneno, mejor que Restos frente a usuarios de Desarme. Naturaleza Grosera con reparto en PS y Def. Esp. equilibra las defensas, ya que la Defensa 160 ya está cubierta por base.',
      alternatives: [
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos dan la misma recuperación gradual sin depender del tipo Veneno, si se prioriza evitar el robo del Lodo Negro.'
        },
        {
          slot: 'move',
          value: 'NASTYPLOT',
          note: 'Maquinación convierte al tanque en un rompedor especial lento, a cambio de la disuasión física de Juego Sucio.',
          replaces: 'FOULPLAY'
        }
      ]
    }
  ]
}

export default pecharunt
