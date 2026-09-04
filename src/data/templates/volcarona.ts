import type { PokemonTemplateSet } from '../../lib/types'

const volcarona: PokemonTemplateSet = {
  internalName: 'VOLCARONA',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'FLAMEBODY',
      item: 'HEAVYDUTYBOOTS',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['QUIVERDANCE', 'FIERYDANCE', 'BUGBUZZ', 'GIGADRAIN'],
      justification:
        'Ataque Especial 135, Def.Esp 105 y Velocidad 100 hacen de Volcarona uno de los mejores usuarios de Danza Aleteo del juego: un solo uso sube Ataque Especial, Def.Esp y Velocidad, y su volumen especial le permite encadenar varios. Botas Gruesas son prácticamente obligadas porque es 4x débil a Trampa Rocas y perdería la mitad de la vida en cada entrada. Danza Llama es la STAB de Fuego de precisión perfecta con opción de subir aún más el Ataque Especial; Zumbido es la STAB de Bicho contra los tipos Psíquico, Siniestro y Planta; Gigadrenado recupera PS y castiga a los tipos Agua, Roca y Tierra que resisten su STAB. Cuerpo Llama desincentiva a los atacantes físicos por contacto durante la preparación. Miedosa maximiza la Velocidad de partida y el IV de Ataque a 0 minimiza la confusión y el Juego Sucio.',
      alternatives: [
        {
          slot: 'move',
          value: 'ROOST',
          note: 'Descanso Aéreo da recuperación fiable e independiente del daño infligido si el rival juega a resistir.',
          replaces: 'GIGADRAIN'
        },
        {
          slot: 'move',
          value: 'PSYCHIC',
          note: 'Psíquico cubre a los tipos Veneno y Lucha, útil si Zumbido no cierra esos cálculos.',
          replaces: 'BUGBUZZ'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera para más potencia inmediata si otro Pokémon del equipo se encarga de limpiar trampas.'
        },
        {
          slot: 'nature',
          value: 'MODEST',
          note: 'Modesta si se confía en la subida de Velocidad de Danza Aleteo y se busca un pico de daño mayor.'
        }
      ]
    }
  ]
}

export default volcarona
