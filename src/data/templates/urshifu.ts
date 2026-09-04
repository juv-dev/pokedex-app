import type { PokemonTemplateSet } from '../../lib/types'

const urshifu: PokemonTemplateSet = {
  internalName: 'URSHIFU',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'UNSEENFIST',
      item: 'CHOICEBAND',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['WICKEDBLOW', 'CLOSECOMBAT', 'SUCKERPUNCH', 'UTURN'],
      justification:
        'Urshifu en Añil V4.13 existe en una única forma, Lucha/Siniestro, con Puño Invisible: sus movimientos de contacto infligen daño aunque el rival use Protección o Detección, lo que elimina la respuesta defensiva más barata contra un wallbreaker. Golpe Oscuro (75, STAB) es siempre crítico, de modo que además ignora los cambios de Defensa del rival; A Bocajarro (120, STAB) es el golpe máximo; Golpe Bajo (70, prioridad +1) permite rematar amenazas frágiles sin depender de la Velocidad 97; e Ida y Vuelta evita quedar bloqueado en el movimiento equivocado. La Cinta Elección (+50% Ataque) es el multiplicador natural de un perfil 130 de Ataque con 100 de PS y 100 de Defensa que puede entrar varias veces. Alegre maximiza la Velocidad para ganar el duelo contra rivales del mismo rango y poder usar Golpe Bajo como cierre.',
      alternatives: [
        {
          slot: 'move',
          value: 'STONEEDGE',
          note: 'Roca Afilada golpea a los Volador que resisten Lucha y Siniestro, cediendo el reposicionamiento de Ida y Vuelta.',
          replaces: 'UTURN'
        },
        {
          slot: 'move',
          value: 'DRAINPUNCH',
          note: 'Puño Drenaje recupera la mitad del daño infligido y sostiene la entrada repetida, a cambio de la prioridad de Golpe Bajo.',
          replaces: 'SUCKERPUNCH'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera potencia sin bloquear el movimiento, para rivales que predicen el cambio y castigan la Cinta con un cambio doble.'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'UNSEENFIST',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'WICKEDBLOW', 'CLOSECOMBAT', 'SUCKERPUNCH'],
      justification:
        'Danza Espada convierte a Urshifu en un sweep de fin de partida: con +2 de Ataque, Golpe Oscuro siempre crítico alcanza un daño que supera al de la Cinta Elección sin necesidad de predicción, y Vidasfera potencia cada golpe un 30%. A Bocajarro mantiene la respuesta a los Acero que resisten Siniestro y Golpe Bajo conserva la prioridad para rematar tras el boost. Es viable y no óptimo porque la Cinta es más fiable: Danza Espada exige un turno libre y Puño Invisible ya resuelve la mayoría de los duelos sin necesidad de mejorar, de modo que el setup añade riesgo sin ampliar significativamente el rango de objetivos.',
      alternatives: [
        {
          slot: 'move',
          value: 'TAUNT',
          note: 'Mofa bloquea a los muros que intentan recuperarse o predecir con Detección, cediendo la prioridad de Golpe Bajo.',
          replaces: 'SUCKERPUNCH'
        }
      ]
    }
  ]
}

export default urshifu