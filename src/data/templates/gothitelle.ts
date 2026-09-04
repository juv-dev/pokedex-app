import type { PokemonTemplateSet } from '../../lib/types'

const gothitelle: PokemonTemplateSet = {
  internalName: 'GOTHITELLE',
  templates: [
    {
      role: 'wall-special',
      isPrimary: true,
      confidence: 'viable',
      ability: 'ESPANTO',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'PSYCHIC', 'SHADOWBALL', 'REST'],
      justification:
        'En Añil, la habilidad oculta de Gothitelle no es Sombra Trampa sino Espanto, que al entrar amilana al rival y le baja el At. Especial. Con Def. Esp. 110 base, PS 70 y naturaleza Serena, eso convierte a Gothitelle en un muro especial que además debilita a cada atacante especial que la enfrenta. Paz Mental apila At. Esp. y Def. Esp. para cerrar la partida como win condition; Psíquico es el STAB y Bola Sombra la cobertura contra otros Psíquico y Fantasma. Descanso es la única recuperación fiable del movepool, y con la subida de Def. Esp. de Paz Mental los dos turnos dormida cuestan menos. No llega a óptimo porque Velocidad 65 y la ausencia de recuperación instantánea la dejan expuesta a Mofa, a estados y a los rompemuros físicos.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHESTOBERRY',
          note: 'Permite un Descanso sin quedar dormida una vez; útil contra equipos ofensivos donde no hay tiempo de perder dos turnos.'
        },
        {
          slot: 'move',
          value: 'FOCUSBLAST',
          note: 'Cobertura Lucha para los Siniestro, que si no frenan por completo al set; a cambio de la utilidad de Bola Sombra sobre otros Psíquico.',
          replaces: 'SHADOWBALL'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Control de Velocidad para compensar el Velocidad 65 y facilitar el setup, en lugar de la segunda vía ofensiva.',
          replaces: 'SHADOWBALL'
        }
      ]
    }
  ]
}

export default gothitelle
