import type { PokemonTemplateSet } from '../../lib/types'

const roserade: PokemonTemplateSet = {
  internalName: 'ROSERADE',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'NATURALCURE',
      item: 'FOCUSSASH',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['TOXICSPIKES', 'SLUDGEBOMB', 'GIGADRAIN', 'SLEEPPOWDER'],
      justification:
        'At. Esp. 125 y Velocidad 90 con acceso a Púas Tóxicas, Púas y Somnífero (este vía huevo de Budew) lo hacen el colocador de trampas ofensivo por excelencia. Cura Natural limpia cualquier estado al cambiar, así que entra una y otra vez sin acumular desgaste. Púas Tóxicas envenena a todo lo que baje sin Botas Gruesas ni inmunidad; Bomba Lodo es el STAB fiable con posible envenenar; Gigadrenado cubre Agua, Roca y Tierra y lo mantiene sano; Somnífero desactiva a un rival por completo para asegurar la trampa. Banda Aguante garantiza al menos una capa y un Somnífero contra un lead más rápido. Punto Tóxico y Experto (oculta) son nichos menores frente a la fiabilidad de Cura Natural.',
      alternatives: [
        {
          slot: 'move',
          value: 'SPIKES',
          note: 'Si el equipo ya aporta veneno o enfrenta muchos Volador y Acero inmunes a Púas Tóxicas.',
          replaces: 'TOXICSPIKES'
        },
        {
          slot: 'move',
          value: 'LEAFSTORM',
          note: 'Pico de daño de tipo Planta (130) a cambio de la recuperación y con autobajada de At. Esp.',
          replaces: 'GIGADRAIN'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Más entradas seguras si el rival tiene sus propias trampas; pierde la garantía de la Banda Aguante.'
        },
        {
          slot: 'move',
          value: 'DAZZLINGGLEAM',
          note: 'Cobertura de Hada a Dragón, Siniestro y Lucha sin depender de la precisión 75.',
          replaces: 'SLEEPPOWDER'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'NATURALCURE',
      item: 'CHOICESPECS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['LEAFSTORM', 'SLUDGEBOMB', 'GIGADRAIN', 'DAZZLINGGLEAM'],
      justification:
        'Con Gafas Elección el At. Esp. 125 y el STAB de Planta/Veneno pegan a nivel de rompemuros. Lluvia de Hojas (Leaf Storm, 130) es el golpe de apertura; Gigadrenado queda como STAB de Planta repetible tras la bajada; Bomba Lodo castiga Hadas y Planta; Destello cubre Dragón, Siniestro y Lucha. Cura Natural le permite volver a entrar pese al bloqueo de movimiento. Es "viable" y no "óptimo" porque Roserade rinde más colocando trampas que como atacante bloqueado, dado su volumen defensivo bajo (60/65/105) y su Velocidad media.',
      alternatives: [
        {
          slot: 'move',
          value: 'SLEEPPOWDER',
          note: 'Cambia un golpe de cobertura por control de un rival, útil si el set no está bloqueado.',
          replaces: 'DAZZLINGGLEAM'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Libertad para cambiar de movimiento a cambio del retroceso por turno.'
        }
      ]
    }
  ]
}

export default roserade
