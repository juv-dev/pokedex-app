import type { PokemonTemplateSet } from '../../lib/types'

const bouffalant: PokemonTemplateSet = {
  internalName: 'BOUFFALANT',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'RECKLESS',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [248, 252, 0, 0, 8, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HEADCHARGE', 'EARTHQUAKE', 'MEGAHORN', 'CLOSECOMBAT'],
      justification:
        'Un físico equilibrado de 95/95/95 con Ataque 110 y Velocidad 55 lo colocan como atacante resistente que golpea varias veces durante la partida en lugar de barrer. La sinergia central es Audaz con Testarazo: Audaz sube un 20% los movimientos que dañan al usuario y Testarazo solo tiene 1/4 de retroceso, de modo que se dispone de una STAB de tipo Normal de 144 de potencia efectiva con un desgaste mínimo, lo que Restos compensa sin problema. Terremoto y Cornada cubren Acero, Roca, Fantasma parcial, Psíquico y Planta; A Bocajarro añade el golpe fuerte contra los muros de tipo Normal y Acero puro a costa de bajar sus defensas. Firme maximiza el daño ya que la Velocidad no da para pelear el turno.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta para funcionar como rompemuros puro si el equipo prefiere presión inmediata a longevidad.'
        },
        {
          slot: 'move',
          value: 'SWORDSDANCE',
          note: 'Danza Espada convierte al atacante resistente en amenaza de barrido lento apoyada en su físico.',
          replaces: 'MEGAHORN'
        },
        {
          slot: 'ability',
          value: 'SAPSIPPER',
          note: 'Herbívoro da inmunidad a Planta y un nivel de Ataque al absorberla, nicho concreto contra esos equipos.'
        },
        {
          slot: 'move',
          value: 'WILDCHARGE',
          note: 'Voltio Cruel castiga a los tipos Agua y Volador; también lo potencia Audaz por su retroceso.',
          replaces: 'EARTHQUAKE'
        }
      ]
    }
  ]
}

export default bouffalant
