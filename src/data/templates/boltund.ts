import type { PokemonTemplateSet } from '../../lib/types'

const boltund: PokemonTemplateSet = {
  internalName: 'BOLTUND',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STRONGJAW',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['THUNDERFANG', 'CRUNCH', 'PSYCHICFANGS', 'FIREFANG'],
      justification:
        'Boltund tiene una de las Velocidades más altas de su rango (121) y Mandíbula Fuerte convierte sus colmillos en el set óptimo: Colmillo Rayo pasa de 65 a 97,5 de potencia y con el STAB Eléctrico rinde más que Voltio Cruel (90) sin pagar retroceso, con 10% de parálisis de regalo; Psicocolmillo (85 potenciado a 127,5) además rompe pantallas; Colmillo Ígneo (97,5 efectivos) cubre Acero, Planta y Hielo; Triturar (120 efectivos) cierra contra Fantasma y Psíquico. Los cuatro ataques se benefician de la misma habilidad, por eso la mezcla es mejor que los STAB eléctricos puros: es un cleaner que entra a final de partida y no deja muro sano. Alegre con 252 Ataque / 252 Velocidad para ganar el duelo de velocidad contra los máximos de base 115 o menos, y Vidasfera potencia cada mordisco.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta Elección eleva el pico de daño para romper muros, a costa de quedar bloqueado al no llevar movimiento de pivote.'
        },
        {
          slot: 'move',
          value: 'VOLTSWITCH',
          note: 'Voltiocambio convierte al cleaner en pivote frente a chequeos mal predichos, cediendo la cobertura de Colmillo Ígneo.',
          replaces: 'FIREFANG'
        }
      ]
    },
    {
      role: 'sweeper-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'COMPETITIVE',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['ELECTRICTERRAIN', 'RISINGVOLTAGE', 'THUNDERBOLT', 'HYPERVOICE'],
      justification:
        'Variante especial viable que castiga al meta de merma de características: Tenacidad sube el Ataque Especial dos niveles por cada reducción que intente sufrir, así que un Intimidación al cambiar o un movimiento que baje stats la activan gratis y convierten el intento de menguarlo en un potenciador. Campo Eléctrico más Alto Voltaje es el combo ofensivo: el movimiento de 70 se duplica dentro del campo que Boltund mismo crea (140 efectivos con STAB), y su Velocidad 121 garantiza montar el campo primero. Rayo queda como STAB de reserva si otro usuario pisa el terreno y Vozarrón cubre a Planta y Dragón que resisten Eléctrico. Es viable y no óptimo porque necesita el turno de campo y la activación de Tenacidad para igualar la consistencia del set físico, y su volumen 69/60/60 no perdona errores.',
      alternatives: [
        {
          slot: 'move',
          value: 'SNARL',
          note: 'Alarido (55) baja el Ataque Especial rival mientras daña y ayuda a enfriar sweepers especiales, a cambio de Vozarrón.',
          replaces: 'HYPERVOICE'
        }
      ]
    }
  ]
}

export default boltund