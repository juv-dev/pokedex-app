import type { PokemonTemplateSet } from '../../lib/types'

const virizion: PokemonTemplateSet = {
  internalName: 'VIRIZION',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'JUSTIFIED',
      item: 'LEFTOVERS',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['CALMMIND', 'GIGADRAIN', 'AURASPHERE', 'SYNTHESIS'],
      justification:
        'Lo que separa a Virizion de Cobalion y Terrakion es su Def.Esp 129, que sostiene un plan de Paz Mental muy sólido: sube Ataque Especial y Def.Esp, y con ese lado especial de partida cada mejora lo vuelve casi intocable por ese flanco. Gigadrenado es la STAB de Planta con recuperación incorporada, Esfera Aural es la STAB de Lucha infalible para no depender de la precisión y Síntesis da recuperación fuerte para alargar el ciclo. Restos añade regeneración pasiva y Justiciero puede regalar un nivel de Ataque si entra contra un movimiento de tipo Siniestro. Miedosa con IV de Ataque a 0 para maximizar la Velocidad y reducir la confusión y el Juego Sucio, ya que el set es puramente especial.',
      alternatives: [
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Sustituto para bloquear estados y ganar lecturas contra los muros que intentan frenar el plan con Tóxico.',
          replaces: 'SYNTHESIS'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera para un pico de daño mayor renunciando a la regeneración pasiva de Restos.'
        },
        {
          slot: 'nature',
          value: 'MODEST',
          note: 'Modesta si la Velocidad de partida ya alcanza los objetivos del equipo y se prioriza potencia.'
        }
      ]
    },
    {
      role: 'sweeper-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'JUSTIFIED',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'CLOSECOMBAT', 'LEAFBLADE', 'STONEEDGE'],
      justification:
        'Lectura física: Danza Espada sobre Ataque 90 y Velocidad 108 aprovecha las resistencias de Planta/Lucha para encontrar el turno de mejora. A Bocajarro y Hoja Aguda son las STAB, con Hoja Aguda además propensa a crítico, y Roca Afilada cubre a Fuego, Volador y Hielo. Es viable y no óptima porque su Ataque base 90 es idéntico al de Cobalion y menor que el de Terrakion, así que su ventaja real sigue estando en el lado especial.',
      alternatives: [
        {
          slot: 'move',
          value: 'LEAFSTORM',
          note: 'Lluevehojas como golpe único de gran potencia si se opta por un set mixto sin Danza Espada.',
          replaces: 'SWORDSDANCE'
        }
      ]
    }
  ]
}

export default virizion
