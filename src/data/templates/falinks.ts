import type { PokemonTemplateSet } from '../../lib/types'

const falinks: PokemonTemplateSet = {
  internalName: 'FALINKS',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SKILLLINK',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NORETREAT', 'ARMTHRUST', 'ROCKBLAST', 'KNOCKOFF'],
      justification:
        'Falinks en Añil V4.13 (Ataque 100 / Defensa 100 / Velocidad 75) es un once cuyas múltiples cabezas le dan una identidad única en Añil: Bastión Final sube TODOS sus stats (Ataque, Defensa, At. Esp., Def. Esp. y Velocidad) a la vez y lo atrapa en el campo, el mejor setup posible cuando el rival no puede forzar el cambio. Encadenado es la habilidad que sostiene el set: Empujón y Pedrada pasan a golpear siempre 5 veces, convirtiendo sus 20 y 25 de potencia en 100-125 efectivos y rompiendo sustitutos y robustez, algo que sin la habilidad quedaría al azar de 2 a 5 impactos. Desarme cubre lo que resiste Lucha/Roca. La Vidasfera da el 30% extra y sin recurso de recuperación Falinks depende de la Vidasfera para cerrar la partida antes de morir. Naturaleza Alegre y 252 PS / 252 At.: la Velocidad 75 sirve tras Bastión Final, y la doble inmunidad y las dos cabezas cubren la fragilidad.',
      alternatives: [
        {
          slot: 'ability',
          value: 'DEFIANT',
          note: 'Competitivo dispara +2 Ataque cada vez que un rival le baja una característica, un castigo a Intimidación a cambio de que Empujón y Pedrada dejen de golpear siempre 5 veces.'
        },
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Plancha Corporal (usa Defensa 100) da un STAB Lucha alternativo más predecible que Empujón, a cambio del volumen de golpes múltiples.',
          replaces: 'ARMTHRUST'
        },
        {
          slot: 'move',
          value: 'CLOSECOMBAT',
          note: 'A Bocajarro (120) se elige cuando prima el golpe único de máxima potencia sobre los 5 hits de Empujón.',
          replaces: 'ARMTHRUST'
        }
      ]
    }
  ]
}

export default falinks