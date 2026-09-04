import type { PokemonTemplateSet } from '../../lib/types'

const medicham: PokemonTemplateSet = {
  internalName: 'MEDICHAM',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PUREPOWER',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FAKEOUT', 'HIGHJUMPKICK', 'ZENHEADBUTT', 'ICEPUNCH'],
      justification:
        'Energía Pura duplica el Ataque, así que la base 60 rinde como una de 120 efectiva y coloca a Medicham como rompemuros físico pese a sus valores modestos. Velocidad 80 no es de sweeper, de ahí Sorpresa: prioridad +3 para chip garantizado al entrar y para gestionar objetivos frágiles o de prioridad. Patada Salto Alta es el STAB de Lucha de máxima potencia; Cabezazo Zen es el segundo STAB y cubre a los tipo Lucha y Veneno; Puño Hielo pega a Volador, Psíquico y Dragón/Tierra que resisten la combinación. Orbe Vida aporta el último tramo de daño. Alegre para adelantar a la mayor cantidad de bases 70-90 posible.',
      alternatives: [
        {
          slot: 'move',
          value: 'DRAINPUNCH',
          note: 'STAB de Lucha seguro, sin el dano de retroceso de Patada Salto Alta al fallar.',
          replaces: 'HIGHJUMPKICK'
        },
        {
          slot: 'move',
          value: 'PSYCHOCUT',
          note: 'STAB psiquico de precision perfecta y sin depender de un efecto secundario.',
          replaces: 'ZENHEADBUTT'
        },
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Revenge killer que renuncia a Sorpresa y a cambiar de golpe.'
        },
        {
          slot: 'nature',
          value: 'ADAMANT',
          note: 'Más potencia si el equipo ya tiene control de la Velocidad.'
        }
      ]
    }
  ]
}

export default medicham
