import type { PokemonTemplateSet } from '../../lib/types'

const rotom: PokemonTemplateSet = {
  internalName: 'ROTOM',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LEVITATE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['VOLTSWITCH', 'SHADOWBALL', 'WILLOWISP', 'PAINSPLIT'],
      justification:
        'El tipo Eléctrico/Ghost con Levitación deja a Rotom sin debilidad a Tierra y solo débil a Fantasma y Siniestro, con muchas resistencias e inmunidades (Normal, Lucha, Tierra, Veneno resistido). PS 50 es bajo, pero Def 77 / Def.Esp 77 más Fuego Fatuo (quema a los físicos que intenta parar), Repartedolor (iguala PS con un rival más gordo) y Voltiocambio lo hacen un pivote defensivo muy molesto. Bola Sombra es el segundo STAB de cobertura. Osada para sostener mejor el lado físico, que es donde entra a hacer su trabajo.',
      alternatives: [
        {
          slot: 'move',
          value: 'THUNDERBOLT',
          note: 'Daño fijo de STAB si no se quiere ceder el turno con Voltiocambio.',
          replaces: 'VOLTSWITCH'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Frena a los rápidos en lugar de reducir el daño físico con la quemadura.',
          replaces: 'WILLOWISP'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'LEVITATE',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'THUNDERBOLT', 'SHADOWBALL', 'VOLTSWITCH'],
      justification:
        'Levitación y el buen tipo defensivo le dan turnos para montar Más Psique. Con At.Esp 95 tras +2, Rayo y Bola Sombra tienen cobertura casi perfecta (solo la frenan los Normal, y estos caen a Voltiocambio si se predice el cambio). Velocidad 91 alcanza a buena parte del tier ofensivo. Voltiocambio permite salir si el rival trae un check tras la subida.',
      alternatives: [
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Aísla del estado y de la prioridad mientras se acumulan subidas de Más Psique.',
          replaces: 'VOLTSWITCH'
        }
      ]
    }
  ]
}

export default rotom
