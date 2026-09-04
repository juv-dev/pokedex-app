import type { PokemonTemplateSet } from '../../lib/types'

const kabutops: PokemonTemplateSet = {
  internalName: 'KABUTOPS',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'viable',
      ability: 'BATTLEARMOR',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'STONEEDGE', 'LIQUIDATION', 'AQUAJET'],
      justification:
        'Kabutops en Añil V4.13 tiene Ataque 115, Defensa 105 y Velocidad 80. Danza Espada dobla el Ataque y el problema de Velocidad se compensa con Acua Jet, prioridad de tipo Agua que le da alcance sobre rivales debilitados y barredores frágiles más rápidos. Roca Afilada y Hidrochorro son los dos STAB, este último con opción de bajar la Defensa. Armadura Batalla anula los críticos, lo que asegura los turnos de instalación. Vidasfera maximiza el daño tras el impulso y la Defensa 105 base ayuda a encontrar el hueco para bailar. Naturaleza Firme para pegar lo más fuerte posible, ya que la Velocidad 80 no gana muchas carreras aunque se invierta.',
      alternatives: [
        {
          slot: 'ability',
          value: 'SWIFTSWIM',
          note: 'Nado Rápido dobla la Velocidad bajo lluvia; en ese contexto Acua Jet deja de ser necesario y su hueco puede ir a Tijera X o Fuerza Bruta.'
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme retira el objeto rival y golpea a Fantasma y Psíquico, cambio de utilidad frente a la prioridad de Acua Jet.',
          replaces: 'AQUAJET'
        },
        {
          slot: 'move',
          value: 'SUPERPOWER',
          note: 'Fuerza Bruta (120) rompe a los Acero y Normal voluminosos, a cambio de bajar el propio Ataque y Defensa tras usarlo.',
          replaces: 'AQUAJET'
        }
      ]
    },
    {
      role: 'hazard-removal',
      isPrimary: false,
      confidence: 'viable',
      ability: 'BATTLEARMOR',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['RAPIDSPIN', 'STONEEDGE', 'LIQUIDATION', 'KNOCKOFF'],
      justification:
        'Kabutops es un retirador de trampas ofensivo: Giro Rápido limpia el campo propio y de paso sube su Velocidad, mientras Roca Afilada e Hidrochorro mantienen presión real y Desarme quita objetos y castiga a los Fantasma que bloquean el giro. Con Ataque 115 no es un spinner pasivo, así que obliga al rival a respetarlo. Armadura Batalla protege de críticos mientras hace su trabajo. Encaja en equipos ofensivos que necesitan control de trampas sin ceder un turno completo.',
      alternatives: [
        {
          slot: 'nature',
          value: 'ADAMANT',
          note: 'Firme sube el daño a costa de la carrera de Velocidad, opción si el equipo prefiere potencia sobre velocidad de giro.'
        }
      ]
    }
  ]
}

export default kabutops
