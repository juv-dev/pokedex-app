import type { PokemonTemplateSet } from '../../lib/types'

const sandslash: PokemonTemplateSet = {
  internalName: 'SANDSLASH',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'viable',
      ability: 'SANDRUSH',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'EARTHQUAKE', 'STONEEDGE', 'RAPIDSPIN'],
      justification:
        'Sandslash en Añil V4.13 tiene Ataque 110 y Defensa 110, pero Velocidad 70 y Def.Esp 55, y sin recuperación fiable (solo Descanso), así que no aguanta como muro. Su set correcto depende de que el equipo lleve un invocador de tormenta de arena: con arena activa, Ímpetu Arena ("aumenta x2 la Velocidad durante las tormentas de arena y evita el daño de esta") lleva el tramo 70 a un efectivo 140, por delante de casi todo el metajuego, y ahí Danza Espada más Vidasfera convierte el Ataque 110 en cifras de barrido. Terremoto es el STAB principal y Roca Afilada cubre a los Voladores y a Fuego/Bicho que lo esquivan. Giro Rápido se queda como cuarto hueco porque Sandslash es un removedor de trampas natural y en Añil además sube la Velocidad del usuario, lo que refuerza el barrido tras la arena. Es "viable" y no "óptimo" porque fuera de la arena la Velocidad 70 lo deja a merced de casi todo el tier ofensivo y ninguna de sus dos habilidades hace nada sin clima.',
      alternatives: [
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme castiga la reentrada rival y quita objetos defensivos; se pierde la utilidad de retirada de trampas de Giro Rápido.',
          replaces: 'RAPIDSPIN'
        },
        {
          slot: 'move',
          value: 'ICESPINNER',
          note: 'Rueda Gélida (80, tipo Hielo) pega a Dragón, Vuelo y Tierra y elimina el terreno activo, cobertura más limpia que Roca Afilada contra objetivos concretos.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos apoya un uso más lento de spinner puro sin Danza Espada, aprovechando la Defensa 110 para entrar varias veces a retirar trampas.'
        }
      ]
    }
  ]
}

export default sandslash
