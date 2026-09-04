import type { PokemonTemplateSet } from '../../lib/types'

const lunala: PokemonTemplateSet = {
  internalName: 'LUNALA',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SHADOWSHIELD',
      item: 'WEAKNESSPOLICY',
      nature: 'MODEST',
      evs: [252, 0, 4, 252, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'MOONGEISTBEAM', 'MOONBLAST', 'MOONLIGHT'],
      justification:
        'Guardia Espectro reduce a la mitad el daño recibido mientras los PS estén al máximo, y el Seguro Debilidad convierte ese escudo en la ventaja: esperar el golpe supereficaz es el plan A. Lunala es débil a Fantasma y Siniestro, los dos golpes que más presionan los equipos rivales (Bola Sombra, Golpe Bajo), y al recibirlos con el escudo activo el Seguro sube Ataque y At. Esp. un nivel: un solo golpe la deja en +2 de At. Esp. sin gastar el turno de set-up, y Paz Mental encima añade +1 de At. Esp. y Def. Esp. Rayo Umbrío (100, STAB, ignora la habilidad del rival: Disfraz, Robustez y Guardia Espectro ajenos no protegen a nadie de Lunala) es el golpe principal; Fuerza Lunar cubre Siniestro, y Luz Lunar cura la mitad del PS —clave tras bajar del umbral del Guardia Espectro. Modesta con EV en PS y At. Esp.: el escudo ya no pide EVs de supervivencia rápidos, y el PS máximo es lo que mantiene el umbral activo el mayor tiempo posible.',
      alternatives: [
        {
          slot: 'move',
          value: 'PSYSHOCK',
          note: 'Psicocarga ataca la Defensa rival y rompe muros físicos, cediendo la curación de Luz Lunar.',
          replaces: 'MOONLIGHT'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos es la variante conservadora que no depende del golpe supereficaz, perdiendo el pico de +2 instantáneo.',
          replaces: 'WEAKNESSPOLICY'
        },
        {
          slot: 'move',
          value: 'ICYWIND',
          note: 'Viento Hielo mengua a los barredores veloces y complementa el set-up, cediendo la cobertura de Fuerza Lunar.',
          replaces: 'MOONBLAST'
        },
        {
          slot: 'move',
          value: 'ROOST',
          note: 'Respiro recupera la mitad sin depender del clima, a cambio de sincronizar peor con el umbral del Guardia Espectro que Luz Lunar.',
          replaces: 'MOONLIGHT'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'SHADOWSHIELD',
      item: 'CHOICESPECS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['MOONGEISTBEAM', 'PSYSHOCK', 'MOONBLAST', 'FOCUSBLAST'],
      justification:
        'Variante de entrada inmediata viable: el 113 de At. Esp. de Lunala con Gafas Elección da un pico de daño que el set-up no logra hasta el segundo turno, y Guardia Espectro sigue protegiendo el primer switch-in porque las gafas no tocan el umbral del PS. Rayo Umbrío (100, STAB, ignora-habilidad) es el golpe del pase; Psicocarga ataca el lado defensivo físico que Rayo Umbrío no ve; Fuerza Lunar cubre Siniestro y Onda Certera (120) rompe ese mismo Siniestro con el 30% de errar que las gafas no perdonan. Alegre en lugar de Modesta porque sin el Seguro el pico de daño ya está resuelto y la Velocidad 322 (97 base con EV) decide contra los muros rápidos. Viable y no óptima: el set-up con Seguro Debilidad convierte el riesgo de la entrada en un plan de partida, mientras la variante con gafas depende de aciertos de Onda Certera para no bloquearse.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera da potencia sin el bloqueo de movimiento, a cambio del retroceso acumulado, y mete al equipo en el intercambio de golpes.',
          replaces: 'CHOICESPECS'
        },
        {
          slot: 'nature',
          value: 'MODEST',
          note: 'Modesta gana daño a costa de la franja de Velocidad 322, solo para compensar la pérdida del pico de Seguro Debilidad.',
          replaces: 'TIMID'
        }
      ]
    }
  ]
}

export default lunala