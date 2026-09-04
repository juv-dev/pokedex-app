import type { PokemonTemplateSet } from '../../lib/types'

const emboar: PokemonTemplateSet = {
  internalName: 'EMBOAR',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'BLAZE',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FLAREBLITZ', 'KNOCKOFF', 'SUPERPOWER', 'SUCKERPUNCH'],
      justification:
        'Atq 123 y tipo Fuego/Siniestro (cambio de Añil), una combinación STAB con cobertura neutra excelente: solo la resisten de forma segura Fuego, Agua, Roca, Dragón y los que resisten a la vez Fuego y Siniestro. Con Cinta Elección, Envite Ígneo pega un pico enorme, Desarme mete daño y quita el objeto, Fuerza Bruta rompe a Roca y Normal, y Golpe Bajo (prioridad +1) compensa la Velocidad 65 para rematar frágiles. Firme porque a base 65 la Velocidad es causa perdida.',
      alternatives: [
        {
          slot: 'ability',
          value: 'SHEERFORCE',
          note: 'Potencia Bruta sube un 30% los ataques con efecto secundario como Puño Trueno; cámbiala junto con un movimiento de ese tipo.'
        },
        {
          slot: 'move',
          value: 'CLOSECOMBAT',
          note: 'No baja el Ataque propio como Fuerza Bruta, a cambio de bajar las defensas de Emboar.',
          replaces: 'SUPERPOWER'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Libertad para cambiar de movimiento a costa de PS por ataque.'
        }
      ]
    },
    {
      role: 'bulky-attacker',
      isPrimary: false,
      confidence: 'viable',
      ability: 'BLAZE',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BULKUP', 'FLAREBLITZ', 'KNOCKOFF', 'SLACKOFF'],
      justification:
        'PS 110 y acceso a Sosiego (recuperación rara en un atacante) más Corpulencia hacen de Emboar un atacante resistente que se mejora contra ofensivas lentas y se cura la mitad de los PS. Corpulencia sube Ataque y Defensa, Envite Ígneo y Desarme son la ofensiva de STAB doble, y Sosiego sostiene el plan a largo plazo.',
      alternatives: [
        {
          slot: 'move',
          value: 'SUPERPOWER',
          note: 'Pico de daño a Roca y Normal si el equipo no necesita el setup de Corpulencia.',
          replaces: 'BULKUP'
        }
      ]
    }
  ]
}

export default emboar
