import type { PokemonTemplateSet } from '../../lib/types'

const shedinja: PokemonTemplateSet = {
  internalName: 'SHEDINJA',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'viable',
      ability: 'WONDERGUARD',
      item: 'HEAVYDUTYBOOTS',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['XSCISSOR', 'SHADOWSNEAK', 'WILLOWISP', 'PROTECT'],
      justification:
        'Superguarda hace que solo los movimientos supereficaces hagan daño, y con 1 PS eso significa que cualquier golpe neutro, la quemadura, el veneno, el clima o el retroceso lo tumban de un toque. Botas Gruesas es obligatorio: Trampa Rocas es supereficaz contra el tipo Bicho/Fantasma y lo eliminaría en la reentrada. Contra un equipo sin cobertura de Fuego, Volador, Roca, Fantasma ni Siniestro, Shedinja pasa a ser intocable y rompe por Tijera X y Sombra Vil. Fuego Fatuo mina a los físicos que sí podrían tener un golpe supereficaz; Protección lee la cobertura rival antes de comprometerse. Es una plantilla extremadamente dependiente del emparejamiento: contra el equipo equivocado no hace nada, y por eso queda como viable y no como óptimo.',
      alternatives: [
        {
          slot: 'move',
          value: 'POLTERGEIST',
          note: 'STAB de Fantasma mucho más potente si el objetivo lleva objeto, a cambio de fallar si no lo lleva.',
          replaces: 'XSCISSOR'
        },
        {
          slot: 'move',
          value: 'HONECLAWS',
          note: 'Sube Ataque y precisión si Shedinja encuentra varios turnos libres contra un equipo sin cobertura.',
          replaces: 'WILLOWISP'
        },
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Un golpe supereficaz extra sobrevivido, pero no protege del daño pasivo ni de Trampa Rocas.'
        }
      ]
    }
  ]
}

export default shedinja
