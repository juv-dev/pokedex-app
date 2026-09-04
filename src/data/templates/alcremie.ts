import type { PokemonTemplateSet } from '../../lib/types'

const alcremie: PokemonTemplateSet = {
  internalName: 'ALCREMIE',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'WELLBAKEDBODY',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'MOONBLAST', 'STOREDPOWER', 'RECOVER'],
      justification:
        'Alcremie en Añil V4.13 tiene Def. Esp. 121 y At. Esp. 110 con doble tipo Hada, y Cuerpo Horneado convierte cualquier movimiento Fuego en un aumento masivo de Defensa: es una pared física y especial al mismo tiempo. Paz Mental sube At. Esp. y Def. Esp. mientras Poder Reserva (que empieza en 20 y crece con sus subidas a +2/+3+ de Paz Mental) se transforma en su STAB combinado; Fuerza Lunar (95) da un golpe fiable desde el turno uno y Recuperación (mitad de PS) la sostiene. Restos se suman a la cura pasiva, y la naturaleza Osada con reparto físico tapa la Defensa 75 (el lado por el que la pueden romper) mientras Cuerpo Horneado y Paz Mental blinda el resto. Es su nicho de Añil: no hay otro Hada con cura + setup + la defensa física condicional de Cuerpo Horneado.',
      alternatives: [
        {
          slot: 'move',
          value: 'MYSTICALFIRE',
          note: 'Llama Embrujada da cobertura Fuego que baja el At. Esp. rival, útil contra Acero que resiste Hada, a cambio de la escalada de Poder Reserva.',
          replaces: 'STOREDPOWER'
        },
        {
          slot: 'move',
          value: 'MISTYTERRAIN',
          note: 'Campo de Niebla inmuniza al equipo a estados durante 5 turnos, cediendo Fuerza Lunar por utilidad de equipo.',
          replaces: 'MOONBLAST'
        },
        {
          slot: 'move',
          value: 'AROMATHERAPY',
          note: 'Aromaterapia cura los estados de todo el equipo al cambiar, un papel de clérigo a cambio de Recuperación propia.',
          replaces: 'RECOVER'
        }
      ]
    }
  ]
}

export default alcremie