import type { PokemonTemplateSet } from '../../lib/types'

const zangoose: PokemonTemplateSet = {
  internalName: 'ZANGOOSE',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TOXICBOOST',
      item: 'TOXICORB',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FACADE', 'CLOSECOMBAT', 'KNOCKOFF', 'QUICKATTACK'],
      justification:
        'Toxicorbe envenena al usuario al final del primer turno y a partir de ahí Ímpetu Tóxico suma un 50% a los ataques físicos. Enfado (Facade) además duplica su potencia de 70 a 140 con el envenenamiento y su penalización solo se aplica con quemadura, no con veneno, así que se combina limpio: STAB Normal equivalente a más de 200 de potencia sobre un Ataque base 115. A Bocajarro rompe a los Roca, Acero y Normal que resisten Enfado, Desarme quita objetos y pega a los Fantasma, y Ataque Rápido es la prioridad para rematar. Velocidad 100 es decente. Firme para exprimir el pico de daño.',
      alternatives: [
        {
          slot: 'move',
          value: 'SWORDSDANCE',
          note: 'Convierte al rompemuros en barredor si el equipo no necesita la prioridad de Ataque Rápido.',
          replaces: 'QUICKATTACK'
        },
        {
          slot: 'move',
          value: 'GUNKSHOT',
          note: 'Castiga a los Hada que frenan por completo a Enfado y A Bocajarro.',
          replaces: 'KNOCKOFF'
        }
      ]
    }
  ]
}

export default zangoose
