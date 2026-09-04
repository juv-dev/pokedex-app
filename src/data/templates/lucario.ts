import type { PokemonTemplateSet } from '../../lib/types'

const lucario: PokemonTemplateSet = {
  internalName: 'LUCARIO',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'JUSTIFIED',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'CLOSECOMBAT', 'METEORMASH', 'EXTREMESPEED'],
      justification:
        'Ataque 110 y Velocidad 90. Danza Espada más Vidasfera lo dejan rompiendo. A Bocajarro es el STAB principal; Puño Meteoro es el segundo STAB, castiga a las Hada (su única cobertura contra ellas) y tiene opción de subir el Ataque; Velocidad Extrema aporta prioridad +2 para revertir a rivales más rápidos y a la prioridad enemiga. Justiciero sube un nivel el Ataque si lo alcanza un movimiento de tipo Siniestro. Alegre para superar la base 90 y las amenazas neutrales de su rango.',
      alternatives: [
        {
          slot: 'move',
          value: 'BULLETPUNCH',
          note: 'Prioridad de tipo Acero fiable contra Hada frágil, a cambio de la potencia de Velocidad Extrema.',
          replaces: 'EXTREMESPEED'
        },
        {
          slot: 'move',
          value: 'CRUNCH',
          note: 'Cobertura de Siniestro contra Fantasma que frenan el STAB de Lucha.',
          replaces: 'METEORMASH'
        },
        {
          slot: 'ability',
          value: 'INNERFOCUS',
          note: 'Inmunidad a Sorpresa e Intimidación para no perder el turno de instalación.'
        }
      ]
    },
    {
      role: 'sweeper-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'JUSTIFIED',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'AURASPHERE', 'FLASHCANNON', 'VACUUMWAVE'],
      justification:
        'Ataque Especial 115, superior al físico en bruto. Maquinación sube dos niveles y Esfera Aural (sin fallo) más Foco Resplandor cubren casi todo el reparto neutro. Onda Vacío da prioridad +1 en el flanco especial para rematar. Alternativa viable cuando el equipo necesita romper muros físicos como Skarmory o Hippowdon que aguantan el set físico. El IV de Ataque en 0 minimiza el daño de confusión y de Juego Sucio.',
      alternatives: [
        {
          slot: 'move',
          value: 'DARKPULSE',
          note: 'Cobertura de Siniestro contra Fantasma y Psíquico en lugar del STAB de Acero.',
          replaces: 'FLASHCANNON'
        }
      ]
    }
  ]
}

export default lucario
