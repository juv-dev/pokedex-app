import type { PokemonTemplateSet } from '../../lib/types'

const ninjask: PokemonTemplateSet = {
  internalName: 'NINJASK',
  templates: [
    {
      role: 'support',
      isPrimary: true,
      confidence: 'viable',
      ability: 'SPEEDBOOST',
      item: 'LEFTOVERS',
      nature: 'JOLLY',
      evs: [252, 0, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SUBSTITUTE', 'SWORDSDANCE', 'BATONPASS', 'PROTECT'],
      justification:
        'Impulso sube la Velocidad un nivel al final de cada turno, y con base 160 Ninjask alcanza en pocos turnos multiplicadores que ningún rival iguala. La plantilla no busca que Ninjask ataque, sino que traslade esas subidas: Relevo pasa la Velocidad acumulada y, si hubo tiempo, también la subida de Danza Espada al compañero que entra. Sustituto protege el turno de pase de estados y de prioridad; Protección regala un final de turno extra de Impulso sin exponerse. Restos sostiene los PS que consume Sustituto. Es una plantilla de nicho que exige un receptor adecuado y un equipo construido a su alrededor; sin ese soporte aporta poco.',
      alternatives: [
        {
          slot: 'move',
          value: 'XSCISSOR',
          note: 'Convierte a Ninjask en un lead ofensivo que aprovecha su propia Velocidad en vez de pasarla.',
          replaces: 'SWORDSDANCE'
        },
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Asegura al menos un turno de Sustituto o de pase contra un lead más rápido.'
        },
        {
          slot: 'ability',
          value: 'INFILTRATOR',
          note: 'Variante ofensiva que ignora Sustituto y pantallas rivales; no aporta nada al plan de pase.'
        }
      ]
    }
  ]
}

export default ninjask
