import type { PokemonTemplateSet } from '../../lib/types'

const barraskewda: PokemonTemplateSet = {
  internalName: 'BARRASKEWDA',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SWIFTSWIM',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['LIQUIDATION', 'AQUAJET', 'ICEFANG', 'FLIPTURN'],
      justification:
        'Barraskewda es el acua-sweeper de lluvia por excelencia: Ataque 123 con Velocidad 136 que Nado Rápido duplica bajo la lluvia, dejándolo por delante de todo el metajuego cuando un compañero con Drizzle levanta el clima. Hidroariete es la STAB Agua de 85 con posibilidad de bajar la Defensa rival, Acua Jet da prioridad para rematar amenazas frágiles y rápidas, y Colmillo Hielo cubre a Planta, Dragón y Volador que se resisten al Agua. Naturaleza Firme con 252 At. / 252 Vel. maximiza el golpe porque la velocidad la multiplica el clima. Vidasfera eleva el daño de cada golpe, coste que asume un barredor frágil cuyo objetivo es no recibir golpes. Viraje cierra el set como movimiento de pivote: al estar tan por delante en velocidad, puede golpear y escapar manteniendo el momentum una vez la lluvia decae.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta Elección da un pico de daño aún mayor sin coste de PS, sacrificando la flexibilidad de no quedar bloqueado en un movimiento.',
          replaces: 'LIFEORB'
        },
        {
          slot: 'move',
          value: 'PSYCHICFANGS',
          note: 'Psicocolmillo (85) rompe Reflejo y Pantalla de Luz, muy útil contra equipos de pantallas, a cambio de la cobertura de Hielo contra Dragón y Planta.',
          replaces: 'ICEFANG'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'PROPELLERTAIL',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['LIQUIDATION', 'CLOSECOMBAT', 'DRILLRUN', 'FLIPTURN'],
      justification:
        'Variante que no depende de la lluvia: con la oculta Cola Hélice (deja de verse afectado por atracción) y Cinta Elección, Barraskewda juega de rompemuros fuera de clima gracias a su Velocidad 136 ya enorme. Hidroariete es la STAB Agua, A Bocajarro (120) rompe muros de tipo Acero y Roca y cubre lo que no toca el Agua, y Taladradora aporta la cobertura Tierra contra Eléctrico y Veneno. Viraje es el cuarto espacio para escaparse del bloqueo de la Cinta. Firme con 252 At. / 252 Vel. Es "viable" y no "óptimo" porque pierde el techo de velocidad y robo de la lluvia, que es la identidad que mejor explota las estadísticas de Barraskewda.',
      alternatives: [
        {
          slot: 'move',
          value: 'AQUAJET',
          note: 'Acua Jet da prioridad para rematar en rango sin depender de la velocidad, a cambio de la cobertura Tierra de Taladradora.',
          replaces: 'DRILLRUN'
        }
      ]
    }
  ]
}

export default barraskewda
