import type { PokemonTemplateSet } from '../../lib/types'

const cresselia: PokemonTemplateSet = {
  internalName: 'CRESSELIA',
  templates: [
    {
      role: 'wall-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LEVITATE',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['MOONLIGHT', 'PSYCHIC', 'THUNDERWAVE', 'MOONBLAST'],
      justification:
        'PS 120 / Def 110 / Def.Esp 120 con Levitación: una de las mejores paredes mixtas del juego. Luz Lunar recupera la mitad de los PS (más con sol), Onda Trueno reparte parálisis, y Psíquico y Fuerza Lunar evitan que sea pasiva total además de bajar estadísticas del rival (Def.Esp y At.Esp respectivamente). Aguanta golpes de ambos lados durante toda la partida. Serena inclina el volumen hacia el lado especial sin renunciar a la Defensa alta de base.',
      alternatives: [
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Pega a Dragón y a Tierra/Volador que amenazan al equipo, en lugar del STAB de Psíquico.',
          replaces: 'PSYCHIC'
        },
        {
          slot: 'move',
          value: 'LUNARDANCE',
          note: 'Sacrificio que revive por completo (PS, PP y estado) a un compañero, en lugar de la parálisis.',
          replaces: 'THUNDERWAVE'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Castiga a los físicos que intenta frenar, a cambio de la recuperación pasiva de Restos.'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'LEVITATE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 4, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'STOREDPOWER', 'MOONBLAST', 'MOONLIGHT'],
      justification:
        'Con ese volumen, Paz Mental convierte a Cresselia en un wincon: cada subida engorda Poder Reserva (base 20, escala con cada nivel de mejora acumulado) y sube la potencia de Fuerza Lunar, mientras Luz Lunar la mantiene sana. Difícil de romper sin críticos o movimientos de estado. Fuerza Lunar cubre a los Siniestro, que son inmunes a Poder Reserva.',
      alternatives: [
        {
          slot: 'move',
          value: 'PSYSHOCK',
          note: 'Golpea la Defensa física, rompiendo muros especiales como Blissey que aguantan Poder Reserva.',
          replaces: 'STOREDPOWER'
        }
      ]
    }
  ]
}

export default cresselia
