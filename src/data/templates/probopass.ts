import type { PokemonTemplateSet } from '../../lib/types'

const probopass: PokemonTemplateSet = {
  internalName: 'PROBOPASS',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MAGNETPULL',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'VOLTSWITCH', 'POWERGEM', 'EARTHPOWER'],
      justification:
        'Def 145 / Def.Esp 150 y doble tipo Roca/Acero, que resiste una enorme cantidad de ataques (Normal, Volador, Roca, Acero, Veneno, Hielo, Fuego, Fantasma, Psíquico, Hada, Dragón, Bicho). Imán impide huir o cambiar a los Acero rivales: Probopass entra, atrapa a un colocador o muro de Acero enemigo y lo elimina o lo agota. Trampa Rocas de entrada, Voltiocambio conserva el momentum pese a la Velocidad 40, Joya Luz y Tierra Viva son el daño. PS 60 obliga a invertir 252 en PS para que la bulk enorme se traduzca en aguante real.',
      alternatives: [
        {
          slot: 'ability',
          value: 'STURDY',
          note: 'Garantiza colocar Trampa Rocas ante ofensivas rápidas, a cambio de dejar escapar a los Acero.'
        },
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Aprovecha la Defensa 145 como daño; requiere naturaleza Osada en lugar de Serena.',
          replaces: 'EARTHPOWER'
        },
        {
          slot: 'move',
          value: 'FLASHCANNON',
          note: 'STAB de Acero más fiable contra Hada que Joya Luz de Roca.',
          replaces: 'POWERGEM'
        }
      ]
    }
  ]
}

export default probopass
