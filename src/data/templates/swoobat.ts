import type { PokemonTemplateSet } from '../../lib/types'

const swoobat: PokemonTemplateSet = {
  internalName: 'SWOOBAT',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SIMPLE',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 0, 31, 31, 31, 31],
      moves: ['CALMMIND', 'STOREDPOWER', 'AIRSLASH', 'ROOST'],
      justification:
        'Swoobat llega a 114 de Velocidad y 100 de Ataque Especial, pero con defensas de 67/55/65 necesita cerrar rápido. Su habilidad oculta Simple duplica los cambios de característica, así que una sola Paz Mental equivale a subir dos niveles de Ataque Especial y dos de Defensa Especial. Poder Reserva parte de 20 de potencia y suma 20 por cada nivel positivo, de modo que tras una Paz Mental con Simple ya golpea alrededor de 420 de potencia efectiva. Aire Afilado es el STAB volador que pega neutro a los Siniestro, que son inmunes a Poder Reserva por ser de tipo Psíquico. Vuelo restaura la mitad de los PS y le permite montar la Paz Mental frente a rivales pasivos. Vidasfera acelera los cálculos de daño y naturaleza Miedosa con 0 IV en Ataque asegura la ventaja de Velocidad y reduce el daño de la confusión y Juego Sucio.',
      alternatives: [
        {
          slot: 'move',
          value: 'PSYSHOCK',
          note: 'STAB psíquico que pega contra la Defensa física para no quedar frenado por muros especiales antes de escalar.',
          replaces: 'STOREDPOWER'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Cambia potencia por longevidad si el plan es escalar varias Paz Mental frente a equipos lentos.'
        }
      ]
    }
  ]
}

export default swoobat
