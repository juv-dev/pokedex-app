import type { PokemonTemplateSet } from '../../lib/types'

const drednaw: PokemonTemplateSet = {
  internalName: 'DREDNAW',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SWIFTSWIM',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['RAINDANCE', 'SWORDSDANCE', 'LIQUIDATION', 'CRUNCH'],
      justification:
        'El set óptimo de Drednaw en Añil V4.13 es el de sweeper físico bajo lluvia autosuficiente: Nado Rápido duplica la Velocidad mientras llueva, y Danza Lluvia se la pone él mismo sin depender de un compañero de clima; con la Velocidad base 74 duplicada y naturaleza Firme, Drednaw se adelanta a casi todo el tier sin renunciar al Ataque 115. Danza Espada eleva ese Ataque a niveles de KO en un turno, Hidroariete (85, STAB, con probabilidad de bajar la Defensa rival) es el golpe de cierre, y Triturar cubre a Fantasma y Psíquico, los tipos que resisten lo demás. Vidasfera potencia los tres golpes. Firme con 252 Ataque / 252 Velocidad: la prioridad es limpiar, no aguantar, aunque PS 90 y Defensa 90 le dan margen para sobrevivir el turno de preparación si entra con buen read.',
      alternatives: [
        {
          slot: 'move',
          value: 'ICESPINNER',
          note: 'Pirueta Helada golpea a Planta y Dragón que frenan la lluvia, cediendo la cobertura contra Fantasma y Psíquico.',
          replaces: 'CRUNCH'
        },
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Alegre maximiza la Velocidad duplicada para superar incluso a los máximos de Velocidad base 115, a costa de potencia.'
        },
        {
          slot: 'ability',
          value: 'STRONGJAW',
          note: 'Mandíbula Fuerte habilita el rompemuros con Cinta Elección de la segunda plantilla para equipos sin lluvia.'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'STRONGJAW',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['LIQUIDATION', 'CRUNCH', 'ICEFANG', 'FLIPTURN'],
      justification:
        'Segundo rol viable que no depende del clima: Mandíbula Fuerte potencia los movimientos de mordisco un 50%, así que Triturar pega como un movimiento de 120 de potencia y Colmillo Hielo como uno de 97,5, mientras Hidroariete mantiene el STAB Agua fiable y Viraje preserva el momentum al salir, algo clave para un usuario de Cinta Elección. Con Cinta Elección y Ataque 115, Drednaw rompe muros físicos y especiales por igual; la Velocidad 74 es modesta, por eso es rompemuros y no sweeper. La cobertura Agua/Siniestro/Hielo deja a casi todo el tier con al menos un golpe neutro o mejor.',
      alternatives: [
        {
          slot: 'move',
          value: 'JAWLOCK',
          note: 'Presa Maxilar atrapa al objetivo con 120 de potencia potenciado por Mandíbula Fuerte, cediendo la cobertura de Colmillo Hielo.',
          replaces: 'ICEFANG'
        },
        {
          slot: 'move',
          value: 'MEGAHORN',
          note: 'Megacuerno (120, STAB Bicho) castiga a Psíquico y Planta que resisten la cobertura actual.',
          replaces: 'ICEFANG'
        }
      ]
    }
  ]
}

export default drednaw