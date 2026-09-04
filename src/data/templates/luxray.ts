import type { PokemonTemplateSet } from '../../lib/types'

const luxray: PokemonTemplateSet = {
  internalName: 'LUXRAY',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STRONGJAW',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['THUNDERFANG', 'CRUNCH', 'ICEFANG', 'FIREFANG'],
      justification:
        'Mandíbula Fuerte sube 50% los movimientos de mordisco, y los cuatro del set lo son: algo poco habitual en un movepool. Rayo Colmillo (65 a cerca de 98) es el STAB eléctrico sin retroceso, mejor en la práctica que Voltio Cruel (se hiere) o Supercelda. Triturar (80 a 120) pega a Fantasma y Psíquico y baja la Defensa. Colmillo Hielo cubre Tierra, Volador, Dragón y Planta, y Colmillo Ígneo rompe Acero, Planta y Bicho. Cinta Elección lleva el Ataque 120 a rango de romper muros; la Velocidad 100 lo deja en un buen punto de la carrera. Intimidación es la alternativa defensiva y Agallas exige estado activo, así que ninguna compite con esta sinergia en un set puramente ofensivo.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Revenge killer: mantiene los mordiscos potenciados y controla a los frágiles rápidos. Va con naturaleza Alegre.'
        },
        {
          slot: 'move',
          value: 'PSYCHICFANGS',
          note: 'Rompe pantallas y castiga a Veneno y Lucha, cediendo la respuesta a Acero.',
          replaces: 'FIREFANG'
        },
        {
          slot: 'move',
          value: 'VOLTSWITCH',
          note: 'Momentum contra el cambio; no lo potencia la habilidad.',
          replaces: 'ICEFANG'
        },
        {
          slot: 'ability',
          value: 'GUTS',
          note: 'Con Toxisfera o Llamasfera y Voltio Cruel se vuelve un rompedor por estado; cambia el enfoque completo del set.'
        }
      ]
    }
  ]
}

export default luxray
