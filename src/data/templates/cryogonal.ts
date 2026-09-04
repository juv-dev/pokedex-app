import type { PokemonTemplateSet } from '../../lib/types'

const cryogonal: PokemonTemplateSet = {
  internalName: 'CRYOGONAL',
  templates: [
    {
      role: 'hazard-removal',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LEVITATE',
      item: 'LEFTOVERS',
      nature: 'TIMID',
      evs: [252, 0, 40, 0, 0, 216],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['RAPIDSPIN', 'RECOVER', 'ICEBEAM', 'HAZE'],
      justification:
        'Def.Esp 135 con Velocidad 105 y acceso a Giro Rápido y Recuperación: Cryogonal es un muro especial y retirador de trampas veloz. Levitación aporta inmunidad a Tierra, lo que le permite entrar a Terremoto y a Púas sin coste. Giro Rápido limpia las trampas del propio campo y de paso sube la Velocidad; Recuperación sostiene el muro; Rayo Hielo es la STAB para no ser pasivo; Niebla resetea los aumentos de un sweeper que intente montarse encima, cubriendo la principal grieta de un muro especial que de otro modo sería bait de setup. Naturaleza Miedosa con reparto de PS y Velocidad porque su Defensa física de 50 es tan baja que invertir ahí rinde poco: su trabajo es aguantar el lado especial, girar y curarse. Restos por la cura pasiva que hace de Recuperación un recurso casi infinito.',
      alternatives: [
        {
          slot: 'move',
          value: 'FREEZEDRY',
          note: 'Castiga a Agua además de la cobertura habitual de Hielo.',
          replaces: 'ICEBEAM'
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Retira objetos al forzar cambios; utilidad desde un Ataque bajo.',
          replaces: 'HAZE'
        },
        {
          slot: 'move',
          value: 'TOXIC',
          note: 'Desgaste a muros y voluminosos que no temen al Hielo.',
          replaces: 'HAZE'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Si el equipo ya tiene otra retirada de trampas y se quiere que Cryogonal entre sin pagar Trampa Rocas, que le pega el doble por su tipo Hielo.'
        },
        {
          slot: 'ability',
          value: 'PODERGELIDO',
          note: 'En equipos de nevada, sube un 50% la potencia de Hielo y la Velocidad; se pierde la inmunidad a Tierra.'
        },
        {
          slot: 'move',
          value: 'AURORAVEIL',
          note: 'En equipo de nevada, apoyo de pantallas desde un usuario veloz.',
          replaces: 'RECOVER'
        }
      ]
    }
  ]
}

export default cryogonal
