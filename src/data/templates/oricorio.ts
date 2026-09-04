import type { PokemonTemplateSet } from '../../lib/types'

const oricorio: PokemonTemplateSet = {
  internalName: 'ORICORIO',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'DANCER',
      item: 'LEFTOVERS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'REVELATIONDANCE', 'HURRICANE', 'ROOST'],
      justification:
        'At. Esp. 98 y Velocidad 93 con acceso a Paz Mental y Respiro definen a un barredor de mejora: Paz Mental sube el ataque y la defensa especiales y Respiro recupera la mitad de los PS, así que Oricorio puede instalarse y quedarse. Danza Despertar adopta el primer tipo del usuario (Fuego) y pega 90 con precisión perfecta: es a la vez STAB y la vía de daño principal; Vendaval aporta el segundo STAB Volador de 110 que golpea a las Roca que resisten el fuego, con su precisión 70 compensada por un 30% de confusión. Restos cubren el desgaste y Miedosa maximiza la Velocidad real. Pareja de Baile es el multiplicador de contexto: al ser la propia Danza Despertar un movimiento con flag de baile, Oricorio replica automáticamente cualquier baile que use otro Pokémon presente en el combate, de modo que una danza de mejora aliada o rival se convierte en una subida gratis que acelera la puesta a punto sin gastar turno propio.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera sube todo el daño un 30% y cierra partidas más rápido, a cambio de perder la recuperación pasiva de Restos.'
        },
        {
          slot: 'move',
          value: 'TAILWIND',
          note: 'Viento Afín duplica la Velocidad del bando durante cuatro turnos: control de velocidad para el equipo, cediendo la recuperación de Respiro.',
          replaces: 'ROOST'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Ida y Vuelta cede el turno con momentum cuando el enfrentamiento es malo, a cambio de la recuperación de Respiro.',
          replaces: 'ROOST'
        }
      ]
    },
    {
      role: 'support',
      isPrimary: false,
      confidence: 'viable',
      ability: 'DANCER',
      item: 'HEAVYDUTYBOOTS',
      nature: 'TIMID',
      evs: [252, 0, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DEFOG', 'TAILWIND', 'REVELATIONDANCE', 'UTURN'],
      justification:
        'Uso de apoyo con la misma base: Fuego/Volador sufre 4x de Trampa Rocas, y las Botas Gruesas eliminan ese coste de reentrada para un pivote que va a cambiar mucho. Despejar retira las trampas propias y las pantallas rivales, Viento Afín duplica la Velocidad del bando, e Ida y Vuelta reposiciona al equipo sin perder el turno; Danza Despertar (90, tipo Fuego) es el único ataque y evita que el apoyo sea pasivo. Reparto de PS y Velocidad con Miedosa para maximizar el volumen y el orden de turnos. Es viable y no óptimo porque el rol de apoyo no aprovecha el At. Esp. 98 tan bien como el de barredor y Oricorio carece de recuperación propia fuera de Respiro.',
      alternatives: [
        {
          slot: 'move',
          value: 'ROOST',
          note: 'Respiro da longevidad al apoyo, cediendo la retirada de trampas de Despejar.',
          replaces: 'DEFOG'
        },
        {
          slot: 'move',
          value: 'TAUNT',
          note: 'Mofa frena leads de trampas y muros de recuperación, cediendo el control de velocidad de Viento Afín.',
          replaces: 'TAILWIND'
        }
      ]
    }
  ]
}

export default oricorio