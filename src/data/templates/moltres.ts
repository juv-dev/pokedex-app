import type { PokemonTemplateSet } from '../../lib/types'

const moltres: PokemonTemplateSet = {
  internalName: 'MOLTRES',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'FLAMEBODY',
      item: 'HEAVYDUTYBOOTS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FLAMETHROWER', 'HURRICANE', 'ROOST', 'UTURN'],
      justification:
        'Moltres en Añil V4.13 tiene At. Esp. 125, PS 90 y defensas 90/85, con acceso a Respiro. Su tipo Fuego/Volador recibe daño cuádruple de Trampa Rocas, de modo que Botas Gruesas es casi obligado para poder pivotar de forma repetida. Lanzallamas es el STAB fiable, Vendaval es el segundo STAB que castiga a Planta, Lucha y Bicho, Respiro sostiene los PS e Ida y Vuelta cede el turno con ventaja para mantener el ritmo. Cuerpo Llama puede quemar al que lo golpee por contacto, un extra que degrada a los físicos que intenten forzar el cambio. Naturaleza Miedosa y reparto ofensivo para conservar la Velocidad 90 y pegar con fuerza al entrar.',
      alternatives: [
        {
          slot: 'move',
          value: 'DEFOG',
          note: 'Vendaval de tipo Volador para limpiar trampas, cambio útil si el equipo necesita control de trampas por encima del pivoteo.',
          replaces: 'UTURN'
        },
        {
          slot: 'move',
          value: 'WILLOWISP',
          note: 'Fuego Fatuo reparte quemaduras y aísla a un físico, alternativa de utilidad al pivote de Ida y Vuelta.',
          replaces: 'UTURN'
        },
        {
          slot: 'move',
          value: 'FIREBLAST',
          note: 'Llamarada aporta más potencia bruta a costa de precisión.',
          replaces: 'FLAMETHROWER'
        },
        {
          slot: 'ability',
          value: 'PRESSURE',
          note: 'Presión favorece los enfrentamientos por desgaste de PP en un rol más pasivo.'
        }
      ]
    }
  ]
}

export default moltres
