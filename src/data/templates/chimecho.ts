import type { PokemonTemplateSet } from '../../lib/types'

const chimecho: PokemonTemplateSet = {
  internalName: 'CHIMECHO',
  templates: [
    {
      role: 'cleric',
      isPrimary: true,
      confidence: 'viable',
      ability: 'TINTINEO',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HYPERVOICE', 'SHADOWBALL', 'RECOVER', 'THUNDERWAVE'],
      justification:
        'Tintineo define el conjunto: al salir a combatir cura todos los problemas de estado del equipo, un Campanilleo automático cada vez que Chimecho pivota, y además convierte sus movimientos de sonido en tipo Psíquico con un 20% extra de potencia. Así, Vozarrón pasa a ser un STAB Psíquico de 108 de potencia efectiva sin retroceso, y Chimecho ofrece amenaza ofensiva real pese a su Ataque Especial 95. Recuperación le da cura fiable del 50%, Onda Trueno reparte parálisis para frenar sweepers, y Bola Sombra cubre a otros Psíquico y a los Fantasma inmunes a Vozarrón. Con PS 75 / Defensa 80 / Defensa Especial 90 y naturaleza Serena aguanta lo justo para repetir el ciclo de curación del equipo.',
      alternatives: [
        {
          slot: 'move',
          value: 'WISH',
          note: 'Deseo traslada cura a los compañeros y encaja con el rol de clérigo si el equipo ya tiene control de velocidad.',
          replaces: 'THUNDERWAVE'
        },
        {
          slot: 'move',
          value: 'CALMMIND',
          note: 'Paz Mental lo reconvierte en un wincon lento que aprovecha su Defensa Especial alta, a cambio de la utilidad inmediata.',
          replaces: 'THUNDERWAVE'
        },
        {
          slot: 'move',
          value: 'PSYSHOCK',
          note: 'Psicocarga pega por el flanco físico a muros especiales como Blissey, a cambio de la cobertura de Bola Sombra.',
          replaces: 'SHADOWBALL'
        }
      ]
    }
  ]
}

export default chimecho
