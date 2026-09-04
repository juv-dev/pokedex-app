import type { PokemonTemplateSet } from '../../lib/types'

const bruxish: PokemonTemplateSet = {
  internalName: 'BRUXISH',
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
      moves: ['LIQUIDATION', 'PSYCHICFANGS', 'CRUNCH', 'ICEFANG'],
      justification:
        'Bruxish en Añil V4.13 tiene Mandíbula Fuerte, que "aumenta la potencia de los movimientos basados en mordiscos en un 50%", y casi todo su repertorio son mordiscos: Crunch (80, Siniestro) pasa a pegar como un 120, Colmillos Psíquicos (85, Psíquico) como un 127 y Colmillo Hielo (65) como un 97, lo que con Ataque 110 y Velocidad 100 convierte al set en un barredor que rompe pantallas de paso (Colmillos Psíquicos elimina Reflejo y Pantalla Luz). Liquidación (85, STAB Agua) da cobertura pura de Agua y baja la Defensa rival. Naturaleza Alegre y 252 EV en Velocidad para adelantarse al grueso del tier, con Vidasfera potenciando los cuatro golpes. Es un sweeper físico clásico: no necesita montar, entra y reparte daño con la cobertura de tipo; Velocidad 100 le da el orden de turnos excepto contra los sweepers más rápidos.',
      alternatives: [
        {
          slot: 'ability',
          value: 'DAZZLING',
          note: 'Resplandeciente impide la prioridad rival y lo convierte en un anti-revenge, cediendo el aumento de daño de Mandíbula Fuerte.'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Pico de daño máximo para un estilo más de rompedor que de barredor, a cambio de quedar bloqueado en un movimiento.'
        },
        {
          slot: 'move',
          value: 'AQUAJET',
          note: 'Acua Jet (40, prioridad +1, STAB Agua) da el remate prioritario, en lugar de la cobertura de Colmillo Hielo.'
        }
      ]
    }
  ]
}

export default bruxish
