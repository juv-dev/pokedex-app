import type { PokemonTemplateSet } from '../../lib/types'

const excadrill: PokemonTemplateSet = {
  internalName: 'EXCADRILL',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SANDRUSH',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'EARTHQUAKE', 'IRONHEAD', 'ROCKSLIDE'],
      justification:
        'Excadrill tiene 135 de Ataque, 110 de PS y 88 de Velocidad, y su habilidad Ímpetu Arena duplica esa Velocidad bajo tormenta de arena, dejándolo cerca de 350 puntos efectivos y por delante de todo el tier ofensivo. Por eso pide un invocador de arena en el equipo, y Gigalith con Chorro Arena es el compañero natural. Danza Espada aprovecha los 110 de PS para armar un turno y llevar el Ataque a valores que rompen incluso a resistencias. Terremoto es el STAB de tierra de máxima potencia; Cabeza de Hierro es el segundo STAB que castiga a Hada y Roca y puede amedrentar; Avalancha cubre a los Volador y a los Fuego que ignoran a Terremoto. Naturaleza Firme porque la duplicación de arena ya resuelve la Velocidad y conviene el Ataque completo, y Vidasfera para maximizar el daño sin encadenarlo a un movimiento.',
      alternatives: [
        {
          slot: 'move',
          value: 'RAPIDSPIN',
          note: 'Elimina trampas del propio campo y sube la Velocidad; convierte el set en control de peligros manteniendo la arena.',
          replaces: 'SWORDSDANCE'
        },
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Control de Velocidad sin depender de la arena, para revenge killer cuando el clima no está activo.'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Potencia inmediata máxima cuando la arena ya cubre la Velocidad y no se busca subir con Danza Espada.'
        }
      ]
    }
  ]
}

export default excadrill
