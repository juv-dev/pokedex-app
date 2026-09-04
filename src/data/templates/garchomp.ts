import type { PokemonTemplateSet } from '../../lib/types'

const garchomp: PokemonTemplateSet = {
  internalName: 'GARCHOMP',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'ROUGHSKIN',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'EARTHQUAKE', 'SCALESHOT', 'STONEEDGE'],
      justification:
        'Ataque 130 y Velocidad 102 sobre el tipo Dragón/Tierra. Danza Espada lo lleva a rangos de OHKO generalizado. Terremoto es el STAB fiable; Ráfaga Escamas golpea de dos a cinco veces, rompe Aguante y Robustez y sube la Velocidad un nivel a cambio de bajar la Defensa, encadenando el barrido tras la Danza. Filo Roca cubre a los Volador inmunes a Terremoto. Piel Tosca resta 1/16 de PS al rival por contacto y ayuda contra prioridad e Ida y Vuelta. Alegre para no perder la carrera de Velocidad frente a la base 100.',
      alternatives: [
        {
          slot: 'move',
          value: 'OUTRAGE',
          note: 'Con Baya Ziuela: máxima potencia Dragón asumiendo el bloqueo y la confusión posterior.',
          replaces: 'SCALESHOT'
        },
        {
          slot: 'move',
          value: 'DRAGONCLAW',
          note: 'STAB de Dragón seguro y sin efectos secundarios si no se quiere el riesgo de Enfado o Ráfaga Escamas.',
          replaces: 'SCALESHOT'
        },
        {
          slot: 'move',
          value: 'FIREFANG',
          note: 'Contra Acero y Planta como Ferrothorn o Skarmory que aguantan Terremoto y Filo Roca.',
          replaces: 'STONEEDGE'
        }
      ]
    },
    {
      role: 'hazard-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'ROUGHSKIN',
      item: 'ROCKYHELMET',
      nature: 'IMPISH',
      evs: [252, 0, 240, 0, 0, 16],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'EARTHQUAKE', 'SPIKES', 'DRAGONTAIL'],
      justification:
        'PS 108 y Defensa 95 con Piel Tosca más Casco Dentado hacen que cada golpe de contacto le reste al rival cerca de un sexto de sus PS, así que Garchomp coloca Trampa Rocas y Púas mientras castiga a los físicos que intenten frenarlo. Cola Dragón fuerza cambios y acumula el daño de las trampas. Terremoto conserva presión ofensiva real. Agitada para aguantar mejor el flanco físico. Perfil viable pensado para equipos que quieren un colocador de trampas ofensivo y difícil de tumbar por contacto.',
      alternatives: [
        {
          slot: 'move',
          value: 'FIREFANG',
          note: 'Cambia el phazing por daño directo a los Acero y Planta que absorben las trampas.',
          replaces: 'DRAGONTAIL'
        }
      ]
    }
  ]
}

export default garchomp
