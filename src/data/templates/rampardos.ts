import type { PokemonTemplateSet } from '../../lib/types'

const rampardos: PokemonTemplateSet = {
  internalName: 'RAMPARDOS',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MOLDBREAKER',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HEADSMASH', 'EARTHQUAKE', 'SUPERPOWER', 'FIREPUNCH'],
      justification:
        'El Ataque base 165 con Cinta Elección produce uno de los golpes físicos más fuertes del juego. Rompemoldes ignora Robustez, Levitación y demás, así que Testarazo (Head Smash, 150, precisión 80) conecta contra cualquier objetivo. Importante: Rampardos NO tiene Cabeza Roca en Añil (solo Rompemoldes o Potencia Bruta), por eso Testarazo siempre se hiere la mitad del daño infligido y conviene reservarlo para cuando el KO está asegurado, usando coberturas seguras el resto del tiempo. Terremoto castiga a Acero, Roca, Veneno y Eléctrico; Fuerza Bruta a Normal y Acero que aguantan Roca (baja tu Atq y Def); Puño Fuego liquida Acero, Planta y Bicho. Con Velocidad 68 y defensas 60/50 es un rompedor de un solo turno: entra, elige y pega.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Compensa la Velocidad 68 (pasa a ~102 efectiva) y lo vuelve un revenge killer sorprendentemente fuerte. Va con Alegre.'
        },
        {
          slot: 'move',
          value: 'STONEEDGE',
          note: 'STAB de Roca sin retroceso (100, precisión 80) cuando no querés arriesgar PS con Testarazo.',
          replaces: 'HEADSMASH'
        },
        {
          slot: 'move',
          value: 'ZENHEADBUTT',
          note: 'Pega a Lucha y Veneno sin bajar tus propias estadísticas como hace Fuerza Bruta.',
          replaces: 'SUPERPOWER'
        },
        {
          slot: 'ability',
          value: 'SHEERFORCE',
          note: 'Con Vidasfera y movimientos como Pedrada, Puño Fuego o Triturar: Potencia Bruta sube 30% su daño, anula el retroceso de la Vidasfera y evita las autobajadas; pierde el golpe nuclear de Testarazo.'
        }
      ]
    }
  ]
}

export default rampardos
