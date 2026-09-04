import type { PokemonTemplateSet } from '../../lib/types'

const houndoom: PokemonTemplateSet = {
  internalName: 'HOUNDOOM',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'FLASHFIRE',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'FIREBLAST', 'DARKPULSE', 'SLUDGEBOMB'],
      justification:
        'At.Esp 110 con Velocidad 95 lo colocan como sweeper especial que necesita una subida para romper muros pero no para superar en velocidad. Golpe Bajo dobla el At.Esp y desde ahí el doble STAB Fuego/Siniestro (Llamarada y Pulso Umbrío) solo lo resiste limpio el propio Fuego con Roca o Dragón, y para eso está Bomba Lodo, que revienta a las Hadas que quieren pararlo. Absorbe Fuego es una habilidad de entrada muy real: le da inmunidad al tipo Fuego y potencia sus llamas un 50% si le lanzan uno, convirtiendo un intento de presión en un turno gratis de preparación. Vidasfera cierra los KOs que la subida deja al filo. Miedosa y 252/252 en At.Esp y Velocidad porque el plan es entrar, subir y barrer; IV de Ataque 0 para minimizar confusión y Bola Foul.',
      alternatives: [
        {
          slot: 'move',
          value: 'SUCKERPUNCH',
          note: 'Golpe Bajo (prioridad, físico desde Ataque 90) para rematar a ofensivos más rápidos y frágiles tras una subida, a cambio de la cobertura de Bomba Lodo.',
          replaces: 'SLUDGEBOMB'
        },
        {
          slot: 'move',
          value: 'WILLOWISP',
          note: 'Fuego Fatuo si se prefiere un uso más disruptivo que quema a los muros físicos que entran, a costa de la cobertura de Bomba Lodo.',
          replaces: 'SLUDGEBOMB'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'FLASHFIRE',
      item: 'CHOICESPECS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['FIREBLAST', 'DARKPULSE', 'SLUDGEBOMB', 'HEATWAVE'],
      justification:
        'Uso de ruptura inmediata sin turno de preparación: Gafas Elección sobre At.Esp 110 pega desde el primer turno lo bastante fuerte para agujerear a los muros que el set de Amago Táctico tardaría en romper. Llamarada es el disparo principal, Onda Ígnea da un botón de Fuego más fiable en precisión, Pulso Umbrío es el segundo STAB y Bomba Lodo castiga a las Hadas. Absorbe Fuego mantiene la baza defensiva de entrada. Es más predecible por el bloqueo de movimiento, por eso queda como alternativa al set con subida.',
      alternatives: [
        {
          slot: 'move',
          value: 'OVERHEAT',
          note: 'Sofoco (130) como golpe pesado puntual que baja el At.Esp tras usarlo, útil con Gafas para un pico de daño único, a cambio de la consistencia de Onda Ígnea.',
          replaces: 'HEATWAVE'
        }
      ]
    }
  ]
}

export default houndoom
