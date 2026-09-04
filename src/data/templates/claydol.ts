import type { PokemonTemplateSet } from '../../lib/types'

const claydol: PokemonTemplateSet = {
  internalName: 'CLAYDOL',
  templates: [
    {
      role: 'hazard-removal',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LEVITATE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['RAPIDSPIN', 'STEALTHROCK', 'EARTHPOWER', 'ICEBEAM'],
      justification:
        'Levitación más un volumen de 70/105/120 hacen de Claydol un girador resistente que, además, coloca su propia Trampa Rocas, así que un solo espacio cumple el trabajo de dos Pokémon de apoyo. Tierra Viva es STAB fiable e Rayo Hielo cubre a los Tierra, Volador, Dragón y Planta que le cambian encima (en especial amenazas Voladoras que ignoran su inmunidad a suelo). Osada con inversión fuerte en PS y Defensa para sobrevivir a los ataques físicos contra los que debe girar. Restos para sostener la presencia en el campo.',
      alternatives: [
        {
          slot: 'move',
          value: 'PSYCHIC',
          note: 'Segundo STAB que pega a los Lucha y Veneno, a cambio de la cobertura de Rayo Hielo.',
          replaces: 'ICEBEAM'
        },
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Aprovecha ofensivamente la Defensa alta con un reparto puramente defensivo.',
          replaces: 'EARTHPOWER'
        },
        {
          slot: 'move',
          value: 'TRICKROOM',
          note: 'Apoya a equipos lentos si otro miembro se encarga de la Trampa Rocas.',
          replaces: 'STEALTHROCK'
        }
      ]
    }
  ]
}

export default claydol
