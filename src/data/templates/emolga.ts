import type { PokemonTemplateSet } from '../../lib/types'

const emolga: PokemonTemplateSet = {
  internalName: 'EMOLGA',
  templates: [
    {
      role: 'pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MOTORDRIVE',
      item: 'HEAVYDUTYBOOTS',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['VOLTSWITCH', 'UTURN', 'AIRSLASH', 'ENCORE'],
      justification:
        'El nicho de Emolga es el pivote veloz de doble intercambio: Velocidad 110 con ambos ataques a 95 y acceso simultáneo a Voltiocambio y Viraje, algo poco común. Voltiocambio y Viraje ceden el turno a un compañero manteniendo el momentum y golpean por lados opuestos, así que casi nunca queda anulado por una inmunidad. Tajo Aéreo es la STAB de Volador para tener presión inmediata cuando el rival espera el pivote. Bis bloquea a los sweepers que intentan montarse encima de un cambio previsto, usando la Velocidad 110 para llegar antes. Electromotor es clave en este rol: si un ataque eléctrico lo alcanza mientras entra, lo anula y sube su Velocidad un nivel, reforzando su función de absorber eléctricos por el equipo. Botas Gruesas porque un pivote de tipo Volador no puede pagar Trampa Rocas en cada reentrada. Naturaleza Miedosa y máxima Velocidad para asegurar la iniciativa que sostiene todo el set.',
      alternatives: [
        {
          slot: 'move',
          value: 'THUNDERBOLT',
          note: 'STAB inmediata y potente si se prefiere presión ofensiva sobre disrupción.',
          replaces: 'ENCORE'
        },
        {
          slot: 'move',
          value: 'NUZZLE',
          note: 'Parálisis garantizada desde un Pokémon veloz para control de velocidad del equipo.',
          replaces: 'ENCORE'
        },
        {
          slot: 'move',
          value: 'DEFOG',
          note: 'Retirada de trampas desde un pivote rápido, a cambio de la STAB de Volador.',
          replaces: 'AIRSLASH'
        },
        {
          slot: 'ability',
          value: 'STATIC',
          note: 'Un 30% de parálisis por contacto, incluso a tipo Tierra, si no se espera absorber ataques eléctricos.'
        }
      ]
    }
  ]
}

export default emolga
