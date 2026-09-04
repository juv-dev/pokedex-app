import type { PokemonTemplateSet } from '../../lib/types'

const hypno: PokemonTemplateSet = {
  internalName: 'HYPNO',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'viable',
      ability: 'FOREWARN',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'PSYSHOCK', 'REST', 'SLEEPTALK'],
      justification:
        'Hypno en Añil V4.13 tiene PS 85 y Def. Esp. 115, un cuerpo especialmente resistente por el lado especial. Paz Mental sube At. Esp. y Def. Esp. a la vez, así que cada uso lo acerca a ser un win condition que difícilmente muere de ataques especiales. Psicocarga usa la Defensa del rival en lugar de su Def. Esp., de modo que rompe a los muros especiales que de otra forma lo pararían en seco. Descanso más Sonámbulo forman el núcleo de recuperación: repone todos los PS y sigue actuando dormido. Es importante que la habilidad sea Alerta y no Insomnio, porque Insomnio impide usar Descanso en Añil; Alerta además revela el movimiento más potente del rival al entrar. Queda en viable porque su At. Esp. base 95 es modesto incluso con impulsos y su Velocidad 67 lo obliga a montar bajo presión. Naturaleza Serena y reparto en PS y Def. Esp. para apoyarse en su mejor defensa mientras Paz Mental cubre el resto.',
      alternatives: [
        {
          slot: 'move',
          value: 'STOREDPOWER',
          note: 'Poder Reserva (20 de potencia, sube 20 por cada nivel de mejora) escala brutalmente tras varios Paz Mental, a cambio de la capacidad de Psicocarga de romper muros especiales desde el primer turno.',
          replaces: 'PSYSHOCK'
        },
        {
          slot: 'ability',
          value: 'INSOMNIA',
          note: 'Insomnio da inmunidad al sueño en un set defensivo con Onda Trueno y Tóxico en lugar de Descanso, cediendo la recuperación fiable que ofrece el ciclo Descanso más Sonámbulo.'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Onda Trueno paraliza a barredores rápidos y compensa la Velocidad 67 en un rol más de apoyo, a cambio de un turno de recuperación de Sonámbulo.',
          replaces: 'SLEEPTALK'
        }
      ]
    }
  ]
}

export default hypno
