import type { PokemonTemplateSet } from '../../lib/types'

const weavile: PokemonTemplateSet = {
  internalName: 'WEAVILE',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'INNERFOCUS',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['KNOCKOFF', 'TRIPLEAXEL', 'LOWKICK', 'ICESHARD'],
      justification:
        'Velocidad 125 y Ataque 120. Desarme y Tri Ataque Frío (tres golpes de 20 que escalan y rompen Aguante y Robustez) forman un STAB Siniestro/Hielo que casi nada resiste de forma conjunta. Patada Baja castiga a los pesados que aguantan el STAB, como Acero, Roca y Normal. Esquirla de Hielo da prioridad para revertir a rivales debilitados o más rápidos. Fuerza Mental evita el retroceso de Sorpresa y la bajada de Intimidación, protegiendo el barrido. Alegre para el tope de Velocidad.',
      alternatives: [
        {
          slot: 'move',
          value: 'SWORDSDANCE',
          note: 'Si el equipo aporta la prioridad de revenge y Weavile puede permitirse un turno de mejora.',
          replaces: 'ICESHARD'
        },
        {
          slot: 'move',
          value: 'ICICLECRASH',
          note: 'STAB de Hielo de un solo golpe, más fiable que Tri Ataque Frío ante Robustez y bandas de aguante.',
          replaces: 'TRIPLEAXEL'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Potencia inmediata mayor a cambio de quedar bloqueado en un ataque.'
        }
      ]
    }
  ]
}

export default weavile
