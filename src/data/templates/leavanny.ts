import type { PokemonTemplateSet } from '../../lib/types'

const leavanny: PokemonTemplateSet = {
  internalName: 'LEAVANNY',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SHARPNESS',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'LEAFBLADE', 'XSCISSOR', 'KNOCKOFF'],
      justification:
        'Cortante en Añil sube un 50% la potencia de los movimientos cortantes, y los dos STAB de Leavanny entran en esa categoría: Hoja Afilada queda en 135 de potencia efectiva y Tijera X en 120, ambos con Ataque 110 detrás. Danza Espada lleva el Ataque a +2 y convierte esos dos golpes en una amenaza que rompe a casi cualquier muro neutral. Desarme es el cuarto hueco porque no lo potencia Cortante pero cubre el punto ciego del set: los tipo Fantasma y Psíquico que entran a frenar los cortes reciben daño Siniestro y pierden el objeto. Velocidad 92 con naturaleza Alegre lo deja delante de la franja de 80-90 sin invertir en Ataque de más; la Vidasfera compensa la falta de Cinta sin bloquearlo en un movimiento, cosa importante en un sweeper que ya gastó un turno en Danza Espada. El perfil defensivo 75/80/70 y la debilidad x4 a Fuego obligan a tratarlo como rompemuros de una entrada, no como pivote.',
      alternatives: [
        {
          slot: 'move',
          value: 'AERIALACE',
          note: 'Tercer golpe cortante potenciado por Cortante; pega limpio a Lucha, Bicho y Planta a cambio de la utilidad de Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'move',
          value: 'TRIPLEAXEL',
          note: 'Cobertura Hielo contra Volador y Dragón que resisten ambos STAB, aunque no la potencia Cortante y depende de acertar los tres golpes.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cambia el set a rompemuros inmediato sin Danza Espada: más presión desde el turno 1, a costa de quedar bloqueado en un movimiento.'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'SHARPNESS',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['LEAFBLADE', 'XSCISSOR', 'KNOCKOFF', 'AERIALACE'],
      justification:
        'Uso alternativo que renuncia al turno de setup: Cinta Elección más Firme y Cortante deja Hoja Afilada y Tijera X pegando como si llevara Danza Espada de salida. Sirve para meter daño inmediato en equipos ofensivos donde no hay tiempo de subir. Desarme y As Aéreo completan la cobertura contra Fantasma, Psíquico, Lucha y Bicho. El problema sigue siendo Velocidad 92 y la debilidad x4 a Fuego: entra, rompe algo y suele caer, por eso es secundario frente a la versión con Danza Espada y Vidasfera, que conserva flexibilidad de objetivo.',
      alternatives: [
        {
          slot: 'move',
          value: 'POISONJAB',
          note: 'Golpe Veneno castiga a las Hadas y a los muros de tipo Planta que aguantan los dos STAB, a cambio de la utilidad de Desarme.',
          replaces: 'KNOCKOFF'
        }
      ]
    }
  ]
}

export default leavanny
