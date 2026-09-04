import type { PokemonTemplateSet } from '../../lib/types'

const musharna: PokemonTemplateSet = {
  internalName: 'MUSHARNA',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MISTYSURGE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['CALMMIND', 'STOREDPOWER', 'MOONBLAST', 'MOONLIGHT'],
      justification:
        'Musharna tiene 116 de PS, 85/95 de defensas y 107 de Ataque Especial, pero apenas 29 de Velocidad, así que su camino es aguantar y escalar en vez de barrer rápido. Su habilidad oculta Nebulogénesis crea un campo de niebla al entrar que, mientras Musharna está en el suelo, la vuelve inmune a la parálisis, el sueño y el envenenamiento, protegiendo su plan de Paz Mental. Cada Paz Mental sube Ataque Especial y Defensa Especial, y Poder Reserva empieza en 20 de potencia y gana 20 por cada nivel de característica positiva, con lo que tras un par de subidas ya golpea como un ataque pesado. Fuerza Lunar cubre a los Siniestro, que son inmunes a Poder Reserva por ser este de tipo Psíquico. Luz Lunar da recuperación fiable del 50 por ciento con clima neutro para alargar el pulso. El reparto físico defensivo con naturaleza Osada y 0 IV en Ataque cubre su lado más débil y reduce el daño de Juego Sucio y de la confusión.',
      alternatives: [
        {
          slot: 'move',
          value: 'PSYSHOCK',
          note: 'Pega contra la Defensa física y no depende de las subidas, útil para no quedar frenado por muros especiales antes de escalar.',
          replaces: 'STOREDPOWER'
        },
        {
          slot: 'move',
          value: 'TRICKROOM',
          note: 'Convierte a Musharna en apoyo de Espacio Raro para un equipo lento, aprovechando su Velocidad 29.',
          replaces: 'MOONLIGHT'
        },
        {
          slot: 'nature',
          value: 'CALM',
          note: 'Refuerza el lado especial de entrada si el equipo ya cubre a los atacantes físicos.'
        }
      ]
    }
  ]
}

export default musharna
