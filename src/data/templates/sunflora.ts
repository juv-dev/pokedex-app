import type { PokemonTemplateSet } from '../../lib/types'

const sunflora: PokemonTemplateSet = {
  internalName: 'SUNFLORA',
  templates: [
    {
      role: 'weather-setter',
      isPrimary: true,
      confidence: 'viable',
      ability: 'DROUGHT',
      item: 'HEATROCK',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FIREBLAST', 'ENERGYBALL', 'EARTHPOWER', 'SYNTHESIS'],
      justification:
        'Sunflora es lento (Velocidad 30) y frágil por el lado físico, pero su habilidad oculta Sequía invoca sol al entrar y con Roca Calor dura ocho turnos, lo que lo hace un invocador dedicado para equipos de Clorofila. Ataque Especial 115 y el doble STAB Planta/Fuego le dan una presencia ofensiva real que otros invocadores de sol no tienen: Llamarada se potencia con el propio sol, Energía Vegetal es el segundo STAB y Tierra Viva cubre a los Fuego, Roca y Acero que quieren frenarlo. Síntesis recupera dos tercios de los PS bajo sol, así que reinstala el clima varias veces. Naturaleza Modesta con inversión en PS y Ataque Especial para sobrevivir su turno de entrada.',
      alternatives: [
        {
          slot: 'move',
          value: 'SLUDGEBOMB',
          note: 'Bomba Lodo castiga a las Hadas y a otros Planta, si el equipo no necesita romper Acero o Roca con Tierra Viva.',
          replaces: 'EARTHPOWER'
        },
        {
          slot: 'move',
          value: 'GROWTH',
          note: 'Desarrollo sube dos niveles de Ataque y Ataque Especial bajo sol, convirtiéndolo en un rompemuros lento en vez de un invocador puro.',
          replaces: 'SYNTHESIS'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera si otro compañero se encarga de prolongar el sol y se prioriza la pegada inmediata.'
        }
      ]
    }
  ]
}

export default sunflora
