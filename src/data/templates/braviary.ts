import type { PokemonTemplateSet } from '../../lib/types'

const braviary: PokemonTemplateSet = {
  internalName: 'BRAVIARY',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'DEFIANT',
      item: 'LEFTOVERS',
      nature: 'ADAMANT',
      evs: [248, 252, 0, 0, 0, 8],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BULKUP', 'ROOST', 'BRAVEBIRD', 'CLOSECOMBAT'],
      justification:
        'PS 100 con Ataque 123 y un físico de 75/75 lo hacen ideal para un plan de mejora sostenido más que para barrer de golpe. Corpulencia sube Ataque y Defensa, Respiro devuelve la mitad de los PS y con esa vida base el ciclo aguanta bien. La habilidad oculta Competitivo es lo que da identidad al set: cualquier Intimidación, Follaje o Red Viscosa que el rival intente le regala dos niveles de Ataque, así que desincentiva justo los recursos que un equipo usaría para contenerlo. Pájaro Osado es la STAB principal y A Bocajarro cubre a Acero, Roca y Normal, la combinación que frena al Volador. Restos alarga el plan de Corpulencia y Respiro. Firme porque a base 80 la Velocidad no es su herramienta.',
      alternatives: [
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Botas si se prioriza reentrar sin pagar el peligro de entrada, que a un tipo Volador le cuesta un cuarto de vida.'
        },
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Alegre si se quiere aprovechar la Velocidad 80 para adelantar a la banda de bases 70-75.'
        },
        {
          slot: 'move',
          value: 'IRONHEAD',
          note: 'Cabeza de Hierro castiga a las Hadas que entran a frenar el plan de Corpulencia.',
          replaces: 'CLOSECOMBAT'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'DEFIANT',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BRAVEBIRD', 'CLOSECOMBAT', 'UTURN', 'ROCKSLIDE'],
      justification:
        'Lectura ofensiva directa: Cinta Elección sobre Ataque 123 convierte a Pájaro Osado en una amenaza inmediata que fuerza cambios constantes. Ida y Vuelta aprovecha esos cambios para no quedar atrapado en el movimiento equivocado y ceder el turno a un compañero; A Bocajarro y Avalancha son la cobertura contra Acero, Roca y otros Volador. Competitivo sigue castigando a quien intente frenarlo con reducciones de característica. Es una opción de tier más bajo que el plan de Corpulencia porque a base 80 sigue quedando por detrás de gran parte del entorno ofensivo.',
      alternatives: [
        {
          slot: 'move',
          value: 'IRONHEAD',
          note: 'Cambia la cobertura de Roca por castigo fiable a las Hadas.',
          replaces: 'ROCKSLIDE'
        }
      ]
    }
  ]
}

export default braviary
