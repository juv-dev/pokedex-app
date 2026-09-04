import type { PokemonTemplateSet } from '../../lib/types'

const golurk: PokemonTemplateSet = {
  internalName: 'GOLURK',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'NOGUARD',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DYNAMICPUNCH', 'EARTHQUAKE', 'POLTERGEIST', 'ICEPUNCH'],
      justification:
        'Ataque 124 con 89/80/80 de físico y solo 55 de Velocidad describen a un rompemuros pesado que ataca después y que necesita golpear seguro. Indefenso encaja de forma exacta: todos los movimientos aciertan siempre, así que Puño Dinámico se convierte en un ataque de Lucha de 100 de potencia con confusión garantizada en cada uso, y Poltergeist (110, normalmente 90 de precisión) y Terremoto nunca fallan. La confusión de Puño Dinámico compensa parte de la desventaja de velocidad al generar turnos perdidos del rival. Terremoto es la STAB de Tierra fiable, Poltergeist es la STAB de Fantasma de máxima potencia contra rivales con objeto y Puño Hielo cubre a los Volador, Dragón y Planta. Vidasfera da el empujón de potencia que le falta y Firme maximiza el daño porque la Velocidad es causa perdida. El contrapeso de Indefenso, que el rival también acierta siempre, importa poco en un Pokémon que ya recibe casi todo de lleno.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta para un pico de daño mayor si el equipo puede permitirse quedar bloqueado en un movimiento.'
        },
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Aprovecha su entrada segura para montar el peligro de entrada si el equipo carece de otro colocador.',
          replaces: 'ICEPUNCH'
        },
        {
          slot: 'move',
          value: 'SHADOWPUNCH',
          note: 'STAB de Fantasma que nunca falla contra rivales sin objeto, donde Poltergeist directamente falla.',
          replaces: 'POLTERGEIST'
        },
        {
          slot: 'ability',
          value: 'IRONFIST',
          note: 'Sube un 20% los puños, pero deja Puño Dinámico y Roca Afilada en su precisión original sin la garantía de acierto.'
        }
      ]
    }
  ]
}

export default golurk
