import type { PokemonTemplateSet } from '../../lib/types'

const escavalier: PokemonTemplateSet = {
  internalName: 'ESCAVALIER',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SWARM',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['MEGAHORN', 'IRONHEAD', 'CLOSECOMBAT', 'KNOCKOFF'],
      justification:
        'Ataque 135 con PS 70 / Def 105 / Def.Esp 105 y Velocidad 20: un rompemuros lento y voluminoso que castiga cada cambio en su contra. El tipo Bicho/Acero le da resistencias defensivas para entrar, y Funda oculta lo haría inmune a esporas, pero Enjambre es la elección ofensiva porque potencia un 50% los movimientos de Bicho cuando cae a 1/3 de PS, y su volumen hace que llegue a ese rango con la partida aún abierta. Megacuerno es la STAB de Bicho de 120 que define su daño; Cabeza de Hierro es la STAB de Acero con opción de amedrentar; A Bocajarro cubre a Acero, Roca y Normal que aguantan las STAB; Golpe Bajo retira el objeto del rival aunque su potencia en Añil sea de 65. Cinta Elección lleva ese Ataque a cifras que rompen resistencias de un golpe. Naturaleza Firme y reparto de PS en vez de Velocidad porque con base 20 la iniciativa es irrelevante y el volumen le permite atacar más veces.',
      alternatives: [
        {
          slot: 'item',
          value: 'ASSAULTVEST',
          note: 'Con Def.Esp. 105 y el tipo Acero aguanta ofensivas especiales y sigue atacando sin quedar bloqueado en un movimiento; se mantiene la naturaleza Firme.'
        },
        {
          slot: 'ability',
          value: 'SHELLARMOR',
          note: 'Bloquea golpes críticos: valor puramente defensivo si no se busca el empuje de Enjambre a baja vida.'
        },
        {
          slot: 'move',
          value: 'DRILLRUN',
          note: 'Castiga a Fuego y a otros Acero sin bajar las defensas propias como hace A Bocajarro.',
          replaces: 'CLOSECOMBAT'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'SWARM',
      item: 'LIFEORB',
      nature: 'BRAVE',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['SWORDSDANCE', 'MEGAHORN', 'IRONHEAD', 'CLOSECOMBAT'],
      justification:
        'Variante de barrido para equipos de Espacio Raro. Con Velocidad 20 e IV de Velocidad a 0, Escavalier ataca primero durante los cinco turnos del campo, y Danza Espada aprovecha su volumen (70/105/105) para armar sin apenas riesgo. Tras el aumento, Megacuerno, Cabeza de Hierro y A Bocajarro cubren prácticamente todo el metajuego. Naturaleza Audaz para no perder Ataque al minimizar Velocidad; Vidasfera para pasar el umbral de daño que convierte a resistencias en 2HKO. Enjambre añade un último empujón cuando el set entra en rango de Megacuerno reforzado.',
      alternatives: [
        {
          slot: 'move',
          value: 'DRILLRUN',
          note: 'Cobertura de Tierra contra Fuego y Acero manteniendo intactas las defensas.',
          replaces: 'CLOSECOMBAT'
        }
      ]
    }
  ]
}

export default escavalier
