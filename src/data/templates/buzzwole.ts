import type { PokemonTemplateSet } from '../../lib/types'

const buzzwole: PokemonTemplateSet = {
  internalName: 'BUZZWOLE',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'BEASTBOOST',
      item: 'ASSAULTVEST',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAINPUNCH', 'ICEPUNCH', 'HIGHHORSEPOWER', 'MEGAHORN'],
      justification:
        'El perfil 139/139/53 de Buzzwole es la definición de un muro físico con agujero especial: el Chaleco Asalto sube su Def. Esp. efectiva a ~213 (142 de stat sin inversión × 1.5) y lo convierte en un bloque de 139 Defensa con Ataque 139 y STAB Lucha. Puño Drenaje (75, STAB, cura la mitad del daño) es el motor de sostenibilidad del set: cada golpe en el muro rival devuelve la mitad del daño y el Chaleco no permite estados pasivos de curación, así que la curación por golpe es el sustituto del Restos. Puño Hielo (75) cubre Dragón, Tierra y Volador; Fuerza Equina (95, STAB Tierra) castiga Fuego, Veneno, Acero, Roca y Eléctrico; y Megacuerno (120, STAB Bicho) rompe a las Hadas que aguantan los puños. Firme: la Velocidad 79 base no gana carreras y el EV va a PS máx y Ataque máx para amplificar la curación del Puño Drenaje.',
      alternatives: [
        {
          slot: 'move',
          value: 'STONEEDGE',
          note: 'Roca Afilada (100) pega a Volador, Fuego y Bicho con precisión 80 pero sin STAB Tierra, cediendo la cobertura anti-Hada de Megacuerno.',
          replaces: 'MEGAHORN'
        },
        {
          slot: 'move',
          value: 'THUNDERPUNCH',
          note: 'Puño Trueno (75) cubre Agua y Volador con precisión total, cediendo el STAB Tierra de Fuerza Equina.',
          replaces: 'HIGHHORSEPOWER'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos es la recuperación pasiva para el set de set-up, perdiendo la Def. Esp. efectiva que define el rol bulky.',
          replaces: 'ASSAULTVEST'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'BEASTBOOST',
      item: 'LEFTOVERS',
      nature: 'CAREFUL',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BULKUP', 'DRAINPUNCH', 'ICEPUNCH', 'ROOST'],
      justification:
        'Variante de set-up viable: Corpulencia (+1 Ataque y +1 Defensa) trabaja junto con los 139 de Defensa base y convierte a Buzzwole en un atacante que a la vez endurece, y con +2 de Defensa acumulado el lado físico se vuelve imposible de romper. Puño Drenaje sigue siendo la curación por golpe, Puño Hielo la cobertura universal y Respiro añade la recuperación directa que el Chaleco no permitía. Cauta con EV en PS y Def. Esp.: el lado físico ya está resuelto con la base y el +1 acumulado, y el EV va al agujero de 53 para que Respiro alcance a sanar un golpe especial que de otro modo borra el set-up. Viable y no óptima porque el rol bulky con Chaleco no necesita arriesgar el turno del set-up, y el 53 de Def. Esp. no se cura rápido con Respiro contra un artillero especial que ya disparó.',
      alternatives: [
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Sustituto protege el set-up de estados y de un golpe crítico, cediendo la cobertura de Puño Hielo.',
          replaces: 'ICEPUNCH'
        },
        {
          slot: 'item',
          value: 'ASSAULTVEST',
          note: 'Chaleco Asalto en el set de Corpulencia sacrifica Respiro por la misma Def. Esp. efectiva del rol bulky: la curación queda solo en Puño Drenaje.',
          replaces: 'LEFTOVERS'
        }
      ]
    }
  ]
}

export default buzzwole