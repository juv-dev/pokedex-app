import type { PokemonTemplateSet } from '../../lib/types'

const raichu: PokemonTemplateSet = {
  internalName: 'RAICHU',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LIGHTNINGROD',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'THUNDERBOLT', 'GRASSKNOT', 'FOCUSBLAST'],
      justification:
        'En Añil V4.13 Raichu tiene At.Esp 90 y Velocidad 110, con Defensas 55/80 que lo dejan sin margen para un rol defensivo, así que su papel real es el de barredor especial que abre con un turno de mejora. Su At.Esp base es corto para forzar cambios de entrada, pero Maquinación ("aumenta mucho el Ataque Especial", +2) lo lleva a un rango de barrido de golpe. Con +2, Rayo (90, STAB) rompe casi todo lo neutro, Nudo Hierba castiga a los tipos Tierra y Roca voluminosos que quieren pisar el STAB Eléctrico, y Onda Certera cubre a Acero, Roca y Normal. Vidasfera suma el 30% de potencia que un atacante de base 90 necesita para cerrar, y la Velocidad 110 le permite montar contra buena parte del metajuego base 100 antes de recibir daño. Pararrayos sobre Elec. Estática porque anula por completo un ataque Eléctrico rival y, según su texto en Añil, sube un nivel el Ataque Especial al hacerlo incluso si el usuario fuera de tipo Tierra: entrar sobre un movimiento Eléctrico previsto regala medio Maquinación.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Gafas Elección da un pico de rotura inmediato sin gastar el turno de Maquinación, a cambio de quedar bloqueado en un movimiento; en esa variante Maquinación deja paso a Voltiocambio.'
        },
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Pañuelo Elección convierte a Raichu en revenge killer que supera el tramo de casi todo lo no acelerado; también pide Voltiocambio en lugar de Maquinación.'
        },
        {
          slot: 'move',
          value: 'ALLURINGVOICE',
          note: 'Voz Cautivadora (80, tipo Hada) golpea limpio a Dragón, Siniestro y Lucha que resisten o ignoran el resto del set.',
          replaces: 'FOCUSBLAST'
        }
      ]
    }
  ]
}

export default raichu
