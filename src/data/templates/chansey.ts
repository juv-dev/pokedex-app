import type { PokemonTemplateSet } from '../../lib/types'

const chansey: PokemonTemplateSet = {
  internalName: 'CHANSEY',
  templates: [
    {
      role: 'wall-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'NATURALCURE',
      item: 'EVIOLITE',
      nature: 'BOLD',
      evs: [4, 0, 252, 0, 252, 0],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['SEISMICTOSS', 'SOFTBOILED', 'STEALTHROCK', 'THUNDERWAVE'],
      justification:
        'Chansey evoluciona a Blissey, así que puede llevar Mineral Evolutivo, que le sube Defensa y Def. Esp. un 50%. Con PS 250 y Def. Esp. 105 de base, ese bono la convierte en la mejor esponja especial disponible: absorbe prácticamente cualquier ataque especial una y otra vez. Sísmico hace daño fijo igual al nivel y es su forma más fiable de castigar sin depender de un ataque ofensivo (Ataque 5). Ovo Suave restaura la mitad de los PS de golpe y la hace casi imposible de tumbar por el lado especial. Trampa Rocas aprovecha los turnos muertos para colocar la trampa; Onda Trueno deja paralizado a lo que entra a montar setup o a un barredor rápido. Cura Natural elimina los estados alterados al cambiar, lo que la vuelve inmune de facto a Tóxico y quemaduras a largo plazo. Osada con reparto en Defensa y Def. Esp. y solo 4 en PS, ya inmensos de base: la inversión en Defensa parchea el flanco físico, que es el único por el que se la puede romper. IV de Ataque a 0 para minimizar el daño de confusión y Foul Play.',
      alternatives: [
        {
          slot: 'move',
          value: 'HEALBELL',
          note: 'Cascabel Cura limpia los estados de todo el equipo y le da función de clérigo, cediendo la colocación de Trampa Rocas.',
          replaces: 'STEALTHROCK'
        },
        {
          slot: 'move',
          value: 'AROMATHERAPY',
          note: 'Aromaterapia cumple el mismo papel de clérigo que Cascabel Cura y no se ve afectada por Toque Tóxico bloqueando sonido, a cambio de Onda Trueno.',
          replaces: 'THUNDERWAVE'
        },
        {
          slot: 'move',
          value: 'COUNTER',
          note: 'Contraataque devuelve el doble del daño físico recibido y sorprende a rompemuros físicos que la ven como cambio gratis, renunciando al control de velocidad de Onda Trueno.',
          replaces: 'THUNDERWAVE'
        }
      ]
    }
  ]
}

export default chansey
