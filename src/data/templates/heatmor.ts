import type { PokemonTemplateSet } from '../../lib/types'

const heatmor: PokemonTemplateSet = {
  internalName: 'HEATMOR',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'EARTHEATER',
      item: 'ASSAULTVEST',
      nature: 'ADAMANT',
      evs: [248, 252, 0, 0, 8, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FIRELASH', 'SUPERPOWER', 'KNOCKOFF', 'THUNDERPUNCH'],
      justification:
        'En Añil Heatmor es tipo Fuego/Acero, un reparto defensivo excelente que resiste Normal, Planta, Hielo, Bicho, Acero, Hada, Psíquico, Dragón y Fuego, y es inmune a Veneno. Sobre esa base, Geofagia elimina su peor debilidad: los movimientos de tipo Tierra pasan a curarle en vez de dañarle, de modo que solo queda expuesto a Lucha y Agua. Con un físico de 85/86/86, Chaleco Asalto refuerza el lado especial y lo convierte en un atacante muy difícil de tumbar que se limita a pulsar ataques. Látigo Ígneo es la STAB de Fuego sin retroceso que además baja la Defensa rival; Fuerza Bruta rompe a los muros; Desarme quita objetos y castiga Fantasma y Psíquico; Puño Trueno cubre a los tipos Agua y Volador, sus amenazas reales. Firme porque el Ataque Especial no se usa y la Velocidad 65 no da para invertir.',
      alternatives: [
        {
          slot: 'ability',
          value: 'FLASHFIRE',
          note: 'Absorbe Fuego da un cambio seguro extra contra ataques de ese tipo, aunque Fuego/Acero ya los resiste doble.'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos si se prefiere recuperación pasiva y la libertad de usar un movimiento de estado.'
        },
        {
          slot: 'move',
          value: 'FLAREBLITZ',
          note: 'Envite Ígneo pega mucho más fuerte, a costa del retroceso de 1/3 que Chaleco Asalto no compensa.',
          replaces: 'FIRELASH'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'EARTHEATER',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHIFTGEAR', 'FIRELASH', 'SUPERPOWER', 'SUCKERPUNCH'],
      justification:
        'Heatmor tiene Cambio de Marcha en su repertorio legal, lo que le da un plan de barrido que su Velocidad base 65 no sugiere: un solo uso sube un nivel el Ataque y dos la Velocidad. Geofagia protege el turno de mejora frente a los ataques de Tierra y Fuego/Acero le da entradas seguras para prepararlo. Tras el impulso, Látigo Ígneo es la STAB principal, Fuerza Bruta rompe muros y Golpe Bajo remata a los frágiles más rápidos que la mejora todavía no adelanta. Es una opción viable y no óptima porque su Ataque base 110 sin objeto de refuerzo permanente deja algunos cálculos justos y depende de encontrar el turno libre.',
      alternatives: [
        {
          slot: 'move',
          value: 'THUNDERPUNCH',
          note: 'Cambia el remate prioritario por cobertura contra Agua y Volador durante el barrido.',
          replaces: 'SUCKERPUNCH'
        }
      ]
    }
  ]
}

export default heatmor
