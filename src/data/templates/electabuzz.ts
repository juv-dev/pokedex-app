import type { PokemonTemplateSet } from '../../lib/types'

const electabuzz: PokemonTemplateSet = {
  internalName: 'ELECTABUZZ',
  templates: [
    {
      role: 'pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STATIC',
      item: 'EVIOLITE',
      nature: 'TIMID',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['THUNDERBOLT', 'VOLTSWITCH', 'PSYCHIC', 'FOCUSBLAST'],
      justification:
        'Electabuzz cubre el rol que Electivire no tiene: con Velocidad 105 y At. Esp. 95 es más rápido que su evolución (95) y casi igual de potente en el lado especial, mientras Electivire es un físico de 123 de Ataque con Motor Drive. Al poder evolucionar, Mineral Evolutivo eleva su Defensa a 85 y su Defensa Especial a 127 efectivas y lo convierte en el pivote eléctrico rápido más voluminoso del juego, muy por encima de Jolteon (60/95) en el lado defensivo. Electricidad Estática en Añil paraliza con 30% a cualquier ataque de contacto, incluso de tipo Tierra, castigando a los físicos que entran a presionarlo. Cambia Voltio mantiene el momentum, Rayo es el STAB, Psíquico castiga a los Lucha y Veneno que entran a absorber la cobertura eléctrica, y Onda Certera (120) es la única vía fiable de golpear a los Tierra que bloquean los Voltios, aceptando la precisión 70 a cambio de romper muros de Tierra. Miedosa con 252 At. Esp. y 252 Velocidad maximiza las dos estadísticas del rol y deja los 4 puntos restantes en PS. Sin Mineral Evolutivo, su Defensa 57 base lo dejaría como un vidrio más del tier; con él, el set pivota y aguanta.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera maximiza el daño de cada golpe cuando el equipo ya tiene un pivote defensivo, a costa del volumen de Mineral Evolutivo.'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Gafas Elección con Cambia Voltio y tres ataques convierte al pivote en rompemuros a cambio de quedar clavado en el movimiento.'
        },
        {
          slot: 'move',
          value: 'TAUNT',
          note: 'Mofa frena a muros de recuperación y leads de trampas, cediendo la cobertura de Tierra de Onda Certera.',
          replaces: 'FOCUSBLAST'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Onda Trueno enfría a los barredores de 100+ de Velocidad a los que no puede huir, cediendo la cobertura de Psíquico.',
          replaces: 'PSYCHIC'
        },
        {
          slot: 'ability',
          value: 'VITALSPIRIT',
          note: 'Espíritu Vital lo blinda frente a Polvo Somnífero e Hipnosis de los leads que buscan dormirlo al entrar, perdiendo el castigo de contacto.'
        }
      ]
    }
  ]
}

export default electabuzz