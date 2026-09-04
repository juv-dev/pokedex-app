import type { PokemonTemplateSet } from '../../lib/types'

const hitmonlee: PokemonTemplateSet = {
  internalName: 'HITMONLEE',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'CAMORRISTA',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HIGHJUMPKICK', 'KNOCKOFF', 'POISONJAB', 'MACHPUNCH'],
      justification:
        'Hitmonlee tiene Ataque 120 y Velocidad 87, un rompemuros que no llega a barredor. Su habilidad Camorrista sube un 20% la potencia de las patadas, y Patada Salto Alta (130 de potencia) se convierte con ese bono en uno de los golpes de tipo Lucha más fuertes del juego; la contrapartida de que falle y cause daño de rebote se asume a cambio de esa potencia. Desarme quita el objeto al rival y castiga a Fantasmas y Psíquicos que intentan bloquear el STAB; Puya Nociva pega limpio a las Hadas que son inmunes a Lucha; Ultrapuño da prioridad para rematar a un rival debilitado pese a la Velocidad 87. Orbe Vida sube todos los golpes a cambio de desgaste, coherente con un atacante que quiere forzar cambios y no encajar. Alegre y máxima Velocidad para llegar al tramo 87 con ventaja y no quedar por detrás de otros de su rango.',
      alternatives: [
        {
          slot: 'ability',
          value: 'UNBURDEN',
          note: 'Liviano duplica la Velocidad al consumir el objeto; con Hierba Blanca y A Bocajarro en el hueco de Patada Salto Alta se transforma en barredor tras restaurar las bajadas y activar la habilidad.'
        },
        {
          slot: 'move',
          value: 'CLOSECOMBAT',
          note: 'A Bocajarro es un STAB seguro del 100% de precisión y sin daño de rebote, para no arriesgar la partida a un fallo de Patada Salto Alta, a costa de bajarse Def y Def. Esp.',
          replaces: 'HIGHJUMPKICK'
        },
        {
          slot: 'move',
          value: 'STONEEDGE',
          note: 'Roca Afilada cubre a Volador y Bicho que resisten Lucha y no temen Veneno, cediendo el golpe a Hadas de Puya Nociva.',
          replaces: 'POISONJAB'
        }
      ]
    }
  ]
}

export default hitmonlee
