import type { PokemonTemplateSet } from '../../lib/types'

const golbat: PokemonTemplateSet = {
  internalName: 'GOLBAT',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'viable',
      ability: 'INFILTRATOR',
      item: 'EVIOLITE',
      nature: 'CAREFUL',
      evs: [248, 0, 8, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BRAVEBIRD', 'ROOST', 'DEFOG', 'UTURN'],
      justification:
        'Golbat todavía evoluciona a Crobat, así que puede equipar Mineral Evolutivo ("aumenta la Defensa y la Defensa Especial del portador si aún puede evolucionar"). Con ese objeto sus Defensas 70/75 pasan a un nivel de muro real sobre PS 75, y la Velocidad 100 lo mantiene por delante de buena parte del metajuego pese al perfil defensivo: es la base del nicho de Golbat como pivote defensivo con Mineral Evolutivo, un uso reconocido pese a estar por debajo de Crobat en potencia bruta. El tipo Veneno/Vuelo aporta inmunidad a Tierra y a estados de Tóxico y resistencias útiles a Lucha, Bicho y Planta. Despejar retira trampas de ambos lados, Vuelo permite recuperar los PS, Pájaro Osado da un golpe de STAB serio para no ser cebo de Mofa y Ida y Vuelta mantiene el momentum. Allanamiento ("ataca rodeando la barrera o el sustituto del rival") evita que un Sustituto rival frene el pivoteo. Es "viable" y no "óptimo" porque Crobat existe y porque sin recuperación instantánea de objeto Golbat depende del turno de Vuelo para sostenerse.',
      alternatives: [
        {
          slot: 'move',
          value: 'TAUNT',
          note: 'Mofa frena a rivales defensivos, trampas y recuperación; se cede el STAB inmediato de Pájaro Osado y su retroceso.',
          replaces: 'BRAVEBIRD'
        },
        {
          slot: 'move',
          value: 'HAZE',
          note: 'Niebla borra los cambios de característica de un setup sweeper que intente montar encima, a cambio de la utilidad de retirada de trampas de Despejar.',
          replaces: 'DEFOG'
        },
        {
          slot: 'nature',
          value: 'BOLD',
          note: 'Osada con reparto físico defensivo si el equipo necesita frenar atacantes físicos concretos en lugar del lado especial.'
        }
      ]
    }
  ]
}

export default golbat
