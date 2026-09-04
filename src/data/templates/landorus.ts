import type { PokemonTemplateSet } from '../../lib/types'

const landorus: PokemonTemplateSet = {
  internalName: 'LANDORUS',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SHEERFORCE',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['EARTHPOWER', 'SLUDGEWAVE', 'FOCUSBLAST', 'PSYCHIC'],
      justification:
        'Ataque Especial 115 y Velocidad 101 con la habilidad oculta Potencia Bruta hacen de esta forma un rompemuros especial de referencia. Los cuatro ataques del set tienen efecto secundario (Tierra Viva y Onda Foco bajan Def.Esp, Onda Tóxica envenena, Psíquico baja Def.Esp), así que Potencia Bruta sube su potencia un 30% y, además, anula la característica del efecto, lo que a su vez elimina el retroceso de Vidasfera sobre esos golpes: se dispone de un 30% más de potencia y un 30% extra de Vidasfera sin ningún desgaste. Tierra Viva es la STAB principal, Onda Tóxica pega a Hadas y Planta, Onda Foco rompe a Acero y Normal y Psíquico castiga a los tipos Lucha y Veneno. Miedosa con IV de Ataque a 0 para maximizar la Velocidad y minimizar confusión y Juego Sucio.',
      alternatives: [
        {
          slot: 'move',
          value: 'NASTYPLOT',
          note: 'Maquinación convierte el rompemuros en amenaza de barrido si el equipo genera turnos libres.',
          replaces: 'PSYCHIC'
        },
        {
          slot: 'move',
          value: 'ROCKSLIDE',
          note: 'Avalancha, también potenciada por Potencia Bruta, castiga a los tipos Volador y Fuego.',
          replaces: 'PSYCHIC'
        },
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Pañuelo para un rol de revenge killer que aprovecha igual el 30% de Potencia Bruta.'
        },
        {
          slot: 'nature',
          value: 'MODEST',
          note: 'Modesta si la Velocidad 101 ya alcanza los objetivos y se prioriza el pico de daño.'
        }
      ]
    },
    {
      role: 'hazard-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'INTIMIDATE',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'EARTHQUAKE', 'UTURN', 'KNOCKOFF'],
      justification:
        'Lectura defensiva usando la habilidad Intimidación: al entrar baja un nivel el Ataque rival, lo que da a Landorus cambios seguros contra atacantes físicos que aprovecha para montar Trampa Rocas. Terremoto es la STAB, Ida y Vuelta conserva el momentum y Desarme quita objetos clave. Es una opción viable y no óptima porque su físico de 89/90 sin resistencias útiles no lo hace un muro fiable a largo plazo; su valor está en el ciclo Intimidación más pivoteo.',
      alternatives: [
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado añade castigo por contacto a los físicos que ya sufren la bajada de Intimidación.'
        }
      ]
    }
  ]
}

export default landorus
