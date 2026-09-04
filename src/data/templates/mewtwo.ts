import type { PokemonTemplateSet } from '../../lib/types'

const mewtwo: PokemonTemplateSet = {
  internalName: 'MEWTWO',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRESSURE',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'PSYSTRIKE', 'AURASPHERE', 'ICEBEAM'],
      justification:
        'Mewtwo en Añil V4.13 tiene At. Esp. 154 y Velocidad 130, con PS 110 y defensas 100/130, el molde de barredor especial con instalación casi sin puntos débiles. Golpe Fantasma... Psicoataque (100, Psíquico, especial que impacta contra la Defensa física) revienta a los muros de Def. Esp. altos como los tipo Normal voluminosos, algo que un Psíquico normal no lograría. Tras Golpe Bajo el At. Esp. sube dos niveles y, con la Velocidad 130, Mewtwo remata equipos enteros. Esfera Aural cubre a Siniestro, Acero y Normal que resisten Psíquico, y Rayo Hielo pega a Dragón, Tierra y Volador. Vidasfera maximiza el daño inmediato; el volumen 110/100/130 permite instalar más de una vez. Naturaleza Miedosa y reparto ofensivo completo.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Gafas Elección pegan desde el turno uno sin necesidad de Golpe Bajo, a cambio de quedar bloqueado en un movimiento.'
        },
        {
          slot: 'move',
          value: 'FIREBLAST',
          note: 'Llamarada rompe a los Acero como Ferrothorn-likes que Esfera Aural no mata de forma limpia, a cambio de la cobertura de Rayo Hielo.',
          replaces: 'ICEBEAM'
        },
        {
          slot: 'move',
          value: 'SHADOWBALL',
          note: 'Bola Sombra pega a otros Psíquico y a los Fantasma en el espejo, alternativa de cobertura a Rayo Hielo.',
          replaces: 'ICEBEAM'
        },
        {
          slot: 'ability',
          value: 'UNNERVE',
          note: 'Nerviosismo impide que el rival consuma su baya, útil contra objetivos que dependen de Baya Zidra o de bayas reductoras de daño.'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'optimo',
      ability: 'PRESSURE',
      item: 'LEFTOVERS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'PSYSTRIKE', 'AURASPHERE', 'RECOVER'],
      justification:
        'Con defensas 100/130, PS 110 y acceso a Recuperación, Mewtwo puede optar por una condición de victoria más difícil de romper: Paz Mental sube At. Esp. y Def. Esp. cada turno, Recuperación restaura la mitad de los PS y Psicoataque más Esfera Aural bastan como ofensiva de dos tipos que casi nada resiste a la vez. A medida que acumula Paz Mental se vuelve casi inmune por el lado especial mientras conserva la Velocidad 130 para no ser revenge-killeado con facilidad. Restos aporta longevidad pasiva. Es una vía tan sólida como la de Golpe Bajo y suele ser preferible contra equipos ofensivos con mucha presión especial.',
      alternatives: [
        {
          slot: 'move',
          value: 'PSYSHOCK',
          note: 'Psicocarga también impacta contra la Defensa física y tiene más PP, alternativa a Psicoataque según la fiabilidad que se prefiera.',
          replaces: 'PSYSTRIKE'
        },
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Rayo Hielo añade cobertura contra Dragón y Tierra si el equipo no teme a los Acero.',
          replaces: 'AURASPHERE'
        }
      ]
    }
  ]
}

export default mewtwo
