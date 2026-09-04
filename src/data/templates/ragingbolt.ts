import type { PokemonTemplateSet } from '../../lib/types'

const ragingbolt: PokemonTemplateSet = {
  internalName: 'RAGINGBOLT',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PROTOSYNTHESIS',
      item: 'BOOSTERENERGY',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'THUNDERBOLT', 'DRAGONPULSE', 'THUNDERCLAP'],
      justification:
        'Raging Bolt es un barrefuerte especial voluminoso con Ataque Especial 137, PS 125 y Velocidad 75. Paleosíntesis con Energía Potenciadora sube su Ataque Especial de forma autónoma, y Paz Mental apila +1 At. Esp. y +1 Def. Esp., de modo que con el bulto de PS 125 puede absorber un golpe, fortificarse y empezar a barrer. Rayo (90, STAB Eléctrico) es el daño principal fiable, Pulso Dragón el STAB Dragón fiable sin bajada, y Relámpago Súbito (70, prioridad +1) remata a amenazas rápidas y debilitadas sin depender de la velocidad 75. Naturaleza Modesta con reparto en PS y At. Esp. aprovecha su condición de tanque especial: al no competir en velocidad prioriza la supervivencia y el poder acumulado.',
      alternatives: [
        {
          slot: 'move',
          value: 'DRACOMETEOR',
          note: 'Cometa Draco da el golpe Dragón de 130 para romper un muro antes del setup, a cambio de la consistencia de Pulso Dragón.',
          replaces: 'DRAGONPULSE'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos apoyan la variante de tanque puro con Paz Mental y recuperación, renunciando al impulso instantáneo de la Paleosíntesis.'
        }
      ]
    }
  ]
}

export default ragingbolt
