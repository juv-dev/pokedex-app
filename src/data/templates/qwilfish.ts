import type { PokemonTemplateSet } from '../../lib/types'

const qwilfish: PokemonTemplateSet = {
  internalName: 'QWILFISH',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'INTIMIDATE',
      item: 'BLACKSLUDGE',
      nature: 'IMPISH',
      evs: [252, 0, 232, 0, 24, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SPIKES', 'LIQUIDATION', 'HAZE', 'PAINSPLIT'],
      justification:
        'PS 65 / Def 85 / Def.Esp 55 con Velocidad 85 no hacen un muro de primera, pero Intimidación baja el Ataque del rival al entrar y transforma cada cambio en un turno seguro para colocar Púas. Púas es la trampa que Qwilfish mejor sostiene porque su Velocidad 85 le permite adelantarse a muchos leads. Salpicar es el STAB fiable que además puede bajar la Defensa rival, Deshielo resetea a cualquier sweeper que intente prepararse encima, y Divide Dolor es su recuperación efectiva contra objetivos con más PS. Lodo Negro funciona como Restos porque Qwilfish es de tipo Veneno y no tiene otra cura pasiva. El tipo Agua/Veneno le da resistencias a Hada, Fuego, Hielo, Bicho, Lucha, Acero y Agua; el reparto físicamente defensivo aprovecha que Intimidación ya recorta el lado físico.',
      alternatives: [
        {
          slot: 'ability',
          value: 'TOXICDEBRIS',
          note: 'Capa Tóxica lanza Púas Tóxicas cada vez que un físico lo golpea: acumula veneno pasivo en el rival a cambio del recorte inmediato de Intimidación.'
        },
        {
          slot: 'move',
          value: 'TOXICSPIKES',
          note: 'Púas Tóxicas si el equipo ya tiene otro colocador de Púas y prefiere envenenar a lo que entre, a cambio de esa segunda capa de daño fijo.',
          replaces: 'SPIKES'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Onda Trueno para frenar a los ofensivos rápidos que ignoran Deshielo, a costa del reseteo de mejoras.',
          replaces: 'HAZE'
        }
      ]
    }
  ]
}

export default qwilfish
