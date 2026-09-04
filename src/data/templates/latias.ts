import type { PokemonTemplateSet } from '../../lib/types'

const latias: PokemonTemplateSet = {
  internalName: 'LATIAS',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LEVITATE',
      item: 'SOULDEW',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'DRAGONPULSE', 'PSYSHOCK', 'ROOST'],
      justification:
        'Con PS 80 / Defensa 90 / Defensa Especial 130, Levitación y Respiro, Latias tiene la longevidad para reforzarse tras cada intercambio. El Rocío Bondad potencia un 20% sus movimientos de Dragón y Psíquico, y Paz Mental sube Ataque Especial y Defensa Especial hasta cerrar partidas como wincon. Pulso Dragón es el STAB fiable sin bajada, Psicocarga golpea por el flanco físico a los muros especiales tipo Blissey, y la inmunidad a Tierra de Levitación le regala turnos de entrada. Miedosa a máxima Velocidad porque su base 110 ya es alta y quiere acumular subidas antes de que la revienten.',
      alternatives: [
        {
          slot: 'move',
          value: 'STOREDPOWER',
          note: 'Poder Reserva escala con las subidas de Paz Mental hasta potencias enormes, pero Siniestro y Acero lo frenan mientras esté a +0.',
          replaces: 'PSYSHOCK'
        },
        {
          slot: 'move',
          value: 'DEFOG',
          note: 'Cambia el plan de wincon por utilidad de retirada de trampas si el equipo lo necesita.',
          replaces: 'CALMMIND'
        },
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Rayo Hielo pega a Dragón y Tierra que resisten sus STAB, a cambio de la recuperación de Respiro.',
          replaces: 'ROOST'
        }
      ]
    },
    {
      role: 'defensive-pivot',
      isPrimary: false,
      confidence: 'viable',
      ability: 'LEVITATE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRACOMETEOR', 'PSYCHIC', 'ROOST', 'DEFOG'],
      justification:
        'El mismo cuerpo de PS 80 / Defensa 90 / Defensa Especial 130 más Levitación y Respiro sostiene un pivote defensivo con retirada de trampas. Cometa Draco pega fortísimo de salida aun sin inversión gracias al Rocío Bondad y a la potencia base 130, Psíquico es el STAB secundario estable, y Deforestar limpia Trampa Rocas y púas del propio campo. Osada mantiene intacto el Ataque Especial mientras refuerza el flanco físico, el más explotable de Latias.',
      alternatives: [
        {
          slot: 'move',
          value: 'HEALINGWISH',
          note: 'Deseo Cura sacrifica a Latias para devolver PS y estado a un compañero, cierre de emergencia.',
          replaces: 'DEFOG'
        },
        {
          slot: 'item',
          value: 'SOULDEW',
          note: 'Mantiene el 20% de Dragón y Psíquico si se prioriza que Cometa Draco siga amenazando KO sobre el turno de Restos.'
        }
      ]
    }
  ]
}

export default latias
