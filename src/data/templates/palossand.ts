import type { PokemonTemplateSet } from '../../lib/types'

const palossand: PokemonTemplateSet = {
  internalName: 'PALOSSAND',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'WATERCOMPACTION',
      item: 'LEFTOVERS',
      nature: 'RELAXED',
      evs: [252, 4, 252, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHOREUP', 'WILLOWISP', 'STEALTHROCK', 'EARTHPOWER'],
      justification:
        'Palossand en Añil V4.13 combina Defensa 110, tipo Fantasma/Tierra y Compactación de Agua ("aumenta en dos niveles la Defensa si le alcanza un movimiento de tipo Agua") para ser un muro físico que además castiga al rival que intenta forzarlo con Agua: bastan un par de golpes de Agua para disparar la Defensa muy alta. Arena Curativa (restaura la mitad de los PS, y más bajo Tormenta de Arena) le da la recuperación que falta a otros muros. Llamarada Falsa quema a los atacantes físicos de contacto y ablanda su presión; Trampa Rocas aprovecha sus entradas para colocar la trampa. Tierra Viva (90, STAB) es el daño de respuesta: castiga a Acero y Volador que quieran cambiar mientras su rol de muro lo sostiene. La naturaleza Plácida (Def +, Vel -) no le cuesta nada porque con Velocidad 35 ya es de los más lentos. Reparto 252 PS / 252 Def con solo 4 en Ataque para no sacrificar el golpe de Tierra Viva.',
      alternatives: [
        {
          slot: 'ability',
          value: 'SANDVEIL',
          note: 'Velo Arena da Evasión y evita el daño de Tormenta de Arena en un equipo de clima; se renuncia a la subida de Defensa contra Agua de Compactación.'
        },
        {
          slot: 'move',
          value: 'SHADOWBALL',
          note: 'Bola Sombra (80, STAB Fantasma) pega limpio a Psíquico y Fantasma que resisten Tierra, en lugar de Tierra Viva.'
        }
      ]
    }
  ]
}

export default palossand
