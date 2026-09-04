import type { PokemonTemplateSet } from '../../lib/types'

const basculegion: PokemonTemplateSet = {
  internalName: 'BASCULEGION',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'ADAPTABILITY',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FISHIOUSREND', 'HEADSMASH', 'AQUAJET', 'FLIPTURN'],
      justification:
        'Branquibocado es la identidad en Añil V4.13: 85 de potencia que se dobla si el objetivo aún no ha actuado, y con Adaptable ("aumenta la bonificación de usar movimientos del mismo tipo x2 en lugar de x1,5") cada Branquibocado entra como STAB doble, castigando a todo lo que se incorpora por cambio o es más lento. PS 120 permite a Basculegión aguantar un golpe para poder lanzarlo, y la Cinta Elección lo convierte en rompemuros: Velocidad 78 y Firme no buscan ganar el turno, buscan que el cambio predictivo reciba el golpe. Testarazo (150, precisión 80) es la cobertura que pega limpio a tipos Fuego, Volador y Bicho que resisten Agua/Fantasma. Acua Jet (prioridad +1, STAB con Adaptable) remata rivales debilitados sin depender de la Velocidad 78, y Viraje conserva la iniciativa tras el golpe sin quedar bloqueado en Branquibocado. El reparto va a PS y Ataque porque la supervivencia es lo que garantiza el segundo Branquibocado.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Con Alegre y Pañuelo Elección supera a casi todo el tramo ofensivo y Branquibocado se dobla casi siempre, a costa de un pico de daño menor.'
        },
        {
          slot: 'ability',
          value: 'RECKLESS',
          note: 'Variante sin bloqueo: Audaz impulsa Envite Acuático y Testarazo un 20% a cambio de retroceso acumulado; exige cambiar Branquibocado por Envite Acuático.'
        },
        {
          slot: 'move',
          value: 'LASTRESPECTS',
          note: 'Homenaje Póstumo (STAB fantasma con Adaptable) escala con cada aliado debilitado y no depende de actuar primero, cediendo la cobertura roca.',
          replaces: 'HEADSMASH'
        },
        {
          slot: 'move',
          value: 'CRUNCH',
          note: 'Triturar (80, 20% de bajar Defensa) golpea Fantasma y Psíquico con precisión total, a cambio del daño puro de Testarazo.',
          replaces: 'HEADSMASH'
        }
      ]
    }
  ]
}

export default basculegion