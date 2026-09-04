import type { PokemonTemplateSet } from '../../lib/types'

const garbodor: PokemonTemplateSet = {
  internalName: 'GARBODOR',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STENCH',
      item: 'BLACKSLUDGE',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SPIKES', 'TOXICSPIKES', 'GUNKSHOT', 'PAINSPLIT'],
      justification:
        'En Añil, Garbodor es tipo Veneno/Acero, y eso lo cambia todo: resiste Normal, Planta, Hielo, Volador, Psíquico, Bicho, Roca, Dragón, Hada, Veneno y Acero, y solo teme a Fuego y Tierra. Con PS 100 y ese muro de resistencias, entra una y otra vez a colocar trampas. Al ser tipo Veneno terrestre absorbe las Púas Tóxicas rivales al pisar el campo, y coloca las suyas y las Púas sin apuro. Lanzamugre tiene 120 de potencia STAB para no ser un blanco pasivo de Mofa, y Divide Dolor es la única recuperación real del movepool y rinde bien por los PS relativamente altos de Garbodor. Hedor es una habilidad neutra que no estorba al plan; la clave está en el tipeo y en la absorción de Púas Tóxicas rivales.',
      alternatives: [
        {
          slot: 'ability',
          value: 'CORROSION',
          note: 'Junto con Tóxico como movimiento permite envenenar incluso a Acero y Veneno; convierte a Garbodor en stallbreaker, a cambio de que Lanzamugre deje de golpear a los Acero.'
        },
        {
          slot: 'move',
          value: 'TOXIC',
          note: 'Estado a distancia contra muros que ignoran las trampas; máximo valor con la habilidad Corrosión.',
          replaces: 'SPIKES'
        },
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Aprovecha la inversión en Defensa como ofensiva contra Normal y Acero; útil si el equipo ya tiene otra fuente de daño de entrada.',
          replaces: 'GUNKSHOT'
        },
        {
          slot: 'move',
          value: 'HAZE',
          note: 'Borra las subidas del rival para no ser pasado por encima por un setup sweeper, a costa de una capa de trampa.',
          replaces: 'SPIKES'
        }
      ]
    }
  ]
}

export default garbodor
