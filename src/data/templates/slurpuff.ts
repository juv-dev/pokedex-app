import type { PokemonTemplateSet } from '../../lib/types'

const slurpuff: PokemonTemplateSet = {
  internalName: 'SLURPUFF',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'UNBURDEN',
      item: 'SITRUSBERRY',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BELLYDRUM', 'PLAYROUGH', 'DRAINPUNCH', 'FACADE'],
      justification:
        'Hada puro con base 82/80/86/85/75/72. Tambor baja los PS a la mitad y pone el Ataque al máximo (+6); esa caída al 50% dispara la Baya Zidra, y consumir el objeto activa Liviano (habilidad oculta), que en Añil duplica la Velocidad al usar o perder el objeto. Resultado en un solo turno: +6 de Ataque y Velocidad efectiva de ~144. Fuerza Mogarra es el STAB de 90, Puño Drenaje pega a los Acero que si no la muran y recupera algo de PS, y Fingido es un Normal de respaldo que dobla su potencia si Slurpuff termina con estado. Alegre para llegar lo más rápido posible antes del Tambor y asegurar el barrido después.',
      alternatives: [
        {
          slot: 'nature',
          value: 'ADAMANT',
          note: 'Más potencia si el equipo neutraliza a los revenge killers de prioridad que la amenazan tras el Tambor.'
        },
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Preparar el Tambor detrás de un clon contra equipos con estado o prioridad, a cambio del Normal de respaldo.',
          replaces: 'FACADE'
        }
      ]
    }
  ]
}

export default slurpuff
