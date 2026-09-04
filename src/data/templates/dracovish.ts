import type { PokemonTemplateSet } from '../../lib/types'

const dracovish: PokemonTemplateSet = {
  internalName: 'DRACOVISH',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STRONGJAW',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FISHIOUSREND', 'ICEFANG', 'PSYCHICFANGS', 'CRUNCH'],
      justification:
        'Dracovish en Añil V4.13 conserva Agua/Dragón con Ataque 110 y, sobre todo, Branquibocado: un STAB de 85 que se duplica si el usuario ataca antes que el objetivo, llegando a unos 170 de potencia efectiva si golpea primero, algo que la Velocidad 75 con naturaleza Firme alcanza contra gran parte del metajuego. Branquibocado no es un movimiento de mordisco, así que Mandíbula Fuerte no lo afecta; su valor está en potenciar un 50% los tres colmillos que acompañan al STAB. Vidasfera suma otro 30% a cada golpe y, como el set es 100% físico y directo, no hay coste de recuperación que lo invalide. Colmillo Hielo (97.5 con Mandíbula Fuerte) cubre a Dragón y Volador que frenan al STAB Agua; Triturar (120 efectivo) pega a Fantasma y Psíquico; y Psicocolmillo (127.5) además derriba pantallas para despejar a muros con Reflejo o Pantalla Luz. Cabe señalar que Index Arena (la habilidad oculta) queda descartada porque el set no monta tormenta de arena propia, y Absorbe Agua solo aporta un chequeo situacional que no define el rol ofensivo.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta Elección eleva el pico de Branquibocado (x1.5) a cambio de quedarse bloqueado en un solo tipo de movimiento por turno.'
        },
        {
          slot: 'move',
          value: 'FLIPTURN',
          note: 'Viraje ejerce de pivote para recuperar momentum tras romper, cediendo la cobertura de Triturar.'
        },
        {
          slot: 'move',
          value: 'EARTHQUAKE',
          note: 'Terremoto castiga a Acero y Eléctrico que resisten Agua, a cambio de la presión de Triturar contra Fantasma.'
        },
        {
          slot: 'ability',
          value: 'WATERABSORB',
          note: 'Absorbe Agua lo vuelve un chequeo a atacantes de Agua recuperando 1/4 de PS, útil en equipos defensivos.'
        }
      ]
    }
  ]
}

export default dracovish
