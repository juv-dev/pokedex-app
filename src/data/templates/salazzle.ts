import type { PokemonTemplateSet } from '../../lib/types'

const salazzle: PokemonTemplateSet = {
  internalName: 'SALAZZLE',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'CORROSION',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['TORCHSONG', 'SLUDGEBOMB', 'FIREBLAST', 'DRAGONPULSE'],
      justification:
        'Salazzle es un sweeper especial de Velocidad 117 con un argumento único: Canto Ardiente (80, STAB Fuego) no solo golpea, sube el Ataque Especial un nivel con cada uso. Eso convierte el set en máquina de nieve: la primera vez es un golpe fuerte, la segunda ya va con boost, la tercera quiebra muros, y Miedosa con 252 de Velocidad la pone por delante de todo el bloque especial de 110-116 de base. Bomba Lodo (90, STAB Veneno) castiga a las Hadas que resisten el fuego y a los rivales Veneno (la habilidad Corrosión envenena incluso a tipos Veneno y Acero, anulando su inmunidad); Llamarada (110) es el golpe duro para cuando Canto Ardiente no basta; Pulso Dragón cubre los Dragones que bloquean al fuego/veneno con sus resistencias. Vidasfera aporta el 30% que convierte los 2HKO en 1HKO. La defensa es papel (68/60/60): no hay EVs que la salven, por eso la inversión es 252 en ambos ataques y la velocidad manda. IV de Ataque a 0 para minimizar el daño propio por confusión y por Cambia Fuerza rival.',
      alternatives: [
        {
          slot: 'move',
          value: 'TOXIC',
          note: 'Tóxico + Corrosión envenena incluso a Acero y Veneno, el pico de utilidad única de Salazzle, a cambio del daño de Pulso Dragón.',
          replaces: 'DRAGONPULSE'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Botas Gruesas anulan el daño de las Trampa Rocas y Púas, mejorando la entrada gratuita que la fragilidad necesita.',
          replaces: 'LIFEORB'
        },
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Sustituto protege el boost de Canto Ardiente del status y del crítico, cediendo la cobertura Dragón.',
          replaces: 'DRAGONPULSE'
        }
      ]
    },
    {
      role: 'stall',
      isPrimary: false,
      confidence: 'viable',
      ability: 'CORROSION',
      item: 'LEFTOVERS',
      nature: 'TIMID',
      evs: [252, 0, 0, 0, 4, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['SUBSTITUTE', 'TOXIC', 'PROTECT', 'FLAMETHROWER'],
      justification:
        'Variante de desgaste que explota la firma única de la especie: Corrosión permite envenenar con Tóxico a los tipos Acero y Veneno, los que el Tóxico común no toca, y la única forma de curarlo es cambiar. Sustituto protege al usuario del status rival y crea el bucle con Protección: Proteger gana un turno de daño del Tóxico y deja que Restos curen el desgaste del Sustituto. Lanzallamas (90) castiga a los que intentan anular el veneno quedándose en el campo. La Velocidad 117 con Miedosa mantiene el orden: Salazzle envenena y protege antes de que el rival responda. Es "viable" y no "óptimo" porque necesita el Sustituto para sobrevivir golpes con 60 de defensa, y contra equipos con Limpiar Niebla, curación de estado o tipos inmunes al Tóxico pierde el tiempo que el sweeper aprovecha.',
      alternatives: [
        {
          slot: 'move',
          value: 'VENOSHOCK',
          note: 'Carga Tóxica (65, dobla contra envenenado) da golpe especial al potenciar el veneno, cediendo la cobertura de Lanzallamas.',
          replaces: 'FLAMETHROWER'
        }
      ]
    }
  ]
}

export default salazzle