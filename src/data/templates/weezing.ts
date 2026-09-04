import type { PokemonTemplateSet } from '../../lib/types'

const weezing: PokemonTemplateSet = {
  internalName: 'WEEZING',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LEVITATE',
      item: 'BLACKSLUDGE',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SLUDGEBOMB', 'WILLOWISP', 'PAINSPLIT', 'TOXICSPIKES'],
      justification:
        'Weezing en Añil V4.13 tiene Defensa 120 con PS 65 y tipo Veneno puro. Levitación le da inmunidad a los movimientos de tipo Tierra, lo que borra su única debilidad relevante para el papel físico y le permite entrar con seguridad frente a usuarios de Terremoto. Fuego Fatuo quema a los atacantes físicos y reduce a la mitad el daño que recibe, reforzando su Defensa ya alta; Divide Dolor es su recuperación, que funciona mejor cuanto más bajo está y cuanto más alto está el rival; Púas Tóxicas van minando a todo lo que entra por el lado del rival; Bomba Lodo es el STAB fiable con opción de envenenar para no ser pasivo ni carne de Mofa. Lodo Negro cura un 1/16 por turno al ser tipo Veneno y suma al desgaste. Osada y máximo reparto en PS y Defensa para tapar al máximo el flanco físico, que es su especialidad.',
      alternatives: [
        {
          slot: 'ability',
          value: 'NEUTRALIZINGGAS',
          note: 'Gas Reactivo anula todas las habilidades del campo mientras Weezing está activo, arma clave contra climas, Regeneración o Muro Mágico, a cambio de perder la inmunidad a Tierra de Levitación.'
        },
        {
          slot: 'move',
          value: 'HAZE',
          note: 'Niebla borra los cambios de características de todos y frena en seco a un setup sweeper que haya acumulado subidas, cediendo la presión de trampa de Púas Tóxicas.',
          replaces: 'TOXICSPIKES'
        },
        {
          slot: 'move',
          value: 'FLAMETHROWER',
          note: 'Lanzallamas castiga a Acero y Planta que entran a bloquear Bomba Lodo, renunciando al STAB de tipo Veneno y a su posible envenenamiento.',
          replaces: 'SLUDGEBOMB'
        }
      ]
    }
  ]
}

export default weezing
