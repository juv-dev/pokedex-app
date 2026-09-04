import type { PokemonTemplateSet } from '../../lib/types'

const tsareena: PokemonTemplateSet = {
  internalName: 'TSAREENA',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'QUEENLYMAJESTY',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HIGHJUMPKICK', 'TRIPLEAXEL', 'TROPKICK', 'UTURN'],
      justification:
        'Tsareena en Añil V4.13 tiene Ataque 120, Defensa 98 y Def. Esp. 98, un perfil de rompemuros físico que no depende de superar en velocidad. Regia Presencia ("impide al rival usar movimientos con prioridad dirigidos al Pokémon") anula por completo los Golpe Bajo, Cuchillada Sombría o Escaramuza que normalmente rematan a un atacante lento, y eso es lo que hace que el set funcione sin Velocidad invertida: Queenly lo protege del revenge solo por prioridad. Patada Alta (130, STAB) es su golpe de cierre contra Normal, Roca, Acero y Siniestro; Triple Axel (hasta 120) cubre Volador, Planta, Dragón y Tierra; Patada Tropical (70, STAB) aporta el golpe de tipo Planta y de paso baja el Ataque del rival, ablandando a los atacantes físicos que quieren responderle. Ida y Vuelta cede el turno ante un cambio mal predicho sin quedar bloqueado. Naturaleza Firme y 252 en Ataque maximizan la potencia; 252 en PS aprovechan la buena Defensa 98 para que entre varias veces. Vidasfera potencia los cuatro golpes.',
      alternatives: [
        {
          slot: 'ability',
          value: 'CAMORRISTA',
          note: 'Sube un 20% el poder de las patadas, convirtiendo a Patada Alta y Triple Axel en los dos golpes del set; encaja mejor en una segunda plantilla ofensiva, a cambio de perder el blindaje anti-prioridad.',
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Pico de daño máximo con Regia Presencia protegiéndola del revenge prioritario, a costa de quedar bloqueada en un movimiento.',
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme castiga a los cambios quitando objetos, en lugar de la presión de cambio de Ida y Vuelta.',
          replaces: 'UTURN'
        }
      ]
    },
    {
      role: 'sweeper-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'CAMORRISTA',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HIGHJUMPKICK', 'TRIPLEAXEL', 'TROPKICK', 'KNOCKOFF'],
      justification:
        'Variante ofensiva que explota la habilidad exclusiva de Añil Camorrista, que sube un 20% el poder de las patadas: Patada Alta (130) y Triple Axel (hasta 120) ganan un multiplicador extra y con Velocidad 72 y 252 EV en Velocidad con Alegre consigue adelantarse a buena parte del tier. Conserva la cobertura de Planta con Patada Tropical (70, STAB) y suma Desarme para castigar objetos. Es "viable" y no "óptimo" porque cede el blindaje de Regia Presencia contra la prioridad, dejándola expuesta al revenge, y su Velocidad 72 no garantiza barrer sin apoyo de velocidad.',
      alternatives: [
        {
          slot: 'move',
          value: 'RAPIDSPIN',
          note: 'Giro Rápido le da función de retirada de Trampa al barrido, cediendo el Desarme.',
          replaces: 'KNOCKOFF'
        }
      ]
    }
  ]
}

export default tsareena
