import type { PokemonTemplateSet } from '../../lib/types'

const mabosstiff: PokemonTemplateSet = {
  internalName: 'MABOSSTIFF',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STAKEOUT',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CRUNCH', 'PLAYROUGH', 'STONEEDGE', 'IRONHEAD'],
      justification:
        'En Añil V4.13 manda el perfil de wallbreaker: Ataque 120 con PS 80 / Def 90 y Velocidad 85 le permiten aguantar un golpe y responder con una Cinta Elección. Vigilante es el núcleo: como un usuario de Cinta es predecible y fuerza cambios, si Mabosstiff golpea al Pokémon que entra ese mismo turno el daño se dobla; la Velocidad 85 hace que ataque después de resolverse el cambio, así que un Trueno/Crunch predicho contra el entrante pega doble. Placaje es un STAB Siniestro de 80, Carantoña cubre la débil dualidad Lucha, Roca Afilada pega a Volador y Fuego, y Puya de Hierro remata a Hada y Roca. Naturaleza Firme y reparto en PS y Ataque maximizan la potencia aprovechando el volumen. No lleva mejora ni Danza de Sable porque la Cinta bloquea el movimiento y el rol de rompemuros no depende de barrer.',
      alternatives: [
        {
          slot: 'ability',
          value: 'INTIMIDATE',
          note: 'Cambia el rol a pivot defensivo: al entrar baja el Ataque rival y cierra el paso al daño físico con PS 80 / Def 90, usando Restos.'
        },
        {
          slot: 'item',
          value: 'BLACKGLASSES',
          note: 'Refuerza solo los golpes Siniestros sin bloquear los movimientos, a cambio de menos pico de daño que la Cinta.'
        }
      ]
    }
  ]
}

export default mabosstiff
