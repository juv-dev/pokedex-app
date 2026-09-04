import type { PokemonTemplateSet } from '../../lib/types'

const rabsca: PokemonTemplateSet = {
  internalName: 'RABSCA',
  templates: [
    {
      role: 'trick-room-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SYNCHRONIZE',
      item: 'LEFTOVERS',
      nature: 'SASSY',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['TRICKROOM', 'REVIVALBLESSING', 'PSYCHIC', 'RECOVER'],
      justification:
        'Rabsca es un colocador de Espacio Raro natural: su Velocidad 45 y su Defensa Especial 100 lo convierten en uno de los mejores usuarios de Espacio Raro en Añil V4.13, con acceso a Recuperación propia para sostener el rol. La firma es Bendición Revividora, única de su línea, que revive a un aliado debilitado a mitad de PS y encaja perfecto en equipos de Espacio Raro donde el recambio es constante. Psíquico es el STAB para no quedar pasivo, y el IV de Velocidad a 0 refuerza la ventaja bajo Espacio Raro, pues los más lentos actúan primero. Sincronía castiga al rival que le inflige un estado. Naturaleza Grosera (Defensa Especial alta, Velocidad baja) y reparto en PS y Defensa Especial maximizan la resistencia del setter.',
      alternatives: [
        {
          slot: 'move',
          value: 'LIGHTSCREEN',
          note: 'Pantalla Luz añade protección especial para el equipo, reemplazando Psíquico si no precisa dañar directamente.'
        }
      ]
    }
  ]
}

export default rabsca
