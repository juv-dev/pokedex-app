import type { PokemonTemplateSet } from '../../lib/types'

const maushold: PokemonTemplateSet = {
  internalName: 'MAUSHOLD',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TECHNICIAN',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['POPULATIONBOMB', 'TIDYUP', 'CRUNCH', 'UTURN'],
      justification:
        'El núcleo del set es sinérgico en Añil V4.13: Proliferación es un movimiento Normal de tipo Físico de 20 de potencia que golpea diez veces, y Experto ("potencia los movimientos que tengan una Potencia de 60 o menos x1,5") lo eleva a 30 por golpe, es decir, 300 de potencia bruta con la precisión 90 de cada impacto. Limpieza General sube Ataque y Velocidad y de paso retira las trampas propias, preparando el barrido; Crujido cubre a los tipos Fantasma, a los que el STAB Normal no puede dañar; e Ida y Vuelta cede el turno cuando el rival decide proteger o cambiar. Vidasfera maximiza el pico de daño de la ráfaga de diez golpes. Naturaleza Alegre y reparto 252 Ataque / 252 Velocidad para explotar la Velocidad 111. El set depende de acertar la cadena de Proliferación, por eso el resto de movimientos son seguros y no bloquean el turno.',
      alternatives: [
        {
          slot: 'move',
          value: 'SUPERFANG',
          note: 'Superdiente descuenta la mitad de los PS de un muro sin depender de la resistencia del rival, a cambio de la cobertura contra Fantasma.',
          replaces: 'CRUNCH'
        },
        {
          slot: 'move',
          value: 'PLAYROUGH',
          note: 'Carantoña da un golpe de tipo Hada neutral contra Lucha y Oscuro, cediendo la cobertura de crujido contra Fantasma.',
          replaces: 'CRUNCH'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta Elección sube Proliferación aún más a cambio de no poder usar Limpieza General ni salir con Ida y Vuelta.',
          replaces: 'LIFEORB'
        }
      ]
    }
  ]
}

export default maushold
