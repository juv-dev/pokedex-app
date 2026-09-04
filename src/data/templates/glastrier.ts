import type { PokemonTemplateSet } from '../../lib/types'

const glastrier: PokemonTemplateSet = {
  internalName: 'GLASTRIER',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'CHILLINGNEIGH',
      item: 'LIFEORB',
      nature: 'BRAVE',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['ICICLECRASH', 'CLOSECOMBAT', 'HIGHHORSEPOWER', 'SWORDSDANCE'],
      justification:
        'Glastrier es el mejor candidato de Espacio Raro de Añil V4.13: Velocidad base 30 con 145 de Ataque y 130 de Defensa. Con Audaz y 0 en el IV de Velocidad queda en el tramo más lento del juego, de modo que ocupa el primer lugar de acción en cuanto el equipo activa Espacio Raro, y su Defensa 130 le permite además sobrevivir el turno sin el campo. Chuzos (85, STAB Hielo) castiga la entrada del rival con amedrentamiento, A Bocajarro (120, Lucha) golpea a los Acero y Hielo que resisten el STAB, y Fuerza Equina (95, Tierra) cubre Fuego, Eléctrico y Roca. Danza Espada transforma los 145 de Ataque en un pico que ni los muros físicos del metajuego toleran, y Relincho Blanco suma un nivel de Ataque por cada KO, lo que convierte a Glastrier en un barredor que se autoalimenta dentro de la sala. Vidasfera potencia cada golpe; el reparto 252 PS / 252 Ataque con 4 en Defensa maximiza el volumen de quien va a recibir golpes antes de que el Espacio Raro se active.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta Elección ofrece el pico de daño inmediato sin turno de mejora, a costa de quedar bloqueado en un tipo de movimiento.'
        },
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Plancha Corporal usa la Defensa 130 y convierte las mejoras de Defensa Férrea en daño, cediendo la cobertura de Fuerza Equina.',
          replaces: 'HIGHHORSEPOWER'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'CHILLINGNEIGH',
      item: 'CHOICEBAND',
      nature: 'BRAVE',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['ICICLECRASH', 'CLOSECOMBAT', 'HIGHHORSEPOWER', 'MEGAHORN'],
      justification:
        'Variante sin mejora para equipos de Espacio Raro que ya tienen el turno resuelto: Chuzos, A Bocajarro (120, Lucha) y Fuerza Equina (95, Tierra) reciben el 50% de la Cinta Elección y Megacuerno (120, Bicho) agrega cobertura contra Planta, Psíquico y Siniestro. Mantiene Audaz con 0 de IV de Velocidad para actuar primero dentro de la sala, y Relincho Blanco premia cada KO con +1 de Ataque, de modo que el set crece con cada baja sin necesidad de Danza Espada. Es viable y no óptimo porque renuncia a la mejora: la Cinta impide usar Danza Espada y el bloqueo puede quedar expuesto en los turnos en que Espacio Raro expira.',
      alternatives: [
        {
          slot: 'move',
          value: 'STOMPINGTANTRUM',
          note: 'Pataleta (75, Tierra) castiga el fallo del movimiento anterior con doble potencia, cediendo la precisión de Fuerza Equina.',
          replaces: 'HIGHHORSEPOWER'
        }
      ]
    }
  ]
}

export default glastrier