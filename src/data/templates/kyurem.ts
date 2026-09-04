import type { PokemonTemplateSet } from '../../lib/types'

const kyurem: PokemonTemplateSet = {
  internalName: 'KYUREM',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRESSURE',
      item: 'HEAVYDUTYBOOTS',
      nature: 'MODEST',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['ICEBEAM', 'EARTHPOWER', 'DRACOMETEOR', 'ROOST'],
      justification:
        'PS 125 con 130 de Ataque Especial y 90/90 de defensas dibujan un rompemuros especial que además aguanta bien. Rayo Hielo es la STAB de Hielo de castigo neutro amplísimo, Tierra Viva pega a los Acero y Fuego que la resisten, Cometa Draco es el golpe nuclear puntual y Descanso Aéreo aprovecha ese físico y esos PS para reentrar varias veces en la partida. Presión acelera el gasto de PP del rival en los duelos largos. Botas Gruesas porque su tipo Dragón/Hielo recibe un cuarto de vida de Trampa Rocas y el plan pasa por entrar repetidas veces. Modesta porque a base 95 la Velocidad no es su herramienta; el IV de Ataque a 0 minimiza confusión y Juego Sucio.',
      alternatives: [
        {
          slot: 'move',
          value: 'FOCUSBLAST',
          note: 'Onda Foco castiga a los tipos Normal y Acero puros que aguantan el resto del set.',
          replaces: 'EARTHPOWER'
        },
        {
          slot: 'move',
          value: 'DRAGONPULSE',
          note: 'Pulso Dragón como STAB de Dragón estable si no se quiere la bajada de Ataque Especial de Cometa Draco.',
          replaces: 'DRACOMETEOR'
        },
        {
          slot: 'nature',
          value: 'TIMID',
          note: 'Miedosa para adelantar a la banda de bases 90 a costa de algo de potencia.'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'PRESSURE',
      item: 'CHOICESPECS',
      nature: 'MODEST',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['ICEBEAM', 'FREEZEDRY', 'EARTHPOWER', 'DRACOMETEOR'],
      justification:
        'Lectura de máxima potencia de salida: Gafas Elección sobre Ataque Especial 130 convierten cualquier golpe en una amenaza que fuerza cambios. La combinación Rayo Hielo más Liofilización es clave, porque Liofilización es supereficaz contra el tipo Agua y así los muros de Agua voluminosos dejan de ser un cambio seguro. Tierra Viva y Cometa Draco completan la cobertura. Es viable y no óptima frente al set con Botas y Descanso Aéreo porque el bloqueo de Gafas y la debilidad a Trampa Rocas limitan cuántas veces puede volver a entrar.',
      alternatives: [
        {
          slot: 'move',
          value: 'DRAGONPULSE',
          note: 'Pulso Dragón si se prefiere una STAB de Dragón repetible sin la penalización de Cometa Draco.',
          replaces: 'DRACOMETEOR'
        }
      ]
    }
  ]
}

export default kyurem
