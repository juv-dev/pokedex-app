import type { PokemonTemplateSet } from '../../lib/types'

const ironvaliant: PokemonTemplateSet = {
  internalName: 'IRONVALIANT',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'QUARKDRIVE',
      item: 'BOOSTERENERGY',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'CLOSECOMBAT', 'KNOCKOFF', 'SPIRITBREAK'],
      justification:
        'Iron Valiant tiene Ataque 130 y Velocidad 116, con un Ataque Especial 120 que queda como secundario respecto a la vía física. Carga Cuark con Energía Potenciadora garantiza +1 al Ataque, y Danza Espada agrega +2 más: sin depender de campo eléctrico externo puede alcanzar un Ataque muy alto en uno o dos turnos. A Bocajarro (120, STAB Lucha) rompe muros pero baja sus defensas; Desarme quita el objeto y castiga a los cambios; Quebrantaanimos (75, STAB Hada) cubre a Siniestro y Dragón y además baja el At. Esp. del rival. La naturaleza Alegre y el reparto 252 At / 252 Ve. maximizan la salida y aseguran que la Velocidad 116 supere a la franja más rápida; su Defensa 90 acepta un golpe neutral para dar el turno de setup.',
      alternatives: [
        {
          slot: 'move',
          value: 'LEAFBLADE',
          note: 'Hoja Aguda da cobertura contra Agua, Tierra y Roca a cambio de la reducción de At. Esp. y el chequeo a Hada de Quebrantaanimos.',
          replaces: 'SPIRITBREAK'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos dan longevidad para un Iron Valiant que pivotea varias veces, renunciando al impulso instantáneo de la Energía Potenciadora.'
        }
      ]
    }
  ]
}

export default ironvaliant
