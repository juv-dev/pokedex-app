import type { PokemonTemplateSet } from '../../lib/types'

const passimian: PokemonTemplateSet = {
  internalName: 'PASSIMIAN',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'DEFIANT',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CLOSECOMBAT', 'KNOCKOFF', 'GUNKSHOT', 'EARTHQUAKE'],
      justification:
        'Ataque 120 con PS 100 y Defensa 90 sobre Velocidad 80: rompemuros, no barredor, y la Cinta Elección con Firme le da el pico de daño que exige el rol. Competitivo sube el Ataque dos niveles cuando el rival le reduce una característica, de modo que una entrada de Intimidación (común en el meta, por ejemplo Wyrdeer) convierte a Passimian en un golpeador +2 sin gastar turno. A Bocajarro es el STAB Lucha de 120; Desarme retira objetos y castiga a los Psíquico y Fantasma; Lanzamugre (120 con precisión 90) es la respuesta a las Hada que resisten Lucha y el golpe limpio a Volador; Terremoto cubre a Veneno (que resiste Lucha), Fuego y Eléctrico. Reparto en PS y Ataque para aguantar los intercambios de un rompedor lento; los cuatro huecos son ataques con objetivo claro porque la Cinta bloquea los movimientos de mejora.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera permite alternar entre los cuatro ataques y sube todo un 30%, cediendo el 1,5 fijo de la Cinta.'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Ida y Vuelta conserva el momentum tras romper un muro, a cambio de la cobertura de Terremoto.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'ability',
          value: 'RECEIVER',
          note: 'Receptor copia la habilidad de un aliado debilitado (por ejemplo Agallas o Experto) en combates de dobles, cediendo el castigo de Competitivo.'
        }
      ]
    },
    {
      role: 'bulky-attacker',
      isPrimary: false,
      confidence: 'viable',
      ability: 'DEFIANT',
      item: 'ASSAULTVEST',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAINPUNCH', 'KNOCKOFF', 'GUNKSHOT', 'EARTHQUAKE'],
      justification:
        'Variante de resistencia: el Chaleco Asalto refuerza la Defensa Especial (60 base, el punto débil del reparto) y Puño Drenaje recupera la mitad del daño infligido, lo que convierte a Passimian en un atacante que se sostiene varios intercambios sin depender de recuperación externa. PS 100 y Defensa 90 cubren el lado físico y Competitivo mantiene el castigo +2 contra Intimidación. Desarme, Lanzamugre y Terremoto repiten la cobertura del set principal; el Chaleco impide movimientos de estado, por eso los cuatro huecos son ataques. Es viable y no óptimo porque renuncia al pico de la Cinta y Puño Drenaje (75) baja la producción de daño frente a A Bocajarro.',
      alternatives: [
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Con Restos se puede incorporar Corpulencia o Mofa, cediendo el refuerzo de Defensa Especial del Chaleco.',
          replaces: 'ASSAULTVEST'
        },
        {
          slot: 'move',
          value: 'CLOSECOMBAT',
          note: 'A Bocajarro devuelve el pico de daño a costa de la recuperación de Puño Drenaje.',
          replaces: 'DRAINPUNCH'
        }
      ]
    }
  ]
}

export default passimian