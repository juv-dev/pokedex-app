import type { PokemonTemplateSet } from '../../lib/types'

const jirachi: PokemonTemplateSet = {
  internalName: 'JIRACHI',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SERENEGRACE',
      item: 'LEFTOVERS',
      nature: 'CAREFUL',
      evs: [252, 4, 0, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['WISH', 'PROTECT', 'IRONHEAD', 'THUNDERWAVE'],
      justification:
        'Con PS 100 y defensas 100/100 sobre el tipo Acero/Psíquico, Jirachi apoya y molesta a la vez. Dicha dobla los efectos secundarios: Cabeza de Hierro amedrenta el 60% de las veces, y combinado con la parálisis de Onda Trueno bloquea turnos enteros al rival. Deseo traslada cura del 50% a cualquier compañero, y Protección asegura que el Deseo llegue y escala los turnos de amedrentamiento. Cauta con inversión en PS y Defensa Especial cubre su flanco más explotable frente a un tipo Acero/Psíquico ya sólido en el físico.',
      alternatives: [
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Colocador de trampas si el equipo ya tiene control de estado por otra vía.',
          replaces: 'THUNDERWAVE'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Cambio y Fuga da ritmo y aprovecha el amedrentamiento de Cabeza de Hierro para entrar con ventaja.',
          replaces: 'PROTECT'
        },
        {
          slot: 'move',
          value: 'BODYSLAM',
          note: 'Golpe Cuerpo con Dicha paraliza el 60% y alcanza a los tipos Tierra inmunes a Onda Trueno.',
          replaces: 'THUNDERWAVE'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'SERENEGRACE',
      item: 'LEFTOVERS',
      nature: 'TIMID',
      evs: [252, 0, 0, 4, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'PSYCHIC', 'THUNDERBOLT', 'WISH'],
      justification:
        'El mismo cuerpo 100/100/100 sostiene un plan de Paz Mental: Jirachi se refuerza tras cada intercambio, se cura con Deseo y dispara Psíquico y Rayo, con Dicha subiendo al 20% la parálisis de Rayo. Miedosa a máxima Velocidad para acumular subidas antes de recibir daño; la Defensa Especial creciente lo vuelve muy difícil de romper por ese flanco.',
      alternatives: [
        {
          slot: 'move',
          value: 'PSYSHOCK',
          note: 'Psicocarga pega por el flanco físico a los muros especiales tipo Blissey.',
          replaces: 'PSYCHIC'
        },
        {
          slot: 'move',
          value: 'FIREPUNCH',
          note: 'Puño Fuego cubre a los Acero que resisten Psíquico y Rayo, a cambio de la recuperación de Deseo.',
          replaces: 'WISH'
        }
      ]
    }
  ]
}

export default jirachi
