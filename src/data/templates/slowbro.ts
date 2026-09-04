import type { PokemonTemplateSet } from '../../lib/types'

const slowbro: PokemonTemplateSet = {
  internalName: 'SLOWBRO',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'REGENERATOR',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SCALD', 'PSYCHIC', 'SLACKOFF', 'THUNDERWAVE'],
      justification:
        'Slowbro en Añil V4.13 es un muro físico de referencia: PS 95 / Def 110 y tipo Agua/Psíquico, con At. Esp. 100 para no ser pasivo. Regeneración le devuelve un tercio de los PS cada vez que sale de combate, lo que convierte cada cambio en recuperación gratuita y le permite entrar una y otra vez frente a atacantes físicos. Escaldar es el STAB fiable con posibilidad de quemar, que reduce todavía más el daño físico que recibe; Psíquico es el segundo STAB y castiga a los Lucha y Veneno que intentan aprovecharse. Descanso restaura la mitad de los PS de forma inmediata y, junto a Regeneración y Restos, hace a Slowbro muy difícil de desgastar. Onda Trueno paraliza a lo que entra a montar setup o a los barredores rápidos, cubriendo su Velocidad 30. Reparto máximo en PS y Defensa con naturaleza Osada para tapar al máximo el flanco físico, que es su especialidad; la Defensa Especial 80 más los PS altos aguantan lo justo del lado especial mientras Descanso repone.',
      alternatives: [
        {
          slot: 'move',
          value: 'FUTURESIGHT',
          note: 'Premonición (130 de potencia, golpea dos turnos después) suma presión retardada que rompe muros defensivos combinada con los cambios, a cambio del daño inmediato de Psíquico.',
          replaces: 'PSYCHIC'
        },
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Rayo Hielo cubre a Planta, Dragón y Volador que resisten el agua y no temen a la parálisis, cediendo el control de velocidad de Onda Trueno.',
          replaces: 'THUNDERWAVE'
        },
        {
          slot: 'move',
          value: 'CALMMIND',
          note: 'Paz Mental transforma a Slowbro en un win condition especial que se refuerza mientras se cura con Descanso, a cambio de la utilidad inmediata de Onda Trueno.',
          replaces: 'THUNDERWAVE'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Botas Gruesas si el equipo no tiene retirada de trampas: mantiene intacto el ciclo de Regeneración al ignorar Trampa Rocas y Púas, a cambio de la cura pasiva de Restos.'
        }
      ]
    }
  ]
}

export default slowbro
