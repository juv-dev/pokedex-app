import type { PokemonTemplateSet } from '../../lib/types'

const bewear: PokemonTemplateSet = {
  internalName: 'BEWEAR',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'FLUFFY',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BULKUP', 'DRAINPUNCH', 'EARTHQUAKE', 'ICEPUNCH'],
      justification:
        'Bewear es un atacante resistente con el físico más redondo de su grupo (PS 120 / At 125 / Def 80) y una habilidad que lo define: Peluche reduce a la mitad el daño de los movimientos de contacto, es decir, de casi todos los golpes físicos del metagame, pero duplica el infligido por los de tipo Fuego. Corpulencia sube Ataque y Defensa, y con Peluche la Defensa 80 ya eficaz se vuelve el muro de contacto que gritan las stats; Puño Drenaje (75, STAB Lucha) cura la mitad del daño y hace que cada golpe sostenga el ciclo de Corpulencia; Terremoto (100) cubre Acero y Eléctrico, y Puño Hielo castiga a los Voladores y Dragones, los dos tipos que frenan la combinación Normal/Lucha. Los Restos dan la curación pasiva que falta entre Puño Drenaje. La cruz real es la debilidad doble a Fuego (Peluche hace que las llamas entren con el doble de fuerza) y la Velocidad 60: Firme con 252 en Ataque deja el 4x en físico y no gasta en velocidad porque el set está pensado para aguantar y contraatacar, no para correr.',
      alternatives: [
        {
          slot: 'item',
          value: 'ASSAULTVEST',
          note: 'Chaleco Asalto sube la Def. Esp. un 50% y convierte el lado especial en la otra mitad del muro, a costa de perder Corpulencia (bloquea movimientos de estado).',
          replaces: 'BULKUP'
        },
        {
          slot: 'ability',
          value: 'SCRAPPY',
          note: 'Con esta habilidad los golpes Lucha y Normal alcanzan a los Fantasma —los dos tipos que bloquean la combinación STAB de Bewear— y además es inmune a Intimidación, renunciando a la mitigación de Peluche.'
        },
        {
          slot: 'move',
          value: 'DARKESTLARIAT',
          note: 'Lariat Oscuro golpea a los Fantasma sin depender de habilidad y no puede fallar por evasión, a cambio de la cobertura de Puño Hielo.',
          replaces: 'ICEPUNCH'
        }
      ]
    }
  ]
}

export default bewear