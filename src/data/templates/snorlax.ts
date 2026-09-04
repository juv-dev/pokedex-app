import type { PokemonTemplateSet } from '../../lib/types'

const snorlax: PokemonTemplateSet = {
  internalName: 'SNORLAX',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'THICKFAT',
      item: 'LEFTOVERS',
      nature: 'CAREFUL',
      evs: [252, 4, 0, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CURSE', 'BODYSLAM', 'EARTHQUAKE', 'REST'],
      justification:
        'Snorlax en Añil V4.13 tiene PS 160, Def. Esp. 110 y Ataque 110, con Defensa 65 y Velocidad 30. Sebo elimina la debilidad a Fuego y a Hielo, dejándolo neutro o resistente frente a casi todo el espectro ofensivo especial. Maldición sube Ataque y Defensa a costa de Velocidad, que ya es mínima, y lo transforma en una condición de victoria lenta: cada Maldición tapa su único agujero defensivo real. Golpe Cuerpo es el STAB con parálisis y Terremoto castiga a Acero, Roca y Veneno. Reposo es su única recuperación fiable y con la Def. Esp. potenciada es más sostenible. Naturaleza Cauta y reparto en PS y Def. Esp. para maximizar el volumen desde el que instala.',
      alternatives: [
        {
          slot: 'move',
          value: 'CRUNCH',
          note: 'Triturar responde a los Fantasma, que son inmunes a Golpe Cuerpo y pueden frenar el plan de Maldición, a cambio de la cobertura de Terremoto sobre Acero.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'move',
          value: 'SLEEPTALK',
          note: 'Sonámbulo permite seguir actuando durante el sueño de Reposo, a cambio de un turno de cobertura.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'ability',
          value: 'IMMUNITY',
          note: 'Inmunidad bloquea el envenenamiento y el Tóxico, opción preferible en el enfrentamiento contra equipos de desgaste.'
        }
      ]
    },
    {
      role: 'bulky-attacker',
      isPrimary: false,
      confidence: 'viable',
      ability: 'THICKFAT',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DOUBLEEDGE', 'EARTHQUAKE', 'CRUNCH', 'SUPERPOWER'],
      justification:
        'Con Ataque 110 y un cuerpo de PS 160 con Def. Esp. 110, Snorlax puede usar Banda Elección para pegar de forma inmediata mientras entra una y otra vez a lo largo de la partida. Doble Filo es el STAB de máxima potencia, Terremoto y Fuerza Bruta rompen a Acero y Roca, y Triturar castiga a los Fantasma inmunes al STAB. Sebo mantiene la solidez frente a coberturas de Fuego y Hielo incluso sin invertir en el lado físico. Es una alternativa ofensiva cuando el equipo ya tiene otro muro especial y necesita presión constante.',
      alternatives: [
        {
          slot: 'move',
          value: 'HEAVYSLAM',
          note: 'Pisotón (basado en el peso) pega muy fuerte a los objetivos ligeros de tipo Hada y Hielo, alternativa de cobertura a Fuerza Bruta.',
          replaces: 'SUPERPOWER'
        }
      ]
    }
  ]
}

export default snorlax
