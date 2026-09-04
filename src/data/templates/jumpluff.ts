import type { PokemonTemplateSet } from '../../lib/types'

const jumpluff: PokemonTemplateSet = {
  internalName: 'JUMPLUFF',
  templates: [
    {
      role: 'support',
      isPrimary: true,
      confidence: 'viable',
      ability: 'INFILTRATOR',
      item: 'HEAVYDUTYBOOTS',
      nature: 'TIMID',
      evs: [252, 0, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SLEEPPOWDER', 'ENCORE', 'UTURN', 'LEECHSEED'],
      justification:
        'Velocidad 110 y defensas 75/70/95 hacen de Jumpluff un incordio veloz más que un atacante (Ataque Especial 55). Allanamiento le deja atravesar Sustituto y pantallas, lo que da a Somnífero y Bis mucho más valor contra equipos que abusan de Sustituto para instalarse. Somnífero deja fuera a una amenaza, Bis bloquea un turno a un rival y abre entrada segura, Drenadoras genera desgaste y recuperación pasiva mientras el rival cambia, e Ida y Vuelta mantiene el ritmo. Botas Gruesas son clave porque el tipo Volador sufre daño doble de Trampa Rocas y este set entra y sale sin parar. Naturaleza Miedosa y máxima Velocidad para disrumpir antes que el rival.',
      alternatives: [
        {
          slot: 'move',
          value: 'STRENGTHSAP',
          note: 'Absorbe Fuerza cura al instante y baja el Ataque del rival, mejor contra físicos agresivos que Drenadoras no aguanta.',
          replaces: 'LEECHSEED'
        },
        {
          slot: 'move',
          value: 'TAILWIND',
          note: 'Viento Afín duplica la Velocidad del equipo cuatro turnos, apoyo ofensivo si se renuncia al desgaste de Drenadoras.',
          replaces: 'LEECHSEED'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos si el equipo lleva control de trampas y se prioriza el stall con Drenadoras y Sustituto.'
        }
      ]
    }
  ]
}

export default jumpluff
