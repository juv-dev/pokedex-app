import type { PokemonTemplateSet } from '../../lib/types'

const eelektross: PokemonTemplateSet = {
  internalName: 'EELEKTROSS',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LEVITATE',
      item: 'ASSAULTVEST',
      nature: 'MODEST',
      evs: [240, 0, 0, 252, 16, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['VOLTSWITCH', 'THUNDERBOLT', 'FLAMETHROWER', 'GIGADRAIN'],
      justification:
        'El nicho de Eelektross es único: Eléctrico puro con Levitación, es decir, cero debilidades. Sobre PS 85 / Def 80 / Def.Esp 80 y un Chaleco Asalto, eso lo convierte en un absorbedor especial y pivote que puede entrar a casi cualquier ataque neutro sin miedo. At.Esp. 105 con naturaleza Modesta le da pegada real: Voltiocambio cede el turno a un compañero manteniendo el momentum, Rayo es la STAB de máxima potencia, Lanzallamas castiga a Planta, Acero, Hielo y Bicho, y Gigadrenado pega a Tierra, Roca y Agua —los tipos que entrarían a frenarlo— y además le devuelve PS, alargando su vida detrás del Chaleco. Velocidad 50 es baja, pero en este rol no importa: mueve al final y entonces pivota. El reparto prioriza PS y At.Esp. para maximizar su función de esponja ofensiva.',
      alternatives: [
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Utilidad de retirar objetos y ataque físico desde Ataque 115, aunque se pierde la única recuperación del set.',
          replaces: 'GIGADRAIN'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Pivote que golpea a Psíquico y Planta y no queda anulado por inmunidades a Eléctrico.',
          replaces: 'VOLTSWITCH'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Variante de pivote lento con recuperación pasiva si se prescinde del Chaleco Asalto para incluir un movimiento de estado.'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'LEVITATE',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['COIL', 'WILDCHARGE', 'DRAINPUNCH', 'KNOCKOFF'],
      justification:
        'Wincon lento que explota el tipo perfecto de Levitación. Enrosque sube Ataque, Defensa y Precisión, así que con volumen (85/80/80) y sin debilidades puede armar varios turnos frente a rivales pasivos. Carga Salvaje es la STAB tras el aumento, Puño Drenaje cubre a Acero y Normal y le devuelve PS, y Golpe Bajo aporta utilidad de retirar objetos y cobertura contra Fantasma y Psíquico. Restos y Puño Drenaje sostienen el plan al no tener Enrosque efecto sobre la Velocidad; naturaleza Firme para el pico de daño. Es más lento y menos fiable que la variante de Chaleco Asalto, de ahí su confianza inferior.',
      alternatives: [
        {
          slot: 'move',
          value: 'CLOSECOMBAT',
          note: 'Más potencia de Lucha inmediata a cambio de bajar las defensas propias y perder el robo de vida.',
          replaces: 'DRAINPUNCH'
        }
      ]
    }
  ]
}

export default eelektross
