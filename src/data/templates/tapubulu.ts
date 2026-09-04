import type { PokemonTemplateSet } from '../../lib/types'

const tapubulu: PokemonTemplateSet = {
  internalName: 'TAPUBULU',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'GRASSYSURGE',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'HORNLEECH', 'CLOSECOMBAT', 'STONEEDGE'],
      justification:
        'El campo de hierba de Añil recupera PS al final del turno de los Pokémon en el suelo y Tapu Bulu lo crea al entrar: con Restos encima, cada turno bajo su propio campo suma 1/16 + 1/16 de su PS. El perfil 70/130/115/85/95/75 y su terquedad natural hacen del set-up su mejor carta: Danza Espada con el campo activo convierte su Ataque 130 en un doble multiplicador y Asta Drenaje (75, STAB, cura la mitad del daño) convierte cada golpe en recuperación neta. A Bocajarro (120, STAB Lucha) rompe a Acero y Roca, y Roca Afilada (100) cubre Volador, Fuego y Bicho. Firme con EV en PS y Ataque: la Velocidad 75 no va a ganar carreras, así que el PS máximo amplifica la recuperación por turno y la de Asta Drenaje.',
      alternatives: [
        {
          slot: 'move',
          value: 'WOODHAMMER',
          note: 'Mazazo (120, STAB) es el pico de daño contra los muros físicos, con retroceso que el campo y Asta Drenaje mitigan parcialmente.',
          replaces: 'HORNLEECH'
        },
        {
          slot: 'item',
          value: 'TERRAINEXTENDER',
          note: 'Cubresuelos alarga la recuperación de hierba de cinco a ocho turnos, reforzando el perfil defensivo a costa del 1/16 de Restos.',
          replaces: 'LEFTOVERS'
        },
        {
          slot: 'move',
          value: 'MEGAHORN',
          note: 'Megacuerno (120) pega 2x a las Hadas que aguantan a A Bocajarro, cediendo la cobertura de Roca Afilada.',
          replaces: 'STONEEDGE'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'GRASSYSURGE',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['WOODHAMMER', 'HORNLEECH', 'CLOSECOMBAT', 'STONEEDGE'],
      justification:
        'Variante de entrada inmediata viable: con Cinta Elección el Ataque 130 de Tapu Bulu (359 con Firme y EV) se multiplica por 1.5 y Mazazo (120, STAB) borra a los muros que Danza Espada tardaría dos turnos en romper, con el campo de hierba amortiguando el retroceso del primer golpe. Asta Drenaje mantiene la recuperación sin el set-up, A Bocajarro rompe Acero y Roca y Roca Afilada cubre a Volador y Fuego. No es óptima porque el 2x de Danza Espada con campo activo supera a la Cinta para el rol de romper enfrascado: la Cinta bloquea el cambio de movimiento y descarta la herramienta más fuerte del Pokémon, su propio campo de recuperación.',
      alternatives: [
        {
          slot: 'move',
          value: 'MEGAHORN',
          note: 'Megacuerno castiga a las Hadas que resisten a los STAB, cediendo Roca Afilada contra Fuego y Volador.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera da potencia sin restar flexibilidad de movimiento, con retroceso extra que el campo mitiga.',
          replaces: 'CHOICEBAND'
        }
      ]
    }
  ]
}

export default tapubulu