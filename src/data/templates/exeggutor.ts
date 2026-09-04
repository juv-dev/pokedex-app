import type { PokemonTemplateSet } from '../../lib/types'

const exeggutor: PokemonTemplateSet = {
  internalName: 'EXEGGUTOR',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'viable',
      ability: 'HARVEST',
      item: 'SITRUSBERRY',
      nature: 'QUIET',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['TRICKROOM', 'GIGADRAIN', 'PSYCHIC', 'SLUDGEBOMB'],
      justification:
        'Exeggutor en Añil V4.13 tiene At. Esp. 125 y PS 95 con Velocidad 55, un perfil que pide Espacio Raro: es demasiado potente para desperdiciarlo y demasiado lento para funcionar sin ayuda. El propio set trae Espacio Raro, así que no depende de un compañero para invertir el turno y golpear primero durante cinco turnos. Cosecha recupera la Baya Zidra al final de cada turno con un 50% de probabilidad (siempre bajo sol), lo que devuelve PS repetidamente y alarga su ventana de ruptura. Gigadrenado es el STAB de tipo Planta que además cura la mitad del daño, sumándose a Cosecha para hacerlo difícil de desgastar; Psíquico es el segundo STAB que castiga a Lucha y Veneno y baja la Def. Esp.; Bomba Lodo cubre a las Hadas y a otros tipo Planta que resisten su STAB. Naturaleza Mansa con 0 de IV en Velocidad y sin EV en Velocidad para ser lo más lento posible y atacar primero bajo Espacio Raro; reparto en PS y At. Esp. para maximizar volumen y potencia.',
      alternatives: [
        {
          slot: 'ability',
          value: 'CHLOROPHYLL',
          note: 'Clorofila duplica la Velocidad con sol y convierte a Exeggutor en barredor especial rápido en equipos de sol, renunciando al plan de Espacio Raro y a la recuperación de Cosecha.'
        },
        {
          slot: 'move',
          value: 'LEAFSTORM',
          note: 'Lluevehojas (130) da un pico de rotura inmediato mucho mayor que Gigadrenado, a costa de bajarse dos niveles el At. Esp. y perder la cura.',
          replaces: 'GIGADRAIN'
        },
        {
          slot: 'move',
          value: 'PSYSHOCK',
          note: 'Psicocarga golpea por la Defensa física y rompe muros especiales voluminosos, cediendo la potencia bruta y la bajada de Def. Esp. de Psíquico.',
          replaces: 'PSYCHIC'
        }
      ]
    }
  ]
}

export default exeggutor
