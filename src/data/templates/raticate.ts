import type { PokemonTemplateSet } from '../../lib/types'

const raticate: PokemonTemplateSet = {
  internalName: 'RATICATE',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'GUTS',
      item: 'FLAMEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FACADE', 'CRUNCH', 'SUCKERPUNCH', 'UTURN'],
      justification:
        'Raticate tiene Ataque 100 y Velocidad 110 en Añil V4.13, y su nicho real es el rompemuros con Agallas. Agallas ("si sufre un problema de estado, aumenta su Ataque un 50% e ignora la reducción por quemadura") se combina con Llamasfera para autoinfligirse la quemadura en el turno de entrada: a partir de ahí el Ataque efectivo sube y Fachada (70 de base que "duplica su potencia si el usuario está envenenado, quemado o paralizado") pega a 140 de potencia con STAB y bonificación de Agallas, sin la penalización de Ataque de la quemadura. Es un golpe Normal enorme y spameable turno tras turno. Triturar es la cobertura contra Fantasma y Psíquico inmunes o resistentes a Normal; Golpe Bajo (prioridad +1) rema a lo que supere el tramo 110; Ida y Vuelta mantiene el momentum y saca a Raticate cuando el matchup no acompaña. Alegre en vez de Firme porque la Velocidad 110 supera un tramo relevante de amenazas base 100 y algunos revenge killers; el pico de Fachada ya lo aporta Agallas.',
      alternatives: [
        {
          slot: 'ability',
          value: 'HUSTLE',
          note: 'Ánimo (+50% de Ataque, -20% de precisión) da el mismo empujón sin depender del estado, útil si el equipo no quiere regalar el turno de la quemadura; Fachada se queda en 70 de potencia.'
        },
        {
          slot: 'move',
          value: 'SWORDSDANCE',
          note: 'Con Vidasfera en lugar de Llamasfera: Danza Espada convierte a Raticate en un cierre de partida y prescinde de Agallas.',
          replaces: 'UTURN'
        },
        {
          slot: 'nature',
          value: 'ADAMANT',
          note: 'Firme maximiza el daño de Fachada si el equipo ya cubre el tramo de Velocidad por otra vía.'
        }
      ]
    }
  ]
}

export default raticate
