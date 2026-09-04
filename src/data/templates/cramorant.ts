import type { PokemonTemplateSet } from '../../lib/types'

const cramorant: PokemonTemplateSet = {
  internalName: 'CRAMORANT',
  templates: [
    {
      role: 'hazard-removal',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'GULPMISSILE',
      item: 'HEAVYDUTYBOOTS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SURF', 'DEFOG', 'ROOST', 'FLIPTURN'],
      justification:
        'Cramorant cubre el rol de retirada de trampas con Def. Esp. 85, Despejar y una identidad única: su habilidad Tragamisil entra en juego al usar Surf, haciendo que la STAB Agua de este set sirva además para colocar la carga que castiga a los atacantes de contacto. Respiro restaura la mitad de los PS y le da longevidad como pivote, y Viraje le permite escapar y mantener el momentum tras limpiar el campo. Botas Gruesas son imprescindibles porque el tipo Volador/Agua recibe 2x de Roca: al ser un recurso que entra y sale a limpiar trampas, no puede pagar cada reentrada. Naturaleza Osada con reparto físico defensivo (Def 55 es el lado más débil) y PS para aguantar los golpes que intercambia; el Ataque Especial 95 no deja de darle una Surf decente para castigar.',
      alternatives: [
        {
          slot: 'move',
          value: 'DIVE',
          note: 'Buceo activa Tramamisil igual que Surf y evita que el rival le haga daño durante el turno de carga, a cambio de un STAB físico menos flexible que Surf.',
          replaces: 'SURF'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos dan curación pasiva por turno, cediendo la protección contra Trampa Rocas de las Botas Gruesas.',
          replaces: 'HEAVYDUTYBOOTS'
        }
      ]
    }
  ]
}

export default cramorant
