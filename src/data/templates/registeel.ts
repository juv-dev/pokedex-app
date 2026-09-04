import type { PokemonTemplateSet } from '../../lib/types'

const registeel: PokemonTemplateSet = {
  internalName: 'REGISTEEL',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'CLEARBODY',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'BODYPRESS', 'IRONHEAD', 'THUNDERWAVE'],
      justification:
        'PS 80 con Defensa 150 y Defensa Especial 150 sobre el mejor tipo defensivo del juego: Registeel entra ante casi cualquier cosa y coloca Trampa Rocas. Plancha Corporal escala con la Defensa 150 para no ser un objetivo pasivo, Cabeza de Hierro es STAB fiable con 30% de amedrentamiento, y Onda Trueno reparte parálisis para dar tiempo al equipo. No tiene recuperación fiable más allá de Descanso, así que Restos y un reparto físicamente defensivo con Agitada buscan alargar cada entrada. Cuerpo Puro bloquea Intimidación y las bajadas de características.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHESTOBERRY',
          note: 'Con Descanso en lugar de Onda Trueno, la Baya Atania da cura completa; a cambio se pierde el control de velocidad sobre los sweepers.'
        },
        {
          slot: 'move',
          value: 'SEISMICTOSS',
          note: 'Sísmico inflige daño fijo igual al nivel contra cualquier objetivo no inmune al tipo Lucha, útil si se prefiere daño constante a escalar con la Defensa.',
          replaces: 'BODYPRESS'
        },
        {
          slot: 'move',
          value: 'CURSE',
          note: 'Maldición sube Ataque y Defensa para un plan lento de barrido aprovechando la dureza.',
          replaces: 'THUNDERWAVE'
        }
      ]
    }
  ]
}

export default registeel
