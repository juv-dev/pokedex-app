import type { PokemonTemplateSet } from '../../lib/types'

const tangrowth: PokemonTemplateSet = {
  internalName: 'TANGROWTH',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'REGENERATOR',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['GIGADRAIN', 'KNOCKOFF', 'LEECHSEED', 'SLUDGEBOMB'],
      justification:
        'PS 100 / Def 125 con Regeneración: cada vez que Tangrowth se retira recupera 1/3 de sus PS máximos, tanto en cambio manual como forzado, así que funciona como un pivote físico que nunca llega gastado. Gigadrenado cura y castiga a Agua, Tierra y Roca; Desarme (65, quita objeto) mete daño y desarma a los muros que intentan pararlo; Drenadoras más Regeneración desgastan sin esfuerzo; Bomba Lodo pega a Hadas y a otros Planta. Agitada porque la Def.Esp 50 se cubre mejor cambiando que invirtiendo. La Velocidad 50 no importa en un rol reactivo.',
      alternatives: [
        {
          slot: 'move',
          value: 'SYNTHESIS',
          note: 'Recuperación instantánea de la mitad de los PS en lugar del desgaste lento de Drenadoras; útil si el equipo carece de cura fiable.',
          replaces: 'LEECHSEED'
        },
        {
          slot: 'move',
          value: 'POWERWHIP',
          note: 'STAB físico de 120 para no depender de Gigadrenado contra rivales inmunes a la absorción de PS.',
          replaces: 'SLUDGEBOMB'
        }
      ]
    },
    {
      role: 'tank',
      isPrimary: false,
      confidence: 'viable',
      ability: 'REGENERATOR',
      item: 'ASSAULTVEST',
      nature: 'RELAXED',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['GIGADRAIN', 'KNOCKOFF', 'POWERWHIP', 'EARTHQUAKE'],
      justification:
        'El Chaleco Asalto convierte la única grieta de Tangrowth (Def.Esp 50) en un lado defensivo sólido, y Regeneración compensa la falta de recuperación activa. Gigadrenado da algo de cura pese al Chaleco, Desarme y Latigazo son el daño físico desde Atq 100, Terremoto castiga a Acero, Fuego y Veneno. Plácida sube la Def física ya que la Velocidad es irrelevante.',
      alternatives: [
        {
          slot: 'move',
          value: 'SLUDGEBOMB',
          note: 'Cambia el castigo a Acero de Terremoto por presión a Hada y a otros Planta.',
          replaces: 'EARTHQUAKE'
        }
      ]
    }
  ]
}

export default tangrowth
