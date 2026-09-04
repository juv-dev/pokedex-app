import type { PokemonTemplateSet } from '../../lib/types'

const xerneas: PokemonTemplateSet = {
  internalName: 'XERNEAS',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'FAIRYAURA',
      item: 'POWERHERB',
      nature: 'MODEST',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['GEOMANCY', 'MOONBLAST', 'THUNDERBOLT', 'FOCUSBLAST'],
      justification:
        'Geocontrol normalmente tarda un turno en cargar, pero con Hierba Única se ejecuta al instante: sube mucho At.Esp, Def.Esp y Velocidad de golpe, y la hierba se consume. A partir de ahí Xerneas es a la vez rapidísimo y voluminoso por el lado especial. Aura Feérica aumenta un tercio la potencia de todos los movimientos de tipo Hada, así que Luz Lunar ya potenciado por STAB y Aura Feérica se convierte en una de las armas especiales más fuertes del juego. Rayo castiga a Acero y Volador que resisten Hada; Onda Certera rompe a los Acero que si no la aguantan todo. Modesta maximiza daño ya que Geocontrol resuelve la Velocidad; IV de Ataque a 0 por si acaba confundido. Es la condición de victoria de su propio equipo.',
      alternatives: [
        {
          slot: 'move',
          value: 'PSYSHOCK',
          note: 'Golpea por el lado físico a muros especiales como Blissey y a los Veneno que aguantan Hada.',
          replaces: 'THUNDERBOLT'
        },
        {
          slot: 'nature',
          value: 'TIMID',
          note: 'Asegura superar a más objetivos antes incluso de Geocontrol y frente a Pañuelo Elección, a cambio de algo de potencia.'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'FAIRYAURA',
      item: 'CHOICESPECS',
      nature: 'MODEST',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['MOONBLAST', 'THUNDERBOLT', 'FOCUSBLAST', 'PSYSHOCK'],
      justification:
        'Versión sin setup para equipos que quieren presión inmediata en vez de depender de un turno de Geocontrol. Con At.Esp 131, Aura Feérica y Gafas Elección, Luz Lunar pega desde el primer turno a un nivel que fuerza cambios contra casi cualquier cosa que no sea un Acero dedicado. Rayo, Onda Certera y Psicocarga cubren esos Acero y a los muros especiales. Es viable y no óptimo porque renuncia al potencial de barrido que hace único a Xerneas y sufre el bloqueo de movimiento de Gafas con una Velocidad base de solo 99.',
      alternatives: [
        {
          slot: 'move',
          value: 'CLOSECOMBAT',
          note: 'Cobertura física fiable contra Acero si Onda Certera falla demasiado para el gusto del equipo.',
          replaces: 'FOCUSBLAST'
        }
      ]
    }
  ]
}

export default xerneas
