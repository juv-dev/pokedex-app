import type { PokemonTemplateSet } from '../../lib/types'

const exploud: PokemonTemplateSet = {
  internalName: 'EXPLOUD',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PUNKROCK',
      item: 'CHOICESPECS',
      nature: 'MODEST',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BOOMBURST', 'FOCUSBLAST', 'FLAMETHROWER', 'SHADOWBALL'],
      justification:
        'El perfil ofensivo se sostiene en Vozarrón: 140 de potencia, tipo Normal y categoría especial, con Punk Rock multiplicando los ataques de sonido un 30%, de modo que el golpe efectivo supera holgadamente a cualquier STAB especial sin necesidad de subir. Ataque Especial 100 y Velocidad 68 lo colocan como rompemuros lento antes que como sweeper, y las Gafas Elección convierten cada entrada en una amenaza inmediata. Punk Rock además reduce a la mitad el daño de ataques de sonido rivales, un detalle menor que ocasionalmente le regala un cambio. Vozarrón no alcanza a tipo Fantasma, así que Bola Sombra cubre ese hueco; Onda Certera castiga a los Acero y muros especiales que aguantan el sonido y Lanzallamas ofrece un objetivo más seguro contra Acero. Modesta sobre Tímida porque Exploud rara vez va a superar en Velocidad a lo que importa y necesita el tope de daño para justificar el turno.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Permite cambiar de ataque entre turnos a cambio de perder el multiplicador de Gafas y sumar retroceso.'
        },
        {
          slot: 'nature',
          value: 'TIMID',
          note: 'Maximiza la Velocidad para adelantar a otras bases 60-70, a costa de un tramo de daño en Vozarrón.'
        },
        {
          slot: 'move',
          value: 'OVERHEAT',
          note: 'Cambia potencia sostenida por un golpe unico mucho mas fuerte contra Acero.',
          replaces: 'FLAMETHROWER'
        },
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Cobertura para Tierra, Dragón y Volador si el equipo ya tiene respuesta a fantasmas.',
          replaces: 'SHADOWBALL'
        }
      ]
    }
  ]
}

export default exploud
