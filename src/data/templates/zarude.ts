import type { PokemonTemplateSet } from '../../lib/types'

const zarude: PokemonTemplateSet = {
  internalName: 'ZARUDE',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LEAFGUARD',
      item: 'LEFTOVERS',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'POWERWHIP', 'DARKESTLARIAT', 'JUNGLEHEALING'],
      justification:
        'Zarude es el único usuario legal de Cura Selvática en Añil V4.13, que restaura la cuarta parte de los PS y cura los estados de la línea, lo que con Restos le da una recuperación sostenida propia: una rareza entre los setup físicos. Su perfil de 105 PS / 105 Defensa / 95 Defensa Especial con 120 de Ataque le permite hacer Danza Espada, recibir un golpe y seguir curándose en lugar de cerrar la partida de una sola pasada. Latigazo (120, STAB Planta) y Lariat Oscuro (85, STAB Siniestro, que ignora los cambios defensivos del rival) forman una doble STAB que solo un puñado de tipos resiste, y Alegre maximiza los 105 de Velocidad base para barrer por delante del grueso del metajuego. Defensa Hoja es la única habilidad de la especie: fuera del sol no interfiere y bajo sol otorga además inmunidad a estados, un bono condicional que no condiciona el set. El reparto 252 Ataque / 252 Velocidad con 4 en PS refleja que la recuperación ya cubre la longevidad.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta Elección convierte el mismo perfil en rompemuros puro sin turno de mejora, a costa de perder la recuperación de Cura Selvática.'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Ida y Vuelta reposiciona a Zarude sin perder el turno, cediendo la recuperación de Cura Selvática.',
          replaces: 'JUNGLEHEALING'
        },
        {
          slot: 'move',
          value: 'CLOSECOMBAT',
          note: 'A Bocajarro (120, Lucha) cubre a los Acero que resisten Planta y Siniestro, a cambio de la recuperación.',
          replaces: 'JUNGLEHEALING'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'LEAFGUARD',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['POWERWHIP', 'DARKESTLARIAT', 'CLOSECOMBAT', 'UTURN'],
      justification:
        'Variante sin mejora que lleva la Cinta Elección: Latigazo y Lariat Oscuro son la doble STAB, A Bocajarro cubre a los Acero y a los Normal que resisten Siniestro, e Ida y Vuelta sale del bloqueo del objeto. Firme maximiza los 120 de Ataque porque, sin Danza Espada que preserve, la prioridad del set es abrir huecos a golpe puro; los 252 en Velocidad mantienen los 304 efectivos del rango 105. La ausencia de Cura Selvática reduce la duración del set, por eso queda como uso secundario: rompe, castiga el cambio y cede el turno al compañero.',
      alternatives: [
        {
          slot: 'move',
          value: 'DRAINPUNCH',
          note: 'Puño Drenaje añade recuperación al set de Cinta, cediendo el golpe limpio a los Volador que resisten Lucha y Siniestro.',
          replaces: 'UTURN'
        }
      ]
    }
  ]
}

export default zarude