import type { PokemonTemplateSet } from '../../lib/types'

const politoed: PokemonTemplateSet = {
  internalName: 'POLITOED',
  templates: [
    {
      role: 'weather-setter',
      isPrimary: true,
      confidence: 'viable',
      ability: 'DRIZZLE',
      item: 'DAMPROCK',
      nature: 'BOLD',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SCALD', 'ICEBEAM', 'ENCORE', 'RAINDANCE'],
      justification:
        'Llovizna hace de Politoed el motor de un equipo de lluvia: al entrar invoca lluvia y con Roca Lluvia dura ocho turnos. Su perfil 90/75/75/90/100/70 es el de un invocador voluminoso, no el de un atacante. Agua Fría es STAB potenciado por la lluvia con opción de quemar, Rayo Hielo cubre a los Planta y Dragón que quieren aprovechar, Bis bloquea a un rival en su movimiento para dar entrada segura a un compañero, y Danza Lluvia es el respaldo por si otro invocador de clima sobrescribe el suyo. Naturaleza Osada y reparto físico defensivo para reentrar y reinstalar la lluvia varias veces por partida.',
      alternatives: [
        {
          slot: 'move',
          value: 'WEATHERBALL',
          note: 'Bola Clima pasa a ser Agua de 100 de potencia bajo lluvia, un STAB secundario fuerte si el equipo no necesita el filtro anti-Planta de Rayo Hielo.',
          replaces: 'ICEBEAM'
        },
        {
          slot: 'move',
          value: 'HYPNOSIS',
          note: 'Hipnosis quita a un rival de en medio para instalar la lluvia con más holgura, asumiendo su precisión baja.',
          replaces: 'ENCORE'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos si el equipo lleva otro modo de alargar la lluvia y se prioriza la longevidad del invocador.'
        }
      ]
    }
  ]
}

export default politoed
