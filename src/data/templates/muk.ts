import type { PokemonTemplateSet } from '../../lib/types'

const muk: PokemonTemplateSet = {
  internalName: 'MUK',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'viable',
      ability: 'POISONTOUCH',
      item: 'ASSAULTVEST',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['POISONJAB', 'KNOCKOFF', 'DRAINPUNCH', 'ICEPUNCH'],
      justification:
        'Muk en Añil V4.13 tiene PS 105, Def. Esp. 100 y Ataque 105, un cuerpo pensado para aguantar el lado especial y devolver daño. Chaleco Asalto multiplica por 1,5 esa Def. Esp. base 100 y lo convierte en una esponja especial que a la vez pega fuerte, ya que sus cuatro huecos son ataques directos. Toque Tóxico envenena un 30% de las veces con cualquier golpe de contacto, y sobre Puño Veneno la probabilidad combinada de envenenar sube bastante, lo que le da un desgaste pasivo sobre lo que entra. Desarme quita objetos y castiga a Psíquico y Fantasma; Puño Drenaje es su única fuente de recuperación y mitiga la falta de longevidad del set de Chaleco; Puño Hielo cubre a Tierra, Volador, Planta y Dragón. Queda en viable porque, pese al buen bulk especial, la Velocidad 50 y la Defensa 75 lo dejan cómodo solo frente a ataques especiales, y su tipo Veneno puro ofrece cobertura ofensiva limitada. Naturaleza Firme y reparto en PS y Ataque, ya que el Chaleco aporta la Def. Esp. sin necesidad de invertir en ella.',
      alternatives: [
        {
          slot: 'ability',
          value: 'STICKYHOLD',
          note: 'Viscosidad impide el robo de objetos y protege el Chaleco Asalto de Desarme y Truco, a cambio del veneno pasivo de Toque Tóxico.'
        },
        {
          slot: 'move',
          value: 'GUNKSHOT',
          note: 'Lanzamugre (120 de potencia, 90 de precisión) sube el techo de daño del STAB y sigue activando Toque Tóxico, a cambio de la fiabilidad de precisión de Puño Veneno.',
          replaces: 'POISONJAB'
        },
        {
          slot: 'item',
          value: 'BLACKSLUDGE',
          note: 'Con Lodo Negro en un set más defensivo con Maldición o Repartepena, Muk gana cura pasiva y castiga a quien le haga Truco, cediendo el volumen especial inmediato del Chaleco.'
        }
      ]
    }
  ]
}

export default muk
