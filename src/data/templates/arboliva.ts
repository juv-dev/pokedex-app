import type { PokemonTemplateSet } from '../../lib/types'

const arboliva: PokemonTemplateSet = {
  internalName: 'ARBOLIVA',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SEEDSOWER',
      item: 'LEFTOVERS',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['GIGADRAIN', 'EARTHPOWER', 'STRENGTHSAP', 'LEECHSEED'],
      justification:
        'Arboliva en Añil V4.13 es un atacante especial lento y voluminoso: Ataque Especial 125 y Defensa Especial 109 con Velocidad 39 lo convierten en un tanque que además golpea fuerte. Disemillar ("crea un campo de hierba al recibir un ataque") activa el terreno de hierba, que recupera PS pasivamente y potencia sus movimientos de tipo Planta, potenciando sin coste a Gigadrenado. Gigadrenado (STAB potenciado por el campo) y Absorbefuerza (cura en función del Ataque del rival y lo baja) le dan dos vías de recuperación independientes, y Drenadoras añade desgaste pasivo que encaja con el estilo de desgaste del set. Tierra Viva cubre a Fuego, Veneno y Acero que resisten Planta. Restos refuerzan la longevidad. Naturaleza Modesta y reparto en PS y Ataque Especial para aprovechar que la Velocidad 39 hace que la inversión en Velocidad sea una causa perdida; el resto de la inversión va a volumen para aguantar el intercambio.',
      alternatives: [
        {
          slot: 'ability',
          value: 'HARVEST',
          note: 'Cosecha con Baya Zidra y Día Soleado da curación reiterada, pero exige montar el clima y renuncia a la sinergia de terreno de Disemillar.',
          replaces: 'SEEDSOWER'
        },
        {
          slot: 'move',
          value: 'ENERGYBALL',
          note: 'Energibola es un STAB Planta de mayor potencia instantánea que Gigadrenado, a cambio de perder la curación que da Gigadrenado.',
          replaces: 'GIGADRAIN'
        }
      ]
    }
  ]
}

export default arboliva
