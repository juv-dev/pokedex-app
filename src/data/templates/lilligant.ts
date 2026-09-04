import type { PokemonTemplateSet } from '../../lib/types'

const lilligant: PokemonTemplateSet = {
  internalName: 'LILLIGANT',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'OWNTEMPO',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['QUIVERDANCE', 'GIGADRAIN', 'FIERYDANCE', 'SLEEPPOWDER'],
      justification:
        'Danza Aleteo sube a la vez At. Esp., Def. Esp. y Velocidad, y con At. Esp. 110 base y Velocidad 90 un solo uso ya deja a Lilligant por delante de casi todo y pegando como rompemuros. Polvo Somnífero fabrica el turno de setup: duerme a un check y permite subir sin castigo. Gigadrenado es el STAB con recuperación que sostiene la Vidasfera, y Danza Llamas cubre el punto débil del monotipo Planta —Acero, Fuego, Hierba y Bicho— y de paso puede subir otro nivel de At. Esp. Ritmo Propio es la habilidad de valor real aquí: bloquea la confusión, incluida la de los movimientos propios, lo que da acceso limpio a Danza Pétalo como alternativa sin el efecto secundario. El perfil 70/75/75 es frágil, así que el plan es dormir, subir una vez y cerrar.',
      alternatives: [
        {
          slot: 'move',
          value: 'PETALDANCE',
          note: 'STAB de 120 de potencia sin el retroceso habitual gracias a Ritmo Propio, que anula la confusión; a cambio se pierde la recuperación de Gigadrenado.',
          replaces: 'GIGADRAIN'
        },
        {
          slot: 'move',
          value: 'SHADOWBALL',
          note: 'Cobertura contra los Fantasma y Psíquico que frenan al set; útil si el equipo ya tiene forma de generar el turno de subida.',
          replaces: 'SLEEPPOWDER'
        },
        {
          slot: 'ability',
          value: 'CHLOROPHYLL',
          note: 'En equipos de sol duplica la Velocidad de salida y hace innecesario el nivel de Velocidad de Danza Aleteo, dejando invertir más en potencia.'
        }
      ]
    }
  ]
}

export default lilligant
