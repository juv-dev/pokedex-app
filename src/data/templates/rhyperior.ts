import type { PokemonTemplateSet } from '../../lib/types'

const rhyperior: PokemonTemplateSet = {
  internalName: 'RHYPERIOR',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SOLIDROCK',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 4, 252, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'EARTHQUAKE', 'STONEEDGE', 'ICEPUNCH'],
      justification:
        'El perfil manda: PS 115 / Atq 140 / Def 130 con Def.Esp 55 y Velocidad 40 no es un sweeper, es un tanque colocador. Roca Sólida deja los golpes supereficaces en 3/4 del daño, lo que suaviza sus muchas debilidades (Agua, Planta, Tierra, Hielo, Lucha, Acero) y le permite entrar, poner Trampa Rocas y seguir aguantando. Terremoto y Roca Afilada son el STAB doble; Puño Hielo cubre a Tierra, Dragón, Planta y Volador que resisten o esquivan el suelo. Restos porque con Velocidad 40 el juego es a largo plazo y no puede permitirse el desgaste de Vidasfera. Se elige Roca Sólida sobre Audaz porque ningún movimiento del set tiene retroceso, y sobre Pararrayos porque el rol es defensivo, no de pivote a Eléctrico.',
      alternatives: [
        {
          slot: 'move',
          value: 'SWORDSDANCE',
          note: 'Intento de barrido: solo tiene sentido con apoyo de Espacio Raro, porque la Velocidad 40 lo deja atrás de todo.',
          replaces: 'STEALTHROCK'
        },
        {
          slot: 'item',
          value: 'WEAKNESSPOLICY',
          note: 'Roca Sólida mitiga el golpe supereficaz que activa el Seguro, así que Rhyperior puede aguantarlo y responder con +2.'
        },
        {
          slot: 'move',
          value: 'MEGAHORN',
          note: 'Cobertura a Psíquico y Planta si el equipo ya tiene otro colocador de trampas.',
          replaces: 'STEALTHROCK'
        }
      ]
    },
    {
      role: 'bulky-attacker',
      isPrimary: false,
      confidence: 'viable',
      ability: 'SOLIDROCK',
      item: 'ASSAULTVEST',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['EARTHQUAKE', 'STONEEDGE', 'ICEPUNCH', 'MEGAHORN'],
      justification:
        'Uso secundario: el Chaleco Asalto parchea la Def.Esp 55, que combinada con PS 115 y Roca Sólida convierte a Rhyperior en un muro especial improvisado que además pega con Atq 140. Terremoto y Roca Afilada de STAB, Puño Hielo para el core Tierra/Dragón/Volador y Megacuerno para Psíquico y Planta. Firme porque la Velocidad es causa perdida y todo el valor está en el pico de daño. Sin movimientos de estado, el Chaleco no cuesta nada.',
      alternatives: []
    }
  ]
}

export default rhyperior
