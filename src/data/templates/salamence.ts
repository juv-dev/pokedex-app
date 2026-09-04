import type { PokemonTemplateSet } from '../../lib/types'

const salamence: PokemonTemplateSet = {
  internalName: 'SALAMENCE',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MOXIE',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONDANCE', 'DRAGONCLAW', 'EARTHQUAKE', 'DUALWINGBEAT'],
      justification:
        'Sin mega en Añil, Salamence apuesta por Autoestima: Danza Dragón sube Ataque y Velocidad, y cada rival debilitado suma otro nivel de Ataque, así que una sola danza suele bastar para encadenar la partida desde Ataque 135 y Velocidad 100 base. Garra Dragón es el STAB fiable, Terremoto cubre Acero y Roca, y Doble Ala rompe Bandas Aguante y Sustitutos además de aportar STAB Volador. Vidasfera asegura los cálculos de KO tras la subida. Firme sobre Alegre porque a +1 de Velocidad ya supera al formato y la potencia extra pesa más; Intimidación queda como alternativa para un perfil de pivote más defensivo.',
      alternatives: [
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Alegre gana las carreras a +1 contra otros usuarios de Danza Dragón y objetos de Pañuelo Elección.'
        },
        {
          slot: 'move',
          value: 'ROOST',
          note: 'Aves Sofocante alarga la vida de Salamence como wincon si el equipo ya tiene forma de romper Sustitutos.',
          replaces: 'DUALWINGBEAT'
        },
        {
          slot: 'ability',
          value: 'INTIMIDATE',
          note: 'Intimidación reconvierte el conjunto en un pivote ofensivo que baja el Ataque rival cada vez que entra.'
        }
      ]
    }
  ]
}

export default salamence
