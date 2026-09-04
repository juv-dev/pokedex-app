import type { PokemonTemplateSet } from '../../lib/types'

const thievul: PokemonTemplateSet = {
  internalName: 'THIEVUL',
  templates: [
    {
      role: 'status-spreader',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TECHNICIAN',
      item: 'LEFTOVERS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SNARL', 'MUDSHOT', 'TOXIC', 'PARTINGSHOT'],
      justification:
        'Experto potencia un 1,5 los movimientos de 60 o menos y Thievul tiene dos de 55 que además debilitan: Alarido pasa a 82 de potencia y baja el Ataque Especial del objetivo, y Disparo Lodo pasa a 82 y baja la Velocidad. Cada golpe del set rinde doble función: Tóxico envenena de forma grave a los muros que quieren quedarse, y Última Palabra reduce Ataque y At. Esp. del rival y cambia a un compañero, dando salida gratis cuando el debuff ya cumplió. El perfil 70/58/58 y Velocidad 90 no sostiene un juego de intercambios, así que Thievul entra, reparte estados con la subida de Miedosa en Velocidad y se retira; Restos cubren el desgaste residual. El rol de barredor especial queda descartado como primario porque el At. Esp. 87 no tiene un pico suficiente sin mejora previa.',
      alternatives: [
        {
          slot: 'move',
          value: 'FAKETEARS',
          note: 'Llanto Falso baja dos niveles la Defensa Especial del objetivo, preparándoselo a un rompedor especial del equipo; sustituye a Tóxico.',
          replaces: 'TOXIC'
        },
        {
          slot: 'move',
          value: 'DARKPULSE',
          note: 'Pulso Umbrío añade un STAB de daño puro de 80, cediendo el control de velocidad de Disparo Lodo.',
          replaces: 'MUDSHOT'
        },
        {
          slot: 'move',
          value: 'ASSURANCE',
          note: 'Buena Baza (60) sube con Experto a 90 y se duplica si el objetivo ya perdió PS ese turno, cediendo la salida de Última Palabra.',
          replaces: 'PARTINGSHOT'
        },
        {
          slot: 'move',
          value: 'TAUNT',
          note: 'Mofa bloquea la recuperación y las trampas de muros defensivos, cediendo el envenenamiento de Tóxico.',
          replaces: 'TOXIC'
        }
      ]
    },
    {
      role: 'sweeper-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'UNBURDEN',
      item: 'SITRUSBERRY',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'DARKPULSE', 'SHADOWBALL', 'SUBSTITUTE'],
      justification:
        'Variante de barredor rápido condicionada: Liviano duplica la Velocidad cuando el objeto se usa, y la Baya Zidra se consume al caer a la mitad de los PS, llevando a Thievul a un orden de Velocidad equivalente al doble de 90 base. Maquinación pone el At. Esp. en +2, Pulso Umbrío es el STAB Siniestro, Bola Sombra cubre a Psíquico y Fantasma, y Sustituto protege la mejora frente a estados y golpes débiles. Reparto de At. Esp. y Velocidad con Miedosa. Es viable y no óptimo porque necesita recibir un golpe para activar el disparador: exige entrar en el momento correcto y el volumen 70/58/58 no perdona errores.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera entrega el 1,3 de daño sin depender de recibir un golpe, a cambio de no activar nunca Liviano.'
        },
        {
          slot: 'move',
          value: 'PARTINGSHOT',
          note: 'Última Palabra da una salida limpia si la mejora no prospera, cediendo la cobertura de Bola Sombra.',
          replaces: 'SHADOWBALL'
        }
      ]
    }
  ]
}

export default thievul