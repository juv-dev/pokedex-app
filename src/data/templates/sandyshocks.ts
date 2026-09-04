import type { PokemonTemplateSet } from '../../lib/types'

const sandyshocks: PokemonTemplateSet = {
  internalName: 'SANDYSHOCKS',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PROTOSYNTHESIS',
      item: 'BOOSTERENERGY',
      nature: 'TIMID',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['EARTHPOWER', 'THUNDERBOLT', 'VOLTSWITCH', 'SCORCHINGSANDS'],
      justification:
        'Sandy Shocks es un barredor especial eléctrico/tierra de Añil V4.13 con SpA 121 y Velocidad 101. Tierra Viva y Rayo forman la cobertura Eléctrico/Tierra casi perfecta (solo los levitadores voladores quedan al margen), y Voltiocambio le da salida para pivotar cuando el cruce no le favorece. Arenas Ardientes cubre precisamente a los Volador/Hada que resisten la doble STAB con su hipótesis de quemadura. El Tanque de Energía Potenciadora activa Paleosíntesis y eleva su ofensa especial, y la naturaleza Miedosa con 252 en Velocidad supera la base 100 del metagame. La baja Defensa 97 no le impide actuar porque es un barredor de picos de daño que se cubre pivotando.',
      alternatives: [
        {
          slot: 'move',
          value: 'SPIKES',
          note: 'Púas convierte a Sandy Shocks en un colocador de trampas que pivotando con Voltiocambio acumula daño, a cambio de la cobertura que da Arenas Ardientes.',
          replaces: 'SCORCHINGSANDS'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Gafas Elección elevan el daño al máximo a costa de quedar bloqueado en un movimiento; Voltiocambio mantiene la salida.',
          replaces: 'BOOSTERENERGY'
        }
      ]
    }
  ]
}

export default sandyshocks
