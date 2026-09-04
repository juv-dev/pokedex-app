import type { PokemonTemplateSet } from '../../lib/types'

const gigalith: PokemonTemplateSet = {
  internalName: 'GIGALITH',
  templates: [
    {
      role: 'weather-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SANDSTREAM',
      item: 'SMOOTHROCK',
      nature: 'IMPISH',
      evs: [252, 4, 252, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'STONEEDGE', 'EARTHQUAKE', 'BODYPRESS'],
      justification:
        'Gigalith tiene 95 de PS, 130 de Defensa y 135 de Ataque con solo 25 de Velocidad, un cuerpo de muro físico que no aspira a barrer. Su habilidad Chorro Arena invoca tormenta de arena al entrar, que con Roca Suave dura ocho turnos y sostiene estrategias de Ímpetu Arena como la de Excadrill, además de subir un 50 por ciento su propia Defensa Especial por ser de tipo Roca. Trampa Rocas aporta el daño de entrada que quiere un pivote defensivo lento. Pedrada y Terremoto pegan fuerte desde los 135 de Ataque, y Contadefensa usa la enorme Defensa como ofensiva para castigar a Normal, Siniestro y Acero sin depender del Ataque. El reparto a PS y Defensa con naturaleza Agitada maximiza la resistencia física y la potencia de Contadefensa. La arena y el bonus de Defensa Especial cubren de forma natural su punto flaco especial.',
      alternatives: [
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Recuperación pasiva para un pivote más autosuficiente cuando la duración extra de arena no es prioridad.'
        },
        {
          slot: 'ability',
          value: 'SANDFORCE',
          note: 'Sube un 30 por ciento Roca, Tierra y Acero bajo arena para una versión más ofensiva si otro compañero pone el clima.'
        },
        {
          slot: 'move',
          value: 'EARTHPOWER',
          note: 'Ataque especial de tierra que ignora la Defensa física y baja la Defensa Especial, útil contra Acero muy defensivos.',
          replaces: 'BODYPRESS'
        }
      ]
    }
  ]
}

export default gigalith
