import type { PokemonTemplateSet } from '../../lib/types'

const victreebel: PokemonTemplateSet = {
  internalName: 'VICTREEBEL',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'viable',
      ability: 'CHLOROPHYLL',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'POWERWHIP', 'POISONJAB', 'SUCKERPUNCH'],
      justification:
        'Victreebel depende de sol para justificar una plantilla: con Clorofila su Velocidad 70 se duplica a 140 y supera a la mayoría del metajuego. Sobre esa base, Ataque 110 con Danza Espada y Latigazo, de 120 de potencia, forman una barrida real; Puño Veneno es el segundo STAB que además pega a las Hada; Sorpresa, con prioridad +1, remata a Pañuelo Elección y a usuarios de prioridad más rápidos. Naturaleza Firme: con Clorofila la Velocidad ya está resuelta mientras dure el sol, así que conviene maximizar potencia, y sin sol Victreebel es lento de todas formas. Vidasfera para forzar KOs tras Danza Espada. Es viable y no óptimo porque el set entero depende de un invocador de sol en el equipo y porque Planta/Veneno lo deja resistido por Acero, que solo Sorpresa golpea de forma neutra.',
      alternatives: [
        {
          slot: 'move',
          value: 'WEATHERBALL',
          note: 'Meteorobola se vuelve un ataque de tipo Fuego de 100 de potencia bajo sol y rompe a los Acero y Planta como Ferrothorn, Scizor o Skarmory que muran ambos STAB; es especial, así que conviene naturaleza Ingenua o Alocada y algo de inversión en At. Esp.',
          replaces: 'POISONJAB'
        },
        {
          slot: 'move',
          value: 'GROWTH',
          note: 'Desarrollo sube Ataque y At. Esp. dos niveles a la vez bajo sol, habilitando un set mixto que mantiene la amenaza de Meteorobola.',
          replaces: 'SWORDSDANCE'
        },
        {
          slot: 'move',
          value: 'SLEEPPOWDER',
          note: 'Somnífero abre la barrida durmiendo a un chequeo, a cambio de la prioridad de Sorpresa.',
          replaces: 'SUCKERPUNCH'
        }
      ]
    }
  ]
}

export default victreebel
