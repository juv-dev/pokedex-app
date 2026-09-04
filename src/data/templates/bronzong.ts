import type { PokemonTemplateSet } from '../../lib/types'

const bronzong: PokemonTemplateSet = {
  internalName: 'BRONZONG',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LEVITATE',
      item: 'LEFTOVERS',
      nature: 'RELAXED',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'RECOVER', 'BODYPRESS', 'IRONHEAD'],
      justification:
        'Defensas de 116 y 116 con Levitación, que sobre el tipo Acero/Psíquico elimina la debilidad a Tierra y deja solo Fuego, Siniestro y Fantasma como amenazas ofensivas. En Añil aprende Recuperación, lo que lo convierte en un colocador sostenible de Trampa Rocas en lugar de un muro pasivo que se desgasta. Plancha Corporal escala con la Defensa 116 y castiga Normal, Roca y Siniestro; Cabeza de Hierro es el STAB fiable contra Hada y Roca. Naturaleza Plácida para reforzar el flanco físico sin sacrificar nada útil.',
      alternatives: [
        {
          slot: 'move',
          value: 'PSYCHIC',
          note: 'STAB psíquico para golpear Veneno y Lucha que ignoran el resto del set.',
          replaces: 'IRONHEAD'
        },
        {
          slot: 'move',
          value: 'EARTHQUAKE',
          note: 'Cobertura de Tierra contra Acero y Veneno rivales si el equipo no necesita presionar a las Hada.',
          replaces: 'IRONHEAD'
        }
      ]
    },
    {
      role: 'trick-room-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'LEVITATE',
      item: 'LEFTOVERS',
      nature: 'BRAVE',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['TRICKROOM', 'GYROBALL', 'EARTHQUAKE', 'STEALTHROCK'],
      justification:
        'Con Velocidad base 33 y el IV de Velocidad en 0, Bronzong queda entre los Pokémon más lentos: ideal para atacar primero bajo Espacio Raro y para que Giro Bola alcance su potencia máxima, ya que ese movimiento escala con la diferencia de Velocidad hasta un tope de 150. Espacio Raro habilita a los compañeros lentos, Terremoto complementa a Giro Bola contra Acero y Fuego, y todavía puede colar Trampa Rocas si sobra el turno. Audaz sube Ataque y baja Velocidad, coherente con el plan y sin chocar con el rol.',
      alternatives: [
        {
          slot: 'move',
          value: 'RECOVER',
          note: 'Sostiene a Bronzong como pivote de Espacio Raro para varios ciclos si el equipo no necesita las trampas.',
          replaces: 'STEALTHROCK'
        }
      ]
    }
  ]
}

export default bronzong
