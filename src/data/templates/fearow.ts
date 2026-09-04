import type { PokemonTemplateSet } from '../../lib/types'

const fearow: PokemonTemplateSet = {
  internalName: 'FEAROW',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'KEENEYE',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRILLPECK', 'DRILLRUN', 'DOUBLEEDGE', 'UTURN'],
      justification:
        'Añil V4.13 sube el Ataque de Fearow de 90 a 115 manteniendo la Velocidad 100, y eso convierte al Normal/Volador en un rompemuros de manual: con Cinta Elección y Firme, Pico Taladro (80, STAB) alcanza un daño efectivo de 180 y Doble Filo (120, STAB) es el golpe de rotura bruto que abre a los muros neutros. Taladradora (Tierra, 80) cubre justo lo que el STAB Normal/Volador no toca: Roca, Acero y Eléctrico. Ida y Vuelta completa el set cediendo el turno sin perder momentum cuando el rival trae un chequeo. Vista Lince no es un adorno aquí: su texto de Añil ("evita que disminuya su Precisión; también ignora aumentos de evasión del rival") lo vuelve útil contra los equipos que abusan de Doble Equipo o Ataque Arena, muy presentes en este tramo de dex; Francotirador, en cambio, no tiene fuente de golpe crítico en el set y queda inerte. El reparto 252 Ataque / 252 Velocidad lleva el tramo 100 a 299 con Firme, suficiente para golpear primero a la mayoría de los muros y pívots defensivos que este set busca romper.',
      alternatives: [
        {
          slot: 'move',
          value: 'QUICKATTACK',
          note: 'Ataque Rápido (prioridad +1) con Cinta alcanza 90 de potencia efectiva y remata amenazas debilitadas sin depender del orden de turnos, cediendo el pico de Doble Filo.',
          replaces: 'DOUBLEEDGE'
        },
        {
          slot: 'move',
          value: 'THROATCHOP',
          note: 'Golpe Mordaza da cobertura Siniestro de 80 sin retroceso y bloquea los movimientos de sonido del objetivo, útil contra los Fantasma que se cambian al STAB Normal.',
          replaces: 'DOUBLEEDGE'
        },
        {
          slot: 'move',
          value: 'ROOST',
          note: 'Respiro restaura la mitad de los PS y alarga la vida del rompedor; encaja mejor con Vidasfera o Restos que con Cinta, porque con Cinta queda bloqueado en el movimiento.',
          replaces: 'UTURN'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera potencia sin bloquear el movimiento: permite usar Respiro o Despejar entre ataques a costa de desgaste de 1/10 de PS por golpe.'
        }
      ]
    }
  ]
}

export default fearow