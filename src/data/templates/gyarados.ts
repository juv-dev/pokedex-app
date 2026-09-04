import type { PokemonTemplateSet } from '../../lib/types'

const gyarados: PokemonTemplateSet = {
  internalName: 'GYARADOS',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MOXIE',
      item: 'LUMBERRY',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONDANCE', 'WATERFALL', 'EARTHQUAKE', 'ICEFANG'],
      justification:
        'Gyarados en Añil V4.13 tiene Ataque 125, PS 95 y Def. Esp. 100, con Velocidad 81 que Danza Dragón corrige de sobra. Un solo baile lo deja con Ataque y Velocidad de nivel de barredor, y Autoestima añade un nivel de Ataque por cada rival debilitado, de modo que el barrido se acelera solo. Cascada es el STAB físico con opción de retroceso, Terremoto castiga a los Eléctrico que amenazan a Gyarados y también a Acero y Roca, y Colmillo Hielo cubre a Planta, Dragón y Volador. Baya Zidra limpia una quemadura o una parálisis puntual para no cortar el barrido. Naturaleza Alegre para asegurar que tras un baile supere a todo el metajuego relevante que no lleve prioridad ni Pañuelo.',
      alternatives: [
        {
          slot: 'ability',
          value: 'INTIMIDATE',
          note: 'Baja el Ataque del rival al entrar y facilita conseguir el turno de Danza Dragón, opción preferible con un reparto más voluminoso; Autoestima es la vía de barrido puro.'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Botas Gruesas anulan el daño de Trampa Rocas, que a Gyarados le quita un cuarto de PS por reentrada; se pierde la limpieza de estado de la baya.'
        },
        {
          slot: 'move',
          value: 'CRUNCH',
          note: 'Triturar mantiene precisión perfecta y puede bajar la Defensa, pega a Fantasma y Psíquico, a cambio de la cobertura de Colmillo Hielo contra Planta y Dragón.',
          replaces: 'ICEFANG'
        }
      ]
    }
  ]
}

export default gyarados
