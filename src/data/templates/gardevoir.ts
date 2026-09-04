import type { PokemonTemplateSet } from '../../lib/types'

const gardevoir: PokemonTemplateSet = {
  internalName: 'GARDEVOIR',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TRACE',
      item: 'CHOICESPECS',
      nature: 'MODEST',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['MOONBLAST', 'PSYSHOCK', 'FOCUSBLAST', 'MYSTICALFIRE'],
      justification:
        'Ataque Especial 125 y Def. Esp. 115 definen a un rompemuros especial con volumen especial aceptable, mientras que la Velocidad 80 lo deja por debajo del tier veloz y explica el objeto fijo en lugar de una naturaleza ofensiva con Orbe Vida o setup. Con tipo Psíquico/Hada, Espejo Lunar es el STAB principal y Fuerza Psíquica castiga a los muros especiales al golpear su Defensa. Onda Certera es la respuesta a los Acero y Siniestro que frenan ambos STAB, y Llama Embrujada añade un objetivo más fiable contra Acero además de bajar el Ataque Especial rival. Calco copia la habilidad de un rival al entrar, lo que puede dar ventaja situacional como una inmunidad o Intimidación, y no tiene coste si no hay nada útil que copiar. Modesta maximiza el daño porque su Velocidad no compite con la de los sweepers reales.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Convierte la Velocidad 80 en un revenge fiable a cambio de potencia inmediata.'
        },
        {
          slot: 'move',
          value: 'THUNDERBOLT',
          note: 'Cobertura para Agua y Volador voluminosos a cambio del golpe seguro contra Acero.',
          replaces: 'MYSTICALFIRE'
        },
        {
          slot: 'nature',
          value: 'TIMID',
          note: 'Emparejada o supera a otras bases 80 y a amenazas justo por encima, cediendo daño.'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'TRACE',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'MOONBLAST', 'PSYSHOCK', 'MYSTICALFIRE'],
      justification:
        'Con Velocidad 80 Gardevoir no barre desde el turno uno, pero Paz Mental aprovecha su Def. Esp. 115 para volverse difícil de tumbar por el lado especial mientras escala su Ataque Especial. Orbe Vida cubre la potencia que se pierde al no llevar Gafas, y el resto del set mantiene la cobertura de Acero y Siniestro con Fuerza Psíquica y Llama Embrujada. Es un uso secundario que exige quitar antes las amenazas de prioridad y los rompemuros físicos, ya que su volumen físico es bajo.',
      alternatives: [
        {
          slot: 'move',
          value: 'DRAININGKISS',
          note: 'STAB de Hada con recuperacion que alarga la condicion de wincon, a costa de la cobertura de Acero.',
          replaces: 'MYSTICALFIRE'
        }
      ]
    }
  ]
}

export default gardevoir
