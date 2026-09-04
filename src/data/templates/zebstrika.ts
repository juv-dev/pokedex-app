import type { PokemonTemplateSet } from '../../lib/types'

const zebstrika: PokemonTemplateSet = {
  internalName: 'ZEBSTRIKA',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'RECKLESS',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 0, 4, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['WILDCHARGE', 'HIGHHORSEPOWER', 'FLAMECHARGE', 'OVERHEAT'],
      justification:
        'Zebstrika tiene 116 de Velocidad y 110 de Ataque, un perfil de sweeper puro respaldado por su habilidad Audaz, que sube un 20 por ciento la potencia de los movimientos con retroceso. Voltio Cruel pasa a 108 de potencia efectiva con STAB y es el ataque eléctrico fiable del set. Fuerza Equina cubre a los Eléctrico rivales, a los Roca y a los Acero que resisten el STAB. Nitrocarga suma un ataque de fuego para Acero, Planta e Hielo y sube la Velocidad para adelantarse incluso a los Pañuelo Elección tras un turno. Sobrecalentamiento, aunque salga de solo 80 de Ataque Especial, ofrece un golpe fuerte de una vez contra los muros físicos de tipo Tierra o Planta como Gliscor o Hippowdon que ignoran el resto del set. Naturaleza Alegre para asegurar la ventaja de Velocidad y Vidasfera para reforzar cada golpe sin quedar encerrado en un movimiento.',
      alternatives: [
        {
          slot: 'ability',
          value: 'MOTORDRIVE',
          note: 'Da inmunidad a los ataques eléctricos y una subida de Velocidad al recibirlos, útil contra otros Eléctrico y Onda Voltio.'
        },
        {
          slot: 'move',
          value: 'VOLTTACKLE',
          note: 'STAB eléctrico de 120 de potencia potenciado por Audaz para más OHKO, a cambio de un tercio del daño como retroceso.',
          replaces: 'WILDCHARGE'
        },
        {
          slot: 'move',
          value: 'DOUBLEEDGE',
          note: 'Golpe normal potente y también potenciado por Audaz si se prefiere cobertura neutra amplia sobre el fuego especial.',
          replaces: 'OVERHEAT'
        }
      ]
    }
  ]
}

export default zebstrika
