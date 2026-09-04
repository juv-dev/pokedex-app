import type { PokemonTemplateSet } from '../../lib/types'

const wobbuffet: PokemonTemplateSet = {
  internalName: 'WOBBUFFET',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SHADOWTAG',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 132, 0, 124, 0],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['COUNTER', 'MIRRORCOAT', 'ENCORE', 'DESTINYBOND'],
      justification:
        'PS 190 con Defensa 58 y Def.Esp 58 y un movepool ofensivo inexistente obligan a un único plan: aguantar el golpe y devolverlo. Sombra Trampa impide que el rival cambie o huya salvo Fantasmas y Muda Concha, así que Wobbuffet elige a quién encierra y lo elimina. Contraataque devuelve el doble del daño físico recibido y Manto Espejo el doble del especial, ambos con prioridad -5 para golpear después de recibir; con PS 190 casi cualquier ataque no letal se traduce en un KO de vuelta. Bucle refleja al rival encerrado en un solo movimiento, lo que fuerza el KO seguro o lo deja indefenso para un compañero. Última Baza es el seguro contra el que intenta romperlo de un golpe: si Wobbuffet cae, se lleva al atacante. Naturaleza Serena y reparto mixto en PS/Def/Def.Esp porque ninguna estadística ofensiva importa y el objetivo es maximizar el margen de supervivencia de ambos lados; IV de Ataque 0 para minimizar el daño de confusión y de Bola Foul.',
      alternatives: [
        {
          slot: 'move',
          value: 'SAFEGUARD',
          note: 'Velo Sagrado protege del estado mientras encierra a un rival que intenta pararlo con quemadura o parálisis, a cambio de perder el KO garantizado de Mismo Destino.',
          replaces: 'DESTINYBOND'
        },
        {
          slot: 'item',
          value: 'CUSTAPBERRY',
          note: 'Baya Chiri le da prioridad al último movimiento con PS bajos para asegurar un Contraataque o Mismo Destino final, a cambio de la cura pasiva de Restos.'
        },
        {
          slot: 'nature',
          value: 'BOLD',
          note: 'Osada si el metajuego local es más físico que especial: refuerza el lado que sostiene Contraataque.'
        }
      ]
    }
  ]
}

export default wobbuffet
