import type { PokemonTemplateSet } from '../../lib/types'

const tyrantrum: PokemonTemplateSet = {
  internalName: 'TYRANTRUM',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'ROCKHEAD',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HEADSMASH', 'OUTRAGE', 'EARTHQUAKE', 'CRUNCH'],
      justification:
        'Ataque 121 con solo 71 de Velocidad describe un rompemuros puro. Cabeza Roca anula el retroceso de Cabezazo, y Cabezazo es un STAB de tipo Roca de 150 de potencia: con Cinta Elección y naturaleza Firme se convierte en el ataque físico más fuerte que la mayoría de equipos verá, sin coste de PS propio. Enfado es la segunda STAB para lo que resiste Roca; Terremoto castiga Acero y Roca que aguantan el cabezazo; Triturar redondea la cobertura contra Fantasma y Psíquico y no engancha al usuario como sí hace Enfado. Se elige Cabeza Roca sobre Mandíbula Fuerte porque el valor de un Cabezazo sin retroceso y a plena potencia supera al 50% extra que Mandíbula Fuerte daría solo a Triturar. La inversión es 252 Ataque y 252 Velocidad para llegar lo antes posible a un rival ya que la Velocidad base es baja y cada punto cuenta.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Pañuelo Elección lo convierte en revenge killer: renuncia a algo de potencia por pasar a atacar primero a buena parte del metajuego.'
        },
        {
          slot: 'move',
          value: 'STONEEDGE',
          note: 'STAB de Roca sin retroceso ni recoil para turnos en que perder PS al filo del KO es inaceptable, a cambio de 50 de potencia y precisión.',
          replaces: 'HEADSMASH'
        },
        {
          slot: 'move',
          value: 'CLOSECOMBAT',
          note: 'Golpea más fuerte a Acero y Normal puros que Terremoto, a cambio de bajarse Defensa y Defensa Especial.',
          replaces: 'EARTHQUAKE'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'ROCKHEAD',
      item: 'LUMBERRY',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONDANCE', 'HEADSMASH', 'OUTRAGE', 'EARTHQUAKE'],
      justification:
        'Uso alternativo que aprovecha la misma base ofensiva sin bloquearse en un movimiento. Danza Dragón sube Ataque y Velocidad a la vez, lo que resuelve el único defecto real de Tyrantrum, y a partir de una danza los 71 base de Velocidad pasan a ser competitivos. Cabezazo sigue siendo el eje del set gracias a Cabeza Roca, que elimina el retroceso; Enfado y Terremoto dan la cobertura. Baya Zidra cura una quemadura o parálisis que arruinaría el intento de setup y evita la confusión propia tras Enfado. Es viable y no óptimo porque necesita un turno libre para instalar la danza y su volumen defensivo (82/119/59) no siempre lo garantiza.',
      alternatives: [
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Alegre asegura superar a más objetivos tras una sola danza, a cambio de perder el pico de daño de Firme.'
        },
        {
          slot: 'move',
          value: 'CRUNCH',
          note: 'Cobertura sin autoenganche frente a Fantasma si el equipo no tolera los turnos de confusión de Enfado.',
          replaces: 'OUTRAGE'
        }
      ]
    }
  ]
}

export default tyrantrum
