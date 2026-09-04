import type { PokemonTemplateSet } from '../../lib/types'

const pawniard: PokemonTemplateSet = {
  internalName: 'PAWNIARD',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'DEFIANT',
      item: 'EVIOLITE',
      nature: 'ADAMANT',
      evs: [248, 252, 0, 0, 8, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'SUCKERPUNCH', 'KNOCKOFF', 'IRONHEAD'],
      justification:
        'Pawniard sigue sin evolucionar hacia Bisharp, y ese es justo su nicho: es el único de la línea que puede llevar Mineral Evolutivo, que multiplica por 1,5 su Defensa 70 y su Def.Esp 40 y lo deja con un físico utilizable pese a su vida baja. Sobre esa base, Competitivo sube dos niveles el Ataque cada vez que el rival le reduce una característica, lo que castiga de forma brutal a Intimidación, Contoneo, Bofetón Lodo y, sobre todo, a Follaje, que la mayoría de equipos usan para limpiar trampas. Esa amenaza latente lo convierte en un guardián de trampas: el rival duda antes de usar Follaje. Danza Espada aprovecha los turnos que gana la amenaza de Competitivo; Golpe Bajo (prioridad +1) resuelve su falta de velocidad; Desarme quita objetos y castiga a Fantasma y Psíquico; Cabeza de Hierro pega a las Hadas que resisten Siniestro. Firme porque a base 60 la Velocidad no da para invertir.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Renuncia al físico de Mineral Evolutivo por un 30% más de daño en un rol puramente ofensivo.'
        },
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Alegre para intentar superar a las bases 60 antes de recurrir a la prioridad de Golpe Bajo.'
        },
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Trampa Rocas si se busca un lead que además castigue el Follaje rival con Competitivo.',
          replaces: 'SWORDSDANCE'
        },
        {
          slot: 'move',
          value: 'PSYCHOCUT',
          note: 'Corte Psíquico cubre a los tipos Lucha y Veneno que ignoran Cabeza de Hierro.',
          replaces: 'IRONHEAD'
        }
      ]
    }
  ]
}

export default pawniard
