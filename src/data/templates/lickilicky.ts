import type { PokemonTemplateSet } from '../../lib/types'

const lickilicky: PokemonTemplateSet = {
  internalName: 'LICKILICKY',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'viable',
      ability: 'GOOEY',
      item: 'LEFTOVERS',
      nature: 'CAREFUL',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CURSE', 'BODYSLAM', 'EARTHQUAKE', 'REST'],
      justification:
        'PS 110 con Defensas de 95 y 95. Baba baja un nivel la Velocidad del rival que lo ataque con un movimiento de contacto, lo que compensa su Velocidad 50 y convierte a Lickilicky en un muro físico incómodo. Maldición sube Ataque y Defensa a cambio de Velocidad, irrelevante aquí, y arranca el plan de atacante voluminoso. Golpe Cuerpo puede paralizar; Terremoto es la cobertura. Descanso es su única recuperación fiable y con las Defensas altas resulta sostenible. Cauta para tapar el flanco especial. Perfil viable, no óptimo, por depender de Descanso y carecer de un STAB potente.',
      alternatives: [
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Utilidad de robo de objeto sobre la cobertura de Terremoto.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'move',
          value: 'SLEEPTALK',
          note: 'Evita quedar inerte durante los turnos de Descanso.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'ability',
          value: 'CLOUDNINE',
          note: 'Anula los efectos del clima rival: útil contra estructuras de arena, lluvia o sol.'
        }
      ]
    }
  ]
}

export default lickilicky
