import type { PokemonTemplateSet } from '../../lib/types'

const manectric: PokemonTemplateSet = {
  internalName: 'MANECTRIC',
  templates: [
    {
      role: 'pivot',
      isPrimary: true,
      confidence: 'viable',
      ability: 'LIGHTNINGROD',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['VOLTSWITCH', 'THUNDERBOLT', 'FLAMETHROWER', 'SNARL'],
      justification:
        'Pararrayos anula los movimientos de tipo Eléctrico dirigidos a Manectric y le sube el Ataque Especial un nivel, lo que le da entradas gratis contra otros Eléctricos y contra Voltiocambio. Con Ataque Especial 105 y Velocidad 105, el rol natural es el de pivote ofensivo veloz: Voltiocambio traslada el momentum, Rayo es el STAB directo cuando conviene quedarse, Lanzallamas castiga a los Acero y Planta que frenan al Eléctrico y Rugido resta Ataque Especial mientras hace chip a quien intenta aprovechar el cambio. Orbe Vida sube el daño sin fijar el movimiento, algo importante para un pivote. Miedosa para conservar el tramo de Velocidad 105.',
      alternatives: [
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Ignora Trampa Rocas en cada reentrada, clave para un pivote que cambia mucho.'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Potencia inmediata mucho mayor a cambio de quedar fijado en un movimiento.'
        },
        {
          slot: 'move',
          value: 'OVERHEAT',
          note: 'Golpe unico mucho mas fuerte contra Acero; baja el Ataque Especial propio dos niveles.',
          replaces: 'SNARL'
        },
        {
          slot: 'move',
          value: 'THUNDER',
          note: 'STAB más potente y con parálisis si el equipo lleva lluvia.',
          replaces: 'THUNDERBOLT'
        }
      ]
    }
  ]
}

export default manectric
