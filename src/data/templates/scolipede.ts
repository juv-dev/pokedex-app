import type { PokemonTemplateSet } from '../../lib/types'

const scolipede: PokemonTemplateSet = {
  internalName: 'SCOLIPEDE',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SPEEDBOOST',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'MEGAHORN', 'EARTHQUAKE', 'PROTECT'],
      justification:
        'Impulso sube un nivel la Velocidad al final de cada turno, así que desde Velocidad 112 base Scolipede se vuelve inalcanzable en dos turnos. Protección es parte del núcleo: gasta el primer turno protegiéndose para ganar el primer nivel de Velocidad gratis y leer el movimiento rival, y después Danza Espada lleva el Ataque a +2. Megahorn (120 de potencia) es el STAB principal y Terremoto cubre a Acero, Fuego, Roca y Veneno, que son lo que frena al Bicho. Firme maximiza el daño porque la Velocidad ya la resuelve la habilidad; la Vidasfera cierra cálculos sin bloquear el movimiento, cosa clave en un sweeper que necesita alternar entre los dos ataques. El perfil 60/89/69 no aguanta prioridad ni ataques potentes, por eso el plan es proteger, subir y barrer, no quedarse a intercambiar golpes.',
      alternatives: [
        {
          slot: 'move',
          value: 'ROCKSLIDE',
          note: 'Cobertura Roca para Volador y Fuego que esquivan Terremoto, a cambio del nivel de Velocidad y el scouting que da Protección.',
          replaces: 'PROTECT'
        },
        {
          slot: 'move',
          value: 'AQUATAIL',
          note: 'Pega a Tierra y Roca defensivos y a Hippowdon; útil si el equipo ya controla a los Volador.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'item',
          value: 'LUMBERRY',
          note: 'Absorbe un estado (quemadura o parálisis) que arruinaría el intento de barrido, a cambio de la potencia de la Vidasfera.'
        }
      ]
    },
    {
      role: 'hazard-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'SPEEDBOOST',
      item: 'BLACKSLUDGE',
      nature: 'JOLLY',
      evs: [252, 4, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SPIKES', 'TOXICSPIKES', 'MEGAHORN', 'PROTECT'],
      justification:
        'Segundo rol legítimo: colocador rápido de dos capas de trampa. Velocidad 112 más el primer nivel de Impulso tras Protección le permiten poner Púas o Púas Tóxicas antes de que la mayoría de los leads actúen, y como es tipo Veneno terrestre absorbe las Púas Tóxicas rivales al entrar. Megahorn evita ser un blanco pasivo para Mofa y castiga a quien intente quedarse a pararlo, y Protección gana el nivel de Velocidad y activa Lodo Negro. No lleva Danza Espada porque el objetivo aquí es dejar daño de entrada para el equipo, no barrer; por eso es la versión secundaria.',
      alternatives: [
        {
          slot: 'move',
          value: 'EARTHQUAKE',
          note: 'Cambia presión de trampas por cobertura inmediata contra Acero y Veneno que bloquean las Púas Tóxicas.',
          replaces: 'TOXICSPIKES'
        },
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Asegura colocar ambas trampas contra un lead más rápido o más fuerte, a cambio de la recuperación pasiva de Lodo Negro.'
        }
      ]
    }
  ]
}

export default scolipede
