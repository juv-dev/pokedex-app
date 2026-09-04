import type { PokemonTemplateSet } from '../../lib/types'

const butterfree: PokemonTemplateSet = {
  internalName: 'BUTTERFREE',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'COMPOUNDEYES',
      item: 'HEAVYDUTYBOOTS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['QUIVERDANCE', 'SLEEPPOWDER', 'BUGBUZZ', 'HURRICANE'],
      justification:
        'En Añil V4.13 Butterfree tiene At.Esp 100 / Def.Esp 100 y Velocidad 90, un perfil especial claramente por encima de su línea original, lo que hace real el plan de Danza Aleteo. Ojo Compuesto ("aumenta la precisión de sus movimientos en un 30%") es la habilidad que define el set: sube Somnífero de 75 a un efectivo 97,5% —una dormición casi garantizada para abrir el turno de setup— y Vendaval de 70 a un 91%, convirtiéndolo en un STAB de 110 usable sin lluvia. Danza Aleteo sube At.Esp., Def.Esp. y Velocidad un nivel; tras uno o dos usos, Zumbido (90, STAB) y Vendaval barren y la Def.Esp. acumulada le permite encajar ataques especiales neutros. El tipo Bicho/Volador tiene debilidad 2x a Trampa Rocas, así que Botas Gruesas es obligatorio: sin objeto ofensivo, el plan se apoya en los boosts, no en el ítem. Reparto máximo en At.Esp. y Velocidad con Miedosa para aprovechar cada nivel de Danza Aleteo desde el primer turno.',
      alternatives: [
        {
          slot: 'ability',
          value: 'TINTEDLENS',
          note: 'Cromolente ("potencia los movimientos poco eficaces, haciendo estos el doble de daño") convierte el barrido en rotura pura contra núcleos que resisten Bicho/Volador, a cambio de perder la dormición fiable de Ojo Compuesto.'
        },
        {
          slot: 'move',
          value: 'AIRSLASH',
          note: 'Tajo Aéreo (80, 95 de precisión ya sin habilidad) sacrifica potencia por no depender de Ojo Compuesto para acertar el STAB volador.',
          replaces: 'HURRICANE'
        },
        {
          slot: 'move',
          value: 'GIGADRAIN',
          note: 'Gigadrenado cubre a los tipos Roca y Agua que frenan ambos STAB y repone PS para seguir montado en los boosts.',
          replaces: 'BUGBUZZ'
        }
      ]
    }
  ]
}

export default butterfree
