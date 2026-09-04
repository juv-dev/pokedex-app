import type { PokemonTemplateSet } from '../../lib/types'

const hariyama: PokemonTemplateSet = {
  internalName: 'HARIYAMA',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'THICKFAT',
      item: 'ASSAULTVEST',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CLOSECOMBAT', 'KNOCKOFF', 'FAKEOUT', 'BULLETPUNCH'],
      justification:
        'PS 144 es la stat que manda: con Def. Esp. base 60 pero esa reserva de vida, el Chaleco Asalto lo transforma en una esponja especial que a la vez pega con Ataque 120. Sebo reduce a la mitad el daño de Fuego y Hielo, cerrando dos de las coberturas más habituales contra tipo Lucha. A Bocajarro es el STAB principal; Desarme quita objetos y castiga a psíquicos y fantasmas que quieren entrar; Sorpresa aprovecha el primer turno para chip y para frenar setups; Puño Certero da prioridad para no depender de la Velocidad 50. El Chaleco impide usar movimientos de estado, pero el set es puramente ofensivo y reactivo, así que no se pierde nada.',
      alternatives: [
        {
          slot: 'move',
          value: 'HEAVYSLAM',
          note: 'STAB de Acero situacional contra Hadas; Hariyama es pesado y saca buena potencia.',
          replaces: 'BULLETPUNCH'
        },
        {
          slot: 'move',
          value: 'ICEPUNCH',
          note: 'Cobertura para Volador y Dragon/Tierra a cambio de la prioridad.',
          replaces: 'BULLETPUNCH'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'GUTS',
      item: 'FLAMEORB',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FACADE', 'CLOSECOMBAT', 'KNOCKOFF', 'BULLETPUNCH'],
      justification:
        'Con Agallas y Orbe Ígneo, la quemadura sube el Ataque un 50% e ignora la reducción de Ataque por quemadura, y Esfuerzo pasa a 140 de potencia efectiva por su efecto de doblar potencia con estado. Es un rompemuros más explosivo que el del Chaleco, pero pierde el volumen especial y suma el desgaste del orbe. Requiere un turno seguro para activar el objeto y sigue apoyándose en Puño Certero para la Velocidad 50.',
      alternatives: [
        {
          slot: 'move',
          value: 'ICEPUNCH',
          note: 'Cobertura para Volador y Dragón/Tierra a cambio de la prioridad.',
          replaces: 'BULLETPUNCH'
        }
      ]
    }
  ]
}

export default hariyama
