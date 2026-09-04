import type { PokemonTemplateSet } from '../../lib/types'

const blissey: PokemonTemplateSet = {
  internalName: 'BLISSEY',
  templates: [
    {
      role: 'wall-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'NATURALCURE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['SEISMICTOSS', 'SOFTBOILED', 'THUNDERWAVE', 'HEALBELL'],
      justification:
        'Con PS 255 y Def. Esp. 135, Blissey es la mejor esponja especial del juego aun sin Mineral Evolutivo: absorbe cualquier ataque especial de forma indefinida. Su punto débil es exclusivamente el flanco físico (Def 10 de base), así que el reparto va a Osada con 252 en Defensa: sube el único stat que la puede tumbar y deja la Def. Esp., ya inmensa, sin tocar. Sísmico hace daño fijo igual al nivel y es su forma fiable de castigar sin depender del Ataque 10. Ovocuración restaura la mitad de los PS de golpe. Onda Trueno frena a lo que entre a montar setup o a un barredor rápido, y Cascabel Cura limpia estados de todo el equipo, función de clérigo que aprovecha sus turnos libres. Cura Natural elimina sus propios estados al cambiar, lo que la hace inmune de facto a quemaduras y envenenamientos a largo plazo. IV de Ataque a 0 para minimizar el daño de Juego Sucio y de la confusión. Restos le da la única fuente de recuperación pasiva que necesita para superar cadenas de daño.',
      alternatives: [
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Botas Gruesas si el equipo rival abusa de Trampa Rocas y Púas: Blissey reentra tantas veces que la suma de trampas supera lo que Restos regenera.'
        },
        {
          slot: 'move',
          value: 'CALMMIND',
          note: 'Paz Mental la convierte en un wincon defensivo que se vuelve intocable por el lado especial, a cambio de perder la utilidad de clérigo.',
          replaces: 'HEALBELL'
        },
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Trampa Rocas aprovecha los turnos muertos para colocar la trampa si el equipo no tiene otro colocador, cediendo el control de velocidad de Onda Trueno.',
          replaces: 'THUNDERWAVE'
        },
        {
          slot: 'move',
          value: 'AROMATHERAPY',
          note: 'Aromaterapia cumple el mismo papel de clérigo que Cascabel Cura pero no la bloquea Toque Tóxico anulando movimientos de sonido.',
          replaces: 'HEALBELL'
        }
      ]
    }
  ]
}

export default blissey
