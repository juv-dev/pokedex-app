import type { PokemonTemplateSet } from '../../lib/types'

const swalot: PokemonTemplateSet = {
  internalName: 'SWALOT',
  templates: [
    {
      role: 'status-spreader',
      isPrimary: true,
      confidence: 'viable',
      ability: 'CORROSION',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['TOXIC', 'PROTECT', 'PAINSPLIT', 'SLUDGEBOMB'],
      justification:
        'Corrosión permite que Tóxico prenda en tipos Acero y Veneno que normalmente son inmunes, así que Swalot desgasta precisamente a los muros que frenan a la mayoría de envenenadores. PS 100 con inversión defensiva, más Protección (para explorar y sumar turnos de veneno seguros) y Divide Dolor (recuperación relativa que además hace daño a muros con PS altos), lo mantienen en el campo. Bomba Lodo es STAB para no ser presa de Mofa. Osada para apoyarse en el lado físico, mejor invertido.',
      alternatives: [
        {
          slot: 'move',
          value: 'ENCORE',
          note: 'Bloquea a los sweepers con preparación y compra turnos de veneno.',
          replaces: 'SLUDGEBOMB'
        },
        {
          slot: 'move',
          value: 'YAWN',
          note: 'Fuerza cambios para repartir más Tóxico.',
          replaces: 'PROTECT'
        },
        {
          slot: 'item',
          value: 'BLACKSLUDGE',
          note: 'Solo Swalot se beneficia de la cura y castiga a quien intente robar o usar Truco.'
        }
      ]
    }
  ]
}

export default swalot
