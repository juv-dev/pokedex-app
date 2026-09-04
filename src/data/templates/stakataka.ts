import type { PokemonTemplateSet } from '../../lib/types'

const stakataka: PokemonTemplateSet = {
  internalName: 'STAKATAKA',
  templates: [
    {
      role: 'trick-room-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'BEASTBOOST',
      item: 'LEFTOVERS',
      nature: 'LONELY',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['TRICKROOM', 'GYROBALL', 'EARTHQUAKE', 'STONEEDGE'],
      justification:
        'Stakataka es el Pokémon de Espacio Raro por excelencia: Velocidad 13 con Defensa 181 y PS 61 dejan claro que su rol es atacar durante el turno invertido, no competir en velocidad. Giro Bola calcula su potencia según la velocidad del rival: con IV de Velocidad a 0 (31 de velocidad final) pega 150 de potencia contra prácticamente cualquier rival activo, el golpe más duro del set. Espacio Raro lo coloca él mismo, Terremoto (STAB secundario efectivo) y Roca Afilada cubren a los Voladores que se burlan de Giro Bola. La naturaleza Huraña (sube Ataque, baja Defensa) es la clave de Ultraimpulso: con 252 en Ataque y cero en Defensa, el Ataque final (375) supera a la Defensa (358) y cada KO sube Ataque en vez de Defensa, convirtiendo a este tanque en una amenaza creciente. Restos sostienen los PS porque su movimiento de curación es Descanso, poco fiable en un atacante de elección de turno.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera eleva el pico de Giro Bola y Terremoto un 30% a cambio de la recuperación pasiva de Restos.'
        },
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Plancha Corporal usa la Defensa 358 para golpear sin depender de la precisión 80 de Roca Afilada, a costa de no pegar fuerte a los Voladores.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'move',
          value: 'ROCKSLIDE',
          note: 'Avalancha sacrifica potencia por 95 de precisión, la opción segura para equipos donde fallar el remate cuesta la partida.',
          replaces: 'STONEEDGE'
        }
      ]
    }
  ]
}

export default stakataka