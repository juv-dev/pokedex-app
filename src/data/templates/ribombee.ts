import type { PokemonTemplateSet } from '../../lib/types'

const ribombee: PokemonTemplateSet = {
  internalName: 'RIBOMBEE',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TINTEDLENS',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['QUIVERDANCE', 'MOONBLAST', 'BUGBUZZ', 'ROOST'],
      justification:
        'Ribombee es un barredor de velocidad antes que de volumen: Velocidad 124 y At. Esp. 95 con PS 60, y Cromolente ("potencia los movimientos poco eficaces haciendo estos el doble de daño") es el núcleo del set: como Bicho/Hada resisten los mismos tipos clave, la doble STAB con Zumbido (90) y Fuerza Lunar (95) golpea casi neutro incluso a Acero, Veneno y Fuego, que resisten ambos tipos, y no hace falta cobertura. Danza Aleteo sube At. Esp., Def. Esp. y Velocidad en uno, y con 124 de base el primer +1 supera a todo el metagame salvo los imanes de velocidad propios. Respiro restaura la mitad de los PS y es la única forma de sostener a un Pokémon de 60/60/75 que necesita encadenar mejoras; la alternativa de sustitución solo funciona si el rival no puede tocarlo. Vidasfera multiplica el golpe de unas STAB ya duplicadas por Cromolente, y el 30% de retroceso es asumible porque se entra a barrer, no a intercambiar. Miedosa garantiza el orden frente a rivales de 110-120 de Velocidad base antes del primer Danza Aleteo.',
      alternatives: [
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Sin desgaste de Trampa Rocas en cada reentrada a cambio del pico de daño de Vidasfera; mejora la constancia del snowball de Danza Aleteo.'
        },
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Bloquea estados y daño residual mientras acumula mejoras, útil contra muros que solo golpean con Tóxico o estados.',
          replaces: 'ROOST'
        }
      ]
    },
    {
      role: 'hazard-lead',
      isPrimary: false,
      confidence: 'viable',
      ability: 'TINTEDLENS',
      item: 'FOCUSSASH',
      nature: 'TIMID',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STICKYWEB', 'UTURN', 'MOONBLAST', 'TAILWIND'],
      justification:
        'Ribombee cubre un rol de lead real porque pone Red Viscosa con Velocidad 124, la más alta entre los colocadores de esa trampa en este rango, y Banda Aguante garantiza que la deje aunque el rival sea más rápido o use prioridad. La Red Viscosa (-1 Velocidad a todo rival que entre) convierte la velocidad brutal de Ribombee en una ventaja para el equipo completo. Ida y Vuelta cede el turno a un compañero tras colocar la trampa; Fuerza Lunar mantiene presión ofensiva con Cromolente; Viento Afín duplica la Velocidad del equipo en el tramo final, cuando la Red ya se limpió con Defensa o Giro Rápido. Es "viable" y no "óptimo" porque su función de lead se agota al primer cambio: sin la Banda, PS 60 y defensas 60/75 no aguantan un segundo golpe.',
      alternatives: [
        {
          slot: 'move',
          value: 'DEFOG',
          note: 'Funciona como limpiador de trampas propias cuando el equipo no lleva otro usuario, a costa de perder la presión de Fuerza Lunar.',
          replaces: 'MOONBLAST'
        }
      ]
    }
  ]
}

export default ribombee