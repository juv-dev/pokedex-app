import type { PokemonTemplateSet } from '../../lib/types'

const rayquaza: PokemonTemplateSet = {
  internalName: 'RAYQUAZA',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'AIRLOCK',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONDANCE', 'DRAGONASCENT', 'EARTHQUAKE', 'EXTREMESPEED'],
      justification:
        'Danza Dragón sube Ataque y Velocidad, y con Ataque 150, Velocidad 95 base y Ascenso del Dragón, un STAB Volador físico de 120 de potencia, Rayquaza barre tras una sola subida. Terremoto cubre Acero y Roca, y Velocidad Extrema da prioridad +2 para rematar a los más rápidos o a las ofensivas con prioridad menor cuando la subida de Velocidad no basta. Esclusa de Aire neutraliza los climas rivales, lo que ayuda contra equipos de lluvia o arena que buscarían acelerar a sus propias amenazas. Vidasfera y Firme maximizan el daño; a +1 de Velocidad ya supera al formato, así que la potencia importa más que la naturaleza rápida.',
      alternatives: [
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Alegre gana las carreras a +1 contra otros usuarios de Danza Dragón y Pañuelo Elección.'
        },
        {
          slot: 'move',
          value: 'SWORDSDANCE',
          note: 'Danza Espada da más pico de daño para romper muros si el equipo ya resuelve la velocidad con Velocidad Extrema y compañeros.',
          replaces: 'DRAGONDANCE'
        },
        {
          slot: 'move',
          value: 'DRAGONCLAW',
          note: 'Garra Dragón es STAB directo contra lo que no teme a Ascenso del Dragón, si el equipo no necesita cobertura de Tierra.',
          replaces: 'EARTHQUAKE'
        }
      ]
    }
  ]
}

export default rayquaza
