import type { PokemonTemplateSet } from '../../lib/types'

const reshiram: PokemonTemplateSet = {
  internalName: 'RESHIRAM',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TURBOBLAZE',
      item: 'CHOICESPECS',
      nature: 'MODEST',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['BLUEFLARE', 'DRACOMETEOR', 'EARTHPOWER', 'DRAGONPULSE'],
      justification:
        'Ataque Especial 150 con un físico de 100/100/120 y Velocidad 90 lo colocan como rompemuros especial voluminoso. Turbollama ignora las habilidades del objetivo al atacar, así que Absorbe Fuego, Sólido Roca o Multiescama no reducen sus golpes. Gafas Elección disparan un daño de salida difícil de contener: Llama Azul es la STAB de Fuego de 130 de potencia con opción de quemadura, Cometa Draco es el golpe nuclear que fuerza cambios, Tierra Viva castiga a los Acero y Fuego que resisten ambas STAB y Pulso Dragón es la STAB de Dragón estable para no quedar atrapado en el movimiento que baja el propio Ataque Especial. Modesta porque a base 90 la Velocidad no es su herramienta y su rol es maximizar el daño; el IV de Ataque a 0 minimiza confusión y Juego Sucio.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera para poder cambiar de ataque libremente a costa del pico de daño y con retroceso.'
        },
        {
          slot: 'move',
          value: 'FLAMETHROWER',
          note: 'Lanzallamas cambia potencia por precisión perfecta si la base 85 de Llama Azul falla cálculos.',
          replaces: 'BLUEFLARE'
        },
        {
          slot: 'nature',
          value: 'TIMID',
          note: 'Miedosa para pelear el empate de velocidad con otras bases 90 y adelantar a la banda de bases 80.'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'TURBOBLAZE',
      item: 'HEAVYDUTYBOOTS',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONDANCE', 'FLAREBLITZ', 'DRAGONCLAW', 'ROOST'],
      justification:
        'Reshiram también tiene Danza Dragón y un Ataque físico de 120, lo que le da un plan de barrido que su Velocidad base 90 no sugiere: un uso sube Ataque y Velocidad. Envite Ígneo y Garra Dragón son las STAB físicas y Descanso Aéreo alarga la presencia en pista aprovechando el físico 100/100/120. Turbollama sigue anulando habilidades defensivas al golpear. Es viable y no óptima porque su reparto premia claramente el lado especial y el retroceso de Envite Ígneo desgasta el plan.',
      alternatives: [
        {
          slot: 'move',
          value: 'OUTRAGE',
          note: 'Enfado pega más fuerte que Garra Dragón a cambio del bloqueo y la confusión al terminar.',
          replaces: 'DRAGONCLAW'
        }
      ]
    }
  ]
}

export default reshiram
