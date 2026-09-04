import type { PokemonTemplateSet } from '../../lib/types'

const dondozo: PokemonTemplateSet = {
  internalName: 'DONDOZO',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'UNAWARE',
      item: 'LEFTOVERS',
      nature: 'CAREFUL',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['WAVECRASH', 'EARTHQUAKE', 'BODYPRESS', 'REST'],
      justification:
        'Dondozo es un tanque voluminoso (PS 100 / Def 115) cuyo valor central es Ignorante: ignora los cambios de características del rival al atacar, por lo que los set-up sweepers no lo rompen con danzas o mejoras. El set castiga con Envite Acuático, un STAB de agua de 120, Terremoto y Plancha Corporal (que usa la Defensa 115 para pegar a acero, roca y hielo), mientras Descanso y el cambio lo regeneran. La Velocidad 35 lo hace ideal para moverse después de los rivales lentos sin coste. Naturaleza Cauta con 252 Def. Esp. compensa la Defensa Especial 65 y convierte a Dondozo en una respuesta a ambos lados del espectro. Ignorante es la elección principal sobre Velo Agua por su capacidad de frenar a los boosteadores.',
      alternatives: [
        {
          slot: 'ability',
          value: 'WATERVEIL',
          note: 'Velo Agua lo inmuniza a la quemadura, útil frente a difusores de estados, a costa de perder la anulación de los boosts rivales de Ignorante.'
        },
        {
          slot: 'move',
          value: 'CURSE',
          note: 'Maldición sube Ataque y Defensa a cambio de Velocidad, potenciando la variante de bloqueo, cediendo la regen pasiva de Descanso.',
          replaces: 'REST'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado castiga a los atacantes de contacto con su Defensa 115, a cambio de la recuperación de Restos.'
        }
      ]
    }
  ]
}

export default dondozo