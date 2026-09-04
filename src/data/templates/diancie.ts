import type { PokemonTemplateSet } from '../../lib/types'

const diancie: PokemonTemplateSet = {
  internalName: 'DIANCIE',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'CLEARBODY',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 4, 252, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'DIAMONDSTORM', 'BODYPRESS', 'MOONBLAST'],
      justification:
        'Defensa 150 y Def.Esp 150 dan un volumen enorme por punto de PS, aunque los 50 de PS base limitan el aguante absoluto. Cuerpo Puro protege esas defensas de descensos por Intimidación o movimientos secundarios, algo clave para un muro que quiere quedarse en el campo. Trampa Rocas es la utilidad principal. Vendaval de Diamantes es el STAB físico con un extra decisivo: al golpear sube dos niveles la Defensa del usuario, lo que compone con Fuerza Bruta, que usa esa misma Defensa como estadística de daño; el bucle hace a Diancie más difícil de romper y más fuerte con cada turno. Luz Lunar es un STAB de Hada fiable para los Dragón y Lucha. El tipo Roca-Hada aporta muchas resistencias. Inversión física defensiva.',
      alternatives: [
        {
          slot: 'move',
          value: 'DRAININGKISS',
          note: 'Recuperación parcial vía drenaje para tapar la falta de recuperación fiable, a cambio de una vía de daño.',
          replaces: 'MOONBLAST'
        },
        {
          slot: 'move',
          value: 'EARTHPOWER',
          note: 'Castiga a los Acero y Fuego que entran a Vendaval de Diamantes y Fuerza Bruta sin miedo.',
          replaces: 'BODYPRESS'
        }
      ]
    },
    {
      role: 'trick-room-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'CLEARBODY',
      item: 'MENTALHERB',
      nature: 'RELAXED',
      evs: [252, 0, 4, 252, 0, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['TRICKROOM', 'DIAMONDSTORM', 'MOONBLAST', 'EARTHPOWER'],
      justification:
        'Con 50 de Velocidad base, naturaleza Plácida e IV de Velocidad a 0, Diancie es un instalador de Espacio Raro muy lento que además pega de verdad durante los cuatro turnos. Vendaval de Diamantes por el lado físico y Luz Lunar y Tierra Viva por el especial cubren un abanico amplio, y Cuerpo Puro evita que le bajen la ofensiva antes de actuar. Hierba Mental protege la instalación frente a Provocación. Es viable y no óptimo porque solo rinde en un equipo construido alrededor de Espacio Raro.',
      alternatives: [
        {
          slot: 'move',
          value: 'POWERGEM',
          note: 'STAB de Roca especial estable si se prefiere un perfil ofensivo puramente especial durante el Espacio Raro.',
          replaces: 'DIAMONDSTORM'
        }
      ]
    }
  ]
}

export default diancie
