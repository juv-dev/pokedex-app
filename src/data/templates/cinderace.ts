import type { PokemonTemplateSet } from '../../lib/types'

const cinderace: PokemonTemplateSet = {
  internalName: 'CINDERACE',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LIBERO',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['PYROBALL', 'HIGHJUMPKICK', 'UTURN', 'SUCKERPUNCH'],
      justification:
        'Cinderace en Añil V4.13 suma Ataque 116 y Velocidad 119 a Líbero, la habilidad que le cambia el tipo al del movimiento antes de ejecutarlo: los cuatro ataques del set reciben STAB propio, algo que ningún otro Pokémon de su rango consigue. Balón Ígneo (120, STAB Fuego) es el golpe principal; Patada Salto Alta (130, STAB Lucha) destruye a los muros de tipo Normal y Acero; Golpe Bajo (70, prioridad +1, STAB Siniestro) remata a los rivales más rápidos sin depender del orden; e Ida y Vuelta (70, STAB Bicho) pivota cuando toca cambiar. Vidasfera multiplica todo por 1,3 y el cambio de tipo de Líbero además vuelve predecibles las coberturas defensivas rivales. Alegre con 252 At. / 252 Vel. es el reparto de barrido: la Velocidad 119 con naturaleza positiva supera a la práctica totalidad del formato y deja a Cinderace cerrando partidas.',
      alternatives: [
        {
          slot: 'move',
          value: 'SWORDSDANCE',
          note: 'Danza Espada convierte el set en un barredor de setup con Vidasfera, a costa de la utilidad de Ida y Vuelta.',
          replaces: 'UTURN'
        },
        {
          slot: 'ability',
          value: 'CAMORRISTA',
          note: 'Camorrista (+20% a patadas) potencia Patada Salto Alta y Patada Ígnea, pero deja a Balón Ígneo, Golpe Bajo e Ida y Vuelta sin STAB ni bonus.'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Botas Gruesas eliminan el 25% de Trampa Rocas al cambiar, la opción defensiva para equipos que pivotan mucho.'
        }
      ]
    },
    {
      role: 'pivot',
      isPrimary: false,
      confidence: 'viable',
      ability: 'LIBERO',
      item: 'HEAVYDUTYBOOTS',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['COURTCHANGE', 'PYROBALL', 'UTURN', 'HIGHJUMPKICK'],
      justification:
        'Variante de control de campo única en el formato: Cambio de Cancha intercambia los efectos de lado (Trampa Rocas, Púas, Pantallas, campos) con el rival, y como Botas Gruesas anulan su propia debilidad 2x a Roca, Cinderace puede cambiar de lado los peligros de entrada sin pagar nada. Balón Ígneo (STAB Fuego), Ida y Vuelta (STAB Bicho) y Patada Salto Alta (STAB Lucha) mantienen la presión ofensiva íntegra gracias a Líbero, que sigue dando STAB a todo el set. Es viable y no óptimo porque dedica una ranura a la utilidad de Cambio de Cancha y pierde el pico ofensivo del set con Vidasfera; a cambio, es la única respuesta real del juego a los equipos acumuladores de trampas, un rol que ningún otro Pokémon del formato cubre igual.',
      alternatives: [
        {
          slot: 'move',
          value: 'SUCKERPUNCH',
          note: 'Golpe Bajo añade prioridad de remate, cediendo la utilidad de Cambio de Cancha.',
          replaces: 'COURTCHANGE'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera recupera 30% de daño para el pivote, a cambio de volver a sufrir Trampa Rocas al cambiar.'
        }
      ]
    }
  ]
}

export default cinderace