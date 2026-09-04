import type { PokemonTemplateSet } from '../../lib/types'

const slowking: PokemonTemplateSet = {
  internalName: 'SLOWKING',
  templates: [
    {
      role: 'wall-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'REGENERATOR',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SCALD', 'PSYSHOCK', 'SLACKOFF', 'THUNDERWAVE'],
      justification:
        'PS 95 y Defensa Especial 110 con Ataque Especial 100 dan a Slowking el molde de muro especial que además devuelve daño. Regenerador le recupera un tercio de los PS cada vez que se retira, lo que le permite pivotar sin gastar turnos en curarse y absorber ataques especiales toda la partida. Escaldar es STAB con opción de quemar a los físicos que intentan aprovecharse, Fuerza Psíquica golpea por el lado físico y castiga a otros muros especiales, Relajación es la recuperación instantánea para los turnos en que no puede cambiar, y Onda Trueno frena a un sweeper rápido y da control de velocidad al equipo. Naturaleza Serena y reparto en PS y Defensa Especial; la Velocidad 30 es irrelevante y se asume.',
      alternatives: [
        {
          slot: 'move',
          value: 'FUTURESIGHT',
          note: 'Premonición presiona a distancia y rompe cores defensivos junto a un compañero, a cambio de la pegada inmediata de Fuerza Psíquica.',
          replaces: 'PSYSHOCK'
        },
        {
          slot: 'move',
          value: 'CHILLYRECEPTION',
          note: 'Refugio Gélido cambia de Pokémon e instala granizo en el mismo turno, un pivoteo más agresivo que renuncia al control de velocidad.',
          replaces: 'THUNDERWAVE'
        },
        {
          slot: 'item',
          value: 'ASSAULTVEST',
          note: 'Chaleco Asalto dispara la resistencia especial pero prohíbe movimientos de estado: en ese caso Relajación y Onda Trueno pasan a ser Premonición y Lanzallamas.'
        }
      ]
    }
  ]
}

export default slowking
