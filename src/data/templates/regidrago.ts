import type { PokemonTemplateSet } from '../../lib/types'

const regidrago: PokemonTemplateSet = {
  internalName: 'REGIDRAGO',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'DRAGONSMAW',
      item: 'CHOICESPECS',
      nature: 'MODEST',
      evs: [252, 0, 4, 252, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONENERGY', 'DRACOMETEOR', 'EARTHPOWER', 'DRAGONPULSE'],
      justification:
        'Regidrago concentra su viabilidad en la combinación de Mandíbula dragón (+50% en movimientos Dragón) y sus 200 de PS base: Dracoenergía (150) cuya potencia depende de los PS del usuario y que, a PS llenos, con Gafas Elección queda en más de 330 de potencia efectiva antes de aplicar el multiplicador de tipo, suficiente para eliminar a la mayoría de los objetivos neutrales en un golpe. Cometa Draco (130 por 1,5) es la alternativa de cabecera cuando los PS ya no están completos; Tierra Viva (90) cubre a los Acero y Veneno que resisten Dragón; y Pulso Dragón (85 por 1,5) es el STAB de precisión perfecta para no gastar el 90% de Cometa Draco. Modesta maximiza los 100 de Ataque Especial y el reparto 252 PS / 252 Ataque Especial aprovecha la reserva de 200 PS, que también alimenta a Dracoenergía: cuantos más PS haya, más fuerte es el primer golpe. La Velocidad 80 no define el rol de rompemuros.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera permite alternar de objetivo cada turno sin bloqueo, a costa de perder los multiplicadores de Gafas y de desgastar los PS que alimentan a Dracoenergía.'
        },
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Pañuelo Elección multiplica la Velocidad 80 y convierte a Regidrago en revenge killer de apertura, apuntando con Dracoenergía antes de recibir daño.'
        }
      ]
    }
  ]
}

export default regidrago