import type { PokemonTemplateSet } from '../../lib/types'

const dodrio: PokemonTemplateSet = {
  internalName: 'DODRIO',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MOXIE',
      item: 'CHOICEBAND',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BRAVEBIRD', 'DOUBLEEDGE', 'KNOCKOFF', 'LOWKICK'],
      justification:
        'Dodrio en Añil V4.13 combina Ataque 110 y Velocidad 110, un perfil de barredor puro sin necesidad de setup. Autoestima sube un nivel el Ataque cada vez que debilita a un objetivo, así que con Cinta Elección el primer KO lo deja con un Ataque efectivo enorme y la Velocidad 110 le permite encadenar sin darle turno al rival. Pájaro Osado es el STAB de máxima potencia y el golpe por defecto; Doble Filo es el segundo STAB de tipo Normal para no depender de un solo tipo; Desarme quita objetos y golpea a los Fantasma inmunes al Normal y a los Psíquico; Patada Baja castiga a los Roca y Acero pesados que muran el Volador. Es su mejor set con poco margen de discusión, de ahí el óptimo, con la salvedad de la fragilidad (PS 70 / Def 70) y la debilidad a Trampa Rocas, que exigen apoyo de retirada de trampas y de control de prioridad enemiga. Naturaleza Alegre porque la Velocidad 110 es un umbral que decide carreras contra buena parte del tier ofensivo.',
      alternatives: [
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Pañuelo Elección lo convierte en revenge killer que revienta barredores rivales y sigue acumulando Autoestima, a cambio de la potencia inmediata de Cinta.'
        },
        {
          slot: 'move',
          value: 'SWORDSDANCE',
          note: 'Con Vidasfera en vez de Cinta, Danza Espada más Ataque Rápido añade un golpe de prioridad para rematar, cediendo la potencia bruta del primer turno de Cinta.',
          replaces: 'LOWKICK'
        },
        {
          slot: 'move',
          value: 'DRILLPECK',
          note: 'Pico Taladro (80 de potencia, sin retroceso) mantiene la salud de Dodrio para seguir limpiando, a cambio de la potencia de Pájaro Osado.',
          replaces: 'BRAVEBIRD'
        }
      ]
    }
  ]
}

export default dodrio
