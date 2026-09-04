import type { PokemonTemplateSet } from '../../lib/types'

const heliolisk: PokemonTemplateSet = {
  internalName: 'HELIOLISK',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'DRYSKIN',
      item: 'HEAVYDUTYBOOTS',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['VOLTSWITCH', 'THUNDERBOLT', 'HYPERVOICE', 'FOCUSBLAST'],
      justification:
        'At.Esp 115 y Velocidad 109 lo colocan como atacante especial rápido con función de pivote. Piel Seca le da inmunidad total al agua y curación bajo lluvia, lo que le regala cambios seguros frente a tipos Agua sin depender del clima propio. Voltiocambio mantiene el momentum y castiga al que entra; Rayo es el STAB fuerte de una sola acción; Vozarrón es la segunda STAB, un movimiento de sonido de 90 que ignora Sustituto y golpea a casi todo lo que resiste Eléctrico; Fuerza Bruta cubre el hueco contra Acero, Roca y Normal pese a su 70% de precisión. Botas Gruesas porque un pivote que entra y sale no puede pagar Trampa Rocas cada vez. Miedosa maximiza Velocidad y el IV de Ataque a 0 reduce el daño recibido por confusión. Se prefiere Piel Seca a Poder Solar porque no exige montar sol en el equipo.',
      alternatives: [
        {
          slot: 'ability',
          value: 'SOLARPOWER',
          note: 'En equipos de sol: sube At.Esp un 50% mientras dura el clima, a cambio de perder 1/8 de PS por turno y la inmunidad al agua.'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Cambia flexibilidad por potencia bruta si el equipo ya tiene otro pivote de Voltiocambio.'
        },
        {
          slot: 'move',
          value: 'WEATHERBALL',
          note: 'Con sol activo se vuelve Fuego de 100 y cubre Acero y Planta mejor que Fuerza Bruta.',
          replaces: 'FOCUSBLAST'
        }
      ]
    }
  ]
}

export default heliolisk
