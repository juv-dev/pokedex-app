import type { PokemonTemplateSet } from '../../lib/types'

const beheeyem: PokemonTemplateSet = {
  internalName: 'BEHEEYEM',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'ANALYTIC',
      item: 'LIFEORB',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'PSYCHIC', 'SHADOWBALL', 'THUNDERBOLT'],
      justification:
        'Beheeyem es un rompemuros especial lento a propósito. At.Esp. 125 sobre PS 75 / Def 85 / Def.Esp 95 con Velocidad 40: casi siempre mueve el último, y ahí es donde Cálculo Final le suma un 30% de potencia a cada ataque de forma prácticamente permanente, sin necesidad de Espacio Raro. Maquinación dobla ese At.Esp. ya inflado, y su volumen le permite montar el aumento frente a rivales que no lo 2HKO. Psíquico es la STAB; Bola Sombra castiga a Psíquico y Fantasma y evita que sea bait de setup; Rayo cubre a Agua y Volador y pega neutro a los Siniestro que ignoran a Psíquico. Naturaleza Modesta —no interesa ninguna Velocidad, cuanto más lento, más fiable Cálculo Final— con reparto de PS y At.Esp. para aguantar un golpe y devolver un nuke. Vidasfera para pasar umbrales de OHKO tras Maquinación.',
      alternatives: [
        {
          slot: 'move',
          value: 'TRICKROOM',
          note: 'Convierte el set en abridor de Espacio Raro (naturaleza Mansa e IV de Velocidad a 0); al mover primero, Cálculo Final deja de activarse durante el campo.',
          replaces: 'NASTYPLOT'
        },
        {
          slot: 'move',
          value: 'ENERGYBALL',
          note: 'Castiga a Tierra, Roca y Agua voluminosos.',
          replaces: 'THUNDERBOLT'
        },
        {
          slot: 'move',
          value: 'EXPANDINGFORCE',
          note: '120 de potencia en Campo Psíquico; depende de un aliado que instale el campo.',
          replaces: 'PSYCHIC'
        },
        {
          slot: 'item',
          value: 'SPELLTAG',
          note: 'Solo potencia la STAB de Fantasma, sin el coste de PS de Vidasfera.'
        },
        {
          slot: 'ability',
          value: 'SYNCHRONIZE',
          note: 'Contagia estados al Pokémon que se los cause; alternativa si el set no invierte en ofensiva y se teme la parálisis.'
        }
      ]
    }
  ]
}

export default beheeyem
