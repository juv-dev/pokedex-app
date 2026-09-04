import type { PokemonTemplateSet } from '../../lib/types'

const hydreigon: PokemonTemplateSet = {
  internalName: 'HYDREIGON',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LEVITATE',
      item: 'CHOICESPECS',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['DRACOMETEOR', 'DARKPULSE', 'FLAMETHROWER', 'UTURN'],
      justification:
        'Ataque Especial 125 y Velocidad 98 sobre un físico decente de 92/90/90 lo colocan como rompemuros especial con capacidad de pivote. Levitación le da inmunidad al tipo Tierra, lo que amplía mucho sus cambios seguros. Gafas Elección disparan el daño de salida: Cometa Draco es el golpe nuclear que fuerza cambios, Pulso Umbrío es la STAB de Siniestro más estable para no quedar atrapado en un movimiento que baja el propio Ataque Especial, Lanzallamas rompe a los Acero y Hada que entran a bloquear el Dragón e Ida y Vuelta convierte cada cambio forzado en momentum. Miedosa para asegurar la iniciativa sobre la banda de bases 90-100 y aprovechar el pivoteo; el IV de Ataque a 0 reduce el daño de confusión y de Juego Sucio, ya que no usa ningún ataque físico.',
      alternatives: [
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Botas para un uso más repetido como pivote, cambiando el pico de daño de Gafas por longevidad.'
        },
        {
          slot: 'move',
          value: 'EARTHPOWER',
          note: 'Tierra Viva castiga a los Acero y Fuego que ignoran Lanzallamas.',
          replaces: 'FLAMETHROWER'
        },
        {
          slot: 'move',
          value: 'DRAGONPULSE',
          note: 'Pulso Dragón como STAB fiable si no se quiere la bajada de Ataque Especial de Cometa Draco.',
          replaces: 'DRACOMETEOR'
        },
        {
          slot: 'nature',
          value: 'MODEST',
          note: 'Modesta para un set más rompedor donde la Velocidad importa menos que el daño puro.'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'LEVITATE',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'DARKPULSE', 'FIREBLAST', 'ROOST'],
      justification:
        'Alternativa de barrido: Maquinación dobla el Ataque Especial y con la inmunidad a Tierra de Levitación es más fácil encontrar el turno libre. Pulso Umbrío y Llamarada cubren casi todo el reparto ofensivo relevante tras la mejora y Descanso Aéreo alarga la presencia en pista aprovechando el físico 92/90/90. Vidasfera da el empujón de potencia inmediata. Queda por detrás del set de Gafas porque sin bloqueo de movimiento es más fácil de forzar a cambiar antes de montar la Maquinación.',
      alternatives: [
        {
          slot: 'move',
          value: 'FLAMETHROWER',
          note: 'Lanzallamas cambia potencia por precisión perfecta si Llamarada falla cálculos clave.',
          replaces: 'FIREBLAST'
        }
      ]
    }
  ]
}

export default hydreigon
