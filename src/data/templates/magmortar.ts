import type { PokemonTemplateSet } from '../../lib/types'

const magmortar: PokemonTemplateSet = {
  internalName: 'MAGMORTAR',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MEGALAUNCHER',
      item: 'LIFEORB',
      nature: 'MODEST',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FLAMETHROWER', 'AURASPHERE', 'DARKPULSE', 'THUNDERBOLT'],
      justification:
        'At.Esp 125 con Megadisparador, que sube un 50% la potencia de los movimientos de pulso y aura: Esfera Aura pasa de 80 a 120 con precisión infalible y Pulso Umbrío de 80 a 120. Eso le da a Magmortar dos golpes de 120 fiables además de su STAB. Lanzallamas de tipo, Esfera Aura para Acero, Normal y Siniestro, Pulso Umbrío para Psíquico y Fantasma, Rayo para Agua y Volador. Vidasfera para presionar sin quedar encerrado. Cuerpo Llama se descarta porque el set no hace contacto y no aporta nada a un rompemuros.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Más potencia inmediata y sin retroceso, a cambio de quedar bloqueado en un movimiento.'
        },
        {
          slot: 'move',
          value: 'FIREBLAST',
          note: 'Sube el pico de daño del STAB, a cambio de bajar la precisión a 85.',
          replaces: 'FLAMETHROWER'
        },
        {
          slot: 'nature',
          value: 'TIMID',
          note: 'Supera a la base 80 neutral y a Adamant base 90; recomendable si el equipo necesita el matchup de Velocidad más que la potencia.'
        }
      ]
    }
  ]
}

export default magmortar
