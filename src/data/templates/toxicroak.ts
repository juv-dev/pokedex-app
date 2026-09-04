import type { PokemonTemplateSet } from '../../lib/types'

const toxicroak: PokemonTemplateSet = {
  internalName: 'TOXICROAK',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'DRYSKIN',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'DRAINPUNCH', 'POISONJAB', 'SUCKERPUNCH'],
      justification:
        'Ataque 106 y Velocidad 90. Piel Seca da inmunidad total al tipo Agua y recupera un 25% de PS con él, lo que le regala cambios seguros frente a buena parte de la metagame para instalar Danza Espada. Puño Drenaje devuelve PS y compensa el retroceso de Vidasfera; Puño Veneno castiga a las Hada; Golpe Bajo, con prioridad +1, cubre la Velocidad 90 justa y remata Psíquico, Fantasma y rivales más rápidos. Alegre para el tope de Velocidad. Bajo lluvia, Piel Seca en cambio le drena PS cada turno, así que el set rinde mejor fuera de ese clima.',
      alternatives: [
        {
          slot: 'move',
          value: 'GUNKSHOT',
          note: 'Potencia sobre la precisión de Puño Veneno cuando fallar no es asumible.',
          replaces: 'POISONJAB'
        },
        {
          slot: 'move',
          value: 'ICEPUNCH',
          note: 'Contra Volador y Tierra que ignoran el STAB de Lucha y Veneno.',
          replaces: 'SUCKERPUNCH'
        },
        {
          slot: 'move',
          value: 'CLOSECOMBAT',
          note: 'Daño máximo de Lucha si no se necesita la recuperación de Puño Drenaje.',
          replaces: 'DRAINPUNCH'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'DRYSKIN',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'VACUUMWAVE', 'SLUDGEWAVE', 'DARKPULSE'],
      justification:
        'Ataque Especial 86 con acceso a Maquinación. Onda Vacío da prioridad +1 en el flanco especial y Onda Tóxica más Pulso Umbrío completan la cobertura. Alternativa viable frente a equipos con muros físicos que ignoran el set de Danza Espada; la inmunidad a Agua de Piel Seca sigue aportando los turnos de instalación. El IV de Ataque en 0 reduce el daño de confusión.',
      alternatives: [
        {
          slot: 'move',
          value: 'FOCUSBLAST',
          note: 'Más potencia de Lucha a distancia si no se necesita la prioridad de Onda Vacío.',
          replaces: 'VACUUMWAVE'
        }
      ]
    }
  ]
}

export default toxicroak
