import type { PokemonTemplateSet } from '../../lib/types'

const rillaboom: PokemonTemplateSet = {
  internalName: 'RILLABOOM',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'GRASSYSURGE',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['GRASSYGLIDE', 'WOODHAMMER', 'KNOCKOFF', 'UTURN'],
      justification:
        'Rillaboom en Añil V4.13 tiene Ataque 125 con PS 100 / Def 90 y una firma que lo define: Fitoimpulso (55, STAB Planta) gana prioridad automática mientras haya Campo de Hierba, y Herbogénesis crea ese campo al entrar. El resultado es un movimiento de prioridad +1 con 55 x1,5 de STAB x1,3 del propio campo x1,5 de la Cinta Elección: el golpe más eficiente del juego, que ataca primero pase lo que pase y pega neutro donde Mazazo no llega. Mazazo (120) es el STAB de poder cuando la prioridad no importa, Desarme castiga los cambios con robo de objeto e Ida y Vuelta pivota hacia el equipo. Firme con 252 PS / 252 At. invierte en lo que de verdad importa: como Fitoimpulso golpea por prioridad, los EVs de velocidad serían desperdicio, y PS 100 con Def 90 le permiten entrar ante Agua y Roca y responder sin pagar el 33% de retroceso de Mazazo.',
      alternatives: [
        {
          slot: 'move',
          value: 'SEEDBOMB',
          note: 'Bomba Germen (80, 100 de precisión) sustituye a Mazazo cuando el retroceso de un tercio es demasiado para el plan de partida.',
          replaces: 'WOODHAMMER'
        },
        {
          slot: 'move',
          value: 'SUPERPOWER',
          note: 'Fuerza Bruta golpea a Acero y Normal que frenan el STAB Planta, a costa de bajar Ataque y Defensa al usarlo.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera da flexibilidad de movimientos con un 30% extra, sin el bloqueo de la Cinta.'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'GRASSYSURGE',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'GRASSYGLIDE', 'WOODHAMMER', 'SUPERPOWER'],
      justification:
        'Variante de barrido con setup: Danza Espada duplica el Ataque 125 y Fitoimpulso, ya con prioridad por el campo de Herbogénesis, pasa a golpear con 55 x2 x1,5 x1,3 más la Vidasfera, un nivel de daño que ningun muro físico sostiene. Mazazo sigue siendo el STAB de poder y Fuerza Bruta cubre Acero, Roca y Normal. Alegre con 252 At. / 252 Vel. permite que los golpes sin prioridad (Mazazo, Fuerza Bruta, la propia Danza Espada) compitan contra rivales de hasta Velocidad 95 con naturaleza positiva; el campo de hierba además cura 1/16 de PS a Rillaboom cada turno, mitigando el retroceso de Mazazo y la Vidasfera. Es viable y no óptimo porque necesita un turno de Danza Espada que el set de Cinta no paga, y el daño acumulado de Vidasfera más Mazazo lo desgasta si la partida se alarga.',
      alternatives: [
        {
          slot: 'move',
          value: 'ROCKSLIDE',
          note: 'Avalancha cubre a los Voladores que son inmunes a Fuerza Equina y frenan el STAB Planta, cediendo el golpe a Acero.',
          replaces: 'SUPERPOWER'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos maximizan la curación pasiva junto al campo de hierba, a costa del 30% de la Vidasfera.'
        }
      ]
    }
  ]
}

export default rillaboom