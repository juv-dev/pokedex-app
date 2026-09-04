import type { PokemonTemplateSet } from '../../lib/types'

const aggron: PokemonTemplateSet = {
  internalName: 'AGGRON',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'ROCKHEAD',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 4, 252, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HEADSMASH', 'BODYPRESS', 'EARTHQUAKE', 'STEALTHROCK'],
      justification:
        'Defensa 180 es un valor extremo y el objeto y la naturaleza lo llevan al máximo: Aggron aguanta el lado físico con facilidad y devuelve daño constante. Cabeza Roca anula por completo el retroceso de Cabezazo, un STAB de Roca de 150 de potencia que así solo carga con su 80 de precisión. Plancha Corporal usa esa Defensa 180 como Ataque, de modo que escala con la misma inversión defensiva y cubre a los Acero y Normal; Terremoto completa la cobertura contra Acero y Fuego. Trampa Rocas aprovecha que Aggron fuerza cambios para instalar la trampa. Restos sostiene la longevidad que el rol de tanque necesita.',
      alternatives: [
        {
          slot: 'ability',
          value: 'STURDY',
          note: 'Como lead: garantiza sobrevivir a un golpe a PS completos y colocar Trampa Rocas.'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Castiga el contacto de los físicos que intenta murar, a costa de la recuperación pasiva de Restos.'
        },
        {
          slot: 'move',
          value: 'IRONHEAD',
          note: 'STAB de Acero de precisión perfecta si Cabezazo falla demasiado para el gusto del equipo.',
          replaces: 'HEADSMASH'
        },
        {
          slot: 'move',
          value: 'ROAR',
          note: 'Fuerza cambios y suma dano de trampa en lugar de cobertura ofensiva.',
          replaces: 'EARTHQUAKE'
        }
      ]
    }
  ]
}

export default aggron
