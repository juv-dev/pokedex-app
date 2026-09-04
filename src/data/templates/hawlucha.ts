import type { PokemonTemplateSet } from '../../lib/types'

const hawlucha: PokemonTemplateSet = {
  internalName: 'HAWLUCHA',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'UNBURDEN',
      item: 'ELECTRICSEED',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'ACROBATICS', 'CLOSECOMBAT', 'STONEEDGE'],
      justification:
        'El arquetipo definitorio de Hawlucha. En Campo Eléctrico la Semilla Electro se consume y sube Defensa, y ese consumo activa Liviano, que duplica la Velocidad: desde 118 base pasa a superar prácticamente a todo el metajuego. Con el turno de seguridad que da la subida de Defensa instala Danza Espada, y de ahí Acrobacias es el eje: al haber gastado ya el objeto pega a 110 de potencia con STAB. A Bocajarro es la segunda STAB para lo que resiste Volador, y Roca Afilada cierra la cobertura contra otros Volador y contra Fuego. Naturaleza Alegre para asegurar el pico de Velocidad incluso si el rival lleva Pañuelo. Requiere un compañero que ponga Campo Eléctrico (Electrogénesis o similar); en un equipo así es una de las condiciones de victoria más fiables del juego.',
      alternatives: [
        {
          slot: 'ability',
          value: 'LIMBER',
          note: 'Para equipos sin Campo Eléctrico: inmunidad a parálisis y se juega con Vidasfera en vez de semilla, renunciando al pico de Velocidad de Liviano.'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Acompaña a Flexibilidad cuando no hay terreno: potencia constante a cambio de PS y de los 110 de Acrobacias.'
        },
        {
          slot: 'move',
          value: 'THROATCHOP',
          note: 'Castiga a los Fantasma que frenan A Bocajarro y bloquea movimientos de sonido, a cambio de la cobertura de Roca.',
          replaces: 'STONEEDGE'
        }
      ]
    }
  ]
}

export default hawlucha
