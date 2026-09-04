import type { PokemonTemplateSet } from '../../lib/types'

const swellow: PokemonTemplateSet = {
  internalName: 'SWELLOW',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'GUTS',
      item: 'FLAMEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FACADE', 'BRAVEBIRD', 'UTURN', 'QUICKATTACK'],
      justification:
        'Velocidad 125 pone a Swellow por encima del grueso del tier ofensivo, y Agallas es el motor: con la quemadura de Orbe Ígneo el Ataque sube un 50% y la habilidad ignora la reducción de Ataque por quemadura. Sobre esa base, Salida (70, tipo Normal) pasa a 140 efectivos por su efecto de doblar potencia con estado, y con el STAB y Agallas es el golpe principal sin contrapartida de retroceso. Pájaro Osado es el STAB de Volador para lo que resiste al Normal, asumiendo su retroceso. Ida y Vuelta conserva el momentum que un sweeper frágil necesita, y Ataque Rápido remata objetivos debilitados. El Ataque base 105 es suficiente una vez multiplicado por Agallas; Alegre asegura el tope de Velocidad.',
      alternatives: [
        {
          slot: 'move',
          value: 'PROTECT',
          note: 'Activa el Orbe Ígneo sin exponerse el primer turno, a cambio del remate de prioridad.',
          replaces: 'QUICKATTACK'
        },
        {
          slot: 'nature',
          value: 'ADAMANT',
          note: 'Más daño manteniéndose por encima de la mayoría; útil si el equipo lleva Viento Afín.'
        }
      ]
    }
  ]
}

export default swellow
