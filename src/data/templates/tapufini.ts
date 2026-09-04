import type { PokemonTemplateSet } from '../../lib/types'

const tapufini: PokemonTemplateSet = {
  internalName: 'TAPUFINI',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MISTYSURGE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HYDROPUMP', 'MOONBLAST', 'NATURESMADNESS', 'DEFOG'],
      justification:
        'El campo de niebla de Añil impide que los Pokémon en el suelo reciban cambios de estado, y Tapu Fini lo crea al entrar: su papel no es ofender sino anular para el equipo el paraíso de parálisis, quemaduras y venenos que otros pivotes ceden. La sutileza del set está en el STAB de agua: Escaldar no puede quemar a un rival en el suelo mientras el campo propio siga activo, así que Hidrobomba (110) es el golpe real que Fini puede dar en el turno libre. Fuerza Lunar es el STAB Hada fiable (95, sin errar), Furia Natural (90 de precisión, fija el PS rival a la mitad) convierte al muro defensivo en una máquina de desgaste que no necesita inversión ofensiva, y Despejar retira Trampa Rocas y las pantallas para que el equipo entre limpio en cada vuelta. Osada con EV en PS y Defensa: 130 de Def. Esp. base no necesita inversión y el muro de 70/115/130 se sostiene solo.',
      alternatives: [
        {
          slot: 'move',
          value: 'SCALD',
          note: 'Escaldar (80) es el hidrocañón de precisión total: baja el pico de daño a cambio de no errar nunca, asumiendo que la quemadura no aplicará contra rivales en el suelo.',
          replaces: 'HYDROPUMP'
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme arranca la Cinta, el Restos o el Espray rival y desgasta objetos, cediendo el corte de Furia Natural.',
          replaces: 'NATURESMADNESS'
        },
        {
          slot: 'move',
          value: 'HAZE',
          note: 'Niebla borra los aumentos rivales sin precisiones finas, clave contra set-up físicos que Fini aguanta en el suelo.',
          replaces: 'NATURESMADNESS'
        },
        {
          slot: 'move',
          value: 'ICYWIND',
          note: 'Viento Hielo mengua la Velocidad rival y le da a Fini control de ritmo, cediendo el corte de Furia Natural.',
          replaces: 'NATURESMADNESS'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'MISTYSURGE',
      item: 'MISTYSEED',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'MOONBLAST', 'HYDROPUMP', 'ICYWIND'],
      justification:
        'Variante ofensiva viable gracias a una sinergia doble de entrada: Semilla Bruma sube la Def. Esp. un nivel nada más entrar —el campo de niebla ya está activo por su habilidad— y Paz Mental añade otro +1 de At. Esp. y Def. Esp. al turno siguiente. Con 130 de Def. Esp. base, dos niveles la dejan por encima del rango de los artilleros especiales, y Fuerza Lunar + Hidrobomba golpean con STAB 95/110 sin depender de Furia Natural. Viento Hielo mantiene el control de velocidad del pivote original. No es óptima porque el papel defensivo le juega mejor al equipo: el propio campo que la protege también bloquea la quemadura de sus rivales, así que la niebla no le quita presión al juego defensivo que la sostiene.',
      alternatives: [
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Sustituto aprovecha el +1 de Def. Esp. de Semilla Bruma para acumular a cubierto, cediendo el control de velocidad.',
          replaces: 'ICYWIND'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos es la recuperación de largo plazo si el equipo prioriza la consistencia del set-up sobre el pico inicial de Semilla Bruma.',
          replaces: 'MISTYSEED'
        }
      ]
    }
  ]
}

export default tapufini