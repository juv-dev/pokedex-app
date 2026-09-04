import type { PokemonTemplateSet } from '../../lib/types'

const araquanid: PokemonTemplateSet = {
  internalName: 'ARAQUANID',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'WATERBUBBLE',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['LIQUIDATION', 'LEECHLIFE', 'CRUNCH', 'POISONJAB'],
      justification:
        'Araquanid es un rompemuros por una sola razón: la habilidad Pompa duplica el poder de sus movimientos de Agua y reduce a la mitad el daño de Fuego. Con esa habilidad, Hidroariete (85, STAB) se convierte en el golpe físico más potente de su rango: 85 x2 por Pompa x1,5 por STAB, y la Cinta Elección añade otro 1,5, así que incluso contra rivales que resisten Agua el impacto rompe muros. La Velocidad 42 y el Ataque base 70 lo encuadran como wallbreaker, no como sweeper: entra con la Def. Esp. 132 de base, que absorbe el lado especial, y responde con el golpe del turno. Chupavidas (80, STAB Bicho) recupera la mitad del daño y sostiene los cambios; Triturar cubre Fantasma y Psíquico; Puya Nociva castiga a las Hadas, el tipo que resiste Agua y Bicho. La inversión es 252 PS / 252 Ataque con Firme porque la Velocidad es causa perdida y la prioridad del set es que el golpe duela.',
      alternatives: [
        {
          slot: 'move',
          value: 'FLIPTURN',
          note: 'Viraje mantiene el momentum sin quedar bloqueado en el movimiento equivocado cuando el golpe no mata, a cambio de la cobertura Veneno contra Hada.',
          replaces: 'POISONJAB'
        },
        {
          slot: 'ability',
          value: 'WATERABSORB',
          note: 'Absorbe los movimientos de Agua rivales y cura 1/4 de los PS, útil contra equipos de lluvia, renunciando al multiplicador ofensivo de Pompa.'
        }
      ]
    },
    {
      role: 'wall-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'WATERBUBBLE',
      item: 'LEFTOVERS',
      nature: 'CAREFUL',
      evs: [252, 4, 0, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['LIQUIDATION', 'LEECHLIFE', 'TOXIC', 'STICKYWEB'],
      justification:
        'Variante defensiva que aprovecha el otro lado de Pompa: la mitad de daño de Fuego recibido convierte a Araquanid en un chequeo natural a los lanzallamas y llamaradas del metagame, y con Def. Esp. 132, 252 EVs y Cauta supera el umbral de muro especial sin perder el golpe de Hidroariete. Red Viscosa es un valor añadido que casi ningún muro ofrece: baja la Velocidad de todo rival que entra y favorece a los sweepers propios más lentos. Tóxico desgasta a los muros que resisten el agua, y Chupavidas mantiene los PS altos para seguir cambiando. Restos dan la curación pasiva que falta. Es "viable" y no "óptimo" porque su rol natural es el de golpear, y como muro puro le faltan recuperación fiable y cobertura: las Hadas y los atacantes de tipo Planta lo obligan a salir.',
      alternatives: [
        {
          slot: 'move',
          value: 'PROTECT',
          note: 'Gana el turno para que Restos hagan efecto y scoutea el movimiento rival, cediendo la trampa de Red Viscosa.',
          replaces: 'STICKYWEB'
        },
        {
          slot: 'move',
          value: 'AQUARING',
          note: 'Acua Aro añade 1/16 de curación por turno acumulable con Restos, convirtiéndolo en un muro de desgaste lento, a cambio de Tóxico.',
          replaces: 'TOXIC'
        }
      ]
    }
  ]
}

export default araquanid