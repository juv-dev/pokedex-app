import type { PokemonTemplateSet } from '../../lib/types'

const banette: PokemonTemplateSet = {
  internalName: 'BANETTE',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'viable',
      ability: 'INSOMNIA',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'POLTERGEIST', 'SHADOWSNEAK', 'KNOCKOFF'],
      justification:
        'Sin mega en Añil, Banette es un rompemuros lento (64/65/63) que se apoya en Danza Espada y prioridad. Truco Fantasma castiga usando el objeto rival: 110 de potencia STAB desde Ataque 115. Danza Espada dobla ese Ataque para que Sombra Vil, con prioridad, limpie a los rivales debilitados que superan en Velocidad a su triste base 65, y Desarme aporta utilidad quitando objetos y daño de tipo Siniestro. Insomnio le da inmunidad al sueño para poder montar la Danza Espada con seguridad. Vidasfera compensa la falta del mega y asegura KO tras la subida. Firme porque su Velocidad no barre y todo el plan gira en torno a la prioridad.',
      alternatives: [
        {
          slot: 'move',
          value: 'GUNKSHOT',
          note: 'Lanza Mugre pega a los tipos Hada y Normal que ignoran Truco Fantasma, a cambio de la utilidad de Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'move',
          value: 'DESTINYBOND',
          note: 'Beso Mortal cambia el pico de daño de Danza Espada por un intercambio forzado contra un rival que iba a rematar a Banette.',
          replaces: 'SWORDSDANCE'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta Elección da potencia inmediata sin gastar turno en Danza Espada, útil si el equipo necesita el KO ya.'
        }
      ]
    }
  ]
}

export default banette
