import type { PokemonTemplateSet } from '../../lib/types'

const ursaluna: PokemonTemplateSet = {
  internalName: 'URSALUNA',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'GUTS',
      item: 'FLAMEORB',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FACADE', 'HEADLONGRUSH', 'STONEEDGE', 'CLOSECOMBAT'],
      justification:
        'Ursaluna es un rompemuros puro: 140 de Ataque y 105 de PS con Agallas, que multiplica el Ataque por 1,5 cuando sufre un estado, y Llamasfera la activa en un solo turno. Fachada (70) se beneficia además del estado quemado y pasa a 140 de potencia antes del multiplicador de Agallas: tres multiplicadores que convierten el STAB Normal en el golpe más duro de Añil V4.13. Arremetida (120, STAB Tierra) es el golpe de máxima potencia, a costa de bajar su Defensa y Defensa Especial tras usarlo, Roca Afilada (100) cubre a los Volador y Fuego que resisten Normal, y A Bocajarro (120) castiga a los Acero y Roca que aguantan. Firme maximiza los 140 de Ataque; la Velocidad 50 no se invierte porque el rol es entrar, recibir o predecir el cambio y romper, y el reparto 252 PS / 252 Ataque le permite aguantar los golpes de vuelta que su falta de velocidad garantiza.',
      alternatives: [
        {
          slot: 'move',
          value: 'EARTHQUAKE',
          note: 'Terremoto (100, STAB Tierra) suma la doble STAB Normal/Tierra casi sin resistencias comunes, cediendo el castigo a los Volador de Roca Afilada.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'ability',
          value: 'BULLETPROOF',
          note: 'Piel de Cañón niega los movimientos de proyectil hostiles y permite optar por Restos en el objeto, a costa de perder el multiplicador de Agallas.'
        }
      ]
    },
    {
      role: 'sweeper-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'GUTS',
      item: 'FLAMEORB',
      nature: 'BRAVE',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['FACADE', 'EARTHQUAKE', 'STONEEDGE', 'CLOSECOMBAT'],
      justification:
        'Dentro de Espacio Raro, Ursaluna es imparable: con Audaz y 0 de IV de Velocidad queda en el tramo más lento y actúa primero en cuanto el campo se activa. La doble STAB Normal/Tierra de Fachada (140 por Agallas y quemadura) y Terremoto (100, STAB) apenas tiene resistencias conjuntas, Roca Afilada cubre a los Volador y A Bocajarro a los Acero; el set cambia Arremetida por Terremoto para no arriesgar la bajada de defensas turno a turno dentro de la sala. Agallas y Llamasfera funcionan igual que en el set de rompemuros, y el reparto 252 PS / 252 Ataque con los 4 restantes en Defensa sostiene los golpes que preceden al campo. Es viable y no óptimo porque el equipo debe entregar el turno inicial a Espacio Raro, una inversión que el rol de rompemuros directo de la plantilla principal no exige.',
      alternatives: [
        {
          slot: 'move',
          value: 'CRUNCH',
          note: 'Triturar (80, Siniestro) castiga a los Psíquico y Fantasma que intentan entrar de cambio, cediendo el golpe a los Acero de A Bocajarro.',
          replaces: 'CLOSECOMBAT'
        }
      ]
    }
  ]
}

export default ursaluna