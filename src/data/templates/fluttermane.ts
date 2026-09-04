import type { PokemonTemplateSet } from '../../lib/types'

const fluttermane: PokemonTemplateSet = {
  internalName: 'FLUTTERMANE',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PROTOSYNTHESIS',
      item: 'BOOSTERENERGY',
      nature: 'TIMID',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHADOWBALL', 'MOONBLAST', 'THUNDERBOLT', 'MYSTICALFIRE'],
      justification:
        'Flutter Mane es el barredor especial puro del tier en Añil V4.13: SpA 135, Velocidad 135 y Def.Esp 135 con PS 55 que lo vuelven un cristal ofensivo. El Tanque de Energía Potenciadora activa Paleosíntesis sin sol y eleva su mejor estadística, lo que con 252 en At.Esp. y Velocidad con naturaleza Miedosa le permite superar y romper los muros del metagame. Bola Sombra y Fuerza Lunar son las dobles STAB Fantasma/Hada con buen emparejamiento, Rayo pega a Agua y Volador y Llama Embrujada cubre el tipo Acero mientras baja el At.Esp. rival. La inversión total en ofensa y velocidad es la correcta para un stat skew de 135/135 que no necesita defensas para imponerse.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Gafas Elección dan un pico de daño aún mayor sobre Paleosíntesis, a cambio de quedar bloqueado en un movimiento y perder la capacidad de pivotar.'
        },
        {
          slot: 'move',
          value: 'CALMMIND',
          note: 'Paz Mental convierte a Flutter Mane en un setup que sube At.Esp. y Def.Esp. para romper muros, a cambio de un hueco de cobertura.'
        },
        {
          slot: 'move',
          value: 'ENERGYBALL',
          note: 'Energibola cubre a los tipos Tierra y Agua que resisten sus STAB, en lugar del chequeo a Agua y Volador de Rayo.',
          replaces: 'THUNDERBOLT'
        }
      ]
    }
  ]
}

export default fluttermane
