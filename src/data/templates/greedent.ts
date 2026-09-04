import type { PokemonTemplateSet } from '../../lib/types'

const greedent: PokemonTemplateSet = {
  internalName: 'GREEDENT',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'GLUTTONY',
      item: 'SITRUSBERRY',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BELLYDRUM', 'BODYPRESS', 'EARTHQUAKE', 'CRUNCH'],
      justification:
        'Greedent es un caso único: PS 120 y Gula con Baya Zidra permiten que Tambor (deja los PS al 50% y sube el Ataque al máximo) se auto-compense al instante, porque el umbral de Gula activa la baya exactamente en ese 50% y recupera el 25% de los PS sin gastar turno. El resultado es +6 de Ataque con tres cuartos de la vida intactos, el mejor truco del formato para un Pokémon de Velocidad 20 que de otro modo no podría montar nada. Plancha Corporal (80) usa la Defensa 95 como estadística ofensiva y se beneficia del volumen, Terremoto cubre Acero y Roca y Triturar es imprescindible: pega supereficaz a los Fantasma, que son inmunes a Plancha Corporal y anularían el set entero sin ella. Firme en 252 PS / 252 At. es el reparto de este rol: mientras la baya no se haya consumido, Greedent aguanta el intercambio que necesita para llegar a Tambor.',
      alternatives: [
        {
          slot: 'move',
          value: 'FIREFANG',
          note: 'Colmillo Ígneo golpea 4x a los Acero/Planta como Ferrothorn que frenan Terremoto y Plancha Corporal, a costa del golpe limpio a Fantasma.',
          replaces: 'CRUNCH'
        },
        {
          slot: 'move',
          value: 'WILDCHARGE',
          note: 'Voltio Cruel cubre Agua y Volador con un 25% de retroceso, renunciando a la cobertura de Fantasma.',
          replaces: 'CRUNCH'
        },
        {
          slot: 'item',
          value: 'FIGYBERRY',
          note: 'Baya Higog en vez de Zidra: cura un tercio en lugar de un cuarto, a costa de no activarse exactamente con el umbral del 50% de Gula.'
        }
      ]
    },
    {
      role: 'tank',
      isPrimary: false,
      confidence: 'viable',
      ability: 'CHEEKPOUCH',
      item: 'FIGYBERRY',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STUFFCHEEKS', 'BODYPRESS', 'EARTHQUAKE', 'CRUNCH'],
      justification:
        'Segundo arquetipo con una sinergia propia: Atiborramiento consume la Baya Higog al instante sin esperar umbrales, sube la Defensa dos niveles y dispara Carrillo, que cura un tercio de los PS después del efecto de la baya: +2 Defensa más dos tercios de vida en un solo turno sin depender de la salud previa. Plancha Corporal explota esa Defensa subida (la base 95 duplicada con la naturaleza Agitada y los EVs de Defensa), Terremoto y Triturar mantienen la cobertura del set primario. PS 120 con Defensa 95 lo convierten en un tanque físico real, y la curación de Carrillo no se agota: si el equipo equipa otra baya recuperable, el ciclo se repite. Es viable y no óptimo porque su daño sin Tambor es modesto y los equipos con cambio de objetos o Cura Total lo desactivan con facilidad.',
      alternatives: [
        {
          slot: 'move',
          value: 'SUPERFANG',
          note: 'Superdiente (daño fijo de la mitad de PS) da a este tanque una forma fiable de castigar sin invertir en Ataque, cediendo la cobertura de Fantasma.',
          replaces: 'CRUNCH'
        },
        {
          slot: 'item',
          value: 'SITRUSBERRY',
          note: 'Baya Zidra con Atiborramiento cura un cuarto en vez de un tercio, pero es utilizable sin exponerse al mareo de las bayas de curación.'
        }
      ]
    }
  ]
}

export default greedent