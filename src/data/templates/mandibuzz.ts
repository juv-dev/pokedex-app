import type { PokemonTemplateSet } from '../../lib/types'

const mandibuzz: PokemonTemplateSet = {
  internalName: 'MANDIBUZZ',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'OVERCOAT',
      item: 'HEAVYDUTYBOOTS',
      nature: 'BOLD',
      evs: [248, 0, 252, 0, 8, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FOULPLAY', 'ROOST', 'DEFOG', 'TOXIC'],
      justification:
        'PS 110 con 105 de Defensa y 95 de Def.Esp definen un muro mixto orientado al pivoteo y al control de campo. Descarga bien la mochila: Juego Sucio usa el Ataque del rival, así que no necesita invertir en el propio y castiga precisamente a los atacantes físicos que la fuerzan a entrar; Respiro le da recuperación fiable; Follaje limpia trampas aprovechando su volumen; Tóxico mina a los muros y Pokémon voluminosos que no teme. Funda es la mejor habilidad disponible: la vuelve inmune al daño de granizo y tormenta de arena y a los polvos, algo relevante en un pivote que entra muchas veces; Buenos Reflejos y Armadura Frágil no aportan a este rol. Botas Gruesas son casi obligadas porque un tipo Volador pierde un cuarto de vida por Trampa Rocas en cada reentrada. Osada porque la presión que debe absorber llega sobre todo por el lado físico.',
      alternatives: [
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos si el equipo ya controla el peligro de entrada y se prefiere recuperación pasiva constante.'
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Golpe Bajo quita objetos y da presión inmediata si el equipo no necesita el desgaste de Tóxico.',
          replaces: 'TOXIC'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Ida y Vuelta para reposicionar al equipo si otro Pokémon se encarga de limpiar trampas.',
          replaces: 'DEFOG'
        },
        {
          slot: 'nature',
          value: 'CALM',
          note: 'Serena con inversión en Def.Esp para especializar el muro contra atacantes especiales.'
        }
      ]
    }
  ]
}

export default mandibuzz
