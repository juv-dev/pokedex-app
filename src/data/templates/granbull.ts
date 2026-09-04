import type { PokemonTemplateSet } from '../../lib/types'

const granbull: PokemonTemplateSet = {
  internalName: 'GRANBULL',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'INTIMIDATE',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 96, 160, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BULKUP', 'PLAYROUGH', 'CLOSECOMBAT', 'EARTHQUAKE'],
      justification:
        'En Añil, Granbull es Hada/Lucha, y esa combinación ofensiva es su verdadera arma: Carantoña (90, hada) y Close Combat (120, lucha) casi no tienen resistencia compartida salvo Veneno/Volador. Ataque 120 con PS 90 y Velocidad 45 lo definen como atacante resistente, no como sweeper: Intimidación baja el Ataque del rival al entrar y, junto a Corpulencia, le permite reforzar Ataque y Defensa hasta volverse difícil de frenar por el lado físico. Terremoto cubre a los Veneno y Acero que aguantan los STAB. Restos y el reparto 252/96/160 en PS, Ataque y Defensa compensan la ausencia de recuperación instantánea; el tipo Hada le da inmunidad a Dragón y resistencias a Siniestro, Bicho y Lucha.',
      alternatives: [
        {
          slot: 'move',
          value: 'CRUNCH',
          note: 'Triturar pega a los Fantasmas que bloquean Close Combat y a los Psíquico que amenazan a Granbull, a cambio de la cobertura de Terremoto.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'item',
          value: 'ASSAULTVEST',
          note: 'Chaleco Asalto cubre la Def.Esp 60 y convierte a Granbull en un atacante de cuatro botones (Voz Áspera / Close Combat / Triturar / Terremoto), renunciando a Corpulencia.'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Onda Trueno para paliar la Velocidad 45 frenando a lo que entre, a costa de la cobertura de Terremoto.',
          replaces: 'EARTHQUAKE'
        }
      ]
    }
  ]
}

export default granbull
