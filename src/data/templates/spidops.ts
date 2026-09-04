import type { PokemonTemplateSet } from '../../lib/types'

const spidops: PokemonTemplateSet = {
  internalName: 'SPIDOPS',
  templates: [
    {
      role: 'hazard-lead',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STAKEOUT',
      item: 'HEAVYDUTYBOOTS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STICKYWEB', 'UTURN', 'KNOCKOFF', 'FIRSTIMPRESSION'],
      justification:
        'El perfil de stats manda: Ataque 100 y Velocidad 35 lo dejan fuera del tier ofensivo, pero PS 70 / Def 92 / Def.Esp 86 más su acceso a Red Viscosa, Púas y Mofa lo hacen un lead lento de manual. Reparto físico defensivo con Agitada para aguantar el primer golpe y dejar la trampa. Ida y Vuelta cede el turno a un compañero, Desarme castiga al que entra y Escaramuza (prioridad +2, 90 de potencia) evita que un setup sweeper lo use de cambio gratis en el turno 1 y rompe Banda Aguante y Robustez. Botas Gruesas porque un pivote de tipo Bicho no puede pagar 2x Trampa Rocas cada reentrada. Vigilante sobre Experto porque ningún movimiento del set baja de 60 de potencia, así que Experto no aporta nada; Vigilante solo dobla el daño contra un rival que se incorpora por cambio ese mismo turno, y la Velocidad 35 hace que Spidops ataque después de que el cambio se resuelve, así que un Ida y Vuelta o Escaramuza bien predichos contra el entrante pegan doble.',
      alternatives: [
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Lead suicida: garantiza al menos una acción de trampa contra un lead más rápido o más fuerte, a cambio de no poder reentrar sin coste.'
        },
        {
          slot: 'move',
          value: 'SPIKES',
          note: 'Segunda capa de trampa si el equipo prioriza daño por cambio sobre quitar el objeto rival.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'move',
          value: 'TAUNT',
          note: 'Gana el duelo de leads: frena trampas, setup y recuperación del rival, a cambio de la presión inmediata de Escaramuza.',
          replaces: 'FIRSTIMPRESSION'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'STAKEOUT',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FIRSTIMPRESSION', 'UTURN', 'KNOCKOFF', 'THROATCHOP'],
      justification:
        'Uso secundario y de tier más bajo: Ataque 100 más Cinta Elección pega fuerte, pero Velocidad 35 lo deja atrás de casi todo. Escaramuza (prioridad +2) garantiza un golpe pese a la Velocidad, Ida y Vuelta mantiene el momentum sin quedar bloqueado en el movimiento equivocado, y Desarme y Golpe Mordaza son la cobertura. Firme maximiza el poder porque la Velocidad es causa perdida. Vigilante es el núcleo aquí: un usuario de Cinta es predecible y suele forzar cambios, y si Spidops golpea al Pokémon que entra ese mismo turno el daño se dobla. No es un bonus pasivo ni se activa por llevar Cinta: hay que predecir el cambio. Experto queda descartado porque el set no tiene movimientos de 60 o menos.',
      alternatives: [
        {
          slot: 'move',
          value: 'POISONJAB',
          note: 'Cobertura veneno que pega limpio a hadas y muros de tipo planta, a cambio del bloqueo de sonido y recuperación de Golpe Mordaza.',
          replaces: 'THROATCHOP'
        }
      ]
    }
  ]
}

export default spidops
