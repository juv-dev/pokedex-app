import type { PokemonTemplateSet } from '../../lib/types'

const huntail: PokemonTemplateSet = {
  internalName: 'HUNTAIL',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'viable',
      ability: 'STRONGJAW',
      item: 'WHITEHERB',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHELLSMASH', 'WATERFALL', 'CRUNCH', 'ICEFANG'],
      justification:
        'Rompecoraza sube dos niveles Ataque, Ataque Especial y Velocidad a cambio de bajar sus defensas; desde Ataque 104 y Velocidad 52 base, tras la subida Huntail supera a casi todo el formato. Mandíbula Fuerte es la habilidad elegida porque potencia un 50% Triturar y Colmillo Hielo, que se vuelven cobertura de élite contra Psíquico, Fantasma, Dragón, Tierra y Volador. Cascada es el STAB físico fiable con 100 de precisión y 20% de amedrentamiento. Hierba Blanca anula de una vez las bajadas de Rompecoraza para conservar algo de resistencia tras el setup. Firme maximiza el poder porque la subida x2 de Velocidad ya resuelve el problema de rapidez.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera cambia la limpieza de las bajadas por 30% de daño extra permanente si el equipo prefiere potencia a longevidad.'
        },
        {
          slot: 'move',
          value: 'SUCKERPUNCH',
          note: 'Golpe Bajo da prioridad para rematar a rivales más rápidos si Huntail pierde la subida de Velocidad, a cambio de la cobertura Hielo.',
          replaces: 'ICEFANG'
        },
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Alegre gana los espejos de Rompecoraza y las carreras de Velocidad a +2.'
        }
      ]
    }
  ]
}

export default huntail
