import type { PokemonTemplateSet } from '../../lib/types'

const toxapex: PokemonTemplateSet = {
  internalName: 'TOXAPEX',
  templates: [
    {
      role: 'stall',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'REGENERATOR',
      item: 'BLACKSLUDGE',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['TOXIC', 'RECOVER', 'HAZE', 'KNOCKOFF'],
      justification:
        'Toxapex en Añil V4.13 es una de las paredes más puras del juego: con PS 50, At. Esp. 53 y Velocidad 35, lo que importa son las Defensas 152 y 142, las más altas del grupo, y su kit de desgaste. Tóxico envenena mal de forma fiable y castiga a cualquier muro que intente quedarse; Recuperación restaura la mitad de los PS y es lo que hace inderribable al ciclo; Niebla resetea los cambios de estadísticas de ambos lados, así que los setup sweepers que suben con Danza Aleteo, Paz Mental o Corpulencia pierden todo el trabajo sin necesidad de adivinar; Desarme elimina el objeto del rival y castiga los cambios de entrada. Regeneración ("recupera 1/3 de sus PS máximos cuando vuelve a su Pokéball") convierte cada cambio en curación gratuita y hace que Toxapex pivote sin gastar Recuperación, y el tipo Veneno anula el propio Tóxico del rival y los envenenamientos directos. Lodo Negro añade 1/16 de curación por turno y, si un rival no Veneno se lo lleva con Desarme o Ladrón, sufre el daño del lodo. Osada maximiza la Defensa 152, que junto a la inversión en PS 252 crea la asimetría: aguanta golpes físicos de bandera mientras la Def. Esp. 142 de base absorbe el lado especial sin invertir. IV de Velocidad a 0 para atacar primero bajo Espacio Raro rival.',
      alternatives: [
        {
          slot: 'move',
          value: 'TOXICSPIKES',
          note: 'Púas Tóxicas envenenan a todo rival que entre sin depender de precisión, ideal en equipos de desgaste, cediendo el bucle de control de Niebla.',
          replaces: 'HAZE'
        },
        {
          slot: 'move',
          value: 'BANEFULBUNKER',
          note: 'Búnker además de proteger envenena al atacante de contacto, encajando con el patrón defensivo del muro, a cambio de la utilidad de Desarme.',
          replaces: 'KNOCKOFF'
        }
      ]
    },
    {
      role: 'wall-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'MERCILESS',
      item: 'BLACKSLUDGE',
      nature: 'RELAXED',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 0, 31, 31, 31, 0],
      moves: ['RECOVER', 'TOXIC', 'VENOSHOCK', 'HAZE'],
      justification:
        'Variante que explota Ensañamiento ("los movimientos asesten siempre un golpe crítico si el rival está envenenado") para que un muro de 53 de At. Esp. castigue de verdad: Tóxico envenena y Carga Tóxica (65, que dobla a 130 contra envenenado) golpea con crítico garantizado el lado físico, ignorando los aumentos de Def. Esp. del rival. Recuperación y Niebla conservan la función de pared y el freno a setup, y Plácida con IV de Velocidad a 0 mantiene el orden bajo Espacio Raro. Es "viable" y no "óptimo": sin Regenerador Toxapex pierde la curación al cambiar, el crítico garantizado no compensa la base ofensiva baja y el set depende de envenenar antes de atacar, un turno que un muro rival puede aprovechar.',
      alternatives: [
        {
          slot: 'ability',
          value: 'REGENERATOR',
          note: 'Devuelve la sostenibilidad al pivotar, pero sin Ensañamiento Venodulación queda en un 65 de potencia sin la sinergia con el veneno.'
        },
        {
          slot: 'move',
          value: 'SLUDGEWAVE',
          note: 'Onda Tóxica (95) daña duro y envenena con probabilidad, ampliando el daño base a cambio de depender menos del crítico y perder un chequeo directo a setup.',
          replaces: 'HAZE'
        }
      ]
    }
  ]
}

export default toxapex