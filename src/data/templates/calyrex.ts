import type { PokemonTemplateSet } from '../../lib/types'

const calyrex: PokemonTemplateSet = {
  internalName: 'CALYREX',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'UNNERVE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'STOREDPOWER', 'DRAININGKISS', 'SUBSTITUTE'],
      justification:
        'Calyrex en Añil V4.13 es la forma base Psíquico/Planta con los seis stats en 80, y su receta ganadora es la acumulación: Paz Mental (+1 Ataque Especial y +1 Defensa Especial) convierte Poder Reserva en un golpe que crece sin límite según los niveles acumulados, y Beso Drenaje (50, STAB Hada) recupera el 75% del daño infligido, cerrando el ciclo de demora entre mejora, daño y curación. Sustituto protege la mejora de estados y de los golpes físicos que la Defensa 80 no tolera de entrada, y Restos financia el coste del clon turno a turno. Nerviosismo es la única habilidad de la especie y bloquea el fruto del rival, un detalle que favorece la partida larga pese a no aportar daño. Osada con 252 PS / 252 Defensa es el reparto de un muro que apuesta a más turnos: a mayor duración, más niveles de Poder Reserva acumulados.',
      alternatives: [
        {
          slot: 'move',
          value: 'LEECHSEED',
          note: 'Drenadoras castiga a los muros que cambian contra Poder Reserva, cediendo la segunda mejora de Paz Mental.',
          replaces: 'CALMMIND'
        },
        {
          slot: 'move',
          value: 'PSYCHIC',
          note: 'Psíquico (90, STAB) es la alternativa inmediata a Poder Reserva cuando la partida no permite turnos de acumulación.',
          replaces: 'STOREDPOWER'
        }
      ]
    }
  ]
}

export default calyrex