import type { PokemonTemplateSet } from '../../lib/types'

const miraidon: PokemonTemplateSet = {
  internalName: 'MIRAIDON',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'HADRONENGINE',
      item: 'LEFTOVERS',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'ELECTRODRIFT', 'DRAGONPULSE', 'VOLTSWITCH'],
      justification:
        'Miraidon de Añil tiene Ataque Especial 135, Velocidad 135 y un perfil voluminoso (PS 100 / Def 100 / Def. Esp. 115). Motor Hadrónico crea el campo eléctrico al entrar y sube su Ataque Especial mientras dura el campo, potenciando a la vez Electricidad: Electroderrape (100, STAB Eléctrico) recibe el impulso del campo y del supereficaz, y amplifica el daño contra los objetivos más relevantes. Paz Mental apila +1 At. Esp. y +1 Def. Esp. sobre el bono de la habilidad, Pulso Dragón es el STAB Dragón fiable, y Voltio Cambio le da un pivote eléctrico para reposicionarse con daño. Naturaleza Miedosa con reparto en At. Esp. y Velocidad para ganar la franja de 135; Restos sostienen a un Dios que, con el motor activo, puede quedarse campo y presionar más de un turno.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Gafas Elección convierten al motor y a Electroderrape en un nuke sin setup, a costa de perder Paz Mental y Voltio Cambio.'
        },
        {
          slot: 'move',
          value: 'DRACOMETEOR',
          note: 'Cometa Draco da el golpe Dragón de máxima potencia para romper un muro, reemplazando la consistencia de Pulso Dragón.',
          replaces: 'DRAGONPULSE'
        }
      ]
    }
  ]
}

export default miraidon
