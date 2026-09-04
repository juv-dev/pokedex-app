import type { PokemonTemplateSet } from '../../lib/types'

const avalugg: PokemonTemplateSet = {
  internalName: 'AVALUGG',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STURDY',
      item: 'LEFTOVERS',
      nature: 'CAREFUL',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['RECOVER', 'BODYPRESS', 'RAPIDSPIN', 'AVALANCHE'],
      justification:
        'Defensa 184 es de las más altas del juego, y a diferencia de casi todos los muros físicos de ese nivel Avalugg tiene recuperación fiable propia con Recuperación. Como la Defensa es tan absurda que no necesita inversión, los EVs van a PS y Defensa Especial para tapar el lado flojo (Def.Esp 46). Fuerza Bruta usa esa Defensa 184 como estadística de daño, así que pega durísimo sin invertir Ataque; Giro Rápido limpia las trampas del propio campo y sube Velocidad; Alud es el STAB de Hielo que castiga Dragón, Volador, Tierra y Planta. Robustez es un seguro contra el intento de KO de un solo golpe desde un atacante especial de tipo Fuego o Acero. El resultado es un muro físico que además hace de limpiador de trampas, un doble rol poco común.',
      alternatives: [
        {
          slot: 'move',
          value: 'EARTHQUAKE',
          note: 'Golpea a los Acero y Fuego que resisten Fuerza Bruta y Alud a la vez.',
          replaces: 'AVALANCHE'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Ignora Trampa Rocas al entrar, relevante por la debilidad x2 del tipo Hielo puro; renuncia al desgaste de Restos.'
        },
        {
          slot: 'move',
          value: 'ICICLECRASH',
          note: 'STAB de Hielo de 85 con posible retroceso y sin depender de recibir daño antes, a cambio de precisión.',
          replaces: 'AVALANCHE'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'STURDY',
      item: 'LEFTOVERS',
      nature: 'CAREFUL',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CURSE', 'RECOVER', 'BODYPRESS', 'AVALANCHE'],
      justification:
        'Maldición sobre un usuario que no es de tipo Fantasma sube Ataque y Defensa a cambio de Velocidad, algo que a Avalugg no le cuesta nada con 28 de Velocidad base. Cada Maldición hace a Fuerza Bruta pegar aún más fuerte al subir la Defensa, y Recuperación mantiene los PS mientras acumula. Robustez asegura el primer turno de setup. Es una condición de victoria lenta contra equipos defensivos que no pueden romper su Defensa ni forzarlo a cambiar. Es viable y no óptimo porque contra equipos ofensivos rápidos con cobertura especial no tiene tiempo de acumular.',
      alternatives: [
        {
          slot: 'move',
          value: 'IRONDEFENSE',
          note: 'Sube Defensa el doble de rápido que Maldición si solo interesa potenciar Fuerza Bruta y no el Ataque directo.',
          replaces: 'CURSE'
        }
      ]
    }
  ]
}

export default avalugg
