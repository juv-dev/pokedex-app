import type { PokemonTemplateSet } from '../../lib/types'

const walrein: PokemonTemplateSet = {
  internalName: 'WALREIN',
  templates: [
    {
      role: 'wall-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'THICKFAT',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['ICEBEAM', 'SURF', 'SLACKOFF', 'ROAR'],
      justification:
        'PS 110 con Defensa 90 y Defensa Especial 90 sostienen un muro voluminoso, y Sebo reduce a la mitad el daño de Fuego y Hielo: cubre la única debilidad que el tipo Agua/Hielo tendría de peso, ya que al Hielo entrante lo recibe a x0,25. Relajación es cura fiable del 50%, muy poco común en un tipo Hielo, y permite repetir entradas sin depender de trampas ni clima. Rayo Hielo y Surf son el STAB doble para no ser un objetivo pasivo, y Rugido fuerza cambios para acumular daño de trampas y neutralizar a quien se refuerce en su cara. Serena inclina la resistencia al flanco especial, su mejor perfil defensivo frente a Agua y Planta especiales.',
      alternatives: [
        {
          slot: 'nature',
          value: 'BOLD',
          note: 'Osada si la presión del rival es más física; Sebo ya neutraliza a los Hielo físicos de todos modos.'
        },
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Plancha Corporal usa la Defensa 90 para pegar a Hielo, Roca y Siniestro, a cambio del control de setup de Rugido.',
          replaces: 'ROAR'
        },
        {
          slot: 'move',
          value: 'YAWN',
          note: 'Bostezo obliga el cambio o duerme, otra vía de forzar el intercambio sin gastar el hueco de Rugido.',
          replaces: 'ROAR'
        }
      ]
    }
  ]
}

export default walrein
