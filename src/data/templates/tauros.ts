import type { PokemonTemplateSet } from '../../lib/types'

const tauros: PokemonTemplateSet = {
  internalName: 'TAUROS',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'viable',
      ability: 'SHEERFORCE',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BODYSLAM', 'EARTHQUAKE', 'ROCKSLIDE', 'THROATCHOP'],
      justification:
        'Tauros en Añil V4.13 reparte Ataque 110 y Velocidad 110, un molde de atacante físico rápido. Potencia Bruta sube un 30% todo movimiento con efecto secundario y, además, anula el retroceso de Vidasfera en esos golpes, así que Golpe Cuerpo (85 de base y parálisis), Avalancha (80 y retroceso de turno) y Golpe Mordaza (80 y bloqueo de sonido) pegan reforzados y sin coste de PS. Terremoto no se potencia pero es la cobertura obligada contra Acero, Roca y Veneno. Golpe Mordaza además responde a los Fantasma que son inmunes al STAB Normal. Vidasfera y naturaleza Alegre para conservar la carrera de Velocidad contra el resto de la banda de 110 y no depender de instalaciones.',
      alternatives: [
        {
          slot: 'ability',
          value: 'ACOMETIDA',
          note: 'En el turno que sale a combatir otorga un 50% extra de Velocidad y un 20% extra de Ataque, lo que convierte a Tauros en un rompedor de pegar y salir con Banda Elección apoyado por pivotes; se pierde la consistencia turno a turno de Potencia Bruta.'
        },
        {
          slot: 'ability',
          value: 'INTIMIDATE',
          note: 'Baja el Ataque del rival al entrar, útil si el equipo prioriza el valor defensivo del cambio sobre el daño potenciado.'
        },
        {
          slot: 'move',
          value: 'CLOSECOMBAT',
          note: 'A Bocajarro pega más fuerte a Normal, Acero, Roca y Siniestro, a cambio de la cobertura de Avalancha contra Volador y Fuego y del refuerzo de Potencia Bruta.',
          replaces: 'ROCKSLIDE'
        },
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Pañuelo Elección lleva a Tauros a un rol de revenge killer que supera en Velocidad a barredores potenciados, a cambio de quedar bloqueado en un movimiento.'
        }
      ]
    }
  ]
}

export default tauros
