import type { PokemonTemplateSet } from '../../lib/types'

const crobat: PokemonTemplateSet = {
  internalName: 'CROBAT',
  templates: [
    {
      role: 'pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'INFILTRATOR',
      item: 'HEAVYDUTYBOOTS',
      nature: 'JOLLY',
      evs: [252, 0, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BRAVEBIRD', 'UTURN', 'ROOST', 'DEFOG'],
      justification:
        'En Añil V4.13 Crobat conserva la Velocidad 130 y PS 85 con defensas 80/80, el perfil de un pivote ofensivo rapidísimo. Ida y Vuelta mantiene el ritmo cediendo el turno con ventaja, Pájaro Osado es el STAB de pegada, Respiro recupera la mitad de los PS y Despejar limpia las trampas del campo propio. Allanamiento hace que sus ataques ignoren Sustituto y pantallas, lo que le da valor extra contra equipos ofensivos que abusan de Sustituto. Botas Gruesas son casi obligatorias: el tipo Volador sufre x2 de Trampa Rocas y un pivote que reentra sin parar no puede pagar ese peaje. Reparto en PS y Velocidad con naturaleza Alegre para no ceder el tope de Velocidad.',
      alternatives: [
        {
          slot: 'move',
          value: 'TAUNT',
          note: 'Mofa frena trampas, setup y recuperación del rival aprovechando la Velocidad 130, a cambio del control de trampas de Despejar.',
          replaces: 'DEFOG'
        },
        {
          slot: 'move',
          value: 'CROSSPOISON',
          note: 'Veneno X aporta el segundo STAB con opción de envenenar y castiga a las Hadas, para un pivote más agresivo que renuncia a curarse.',
          replaces: 'ROOST'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera sube el daño de cada golpe para un rol más ofensivo; sin Botas Gruesas hay que asumir el daño de Trampa Rocas en cada entrada.'
        }
      ]
    },
    {
      role: 'sweeper-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'INFILTRATOR',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BRAVEBIRD', 'CROSSPOISON', 'UTURN', 'CRUNCH'],
      justification:
        'Uso ofensivo que exprime la Velocidad 130 y un Ataque 90 potenciado por Vidasfera. Pájaro Osado y Veneno X son los dos STAB, Triturar cubre a Psíquicos y Fantasmas que aguantan lo demás e Ida y Vuelta permite salir sin quedar atrapado en la lectura equivocada. Allanamiento mantiene el daño a través de Sustituto y pantallas, algo que en un enfrentamiento rápido decide turnos. Naturaleza Alegre y máxima Velocidad para llegar siempre primero; el reparto ofensivo asume la fragilidad a cambio de presión inmediata.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta Elección convierte a Crobat en un revienta-equipos por Velocidad; hay que aceptar el bloqueo de movimiento.'
        },
        {
          slot: 'move',
          value: 'ROOST',
          note: 'Respiro devuelve algo de longevidad para incordiar toda la partida, a costa de la cobertura de Triturar.',
          replaces: 'CRUNCH'
        }
      ]
    }
  ]
}

export default crobat
