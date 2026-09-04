import type { PokemonTemplateSet } from '../../lib/types'

const marowak: PokemonTemplateSet = {
  internalName: 'MAROWAK',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LIGHTNINGROD',
      item: 'THICKCLUB',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['EARTHQUAKE', 'SHADOWBONE', 'STONEEDGE', 'FIREPUNCH'],
      justification:
        'El Ataque base de Marowak es solo 80, pero Hueso Grueso, objeto que en Añil V4.13 existe y está pensado para la línea de Cubone y Marowak, duplica esa cifra hasta un rango de rompemuros pese a la Velocidad 45. Con PS 60 / Def 110 aguanta un golpe físico neutro y responde con fuerza. Terremoto es el STAB principal y Hueso Sombrío (85, baja la Defensa) forma con él una combinación de tipos casi sin resistencias que además castiga a Fantasmas y Psíquicos; Roca Afilada cubre a Volador y Bicho, y Puño Fuego rompe a Acero y Planta como Skarmory o Ferrothorn que aguantan el resto del set. Pararrayos anula los movimientos eléctricos, que junto a la inmunidad natural del tipo Tierra le da un cambio seguro frente a atacantes especiales de tipo Eléctrico. Firme y máximo Ataque porque la Velocidad es causa perdida; el resto en PS para reforzar su papel de rompemuros lento que entra, golpea y vuelve a entrar.',
      alternatives: [
        {
          slot: 'nature',
          value: 'BRAVE',
          note: 'Audaz con 0 de IV en Velocidad lo convierte en atacante de Espacio Raro, atacando primero durante la ventana en vez de encajar el golpe antes.'
        },
        {
          slot: 'move',
          value: 'SWORDSDANCE',
          note: 'Danza Espada aprovecha su volumen para intentar cerrar la partida cuando ya no quedan revisiones físicas, a cambio de la cobertura de Acero de Puño Fuego.',
          replaces: 'FIREPUNCH'
        },
        {
          slot: 'move',
          value: 'BONEMERANG',
          note: 'Huesomerang golpea dos veces, rompe Banda Aguante y Robustez y perfora sustitutos, cediendo algo de potencia frente a Terremoto de un solo golpe.',
          replaces: 'STONEEDGE'
        }
      ]
    }
  ]
}

export default marowak
