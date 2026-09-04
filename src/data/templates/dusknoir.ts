import type { PokemonTemplateSet } from '../../lib/types'

const dusknoir: PokemonTemplateSet = {
  internalName: 'DUSKNOIR',
  templates: [
    {
      role: 'trick-room-setter',
      isPrimary: true,
      confidence: 'viable',
      ability: 'IRONFIST',
      item: 'LIFEORB',
      nature: 'BRAVE',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['TRICKROOM', 'SHADOWPUNCH', 'EARTHQUAKE', 'ICEPUNCH'],
      justification:
        'Def 135 / Def.Esp 135 le dan margen para montar Espacio Raro incluso frente a ofensivas; PS 45 y Velocidad 45 hacen el resto, porque bajo Espacio Raro esa Velocidad ínfima ataca primero. Puño Férreo sube un 20% Puño Sombra (STAB infalible), Puño Hielo y Puño Fuego. Enfado con IV de Velocidad a 0 maximiza el Ataque 100 y asegura moverse primero en Espacio Raro. Se queda en Viable porque fuera de Espacio Raro no hace nada y sus PS 45 limitan su aguante pese a las defensas altas.',
      alternatives: [
        {
          slot: 'move',
          value: 'FIREPUNCH',
          note: 'Con Puño Férreo, rompe a Acero y Planta; Puño Hielo cubre Tierra, Dragón y Volador.',
          replaces: 'ICEPUNCH'
        },
        {
          slot: 'move',
          value: 'DRAINPUNCH',
          note: 'Recuperación con Puño Férreo para paliar los PS 45, a cambio de la cobertura de Terremoto.',
          replaces: 'EARTHQUAKE'
        }
      ]
    }
  ]
}

export default dusknoir
