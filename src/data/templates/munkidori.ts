import type { PokemonTemplateSet } from '../../lib/types'

const munkidori: PokemonTemplateSet = {
  internalName: 'MUNKIDORI',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TOXICCHAIN',
      item: 'CHOICESPECS',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['PSYCHIC', 'SLUDGEWAVE', 'SHADOWBALL', 'PSYCHICNOISE'],
      justification:
        'Munkidori es un rompemuros especial con Ataque Especial 130 y Velocidad 106 sobre el tipo Veneno/Psíquico. Cadena Tóxica envenena gravemente al atacar en contacto, pero aquí el set es enteramente especial, así que el valor real llega de Gafas Elección que multiplica por 1,5 su At. Esp. Psíquico (90, STAB) y Onda Tóxica (95, STAB Veneno, 30% de envenenar) forman la doble STAB, Bola Sombra cubre lo que resiste a ambas (Fantasma y Psíquico), y Psicorruido (75 psíquico) bloquea la curación del rival durante dos turnos, negando a los muros con recuperación. Naturaleza Miedosa y reparto en At. Esp. y Velocidad para superar la franja de los 100-110; su fragilidad (Def 66 / Def. Esp. 90) hace que el rompemuros con Gafas sea la vía más segura que el setup de Maquinación, que exigiría sobrevivir un turno.',
      alternatives: [
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Cambia a un compañero para no quedar bloqueado por las Gafas, a costa de un slot de cobertura ofensiva.',
          replaces: 'PSYCHICNOISE'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera habilita el set de Maquinación sin bloqueo, a cambio de perder el multiplicador de Gafas Elección.'
        }
      ]
    }
  ]
}

export default munkidori
