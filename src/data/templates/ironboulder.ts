import type { PokemonTemplateSet } from '../../lib/types'

const ironboulder: PokemonTemplateSet = {
  internalName: 'IRONBOULDER',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'QUARKDRIVE',
      item: 'BOOSTERENERGY',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'MIGHTYCLEAVE', 'SACREDSWORD', 'MEGAHORN'],
      justification:
        'Iron Boulder es un barrefuerte físico con Ataque 120 y Velocidad 124 sobre el tipo Roca/Psíquico. Carga Cuark con Energía Potenciadora sube su Ataque de forma autónoma, y Danza Espada lo lleva a +2: en uno o dos turnos alcanza un Ataque altísimo sin depender de campo externo. Filo Potente (95, STAB Roca) es el golpe principal y además impacta aunque el rival use Protección, Espada Santa (90) ignora las subidas de Defensa del rival y golpea Acero, y Megacuerno (120, 85% preciso) cubre a Planta y Siniestro que resisten Roca. Naturaleza Alegre y reparto en Ataque y Velocidad para, tras la Danza Espada, superar la franja de 120-130; su Defensa 80 es baja, por eso el set apuesta a ganar el orden de turno y romper antes de recibir.',
      alternatives: [
        {
          slot: 'move',
          value: 'EARTHQUAKE',
          note: 'Terremoto cubre a Acero y Eléctrico, a costa de la potencia de Megacuerno contra Planta y Siniestro.',
          replaces: 'MEGAHORN'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta Elección convierte a Iron Boulder en rompemuros puro sin turno de setup, a cambio de perder Danza Espada y la flexibilidad.'
        }
      ]
    }
  ]
}

export default ironboulder
