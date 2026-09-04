import type { PokemonTemplateSet } from '../../lib/types'

const masquerain: PokemonTemplateSet = {
  internalName: 'MASQUERAIN',
  templates: [
    {
      role: 'hazard-lead',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'INTIMIDATE',
      item: 'FOCUSSASH',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STICKYWEB', 'BUGBUZZ', 'HYDROPUMP', 'UTURN'],
      justification:
        'Con Velocidad 80 e Intimidacion, Masquerain instala Red Viscosa y, al entrar, ya baja el Ataque del rival un nivel, lo que suaviza el intercambio incluso cuando cae. Banda Focus asegura sobrevivir a un golpe y colocar la trampa contra leads mas rapidos o mas fuertes. Ataque Especial 100 hace que Zumbido e Hidrobomba no sean movimientos vacios: mantienen presion ofensiva real en lugar de limitarse a la utilidad. Ida y Vuelta traslada el momentum tras dejar la Red. Miedosa para colocar la trampa antes que el rival.',
      alternatives: [
        {
          slot: 'move',
          value: 'STUNSPORE',
          note: 'Parálisis para frenar a un sweeper rival a cambio de un ataque.',
          replaces: 'HYDROPUMP'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Si se prioriza reutilizar a Masquerain como pivote de Ida y Vuelta en vez de un solo uso.'
        },
        {
          slot: 'move',
          value: 'AIRSLASH',
          note: 'STAB de Volador con opcion de retroceso frente a otros Bicho y tipo Lucha.',
          replaces: 'BUGBUZZ'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'INTIMIDATE',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['QUIVERDANCE', 'BUGBUZZ', 'HYDROPUMP', 'AIRSLASH'],
      justification:
        'Danza Aleteo sube Ataque Especial, Def. Esp. y Velocidad a la vez, y con Ataque Especial base 100 Masquerain puede cerrar partidas tras una o dos subidas. Intimidación le facilita el turno de setup contra atacantes físicos. Es un uso secundario porque su volumen sin subir es bajo y depende de encontrar el hueco para la primera Danza.',
      alternatives: [
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Protege la secuencia de subidas contra estados y prioridad, a costa de una vía de daño.',
          replaces: 'AIRSLASH'
        }
      ]
    }
  ]
}

export default masquerain
