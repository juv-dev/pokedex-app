import type { PokemonTemplateSet } from '../../lib/types'

const yveltal: PokemonTemplateSet = {
  internalName: 'YVELTAL',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'DARKAURA',
      item: 'HEAVYDUTYBOOTS',
      nature: 'MODEST',
      evs: [240, 0, 0, 252, 0, 16],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['DARKPULSE', 'OBLIVIONWING', 'HEATWAVE', 'ROOST'],
      justification:
        'PS 126 con 95/98 en defensas y At.Esp 131 hacen de Yveltal un atacante especial que aguanta varias rondas de partida. Aura Oscura sube un tercio la potencia de todos los movimientos de tipo Siniestro, así que Pulso Oscuro potenciado por STAB y Aura queda como un ataque spameable durísimo con opción de amedrentar. Ala Fatídica es la segunda STAB y a la vez su recuperación: drena el 75% del daño infligido, lo que le permite sostener el ritmo sin gastar turnos; Onda Ígnea castiga a los Acero y Hada que resisten Siniestro; Respiro cubre la recuperación en los turnos en que Ala Fatídica no basta. Botas Gruesas para entrar sin pagar Trampa Rocas, relevante por la debilidad del tipo Volador. La inversión prioriza volumen y potencia sobre una Velocidad base de 99 que no llega a ser decisiva.',
      alternatives: [
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Pivote para ceder el turno a un compañero y castigar al que entra, a cambio de una vía de recuperación.',
          replaces: 'ROOST'
        },
        {
          slot: 'move',
          value: 'FOCUSBLAST',
          note: 'Golpea más fuerte a los Acero y Normal puros que Onda Ígnea, a cambio de precisión.',
          replaces: 'HEATWAVE'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Más potencia inmediata si el equipo prefiere presión a longevidad; Ala Fatídica compensa parte del desgaste.'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'DARKAURA',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['KNOCKOFF', 'SUCKERPUNCH', 'DUALWINGBEAT', 'UTURN'],
      justification:
        'Ataque 131 igual que su At.Esp, así que la vía física también es real. Aura Oscura potencia Desarme, que además de pegar fuerte elimina el objeto del rival, y Golpe Bajo, una prioridad de tipo Siniestro que con Aura y Cinta Elección puede rematar a buena parte de los sweepers frágiles. Doble Ataque es la STAB de Volador que rompe Banda Aguante y Robustez con sus dos golpes; Ida y Vuelta mantiene el momentum. Es viable y no óptimo porque renuncia a la recuperación de Ala Fatídica y a la flexibilidad, y su Velocidad base de 99 lo deja por detrás de muchas amenazas sin apoyo.',
      alternatives: [
        {
          slot: 'move',
          value: 'PAYBACK',
          note: 'STAB de Siniestro que dobla su potencia cuando Yveltal actúa tras el rival, aprovechable por su Velocidad media, si el robo de objeto de Desarme no aporta.',
          replaces: 'KNOCKOFF'
        }
      ]
    }
  ]
}

export default yveltal
