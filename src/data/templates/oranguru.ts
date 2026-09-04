import type { PokemonTemplateSet } from '../../lib/types'

const oranguru: PokemonTemplateSet = {
  internalName: 'ORANGURU',
  templates: [
    {
      role: 'trick-room-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'INNERFOCUS',
      item: 'MENTALHERB',
      nature: 'QUIET',
      evs: [252, 0, 4, 252, 0, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['TRICKROOM', 'PSYCHIC', 'DAZZLINGGLEAM', 'KNOCKOFF'],
      justification:
        'El reparto 90/80/110 con Defensa Especial 110 lo convierte en un colocador de Espacio Raro fiable: entra ante presión especial, aguanta y activa Espacio Raro (prioridad -7) antes de que el cambio rival se resuelva. Fuerza Mental evita el retroceso y la intimidación, los dos enemigos de un colocador que necesita su turno intacto, y la Hierba Mental neutraliza una vez Mofa o un movimiento de bloqueo equivalentes, el recurso clásico contra colocadores. Naturaleza Mansa con IV de Velocidad 0 minimiza la Velocidad para que Oranguru actúe de los primeros dentro de su propio Espacio Raro. Psíquico es el STAB, Brillo Mágico cubre a los Siniestro, inmunes a Psíquico, y Desarme retira objetos; el Ataque Especial 90 con la subida de Mansa le da presencia ofensiva real dentro de la sala. No hay rol de apoyo viable mejor: carece de Aromaterapia o Cascabel Cura (nada de clérigo) y su única recuperación es Descanso, que compite directamente con el reloj de Espacio Raro, por lo que la longevidad se resuelve por volumen y objeto.',
      alternatives: [
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos dan recuperación pasiva turno a turno, a cambio de perder la protección contra Mofa y bloqueos.'
        },
        {
          slot: 'move',
          value: 'FOCUSBLAST',
          note: 'Onda Certera (120) golpea a Acero y Siniestro con más fuerza que Brillo Mágico, pero su precisión es 70.',
          replaces: 'DAZZLINGGLEAM'
        },
        {
          slot: 'move',
          value: 'FOULPLAY',
          note: 'Juego Sucio usa el Ataque del rival, ideal contra muros físicos, cediendo la utilidad de Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'move',
          value: 'YAWN',
          note: 'Bostezo fuerza cambios y duerme al que se queda: presión clásica de un colocador de Espacio Raro, a cambio de Desarme.',
          replaces: 'KNOCKOFF'
        }
      ]
    }
  ]
}

export default oranguru