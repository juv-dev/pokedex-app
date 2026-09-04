import type { PokemonTemplateSet } from '../../lib/types'

const toxtricity: PokemonTemplateSet = {
  internalName: 'TOXTRICITY',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PUNKROCK',
      item: 'CHOICESPECS',
      nature: 'MODEST',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['OVERDRIVE', 'BOOMBURST', 'SLUDGEWAVE', 'VOLTSWITCH'],
      justification:
        'Toxtricity concentra su identidad en Punk Rock, que potencia los ataques de sonido un 30% y reduce a la mitad el daño que recibe de ellos. Amplificador es la STAB Eléctrica de sonido (100) que con la habilidad se vuelve efectivamente de 130 de potencia contra casi todo, y Estruendo es un sonido Normal de 140 que con Punk Rock alcanza un peso bruto de 182 puntos de daño sin ser STAB. Onda Tóxica (95) es la STAB Veneno para cubrir Hada, Planta y Lucha, y Voltiocambio con Gafas Elección permite golpear y pivotar fuera del bloqueo del objeto. Naturaleza Modesta con 252 At. Esp. y 252 Vel. para romper muros con la máxima potencia; es un wallbreaker (Velocidad 75, Ataque Esp. 114), no un barredor de cierre, así que su trabajo es abrir agujeros desde el primer turno.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera da un boost parecido sin quedar bloqueado en un movimiento, permitiendo alternar entre amplificador y estruendo, a costa del 30% de PS por golpe.',
          replaces: 'CHOICESPECS'
        },
        {
          slot: 'move',
          value: 'THUNDERBOLT',
          note: 'Rayo cubre el mismo objetivo STAB con 90 de potencia pero sin depender de la clase sonido, útil si se juega sin Punk Rock.',
          replaces: 'OVERDRIVE'
        }
      ]
    }
  ]
}

export default toxtricity
