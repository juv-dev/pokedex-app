import type { PokemonTemplateSet } from '../../lib/types'

const heracross: PokemonTemplateSet = {
  internalName: 'HERACROSS',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MOXIE',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CLOSECOMBAT', 'MEGAHORN', 'KNOCKOFF', 'ROCKBLAST'],
      justification:
        'Ataque base 125 con Velocidad 85 lo colocan como wallbreaker que rompe muros aunque no llegue primero. Cinta Elección sobre Megacuerno (120, bicho) y Close Combat (120, lucha) da dos STAB casi irresistibles: la combinación Bicho + Lucha solo la resisten limpio los Bicho/Volador y algún Fantasma, y ahí entra Desarme para quitar objeto y castigar a los muros, y Pedrada (multigolpe roca) para los Volador y Fuego que pivotan encima y para atravesar Robustez y Banda Aguante. Autoestima convierte cada KO en +1 de Ataque, así que un solo hueco abierto lo transforma en una amenaza de fin de partida sin gastar turno de preparación. Firme maximiza el poder porque a Velocidad 85 la inversión solo sirve para no quedar detrás de neutrales, no para barrer.',
      alternatives: [
        {
          slot: 'move',
          value: 'STONEEDGE',
          note: 'Roca Afilada cambia consistencia por un pico de daño único contra Volador y Fuego voluminosos, a costa de fallar más y no romper Robustez.',
          replaces: 'ROCKBLAST'
        },
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Pañuelo Elección lo reconvierte en revenge killer: pierde el pico de ruptura pero pasa a superar a la mayoría de ofensivos y encadena Autoestima tras cada KO.'
        },
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Alegre para superar la franja de Velocidad 95-100 con Pañuelo o para ganar espejos, a cambio de poder de ruptura.'
        }
      ]
    },
    {
      role: 'bulky-attacker',
      isPrimary: false,
      confidence: 'viable',
      ability: 'GUTS',
      item: 'FLAMEORB',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FACADE', 'CLOSECOMBAT', 'MEGAHORN', 'KNOCKOFF'],
      justification:
        'Variante sin bloqueo de movimiento apoyada en Agallas: la Llamasfera lo quema al final del primer turno, Agallas sube el Ataque un 50% ignorando la reducción por quemadura, y Fachada (70, normal) dobla su potencia a 140 al estar quemado, quedando como un movimiento de 140 con boost de Agallas y sin STAB pero neutro contra casi todo. Close Combat y Megacuerno siguen siendo los STAB de ruptura y Desarme aporta utilidad. La quemadura además protege de otras alteraciones de estado y de que un rival intente frenarlo con quemado propio. Es más lento y frágil que el set de Cinta, por eso queda como alternativa, pero no depende de estar bloqueado en un solo ataque.',
      alternatives: [
        {
          slot: 'move',
          value: 'SWORDSDANCE',
          note: 'Danza Espada si el equipo puede forzar cambios: cambia la potencia inmediata de Fachada por doblar el Ataque y cerrar la partida.',
          replaces: 'FACADE'
        }
      ]
    }
  ]
}

export default heracross
