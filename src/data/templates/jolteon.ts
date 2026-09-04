import type { PokemonTemplateSet } from '../../lib/types'

const jolteon: PokemonTemplateSet = {
  internalName: 'JOLTEON',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'viable',
      ability: 'VOLTABSORB',
      item: 'CHOICESPECS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['THUNDERBOLT', 'VOLTSWITCH', 'SHADOWBALL', 'SIGNALBEAM'],
      justification:
        'Jolteon en Añil V4.13 tiene Velocidad 130 y At. Esp. 110, un barredor especial que entra por encima de casi todo el metajuego. Gafas Elección convierte Rayo en una amenaza inmediata de 2HKO generalizado, Voltiocambio mantiene el ritmo y le permite salir cuando el rival trae a un tipo Tierra, que es inmune a su STAB. Bola Sombra y Rayo Señal son la única cobertura razonable que le queda en Añil: alcanzan a Fantasma, Psíquico y Siniestro. Absorbe Elec. le da inmunidad y curación frente a los ataques eléctricos, útil como cambio seguro. Naturaleza Miedosa y reparto máximo en At. Esp. y Velocidad; su fragilidad (PS 65 / Def 60) es el precio de esa Velocidad.',
      alternatives: [
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Botas Gruesas lo estabilizan como pivote de Voltiocambio a largo plazo, ignorando Trampa Rocas, a cambio de la potencia inmediata de las Gafas.'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera da libertad para cambiar de movimiento entre Rayo, cobertura y Voltiocambio, a cambio del retroceso de PS por ataque.'
        },
        {
          slot: 'move',
          value: 'ALLURINGVOICE',
          note: 'Voz Cautivadora añade daño de tipo Hada contra Dragón, Siniestro y Lucha, alternativa a la cobertura de Bicho de Rayo Señal.',
          replaces: 'SIGNALBEAM'
        }
      ]
    }
  ]
}

export default jolteon
