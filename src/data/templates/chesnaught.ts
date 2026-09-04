import type { PokemonTemplateSet } from '../../lib/types'

const chesnaught: PokemonTemplateSet = {
  internalName: 'CHESNAUGHT',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'BULLETPROOF',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SPIKES', 'LEECHSEED', 'SPIKYSHIELD', 'DRAINPUNCH'],
      justification:
        'PS 100 con 122 de Defensa y 117 de Ataque hacen de Chesnaught un muro físico que además incomoda. Antibalas es una habilidad defensiva de mucho valor: lo vuelve inmune a Bomba Lodo, Bola Sombra, Energibola, Onda Foco y otros movimientos de bomba y bola, lo que le regala cambios seguros contra varios atacantes especiales. Púas monta el chip pasivo aprovechando su volumen; Drenadoras roba PS cada turno y fuerza al rival a cambiar hacia las Púas; Barrera Espinosa protege, corta ataques de varios turnos y castiga por contacto, además de dar otro turno de daño de Drenadoras y Restos; Puño Drenaje es la STAB con recuperación. Agitada con máximos en PS y Defensa para maximizar el muro físico.',
      alternatives: [
        {
          slot: 'move',
          value: 'SYNTHESIS',
          note: 'Síntesis da recuperación fuerte e inmediata si el equipo no depende del ciclo de Barrera Espinosa.',
          replaces: 'SPIKYSHIELD'
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Golpe Bajo quita objetos y da presión inmediata frente a rivales pasivos.',
          replaces: 'DRAINPUNCH'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado suma castigo por contacto a los atacantes físicos que ya sufren Barrera Espinosa.'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'BULLETPROOF',
      item: 'WHITEHERB',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHELLSMASH', 'DRAINPUNCH', 'SEEDBOMB', 'STONEEDGE'],
      justification:
        'Chesnaught tiene Rompecoraza en su repertorio legal, lo que le da un plan de barrido que su Velocidad base 64 no sugiere: sube dos niveles Ataque, Ataque Especial y Velocidad, y baja Defensa y Def.Esp, penalización que Hierba Blanca revierte de inmediato. Su Defensa base 122 le permite sobrevivir a golpes físicos para montarlo, y Antibalas cierra la vía especial a varios rompemuros. Tras el impulso, Puño Drenaje y Bomba Germen son las STAB y Roca Afilada cubre a Volador y Fuego. Es una opción viable y no óptima porque depende de encontrar el turno libre y de que el rival no lleve prioridad para revertir la carrera de Velocidad.',
      alternatives: [
        {
          slot: 'move',
          value: 'EARTHQUAKE',
          note: 'Terremoto como cobertura contra Acero, Veneno y Fuego si Roca Afilada no cierra esos cálculos.',
          replaces: 'STONEEDGE'
        }
      ]
    }
  ]
}

export default chesnaught
