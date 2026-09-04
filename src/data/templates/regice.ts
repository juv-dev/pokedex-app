import type { PokemonTemplateSet } from '../../lib/types'

const regice: PokemonTemplateSet = {
  internalName: 'REGICE',
  templates: [
    {
      role: 'wall-special',
      isPrimary: true,
      confidence: 'viable',
      ability: 'CLEARBODY',
      item: 'ASSAULTVEST',
      nature: 'CALM',
      evs: [252, 0, 0, 4, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['ICEBEAM', 'THUNDERBOLT', 'FOCUSBLAST', 'ANCIENTPOWER'],
      justification:
        'Defensa Especial base 200 convierte a Regice en la mejor esponja especial del formato, y el Chaleco Asalto la sube aún más a cambio de no poder usar movimientos de estado, lo que encaja con un conjunto de cuatro ataques. Rayo Hielo es el STAB, Rayo y Fuerza Bruta cubren Agua, Volador, Acero, Roca, Siniestro y Normal, y Poder Pasado pega a los Fuego y Volador que entran a la ligera. El tipo Hielo es malo defensivamente y no tiene recuperación fiable, así que su nicho concreto es aguantar cualquier golpe especial y responder. Serena con inversión en PS y Defensa Especial lleva esa resistencia al extremo.',
      alternatives: [
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Con Descanso y Onda Trueno en lugar de dos ataques, se convierte en un muro real más lento pero menos pasivo a largo plazo.'
        },
        {
          slot: 'move',
          value: 'FLASHCANNON',
          note: 'Foco Resplandor pega a Hada y Roca con precisión perfecta, a cambio de la cobertura de Poder Pasado sobre Fuego.',
          replaces: 'ANCIENTPOWER'
        },
        {
          slot: 'move',
          value: 'AMNESIA',
          note: 'Amnesia dobla la Defensa Especial ya descomunal para un plan de refuerzo, incompatible con el Chaleco Asalto.',
          replaces: 'ANCIENTPOWER'
        }
      ]
    }
  ]
}

export default regice
