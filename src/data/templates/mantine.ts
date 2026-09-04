import type { PokemonTemplateSet } from '../../lib/types'

const mantine: PokemonTemplateSet = {
  internalName: 'MANTINE',
  templates: [
    {
      role: 'wall-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'WATERABSORB',
      item: 'HEAVYDUTYBOOTS',
      nature: 'CALM',
      evs: [248, 0, 12, 0, 248, 0],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['SCALD', 'ROOST', 'DEFOG', 'HAZE'],
      justification:
        'Def.Esp 140 con PS 85 y Defensa 70 lo señalan como muro especial que además limpia trampas. Absorbe Agua le da inmunidad a un tipo ofensivo entero y cura 1/4 al recibirlo, algo enorme para un muro con Descanso Alas como única otra fuente de recuperación. Escaldar castiga por quemadura a los físicos que intentan aprovechar su Defensa mediocre, Vuelo retira Púas y Trampa Rocas, y Deshielo resetea las mejoras de cualquier sweeper que intente prepararse encima. El tipo Agua/Volador tiene una debilidad de 2x a Roca y Trampa Rocas le pega el 25% al entrar, así que Botas Gruesas es obligatorio para que pueda pivotar de forma repetida. Reparto 248/248 en PS y Def.Esp con Serena; IV de Ataque 0 para minimizar confusión y Bola Foul.',
      alternatives: [
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Rayo Hielo pega a Dragón, Planta y Volador que ignoran o resisten Escaldar, a cambio del reseteo de mejoras de Deshielo.',
          replaces: 'HAZE'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos si el equipo ya tiene retirada de trampas y Mantine no necesita las Botas Gruesas: cura pasiva mayor a cambio de comer el 25% de Trampa Rocas al entrar.'
        }
      ]
    }
  ]
}

export default mantine
