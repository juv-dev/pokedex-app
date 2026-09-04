import type { PokemonTemplateSet } from '../../lib/types'

const klinklang: PokemonTemplateSet = {
  internalName: 'KLINKLANG',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LEVITATE',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHIFTGEAR', 'GEARGRIND', 'WILDCHARGE', 'SUBSTITUTE'],
      justification:
        'En Añil, Klinklang cambia Más y Menos por Levitación, y eso lo transforma: tipo Acero con inmunidad a Tierra deja solo dos debilidades, Fuego y Lucha, sobre un cuerpo de Def 115 y Velocidad 90. Cambio de Marcha sube el Ataque un nivel y la Velocidad dos, así que un solo turno de setup lo pone por delante de casi todo el metajuego con un Ataque que ya parte de 100. Locomoción es la STAB de Acero: dos golpes de 55 que suman 110 y, además, rompen Robustez, Banda Aguante y Sustituto. Carga Salvaje es la cobertura contra Agua y Volador, los pocos tipos que resisten Acero sin resistir Eléctrico. Sustituto bloquea estados —Klinklang no tiene recuperación—, le permite montarse sobre pasivos gracias a su tipo defensivo y facilita la predicción. Naturaleza Firme porque Cambio de Marcha ya resuelve la Velocidad; Vidasfera para pasar umbrales de daño clave.',
      alternatives: [
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Recupera el coste de Sustituto, que Vidasfera no cubre; mejor para un plan a largo plazo.'
        },
        {
          slot: 'move',
          value: 'THUNDERBOLT',
          note: 'Cobertura especial sin retroceso (At.Esp. 70), coherente si preocupa el daño de Carga Salvaje.',
          replaces: 'WILDCHARGE'
        },
        {
          slot: 'move',
          value: 'REST',
          note: 'Única recuperación real; requiere apoyo de estado o Baya Ziuela para no quedar dormido dos turnos.',
          replaces: 'SUBSTITUTE'
        },
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Asegura superar a más objetivos tras Cambio de Marcha si el equipo rival tiene bases de Velocidad de 130 o más.'
        }
      ]
    }
  ]
}

export default klinklang
