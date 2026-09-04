import type { PokemonTemplateSet } from '../../lib/types'

const absol: PokemonTemplateSet = {
  internalName: 'ABSOL',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SUPERLUCK',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'SUCKERPUNCH', 'KNOCKOFF', 'PLAYROUGH'],
      justification:
        'Ataque base 130 sin evolución ni mega en Añil: Absol es un rompemuros frágil (65/60/60) que compensa con Danza Espada y prioridad. Danza Espada dobla el Ataque para que Golpe Bajo, con prioridad +1 y 70 de potencia mientras el rival prepara ataque, y Desarme, que además quita el objeto, limpien equipos ya mermados. Fuerza Lunar es la cobertura contra Lucha, Dragón y Siniestro, que resisten sus golpes e ignoran a un tipo Siniestro puro. Afortunado sube un nivel la probabilidad de crítico, valioso cuando Absol todavía no tiene activa la subida de Danza Espada. Vidasfera porque no hay mega Absol en Añil y necesita ese 30% extra para cerrar cálculos de KO. Firme sobre Alegre porque su Velocidad 75 no le alcanza para barrer y su plan depende de la prioridad de Golpe Bajo.',
      alternatives: [
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Alegre roza a los tipos base 70-75 y a algún usuario de Pañuelo Elección, a cambio de potencia en Golpe Bajo.'
        },
        {
          slot: 'move',
          value: 'PSYCHOCUT',
          note: 'Corte Psíquico pega a Lucha y Veneno con 100 de precisión y suele ser crítico, frente al 90 de Fuerza Lunar.',
          replaces: 'PLAYROUGH'
        },
        {
          slot: 'move',
          value: 'NIGHTSLASH',
          note: 'Tajo Umbrío suele ser crítico y con Afortunado la tasa es alta, a cambio de la utilidad de quitar objeto de Desarme.',
          replaces: 'KNOCKOFF'
        }
      ]
    }
  ]
}

export default absol
