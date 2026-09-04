import type { PokemonTemplateSet } from '../../lib/types'

const tapukoko: PokemonTemplateSet = {
  internalName: 'TAPUKOKO',
  templates: [
    {
      role: 'pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'ELECTRICSURGE',
      item: 'HEAVYDUTYBOOTS',
      nature: 'NAIVE',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['UTURN', 'BRAVEBIRD', 'THUNDERBOLT', 'ROOST'],
      justification:
        'El campo eléctrico que crea Electrogénesis al entrar es el valor del set: protege de estados a los aliados en el suelo, y Tapu Koko lo explota con un STAB especial fiable. Rayo (90, precisión perfecta con 30% de parálisis) cubre el lado especial aprovechando el At. Esp. 95, y se complementa con Pájaro Osado (120, STAB en cobertura Volador) en el lado físico para castigar a Planta, Lucha y Bicho. El perfil 70/115/85/95/75/130 hace que la Velocidad 130 mande: naturaleza Ingenua con EV en Ataque y Velocidad reparte entre el golpe físico y el especial sin perder el orden de turnos. Ida y Vuelta mantiene el momentum y Respiro cura el retroceso de Pájaro Osado. Botas Gruesas porque un pivote rápido que entra y sale no puede pagar Trampa Rocas en cada reentrada.',
      alternatives: [
        {
          slot: 'move',
          value: 'WILDCHARGE',
          note: 'Voltio Cruel (90) es el STAB físico fiable contra rivales voladores o con Levitación que esquivarían Rayo, con retroceso a cambio.',
          replaces: 'THUNDERBOLT'
        },
        {
          slot: 'move',
          value: 'DEFOG',
          note: 'Despejar convierte a Tapu Koko en el retirador de trampas del equipo, cediendo la recuperación de Respiro.',
          replaces: 'ROOST'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera sube ambos lados ofensivos un 30% y el campo anula el sueño rival, pero acumula retroceso junto al de Pájaro Osado.',
          replaces: 'HEAVYDUTYBOOTS'
        },
        {
          slot: 'move',
          value: 'VOLTSWITCH',
          note: 'Voltiocambio mantiene el pivote por el lado especial cuando el equipo necesita conservar a Tapu Koko, cediendo la potencia de Rayo.',
          replaces: 'THUNDERBOLT'
        }
      ]
    },
    {
      role: 'screens-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'ELECTRICSURGE',
      item: 'LIGHTCLAY',
      nature: 'JOLLY',
      evs: [252, 0, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['LIGHTSCREEN', 'REFLECT', 'TAUNT', 'UTURN'],
      justification:
        'Variante de apoyo viable: la Velocidad 130 de Tapu Koko lo convierte en uno de los colocadores de pantallas más rápidos, y Refleluz alarga Pantalla de Luz y Reflejo. Mofa (bloquea los movimientos de estado rivales) gana la carrera de leads: un Tapu Koko veloz puede frenar Trampa Rocas, set-up y recuperación antes de colocar la primera pantalla, y el campo eléctrico mantiene a sus aliados en el suelo a salvo del sueño durante el despliegue. Ida y Vuelta cede el turno a un compañero sin perder el momentum. Es viable y no óptima porque invierte el Ataque 115 en un rol pasivo: el set de pivote ofensivo aprovecha mejor el mismo perfil y no pierde presencia ofensiva.',
      alternatives: [
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Onda Trueno mengua a los barredores rivales y complementa las pantallas, cediendo el bloqueo de Mofa.',
          replaces: 'TAUNT'
        },
        {
          slot: 'move',
          value: 'NATURESMADNESS',
          note: 'Furia Natural fija el PS rival a la mitad y castiga a los muros que intenten quedarse bajo pantallas, a cambio de Ida y Vuelta.',
          replaces: 'UTURN'
        }
      ]
    }
  ]
}

export default tapukoko