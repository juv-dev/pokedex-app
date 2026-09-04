import type { PokemonTemplateSet } from '../../lib/types'

const mismagius: PokemonTemplateSet = {
  internalName: 'MISMAGIUS',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LEVITATE',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'SHADOWBALL', 'MOONBLAST', 'MYSTICALFIRE'],
      justification:
        'Reparto de 105 en Ataque Especial, Defensas y Velocidad. El tipo Fantasma/Hada que Añil le asigna lo hace inmune a Normal, Lucha y Dragón, y solo Fantasma y Acero lo golpean de forma supereficaz; Levitación añade inmunidad a Tierra y a Púas. Tras Maquinación, Bola Sombra más Fuerza Lunar es una combinación STAB que casi nada resiste de forma conjunta, y Llama Embrujada (Mystical Fire) castiga a los Acero que aguantarían el resto y además les baja el Ataque Especial. Miedosa para maximizar la Velocidad antes del impulso y superar a la mayor parte de la metagame ofensiva ya desde el turno de instalación.',
      alternatives: [
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Se instala con seguridad ante rivales pasivos y bloquea estados antes de barrer.',
          replaces: 'MYSTICALFIRE'
        },
        {
          slot: 'move',
          value: 'POWERGEM',
          note: 'Cobertura de Roca contra Fuego y Volador si el equipo ya tiene respuesta a los Acero.',
          replaces: 'MYSTICALFIRE'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Potencia inmediata sin depender de Maquinación, a cambio de quedar bloqueado en un ataque.'
        }
      ]
    }
  ]
}

export default mismagius
