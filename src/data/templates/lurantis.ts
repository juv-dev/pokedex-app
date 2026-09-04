import type { PokemonTemplateSet } from '../../lib/types'

const lurantis: PokemonTemplateSet = {
  internalName: 'LURANTIS',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'CONTRARY',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SUPERPOWER', 'LEAFBLADE', 'KNOCKOFF', 'SYNTHESIS'],
      justification:
        'Lurantis es la rara criatura que convierte su debilidad en arma: con Respondón ("invierte los cambios en las estadísticas del usuario") Fuerza Bruta (120, STAB Lucha) no baja su Ataque sino que lo sube un nivel por cada uso, así que cada golpe que lanza la hace más fuerte en lugar de agotarla. Hoja Aguda (90, STAB Planta, alta propensión a crítico) da el STAB fiable sin romper la sinergia, Desarme elimina objetos y castiga cambios, y Fotosíntesis (cura la mitad de los PS) sostiene los turnos mientras el Ataque ya alto (105 de base, 252 EVs, Firme) suma niveles. La cobertura Lucha + Planta + Siniestro cubre el juego entero salvo los pocos que resisten los tres. Restos añaden la curación pasiva que falta entre Fotosíntesis. La Velocidad 45 es la cruz: está pensado para recibir y responder, no para correr, así que los EVs van a PS y Ataque.',
      alternatives: [
        {
          slot: 'move',
          value: 'FLOWERTRICK',
          note: 'Truco Floral (STAB Planta con golpe crítico siempre) convierte su golpe en imparable contra el lado físico, cediendo la utilidad de Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera multiplica el daño de cada golpe a cambio de mejorar menos la longevidad que Restos.'
        },
        {
          slot: 'move',
          value: 'ATRAPAMOSCAS',
          note: 'Atrapabicho golpea siempre súper efectivo contra los Bicho que castigan la debilidad de Planta de Lurantis, cediendo la utilidad de Desarme.',
          replaces: 'KNOCKOFF'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'ADAPTABILITY',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'LEAFBLADE', 'BRICKBREAK', 'KNOCKOFF'],
      justification:
        'Segundo set con Adaptable ("los movimientos del mismo tipo que el usuario se potencian") que convierte a Lurantis en un sweeper de Danza Espada: Hoja Aguda pasa a 90 x1,5 por Adaptable x1,5 por STAB (efectivo x2,25) y con Danza Espada al nivel 2 destruye el lado físico sin necesidad de la sinergia de Respondón. Demolición (75, STAB Lucha) derriba pantallas y cubre Acero/Normal/Roca; Desarme completa la cobertura Siniestro. Es "viable" y no "óptimo": sin Respondón pierde la ventaja competitiva que la hace única, y la situación de set-up (llegar a Danzar con 75/90/45 de físicas y Vel 45) es peor que la del golpe directo del set principal.',
      alternatives: [
        {
          slot: 'move',
          value: 'SUPERPOWER',
          note: 'Fuerza Bruta golpea mucho más fuerte que Demolición a cambio de bajar el Ataque — con Adaptable no hay Respondón que lo invierta, por eso queda como opción.',
          replaces: 'BRICKBREAK'
        }
      ]
    }
  ]
}

export default lurantis