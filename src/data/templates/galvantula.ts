import type { PokemonTemplateSet } from '../../lib/types'

const galvantula: PokemonTemplateSet = {
  internalName: 'GALVANTULA',
  templates: [
    {
      role: 'hazard-lead',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'COMPOUNDEYES',
      item: 'FOCUSSASH',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STICKYWEB', 'THUNDER', 'BUGBUZZ', 'VOLTSWITCH'],
      justification:
        'Galvantula es el colocador de Red Viscosa por excelencia: Velocidad 108 para ganar el duelo de leads y Ojo Compuesto, que sube un 30% la precisión de todos sus movimientos. Esa habilidad convierte a Rayo (110 de potencia, 70% base) en un ataque de 91% de precisión, dándole un STAB de Eléctrico enorme sin el riesgo habitual. Red Viscosa baja la Velocidad de todo lo que entre por el bando rival y define el set. Zumbido es la segunda STAB. Voltiocambio permite salir con ventaja una vez la red está puesta o si el emparejamiento es malo, cediendo el turno a un compañero. Banda Aguante garantiza que sobreviva a un golpe de un lead más rápido o más fuerte y deje al menos la red y un ataque. Naturaleza Miedosa y máxima Velocidad y At.Esp. porque su trabajo se juega en el primer turno.',
      alternatives: [
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Doble control de velocidad (red + parálisis) contra leads muy ofensivos.',
          replaces: 'BUGBUZZ'
        },
        {
          slot: 'move',
          value: 'ENERGYBALL',
          note: 'Castiga a Tierra y Roca que ignoran o resisten el resto del set.',
          replaces: 'BUGBUZZ'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Si se prioriza reutilizar a Galvantula como pivote eléctrico veloz durante la partida en vez de un único turno de trampa.'
        },
        {
          slot: 'ability',
          value: 'UNNERVE',
          note: 'Impide que el rival use bayas; se pierde la precisión de Rayo, que vuelve a su 70% base.'
        }
      ]
    }
  ]
}

export default galvantula
