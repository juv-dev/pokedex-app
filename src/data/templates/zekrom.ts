import type { PokemonTemplateSet } from '../../lib/types'

const zekrom: PokemonTemplateSet = {
  internalName: 'ZEKROM',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TERAVOLT',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONDANCE', 'BOLTSTRIKE', 'DRAGONCLAW', 'ROOST'],
      justification:
        'Ataque 150 con 100/120/100 de físico y Velocidad 90 hacen de Zekrom un barredor físico de Danza Dragón muy resistente: un uso sube Ataque y Velocidad, y su volumen le permite montarlo más de una vez. Rayo Certero es la STAB de Eléctrico de 130 de potencia con opción de parálisis y Garra Dragón es la STAB de Dragón fiable; entre ambas solo las resisten unos pocos tipos. Descanso Aéreo aprovecha el gran físico para alargar el ciclo. Teravoltaje ignora las habilidades del objetivo al atacar, así que anula recursos como Multiescama o Sólido Roca. Vidasfera da potencia constante sin bloquear ataques. Alegre para no ceder la iniciativa a la banda de bases 90-100 tras la primera Danza Dragón.',
      alternatives: [
        {
          slot: 'move',
          value: 'HONECLAWS',
          note: 'Afilagarras sube Ataque y Precisión, lo que arregla la precisión 85 de Rayo Certero a costa de no ganar Velocidad.',
          replaces: 'DRAGONDANCE'
        },
        {
          slot: 'move',
          value: 'OUTRAGE',
          note: 'Enfado como STAB de Dragón de máxima potencia si el equipo puede cubrir el bloqueo y la confusión.',
          replaces: 'DRAGONCLAW'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos para un plan más lento y sostenido apoyado en Descanso Aéreo.'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'TERAVOLT',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BOLTSTRIKE', 'OUTRAGE', 'FUSIONBOLT', 'DRAGONCLAW'],
      justification:
        'Lectura de rompemuros puro: Cinta Elección sobre Ataque 150 y con Teravoltaje anulando habilidades convierte a Rayo Certero en un golpe que casi nada aguanta neutro. Enfado es la STAB de Dragón de máxima potencia, Puño Fusión es una STAB de Eléctrico fiable de 100 sin problema de precisión y Garra Dragón es la opción segura cuando el bloqueo de Enfado es un riesgo. Es viable y no óptima porque la cobertura queda muy repetida entre dos tipos y el bloqueo de Cinta lo hace predecible.',
      alternatives: [
        {
          slot: 'move',
          value: 'EARTHPOWER',
          note: 'Tierra Viva ofrece una cobertura especial para pegar a los Acero y Eléctrico que resisten sus STAB.',
          replaces: 'DRAGONCLAW'
        }
      ]
    }
  ]
}

export default zekrom
