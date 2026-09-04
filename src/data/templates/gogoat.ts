import type { PokemonTemplateSet } from '../../lib/types'

const gogoat: PokemonTemplateSet = {
  internalName: 'GOGOAT',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SAPSIPPER',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BULKUP', 'HORNLEECH', 'EARTHQUAKE', 'MILKDRINK'],
      justification:
        'Planta puro con PS 123 / Ataque 100 / Def 62 / Def.Esp 81 / Velocidad 68. Herbívoro en Añil neutraliza los movimientos de tipo Planta y sube el Ataque un nivel, incluidos los de estado, así que Gogoat entra gratis ante tipos Planta y ante Paralizador, Polvo Veneno o Drenadoras. Con PS 123 y recuperación doble (Asta Drenaje cura la mitad del daño hecho, Bebe Leche cura el 50% de los PS máximos) monta Corpulencia (+1 Ataque/Defensa) hasta volverse muy difícil de romper en físico mientras devuelve daño constante. Terremoto cubre Acero, Fuego y Veneno que resisten su STAB. Firme porque la Velocidad no es su juego.',
      alternatives: [
        {
          slot: 'move',
          value: 'ROCKSLIDE',
          note: 'Cobertura de tipo Roca para Volador, Fuego y Bicho, a cambio del daño a Acero y Veneno de Terremoto.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'move',
          value: 'LEAFBLADE',
          note: 'STAB más potente de 90 si el equipo ya aporta cura y preferís picos de daño sobre el drenado.',
          replaces: 'HORNLEECH'
        },
        {
          slot: 'ability',
          value: 'PIELHERBACEA',
          note: 'Convierte Doble Filo o Retorno en STAB de tipo Planta potenciado para un perfil más ofensivo; en ese caso se cambia Asta Drenaje por Doble Filo.'
        },
        {
          slot: 'item',
          value: 'ASSAULTVEST',
          note: 'Vira a tanque especial puro a costa de Corpulencia y Bebe Leche, quedando solo con ataques.'
        }
      ]
    }
  ]
}

export default gogoat
