import type { PokemonTemplateSet } from '../../lib/types'

const poliwrath: PokemonTemplateSet = {
  internalName: 'POLIWRATH',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'viable',
      ability: 'WATERABSORB',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BULKUP', 'DRAINPUNCH', 'LIQUIDATION', 'ICEPUNCH'],
      justification:
        'Poliwrath es un atacante resistente de tipo Agua/Lucha con PS 90 / Def 95 / Def. Esp. 90 y una herramienta rara: Absorbe Agua le da inmunidad total al tipo Agua y le cura un 25% de sus PS al recibir uno de esos ataques, lo que le permite entrar gratis a muchos rivales. Corpulencia sube Ataque y Defensa, parchea su ofensiva discreta de Ataque 95 y lo endurece del lado físico; Puño Drenaje es el STAB de tipo Lucha con recuperación, esencial porque Poliwrath no tiene un recuperador fiable; Hidroariete es el segundo STAB con opción de bajar Defensa; Puño Hielo cubre a Planta, Volador, Tierra y Dragón, que son justamente lo que Poliwrath quiere frenar. Naturaleza Firme porque la Velocidad 70 es causa perdida y conviene volcar todo en potencia y volumen. Es viable y no óptimo por la falta de recuperación instantánea, la Velocidad muy baja y un Ataque que incluso con Corpulencia no es abrumador.',
      alternatives: [
        {
          slot: 'move',
          value: 'CIRCLETHROW',
          note: 'Llave Giro, con prioridad -6, fuerza cambios en barredores con setup y acumula daño de trampas usando su volumen, cediendo la cobertura contra Planta y Volador.',
          replaces: 'ICEPUNCH'
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme quita objetos y desgasta a los muros que intenten pararlo, a cambio del daño bruto del segundo STAB.',
          replaces: 'LIQUIDATION'
        },
        {
          slot: 'ability',
          value: 'SWIFTSWIM',
          note: 'En un equipo de lluvia, Nado Rápido duplica la Velocidad 70 a 140 y habilita un set puramente ofensivo con Hidroariete y A Bocajarro en lugar del planteamiento voluminoso.'
        }
      ]
    }
  ]
}

export default poliwrath
