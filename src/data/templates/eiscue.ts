import type { PokemonTemplateSet } from '../../lib/types'

const eiscue: PokemonTemplateSet = {
  internalName: 'EISCUE',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'viable',
      ability: 'ICEFACE',
      item: 'LIECHIBERRY',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BELLYDRUM', 'ICESHARD', 'ICICLECRASH', 'HEADSMASH'],
      justification:
        'Eiscue en Añil V4.13 tiene un Ataque base 80 que por sí solo no asusta, pero su habilidad Cara de Hielo le da a su nicho un hueco único en Añil: la primera vez que recibe un ataque físico, no recibe daño y pasa a Forma Deshielo, regresando a la de hielo una vez si graniza. Ese turno gratis permite montar Tambor (sube el Ataque al máximo perdiendo la mitad de los PS) sin riesgo. Con el Ataque duplicado, Esquirla Helada (prioridad +1) remata a los que intentan ser más rápidos, Chuzos es el STAB Hielo de precisión 90 y Testarazo (150, devastador pese al retroceso) da un golpe de cierre contra paredes neutrales. La Baya Lichi dispara el Ataque a tope en el momento de apuro, reforzando el golpe ya duplicado. Naturaleza Firme con 252 PS / 252 At. Es viable, no óptimo, porque la cobertura depende de entrar a cara descubierta contra un golpe físico y su PS 75 / Def 110 no sostienen más de un par de cambios, y porque sin granizo no recupera la Cara de Hielo.',
      alternatives: [
        {
          slot: 'item',
          value: 'SITRUSBERRY',
          note: 'Baya Zidra restaura PS al bajar a mitad, mitigando el costo de PS del Tambor y permitiendo sobrevivir al turno de setup.'
        },
        {
          slot: 'move',
          value: 'LIQUIDATION',
          note: 'Hidroariete (85 Agua) cubre a los Acero y Roca que resisten Hielo, a cambio del golpe de Testarazo.'
        },
        {
          slot: 'move',
          value: 'TRIPLEAXEL',
          note: 'Triple Axel, de precisión 90 y 3 golpes, castiga robustez y sustitutos con el Ataque duplicado del Tambor.'
        }
      ]
    }
  ]
}

export default eiscue