import type { PokemonTemplateSet } from '../../lib/types'

const chiyu: PokemonTemplateSet = {
  internalName: 'CHIYU',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'BEADSOFRUIN',
      item: 'CHOICESPECS',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FIREBLAST', 'DARKPULSE', 'FLAMETHROWER', 'PSYCHIC'],
      justification:
        'Chi-Yu es un barrelight especial con Ataque Especial 135 y Velocidad 100, pero con PS 55 y Defensas 80 hace un solo golpear bien. Su habilidad Abalorio Debacle reduce la Defensa Especial de todos los demás Pokémon, así que cada golpe especial pega contra muros ya rebajados sin necesidad de setup. Gafas Elección multiplican por 1,5 el At. Esp. sobre esa penetración ya garantizada por la habilidad: no se logra más con un turno de Maquinación porque el único coste asumible es la fragilidad de no poder recibir golpes. Llamarada (110) es el STAB de Fuego de máxima potencia y llama al rival en el contacto, Pulso Siniestro es el STAB Siniestro preciso, Lanzallamas ofrece un STAB de Fuego fiable para no depender de la precisión 85, y Psíquico cubre a Lucha y Veneno que resisten el par Fire/Dark. Naturaleza Miedosa con reparto en At. Esp. y Velocidad: a 100 de base supera al grueso de muros y threatens, y su fragilidad hace que el orden de turno importe más que sus 80 de Defensa.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera habilita el set de Maquinación (setup) sin el bloqueo de Gafas, a costa de perder 10% de PS por golpe y ser aún más frágil.'
        },
        {
          slot: 'move',
          value: 'OVERHEAT',
          note: 'Sofoco da un STAB de Fuego de 130 como opción de cierre, reemplazando la fiabilidad de Lanzallamas por potencia bruta.',
          replaces: 'FLAMETHROWER'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'BEADSOFRUIN',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'FIREBLAST', 'DARKPULSE', 'PSYCHIC'],
      justification:
        'Variante de barrer por acumulación que suma Maquinación (+2 At. Esp.) al descuento de Defensa Especial de Abalorio Debacle, llegando en un turno a un pico de daño muy alto. Es viable y no óptimo porque la fragilidad de PS 55 / Def 80 hace difícil ganar el turno de setup frente a cualquier atacante, y Vidasfera añade desgaste propio; el set de Gafas Elección consigue la misma penetración sin exponerse dos turnos, por lo que esta forma queda como opción de equipos con pantallas o con un cambio bien predicho.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Pañuelo Elección lo adelanta frente a la franja de 100-110 de Velocidad, renunciando a la flexibilidad del setup.'
        }
      ]
    }
  ]
}

export default chiyu
