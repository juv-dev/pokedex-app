import type { PokemonTemplateSet } from '../../lib/types'

const meowstic: PokemonTemplateSet = {
  internalName: 'MEOWSTIC',
  templates: [
    {
      role: 'screens-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRANKSTER',
      item: 'LIGHTCLAY',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['REFLECT', 'LIGHTSCREEN', 'YAWN', 'PSYCHIC'],
      justification:
        'Psíquico puro con Velocidad 104 y defensas 76/81. Bromista en Añil da prioridad a los movimientos de estado, así que Meowstic entra, coloca Reflejo o Pantalla Luz con prioridad +1 antes de recibir el golpe y repite la que haga falta. Refleluz extiende ambas pantallas a ocho turnos. Bostezo, también acelerado por Bromista, fuerza el cambio o duerme y gana otro turno de utilidad. Psíquico es el STAB para no ser cebo total de Mofa. Osada para maximizar la permanencia mientras arma el soporte. Los tipo Siniestro son inmunes a los movimientos usados con Bromista, así que ante ellos hay que colocar la pantalla de forma normal.',
      alternatives: [
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Parálisis con prioridad de Bromista para el control de velocidad del equipo, a cambio del cambio forzado de Bostezo.',
          replaces: 'YAWN'
        },
        {
          slot: 'move',
          value: 'TRICK',
          note: 'Con las pantallas ya puestas, trapichea el objeto a un muro rival: nicho anti-stall.',
          replaces: 'PSYCHIC'
        },
        {
          slot: 'move',
          value: 'HELPINGHAND',
          note: 'Soporte directo de daño a un aliado en formato dobles.',
          replaces: 'YAWN'
        }
      ]
    }
  ]
}

export default meowstic
