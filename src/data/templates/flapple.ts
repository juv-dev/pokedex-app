import type { PokemonTemplateSet } from '../../lib/types'

const flapple: PokemonTemplateSet = {
  internalName: 'FLAPPLE',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'HUSTLE',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONDANCE', 'GRAVAPPLE', 'OUTRAGE', 'POISONJAB'],
      justification:
        'Flapple es en Añil V4.13 un setup sweeper de manual: Entusiasmo eleva su Ataque 110 un 50% adicional a cambio de un 20% de precisión, y Danza Dragón sube Ataque y Velocidad a la vez; tras un turno de preparación, Fuerza G (80, STAB Planta, baja la Defensa rival) y Enfado (120, STAB Dragón) salen con un Ataque efectivo altísimo. La Velocidad 70 con Alegre y 252 EV supera a casi todo el tier tras el +1, y la cobertura Planta/Dragón/Veneno cierra el círculo: Puya Nociva es imprescindible porque los Hada son inmunes al Dragón y resisten Planta. Vidasfera potencia los tres golpes ofensivos. Es el set óptimo porque no existe otra configuración que explote a la vez el Ataque 110, Entusiasmo y Danza Dragón: cualquier variante sin el baile queda por debajo en potencia o en velocidad.',
      alternatives: [
        {
          slot: 'item',
          value: 'LUMBERRY',
          note: 'Baya Ziuela cura la confusión del Enfado y permite quedarse limpiando, a costa del pico de daño de Vidasfera.'
        },
        {
          slot: 'move',
          value: 'EARTHQUAKE',
          note: 'Terremoto rompe a los Acero como Ferrothorn que resisten la doble STAB, cediendo la cobertura contra Hada.',
          replaces: 'POISONJAB'
        },
        {
          slot: 'move',
          value: 'SUCKERPUNCH',
          note: 'Golpe Bajo (prioridad +1) remata sin depender del orden de turnos ni quedar bloqueado por el Enfado, cediendo el STAB Dragón potente.',
          replaces: 'OUTRAGE'
        }
      ]
    }
  ]
}

export default flapple