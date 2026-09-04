import type { PokemonTemplateSet } from '../../lib/types'

const misdreavus: PokemonTemplateSet = {
  internalName: 'MISDREAVUS',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LEVITATE',
      item: 'EVIOLITE',
      nature: 'CALM',
      evs: [252, 0, 40, 0, 216, 0],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['CALMMIND', 'SHADOWBALL', 'DRAININGKISS', 'WILLOWISP'],
      justification:
        'En Añil, Misdreavus es Fantasma/Hada, y con Levitación su perfil defensivo es de los mejores para un Mineral Evolutivo: inmune a Normal, Lucha, Dragón y Tierra, resiste Bicho y Veneno, y solo teme a Fantasma y Acero. Con el Mineral, las defensas 60/85 pasan a valores efectivos de unos 90 y 128 sobre PS 60, lo suficiente para que Paz Mental lo convierta en una condición de victoria: cada subida refuerza el At.Esp 85 y la Def.Esp, y Beso Drenaje (hada) le devuelve PS en cada golpe, así que se cura mientras acumula. Bola Sombra es el STAB ofensivo que además puede bajar la Def.Esp rival, y Fuego Fatuo quema a los muros físicos y a los Acero que quisieran frenarlo. Serena y reparto 252/216 en PS y Def.Esp para maximizar el lado que la habilidad refuerza; IV de Ataque 0 por confusión y Bola Foul.',
      alternatives: [
        {
          slot: 'move',
          value: 'DAZZLINGGLEAM',
          note: 'Brillo Mágico como segundo STAB si se prefiere daño hada inmediato al control de Fuego Fatuo.',
          replaces: 'WILLOWISP'
        },
        {
          slot: 'move',
          value: 'NASTYPLOT',
          note: 'Maquinación dobla el At.Esp en una subida en vez de repartir en dos con Paz Mental; más presión ofensiva a costa de la defensa extra.',
          replaces: 'CALMMIND'
        },
        {
          slot: 'move',
          value: 'PAINSPLIT',
          note: 'Divide Dolor como recuperación alternativa contra objetivos con más PS si no se lleva Beso Drenaje, útil en una versión más defensiva.',
          replaces: 'DRAININGKISS'
        }
      ]
    },
    {
      role: 'support',
      isPrimary: false,
      confidence: 'viable',
      ability: 'LEVITATE',
      item: 'EVIOLITE',
      nature: 'BOLD',
      evs: [252, 0, 216, 0, 40, 0],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['WILLOWISP', 'TAUNT', 'PAINSPLIT', 'NIGHTSHADE'],
      justification:
        'Uso puramente disruptivo apoyado en el mismo tipo Fantasma/Hada con Levitación y Mineral Evolutivo. Fuego Fatuo neutraliza atacantes físicos, Mofa frena trampas, recuperación y preparaciones del rival, Divide Dolor mantiene a Misdreavus con PS aprovechando su total bajo, y Vendetta hace 100 de daño fijo ignorando defensas y tipos (salvo Normal, al que ya golpea de todos modos por ser Fantasma). Osada e inversión física porque en este set no ataca con estadística propia y el lado físico es el que lo presiona por contacto.',
      alternatives: [
        {
          slot: 'move',
          value: 'HEALBELL',
          note: 'Cascabel Cura si el equipo necesita un limpiador de estados, a cambio del daño fijo de Vendetta.',
          replaces: 'NIGHTSHADE'
        }
      ]
    }
  ]
}

export default misdreavus
