import type { PokemonTemplateSet } from '../../lib/types'

const sinistcha: PokemonTemplateSet = {
  internalName: 'SINISTCHA',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'CURSEDBODY',
      item: 'LEFTOVERS',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 0, 4],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['MATCHAGOTCHA', 'SHADOWBALL', 'STRENGTHSAP', 'WILLOWISP'],
      justification:
        'Sinistcha en Añil combina Ataque Especial 121 con una Defensa 106 sobre el tipo Fantasma/Planta, y su habilidad Cuerpo Maldito (30% de anular el movimiento rival por 4 turnos) le da un disuasivo físico pasivo. Cañón Batidor (80, STAB Planta) es su firma: además de daño cura la mitad del infligido y tiene 20% de quemar, un combo de ofensiva y recuperación. Bola Sombra (STAB Fantasma) cubre al rival de tipo Psíquico, Absorbefuerza se nutre del Ataque del objetivo para curar y bajar su Ataque, y Fuego Fatuo abre la puerta a la quemadura residual. Naturaleza Modesta con reparto en PS y At. Esp. explota el lado ofensivo sin perder el volumen; Restos sostienen la curación que Cañón Batidor y Absorbefuerza multiplican. La Velocidad 70 no importa porque la estrategia es absorber y castigar, no superar.',
      alternatives: [
        {
          slot: 'move',
          value: 'GIGADRAIN',
          note: 'Gigadrenado refuerza la curación por daño frente a Cañón Batidor, a costa de perder el 20% de quemar de la firma.',
          replaces: 'MATCHAGOTCHA'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado castiga a los atacantes físicos de contacto que recibe Cuerpo Maldito, a cambio de la recuperación de Restos.'
        },
        {
          slot: 'nature',
          value: 'CALM',
          note: 'Serena prioriza la Defensa Especial (80) sobre el daño, para una variante más orientada a absorber golpes especiales.'
        }
      ]
    }
  ]
}

export default sinistcha
