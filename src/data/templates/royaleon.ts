import type { PokemonTemplateSet } from '../../lib/types'

const royaleon: PokemonTemplateSet = {
  internalName: 'ROYALEON',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'ADAPTABILITY',
      item: 'CHOICESPECS',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BOOMBURST', 'SHADOWBALL', 'THUNDERBOLT', 'FOCUSBLAST'],
      justification:
        'Royaleon, exclusivo de Añil entre los Eeveelution de tipo Normal, tiene Ataque Especial 130 y PS 110, con la Velocidad 65 baja pero un cuerpo resistente. Adaptable duplica la bonificación del mismo tipo, y Estruendo (140, STAB Normal) se convierte en su arma nuclear al superar a prácticamente cualquier golpe del juego: un rompemuros que derriba muros con un solo tiro. Bola Sombra cubre a Fantasma que inmuniza Normal, Rayo castiga a Agua y Volador, y Onda Certera cubre a Acero que resiste Normal. Gafas Elección multiplican por 1,5 el At. Esp. sobre esa base ya enorme, haciendo de Royaleon un nuke de cambio. Naturaleza Modesta y reparto en PS y At. Esp.: la baja Velocidad se acepta porque el rol es entrar, disparar y romper, apoyándose en PS 110 para sobrevivir un golpe.',
      alternatives: [
        {
          slot: 'ability',
          value: 'REALEZA',
          note: 'Realeza da +50% de daño al atacar con todos los tipos, potenciando también la cobertura a costa de perder el x2 de Estruendo.'
        },
        {
          slot: 'move',
          value: 'PSYSHOCK',
          note: 'Psicocarga cubre a Lucha y Veneno atacando la Defensa física, a cambio de Onda Certera en el slot de cobertura.',
          replaces: 'FOCUSBLAST'
        }
      ]
    }
  ]
}

export default royaleon
