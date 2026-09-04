import type { PokemonTemplateSet } from '../../lib/types'

const magnezone: PokemonTemplateSet = {
  internalName: 'MAGNEZONE',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MAGNETPULL',
      item: 'CHOICESPECS',
      nature: 'MODEST',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['THUNDERBOLT', 'FLASHCANNON', 'VOLTSWITCH', 'THUNDER'],
      justification:
        'Ataque Especial 130. Imán impide huir o cambiar a los tipos Acero, dejándolos atrapados para eliminarlos con Rayo o Foco Resplandor, lo que despeja el camino a los compañeros que temen a esos muros. Voltiocambio conserva el momentum contra lo que no quiere quedarse. Rayo es el cuarto ataque para cuando 90 de potencia no bastan, bajo lluvia, o contra Volador que aguantan Rayo eléctrico normal. Defensa 115 y Defensa Especial 90 le dan cambios seguros para entrar. Modesta y máxima Velocidad para adelantar dentro de su rango. El IV de Ataque en 0 reduce el daño de confusión y de Juego Sucio.',
      alternatives: [
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Escala con la Defensa 115 y castiga a los Tierra inmunes a su STAB eléctrico; poco potente con Gafas.',
          replaces: 'THUNDER'
        },
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Revenge kill de Acero rápidos manteniendo el efecto de atrape de Imán.'
        },
        {
          slot: 'ability',
          value: 'ANALYTIC',
          note: 'Con objeto no elegido: +30% de potencia por atacar último, casi garantizado con Velocidad 60.'
        }
      ]
    },
    {
      role: 'tank',
      isPrimary: false,
      confidence: 'viable',
      ability: 'ANALYTIC',
      item: 'ASSAULTVEST',
      nature: 'MODEST',
      evs: [252, 0, 4, 252, 0, 0],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['THUNDERBOLT', 'FLASHCANNON', 'VOLTSWITCH', 'BODYPRESS'],
      justification:
        'Cálculo Final sube un 30% la potencia cuando Magnezone ataca último, lo que con Velocidad 60 ocurre casi siempre. Chaleco Asalto sobre PS 70 y Defensa Especial 90 lo vuelve un pivote especial voluminoso que devuelve daño fuerte y usa Voltiocambio para reposicionar. Plancha Corporal cubre a los Tierra que ignoran sus STAB. Perfil viable de tanque ofensivo frente al set de Gafas, más frágil. El IV de Ataque en 0 minimiza el daño de confusión.',
      alternatives: [
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Con Voltiocambio y tres ataques si se prefiere la recuperación pasiva al volumen especial del Chaleco.'
        }
      ]
    }
  ]
}

export default magnezone
