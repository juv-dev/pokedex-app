import type { PokemonTemplateSet } from '../../lib/types'

const grapploct: PokemonTemplateSet = {
  internalName: 'GRAPPLOCT',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LIMBER',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['OCTOLOCK', 'DRAINPUNCH', 'LIQUIDATION', 'CLOSECOMBAT'],
      justification:
        'El rasgo que define a Grapploct es Octopresa: atrapa al rival en combate y, al final de cada turno, baja su Defensa y Def. Esp., de modo que el objetivo ya no puede escaparse y cada turno recibe más daño. Con Ataque 118, Defensa 90 y la recuperación de Puño Drenaje (además de Restos), Grapploct se planta, atrapa a un muro o a un rival bulky y lo desgasta sin remedio. Hidroariete (tipo Agua) cubre Fuego, Roca y Tierra, y A Bocajarro cierra con la STAB Lucha de 120 cuando ya no importa bajar sus propias defensas. Flexibilidad lo protege de la parálisis, que sería fatal a su Velocidad 42. Naturaleza Agitada con 252 PS / 252 At. equilibra volumen y daño; el reparto físico aprovecha la Defensa 90 y la presencia que mantiene Puño Drenaje.',
      alternatives: [
        {
          slot: 'move',
          value: 'ICEPUNCH',
          note: 'Puño Hielo cubre Volador, Planta y Dragón que resisten Lucha y Agua, a cambio de la potencia de A Bocajarro.',
          replaces: 'CLOSECOMBAT'
        },
        {
          slot: 'move',
          value: 'BULKUP',
          note: 'Corpulencia sube Ataque y Defensa a la vez para un planteamiento de setup de tanque lento, cediendo la cobertura Agua.',
          replaces: 'LIQUIDATION'
        }
      ]
    }
  ]
}

export default grapploct
