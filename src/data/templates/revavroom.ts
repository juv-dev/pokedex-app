import type { PokemonTemplateSet } from '../../lib/types'

const revavroom: PokemonTemplateSet = {
  internalName: 'REVAVROOM',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'OVERCOAT',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHIFTGEAR', 'IRONHEAD', 'HIGHHORSEPOWER', 'WILDCHARGE'],
      justification:
        'El perfil físico manda: Ataque 119 y Velocidad 100 con el doble STAB de acero y veneno, y Funda lo convierten en un barredor con Cambio de Marcha, que sube Ataque y Velocidad dos niveles en un solo turno. Con la Velocidad ya elevada Revavroom supera a la mayor parte del metajuego, Cabeza de Hierro pega con STAB de acero y Fuerza Equina aporta la cobertura de Tierra; Voltio Cruel remata la eléctrica. Funda lo protege de los polvos, esporas y tormentas, y Filtro [H] solo compite por el espacio de habilidad al reducir el daño supereficaz a 3/4, útil si se prioriza entrar contra Fuego o Tierra, pero Funda es el valor más consistente para un sweeper que debe sobrevivir a los cambios. Vidasfera maximiza el daño ofensivo a cambio de la longevidad.',
      alternatives: [
        {
          slot: 'ability',
          value: 'FILTER',
          note: 'Mitiga los golpes supereficaces de Fuego, Tierra y Lucha a 3/4, mejorando la entrada a cambio de perder la inmunidad a polvos y tormentas.'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Pico de daño inmediato al entrar sin perder un turno en Cambio de Marcha, pero bloquea el setup y obliga a rotar constantemente.'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Evita el desgaste de Trampa Rocas y Púas al pivotar varias veces, cediendo el boost ofensivo de la Vidasfera.'
        },
        {
          slot: 'move',
          value: 'GUNKSHOT',
          note: 'STAB de veneno de 120 de potencia para romper muros de hada, a cambio de la precisión 90 y de perder la cobertura eléctrica.',
          replaces: 'WILDCHARGE'
        }
      ]
    }
  ]
}

export default revavroom
