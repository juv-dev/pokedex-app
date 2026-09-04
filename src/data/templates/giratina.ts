import type { PokemonTemplateSet } from '../../lib/types'

const giratina: PokemonTemplateSet = {
  internalName: 'GIRATINA',
  templates: [
    {
      role: 'hazard-removal',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRESSURE',
      item: 'LEFTOVERS',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DEFOG', 'WILLOWISP', 'DRAGONTAIL', 'PAINSPLIT'],
      justification:
        'PS 150 / Def 120 / Def.Esp 120 con tipo Fantasma/Dragón y Presión: un muro casi indestructible. Es de los pocos removedores de trampas que no teme al Giro Rápido ni al spinblock porque él mismo es Fantasma. Viento Afín limpia el campo, Fuego Fatuo quema a los físicos, Cola Dragón (prioridad -6) fasea a los setup sweepers y reparte chip, y Repartedolor recupera contra rivales más gordos aprovechando sus PS 150. Osada porque el lado físico es el que más castigo recibe.',
      alternatives: [
        {
          slot: 'move',
          value: 'REST',
          note: 'Recuperación total fiable si el equipo cubre el sueño; sustituye a Repartedolor contra rivales de PS altos.',
          replaces: 'PAINSPLIT'
        },
        {
          slot: 'move',
          value: 'POLTERGEIST',
          note: 'Daño fuerte de STAB usando el objeto del rival, a cambio del faseo de Cola Dragón.',
          replaces: 'DRAGONTAIL'
        }
      ]
    },
    {
      role: 'tank',
      isPrimary: false,
      confidence: 'viable',
      ability: 'PRESSURE',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'SHADOWBALL', 'DRAGONPULSE', 'AURASPHERE'],
      justification:
        'Los mismos 150/120/120 sostienen un plan de Paz Mental. Tras un par de subidas, Bola Sombra más Pulso Dragón y Esfera Aura tienen cobertura perfecta (Esfera Aura pega a Normal y Siniestro y es infalible), y su volumen hace casi imposible tumbarlo a tiempo sin crítico o movimiento de estado. Serena para engordar aún más el lado especial mientras Paz Mental hace el resto.',
      alternatives: [
        {
          slot: 'move',
          value: 'REST',
          note: 'Añade recuperación al plan ofensivo, a cambio de la cobertura de Esfera Aura.',
          replaces: 'AURASPHERE'
        }
      ]
    }
  ]
}

export default giratina
