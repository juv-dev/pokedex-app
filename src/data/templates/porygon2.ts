import type { PokemonTemplateSet } from '../../lib/types'

const porygon2: PokemonTemplateSet = {
  internalName: 'PORYGON2',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TRACE',
      item: 'EVIOLITE',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['RECOVER', 'ICEBEAM', 'THUNDERBOLT', 'THUNDERWAVE'],
      justification:
        'Con Mineral Evolutivo, Defensa 90 y Def.Esp 95 pasan a valores efectivos cercanos a 135 y 142 sobre PS 85, lo que lo deja como uno de los mejores tanques mixtos disponibles pese a no estar del todo evolucionado. Recuperación le da cura instantánea del 50% para sostener esa masa turno tras turno. Calco copia al entrar la habilidad de un rival adyacente, así que Porygon2 puede robar Intimidación, Absorbe Agua, Levitación o cualquier ventaja situacional del oponente. Rayo Hielo y Rayo cubren de forma amplia y neutra casi todo el juego desde el tipo Normal, y Onda Trueno frena a los ofensivos rápidos que intentan preparar encima. Reparto físicamente defensivo con Osada porque es el lado que más lo amenaza por contacto; IV de Ataque 0 para minimizar el daño de confusión y de Bola Foul.',
      alternatives: [
        {
          slot: 'move',
          value: 'TRIATTACK',
          note: 'Triataque (80, con Dicha nula aquí pero STAB neutro) como ataque principal si se prefiere daño constante a la cobertura de Rayo Hielo.',
          replaces: 'THUNDERBOLT'
        },
        {
          slot: 'move',
          value: 'FOULPLAY',
          note: 'Juego Sucio usa el Ataque del rival y castiga a los sweepers físicos que preparan encima, a cambio de un ataque especial propio.',
          replaces: 'THUNDERWAVE'
        },
        {
          slot: 'ability',
          value: 'DOWNLOAD',
          note: 'Descarga sube Ataque o At.Esp según la defensa más floja del rival al entrar: más presión ofensiva puntual a costa de la flexibilidad de Calco.'
        }
      ]
    }
  ]
}

export default porygon2
