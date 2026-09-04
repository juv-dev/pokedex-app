import type { PokemonTemplateSet } from '../../lib/types'

const morpeko: PokemonTemplateSet = {
  internalName: 'MORPEKO',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'HUNGERSWITCH',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['AURAWHEEL', 'KNOCKOFF', 'STOMPINGTANTRUM', 'TAUNT'],
      justification:
        'Morpeko en Añil V4.13 tiene Velocidad 97 y Ataque 95, un perfil de barredor veloz, y su firma es Rueda Aural: 110 de potencia que cambia de Eléctrico a Siniestro según la Forma que tome Mutapetito y además sube la Velocidad de Morpeko en cada uso. Ese movimiento es el mejor STAB móvil del juego para él porque gira los tipos sin cambiar de slot y acelera en espiral. Desarme cubre a los muros Psíquico/Fantasma que resisten Eléctrico/Siniestro; Pataleta (75, que se dobla si Morpeko falló su movimiento previo) da golpe Tierra; y Mofa bloquea los movimientos de estado (recuperación, trampas, setup) de los rivales lentos. La Vidasfera y la naturaleza Alegre (Velocidad +, At. Esp. -) con 252 PS / 252 At. maximizan el sweep: la Velocidad 97 de base subida por Rueda Aural en cada turno le permite adelantarse a la mayoría del tier. Su fragilidad (PS 58) es el límite del rol.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta Elección eleva un 50% el Ataque, ideal para el spam de Rueda Aural, a cambio de quedar bloqueado en un solo golpe.'
        },
        {
          slot: 'move',
          value: 'PARTINGSHOT',
          note: 'Última Palabra baja Ataque/At. Esp. del rival al mantener el momentum, cediendo el control de estado de Mofa.',
          replaces: 'TAUNT'
        },
        {
          slot: 'move',
          value: 'RAPIDSPIN',
          note: 'Giro Rápido limpia trampas y sube la velocidad, reemplazando el golpe Tierra de Pataleta por utilidad de campo.',
          replaces: 'STOMPINGTANTRUM'
        }
      ]
    }
  ]
}

export default morpeko