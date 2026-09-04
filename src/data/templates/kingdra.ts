import type { PokemonTemplateSet } from '../../lib/types'

const kingdra: PokemonTemplateSet = {
  internalName: 'KINGDRA',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SNIPER',
      item: 'LUMBERRY',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONDANCE', 'WAVECRASH', 'OUTRAGE', 'SUBSTITUTE'],
      justification:
        'Reparto 75/95/95/95/95/85 perfectamente redondo: sin un pico ofensivo brutal, Kingdra depende de Danza Dragón para convertir su volumen en ofensiva. A +1, la Velocidad 85 supera a casi todo el tier y las defensas 95/95 dejan margen para preparar más de una vez. Agua/Dragón es una de las mejores combinaciones defensivas del juego, con una sola debilidad relevante a Hada y otra a Dragón, así que encuentra huecos para entrar. Salpicadura Letal (120, agua, retroceso) y Enfado (120, dragón) forman un doble STAB físico que solo resiste limpio el propio Hada; Sustituto lo protege del estado y de la prioridad mientras barre. Francotirador rara vez decide una partida, pero es la habilidad menos inútil aquí porque Nado Rápido está muerto sin lluvia propia. Baya Ziuela cura una vez la confusión de Enfado o cualquier alteración durante el barrido.',
      alternatives: [
        {
          slot: 'move',
          value: 'LIQUIDATION',
          note: 'Salpicar cambia potencia y retroceso por precisión y por la posibilidad de bajar la Defensa rival; buena si el equipo no puede permitirse el desgaste de Salpicadura Letal.',
          replaces: 'WAVECRASH'
        },
        {
          slot: 'move',
          value: 'SCALESHOT',
          note: 'Ráfaga Escamas sube Velocidad y baja Defensa por golpe, encadenando el barrido sin bloquearse en Enfado, a cambio de menos potencia por impacto.',
          replaces: 'OUTRAGE'
        },
        {
          slot: 'ability',
          value: 'SWIFTSWIM',
          note: 'Nado Rápido con un compañero que ponga lluvia: dobla la Velocidad y hace innecesaria la Danza Dragón, virando a un set especial con Gafas Elección (Cometa Draco / Hidrobomba / Rayo Hielo / Surf).'
        }
      ]
    }
  ]
}

export default kingdra
