import type { PokemonTemplateSet } from '../../lib/types'

const cacturne: PokemonTemplateSet = {
  internalName: 'CACTURNE',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'viable',
      ability: 'WATERABSORB',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'SEEDBOMB', 'SUCKERPUNCH', 'DRAINPUNCH'],
      justification:
        'Ataque y At. Esp. son ambos 115, pero el lado físico dispone de Danza Espada y de prioridad. Absorbe Agua le da una entrada real contra movimientos de Agua (inmunidad más 25% de cura), algo raro en un tipo Planta. Tras una Danza Espada, Golpe Bajo (prioridad) tapa la pobre Velocidad 55 y remata a rivales más rápidos, Bomba Germen es STAB y Puño Drenaje cubre a Acero y Siniestro a la vez que compensa el desgaste de Vidasfera. Firme porque Cacturne nunca va a superar en velocidad al tier.',
      alternatives: [
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Quita objetos y pega a Fantasma y Psíquico, a costa de la recuperación de Puño Drenaje.',
          replaces: 'DRAINPUNCH'
        },
        {
          slot: 'move',
          value: 'SPIKES',
          note: 'Lo convierte en un lead ofensivo de trampas con la disuasión de Golpe Bajo.',
          replaces: 'SWORDSDANCE'
        },
        {
          slot: 'move',
          value: 'LOWKICK',
          note: 'Más potencia contra objetivos pesados si no se necesita la cura.',
          replaces: 'DRAINPUNCH'
        }
      ]
    }
  ]
}

export default cacturne
