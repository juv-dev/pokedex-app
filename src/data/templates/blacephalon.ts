import type { PokemonTemplateSet } from '../../lib/types'

const blacephalon: PokemonTemplateSet = {
  internalName: 'BLACEPHALON',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'BEASTBOOST',
      item: 'CHOICESPECS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['MINDBLOWN', 'SHADOWBALL', 'FIREBLAST', 'TRICK'],
      justification:
        'Blacephalon es un cañón de cristal: Ataque Especial 141, Velocidad 107 y PS 53 / Def 53 / Def.Esp 69, lo que lo define como rompemuros que entra, golpea y no puede sostener intercambios largos. Cabeza Sorpresa (150 de potencia, STAB Fuego, 100 de precisión) cuesta la mitad de los PS, pero con Gafas Elección ese coste se paga una vez por golpe demoledor; Bola Sombra (STAB Fantasma) y Llamarada cubren lo que el fuego no alcanza. Truco es la cuarta ranura de los sets de elección: intercambia las Gafas con el muro especial que se haya cruzado (Blissey, Chansey) y lo deja sin objeto y castigado. Ultraimpulso convierte cada KO en +1 de At.Esp., así que aunque Cabeza Sorpresa y Llamarada castiguen, cuanto más derriba, más duro golpea el siguiente. Miedosa con 252 At.Esp. / 252 Vel. maximiza el rango ofensivo manteniendo la velocidad natural alta.',
      alternatives: [
        {
          slot: 'move',
          value: 'FLAMETHROWER',
          note: 'Lanzallamas (90, 100 de precisión) es el STAB Fuego fiable para cuando Cabeza Sorpresa no puede pagar la mitad de los PS.',
          replaces: 'FIREBLAST'
        },
        {
          slot: 'move',
          value: 'PSYSHOCK',
          note: 'Psicocarga golpea contra la Defensa del rival y evita depender de Truco para dañar a los muros especiales, a cambio de perder la jugada de robo de objeto.',
          replaces: 'TRICK'
        },
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Pañuelo Elección lo convierte en revenge killer veloz sin bajar el pico de daño, renunciando al castigo de Truco contra muros.'
        }
      ]
    }
  ]
}

export default blacephalon