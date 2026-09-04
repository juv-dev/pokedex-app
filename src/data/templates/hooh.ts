import type { PokemonTemplateSet } from '../../lib/types'

const hooh: PokemonTemplateSet = {
  internalName: 'HOOH',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'REGENERATOR',
      item: 'HEAVYDUTYBOOTS',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SACREDFIRE', 'BRAVEBIRD', 'EARTHQUAKE', 'ROOST'],
      justification:
        'Regeneración le devuelve 1/3 de los PS cada vez que sale, lo que sobre PS 106 / Def. Esp. 154 / Ataque 130 lo convierte en un atacante resistente que entra una y otra vez sin desgastarse. Botas Gruesas es indispensable: sin ellas, la debilidad x4 a Roca le cobra la mitad de los PS en cada entrada y arruina tanto a Regeneración como a Respiro. Fuego Sagrado (100, STAB, 50% de quemadura) es el golpe principal que además marca a los muros físicos. Pájaro Osado es el segundo STAB de alto impacto. Terremoto castiga a los Roca y Acero que aguantan las dos STAB. Respiro le da recuperación activa además del pasivo de la habilidad. Reparto en PS y Ataque con Firme para pegar fuerte manteniendo el volumen que lo define.',
      alternatives: [
        {
          slot: 'move',
          value: 'WILLOWISP',
          note: 'Fuego Fatuo quema a los rompemuros físicos que lo tratan como cambio gratis, cediendo la cobertura de Terremoto.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'move',
          value: 'DEFOG',
          note: 'Despejar le da función de retirada de trampas aprovechando lo seguro que entra con Regeneración.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'nature',
          value: 'CAREFUL',
          note: 'Cauta con reparto en PS y Def. Esp. lo lleva hacia muro especial puro si el equipo necesita esa esponja más que el daño físico.'
        },
        {
          slot: 'ability',
          value: 'PRESSURE',
          note: 'Presión para duelos de PP largos contra otros muros si el equipo no rota lo suficiente para exprimir Regeneración.'
        }
      ]
    }
  ]
}

export default hooh
