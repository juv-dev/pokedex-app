import type { PokemonTemplateSet } from '../../lib/types'

const wyrdeer: PokemonTemplateSet = {
  internalName: 'WYRDEER',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'INTIMIDATE',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DOUBLEEDGE', 'RAGINGBULL', 'EARTHQUAKE', 'SUCKERPUNCH'],
      justification:
        'El volumen 103/72/75 con Intimidación al entrar define al atacante resistente: cada reentrada baja un nivel el Ataque del rival y Restos recuperan entre golpes, de modo que Wyrdeer puede entrar varias veces a pegar con el Ataque 105. Doble Filo es el STAB Normal de 120 con retroceso que Restos compensan; Furia Taurina adopta el segundo tipo de Wyrdeer (Psíquico) y pega 90 con el bonus de retirar las pantallas rivales; Terremoto cubre a Acero y Roca, que resisten Normal y Psíquico; Golpe Bajo con prioridad +1 responde a los Fantasma, inmunes a Normal, y a los Siniestro que resisten Psíquico, y disimula la Velocidad 65. Naturaleza Firme y reparto en PS y Ataque maximizan el intercambio, el punto fuerte del perfil frente a un reparto de Velocidad sin retorno.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera sube todo el daño un 30% para partidas más cortas, a cambio de la recuperación pasiva de Restos.'
        },
        {
          slot: 'move',
          value: 'ZENHEADBUTT',
          note: 'Cabezazo Zen (90) conserva el STAB Psíquico con 20% de retroceso, cediendo la retirada de pantallas de Furia Taurina.',
          replaces: 'RAGINGBULL'
        },
        {
          slot: 'move',
          value: 'WILDCHARGE',
          note: 'Voltio Cruel cubre a Agua y Volador con retroceso, cediendo la cobertura de Terremoto.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'ability',
          value: 'SAPSIPPER',
          note: 'Herbívoro neutraliza los movimientos de Planta y sube el Ataque un nivel, útil frente a equipos con mucha hierba, a cambio de perder Intimidación.'
        }
      ]
    },
    {
      role: 'mixed',
      isPrimary: false,
      confidence: 'viable',
      ability: 'INTIMIDATE',
      item: 'LEFTOVERS',
      nature: 'RASH',
      evs: [252, 252, 0, 4, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['WORKUP', 'DOUBLEEDGE', 'PSYCHIC', 'EARTHPOWER'],
      justification:
        'Aprovecha el 105/105 de Ataque y At. Esp. con Avivar, que sube ambos lados a la vez con un solo turno. Doble Filo golpea contra la Defensa, Psíquico (90) contra la Defensa Especial y Fuerza Equina (90) cubre a Acero y Roca, los tipos que resisten Normal y Psíquico por igual. La naturaleza Alocada sube el At. Esp. cediendo Defensa Especial, y el reparto prioriza PS y Ataque físico porque Doble Filo es la fuente principal de daño. Es viable y no óptimo porque la Velocidad 65 obliga a entrar en situaciones favorables y el set depende de conseguir un turno de Avivar sin pagar demasiado caro el intercambio.',
      alternatives: [
        {
          slot: 'move',
          value: 'PSYSHOCK',
          note: 'Psicocarga mantiene el STAB Psíquico golpeando contra la Defensa del rival, ideal frente a muros especiales; sustituye a Fuerza Equina.',
          replaces: 'EARTHPOWER'
        },
        {
          slot: 'move',
          value: 'RAGINGBULL',
          note: 'Furia Taurina es el STAB Psíquico físico con retirada de pantallas, cediendo el golpe especial de Psíquico.',
          replaces: 'PSYCHIC'
        },
        {
          slot: 'nature',
          value: 'ADAMANT',
          note: 'Firme prioriza el lado físico puro: Avivar sigue subiendo ambos, pero el At. Esp. queda en 105 sin modificar.'
        }
      ]
    }
  ]
}

export default wyrdeer