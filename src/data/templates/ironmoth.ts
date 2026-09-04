import type { PokemonTemplateSet } from '../../lib/types'

const ironmoth: PokemonTemplateSet = {
  internalName: 'IRONMOTH',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'QUARKDRIVE',
      item: 'BOOSTERENERGY',
      nature: 'TIMID',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FIERYDANCE', 'SLUDGEWAVE', 'BUGBUZZ', 'ENERGYBALL'],
      justification:
        'Iron Moth es un barredor especial de tipo Fuego/Veneno con el SpA 140 más alto del grupo en Añil V4.13 y Velocidad 110. Danza Llama es el STAB Fuego que además tiene 50% de subir el At.Esp., convirtiendo cada golpe en una posible escalada ofensiva que Carga Cuark (activada por el Tanque de Energía Potenciadora) ya ha reforzado. Onda Tóxica y Zumbido completan la cobertura STAB contra Hada y Planta, y Energibola pega a los Agua/Roca que apagan Fuego. La naturaleza Miedosa con 252 en Velocidad supera la base 100 y su PS 80 le da más margen que otros cristales ofensivos para montar la Danza.',
      alternatives: [
        {
          slot: 'move',
          value: 'OVERHEAT',
          note: 'Sofoco da 130 de potencia inmediata a costa de bajar At.Esp. dos niveles, remate que se quema al terminar en lugar de acumular.',
          replaces: 'FIERYDANCE'
        },
        {
          slot: 'move',
          value: 'TOXICSPIKES',
          note: 'Púas Tóxicas lo convierten en colocador de veneno, rol de utilidad a costa de un ataque.',
          replaces: 'ENERGYBALL'
        },
        {
          slot: 'move',
          value: 'DAZZLINGGLEAM',
          note: 'Brillo Mágico cubre al tipo Dragón con golpe limpio además de su propia ventaja, a cambio de la cobertura de Energibola.',
          replaces: 'ENERGYBALL'
        }
      ]
    }
  ]
}

export default ironmoth
