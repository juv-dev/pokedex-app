import type { PokemonTemplateSet } from '../../lib/types'

const clefable: PokemonTemplateSet = {
  internalName: 'CLEFABLE',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MAGICGUARD',
      item: 'LIFEORB',
      nature: 'CALM',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'MOONBLAST', 'SOFTBOILED', 'FLAMETHROWER'],
      justification:
        'Clefable en Añil V4.13 tiene PS 95 / Def 73 / Def.Esp 90 y At.Esp 95, un perfil de sostenedor especial más que de barredor rápido (Velocidad 60). Muro Mágico ("el Pokémon solo recibe daño de ataques directos; no recibe daño indirecto de ataques, habilidades u objetos") hace que Vidasfera potencie cada golpe sin cobrar el 30% de PS, y además anula Trampa Rocas, veneno, quemadura y Drenadoras, así que Clefable puede quedarse en el campo acumulando Paz Mental sin desgaste pasivo. Con Paz Mental subiendo At.Esp. y Def.Esp., Fuerza Lunar (95, STAB) se vuelve un golpe de cierre y Lanzallamas cubre a Acero como Metagross, Escavalier o Ferrothorn que frenan al Hada. Ovocuración restaura la mitad de los PS y le da longevidad real frente a equipos ofensivos. Reparto en PS y Def.Esp. con Serena para asentar los primeros Paz Mental contra atacantes especiales.',
      alternatives: [
        {
          slot: 'move',
          value: 'THUNDERBOLT',
          note: 'Rayo golpea a Agua y Vuelo voluminosos y a otros Hada como Azumarill que resisten Fuego.',
          replaces: 'FLAMETHROWER'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos cede el pico de daño de Vidasfera por una cura pasiva constante; sigue aprovechando que Muro Mágico bloquea el resto del daño indirecto.'
        }
      ]
    },
    {
      role: 'wall-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'UNAWARE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['MOONBLAST', 'SOFTBOILED', 'THUNDERWAVE', 'FLAMETHROWER'],
      justification:
        'Variante defensiva que aprovecha la habilidad oculta. Ignorante ("ignora los cambios positivos y negativos en las características del rival al atacar, salvo la Velocidad") convierte a Clefable en un freno directo a los barredores con setup: Danza Espada, Paz Mental o Corpulencia rivales dejan de importar porque Clefable calcula el daño como si el rival no hubiera subido nada. Fuerza Lunar es el STAB fijo, Ovocuración sostiene los PS, Onda Trueno mengua a lo que intente pasarle por encima en velocidad y Lanzallamas evita ser bloqueada por Acero. Reparto físico defensivo con Osada porque Def 73 es el lado débil y ahí es donde más presión recibe. Es "viable" y no "óptimo" porque sin inversión ofensiva ni Paz Mental su daño es bajo y puede volverse pasiva frente a rivales que no le teman al STAB Hada.',
      alternatives: [
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme quita objetos y da a Clefable una forma de molestar a muros pasivos, a cambio de la mengua de velocidad de Onda Trueno.',
          replaces: 'THUNDERWAVE'
        }
      ]
    }
  ]
}

export default clefable
