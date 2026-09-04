import type { PokemonTemplateSet } from '../../lib/types'

const feraligatr: PokemonTemplateSet = {
  internalName: 'FERALIGATR',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SHEERFORCE',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONDANCE', 'LIQUIDATION', 'ICEPUNCH', 'CRUNCH'],
      justification:
        'En Añil V4.13 Feraligatr es Agua/Dragón con Ataque 105 y Potencia Bruta como habilidad oculta, la base de un barredor de Danza Dragón de manual. Potencia Bruta sube un 30% los movimientos con efecto secundario y anula ese efecto, lo que además elimina el retroceso de Vidasfera en Hidroariete, Puño Hielo y Triturar: se obtiene la potencia extra del objeto sin pagar PS. Danza Dragón arregla la Velocidad 78, y la cobertura Agua + Hielo + Siniestro deja muy pocos huecos, con Triturar bajando la Defensa y castigando a Psíquicos, Fantasmas y otros Agua. El tipo Agua/Dragón solo teme a Dragón y Hada y resiste Fuego, Agua y Acero. Naturaleza Alegre para asegurar las carreras de Velocidad tras el primer impulso; Vidasfera para el empujón de daño.',
      alternatives: [
        {
          slot: 'move',
          value: 'DRAGONCLAW',
          note: 'Garra Dragón da STAB de Dragón fiable; pierde el aumento de Potencia Bruta que sí reciben Triturar y las coberturas con efecto secundario.',
          replaces: 'CRUNCH'
        },
        {
          slot: 'nature',
          value: 'ADAMANT',
          note: 'Firme maximiza el daño si el equipo aporta control de Velocidad o Espacio Raro y la carrera tras Danza Dragón deja de importar.'
        },
        {
          slot: 'move',
          value: 'WAVECRASH',
          note: 'Envite Acuático pega 120 de STAB físico; su retroceso no lo cancela Potencia Bruta, así que suma desgaste propio a cambio de la potencia.',
          replaces: 'LIQUIDATION'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'SHEERFORCE',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['LIQUIDATION', 'ICEPUNCH', 'CRUNCH', 'AQUAJET'],
      justification:
        'Variante sin setup para equipos que necesitan presión inmediata y un elemento de prioridad. Potencia Bruta más Vidasfera sin retroceso llevan Hidroariete, Puño Hielo y Triturar a cifras de rompemuros desde el turno uno, y Acua Jet cierra rivales debilitados o revienta barredores más rápidos pese a la Velocidad 78. Naturaleza Firme porque aquí no hay carrera que ganar: todo el reparto va a golpear más fuerte. La cobertura Agua + Hielo + Siniestro sigue siendo casi irresistible y Acua Jet aporta el STAB prioritario que a Feraligatr le falta de serie.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Cinta Elección eleva aún más la potencia de ruptura; obliga a leer bien porque bloquea el movimiento, incluida la prioridad de Acua Jet.'
        },
        {
          slot: 'move',
          value: 'DRAGONCLAW',
          note: 'Garra Dragón añade el segundo STAB para no depender de la cobertura, a cambio de perder la lectura de Triturar contra la Defensa.',
          replaces: 'CRUNCH'
        },
        {
          slot: 'move',
          value: 'WAVECRASH',
          note: 'Envite Acuático cambia Hidroariete por 120 de potencia con retroceso, más ruptura a costa de longevidad.',
          replaces: 'LIQUIDATION'
        }
      ]
    }
  ]
}

export default feraligatr
