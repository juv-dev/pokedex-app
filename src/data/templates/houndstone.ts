import type { PokemonTemplateSet } from '../../lib/types'

const houndstone: PokemonTemplateSet = {
  internalName: 'HOUNDSTONE',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SANDRUSH',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['LASTRESPECTS', 'EARTHQUAKE', 'SANDSTORM', 'STONEEDGE'],
      justification:
        'Houndstone aprovecha la Tormenta de Arena que él mismo invoca: con Ímpetu Arena su Velocidad 68 se duplica a 136, suficiente para rebasar a casi todos los estándars del metajuego, y quedar inmune al daño de la tormenta. El núcleo ofensivo es Homenaje Póstumo, un STAB de fantasma de 50 de potencia que gana 50 puntos por cada aliado debilitado, llegando a picos brutales en partidas largas. Terremoto es la cobertura de Tierra y Roca Afilada la de Volador y Hielo. Vidasfera maximiza el daño con mínimo desgaste. La naturaleza Firme sube Ataque porque la Velocidad ya está resuelta por el clima, y PS 72 / Defensa 100 le dan margen para aguantar el golpe que arranca el sweep.',
      alternatives: [
        {
          slot: 'ability',
          value: 'FLUFFY',
          note: 'Peluche reduce a la mitad el daño de contacto para una variante defensiva, a cambio de duplicar el daño de Fuego y perder la doble Velocidad en arena.'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Impulso inmediato a Homenaje Póstumo al entrar sin depender del bloqueo de movimiento, cediendo flexibilidad de sweeper.'
        },
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Red de seguridad para el primer turno contra un rival más rápido, a costa del boost ofensivo de la Vidasfera.'
        },
        {
          slot: 'move',
          value: 'POLTERGEIST',
          note: 'STAB de fantasma de 110 con mejor potencia base que Homenaje Póstumo al inicio, pero depende de que el rival lleve objeto y no acumula con las caídas.',
          replaces: 'LASTRESPECTS'
        }
      ]
    }
  ]
}

export default houndstone