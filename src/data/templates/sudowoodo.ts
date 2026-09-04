import type { PokemonTemplateSet } from '../../lib/types'

const sudowoodo: PokemonTemplateSet = {
  internalName: 'SUDOWOODO',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'viable',
      ability: 'ROCKHEAD',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HEADSMASH', 'EARTHQUAKE', 'STONEEDGE', 'SUCKERPUNCH'],
      justification:
        'Cabeza Roca anula el retroceso de los movimientos que se lo causan al usuario, así que Sudowoodo dispara Cabezazo (150 de potencia) sin pagar nada. Con Cinta Elección y Ataque 100 ese golpe es una amenaza real, y su Defensa 120 le permite entrar contra físicos para soltarlo. Terremoto es la cobertura obligada contra Acero y Roca que resisten el STAB, Roca Afilada es el STAB fiable cuando no quiere arriesgar la precisión de Cabezazo, y Golpe Bajo aprovecha la Velocidad 50 para pegar con prioridad a lo que intente superarlo. Naturaleza Firme con inversión en PS y Ataque para exprimir tanto la pegada como su volumen físico.',
      alternatives: [
        {
          slot: 'move',
          value: 'STONEAXE',
          note: 'Hacha Pétrea coloca Trampa Rocas al golpear, cambiando algo de potencia por utilidad de equipo.',
          replaces: 'HEADSMASH'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera devuelve la libertad de movimientos para no quedar bloqueado en el golpe equivocado, a cambio de la pegada bruta de la Cinta.'
        },
        {
          slot: 'ability',
          value: 'STURDY',
          note: 'Robustez para un uso de lead que garantiza un turno de Trampa Rocas o Cabezazo contra rivales más rápidos.'
        }
      ]
    }
  ]
}

export default sudowoodo
