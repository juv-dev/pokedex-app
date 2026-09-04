import type { PokemonTemplateSet } from '../../lib/types'

const togekiss: PokemonTemplateSet = {
  internalName: 'TOGEKISS',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SERENEGRACE',
      item: 'LEFTOVERS',
      nature: 'TIMID',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'AIRSLASH', 'ROOST', 'DAZZLINGGLEAM'],
      justification:
        'Dicha duplica la probabilidad de efecto secundario, así que el 30% de amedrentar de Tajo Aéreo pasa al 60%: con PS 85 / Def 95 / Def.Esp 115, Togekiss monta Más Psique y encadena turnos haciendo amedrentar al rival mientras Aterrizaje lo mantiene sano. At.Esp 120 tras +2 convierte a Tajo Aéreo y Brillo Mágico en armas de barrido; Brillo Mágico es el STAB de Hada que pega a Dragón y Siniestro. Miedosa para aprovechar cualquier margen de Velocidad sobre la base 80 rival mientras el amedrentar hace el resto.',
      alternatives: [
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Ignora Trampa Rocas y Púas; preferible si el equipo rival presiona con trampas y no hay retirada propia.'
        },
        {
          slot: 'move',
          value: 'FLAMETHROWER',
          note: 'Pega a los Acero como Escizor o Ferrothorn que absorben Brillo Mágico y Tajo Aéreo.',
          replaces: 'DAZZLINGGLEAM'
        }
      ]
    },
    {
      role: 'status-spreader',
      isPrimary: false,
      confidence: 'viable',
      ability: 'SERENEGRACE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 4, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['AIRSLASH', 'THUNDERWAVE', 'ROOST', 'DAZZLINGGLEAM'],
      justification:
        'Onda Trueno más Tajo Aéreo con Dicha es el clásico para-flinch: el rival paralizado pierde un cuarto de sus turnos y, sobre los que actúa, el 60% de amedrentar de Tajo Aéreo le roba otro. Con su volumen y Aterrizaje, Togekiss se vuelve casi imposible de romper con un solo atacante. Osada refuerza el lado físico, que es el más expuesto.',
      alternatives: [
        {
          slot: 'move',
          value: 'FLAMETHROWER',
          note: 'Cobertura a Acero a cambio del segundo STAB.',
          replaces: 'DAZZLINGGLEAM'
        }
      ]
    }
  ]
}

export default togekiss
