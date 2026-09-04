import type { PokemonTemplateSet } from '../../lib/types'

const flareon: PokemonTemplateSet = {
  internalName: 'FLAREON',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'viable',
      ability: 'GUTS',
      item: 'FLAMEORB',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FLAREBLITZ', 'FACADE', 'SUPERPOWER', 'QUICKATTACK'],
      justification:
        'Flareon en Añil V4.13 tiene Ataque 130, Def. Esp. 110 y PS 75, con Velocidad 65 que lo saca del molde de barredor y lo lleva al de atacante resistente. Agallas sube el Ataque un 50% cuando hay estado alterado y, con Llamígera autoinfligida, Fachada dobla su potencia a 140 sin sufrir la bajada de Ataque de la quemadura. Envite Ígneo es el STAB de choque, Fuerza Bruta castiga a Roca, Normal, Acero y Siniestro, y Ataque Rápido da prioridad para rematar. Su buena Def. Esp. y sus PS le permiten entrar varias veces por el lado especial para aprovechar el impulso de Agallas. Naturaleza Firme y reparto en PS y Ataque para pegar fuerte reentrando.',
      alternatives: [
        {
          slot: 'ability',
          value: 'FLASHFIRE',
          note: 'Absorbe Fuego da inmunidad al tipo Fuego y un impulso al recibir ese tipo; encaja con Banda Elección para presión inmediata sin depender del ciclo de quemadura.'
        },
        {
          slot: 'move',
          value: 'TRAILBLAZE',
          note: 'Sendero Vil sube la Velocidad al golpear, opción para escalar la ofensiva en lugar de la prioridad de Ataque Rápido.',
          replaces: 'QUICKATTACK'
        },
        {
          slot: 'move',
          value: 'TEMPERFLARE',
          note: 'Pirotecnia evita el retroceso de Envite Ígneo y dobla su potencia si el movimiento anterior falló, alternativa para no gastar PS propios.',
          replaces: 'FLAREBLITZ'
        }
      ]
    }
  ]
}

export default flareon
