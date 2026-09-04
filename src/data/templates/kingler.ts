import type { PokemonTemplateSet } from '../../lib/types'

const kingler: PokemonTemplateSet = {
  internalName: 'KINGLER',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SHEERFORCE',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['AGILITY', 'LIQUIDATION', 'KNOCKOFF', 'SUPERPOWER'],
      justification:
        'Kingler en Añil V4.13 tiene Ataque 130, un número de rompemuros, pero Velocidad 75, que es su único problema real. Agilidad sube dos niveles la Velocidad y resuelve ese cuello de botella, dejándolo por delante de casi todo el tier. Potencia Bruta es la habilidad clave: sube un 30% los movimientos con efecto secundario y anula ese efecto, lo que además cancela el retroceso de Vidasfera en esos golpes. Por eso el STAB es Hidroariete y no Puño Certero: Hidroariete gana el 30% y no cobra retroceso de Vidasfera, mientras que Puño Certero no se beneficia. Sobre Fuerza Bruta, Potencia Bruta elimina la bajada de Ataque y Defensa del usuario y añade el 30%, convirtiéndolo en un golpe de 120 sin contras. Desarme no recibe el impulso pero aporta utilidad y cobertura contra Fantasma y Psíquico. Es su mejor set con consenso: 130 de Ataque, Potencia Bruta y Vidasfera es un perfil de rompemuros de primer nivel en tiers bajos. Naturaleza Firme y reparto en Ataque y Velocidad.',
      alternatives: [
        {
          slot: 'move',
          value: 'SWORDSDANCE',
          note: 'Danza Espada sube el techo de daño contra equipos lentos y defensivos donde la Velocidad no es el problema, a cambio del arreglo de velocidad de Agilidad frente a ofensivas.',
          replaces: 'AGILITY'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta Elección pega máximo desde el turno uno con Avalancha de coberturas, a cambio de quedar bloqueado en un movimiento y perder el impulso de Agilidad.'
        },
        {
          slot: 'move',
          value: 'ROCKSLIDE',
          note: 'Avalancha se beneficia de Potencia Bruta (elimina el amedrentamiento, gana el 30%) y castiga a Volador y Fuego, a cambio de la cobertura de Lucha de Fuerza Bruta.',
          replaces: 'SUPERPOWER'
        }
      ]
    }
  ]
}

export default kingler
