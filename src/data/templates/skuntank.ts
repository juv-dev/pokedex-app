import type { PokemonTemplateSet } from '../../lib/types'

const skuntank: PokemonTemplateSet = {
  internalName: 'SKUNTANK',
  templates: [
    {
      role: 'hazard-removal',
      isPrimary: true,
      confidence: 'viable',
      ability: 'AFTERMATH',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DEFOG', 'KNOCKOFF', 'GUNKSHOT', 'SUCKERPUNCH'],
      justification:
        'PS 103 y Ataque 103 sobre el tipo Veneno/Siniestro, que solo teme a Tierra y absorbe las Trampa Púas al entrar. Esa longevidad le permite usar Defensa varias veces por partida. Detonación resta un 25% de los PS máximos al rival que lo derribe con un movimiento de contacto, disuadiendo a los revenge killers físicos. Desarme y Bomba Fétida forman el STAB ofensivo y añaden control de objetos; Golpe Bajo, con prioridad +1, cubre la Velocidad 84 mediocre y remata Psíquico y Fantasma. Restos por encima de Gafas de Sol para sostener el rol de retirada de trampas. Perfil viable, no óptimo, por la falta de recuperación y de un movimiento de pivoteo.',
      alternatives: [
        {
          slot: 'move',
          value: 'TAUNT',
          note: 'Si el equipo ya limpia trampas: frena colocadores, recuperación y setup rival.',
          replaces: 'DEFOG'
        },
        {
          slot: 'move',
          value: 'POISONJAB',
          note: 'Precisión estable sobre la potencia de Bomba Fétida cuando fallar es inasumible.',
          replaces: 'GUNKSHOT'
        },
        {
          slot: 'item',
          value: 'BLACKGLASSES',
          note: 'Más daño con Golpe Bajo y Desarme a cambio de la longevidad de Restos.'
        }
      ]
    }
  ]
}

export default skuntank
