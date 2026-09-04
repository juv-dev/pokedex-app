import type { PokemonTemplateSet } from '../../lib/types'

const archeops: PokemonTemplateSet = {
  internalName: 'ARCHEOPS',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'viable',
      ability: 'DEFEATIST',
      item: 'CHOICEBAND',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STONEEDGE', 'EARTHQUAKE', 'DUALWINGBEAT', 'UTURN'],
      justification:
        'Ataque 140 y Velocidad 110 base son cifras de primer nivel, pero Flaqueza no cambió en Añil: en cuanto los PS bajan del 50%, el Ataque y el At. Esp. se reducen a la mitad. Eso convierte a Archeops en un rompemuros de una sola ventana útil, y el set se construye alrededor de esa realidad. Cinta Elección y Alegre maximizan el golpe mientras está sano; Roca Afilada y Terremoto son la ofensiva EdgeQuake y Ataque Ala Doble el STAB Volador (se prefiere a Acrobacias, que pierde potencia por llevar objeto). Ida y Vuelta es el movimiento más importante: permite salir tras romper algo, antes de comer daño que active Flaqueza, y mantiene el ritmo. No llega a óptimo porque su fiabilidad depende de no ser tocado, algo que la debilidad a Trampa Rocas y a la prioridad hacen difícil de sostener.',
      alternatives: [
        {
          slot: 'move',
          value: 'HEADSMASH',
          note: 'Potencia de STAB Roca máxima si se acepta el riesgo: el retroceso puede bajar los PS por debajo del 50% y activar Flaqueza en el propio Archeops.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Convierte el set en revenge killer puro: Velocidad 110 más Pañuelo asegura llegar primero mientras aún tiene los PS altos.'
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Quita el objeto al entrante y pega a Fantasma y Psíquico, a cambio de la cobertura de Terremoto.',
          replaces: 'EARTHQUAKE'
        }
      ]
    }
  ]
}

export default archeops
