import type { PokemonTemplateSet } from '../../lib/types'

const lapras: PokemonTemplateSet = {
  internalName: 'LAPRAS',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'viable',
      ability: 'WATERABSORB',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 0, 4, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FREEZEDRY', 'SURF', 'THUNDERBOLT', 'LIFEDEW'],
      justification:
        'Lapras en Añil V4.13 tiene PS 130, Defensa 80, Def. Esp. 95 y At. Esp. 95, un cuerpo voluminoso que aguanta bien por el lado especial. Su rasgo distintivo es Liofilización (80, Hielo, especial), que golpea de forma supereficaz a los tipos Agua y le da una cobertura casi universal junto a un STAB Agua. Surf es el STAB Agua fiable, Rayo cierra la cuenta contra los Agua y Volador voluminosos y Sanivida recupera un cuarto de PS de forma fiable. Absorbe Agua le da inmunidad y curación frente a los ataques de tipo Agua, lo que refuerza su papel de muro rotatorio. Naturaleza Serena y reparto especial para sostener el rol defensivo sin renunciar a la ofensiva de 95.',
      alternatives: [
        {
          slot: 'item',
          value: 'ASSAULTVEST',
          note: 'Chaleco Asalto suma otro escalón de resistencia especial usando cuatro ataques (Liofilización, Surf, Rayo, Rayo Hielo), a cambio de Sanivida y la longevidad que da.'
        },
        {
          slot: 'ability',
          value: 'SHELLARMOR',
          note: 'Caparazón anula los golpes críticos, más fiable si el equipo no necesita la inmunidad a Agua.'
        },
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Rayo Hielo pega más fuerte cuando no hace falta el efecto supereficaz de Liofilización sobre los Agua.',
          replaces: 'FREEZEDRY'
        }
      ]
    },
    {
      role: 'stall',
      isPrimary: false,
      confidence: 'viable',
      ability: 'WATERABSORB',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['PERISHSONG', 'PROTECT', 'CHILLINGWATER', 'LIFEDEW'],
      justification:
        'Con PS 130 y Def. Esp. 95, Lapras es un usuario natural de Canto Mortal: fuerza el cambio de barredores instalados y de muros que no pueden hacerle daño real, y con Protección va contando los turnos con seguridad. Agua Fría mantiene una fuente de daño y baja el Ataque del rival cada vez que impacta, y Sanivida sostiene los PS entre ciclos. Absorbe Agua bloquea una de las coberturas ofensivas más comunes contra él. Es un uso de nicho pero legítimo en equipos defensivos que quieren una respuesta a las instalaciones sin depender de Vaho.',
      alternatives: [
        {
          slot: 'move',
          value: 'HAZE',
          note: 'Vaho neutraliza las mejoras de estadísticas de forma inmediata, alternativa a la presión indirecta de Canto Mortal.',
          replaces: 'PERISHSONG'
        }
      ]
    }
  ]
}

export default lapras
