import type { PokemonTemplateSet } from '../../lib/types'

const brambleghast: PokemonTemplateSet = {
  internalName: 'BRAMBLEGHAST',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'WINDRIDER',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['POLTERGEIST', 'POWERWHIP', 'EARTHQUAKE', 'SHADOWSNEAK'],
      justification:
        'El perfil de Ataque 115 y Velocidad 100 lo define como wallbreaker lento de tipo Planta/Fantasma. Vetarrón es su STAB Fantasma de máxima potencia (110), Latigazo asesta el STAB Planta de 120, y Terremoto da la cobertura contra Fuego, Veneno y Acero que frenan su doble tipo. Sombra Vil cubre la prioridad para rematar frágiles sin depender del orden de turno. Cinta Elección maximiza ese Ataque 115; el set no lleva mejora porque la Cinta bloquea los movimientos de estado. Viento Afín le da inmunidad al daño de viento y un +1 al Ataque cuando es alcanzado por un movimiento de viento, ideal para equipos con Viento Afín o Cola Viento. Naturaleza Firme y reparto en Ataque y Velocidad. Sus 55 PS y 80 Def lo obligan a golpear y salir, no a aguantar.',
      alternatives: [
        {
          slot: 'ability',
          value: 'INFILTRATOR',
          note: 'Evita Sustitutos, Reflejo y Pantalla del rival, muy útil contra muros que se protegen, a cambio del bonus de Viento Afín.'
        },
        {
          slot: 'move',
          value: 'TRAILBLAZE',
          note: 'Seña Agresiva sube la Velocidad para superar barreras intermedias, cediendo el golpe de prioridad de Sombra Vil.'
        }
      ]
    }
  ]
}

export default brambleghast
