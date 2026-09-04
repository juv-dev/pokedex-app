import type { PokemonTemplateSet } from '../../lib/types'

const mienshao: PokemonTemplateSet = {
  internalName: 'MIENSHAO',
  templates: [
    {
      role: 'pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'REGENERATOR',
      item: 'HEAVYDUTYBOOTS',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HIGHJUMPKICK', 'KNOCKOFF', 'UTURN', 'POISONJAB'],
      justification:
        'Ataque 125 y Velocidad 105 con un físico endeble (65/60/60) definen a un pivote ofensivo frágil que necesita entrar y salir sin pagar el desgaste. Regeneración resuelve justo eso: recupera un tercio de los PS máximos en cada cambio, lo que compensa el daño de entrada por trampas y, sobre todo, el riesgo de Patada Salto Alta, cuyo fallo cuesta la mitad de los PS del usuario. Patada Salto Alta es la STAB principal por potencia (130); Ida y Vuelta mantiene el momentum y activa la habilidad de forma voluntaria; Desarme quita el objeto rival y pega a los tipos Fantasma y Psíquico que frenan el Lucha; Puya Nociva castiga a las Hadas. Botas Gruesas para que el ciclo de entradas no se coma su vida con el peligro de entrada. Alegre asegura superar a la base 100.',
      alternatives: [
        {
          slot: 'move',
          value: 'CLOSECOMBAT',
          note: 'STAB fiable de 120 sin riesgo de daño por fallo, a costa de bajar la Defensa y Def.Esp del usuario.',
          replaces: 'HIGHJUMPKICK'
        },
        {
          slot: 'move',
          value: 'SWORDSDANCE',
          note: 'Convierte el pivote en amenaza de mejora si el equipo prefiere presión ofensiva a control de momentum.',
          replaces: 'POISONJAB'
        },
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Pañuelo para funcionar como revenge killer puro cuando el equipo ya tiene otro pivote de momentum.'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'RECKLESS',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HIGHJUMPKICK', 'KNOCKOFF', 'POISONJAB', 'STONEEDGE'],
      justification:
        'Lectura alternativa que renuncia al ciclo de pivoteo para maximizar el daño puntual. Audaz sube un 20% la potencia de los movimientos que también dañan al usuario, y Patada Salto Alta cuenta como tal por su daño de retroceso al fallar, así que pasa a golpear como un ataque de 156 de potencia base con STAB. Vidasfera añade otro 20% a todo el set. Desarme y Puya Nociva cubren Fantasma, Psíquico y Hada; Roca Afilada castiga a los tipos Volador que esquivan el Lucha. Es una opción de tier más bajo porque sin Regeneración el retroceso de Vidasfera y el riesgo de Patada Salto Alta acortan mucho su vida útil.',
      alternatives: [
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Recupera algo de utilidad de pivote sacrificando la cobertura de Roca contra los Volador.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'move',
          value: 'TRIPLEAXEL',
          note: 'Cobertura de Hielo multigolpe contra los tipos Tierra y Dragón, útil si Roca Afilada no cierra los cálculos.',
          replaces: 'STONEEDGE'
        }
      ]
    }
  ]
}

export default mienshao
