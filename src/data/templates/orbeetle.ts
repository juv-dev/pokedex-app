import type { PokemonTemplateSet } from '../../lib/types'

const orbeetle: PokemonTemplateSet = {
  internalName: 'ORBEETLE',
  templates: [
    {
      role: 'hazard-lead',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PSYCHICSURGE',
      item: 'HEAVYDUTYBOOTS',
      nature: 'TIMID',
      evs: [252, 0, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STICKYWEB', 'EXPANDINGFORCE', 'UTURN', 'BODYPRESS'],
      justification:
        'La habilidad oculta que Añil V4.13 le da a Orbeetle, Psicogénesis, define su set óptimo: lead de Red Viscosa que crea campo psíquico al entrar, lo que bloquea los movimientos de prioridad del rival y potencia al instante Vasta Fuerza (80 de potencia amplificada dentro del campo, STAB Psíquico). Con Defensa 110 y Defensa Especial 120 de base, Orbeetle aguanta el contraataque tras tejer la trampa y puede repetirla si la retiran; con Velocidad 90 y Naturaleza Miedosa gana el duelo contra la mayoría de leads. Ida y Vuelta mantiene el momentum tras el trabajo y Plancha Corporal (que usa la Defensa 110) castiga a muros especiales como Blissey que se creen a salvo de Vasta Fuerza. Botas Gruesas son necesarias porque el tipo Bicho paga Trampa Rocas x2 en cada reentrada; 252 PS / 252 Velocidad porque la PS 60 de base exige inversión y la velocidad decide quién teje primero.',
      alternatives: [
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Banda Aguante garantiza la Red Viscosa incluso frente a un lead más rápido que amenace KO directo, cediendo la reentrada sin coste.'
        },
        {
          slot: 'move',
          value: 'HYPNOSIS',
          note: 'Hipnosis duerme al primer rival en cuanto cae la Red, a cambio del golpe físico contra muros especiales.',
          replaces: 'BODYPRESS'
        },
        {
          slot: 'move',
          value: 'TRICKROOM',
          note: 'Espacio Raro convierte al lead en la fuente del truco para equipos lentos, cediendo Plancha Corporal.',
          replaces: 'BODYPRESS'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'PSYCHICSURGE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'STOREDPOWER', 'RECOVER', 'EXPANDINGFORCE'],
      justification:
        'Segundo rol viable que explota la misma Psicogénesis: al entrar crea el campo, que bloquea la prioridad rival, y desde ahí puede acumular Paz Mental con seguridad mientras Defensa 110 y Defensa Especial 120, más los refuerzos, absorben los golpes. Poder Reserva empieza en 20 de potencia pero suma 20 por cada nivel positivo: con dos o tres Paz Mental supera los 100 y se vuelve un STAB Psíquico que crece sin techo; Vasta Fuerza mantiene la presión inmediata dentro del campo y Recuperación sostiene los PS. Es viable y no óptimo porque el Ataque Especial base 80 es modesto y necesita al menos un turno de setup antes de amenazar, y porque otro usuario de campo puede pisarle el terreno. Osada con inversión física defensiva para cubrir el flanco por el que pueden romperlo antes del primer refuerzo.',
      alternatives: [
        {
          slot: 'move',
          value: 'PSYSHOCK',
          note: 'Psicocarga golpea contra la Defensa del rival y no depende de acumular refuerzos, a cambio de la escala de Poder Reserva.',
          replaces: 'STOREDPOWER'
        }
      ]
    }
  ]
}

export default orbeetle