import type { PokemonTemplateSet } from '../../lib/types'

const ledian: PokemonTemplateSet = {
  internalName: 'LEDIAN',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'viable',
      ability: 'HUGEPOWER',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'DUALWINGBEAT', 'MACHPUNCH', 'KNOCKOFF'],
      justification:
        'En Añil V4.13 Ledian tiene Potencia como habilidad principal, que duplica el Ataque. Sobre una base 65 eso equivale a rondar los 130, y Danza Espada lo lleva a rango de amenaza real. Ala Bis es el STAB de Volador fiable: al golpear dos veces rompe Robustez, Banda Aguante y Sustituto. Ultrapuño es prioridad que compensa la Velocidad 85, discreta para un barredor, y Desarme cubre a Fantasmas y Psíquicos además de quitar el objeto. Las defensas 70/50 y las debilidades del tipo Bicho/Volador a Roca, Eléctrico, Hielo, Volador y Fuego lo mantienen fuera del tier superior, pero la habilidad es un cambio de Añil que lo convierte en una elección ofensiva legítima. Naturaleza Alegre y máxima Velocidad para no perder carreras dentro de su franja; Vidasfera para el empujón de daño.',
      alternatives: [
        {
          slot: 'move',
          value: 'ACROBATICS',
          note: 'Acróbata pega 110 sin objeto; combina con no llevar objeto o con una baya de un solo uso ya consumida, y libera Vidasfera.',
          replaces: 'DUALWINGBEAT'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Ida y Vuelta cambia el remate por momentum, útil si Ledian entra más como pivote que como barredor.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'move',
          value: 'ICEPUNCH',
          note: 'Puño Hielo golpea a Tierra, Dragón y Planta que aguantan los STAB, cobertura alternativa a Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'ability',
          value: 'IRONFIST',
          note: 'Puño Férreo sube un 20% los golpes de puño; solo interesa en un set de triple puño (Ultrapuño, Puño Hielo, Puño Trueno) sin depender de Potencia.'
        }
      ]
    }
  ]
}

export default ledian
