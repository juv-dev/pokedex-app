import type { PokemonTemplateSet } from '../../lib/types'

const lumineon: PokemonTemplateSet = {
  internalName: 'LUMINEON',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STORMDRAIN',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['QUIVERDANCE', 'HYDROPUMP', 'ICEBEAM', 'AIRSLASH'],
      justification:
        'Ataque Especial 100 y Velocidad 91 con acceso a Danza Aleteo, algo raro en un tipo Agua. Colector atrae los movimientos de tipo Agua del rival, los anula por completo y sube un nivel el Ataque Especial, regalando un cambio y un impulso gratis antes incluso de la Danza Aleteo. Tras una Danza, Hidrobomba, Rayo Hielo y Tajo Aéreo cubren casi todo el reparto. Miedosa para asegurar el tope de Velocidad tras el +1. Óptimo dentro de su nicho: es la razón por la que se usa Lumineon. El IV de Ataque en 0 minimiza el daño de confusión.',
      alternatives: [
        {
          slot: 'move',
          value: 'SCALD',
          note: 'Precisión y quemadura a cambio de la potencia bruta de Hidrobomba.',
          replaces: 'HYDROPUMP'
        },
        {
          slot: 'ability',
          value: 'SWIFTSWIM',
          note: 'En equipos de lluvia: duplica la Velocidad en lugar de recibir el impulso de Colector.'
        },
        {
          slot: 'nature',
          value: 'MODEST',
          note: 'Más potencia si la Velocidad tras Danza Aleteo ya sobra para el metajuego local.'
        }
      ]
    },
    {
      role: 'hazard-removal',
      isPrimary: false,
      confidence: 'viable',
      ability: 'STORMDRAIN',
      item: 'HEAVYDUTYBOOTS',
      nature: 'TIMID',
      evs: [252, 0, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DEFOG', 'SCALD', 'ICEBEAM', 'UTURN'],
      justification:
        'Colector y el tipo Agua le dan cambios seguros para usar Defensa. Escaldar quema y mantiene presión, Rayo Hielo castiga Dragón y Planta, e Ida y Vuelta conserva el momentum. Perfil de apoyo viable para equipos que ya tienen ganador de partida y necesitan una retirada de trampas fiable.',
      alternatives: [
        {
          slot: 'move',
          value: 'FLIPTURN',
          note: 'Pivoteo que además restaura terreno propio si se prefiere el STAB de Agua al chip de Ida y Vuelta.',
          replaces: 'UTURN'
        }
      ]
    }
  ]
}

export default lumineon
