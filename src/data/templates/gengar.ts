import type { PokemonTemplateSet } from '../../lib/types'

const gengar: PokemonTemplateSet = {
  internalName: 'GENGAR',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'CURSEDBODY',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHADOWBALL', 'SLUDGEWAVE', 'FOCUSBLAST', 'NASTYPLOT'],
      justification:
        'Gengar en Añil V4.13 tiene At. Esp. 130 y Velocidad 110, el molde exacto de barredor especial rápido. Golpe Fantasma es el STAB principal con posibilidad de bajar la Def. Esp., Onda Tóxica es el segundo STAB de tipo Veneno para pegar a las Hadas y los Planta, y Onda Certera cubre a los Normal, Siniestro y Acero que resisten esa combinación. Golpe Bajo sube dos niveles el At. Esp. y, sumado a la Velocidad 110, deja a Gengar rematando equipos enteros tras un solo impulso. Cuerpo Maldito tiene un 30% de anular el movimiento que lo golpea, un extra defensivo que puede desactivar el ataque de un rival lento. Es su set óptimo con poco debate. Vidasfera maximiza el daño inmediato y las probabilidades de 2HKO; la fragilidad (PS 60 / Def 60) es aceptable en un Pokémon cuya función es entrar, potenciarse y limpiar. Naturaleza Miedosa y reparto en At. Esp. y Velocidad para no ceder ninguna carrera relevante.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Gafas Elección más Truco pega desde el turno uno sin necesidad de Golpe Bajo y puede lastrar a un muro pasándole las Gafas, a cambio de la flexibilidad de cambiar de movimiento.'
        },
        {
          slot: 'move',
          value: 'THUNDERBOLT',
          note: 'Rayo es cobertura fiable contra Agua y Volador voluminosos y evita la precisión de 70 de Onda Certera, a cambio del daño a los Acero y Siniestro.',
          replaces: 'FOCUSBLAST'
        },
        {
          slot: 'move',
          value: 'DESTINYBOND',
          note: 'Mismo Destino convierte a Gengar en un revenge killer que se lleva por delante a la amenaza que lo remate, con Banda Aguante en vez de Vidasfera, cediendo el potencial de barrido de Golpe Bajo.',
          replaces: 'NASTYPLOT'
        }
      ]
    }
  ]
}

export default gengar
