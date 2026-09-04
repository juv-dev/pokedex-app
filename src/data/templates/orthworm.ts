import type { PokemonTemplateSet } from '../../lib/types'

const orthworm: PokemonTemplateSet = {
  internalName: 'ORTHWORM',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'viable',
      ability: 'EARTHEATER',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'BODYPRESS', 'IRONDEFENSE', 'IRONHEAD'],
      justification:
        'Orthworm convierte su Defensa 145, la más alta del rango, en muro físico: Geofagia hace que los movimientos de tipo Tierra rivales le curen en lugar de herirle, dándole una inmunidad ofensiva clave para pivotar ante atacantes de tierra, justo el tipo que normalmente perfora al acero. Defensa Férrea sube la Defensa dos niveles y Plancha Corporal, que usa Defensa en lugar de Ataque, se convierte en un STAB de castigo creciente con el mismo boost. Cabeza de Hierro da una STAB de acero estable, y Trampa Rocas aporta presión de entrada desde el turno uno. Restos compensan la ausencia de recuperación directa. Naturaleza Agitada y 252 PS / 252 Def maximizan el volumen físico; la cobertura contra el lado especial se apoya en Geofagia como presión de cambio.',
      alternatives: [
        {
          slot: 'ability',
          value: 'SANDVEIL',
          note: 'Velo Arena [H] sube la Evasión un 20% en tormenta de arena y lo inmuniza a su desgaste, sin la curación de Geofagia.'
        },
        {
          slot: 'move',
          value: 'SPIKES',
          note: 'Añade una segunda capa de trampas junto a Trampa Rocas, cediendo la STAB de acero de Cabeza de Hierro.',
          replaces: 'IRONHEAD'
        },
        {
          slot: 'move',
          value: 'SHEDTAIL',
          note: 'Autotomía pasa el sustituto a un compañero tras endurecerse, pivotando del muro puro al apoyo de sustitución.',
          replaces: 'IRONHEAD'
        }
      ]
    }
  ]
}

export default orthworm