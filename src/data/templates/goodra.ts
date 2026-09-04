import type { PokemonTemplateSet } from '../../lib/types'

const goodra: PokemonTemplateSet = {
  internalName: 'GOODRA',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SAPSIPPER',
      item: 'ASSAULTVEST',
      nature: 'CALM',
      evs: [252, 0, 8, 0, 248, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRACOMETEOR', 'THUNDERBOLT', 'FLAMETHROWER', 'EARTHQUAKE'],
      justification:
        'Def.Esp 150 sobre 90 de PS es un lado especial descomunal, y el Chaleco Asalto lo lleva a territorio casi inmune: Goodra encaja ataques especiales que noquearían a muros dedicados y responde con daño real. Herbívoro le da inmunidad a Planta con subida de Ataque, tapando de paso una de las pocas debilidades molestas de los núcleos Agua-Planta. Draco Cometa es el golpe pesado de tipo Dragón cuando hace falta quitarse a algo de encima; Rayo y Lanzallamas son cobertura para Agua, Volador y Acero; Terremoto castiga a los otros Acero y a Fuego. El Chaleco prohíbe movimientos de estado, así que el set es puramente ofensivo por diseño. Serena maximiza el lado especial ya dominante; la Defensa mínima solo redondea. Se prefiere Herbívoro a Hidratación por ser útil sin depender de lluvia.',
      alternatives: [
        {
          slot: 'move',
          value: 'SLUDGEBOMB',
          note: 'STAB de Veneno estable contra Hada y Planta si el equipo ya tiene con qué golpear Tierra.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'move',
          value: 'DRAGONPULSE',
          note: 'STAB de Dragón repetible y sin autobajada de At.Esp para partidas largas.',
          replaces: 'DRACOMETEOR'
        }
      ]
    },
    {
      role: 'wall-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'SAPSIPPER',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 8, 0, 248, 0],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['DRAGONPULSE', 'LIFEDEW', 'TOXIC', 'ACIDARMOR'],
      justification:
        'Variante defensiva que renuncia al Chaleco para acceder a recuperación y estados. Aguamiel, heredado de la línea de Goomy, devuelve un cuarto de los PS; Armadura Ácida sube mucho la Defensa para tapar el lado físico, que es el más flojo de Goodra (70 de Defensa); Tóxico pone el reloj a muros y amenazas defensivas; Pulso Draco mantiene una vía de daño para no ser pasivo. Restos suma desgaste pasivo. Es viable y no óptimo porque Aguamiel no es recuperación instantánea potente y sin Chaleco pierde parte de lo que hace especial a Goodra en primer lugar.',
      alternatives: [
        {
          slot: 'move',
          value: 'EARTHQUAKE',
          note: 'Castiga a los Acero que si no entran gratis a poner sus propias trampas.',
          replaces: 'ACIDARMOR'
        }
      ]
    }
  ]
}

export default goodra
