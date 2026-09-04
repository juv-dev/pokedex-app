import type { PokemonTemplateSet } from '../../lib/types'

const ampharos: PokemonTemplateSet = {
  internalName: 'AMPHAROS',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'viable',
      ability: 'STATIC',
      item: 'LEFTOVERS',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['VOLTSWITCH', 'THUNDERBOLT', 'FOCUSBLAST', 'DRAGONPULSE'],
      justification:
        'Ampharos monotipo Eléctrico tiene PS 90 y defensas 85/90 con Ataque Especial 115, pero Velocidad 55 y sin recuperación fiable (solo Descanso). El uso realista es de rompemuros lento con pivoteo: Voltiocambio pega y cede el turno con ventaja, Rayo es el STAB principal, Onda Certera y Pulso Dragón cubren a los Tierra, Dragón y Roca que frenan al tipo Eléctrico. Restos y su volumen natural le permiten entrar varias veces pese a no curarse. Electricidad Estática castiga con parálisis a quien lo golpee por contacto. Naturaleza Modesta y máximo Ataque Especial porque su velocidad es causa perdida y su valor está en el daño por cambio.',
      alternatives: [
        {
          slot: 'move',
          value: 'HEALBELL',
          note: 'Tañido aporta utilidad de clérigo al equipo, sacrificando la cobertura de Pulso Dragón.',
          replaces: 'DRAGONPULSE'
        },
        {
          slot: 'move',
          value: 'POWERGEM',
          note: 'Joya de Luz es cobertura fiable al 100 % de precisión contra Fuego, Hielo y Volador, frente al 70 % de Onda Certera.',
          replaces: 'FOCUSBLAST'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Gafas Especiales lo vuelven un rompemuros por cambio mucho más explosivo a cambio de quedar bloqueado en un movimiento.'
        }
      ]
    }
  ]
}

export default ampharos
