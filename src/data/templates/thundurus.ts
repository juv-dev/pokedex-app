import type { PokemonTemplateSet } from '../../lib/types'

const thundurus: PokemonTemplateSet = {
  internalName: 'THUNDURUS',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRANKSTER',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'THUNDERBOLT', 'FOCUSBLAST', 'SLUDGEWAVE'],
      justification:
        'Ataque Especial 125 y Velocidad 111 con Bromista hacen algo poco habitual: Maquinación es un movimiento de estado, así que la habilidad le da prioridad y se monta antes de que el rival pueda actuar, incluso tras encajar un golpe. Rayo es la STAB, Onda Tóxica castiga a las Hadas que resisten Eléctrico y Fuerza Superior rompe a los Pokémon de tipo Normal, Acero y Siniestro; entre los tres cubren casi todo lo que puede pararlo tras el impulso. Vidasfera da potencia constante sin bloquear ataques. Miedosa con IV de Ataque a 0 para maximizar la Velocidad y minimizar la confusión y el Juego Sucio.',
      alternatives: [
        {
          slot: 'move',
          value: 'GRASSKNOT',
          note: 'Hierba Lazo pega a los tipos Tierra y Agua voluminosos que aguantan el resto del set.',
          replaces: 'SLUDGEWAVE'
        },
        {
          slot: 'move',
          value: 'VOLTSWITCH',
          note: 'Voltiocambio para un uso más orientado al pivoteo, cediendo un slot de cobertura.',
          replaces: 'FOCUSBLAST'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Gafas Elección para un pico de daño de salida mayor en un set sin Maquinación.'
        },
        {
          slot: 'ability',
          value: 'VOLTABSORB',
          note: 'Absorbe Elec. da inmunidad al tipo Eléctrico con curación de 1/4, para un rol de pivote defensivo.'
        }
      ]
    },
    {
      role: 'support',
      isPrimary: false,
      confidence: 'viable',
      ability: 'PRANKSTER',
      item: 'HEAVYDUTYBOOTS',
      nature: 'TIMID',
      evs: [252, 0, 4, 0, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['THUNDERWAVE', 'TAUNT', 'THUNDERBOLT', 'KNOCKOFF'],
      justification:
        'Lectura de apoyo disruptivo: Bromista da prioridad a Onda Trueno y Mofa, así que Thundurus puede paralizar a un barredor o cortar el plan de un colocador antes de que actúe. Rayo mantiene una amenaza ofensiva real y Desarme quita objetos clave. Botas Gruesas para reentrar sin pagar el peligro de entrada. Es viable frente al set de Maquinación cuando el equipo necesita más control que potencia.',
      alternatives: [
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Ida y Vuelta cambia el robo de objeto por momentum de pivoteo.',
          replaces: 'KNOCKOFF'
        }
      ]
    }
  ]
}

export default thundurus
