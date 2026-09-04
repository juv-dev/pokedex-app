import type { PokemonTemplateSet } from '../../lib/types'

const primarina: PokemonTemplateSet = {
  internalName: 'PRIMARINA',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LIQUIDVOICE',
      item: 'LEFTOVERS',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'HYPERVOICE', 'MOONBLAST', 'ICEBEAM'],
      justification:
        'Primarina tiene At.Esp 126 y Def.Esp 116 con PS 80, un perfil de tanque ofensivo especial. Voz Fluida convierte los movimientos de sonido en tipo Agua y los potencia un 20%: Vozarrón, normal de 90, se vuelve un golpe de 108 de potencia de tipo Agua, es decir STAB, con 100% de precisión, sin la penalización de precisión de Hidrobomba y sin depender de efectos de estado. Paz Mental eleva At.Esp. y Def.Esp. a la vez, jugando con Def.Esp 116 y Restos para absorber ataques especiales y acumular el set-up. Fuerza Lunar (95, STAB Hada) es el segundo golpe complementario, y Rayo Hielo cubre a Planta y Dragón que resisten el par Agua/Hada. Reparto 252 PS / 252 At.Esp. con Modesta: la Velocidad 60 queda por debajo de lo ofensivo relevante, así que la inversión va a tanquear el set-up y a golpear fuerte, no a correr. Restos sostiene los turnos de Paz Mental sin depender de curación de movimiento.',
      alternatives: [
        {
          slot: 'move',
          value: 'SPARKLINGARIA',
          note: 'Aria Burbuja es un STAB Agua de 90 puro que además cura quemaduras del rival, útil si se quiere un Agua directo en vez del sonido potenciado por Voz Fluida.',
          replaces: 'HYPERVOICE'
        },
        {
          slot: 'ability',
          value: 'TORRENT',
          note: 'Torrente potencia el Agua un 50% al quedar a 1/3 de PS, una opción si el set prescinde de movimientos de sonido y prefiere un refuerzo de último aliento.'
        },
        {
          slot: 'move',
          value: 'STOREDPOWER',
          note: 'Poder Reserva escala con los niveles positivos acumulados por Paz Mental y se vuelve un golpe de cierre enorme a costa de perder la cobertura contra Planta y Dragón.',
          replaces: 'ICEBEAM'
        }
      ]
    }
  ]
}

export default primarina
