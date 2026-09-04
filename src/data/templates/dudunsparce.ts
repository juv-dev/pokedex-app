import type { PokemonTemplateSet } from '../../lib/types'

const dudunsparce: PokemonTemplateSet = {
  internalName: 'DUDUNSPARCE',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SERENEGRACE',
      item: 'LEFTOVERS',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BOOMBURST', 'EARTHPOWER', 'FLAMETHROWER', 'ROOST'],
      justification:
        'El perfil de Dudunsparce en Añil V4.13 es el de un atacante voluminoso de tipo Normal: PS 125 con SpA 85 y Velocidad 55. La sinergia central es Dicha (Serene Grace) con Estruendo, el STAB Normal de 140 de potencia que no depende del orden de turno porque Dudunsparce golpea después y aguanta el envite gracias a su volumen. Tierra Viva y Lanzallamas cubren a los tipos Acero y Roca que resisten Normal, y Respiro devuelve la mitad de los PS para sostener el PS 125 a lo largo de la partida, con Restos como recuperación pasiva. El reparto 252 PS / 252 At.Esp. con Modesta maximiza el volumen que hace viable a un atacante tan lento y la potencia del STAB; la Velocidad 55 se deja sin invertir porque el planteamiento es de atacante resistente y no necesita dar prioridad al orden. Dicha se explota con más fuerza en el set alternativo de control de velocidad.',
      alternatives: [
        {
          slot: 'move',
          value: 'BODYSLAM',
          note: 'Con Dicha esta cobertura sube a 60% de parálisis al golpear, a cambio del golpe limpio que Lanzallamas da a los tipos Acero y Planta que resisten Normal.',
          replaces: 'FLAMETHROWER'
        },
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Rayo Hielo sustituye el daño a Planta/Acero por golpe limpio contra Volador y Dragón, una segunda opción de cobertura especial según el equipo.',
          replaces: 'FLAMETHROWER'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Onda Trueno ofrece parálisis de apoyo sin depender de Dicha, a cambio de un ataque de cobertura en el cuarto hueco.',
          replaces: 'FLAMETHROWER'
        }
      ]
    },
    {
      role: 'status-spreader',
      isPrimary: false,
      confidence: 'viable',
      ability: 'SERENEGRACE',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BODYSLAM', 'GLARE', 'IRONTAIL', 'ROOST'],
      justification:
        'Variante física que exprime la condición más diferencial de Dudunsparce: Dicha duplica la probabilidad de efectos secundarios, llevando Golpe Cuerpo a 60% de parálisis y completando el control con Deslumbrar, que paraliza con precisión 100 garantizada. Con Ataque 100 y el volumen de PS 125, Dudunsparce mina la velocidad del rival y castiga con Cola Férrea, cuya bajada de Defensa también se ve favorecida por Dicha. Respiro aporta recuperación y Restos longevidad. Es viable y no óptimo porque reparte su rendimiento entre el daño físico y la parálisis, y la Velocidad 55 limita su capacidad de actuar antes de recibir el castigo en numerosos cruces.',
      alternatives: [
        {
          slot: 'move',
          value: 'ROCKSLIDE',
          note: 'Avalancha con Dicha alcanza 60% de flinch, alternativa de control de turno que presiona el lado físico, a cambio de la parálisis de Movimiento Sísmico.',
          replaces: 'BODYSLAM'
        }
      ]
    }
  ]
}

export default dudunsparce
