import type { PokemonTemplateSet } from '../../lib/types'

const yanmega: PokemonTemplateSet = {
  internalName: 'YANMEGA',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SPEEDBOOST',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['PROTECT', 'BUGBUZZ', 'AIRSLASH', 'GIGADRAIN'],
      justification:
        'Impulso sube un nivel la Velocidad al final de cada turno. Protección el primer turno asegura el +1 sin recibir daño, y desde ahí Yanmega (base 95) supera a todo el tier ofensivo. At.Esp 116 con Zumbido de STAB (puede bajar Def.Esp), Tajo Aéreo de segundo STAB con amedrentar y Gigadrenado, que cura el retroceso de Vidasfera y pega a Agua, Roca y Tierra. Con Def.Esp 56 es frágil, así que el plan es preparar el +1 y barrer antes de recibir el segundo golpe.',
      alternatives: [
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Tras el primer Impulso, Sustituto aísla del estado y de la prioridad mientras la Velocidad sigue subiendo.',
          replaces: 'GIGADRAIN'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Sale de forma segura si aparece un check tras acumular Velocidad, cediendo el turno a un compañero.',
          replaces: 'PROTECT'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'TINTEDLENS',
      item: 'CHOICESPECS',
      nature: 'MODEST',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BUGBUZZ', 'AIRSLASH', 'GIGADRAIN', 'UTURN'],
      justification:
        'Cromolente hace que los golpes poco eficaces peguen el doble, es decir, con el multiplicador completo: Zumbido con Gafas Elección desde At.Esp 116 rompe incluso a los que resisten Bicho, dejando a Yanmega sin cambio de resistencia real. Tajo Aéreo y Gigadrenado completan la cobertura y Ida y Vuelta mantiene el momentum sin quedar encerrado. Base 95 de Velocidad ya es respetable sin necesidad de Impulso.',
      alternatives: [
        {
          slot: 'nature',
          value: 'TIMID',
          note: 'Prioriza superar a la base 95 y a los +Velocidad base 80 antes que el pico de daño.'
        }
      ]
    }
  ]
}

export default yanmega
