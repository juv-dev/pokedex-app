import type { PokemonTemplateSet } from '../../lib/types'

const aromatisse: PokemonTemplateSet = {
  internalName: 'AROMATISSE',
  templates: [
    {
      role: 'trick-room-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'AROMAVEIL',
      item: 'LEFTOVERS',
      nature: 'QUIET',
      evs: [252, 0, 4, 252, 0, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['TRICKROOM', 'MOONBLAST', 'PSYCHIC', 'DRAININGKISS'],
      justification:
        'Hada puro con PS 101 / Def 72 / Def.Esp 89 / At. Esp. 99 / Velocidad 29. Velo Aroma (habilidad oculta) protege al usuario y a sus aliados de Mofa, Anticura, Anulación y Cuerpo Maldito: nadie saca a Aromatisse de la colocación de Espacio Raro con Mofa. Con Velocidad 29, naturaleza Mansa y 0 IV de Velocidad, bajo Espacio Raro mueve primero contra casi todo el tier. Fuerza Lunar es el STAB de 95 con posible -1 At. Esp., Psíquico da cobertura, y Beso Drenaje recupera 3/4 del daño hecho para sostener las vueltas de Espacio Raro. Restos para longevidad mientras coloca el campo.',
      alternatives: [
        {
          slot: 'move',
          value: 'CALMMIND',
          note: 'Win condition fuera de Espacio Raro si preferís un set de asalto lento sin depender del campo.',
          replaces: 'DRAININGKISS'
        },
        {
          slot: 'move',
          value: 'DAZZLINGGLEAM',
          note: 'STAB Hada secundario que no falla, a cambio de la cobertura de Psíquico.',
          replaces: 'PSYCHIC'
        },
        {
          slot: 'move',
          value: 'HEALPULSE',
          note: 'Apoyo de cura directo a un compañero clave, a cambio de cobertura ofensiva.',
          replaces: 'PSYCHIC'
        },
        {
          slot: 'item',
          value: 'SITRUSBERRY',
          note: 'Pico de cura puntual si el equipo prioriza sobrevivir al primer golpe antes de colocar el campo.'
        }
      ]
    }
  ]
}

export default aromatisse
