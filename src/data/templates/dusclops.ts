import type { PokemonTemplateSet } from '../../lib/types'

const dusclops: PokemonTemplateSet = {
  internalName: 'DUSCLOPS',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRESSURE',
      item: 'EVIOLITE',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['WILLOWISP', 'NIGHTSHADE', 'PAINSPLIT', 'HAZE'],
      justification:
        'Duskull evoluciona a Dusknoir, así que Dusclops conserva el Mineral Evolutivo: con Defensa 130 y Defensa Especial 130 base, el objeto las eleva a un nivel equivalente a 195/195 y lo vuelve uno de los mejores muros mixtos del formato pese a sus PS 40. Fuego Fatuo reduce a la mitad el daño físico entrante y suma daño residual, Vendetta inflige daño fijo igual al nivel para castigar incluso a lo que su Ataque 70 no puede herir, y Repartir Dolor promedia PS con el rival como única vía de recuperación, muy eficaz partiendo de una barra baja. Niebla evita perder ante un sweeper que se refuerce en su cara. Presión agota los PP de los movimientos que intentan romperlo. Osada maximiza la Defensa y la bajada de Ataque es irrelevante porque Vendetta no escala con esa característica.',
      alternatives: [
        {
          slot: 'move',
          value: 'TRICKROOM',
          note: 'Dusclops es un colocador de Espacio Raro excelente por su Velocidad 25; cámbialo por Niebla si el equipo gira en torno a atacantes lentos.',
          replaces: 'HAZE'
        },
        {
          slot: 'move',
          value: 'TAUNT',
          note: 'Corta trampas, recuperación y estados del rival en los duelos contra otros muros, a cambio del control de setup de Niebla.',
          replaces: 'HAZE'
        },
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Daño real contra Dragón, Tierra y Volador si el equipo necesita que Dusclops amenace algo por sí mismo.',
          replaces: 'NIGHTSHADE'
        }
      ]
    }
  ]
}

export default dusclops
