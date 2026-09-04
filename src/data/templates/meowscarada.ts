import type { PokemonTemplateSet } from '../../lib/types'

const meowscarada: PokemonTemplateSet = {
  internalName: 'MEOWSCARADA',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PROTEAN',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FLOWERTRICK', 'KNOCKOFF', 'UTURN', 'TRIPLEAXEL'],
      justification:
        'Truco Floral es la firma en Añil V4.13: 70 de potencia, nunca falla y siempre es crítico; con Mutatipo ("cambia su tipo al del movimiento que va a usar") cada Truco Floral entra como STAB Planta y el crítico constante ignora los aumentos defensivos del rival y la reducción de Ataque por quemadura. Ataque 110 y Velocidad 123 lo colocan en el tramo ofensivo alto, y la Vidasfera eleva el pico de daño. Desarme quita el objeto y golpea Fantasma y Psíquico; Triple Axel cubre Volador, Dragón y Planta que resisten el dúo Planta/Siniestro; Ida y Vuelta mantiene el momentum cuando el matchup no favorece. Alegre y 252 de Velocidad para ganar el duelo contra el tramo 110-120. Espesura queda descartada porque el set no se plantea jugar al 33% de PS.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta Elección convierte Truco Floral en un cañonazo bloqueado: más pico de daño, menos flexibilidad para pivotar.'
        },
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Banda Aguante reserva el daño de la Vidasfera y garantiza un golpe más contra revengers rápidos, a cambio de pico de poder.'
        },
        {
          slot: 'move',
          value: 'PLAYROUGH',
          note: 'Carantoña pega a Lucha, Dragón y Siniestro con 90 de potencia y baja el Ataque rival, cediendo la cobertura de Triple Axel contra Planta y Volador.',
          replaces: 'TRIPLEAXEL'
        },
        {
          slot: 'move',
          value: 'SUCKERPUNCH',
          note: 'Golpe Bajo (prioridad +1, STAB con Mutatipo) remata a rivales más rápidos, a cambio de la utilidad de pivot de Ida y Vuelta.',
          replaces: 'UTURN'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'PROTEAN',
      item: 'FOCUSSASH',
      nature: 'JOLLY',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'FLOWERTRICK', 'KNOCKOFF', 'TRIPLEAXEL'],
      justification:
        'Cierre de partida: Danza Espada a +2 convierte Truco Floral en un STAB crítico que ignora las defensas potenciadas, y la Banda Aguante garantiza el turno de mejora contra un rival más rápido. Mutatipo mantiene la relevancia de Desarme y Triple Axel tras el seteo, y la Velocidad 123 con Alegre significa que apenas hay respuesta de prioridad que no sea de rango superior. Es viable y no óptimo porque el turno de Danza Espada depende de la Banda para no morir antes de golpear, mientras el set de cuatro ataques presiona desde el primer turno sin condición.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera potencia el barrido tras Danza Espada a costa de que la mejora dependa de predecir bien el cambio rival.'
        },
        {
          slot: 'move',
          value: 'SUCKERPUNCH',
          note: 'Golpe Bajo blinda el barrido contra prioridad rival, cediendo la cobertura de Triple Axel.',
          replaces: 'TRIPLEAXEL'
        }
      ]
    }
  ]
}

export default meowscarada