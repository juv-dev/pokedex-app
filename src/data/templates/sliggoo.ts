import type { PokemonTemplateSet } from '../../lib/types'

const sliggoo: PokemonTemplateSet = {
  internalName: 'SLIGGOO',
  templates: [
    {
      role: 'wall-special',
      isPrimary: true,
      confidence: 'viable',
      ability: 'SAPSIPPER',
      item: 'EVIOLITE',
      nature: 'CALM',
      evs: [252, 0, 40, 0, 216, 0],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['DRAGONPULSE', 'LIFEDEW', 'TOXIC', 'PROTECT'],
      justification:
        'Nicho conocido de Sliggoo sin evolucionar: Def.Esp base 113 multiplicada por Mineral Evolutivo lo deja como uno de los muros especiales más sólidos de su rango, muy por encima de lo que su forma final aporta en el mismo papel. Aguamiel, movimiento de la línea de Goomy, le da la recuperación que le falta; Tóxico pone el reloj a los muros que no puede romper; Protección escala el veneno y permite reevaluar; Pulso Draco es la vía de daño estable. Herbívoro cubre la debilidad a Planta con subida de Ataque, útil frente a núcleos Agua-Planta. La inversión reparte volumen entre PS y Defensa física, ya que el lado especial ya está resuelto por el objeto. Es una plantilla viable, no óptima: depende de un objeto que solo funciona sin evolucionar y su ofensiva es mínima.',
      alternatives: [
        {
          slot: 'ability',
          value: 'HYDRATION',
          note: 'En equipos de lluvia: cura cualquier estado propio al final del turno, lo que permite usar Descanso como recuperación total.'
        },
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Cobertura de hielo contra Dragón y Tierra si el equipo necesita que Sliggoo aporte algo más ofensivamente.',
          replaces: 'TOXIC'
        }
      ]
    }
  ]
}

export default sliggoo
