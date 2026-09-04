import type { PokemonTemplateSet } from '../../lib/types'

const ambipom: PokemonTemplateSet = {
  internalName: 'AMBIPOM',
  templates: [
    {
      role: 'pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TECHNICIAN',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FAKEOUT', 'RETURN', 'KNOCKOFF', 'UTURN'],
      justification:
        'Velocidad 115 y Experto son la identidad de Ambipom. Experto sube 50% los movimientos de 60 o menos de potencia: Finta (Fake Out, 40 a 60) hace un chip de prioridad +3 al entrar y rompe Banda Aguante y Robustez ajenas antes de pivotar. Retorno es el STAB principal (102, Experto no lo toca pero pega parejo), Desarme quita el objeto y castiga a Fantasma y Psíquico, Ida y Vuelta mantiene el momentum. Vidasfera para cerrar KO; Alegre para no perder la carrera de Velocidad. Encadenado (oculta) abre una línea distinta basada en multigolpes; Recogida no aporta.',
      alternatives: [
        {
          slot: 'move',
          value: 'LOWKICK',
          note: 'Pega a Normal, Roca y Acero pesados que aguantan tu STAB; Experto no lo sube, pero cubre huecos.',
          replaces: 'RETURN'
        },
        {
          slot: 'move',
          value: 'DOUBLEEDGE',
          note: 'Más potencia (120) a cambio de retroceso sobre un cuerpo frágil.',
          replaces: 'RETURN'
        },
        {
          slot: 'move',
          value: 'SEEDBOMB',
          note: 'Cobertura de Planta a Agua, Roca y Tierra.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Rompedor; conservá Ida y Vuelta como salida para no quedar bloqueado.'
        },
        {
          slot: 'ability',
          value: 'SKILLLINK',
          note: 'Encadenado garantiza los 3 golpes de Triple Axel (cobertura de Hielo escalante) y los máximos de Doble Golpe; cambia el enfoque a multigolpes.'
        }
      ]
    }
  ]
}

export default ambipom
