import type { PokemonTemplateSet } from '../../lib/types'

const mothim: PokemonTemplateSet = {
  internalName: 'MOTHIM',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TINTEDLENS',
      item: 'HEAVYDUTYBOOTS',
      nature: 'TIMID',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['QUIVERDANCE', 'BUGBUZZ', 'AIRSLASH', 'GIGADRAIN'],
      justification:
        'Danza Aleteo sube At. Esp., Def. Esp. y Velocidad a la vez, convirtiendo un cuerpo frágil (70/60/70) en una amenaza que además aguanta el lado especial. Cromolente (oculta) hace que los tipos que resisten sus STAB reciban el doble de daño, es decir, daño neutro efectivo: Acero, Roca y Eléctrico dejan de ser barreras para Zumbido y Tajo Aéreo. Gigadrenado cubre Agua, Roca y Tierra y recupera PS para encadenar subidas. Botas Gruesas son casi obligatorias: el tipo Bicho/Volador recibe el doble de daño de Trampa Rocas y un sweeper que entra varias veces no puede pagarlo. Miedosa para alcanzar los umbrales de Velocidad al +1. Enjambre solo actúa por debajo de 1/3 de PS.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Más potencia inmediata a costa de la longevidad frente a Trampa Rocas; solo si hay retirada de trampas.'
        },
        {
          slot: 'move',
          value: 'PSYCHIC',
          note: 'Pega con fuerza a Lucha y Veneno, pero pierde la recuperación de Gigadrenado.',
          replaces: 'GIGADRAIN'
        },
        {
          slot: 'move',
          value: 'ROOST',
          note: 'Longevidad pura para un rol de pivote ofensivo; renuncia al plan de barrido.',
          replaces: 'QUIVERDANCE'
        },
        {
          slot: 'move',
          value: 'HURRICANE',
          note: '110 de potencia y confusión a cambio de 70 de precisión fuera de lluvia.',
          replaces: 'AIRSLASH'
        },
        {
          slot: 'nature',
          value: 'MODEST',
          note: 'Si el equipo aporta la Velocidad y preferís el golpe más duro.'
        }
      ]
    }
  ]
}

export default mothim
