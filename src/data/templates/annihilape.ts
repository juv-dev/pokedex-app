import type { PokemonTemplateSet } from '../../lib/types'

const annihilape: PokemonTemplateSet = {
  internalName: 'ANNIHILAPE',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'ACOMETIDA',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['RAGEFIST', 'CLOSECOMBAT', 'DRAINPUNCH', 'STONEEDGE'],
      justification:
        'Annihilape convierte el acceso a Puño Furia, que suma potencia cada vez que es alcanzado, en un rompemuros constante. Con el Ataque 115 y la explosión de Acometida (+50% de Velocidad y +20% de Ataque el primer turno que sale a combatir), puede entrar, castigar y retirarse con momentum antes de perder el boost. A Bocajarro es el golpe de lucha de máxima potencia, Puño Drenaje da sustento, y Roca Afilada cubre a Volador y Fuego. El perfil físico es sólido (Ataque 115, PS 110, Def 80, Def. Esp. 90), y Acometida es la habilidad clave: nadie más en el rango combina ese impulso de velocidad con una STAB de lucha de alta potencia. Vidasfera añade daño puro, y la naturaleza Firme maximiza el daño físico del set.',
      alternatives: [
        {
          slot: 'ability',
          value: 'DEFIANT',
          note: 'Competitivo dobla el Ataque cuando el rival baja una característica, cediendo el boost temporario de Acometida por uno condicional.'
        },
        {
          slot: 'item',
          value: 'ASSAULTVEST',
          note: 'Refuerza la Defensa Especial 90 para pivotar a ambos lados del espectro, sin la recuperación de Puño Drenaje como prioridad.'
        },
        {
          slot: 'move',
          value: 'BULKUP',
          note: 'Corpulencia sube Ataque y Defensa, pivotando del rompemuros de un solo turno a un sweep de medio plazo.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Pico de daño inmediato para Puño Furia y A Bocajarro, a costa de la flexibilidad del set suelto.'
        }
      ]
    }
  ]
}

export default annihilape