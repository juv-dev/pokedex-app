import type { PokemonTemplateSet } from '../../lib/types'

const kingambit: PokemonTemplateSet = {
  internalName: 'KINGAMBIT',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SUPREMEOVERLORD',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'KOWTOWCLEAVE', 'IRONHEAD', 'SUCKERPUNCH'],
      justification:
        'Kingambit es el tanque oscuro de la línea Pawniard en Añil V4.13: PS 100 / Def 120 / Ataque 135 con Velocidad 50. General Supremo amplifica el Ataque por cada aliado ya derrotado, de modo que cuanto más avanza la partida más letal se vuelve el golpe, y Danza Espada lo acumula encima. Genufendiente es el STAB Siniestro de 85 de potencia que nunca falla, Cabeza de Hierro aporta la segunda STAB y el flinch, y Golpe Bajo con prioridad +1 compensa la Velocidad 50 dando a este físico la capacidad de rematar objetivos ralentizados o frágiles. Restos sostiene los 100 de PS para poder repetir entradas y bailes. Naturaleza Firme con reparto en PS y Ataque: la defensa 120 hace que convenga invertir en volumen, mientras la Velocidad es causa perdida y no se toca. La inmunidad de la habilidad a la caída de stats la refuerza un segundo set defensivo.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera eleva el pico de daño de cada golpe a cambio de desgaste, útil si el equipo no sostiene a Kingambit con recuperación.',
          replaces: 'LEFTOVERS'
        },
        {
          slot: 'ability',
          value: 'DEFIANT',
          note: 'Competitivo castiga con +2 de Ataque cualquier caída de stat, incluyendo Intimidación, a cambio de perder el bonus de General Supremo por bajas.',
          replaces: 'SUPREMEOVERLORD'
        }
      ]
    },
    {
      role: 'tank',
      isPrimary: false,
      confidence: 'viable',
      ability: 'DEFIANT',
      item: 'ASSAULTVEST',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['KOWTOWCLEAVE', 'IRONHEAD', 'SUCKERPUNCH', 'LOWKICK'],
      justification:
        'Variante defensivo-ofensiva que aprovecha Competitivo: PS 100 / Def 120 con Chaleco Asalto elevan también el lado especial y disuaden de golpear con movimientos que bajen stats, porque cada caída regala +2 de Ataque a Kingambit. Los cuatro huecos son ataques porque el Chaleco bloquea los movimientos de estado. Genufendiente y Cabeza de Hierro son las dobles STAB, Golpe Bajo cubre la prioridad de la Velocidad 50 y Patada Baja añade cobertura de tipo Lucha. Es viable y no óptimo porque renuncia al setup de General Supremo y al crecimiento explosivo, a cambio de un chequeo físico y especial más consistente partido a partido.',
      alternatives: [
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos permite recuperar entre turnos a costa de perder el chequeo especial que da el Chaleco, útil si se mantiene Competitivo.'
        }
      ]
    }
  ]
}

export default kingambit
