import type { PokemonTemplateSet } from '../../lib/types'

const persian: PokemonTemplateSet = {
  internalName: 'PERSIAN',
  templates: [
    {
      role: 'pivot',
      isPrimary: true,
      confidence: 'viable',
      ability: 'TECHNICIAN',
      item: 'HEAVYDUTYBOOTS',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FAKEOUT', 'UTURN', 'KNOCKOFF', 'TRIPLEAXEL'],
      justification:
        'Persian aprovecha Experto, que potencia un 50% los movimientos de 60 de potencia o menos. Su STAB Normal no sirve con esa habilidad, pero Sorpresa, que pasa de 40 a 60 y tiene prioridad +3, y Tajo Triple, de 20, 40 y 60 de potencia por golpe con cada impacto potenciado, sí lo hacen, y con Velocidad 115 y Ataque 105 Persian funciona como pivote ofensivo rápido. Sorpresa hace daño de chip garantizado al entrar, provoca retroceso y rompe leads con Banda Aguante o Robustez. Tajo Triple, potenciado por Experto en cada uno de sus tres golpes, alcanza una potencia efectiva muy alta, ignora Sustituto y golpea a Volador, Planta, Tierra y Dragón. Ida y Vuelta mantiene el momentum y Desarme quita objetos a los muros que intenten pararlo. Botas Gruesas porque un pivote de tipo puro Normal necesita entrar muchas veces sin pagar Trampa Rocas. Naturaleza Alegre para asegurar que su Velocidad 115 le permita entrar y pivotar con seguridad. Es viable y no óptimo porque su techo de daño sin objeto ofensivo es bajo y carece de un STAB utilizable.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera eleva el daño para que Tajo Triple e Ida y Vuelta consigan KOs, a cambio del retroceso sobre un cuerpo frágil de PS 75 y Def 60.'
        },
        {
          slot: 'move',
          value: 'PLAYROUGH',
          note: 'Carantoña ofrece un golpe único y fiable contra Lucha, Siniestro y Dragón sin el riesgo del 90% de precisión del multigolpe, cediendo el valor contra Sustituto y Banda Aguante.',
          replaces: 'TRIPLEAXEL'
        },
        {
          slot: 'move',
          value: 'TAUNT',
          note: 'Mofa gana el duelo de leads frente a colocadores de trampas y setup, a cambio del chip por prioridad de Sorpresa.',
          replaces: 'FAKEOUT'
        }
      ]
    }
  ]
}

export default persian
