import type { PokemonTemplateSet } from '../../lib/types'

const umbreon: PokemonTemplateSet = {
  internalName: 'UMBREON',
  templates: [
    {
      role: 'cleric',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SYNCHRONIZE',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 4, 0, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['WISH', 'PROTECT', 'FOULPLAY', 'HEALBELL'],
      justification:
        'PS 95 y defensas 110/130 hacen de Umbreon uno de los muros más difíciles de romper por el lado especial, y su tipo Siniestro puro solo teme a Lucha, Bicho y Hada. Deseo cura a un compañero medio PS al turno siguiente y Protección asegura ese turno además de escalar Restos. Tañido limpia estados de todo el equipo y Sincronía devuelve al rival la quemadura, parálisis o envenenamiento que le inflija, castigando a los que intentan minarlo. Jugada Sucia usa el Ataque del rival en vez del suyo, así que pega de verdad pese al Ataque 65 de Umbreon y le da un daño ofensivo real contra físicos. Naturaleza Serena y reparto en PS y Defensa Especial.',
      alternatives: [
        {
          slot: 'move',
          value: 'TOXIC',
          note: 'Tóxico añade una vía de desgaste propia si el equipo ya tiene otro modo de curar estados.',
          replaces: 'HEALBELL'
        },
        {
          slot: 'move',
          value: 'BABYDOLLEYES',
          note: 'Ojitos Tiernos tiene prioridad +1 y baja el Ataque del rival, blindando a Umbreon frente a físicos que Jugada Sucia no frena por sí sola.',
          replaces: 'FOULPLAY'
        },
        {
          slot: 'ability',
          value: 'INNERFOCUS',
          note: 'Foco Interno evita amedrentamiento e intimidación, útil contra equipos ofensivos con mucho flinch, a costa del castigo por estado de Sincronía.'
        }
      ]
    }
  ]
}

export default umbreon
