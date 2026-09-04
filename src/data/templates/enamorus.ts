import type { PokemonTemplateSet } from '../../lib/types'

const enamorus: PokemonTemplateSet = {
  internalName: 'ENAMORUS',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'OVERCOAT',
      item: 'LEFTOVERS',
      nature: 'TIMID',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'MOONBLAST', 'EARTHPOWER', 'MYSTICALFIRE'],
      justification:
        'Enamorus concentra el perfil en el lado especial: Ataque Especial 135 y Velocidad 106 con Paz Mental de mejora. Funda bloquea los polvos y esporas de los leads de planta, el único problema de estado que un set de mejora no puede permitirse. Fuerza Lunar es el STAB Hada fiable con 30% de bajar el Ataque Especial rival; Tierra Viva cubre Acero, Veneno, Fuego y Eléctrico, que resisten Hada y Volador; Llama Embrujada pega a los Acero que resisten el STAB y les baja el Ataque Especial, minando a los muros especiales. Miedosa con 252 de Velocidad para situarse por delante del tramo 100-115 antes y después de la mejora, y Restos sostienen el ciclo de entrada y seteo. Gran Encanto queda descartado por depender del género rival; Respondón exige un set físico distinto.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera maximiza el pico de daño de Fuerza Lunar y Tierra Viva a cambio de desgaste por golpe, en un set más agresivo.'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Botas Gruesas anulan el daño doble de Trampa Rocas que sufre un tipo Volador, para equipos que no llevan retirada de trampas.'
        },
        {
          slot: 'ability',
          value: 'CONTRARY',
          note: 'Respondón invierte las mejoras: convierte a Paz Mental en una bajada de Ataque y Defensa Especial, por lo que exige el set físico de Fuerza Bruta.'
        },
        {
          slot: 'move',
          value: 'HURRICANE',
          note: 'Vendaval (110) da un STAB Volador de potencia alta con 30% de confundir, a cambio de la precisión 70 y de la cobertura de Tierra Viva.',
          replaces: 'EARTHPOWER'
        }
      ]
    },
    {
      role: 'mixed',
      isPrimary: false,
      confidence: 'viable',
      ability: 'CONTRARY',
      item: 'LEFTOVERS',
      nature: 'NAIVE',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SUPERPOWER', 'PLAYROUGH', 'EARTHPOWER', 'SLUDGEBOMB'],
      justification:
        'Variante mixta con Respondón ("invierte los cambios: bajan cuando les toca subir y suben cuando les toca bajar"): Fuerza Bruta, que normalmente baja Ataque y Defensa del usuario, pasa a subirlas un nivel en cada uso, convirtiéndose en una mejora física que además golpea a los Acero. Carantoña cubre el STAB Hada físico y baja el Ataque rival; Tierra Viva y Bomba Lodo explotan el Ataque Especial 135 para Acero y Veneno primero y Hada segundo. Ingenua conserva la Velocidad 106 sin sacrificar el lado especial. Es viable y no óptimo porque Fuerza Bruta deja al usuario con un Ataque base 115 sin invertir y sin la fiabilidad de precisión perfecta de Carantoña, frente a la limpieza especial de Paz Mental.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera cubre la menor inversión en Ataque con un 30% de daño extra en los cuatro movimientos.'
        },
        {
          slot: 'move',
          value: 'ZENHEADBUTT',
          note: 'Cabezazo Zen reemplaza la cobertura de Bomba Lodo por un golpe físico contra Veneno, a costa del lado Hada rival.',
          replaces: 'SLUDGEBOMB'
        }
      ]
    }
  ]
}

export default enamorus