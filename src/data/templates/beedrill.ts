import type { PokemonTemplateSet } from '../../lib/types'

const beedrill: PokemonTemplateSet = {
  internalName: 'BEEDRILL',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SWARM',
      item: 'FOCUSSASH',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'MEGAHORN', 'POISONJAB', 'DRILLRUN'],
      justification:
        'Añil V4.13 sube a Beedrill a Ataque 100 y Velocidad 95 (90 y 75 en su versión original), con lo que el Bicho/Veneno deja de ser anécdota: con Danza Espada y Alegre alcanza 317 de Velocidad, por delante de los atacantes neutros de base 100, y golpea con Megacuerno (120, STAB) y Puya Nociva (80, STAB). Taladradora (Tierra, 80) es la pieza que completa la cobertura: Acero es inmune a Veneno y resiste Bicho, y Volador resiste Bicho, así que sin el golpe de Tierra el set se estrella contra Corviknight, Skarmory o el tipo Acero de turno. Banda Aguante garantiza el turno de setup pese a la Defensa 40, y deja a Beedrill en 1 PS, exactamente el rango donde Enjambre ("potencia los movimientos de tipo Bicho en un 50% cuando tenga 1/3 o menos de sus PS") convierte a Megacuerno en un golpe de cierre. El reparto 252 Ataque / 252 Velocidad maximiza el rol de barredor de final de partida; la inversión en Defensa es puramente de relleno porque el plan no es aguantar, es no recibir. Francotirador queda descartada: sin Aguzar ni Periscopio en el set no hay fuente de golpe crítico que la aproveche.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera sube el daño un 30% sin depender de quedar a 1 PS, a cambio de no garantizar el turno de Danza Espada frente a golpes fuertes.'
        },
        {
          slot: 'move',
          value: 'XSCISSOR',
          note: 'Tijera X renuncia a 40 de potencia por precisión 100, útil si la precisión 85 de Megacuerno resulta costosa en el equipo.',
          replaces: 'MEGAHORN'
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme quita el objeto al rival y golpea limpio a Fantasma y Psíquico, cediendo la cobertura de Tierra que rompe al tipo Acero.',
          replaces: 'DRILLRUN'
        },
        {
          slot: 'move',
          value: 'FELLSTINGER',
          note: 'Aguijón Letal sube el Ataque tres niveles al debilitar al objetivo, una segunda vía de setup cuando el rival queda en rango tras el chip.',
          replaces: 'POISONJAB'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'SWARM',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['MEGAHORN', 'POISONJAB', 'DRILLRUN', 'KNOCKOFF'],
      justification:
        'Variante de ruptura sin turnos de setup: con Cinta Elección, el Ataque 100 de Añil V4.13 pega fuerte desde el primer turno y la Velocidad 95 con Firme (289) supera a la mayoría de los muros. Megacuerno y Puya Nociva son la doble STAB y Taladradora aporta la cobertura de Tierra que el set necesita contra el Acero; Desarme castiga al Pokémon que entra con el objeto puesto y golpea a los Fantasma que ignoran a Megacuerno por inmunidad de tipo. Enjambre sigue siendo la habilidad elegida: cuando Beedrill quede bajo 1/3 de PS, Megacuerno gana un 50% adicional y convierte al rompedor en un rematador; Francotiradora no tiene fuente de crítico aquí. Es viable y no óptimo porque la Defensa 40 y la Velocidad 95 sin mejora lo dejan dependiente de la predicción: cada golpe recibido cuenta y la Cinta bloquea cualquier reajuste.',
      alternatives: [
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Ida y Vuelta mantiene el momentum del usuario de Cinta y cede el turno a un compañero, a cambio de la utilidad de Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'ability',
          value: 'SNIPER',
          note: 'Francotirador solo aporta con soporte de golpe crítico (Aguzar más Periscopio) que este set no incorpora; Enjambre es la habilidad que da daño real en el tramo bajo de PS.'
        }
      ]
    }
  ]
}

export default beedrill