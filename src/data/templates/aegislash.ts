import type { PokemonTemplateSet } from '../../lib/types'

const aegislash: PokemonTemplateSet = {
  internalName: 'AEGISLASH',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STANCECHANGE',
      item: 'LEFTOVERS',
      nature: 'QUIET',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['KINGSSHIELD', 'SHADOWBALL', 'FLASHCANNON', 'SHADOWSNEAK'],
      justification:
        'Acero/Fantasma con base 60/50/140/50/140/60. Cambio Táctico (su única habilidad) en Añil adopta la Forma Filo al lanzar un ataque de daño directo y la Forma Escudo al usar Escudo Real, alternando entre 140/140 defensivo y 50/50 ofensivo con 150 en la ofensiva relevante. Entra en Forma Escudo aguantando casi todo, usa Escudo Real para volver a Escudo y mutilar a los físicos de contacto, y castiga en Forma Filo con Bola Sombra (STAB 80, -1 Def.Esp) y Foco Resplandor (STAB Acero). Sombra Vil (prioridad +1) remata debilitados desde la Forma Escudo sin exponerse. Restos por longevidad en Forma Escudo. Mansa para maximizar el At. Esp. asumiendo que la Velocidad 60 no compite.',
      alternatives: [
        {
          slot: 'item',
          value: 'WEAKNESSPOLICY',
          note: 'En Forma Escudo aguanta un supereficaz y salta a +2 Ataque y At. Esp., a cambio de la recuperación de Restos.'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Potencia inmediata a costa de longevidad, ya que Aegislash no tiene recuperación propia.'
        },
        {
          slot: 'move',
          value: 'CLOSECOMBAT',
          note: 'En un set mixto para los Acero que muran a Bola Sombra y Foco Resplandor.',
          replaces: 'FLASHCANNON'
        }
      ]
    },
    {
      role: 'bulky-attacker',
      isPrimary: false,
      confidence: 'viable',
      ability: 'STANCECHANGE',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['KINGSSHIELD', 'IRONHEAD', 'SACREDSWORD', 'SHADOWSNEAK'],
      justification:
        'Variante física de tier más bajo. Espada Santa (90) ignora las subidas de Defensa y Cabeza de Hierro (STAB 80) castiga a las Hadas, mientras Sombra Vil aporta prioridad STAB. Escudo Real mantiene el ciclo Forma Escudo/Forma Filo y frena el contacto físico. Firme para el pico de daño. Rol secundario porque Cabeza de Hierro no baja defensas y muchos Acero muran la variante física, así que rompe menos que la especial con Bola Sombra y Foco Resplandor.',
      alternatives: [
        {
          slot: 'move',
          value: 'SWORDSDANCE',
          note: 'Intento de setup si el rival no tiene una respuesta rápida, a cambio de Espada Santa.',
          replaces: 'SACREDSWORD'
        },
        {
          slot: 'nature',
          value: 'BRAVE',
          note: 'Con 0 IV de Velocidad para equipos de Espacio Raro.'
        }
      ]
    }
  ]
}

export default aegislash
