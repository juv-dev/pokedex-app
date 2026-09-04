import type { PokemonTemplateSet } from '../../lib/types'

const lanturn: PokemonTemplateSet = {
  internalName: 'LANTURN',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'VOLTABSORB',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['VOLTSWITCH', 'SCALD', 'ICEBEAM', 'REST'],
      justification:
        'En Añil V4.13 Lanturn tiene PS 125 y defensas 58/58/76/76, un depósito de PS enorme que solo cunde por el lado especial. El tipo Agua/Eléctrico es su mayor virtud: solo es débil a Planta y Tierra y resiste Agua, Eléctrico, Fuego, Hielo, Volador y Acero. Absorbe Elec. lo hace inmune a los ataques eléctricos y le devuelve 1/4 de PS, convirtiéndolo en la mejor entrada del juego contra Voltiocambio y STAB eléctricos. Voltiocambio mantiene el ritmo cediendo el turno, Escaldar quema a los físicos y compensa la Defensa 58, Rayo Hielo castiga a Planta, Tierra y Dragón, y Descanso es la única recuperación fiable de su repertorio. Naturaleza Serena y reparto en PS y Def. Esp. para maximizar el muro especial; Restos cubren el desgaste entre Descansos.',
      alternatives: [
        {
          slot: 'move',
          value: 'THUNDERBOLT',
          note: 'Rayo da el STAB eléctrico fiable para no ser pasivo frente a Agua y Volador, a cambio de la cobertura de Rayo Hielo contra Planta y Tierra.',
          replaces: 'ICEBEAM'
        },
        {
          slot: 'move',
          value: 'HEALBELL',
          note: 'Cascabel Cura añade función de clérigo para limpiar estados del equipo, si otro compañero ya cubre a Planta y Tierra.',
          replaces: 'ICEBEAM'
        },
        {
          slot: 'item',
          value: 'CHESTOBERRY',
          note: 'Baya Atania hace que el primer Descanso despierte de inmediato, un ciclo de recuperación seguro a costa del desgaste continuo de Restos.'
        },
        {
          slot: 'ability',
          value: 'WATERABSORB',
          note: 'Absorbe Agua cambia la inmunidad eléctrica por inmunidad a Agua con la misma cura, según lo que el equipo necesite absorber.'
        }
      ]
    }
  ]
}

export default lanturn
