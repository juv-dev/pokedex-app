import type { PokemonTemplateSet } from '../../lib/types'

const furfrou: PokemonTemplateSet = {
  internalName: 'FURFROU',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'FURCOAT',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['COTTONGUARD', 'REST', 'ROAR', 'RETURN'],
      justification:
        'Normal puro con PS 75 / Def 60 / Def.Esp 90 / Velocidad 102. Pelaje Recio (su única habilidad) reduce a la mitad el daño físico recibido, lo que equivale a doblar la Defensa: el perfil físico real ronda 75/120. Sobre esa base, Rizo Algodón (+3 Defensa) lo vuelve casi impenetrable en el lado físico, y la Def.Esp 90 aguanta el especial de forma decente. Descanso es la única recuperación fiable de su repertorio, pero con Pelaje Recio y Rizo Algodón encima los dos turnos dormido rara vez son letales. Rugido (prioridad -6) saca a quien intente montar setup a su costa y aprovecha las trampas del equipo. Retorno da algo de presión ofensiva para no ser cebo total de Mofa. La Velocidad 102 le permite mover Rugido y Descanso antes que la mayoría de muros y ofensivos medios.',
      alternatives: [
        {
          slot: 'move',
          value: 'SLEEPTALK',
          note: 'Cubre los turnos de Descanso si te preocupa quedar indefensa, a cambio de la presión de Retorno.',
          replaces: 'RETURN'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Control de velocidad para el equipo si ya tenés otro muro físico que no necesita Rizo Algodón.',
          replaces: 'COTTONGUARD'
        },
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Bloquea estados y golpes de revés mientras el rival no rompa el clon.',
          replaces: 'ROAR'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Daño garantizado a los físicos de contacto, a cambio de la recuperación pasiva de Restos.'
        }
      ]
    }
  ]
}

export default furfrou
