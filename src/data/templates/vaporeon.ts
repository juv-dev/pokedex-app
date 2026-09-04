import type { PokemonTemplateSet } from '../../lib/types'

const vaporeon: PokemonTemplateSet = {
  internalName: 'VAPOREON',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'WATERABSORB',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SCALD', 'WISH', 'PROTECT', 'FLIPTURN'],
      justification:
        'Vaporeon en Añil V4.13 tiene PS 130, At. Esp. 110 y defensas 60/95, lo que en la práctica funciona como un cuerpo enorme por el volumen de PS. Deseo cura 65 PS, la mitad de su vida, y sirve tanto para él como para pasar el turno de curación a un compañero; Protección asegura ese Deseo y sirve para leer cambios. Escaldar es el STAB con opción de quemadura contra los físicos y Finta pivota manteniendo el ritmo y dejando algo de daño. Absorbe Agua le da inmunidad y recuperación frente a los ataques de tipo Agua, el pilar de su papel defensivo. Naturaleza Osada y reparto físico defensivo porque su fragilidad real está en ese lado.',
      alternatives: [
        {
          slot: 'move',
          value: 'HAZE',
          note: 'Vaho borra las mejoras de los barredores instalados, cambio de utilidad si el equipo carece de freno a las instalaciones.',
          replaces: 'FLIPTURN'
        },
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Rayo Hielo añade cobertura contra Planta, Dragón, Volador y Tierra, a cambio de la seguridad que da Protección con Deseo.',
          replaces: 'PROTECT'
        }
      ]
    }
  ]
}

export default vaporeon
