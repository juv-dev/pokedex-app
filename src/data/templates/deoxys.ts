import type { PokemonTemplateSet } from '../../lib/types'

const deoxys: PokemonTemplateSet = {
  internalName: 'DEOXYS',
  templates: [
    {
      role: 'hazard-lead',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRESSURE',
      item: 'FOCUSSASH',
      nature: 'NAIVE',
      evs: [0, 4, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['TAUNT', 'STEALTHROCK', 'PSYCHOBOOST', 'KNOCKOFF'],
      justification:
        'Velocidad 150 base garantiza que Deoxys se mueva primero en el turno 1. Mofa corta trampas, recuperación y estados del rival antes de que actúe, Trampa Rocas coloca la trampa clave, y Psicoataque, de 140 de potencia, o Desarme aprovechan su Ataque y Ataque Especial 150 gemelos para pegar fuerte pese al -2 de Ataque Especial que deja Psicoataque tras usarlo. Banda Aguante asegura al menos una acción contra un lead más rápido o más fuerte. Naturaleza Ingenua para que tanto Psicoataque como Desarme conserven su potencia. Los PS 50 y las defensas 50/50 impiden cualquier rol que no sea el de lead suicida.',
      alternatives: [
        {
          slot: 'move',
          value: 'TOXICSPIKES',
          note: 'Púas Tóxicas si el equipo prefiere apilar dos trampas a quitar objetos con Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'move',
          value: 'MAGICCOAT',
          note: 'Capa Mágica devuelve las trampas y estados del lead rival, una lectura arriesgada para el turno 1.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Rayo Hielo golpea a los Tierra y Dragón que ignoran Psicoataque y bloquean Trampa Rocas por su cuenta.',
          replaces: 'KNOCKOFF'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'PRESSURE',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['PSYCHOBOOST', 'SHADOWBALL', 'FOCUSBLAST', 'ICEBEAM'],
      justification:
        'Ataque Especial 150 con Velocidad 150 y Vidasfera hacen de Deoxys un rompedor especial frágil pero letal. Psicoataque es el disparo de máxima potencia, Bola Sombra pega a otros Psíquico y a Fantasma, Fuerza Bruta a Acero y Siniestro, y Rayo Hielo a Dragón y Tierra. Miedosa a máxima Velocidad; su cuerpo de papel obliga a golpear antes de ser golpeado y a cambiar tras el -2 de Psicoataque.',
      alternatives: [
        {
          slot: 'move',
          value: 'NASTYPLOT',
          note: 'Con Psíquico en lugar de Psicoataque, Maquinación permite un plan de refuerzo sin la bajada de Ataque Especial.',
          replaces: 'ICEBEAM'
        },
        {
          slot: 'move',
          value: 'THUNDERBOLT',
          note: 'Rayo cubre Agua y Volador si el equipo ya tiene respuesta a Tierra.',
          replaces: 'ICEBEAM'
        }
      ]
    }
  ]
}

export default deoxys
