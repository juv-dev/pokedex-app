import type { PokemonTemplateSet } from '../../lib/types'

const skarmory: PokemonTemplateSet = {
  internalName: 'SKARMORY',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STURDY',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SPIKES', 'BODYPRESS', 'ROOST', 'WHIRLWIND'],
      justification:
        'Defensa 200 efectiva con PS 65, Ataque 80 y Velocidad 70 lo definen como muro físico y colocador de Púas de referencia. Púas es la trampa que mejor aprovecha porque Descanso Alas le da recuperación fiable para quedarse rondas colocando capas y absorbiendo físicos. Fuerza Bruta escala con la Defensa 200 en lugar del Ataque 80, así que es un ataque real de tipo lucha que castiga a Acero, Roca, Siniestro y Normal sin tener que invertir en Ataque. Ciclón fuerza cambios, revienta setups y acumula daño de Púas en cada rival que entra. Robustez cubre el peor caso: contra un rompemuros que lo supere, garantiza sobrevivir para dejar la capa. El tipo Acero/Volador le da inmunidad a Tierra y Veneno y resistencias a Normal, Planta, Psíquico, Bicho, Dragón, Hada y Acero; sus únicas debilidades son Fuego y Eléctrico, y como Trampa Rocas le entra neutra puede permitirse Restos en vez de Botas Gruesas para la cura pasiva.',
      alternatives: [
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Trampa Rocas si Skarmory es el único colocador del equipo; se cambia por Fuerza Bruta y deja el set totalmente pasivo pero con las dos trampas más importantes.',
          replaces: 'BODYPRESS'
        },
        {
          slot: 'move',
          value: 'DEFOG',
          note: 'Vuelo para pasar de colocador a retirada de trampas cuando el rival abusa de Púas y Trampa Rocas; sacrifica el control de campo propio.',
          replaces: 'WHIRLWIND'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado castiga a los físicos de contacto que buscan romperlo a cambio de la cura pasiva de Restos.'
        }
      ]
    }
  ]
}

export default skarmory
