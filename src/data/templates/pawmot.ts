import type { PokemonTemplateSet } from '../../lib/types'

const pawmot: PokemonTemplateSet = {
  internalName: 'PAWMOT',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'IRONFIST',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CLOSECOMBAT', 'THUNDERPUNCH', 'MACHPUNCH', 'UTURN'],
      justification:
        'El perfil de Añil V4.13 hace de Pawmot un barredor físico de Velocidad 105 que además tiene prioridad: Ataque 115 con Velocidad 105 lo colocan en el tramo ofensivo, y Puño Férreo ("aumenta la potencia de los movimientos basados en puños en un 20%") convierte a Puño Trueno en un STAB Eléctrico de 90 de potencia y a Ultrapuño en una prioridad +1 de 48 que remata objetivos frágiles sin depender del orden de turnos. A Bocajarro es el golpe Lucha de máxima potencia, e Ida y Vuelta mantiene el momentum tras el remate. Cuerpo Puro es descartable frente a Absorbe Elec., que da inmunidad y curación contra el tipo Eléctrico, pero Puño Férreo es el núcleo: sin él el set pierde el doble boost sobre Ultrapuño y Puño Trueno. Vidasfera maximiza el pico de daño. Naturaleza Alegre y reparto en Ataque y Velocidad para superar a la competencia de la misma franja.',
      alternatives: [
        {
          slot: 'move',
          value: 'ICEPUNCH',
          note: 'Puño Hielo (también potenciado por Puño Férreo) cubre a Tierra, Dragón y Volador que frenan el tipo Eléctrico, a cambio de la salida de Ida y Vuelta.',
          replaces: 'UTURN'
        },
        {
          slot: 'move',
          value: 'WILDCHARGE',
          note: 'Carga Salvaje da un STAB Eléctrico de 90 sin depender de Puño Férreo, pero tiene retroceso y pierde la prioridad.',
          replaces: 'MACHPUNCH'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta Elección sube aún más el pico de daño a cambio de quedar bloqueado en un movimiento y perder el remate flexible de Ultrapuño.',
          replaces: 'LIFEORB'
        }
      ]
    }
  ]
}

export default pawmot
