import type { PokemonTemplateSet } from '../../lib/types'

const samurott: PokemonTemplateSet = {
  internalName: 'SAMUROTT',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SHARPNESS',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'AQUACUTTER', 'SACREDSWORD', 'AQUAJET'],
      justification:
        'En Añil, Samurott es Agua/Lucha con 108 de Ataque y solo 70 de Velocidad, y su habilidad oculta Cortante sube un 50 por ciento la potencia de los movimientos cortantes. Tijera de Agua pasa de 70 a 105 de potencia efectiva, mantiene su alto índice de crítico y suma el STAB de Agua; Espada Santa cortante llega a 135 e ignora los cambios de característica del rival, castigando a los que intentan frenarlo con Rizo Defensa o Intimidación. Danza Espada aprovecha los 95 de PS y la Defensa 85 para armar un turno y dejar a Samurott golpeando a 216 de Ataque. Como su Velocidad 70 lo deja debajo del tier ofensivo, el reparto va a PS y Ataque para encajar un golpe antes de subir y para que Acua Jet, prioridad de tipo Agua, remate debilitados y revenge killers frágiles pese a la falta de Velocidad; es el único movimiento del set que Cortante no potencia. Vidasfera maximiza la presión inmediata sin encadenarlo a un movimiento como haría la Cinta Elección, algo importante en un atacante lento que necesita variar entre STAB y prioridad.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cambia el enfoque a romper de entrada sin Danza Espada: más daño desde el turno uno a cambio de quedar encerrado en un movimiento.'
        },
        {
          slot: 'move',
          value: 'NIGHTSLASH',
          note: 'Cobertura cortante para Fantasma y Psíquico, que aguantan el STAB doble; se potencia con Cortante y suele ser crítico.',
          replaces: 'AQUAJET'
        },
        {
          slot: 'move',
          value: 'XSCISSOR',
          note: 'Golpe cortante de tipo Bicho para Psíquico y Planta, potenciado por Cortante, si el equipo no necesita la prioridad de Acua Jet.',
          replaces: 'AQUAJET'
        }
      ]
    }
  ]
}

export default samurott
