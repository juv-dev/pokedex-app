import type { PokemonTemplateSet } from '../../lib/types'

const malamar: PokemonTemplateSet = {
  internalName: 'MALAMAR',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'CONTRARY',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SUPERPOWER', 'KNOCKOFF', 'PSYCHOCUT', 'REST'],
      justification:
        'Siniestro/Psíquico con base 86/100/88/68/85/73. Respondón en Añil invierte los cambios de estadística, así que Fuerza Bruta (120, que normalmente baja Ataque y Defensa un nivel) pasa a subir Ataque y Defensa un nivel por uso: cada ataque es a la vez daño y setup ofensivo y defensivo. Desarme quita el objeto rival y castiga a Fantasma y Psíquico, y Psicocorte es el STAB fiable sin retroceso. Descanso aprovecha que Respondón no afecta el sueño y da recuperación total mientras la Defensa sube sola con Fuerza Bruta. Firme; la Velocidad 73 lo hace atacante resistente, no barredor, y por eso invierte en PS.',
      alternatives: [
        {
          slot: 'move',
          value: 'THROATCHOP',
          note: 'Castiga a los usuarios de movimientos de sonido y pega más fuerte, a cambio del STAB Psíquico fiable.',
          replaces: 'PSYCHOCUT'
        },
        {
          slot: 'move',
          value: 'SUBSTITUTE',
          note: 'Montar el Ataque y la Defensa con Fuerza Bruta detrás de un clon, a cambio de la recuperación de Descanso.',
          replaces: 'REST'
        },
        {
          slot: 'move',
          value: 'TOPSYTURVY',
          note: 'Invierte las subidas del rival contra equipos de setup; Respondón deja intactas las propias.',
          replaces: 'PSYCHOCUT'
        },
        {
          slot: 'item',
          value: 'ASSAULTVEST',
          note: 'Vira a tanque especial a cambio de perder Descanso y la recuperación.'
        }
      ]
    }
  ]
}

export default malamar
