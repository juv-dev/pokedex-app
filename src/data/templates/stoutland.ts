import type { PokemonTemplateSet } from '../../lib/types'

const stoutland: PokemonTemplateSet = {
  internalName: 'STOUTLAND',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SANDRUSH',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['RETURN', 'SUPERPOWER', 'CRUNCH', 'PLAYROUGH'],
      justification:
        'Stoutland tiene 110 de Ataque y 80 de Velocidad, y su habilidad Ímpetu Arena duplica su Velocidad mientras haya tormenta de arena, dejándolo cerca de 320 puntos efectivos y por encima de casi todo el tier sin necesidad de un Pañuelo Elección. Por eso el rol es sweeper de equipo de arena y pide un invocador como Gigalith, Tyranitar o Hippowdon en el equipo. Retorno es el STAB normal fiable de 102 de potencia; Fuerza Bruta rompe a los Roca y Acero que resisten Normal y a los Siniestro; Triturar cubre a los Fantasma que son inmunes a Retorno; Carantoña castiga a Lucha, Dragón y Siniestro sin bajar las características propias. Naturaleza Alegre para conservar el Ataque completo, ya que la duplicación de Velocidad hace innecesario invertir más allá del máximo. Vidasfera sube el daño de cada golpe y permite cambiar de objetivo turno a turno, algo que la Cinta Elección impediría.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Máxima potencia de entrada cuando la arena ya cubre la Velocidad; a cambio queda encerrado en un movimiento.'
        },
        {
          slot: 'move',
          value: 'FIREFANG',
          note: 'Cobertura de fuego para Acero y Planta que aguantan el resto del set, con opción de quemar o amedrentar.',
          replaces: 'PLAYROUGH'
        },
        {
          slot: 'move',
          value: 'WILDCHARGE',
          note: 'Golpea a los Agua y Volador que frenan a la arena, a costa de un cuarto del daño como retroceso.',
          replaces: 'PLAYROUGH'
        }
      ]
    }
  ]
}

export default stoutland
