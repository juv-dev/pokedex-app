import type { PokemonTemplateSet } from '../../lib/types'

const mamoswine: PokemonTemplateSet = {
  internalName: 'MAMOSWINE',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'THICKFAT',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['EARTHQUAKE', 'ICICLECRASH', 'ICESHARD', 'KNOCKOFF'],
      justification:
        'Atq 130 y el tipo Hielo/Tierra dan una cobertura STAB casi perfecta: Terremoto más un ataque de Hielo golpean al menos neutro a casi todo y 4x a Dragón, Tierra, Volador y Planta. Sebo reduce a la mitad el daño de Fuego y de Hielo, es decir, borra dos de las debilidades de Mamoswine y le permite cambiar dentro de esos ataques. Carámbano Certero es el STAB de Hielo fiable; Estación de Hielo (prioridad +1) le da revanchas pese a la Velocidad 80; Desarme aporta utilidad. Vidasfera para presionar sin quedar encerrado.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Más pico de daño inmediato a cambio de quedar bloqueado en un movimiento.'
        },
        {
          slot: 'move',
          value: 'STONEEDGE',
          note: 'Cobertura a Volador y Fuego que no pisan el suelo, a cambio de la utilidad de Desarme.',
          replaces: 'KNOCKOFF'
        }
      ]
    },
    {
      role: 'hazard-lead',
      isPrimary: false,
      confidence: 'viable',
      ability: 'THICKFAT',
      item: 'FOCUSSASH',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'EARTHQUAKE', 'ICICLECRASH', 'ICESHARD'],
      justification:
        'Como lead: Banda Aguante garantiza colocar Trampa Rocas y meter un ataque fuerte incluso contra un rival más rápido, y Sebo aumenta las probabilidades de aguantar el golpe inicial de un Fuego o Hielo. Terremoto y Carámbano Certero pican durísimo desde Atq 130, y Estación de Hielo remata a un frágil o hace de red de seguridad tras caer a 1 PS.',
      alternatives: [
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Cambia las rocas por quitar el objeto al lead rival si el equipo ya tiene otro colocador.',
          replaces: 'STEALTHROCK'
        }
      ]
    }
  ]
}

export default mamoswine
