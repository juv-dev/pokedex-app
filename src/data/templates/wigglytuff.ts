import type { PokemonTemplateSet } from '../../lib/types'

const wigglytuff: PokemonTemplateSet = {
  internalName: 'WIGGLYTUFF',
  templates: [
    {
      role: 'cleric',
      isPrimary: true,
      confidence: 'viable',
      ability: 'MISTYSURGE',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['WISH', 'PROTECT', 'HEALBELL', 'MOONBLAST'],
      justification:
        'Wigglytuff en Añil V4.13 tiene PS 140 pero Defensas 60/60, así que su volumen efectivo es medio pese al número alto de PS. Su nicho real es el de clérigo: en Añil Deseo restaura la mitad de los PS máximos del usuario al compañero que ocupe su posición el turno siguiente, y con PS 140 esa cifra es el pase de cura más grande que puede ofrecer la línea. Deseo más Protección asegura ese pase y su propia recuperación, y Cascabel Cura limpia estados de todo el equipo. Nebulogénesis como habilidad oculta ("crea un campo de niebla al entrar en combate") añade valor de apoyo: mientras dure, el equipo a ras de suelo no puede ser dormido, paralizado ni envenenado y el daño de Dragón se reduce. Fuerza Lunar es el único ataque, para no ser cebo total de Mofa y castigar a Dragón y Lucha. Reparto en PS y Def.Esp. con Serena porque el lado físico ya es indefendible y conviene resistir al menos el especial. Es "viable" y no "óptimo" porque sus defensas bajas le impiden entrar con seguridad a montar el Deseo contra equipos ofensivos.',
      alternatives: [
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Trampa Rocas si el equipo necesita quien las coloque y ya tiene otra fuente de cura; se cede la limpieza de estados de Cascabel Cura.',
          replaces: 'HEALBELL'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Onda Trueno mengua a un rival para compensar la Velocidad 45, a cambio del ataque de Fuerza Lunar.',
          replaces: 'MOONBLAST'
        }
      ]
    }
  ]
}

export default wigglytuff
