import type { PokemonTemplateSet } from '../../lib/types'

const durant: PokemonTemplateSet = {
  internalName: 'DURANT',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'HUSTLE',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HONECLAWS', 'IRONHEAD', 'STONEEDGE', 'SUPERPOWER'],
      justification:
        'Ataque 109 y Velocidad 109 con 112 de Defensa hacen de Durant un barredor físico rápido y sorprendentemente firme por delante. Entusiasmo sube un 50% el Ataque a cambio de restar un 20% de precisión a los ataques físicos, y Afilagarras resuelve justo ese defecto: sube el Ataque y la Precisión a la vez, con lo que tras un uso Cabeza de Hierro y Roca Afilada golpean sin castigo de precisión y con la habilidad ya activa. Cabeza de Hierro es la STAB, Roca Afilada cubre a Fuego y Volador y Fuerza Bruta rompe a los muros de tipo Acero y Normal. Vidasfera añade potencia constante y Alegre asegura que la base 109 adelante al grueso del entorno. El único cuidado es no montar la mejora frente a un tipo Fuego o Lucha.',
      alternatives: [
        {
          slot: 'item',
          value: 'LUMBERRY',
          note: 'Baya Ziuela como seguro de estado para el turno de Afilagarras contra parálisis, quemadura o sueño.'
        },
        {
          slot: 'move',
          value: 'XSCISSOR',
          note: 'Tijera X es la STAB de Bicho totalmente fiable si no se quiere depender de la precisión de Roca Afilada.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'move',
          value: 'FIRSTIMPRESSION',
          note: 'Primer Impacto (prioridad +2) da una herramienta de revenge en el primer turno, a costa del golpe a muros.',
          replaces: 'SUPERPOWER'
        },
        {
          slot: 'ability',
          value: 'SWARM',
          note: 'Enjambre evita del todo el castigo de precisión y potencia el Bicho por debajo de 1/3 de PS, en un set sin Afilagarras.'
        }
      ]
    }
  ]
}

export default durant
