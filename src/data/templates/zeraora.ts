import type { PokemonTemplateSet } from '../../lib/types'

const zeraora: PokemonTemplateSet = {
  internalName: 'ZERAORA',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'VOLTABSORB',
      item: 'CHOICEBAND',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['PLASMAFISTS', 'CLOSECOMBAT', 'KNOCKOFF', 'PLAYROUGH'],
      justification:
        'Zeraora es de los Pokémon más rápidos del formato: Velocidad 143 con Ataque 112 y PS 88 le dan el perfil de limpiador físico que gana el turno casi siempre. Puños Plasma (100, STAB Eléctrico) es el golpe principal y su firma real: convierte los movimientos de tipo Normal en Eléctricos mientras está activo. A Bocajarro (120) pega supereficaz a Acero y Roca y Carantoña (90) a Dragón, Siniestro y Lucha; Desarme castiga los cambios con robo de objeto. Cinta Elección duplica el pico de daño de cada golpe y Absorbe Elec. convierte los ataques Eléctricos rivales (incluidas Ondas Trueno) en curación del 25% de los PS, lo que le permite entrar ante usuarios de Eléctrico sin riesgo. Alegre con 252 At. / 252 Vel. deja el Ataque en 323 pero garantiza la ventaja de velocidad contra cualquier rival de hasta Velocidad 130 con naturaleza positiva, que es la única forma de competir con un perfil tan rápido.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera permite alternar movimientos con un 30% extra de daño, prescindiendo del bloqueo de la Cinta.'
        },
        {
          slot: 'move',
          value: 'BLAZEKICK',
          note: 'Patada Ígnea cubre a los tipos Planta que frenan a Zeraora, a cambio de la doble cobertura de Carantoña contra Dragón y Siniestro.',
          replaces: 'PLAYROUGH'
        },
        {
          slot: 'nature',
          value: 'ADAMANT',
          note: 'Firme sube el Ataque a 355 con la Cinta, aceptando perder la carrera contra rivales de Velocidad 130 con naturaleza positiva.'
        }
      ]
    },
    {
      role: 'pivot',
      isPrimary: false,
      confidence: 'viable',
      ability: 'VOLTABSORB',
      item: 'HEAVYDUTYBOOTS',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['VOLTSWITCH', 'PLASMAFISTS', 'CLOSECOMBAT', 'KNOCKOFF'],
      justification:
        'Variante ofensiva de pivote: Voltiocambio (70, STAB) golpea y cede el turno a un compañero, y Puños Plasma, A Bocajarro y Desarme mantienen la presión cuando toca quedarse. Botas Gruesas resuelven el único problema estructural de Zeraora, que es puro Eléctrico y por tanto débil 2x a Trampa Rocas: con botas puede reentrar una y otra vez sin pagar el 25% de PS, algo clave para un pivote que va a cambiar mucho. Absorbe Elec. sigue funcionando como red de seguridad ante Eléctrico y Onda Trueno. Es viable y no óptimo porque sin Cinta Elección ni Vidasfera el daño es sensiblemente menor y su rol pasa a depender del equipo que lo rodea, pero gana la longevidad que un limpiador con la Cinta no tiene.',
      alternatives: [
        {
          slot: 'move',
          value: 'GRASSKNOT',
          note: 'Hierba Lazo (especial, potencia según peso) es la única vía supereficaz contra Tierra, la debilidad de Zeraora, a costa de Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Ida y Vuelta da un segundo movimiento de pivote físico para cuando el rival espera Voltiocambio, renunciando a Puños Plasma.',
          replaces: 'PLASMAFISTS'
        }
      ]
    }
  ]
}

export default zeraora