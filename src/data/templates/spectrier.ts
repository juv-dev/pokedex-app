import type { PokemonTemplateSet } from '../../lib/types'

const spectrier: PokemonTemplateSet = {
  internalName: 'SPECTRIER',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'GRIMNEIGH',
      item: 'LEFTOVERS',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'SHADOWBALL', 'DARKPULSE', 'SUBSTITUTE'],
      justification:
        'Spectrier convierte cada KO en impulso: Relincho Negro sube un nivel el Ataque Especial por baja, de modo que con Maquinación (+2 Ataque Especial) y una eliminación previa el daño se dispara sin necesidad de volver a mejorar. Bola Sombra (80, STAB Fantasma) y Pulso Umbrío (80, STAB Siniestro) forman una doble STAB que muy pocos tipos comunes resisten a la vez, y Sustituto bloquea Fuego Fatuo, el cambio defensivo y los golpes de prioridad mientras Maquinación y el resto de la mejora se completan sin riesgo. Restos compensa el 25% del coste de Sustituto cada turno, lo que convierte a Spectrier en un barredor que se sostiene solo en partidas largas. Miedosa lleva los 130 de Velocidad al máximo (394 efectivos) y supera a casi todo el metajuego sin potenciar; el reparto 252 Ataque Especial / 252 Velocidad con 4 en PS deja las defensas 100/60/100 tal cual porque la función es golpear antes de recibir.',
      alternatives: [
        {
          slot: 'move',
          value: 'WILLOWISP',
          note: 'Fuego Fatuo castiga a los checks físicos que intentan plantarse ante Spectrier, cediendo la protección de Sustituto.',
          replaces: 'SUBSTITUTE'
        },
        {
          slot: 'item',
          value: 'WEAKNESSPOLICY',
          note: 'Política de Debilidad convierte el único golpe que Spectrier puede recibir en +2 de Ataque Especial, a costa de la recuperación de Restos.'
        }
      ]
    }
  ]
}

export default spectrier