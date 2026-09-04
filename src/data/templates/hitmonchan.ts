import type { PokemonTemplateSet } from '../../lib/types'

const hitmonchan: PokemonTemplateSet = {
  internalName: 'HITMONCHAN',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'IRONFIST',
      item: 'ASSAULTVEST',
      nature: 'ADAMANT',
      evs: [252, 148, 0, 0, 108, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAINPUNCH', 'MACHPUNCH', 'ICEPUNCH', 'KNOCKOFF'],
      justification:
        'Hitmonchan reparte PS 60 / Def 79 / Def. Esp. 110, y con Chaleco Asalto se convierte en un pivote especial sólido que además pega con Ataque 105. Puño Férreo sube un 20% todos los movimientos de puño, que son casi todo su repertorio ofensivo. Puño Drenaje es clave con Chaleco Asalto porque el objeto impide movimientos de estado y esta es su única forma de recuperar PS mientras devuelve daño; Ultrapuño da prioridad para compensar la Velocidad 76 y rematar amenazas rápidas debilitadas; Puño Hielo cubre a Volador, Planta, Dragón y Tierra; Desarme aporta utilidad quitando objetos aunque no reciba el bono de Puño Férreo. Firme y un reparto que maximiza PS y refuerza la Def. Esp. ya alta con el Chaleco, dejando Ataque suficiente para que los puños con el bono sigan doliendo. Es su mejor configuración: aúna longevidad especial, recuperación y prioridad en un mismo Pokémon.',
      alternatives: [
        {
          slot: 'move',
          value: 'RAPIDSPIN',
          note: 'Giro Rápido añade retirada de trampas a un equipo que lo necesite, cediendo la utilidad de Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'move',
          value: 'THUNDERPUNCH',
          note: 'Puño Trueno, también potenciado por Puño Férreo, cambia la cobertura hacia Agua y Volador en vez de la utilidad de Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Con Restos puede usar Corpulencia en el hueco de Desarme y jugar como atacante resistente con mejora, renunciando al volumen especial inmediato del Chaleco.'
        }
      ]
    }
  ]
}

export default hitmonchan
