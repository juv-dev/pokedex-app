import type { PokemonTemplateSet } from '../../lib/types'

const talonflame: PokemonTemplateSet = {
  internalName: 'TALONFLAME',
  templates: [
    {
      role: 'pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'GALEWINGS',
      item: 'HEAVYDUTYBOOTS',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BRAVEBIRD', 'FLAREBLITZ', 'ROOST', 'UTURN'],
      justification:
        'Fuego/Volador con Velocidad 126 y Ataque 90. Alas Vendaval (habilidad oculta) en Añil da prioridad a los movimientos de tipo Volador solo si los PS del usuario están al máximo: con PS llenos, Pájaro Osado (120) golpea antes que todo y funciona como revenge killer inmediato. Botas Gruesas es obligatorio porque como parte Volador recibe 2x Trampa Rocas y, si entra perdiendo PS, Alas Vendaval deja de dar prioridad. Vuelo Bravo recupera la mitad de los PS y reactiva Alas Vendaval para el siguiente Pájaro Osado. Envite Ígneo es el STAB Fuego para Acero, Hada y Planta. Ida y Vuelta conserva el momentum y saca ante los counters. Alegre para asegurar los 126 de Velocidad.',
      alternatives: [
        {
          slot: 'move',
          value: 'SWORDSDANCE',
          note: 'Convierte a Talonflame en barredor con setup; Botas Gruesas y Vuelo Bravo sostienen la barrida.',
          replaces: 'UTURN'
        },
        {
          slot: 'move',
          value: 'WILLOWISP',
          note: 'Quema a los switch-in físicos que intentan frenarlo, a cambio del pivoteo.',
          replaces: 'UTURN'
        },
        {
          slot: 'move',
          value: 'DUALWINGBEAT',
          note: 'STAB Volador sin retroceso que rompe Sustituto y Banda Focus, a cambio de potencia y de la precisión de 90.',
          replaces: 'BRAVEBIRD'
        }
      ]
    }
  ]
}

export default talonflame
