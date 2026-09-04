import type { PokemonTemplateSet } from '../../lib/types'

const lokix: PokemonTemplateSet = {
  internalName: 'LOKIX',
  templates: [
    {
      role: 'revenge-killer',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TINTEDLENS',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FIRSTIMPRESSION', 'SUCKERPUNCH', 'KNOCKOFF', 'AXEKICK'],
      justification:
        'En Añil V4.13 Lokix tiene Ataque 112 (subido respecto a la línea original) y Velocidad 92, más dos STAB con prioridad: Escaramuza (90 de potencia, prioridad +2, solo el primer turno) y Golpe Bajo (70, prioridad +1). Esa combinación lo convierte en un revenge killer basado en prioridad que no necesita Banda Elección con truco de Velocidad. Cromolente ("potencia los movimientos poco eficaces, haciendo estos el doble de daño") es la habilidad que define el set: Bicho/Siniestro lo resisten muchos tipos —Hada, Lucha, Acero, Fuego—, y Cromolente hace que Escaramuza, Desarme e incluso Golpe Bajo atraviesen a esos cambios como si fueran neutrales, quitándoles el turno gratis. Patada Hacha (120, tipo Lucha) tapa el hueco contra Acero, que resiste ambos STAB a 0,25x y con Cromolente solo sube a 0,5x. Orbe Vida en vez de un objeto de bloqueo porque Escaramuza únicamente funciona en el primer turno y Golpe Bajo es condicional: quedar bloqueado en un movimiento dejaría a Lokix inútil la mayoría de los turnos. Alegre y 252 de Velocidad para usar de verdad el tramo 92 como atacante medio-rápido, con la prioridad de reserva.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Revenge killer puro: con Alegre supera a casi todo el tramo ofensivo tras un cambio, asumiendo el bloqueo de movimiento.'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Identidad de rompemuros: Ataque 112 más Firme convierte Escaramuza en un cañonazo de entrada, asumiendo el bloqueo.'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Conserva el momentum y el pivoteo en lugar de la cobertura a Acero de Patada Hacha.',
          replaces: 'AXEKICK'
        },
        {
          slot: 'ability',
          value: 'SWARM',
          note: 'Con Polvo Plata: al bajar de 1/3 de PS, el +50% de Enjambre y el +20% del objeto se suman sobre la prioridad de Escaramuza.'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'TINTEDLENS',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'FIRSTIMPRESSION', 'SUCKERPUNCH', 'KNOCKOFF'],
      justification:
        'Variante de cierre para partida avanzada. Con Defensa 78 y Def. Esp. 55 Lokix es frágil, pero la Velocidad 92 y sus dos STAB de prioridad hacen que no necesite sobrevivir a la respuesta para seguir atacando: tras Danza Espada (+2 Ataque), una Escaramuza con prioridad +2 desde Ataque 112 es un movimiento de limpieza real sobre un equipo ya desgastado, y Golpe Bajo remata a lo que sea más rápido. Cromolente evita que un núcleo con Hada o algo de Acero ligero frene el barrido, y Desarme es el botón general para los turnos en que la prioridad no aplica. Orbe Vida por delante de Polvo Plata porque el barrido necesita potencia tanto en el lado Bicho como en el Siniestro, no solo en Escaramuza.',
      alternatives: [
        {
          slot: 'move',
          value: 'THROATCHOP',
          note: '80 de potencia fija y bloqueo de movimientos de sonido; se renuncia a quitar el objeto rival.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'item',
          value: 'SILVERPOWDER',
          note: 'Sube solo Escaramuza y Plancha sin el desgaste de Orbe Vida; deja el lado Siniestro sin potenciar.'
        }
      ]
    }
  ]
}

export default lokix
