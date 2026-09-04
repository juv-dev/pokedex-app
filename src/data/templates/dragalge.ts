import type { PokemonTemplateSet } from '../../lib/types'

const dragalge: PokemonTemplateSet = {
  internalName: 'DRAGALGE',
  templates: [
    {
      role: 'wall-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'ADAPTABILITY',
      item: 'BLACKSLUDGE',
      nature: 'SASSY',
      evs: [252, 0, 0, 4, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRACOMETEOR', 'SLUDGEBOMB', 'TOXICSPIKES', 'FLIPTURN'],
      justification:
        'Veneno/Dragón con PS 65 / Def 90 / Def.Esp 123 / At. Esp. 97 / Velocidad 44. Solo tres debilidades (Tierra, Psíquico, Dragón) frente a un muro de resistencias, y la Def.Esp 123 con inversión total lo vuelve un muro especial muy sólido. Adaptable (habilidad oculta) sube la bonificación de STAB de x1,5 a x2, así que Bomba Lodo (90) pega como un movimiento de ~180 de base y Meteoro Draco (130) es devastador incluso sin inversión ofensiva: un muro que castiga de verdad al entrar. Púas Tóxicas mina a los equipos rivales de forma pasiva, y Vuelta Rápida mantiene el momentum y le permite reposicionarse. Lodo Negro es su recuperación pasiva. Grosera para maximizar la Def.Esp asumiendo que la Velocidad 44 no compite.',
      alternatives: [
        {
          slot: 'move',
          value: 'DRAGONPULSE',
          note: 'STAB Dragón repetible sin bajarse el At. Esp.; con Adaptable sigue pegando fuerte.',
          replaces: 'DRACOMETEOR'
        },
        {
          slot: 'move',
          value: 'TOXIC',
          note: 'Veneno dirigido a un objetivo concreto contra muros que absorben Púas Tóxicas.',
          replaces: 'TOXICSPIKES'
        },
        {
          slot: 'move',
          value: 'HYDROPUMP',
          note: 'Tercer ataque para no ceder tanto momentum, a cambio de la utilidad de Vuelta Rápida.',
          replaces: 'FLIPTURN'
        },
        {
          slot: 'item',
          value: 'ASSAULTVEST',
          note: 'Aún más muro especial a cambio de Púas Tóxicas, quedando solo con ataques.'
        }
      ]
    }
  ]
}

export default dragalge
