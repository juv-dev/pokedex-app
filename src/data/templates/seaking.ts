import type { PokemonTemplateSet } from '../../lib/types'

const seaking: PokemonTemplateSet = {
  internalName: 'SEAKING',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'viable',
      ability: 'SWIFTSWIM',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['LIQUIDATION', 'MEGAHORN', 'DRILLRUN', 'SWORDSDANCE'],
      justification:
        'Seaking tiene Ataque 110 y Velocidad 80, cifras que por sí solas no dan para barredor. Nado Rápido cambia eso: con lluvia en el campo duplica la Velocidad hasta 160, y con ella un Ataque 110 más Danza Espada sí cierra partidas. Su cobertura física es lo que lo hace destacar dentro de ese nicho: Fuerza Líquida es el STAB con bajada de Defensa, Megacuerno (120) rompe a Planta, Psíquico y Siniestro, y Taladradora pega a Eléctrico, Veneno y Roca; entre los tres tipos casi nada los resiste a la vez. Orbe Vida sube todos los golpes tras la Danza Espada. Firme y máxima Velocidad, ya que la lluvia se encarga del tramo de velocidad y conviene priorizar potencia. Depende por completo de un invocador de lluvia en el equipo, de ahí que sea una opción de nicho y no una configuración autónoma.',
      alternatives: [
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Alegre garantiza superar a más rivales incluso los turnos sin lluvia activa o si el rival también usa Nado Rápido, a cambio de algo de potencia.'
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme aporta utilidad quitando objetos y castiga a Fantasmas, cediendo la cobertura de Eléctrico y Roca de Taladradora.',
          replaces: 'DRILLRUN'
        },
        {
          slot: 'ability',
          value: 'LIGHTNINGROD',
          note: 'Pararrayos da inmunidad a los ataques eléctricos y un cambio seguro frente a ellos, renunciando al empujón de Velocidad de Nado Rápido.'
        }
      ]
    }
  ]
}

export default seaking
