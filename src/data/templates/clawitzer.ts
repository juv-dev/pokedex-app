import type { PokemonTemplateSet } from '../../lib/types'

const clawitzer: PokemonTemplateSet = {
  internalName: 'CLAWITZER',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MEGALAUNCHER',
      item: 'CHOICESPECS',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 0, 4],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['WATERPULSE', 'DARKPULSE', 'AURASPHERE', 'DRAGONPULSE'],
      justification:
        'El perfil de stats define un rompemuros especial lento: At.Esp 120 con solo 59 de Velocidad. Megadisparador sube un 50% los movimientos de pulso y aura, así que este set entero se beneficia de la habilidad. Pulso Agua pasa de 60 a 90 de potencia efectiva y suma STAB, quedando como el ataque spameable con opción de confusión; Pulso Oscuro (80 a 120) y Esfera Aural (80 a 120, sin fallo posible al tener precisión perfecta) cubren Psíquico, Fantasma, Acero, Siniestro y Roca; Pulso Draco (85 a 127) castiga a los otros Dragón y a los que no temen al agua. Gafas Elección multiplica un At.Esp ya alto para forzar cambios desde el primer turno. Naturaleza Modesta porque su Velocidad es causa perdida y conviene invertir todo en potencia; el resto de PS da algo de aguante para entrar más de una vez. Se prefiere a un set de pivote porque bloquearse en un movimiento no es un problema real cuando Pulso Agua ya cubre la mayoría de escenarios neutrales.',
      alternatives: [
        {
          slot: 'move',
          value: 'FLIPTURN',
          note: 'Cede el turno a un compañero y mantiene el momentum, a cambio de perder la cobertura de Esfera Aural.',
          replaces: 'AURASPHERE'
        },
        {
          slot: 'item',
          value: 'ASSAULTVEST',
          note: 'Cambia presión inmediata por volumen especial: At.Esp sin multiplicar pero aguanta ataques especiales para atacar varias veces.'
        },
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Cobertura de hielo pura contra Dragón y tipo Tierra si el equipo ya tiene con quién romper Acero.',
          replaces: 'AURASPHERE'
        }
      ]
    }
  ]
}

export default clawitzer
