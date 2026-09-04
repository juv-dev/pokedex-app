import type { PokemonTemplateSet } from '../../lib/types'

const glimmora: PokemonTemplateSet = {
  internalName: 'GLIMMORA',
  templates: [
    {
      role: 'hazard-lead',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TOXICDEBRIS',
      item: 'FOCUSSASH',
      nature: 'TIMID',
      evs: [252, 0, 0, 4, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'MORTALSPIN', 'SLUDGEWAVE', 'POWERGEM'],
      justification:
        'Glimmora es el lead de trampas por excelencia: Capa Tóxica coloca púas tóxicas en el campo rival cada vez que recibe un ataque físico, y Giro Mortífero retira las trampas propias y envenena al objetivo en un solo movimiento. Con Ataque Especial 130, no es un simple colocador: Onda Tóxica (STAB de veneno de 95) y Joya de Luz (STAB de roca) golpean fuerte, y Trampa Rocas cierra el paquete de trampas. Reparto 252 Vel / 252 PS con naturaleza Alegre para superar a los leads rivales y colocar la trampa primero, y Banda Aguante garantiza una acción útil ante un lead más rápido o más fuerte incluso si no alcanza a moverse. Es óptimo porque reúne colocación, retirada y presión ofensiva en un solo slot, un valor que ninguna otra pieza del rango ofrece junto.',
      alternatives: [
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Longevidad al pivotar sin pagar las trampas propias acumuladas, a cambio de no garantizar la primera acción frente a leads rápidos.'
        },
        {
          slot: 'move',
          value: 'EARTHPOWER',
          note: 'Poder Terráqueo castiga a Acero, Fuego y Eléctrico que resisten el veneno, cediendo la STAB de roca.',
          replaces: 'POWERGEM'
        },
        {
          slot: 'item',
          value: 'COVERTCLOAK',
          note: 'Bloquea el retroceso de efectos secundarios (quemaduras, congelación) para aguantar más turnos, sin la red de seguridad de la Banda.'
        }
      ]
    }
  ]
}

export default glimmora
