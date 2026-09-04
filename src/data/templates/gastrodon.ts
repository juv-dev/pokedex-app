import type { PokemonTemplateSet } from '../../lib/types'

const gastrodon: PokemonTemplateSet = {
  internalName: 'GASTRODON',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STORMDRAIN',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['RECOVER', 'SCALD', 'EARTHPOWER', 'ICEBEAM'],
      justification:
        'PS 111 con tipo Agua/Tierra (una sola debilidad, Planta) y Recuperación fiable lo hacen un tanque de manual. Colector le da inmunidad al tipo Agua y además le sube un nivel el At. Esp. al recibir uno de esos ataques, así que entra gratis a la mayoría de los Agua y amenaza de vuelta. Escaldar quema, Tierra Viva es el segundo STAB con posible bajar Def. Esp. y Rayo Hielo castiga a los Planta, Dragón y Volador que lo quieren aprovechar. Osada con inversión en Defensa porque su lado físico (68) es el más flojo; el especial 82 más los PS 111 ya aguanta. Baba y Poder Arena son situacionales frente a la utilidad de la inmunidad de Colector.',
      alternatives: [
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Aporta trampas al equipo cediendo la cobertura a Planta, Dragón y Volador.',
          replaces: 'ICEBEAM'
        },
        {
          slot: 'move',
          value: 'CLEARSMOG',
          note: 'Borra los aumentos de un sweeper con setup que intente montarse encima.',
          replaces: 'EARTHPOWER'
        },
        {
          slot: 'move',
          value: 'YAWN',
          note: 'Fuerza cambios y ayuda a colocar trampas o pivotar.',
          replaces: 'ICEBEAM'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Castiga a los físicos de contacto que buscan forzar el cambio.'
        }
      ]
    }
  ]
}

export default gastrodon
