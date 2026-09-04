import type { PokemonTemplateSet } from '../../lib/types'

const volcanion: PokemonTemplateSet = {
  internalName: 'VOLCANION',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'WATERABSORB',
      item: 'ASSAULTVEST',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['STEAMERUPTION', 'FLAMETHROWER', 'EARTHPOWER', 'SLUDGEBOMB'],
      justification:
        'Volumen 100/120/130 con At.Esp 130: un atacante especial que aguanta de sobra para atacar varias veces por partida. El Chaleco Asalto sube la Def.Esp ya alta y lo vuelve un pivote especial muy difícil de romper, y Absorbe Agua le da inmunidad total al agua con recuperación de un cuarto de los PS, lo que le regala cambios seguros frente a tipos Agua. Erupción de Vapor es el STAB de Agua de 110 con 30% de quemar; Lanzallamas es la segunda STAB; Tierra Viva castiga a los Acero y Fuego que resisten ambas; Bomba Lodo pega a Hada y Planta. El tipo Fuego-Agua solo tiene dos debilidades (Eléctrico y Tierra) y muchas resistencias. Modesta porque su Velocidad base de 80 no llega a ser relevante. El Chaleco prohíbe estados, así que el set es ofensivo por diseño.',
      alternatives: [
        {
          slot: 'ability',
          value: 'FLASHFIRE',
          note: 'Inmunidad a Fuego con potenciación de los propios ataques de fuego en vez de la inmunidad al agua, según lo que el equipo necesite absorber.'
        },
        {
          slot: 'move',
          value: 'FIREBLAST',
          note: 'Más potencia que Lanzallamas para turnos en que hace falta el máximo daño, a cambio de precisión.',
          replaces: 'FLAMETHROWER'
        }
      ]
    },
    {
      role: 'defensive-pivot',
      isPrimary: false,
      confidence: 'viable',
      ability: 'WATERABSORB',
      item: 'HEAVYDUTYBOOTS',
      nature: 'BOLD',
      evs: [252, 0, 172, 84, 0, 0],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['STEAMERUPTION', 'FLAMETHROWER', 'DEFOG', 'WILLOWISP'],
      justification:
        'La misma base defensiva puesta al servicio de utilidad. El tipo Fuego-Agua con 100/120/130 y Absorbe Agua le permite entrar a muchas amenazas, y desde ahí Defensa limpia las trampas del propio campo mientras Fuego Fatuo arruina a los atacantes físicos. Erupción de Vapor y Lanzallamas mantienen una amenaza ofensiva constante para no ser pasivo. Botas Gruesas porque, sin recuperación fiable propia, no puede permitirse el desgaste de Trampa Rocas cada entrada. Es viable y no óptimo precisamente por esa ausencia de recuperación instantánea, que limita cuántas veces puede repetir el ciclo.',
      alternatives: [
        {
          slot: 'move',
          value: 'HAZE',
          note: 'Anula los cambios de estadísticas de un setup sweeper que intente aprovechar a Volcanion como turno de instalación.',
          replaces: 'WILLOWISP'
        }
      ]
    }
  ]
}

export default volcanion
