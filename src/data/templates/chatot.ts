import type { PokemonTemplateSet } from '../../lib/types'

const chatot: PokemonTemplateSet = {
  internalName: 'CHATOT',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'viable',
      ability: 'PUNKROCK',
      item: 'LIFEORB',
      nature: 'MODEST',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'BOOMBURST', 'CHATTER', 'HEATWAVE'],
      justification:
        'Ataque Especial 100 y Velocidad 100. Punk Rock sube un 30% los ataques de sonido, llevando Vozarrón de 140 a unos 182 de potencia efectiva, y tras Maquinación se vuelve un cañón que casi nada resiste de forma neutra. Vozarrón es de tipo Normal y no afecta a los Fantasma, por eso Cháchara (sonido, tipo Volador, también potenciado por Punk Rock) es la respuesta obligada a esos rivales, y Onda Ígnea castiga a los Acero. Modesta porque la Velocidad 100 basta para lo que necesita superar. Perfil viable y no óptimo por la fragilidad de 76/55/52 y porque los Fantasma pared frenan su STAB principal. El IV de Ataque en 0 minimiza el daño de confusión.',
      alternatives: [
        {
          slot: 'move',
          value: 'HYPERVOICE',
          note: 'Sonido fiable sin el azar de confusión de Cháchara si el equipo no teme a los Fantasma.',
          replaces: 'CHATTER'
        },
        {
          slot: 'item',
          value: 'THROATSPRAY',
          note: 'Sube un nivel el Ataque Especial al usar un movimiento de sonido, apilable con Maquinación en el primer intercambio.'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Potencia inmediata sin turno de preparación, a cambio de quedar bloqueado en un ataque.'
        }
      ]
    }
  ]
}

export default chatot
