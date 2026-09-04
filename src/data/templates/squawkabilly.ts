import type { PokemonTemplateSet } from '../../lib/types'

const squawkabilly: PokemonTemplateSet = {
  internalName: 'SQUAWKABILLY',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'GUTS',
      item: 'FLAMEORB',
      nature: 'ADAMANT',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FACADE', 'BRAVEBIRD', 'UTURN', 'ROOST'],
      justification:
        'Squawkabilly tiene Ataque 106 y Velocidad 102 pero un volumen pobre (PS 82 / Def 51 / Def. Esp. 61), así que su rol es el de rompemuros físico rápido, no el de muro ni el de pivot resistente. El set explota Agallas ("si sufre un problema de estado, aumenta su Ataque en un 50%, ignorando la reducción de Ataque en caso de estar quemado") con Llamasfera: la quemadura autoinfligida sube el Ataque un 50% y no reduce el daño físico, y convierte a Fachada en un golpe Normal de 140 de potencia. Pájaro Osado es el STAB Volador que pega limpio a los tipos Lucha y Planta que resisten Normal, e Ida y Vuelta mantiene el momentum tras romper. Respiro recupera el desgaste de la quemadura y de los retrocesos y de paso elimina el tipo Volador mientras dura. Naturaleza Firme y reparto en Ataque y Velocidad para maximizar el pico de daño del set de Agallas.',
      alternatives: [
        {
          slot: 'ability',
          value: 'INTIMIDATE',
          note: 'Intimidación con Cinta Elección convierte a Squawkabilly en un pivot físico más seguro que no necesita el turno de quemadura, a cambio del pico de Agallas.',
          replaces: 'GUTS'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta Elección da poder inmediato sin turno de activación, pero bloquea el movimiento y pierde el bonus de Agallas sobre Fachada.',
          replaces: 'FLAMEORB'
        },
        {
          slot: 'move',
          value: 'PARTINGSHOT',
          note: 'Última Palabra baja Ataque y Ataque Especial del rival y saca a Squawkabilly sin coste, a cambio de la recuperación de Respiro.',
          replaces: 'ROOST'
        }
      ]
    }
  ]
}

export default squawkabilly
