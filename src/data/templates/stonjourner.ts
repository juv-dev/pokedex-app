import type { PokemonTemplateSet } from '../../lib/types'

const stonjourner: PokemonTemplateSet = {
  internalName: 'STONJOURNER',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'POWERSPOT',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STONEEDGE', 'EARTHQUAKE', 'BODYPRESS', 'SUPERPOWER'],
      justification:
        'Stonjourner en Añil V4.13 tiene Ataque 125 y Defensa 135 con una velocidad 70 media y una Def. Esp. 20 abismal. Es un rompemuros físico puro con una identidad única: Fuente Energía potencia un 30% los movimientos de los aliados adyacentes, así que es también un apoyo de daño de equipo en combates dobles. Roca Afilada (STAB Roca) y Terremoto dan su doble cobertura; Plancha Corporal aprovecha su Defensa 135 para golpear con Ataque enorme; y Fuerza Bruta (120) castiga a Acero, Roca y Siniestro. La Cinta Elección con Firme maximiza ese Ataque 125, y el reparto en PS y Ataque compensa la Def. Esp. 20 con pura inversión de aguante. Es un golpeador de un solo uso por su fragilidad especial, por eso no se le pide barrer ni aguantar: entra, rompe y apoya.',
      alternatives: [
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Trampa Rocas añade utilidad de entrada cuando el equipo necesita la trampa, liberando la Cinta por un objeto de longevidad.'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado paga a los atacantes físicos de contacto que toquen una Defensa 135, cambiando el 50% de Ataque por presión defensiva.'
        },
        {
          slot: 'move',
          value: 'HEATCRASH',
          note: 'Golpe Calor golpea más fuerte cuanto más pesa el rival; con un peso enorme, castiga a los Acero que resisten Roca.'
        }
      ]
    }
  ]
}

export default stonjourner