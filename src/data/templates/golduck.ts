import type { PokemonTemplateSet } from '../../lib/types'

const golduck: PokemonTemplateSet = {
  internalName: 'GOLDUCK',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'viable',
      ability: 'SWIFTSWIM',
      item: 'LIFEORB',
      nature: 'MODEST',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HYDROPUMP', 'ICEBEAM', 'PSYSHOCK', 'FLIPTURN'],
      justification:
        'Golduck necesita apoyo de lluvia para justificar una plantilla: con Nado Rápido su Velocidad 85 se duplica a 170 y supera a todo el metajuego. Sobre esa base, At. Esp. 95 con Vidasfera y el STAB doble Agua/Psíquico, resistido solo por Siniestro, Acero y el Psíquico rival, lo convierten en un rompemuros rápido. Hidrobomba es el golpe principal potenciado por la lluvia, Rayo Hielo cubre a Planta, Dragón y Tierra, y Psicocarga pega a los muros especiales por su Defensa física, castigando a Blissey o a portadores de Chaleco Asalto. Vuelco cede el turno con daño cuando la lluvia se agota o el matchup es malo. Naturaleza Modesta: con Nado Rápido la Velocidad ya está resuelta mientras dure el clima, así que conviene maximizar potencia. Es viable y no óptimo porque depende por completo de un invocador de lluvia en el equipo; sin él, la Velocidad 85 lo deja en un rango mediocre.',
      alternatives: [
        {
          slot: 'ability',
          value: 'BERSERK',
          note: 'Cólera habilita una variante autónoma y más voluminosa con Paz Mental o Maquinación y Restos: cada vez que un ataque lo baja de la mitad de PS gana un nivel de At. Esp. y no necesita lluvia, a cambio de la Velocidad explosiva de Nado Rápido.'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Gafas Elección dan el pico de potencia inmediato y Vuelco sigue permitiendo salir del bloqueo, cediendo la flexibilidad entre Psicocarga e Hidrobomba.'
        },
        {
          slot: 'move',
          value: 'FOCUSBLAST',
          note: 'A Todo Gas rompe a Ferrothorn, Tyranitar y Blissey que muran el STAB doble, al coste de un 70% de precisión.',
          replaces: 'PSYSHOCK'
        }
      ]
    }
  ]
}

export default golduck
