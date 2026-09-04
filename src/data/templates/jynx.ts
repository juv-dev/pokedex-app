import type { PokemonTemplateSet } from '../../lib/types'

const jynx: PokemonTemplateSet = {
  internalName: 'JYNX',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'OBLIVIOUS',
      item: 'FOCUSSASH',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['LOVELYKISS', 'NASTYPLOT', 'ICEBEAM', 'PSYSHOCK'],
      justification:
        'Jynx tiene At. Esp. 115 y Velocidad 105 con Def 35, un barredor de cristal. Beso Amoroso es un movimiento de tipo Normal que duerme sin fallar por inmunidad de tipo, y esa incapacitación es lo que abre el turno para montar Maquinación. Banda Aguante garantiza sobrevivir a un golpe pese a su fragilidad, de modo que casi siempre consigue dormir a algo o subir el At. Esp. Con Maquinación (+2 At. Esp.), Rayo Hielo y Psicocarga son la doble STAB: Psicocarga golpea por la Defensa física y rompe muros especiales, y entre Hielo y Psíquico la cobertura es muy limpia. Despiste la hace inmune a Mofa, lo que asegura que pueda usar Beso Amoroso y Maquinación sin que un lead se lo impida, además de ignorar Intimidación y provocación. Miedosa y máximo reparto en At. Esp. y Velocidad para aprovechar el tramo 105 y golpear primero.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Orbe Vida da mucha más potencia inmediata si el equipo controla las trampas y ya dispone de otra vía para forzar un turno de setup, renunciando al seguro de la Banda Aguante.'
        },
        {
          slot: 'move',
          value: 'FOCUSBLAST',
          note: 'Onda Certera castiga a Siniestro y Acero como Tyranitar o Ferrothorn, que aguantan Hielo y Psíquico, a cambio de fiabilidad de precisión.',
          replaces: 'PSYSHOCK'
        },
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Sustituto tras dormir a un rival protege de estados y del turno de cambio, cediendo el pico de rotura de Maquinación.',
          replaces: 'NASTYPLOT'
        }
      ]
    }
  ]
}

export default jynx
