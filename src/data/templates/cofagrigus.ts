import type { PokemonTemplateSet } from '../../lib/types'

const cofagrigus: PokemonTemplateSet = {
  internalName: 'COFAGRIGUS',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MUMMY',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['IRONDEFENSE', 'BODYPRESS', 'WILLOWISP', 'PAINSPLIT'],
      justification:
        'Defensa 145 base con PS 58 y naturaleza Osada convierte a Cofagrigus en un muro físico casi impenetrable, y Defensa Férrea duplica esa cifra ya enorme. Plancha Corporal usa la Defensa como estadística de ataque, así que cada subida de Defensa Férrea es también más daño ofensivo: el muro se defiende y castiga con el mismo recurso. Fuego Fatuo reduce a la mitad el Ataque de los físicos que no queden bien parados solo con la Defensa, y se acumula con Momia, que contagia esa habilidad a cualquiera que lo golpee con contacto y desactiva habilidades ofensivas clave. Divide Dolor es la única recuperación disponible del movepool, y funciona bien precisamente porque los PS bajos de Cofagrigus hacen que promediarlos con un rival sano le devuelva mucha vida. El tipo Fantasma puro aporta las inmunidades a Normal y Lucha y solo dos debilidades.',
      alternatives: [
        {
          slot: 'move',
          value: 'HAZE',
          note: 'Borra los cambios de características de todos: frena en seco a un setup sweeper que intente pasarse por encima, a cambio de renunciar a subir la Defensa propia.',
          replaces: 'IRONDEFENSE'
        },
        {
          slot: 'move',
          value: 'NIGHTSHADE',
          note: 'Daño fijo igual al nivel, fiable contra objetivos que no le importan a Plancha Corporal; útil si no se corre Defensa Férrea.',
          replaces: 'BODYPRESS'
        },
        {
          slot: 'move',
          value: 'TOXIC',
          note: 'Castiga a los muros y a los Pokémon voluminosos que ignoran la quemadura, a cambio de no frenar el daño físico.',
          replaces: 'WILLOWISP'
        }
      ]
    }
  ]
}

export default cofagrigus
