import type { PokemonTemplateSet } from '../../lib/types'

const alakazam: PokemonTemplateSet = {
  internalName: 'ALAKAZAM',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MAGICGUARD',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'PSYSHOCK', 'FOCUSBLAST', 'SHADOWBALL'],
      justification:
        'Alakazam tiene At. Esp. 135 y Velocidad 120, un perfil de barredor especial de cristal. Su habilidad oculta Muro Mágico, que solo le deja recibir daño de ataques directos y nada de daño indirecto de ataques, habilidades u objetos, hace que Vidasfera potencie cada golpe sin descontarle PS, y además lo vuelve inmune a Trampa Rocas, veneno, quemadura y tormenta de arena, así que puede entrar y preparar Maquinación sin desgaste. Con Maquinación, que sube dos niveles el At. Esp., Psicocarga golpea a los muros especiales por su Defensa física, Bola Sombra forma con Psicocarga una combinación casi sin resistencias y castiga a otros Psíquicos y Fantasmas, y A Todo Gas rompe a Siniestro y Acero como Tyranitar o Ferrothorn. Naturaleza Miedosa y reparto máximo en At. Esp. y Velocidad: la Velocidad 120 es un recurso que no se puede ceder y el At. Esp. 135 ya es suficiente sin una naturaleza que lo suba.',
      alternatives: [
        {
          slot: 'move',
          value: 'CALMMIND',
          note: 'Paz Mental sube At. Esp. y Def. Esp. a la vez, para partidas largas contra ofensivas especiales, a cambio del pico inmediato de ruptura de Maquinación.',
          replaces: 'NASTYPLOT'
        },
        {
          slot: 'move',
          value: 'RECOVER',
          note: 'Recuperación aprovecha Muro Mágico para dar a un set de Paz Mental una longevidad sorprendente como condición de victoria, cediendo la cobertura de tipo Fantasma.',
          replaces: 'SHADOWBALL'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Gafas Elección, junto con Truco en lugar de Maquinación, dan el pico de daño inmediato de 135 de At. Esp. multiplicado por 1,5 y la opción de lisiar un muro pasándole el objeto, renunciando a la barrida con setup.'
        },
        {
          slot: 'move',
          value: 'DAZZLINGGLEAM',
          note: 'Brillo Mágico castiga a los Siniestro inmunes a Psíquico como Hydreigon o Tyranitar sin depender de la precisión de A Todo Gas.',
          replaces: 'SHADOWBALL'
        }
      ]
    }
  ]
}

export default alakazam
