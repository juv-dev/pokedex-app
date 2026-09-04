import type { PokemonTemplateSet } from '../../lib/types'

const cradily: PokemonTemplateSet = {
  internalName: 'CRADILY',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STORMDRAIN',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['RECOVER', 'STEALTHROCK', 'GIGADRAIN', 'ANCIENTPOWER'],
      justification:
        'Colector transforma cualquier ataque de tipo Agua en un +1 de At. Esp. e inmunidad total, dándole entradas seguras que de otro modo no tendría. Su volumen 86/97/107 más Recuperación fiable y la ausencia de debilidades x4 lo vuelven un colocador de Trampa Rocas duradero. Gigadrenado es STAB con recuperación que castiga a los Agua, Tierra y Roca que frena, y Poder Pasado es el STAB de Roca que pega a los Fuego y Volador que le cambian encima, con opción de escalar todas sus características. Serena con inversión especial completa para anclar el lado especial mientras Recuperación se encarga del resto.',
      alternatives: [
        {
          slot: 'move',
          value: 'SLUDGEBOMB',
          note: 'Pega a los Planta y Hada que resisten Gigadrenado.',
          replaces: 'ANCIENTPOWER'
        },
        {
          slot: 'move',
          value: 'METEORBEAM',
          note: 'Golpe de Roca mucho más fuerte si se puede gastar el turno de carga o una Hierba Única.',
          replaces: 'ANCIENTPOWER'
        },
        {
          slot: 'nature',
          value: 'BOLD',
          note: 'Desplaza el volumen al lado físico contra metajuegos más orientados a lo físico.'
        }
      ]
    }
  ]
}

export default cradily
