import type { PokemonTemplateSet } from '../../lib/types'

const bellibolt: PokemonTemplateSet = {
  internalName: 'BELLIBOLT',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'ELECTROMORPHOSIS',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['THUNDERBOLT', 'PARABOLICCHARGE', 'SLACKOFF', 'VOLTSWITCH'],
      justification:
        'Bellibolt es en Añil V4.13 un tanque Eléctrico de gran volumen: PS 109 y Defensa 91 con una Velocidad 45 que lo hacen ideal para aguantar y golpear después. Dinamo ("se carga de electricidad al recibir daño, lo que potencia su siguiente movimiento de tipo Eléctrico") premia exactamente la función del tanque: cada golpe recibido potencia el siguiente Rayo o Carga Parábola. Carga Parábola es el movimiento firma del esfuerzo: STAB Eléctrico de 70 que además cura la mitad del daño infligido, muy sinérgico con Dinamo. Rayo es el STAB de mayor potencia, y Relajo es la recuperación limpia que sostiene el intercambio durante muchos turnos. Voltiocambio, al ser Bellibolt lento, actúa al final y permite ceder el turno a un compañero sin quedar bloqueado. Restos suman curación pasiva. Naturaleza Osada y reparto en PS y Defensa para potenciar la estadística defensiva más alta del tanque.',
      alternatives: [
        {
          slot: 'move',
          value: 'ENERGYBALL',
          note: 'Energibola cubre a los tipos Tierra que son inmunes a Eléctrico, a cambio de la salida segura de Voltiocambio.',
          replaces: 'VOLTSWITCH'
        },
        {
          slot: 'item',
          value: 'ASSAULTVEST',
          note: 'Chaleco Asalto refuerza la resistencia especial a costa de no poder usar Relajo ni otros movimientos de estado.',
          replaces: 'LEFTOVERS'
        },
        {
          slot: 'ability',
          value: 'STATIC',
          note: 'Elec. Estática paraliza a los atacantes de contacto, una opción pasiva frente a la activación ofensiva de Dinamo.',
          replaces: 'ELECTROMORPHOSIS'
        }
      ]
    }
  ]
}

export default bellibolt
