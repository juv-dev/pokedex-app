import type { PokemonTemplateSet } from '../../lib/types'

const dedenne: PokemonTemplateSet = {
  internalName: 'DEDENNE',
  templates: [
    {
      role: 'support',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'ELECTRICSURGE',
      item: 'HEAVYDUTYBOOTS',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['VOLTSWITCH', 'RISINGVOLTAGE', 'DAZZLINGGLEAM', 'NUZZLE'],
      justification:
        'Dedenne es frágil (67/57/57), pero ocupa un nicho concreto: es un colocador de Campo Eléctrico con 101 de Velocidad que además pivota. Electrogénesis instala el campo al entrar, lo que beneficia a todo el equipo eléctrico y a la vez dobla la potencia de Voltios Bajos, dejando un ataque de 140 en manos de un usuario rápido. Voltiocambio traslada ese campo a un compañero sin perder momentum; Brillo Mágico es la segunda STAB para los Dragón y Siniestro que ignoran Eléctrico; Moflete es un daño físico menor pero garantiza parálisis, un pegamento útil para el resto del equipo. Botas Gruesas porque su volumen no tolera pagar Trampa Rocas en cada entrada. La inversión ofensiva máxima aprovecha la ventana breve en que está en el campo. Se prefiere Electrogénesis a Carrillo o Piel Feérica porque el terreno es la única razón real para usar a Dedenne.',
      alternatives: [
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Parálisis a distancia y sin contacto contra objetivos a los que Moflete no llega bien.',
          replaces: 'NUZZLE'
        },
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Garantiza colocar el campo y un Voltiocambio contra un lead más rápido, a cambio de no reentrar sin coste.'
        },
        {
          slot: 'move',
          value: 'NASTYPLOT',
          note: 'Intento de barrido tardío aprovechando Voltios Bajos a 140 si el equipo necesita un cierre inesperado.',
          replaces: 'NUZZLE'
        }
      ]
    }
  ]
}

export default dedenne
