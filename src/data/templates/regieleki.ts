import type { PokemonTemplateSet } from '../../lib/types'

const regieleki: PokemonTemplateSet = {
  internalName: 'REGIELEKI',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TRANSISTOR',
      item: 'TERRAINEXTENDER',
      nature: 'MODEST',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['ELECTRICTERRAIN', 'RISINGVOLTAGE', 'THUNDERBOLT', 'VOLTSWITCH'],
      justification:
        'Regieleki tiene los 200 de Velocidad base más altos de Añil V4.13: el siguiente es Ninjask con 160, así que incluso Modesta sin naturaleza de Velocidad (494 efectivos) supera a todo el metajuego sin potenciar y la naturaleza puede invertirse en daño. Transistor potencia sus movimientos Eléctricos un 30% y el set es autosuficiente: Campo Eléctrico con Cubresuelos prolonga el terreno a 8 turnos, y dentro de él Alto Voltaje (70) dobla a 140 antes de aplicar el multiplicador de la habilidad, un STAB que supera con holgura a Rayo (90 por 1,3). Rayo queda como alternativa fiable fuera del terreno, y Voltiocambio permite ceder el turno con daño en los pocos rivales que resisten Eléctrico o que tienen acceso a prioridad. El reparto 252 Ataque Especial / 252 Velocidad con 4 en PS maximiza el golpe; las defensas 80/50/50 no permiten tomar golpes, pero la Velocidad 494 hace que casi nunca sean necesarias.',
      alternatives: [
        {
          slot: 'nature',
          value: 'TIMID',
          note: 'Miedosa sube a 543 efectivos y asegura el duelo contra otros Regieleki con naturaleza de Velocidad, a costa de pico de daño.'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera suma un 30% a cada golpe sin depender del terreno, para equipos que ya aportan Campo Eléctrico con otro Pokémon.'
        },
        {
          slot: 'move',
          value: 'THUNDERCAGE',
          note: 'Electrojaula (80, ata) castiga a los cambios con daño residual y encierra al rival, cediendo la fiabilidad de Rayo.',
          replaces: 'THUNDERBOLT'
        }
      ]
    },
    {
      role: 'screens-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'TRANSISTOR',
      item: 'LIGHTCLAY',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['LIGHTSCREEN', 'REFLECT', 'ELECTRICTERRAIN', 'VOLTSWITCH'],
      justification:
        'Rodaje de apoyo que usa los 200 de Velocidad base como garantía: Pantalla Luz y Reflejo se instalan antes de que actúe cualquier rival, Refleluz prolonga ambas pantallas, Campo Eléctrico además potencia los ataques Eléctricos del equipo y Voltiocambio cede el turno con daño al compañero de sweep. Miedosa lleva la Velocidad a 543 efectivos, el máximo absoluto del juego, y supera incluso a otro Regieleki sin naturaleza de Velocidad. Transistor mantiene el castigo de Voltiocambio relevante. Es viable como soporte de apertura de equipos ofensivos que necesitan mitigar el daño de los primeros turnos, pero no óptimo porque renuncia al pico ofensivo de Alto Voltaje bajo el terreno que el propio set coloca.',
      alternatives: [
        {
          slot: 'move',
          value: 'RISINGVOLTAGE',
          note: 'Alto Voltaje da al rodaje un golpe fuerte bajo su propio terreno, cediendo la segunda pantalla.',
          replaces: 'REFLECT'
        }
      ]
    }
  ]
}

export default regieleki