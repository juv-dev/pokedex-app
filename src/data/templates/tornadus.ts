import type { PokemonTemplateSet } from '../../lib/types'

const tornadus: PokemonTemplateSet = {
  internalName: 'TORNADUS',
  templates: [
    {
      role: 'support',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRANKSTER',
      item: 'HEAVYDUTYBOOTS',
      nature: 'TIMID',
      evs: [252, 0, 4, 0, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['TAILWIND', 'TAUNT', 'HURRICANE', 'UTURN'],
      justification:
        'Velocidad 111 y Ataque Especial 125 con un físico modesto lo definen como pivote de apoyo veloz. Bromista es la clave: da prioridad a los movimientos de estado, así que Viento Afín se activa antes que casi cualquier cosa y duplica la Velocidad de todo el equipo durante cuatro turnos, y Mofa prioritaria corta trampas, mejoras y recuperación del rival en el turno de apertura. Huracán es la STAB principal, útil también porque bajo lluvia nunca falla, e Ida y Vuelta mantiene el momentum y coloca al compañero adecuado con el Viento Afín ya activo. Botas Gruesas porque un tipo Volador puro pierde un cuarto de vida por Trampa Rocas en cada reentrada. Miedosa con IV de Ataque a 0 para maximizar la Velocidad de apertura.',
      alternatives: [
        {
          slot: 'move',
          value: 'NASTYPLOT',
          note: 'Maquinación se beneficia de Bromista para montarse con prioridad si se busca un cierre ofensivo.',
          replaces: 'TAILWIND'
        },
        {
          slot: 'move',
          value: 'HEATWAVE',
          note: 'Onda Ígnea castiga a los tipos Acero que ignoran Huracán.',
          replaces: 'UTURN'
        },
        {
          slot: 'ability',
          value: 'REGENERATOR',
          note: 'Regeneración convierte el rol en pivote de desgaste que se cura un tercio en cada cambio.'
        }
      ]
    },
    {
      role: 'pivot',
      isPrimary: false,
      confidence: 'viable',
      ability: 'REGENERATOR',
      item: 'HEAVYDUTYBOOTS',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['HURRICANE', 'HEATWAVE', 'KNOCKOFF', 'UTURN'],
      justification:
        'Lectura de pivote de desgaste: Regeneración recupera un tercio de los PS máximos en cada cambio, lo que permite entrar contra un ataque, devolver daño y salir sin coste. Huracán y Onda Ígnea son la ofensiva principal, Desarme quita objetos y castiga a los tipos Fantasma e Ida y Vuelta cierra el ciclo. Es viable frente al set de Bromista cuando el equipo valora más el control de momentum que el Viento Afín.',
      alternatives: [
        {
          slot: 'move',
          value: 'BLEAKWINDSTORM',
          note: 'Vendaval Gélido baja la Velocidad del objetivo y nunca falla bajo lluvia, a costa de la precisión base 80.',
          replaces: 'HURRICANE'
        }
      ]
    }
  ]
}

export default tornadus
