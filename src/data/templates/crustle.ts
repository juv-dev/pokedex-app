import type { PokemonTemplateSet } from '../../lib/types'

const crustle: PokemonTemplateSet = {
  internalName: 'CRUSTLE',
  templates: [
    {
      role: 'hazard-lead',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STURDY',
      item: 'CUSTAPBERRY',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'SPIKES', 'KNOCKOFF', 'COUNTER'],
      justification:
        'En Añil V4.13 Crustle tiene Defensa 135 (subida respecto a la línea original) sobre PS 70 y Velocidad 45, y acceso legal a Trampa Rocas y Púas a la vez: es el perfil exacto de un lead de trampas de un solo uso. Bicho/Roca es un tipo defensivo malo —doble debilidad a Agua, Roca y Acero— pero eso no importa en su función, porque Robustez ("evita que el rival pueda debilitarlo de un solo golpe cuando tiene los PS al máximo") le garantiza sobrevivir el primer golpe y dejar al menos una capa, casi siempre dos. Baya Chística remata el plan: al caer a 1 PS por Robustez, actúa primero al turno siguiente para colocar la segunda trampa o un Desarme antes de caer. Desarme quita el objeto al lead rival (Botas, baya, Mineral Evolutivo) y hace daño de paso. Contraataque, con Defensa 135 y Robustez asegurando que llega a 1 PS, devuelve el doble del golpe físico recibido y a menudo debilita al rompedor que intenta pasar por encima. La Velocidad 45 es una ventaja aquí: Crustle no compite por el turno, solo encaja el ataque y monta la trampa. Reparto 252 PS / 252 Def con Agitada para maximizar lo que hace funcionar a Robustez frente a leads físicos.',
      alternatives: [
        {
          slot: 'item',
          value: 'MENTALHERB',
          note: 'Blinda el plan de doble trampa contra un lead con Mofa más rápido, a costa del turno extra de Baya Chística.'
        },
        {
          slot: 'move',
          value: 'ROCKBLAST',
          note: 'Opción proactiva: rompe Robustez, Banda Aguante y Sustituto del lead rival y castiga a los Defog con Banda Aguante.',
          replaces: 'COUNTER'
        },
        {
          slot: 'move',
          value: 'STONEEDGE',
          note: 'STAB fuerte de Roca si se prefiere presión inmediata a la represalia de Contraataque.',
          replaces: 'COUNTER'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'STURDY',
      item: 'WHITEHERB',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHELLSMASH', 'ROCKBLAST', 'XSCISSOR', 'EARTHQUAKE'],
      justification:
        'Uso secundario que aprovecha la estadística más alta de Crustle: Defensa 135 es justo lo que quiere un usuario de Rompecoraza, porque tras el descenso de -1 Def / -1 Def. Esp. todavía puede encajar un golpe de prioridad. Rompecoraza sube Ataque, At. Esp. y Velocidad en dos niveles; con Velocidad base 45 ese +2 es obligatorio, así que la Velocidad va maximizada para sacarle rendimiento y Hierba Blanca (no un objeto de daño) se elige porque el problema es sobrevivir para barrer, no un KO extra: cancela una vez las bajadas de defensa de Rompecoraza. Robustez asegura llegar al +2 aunque el rival sea más rápido. Pedrada es el STAB correcto por delante de Roca Afilada porque un barrido con +2 lo frenan Banda Aguante, Robustez o Sustituto, y Pedrada (2 a 5 impactos) los atraviesa. Tijera X es el segundo STAB y Terremoto cubre a Acero, Roca, Fuego y Eléctrico, que resisten ambos tipos.',
      alternatives: [
        {
          slot: 'move',
          value: 'STONEEDGE',
          note: 'Más daño por impacto contra objetivos voluminosos, a costa de no romper Banda Aguante, Robustez ni Sustituto.',
          replaces: 'ROCKBLAST'
        },
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Asegura superar a más objetivos base 80-100 tras el +2 si el equipo no aporta apoyo de Velocidad.'
        }
      ]
    }
  ]
}

export default crustle
