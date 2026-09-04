import type { PokemonTemplateSet } from '../../lib/types'

const torkoal: PokemonTemplateSet = {
  internalName: 'TORKOAL',
  templates: [
    {
      role: 'weather-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'DROUGHT',
      item: 'HEATROCK',
      nature: 'RELAXED',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['LAVAPLUME', 'RAPIDSPIN', 'STEALTHROCK', 'BODYPRESS'],
      justification:
        'Sequía instaura sol al entrar (8 turnos con Roca Calor) para sostener un equipo de sol y anular la lluvia o la arena rival. Defensa 140 hace de Torkoal un muro físico real y convierte Autobús (Body Press) en un golpe de tipo Lucha con daño escalado por esa Defensa. Humareda (Lava Plume) añade un 30% de quemadura que sigue mermando a los físicos, y Trampa Rocas más Giro Rápido le dan control de trampas en ambos lados del campo. Plácida porque su Velocidad 20 es inservible de todos modos. Reparto en PS y Defensa para maximizar Autobús y aguantar los ataques que debe frenar.',
      alternatives: [
        {
          slot: 'move',
          value: 'WILLOWISP',
          note: 'Reparte quemaduras sin depender del reparto de Defensa para el matchup físico.',
          replaces: 'BODYPRESS'
        },
        {
          slot: 'move',
          value: 'YAWN',
          note: 'Fuerza cambios y acumula desgaste si el equipo ya tiene su propia retirada de trampas.',
          replaces: 'RAPIDSPIN'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Recuperación pasiva si el equipo no necesita los turnos extra de sol.'
        }
      ]
    }
  ]
}

export default torkoal
