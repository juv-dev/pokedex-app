import type { PokemonTemplateSet } from '../../lib/types'

const cetitan: PokemonTemplateSet = {
  internalName: 'CETITAN',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'viable',
      ability: 'SLUSHRUSH',
      item: 'ICYROCK',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SNOWSCAPE', 'ICICLECRASH', 'HIGHHORSEPOWER', 'ICESHARD'],
      justification:
        'Cetitan usa la nevada que él mismo invoca con Paisaje Nevado para disparar su Velocidad 73 a 146 gracias a Quitanieves, suficiente para adelantarse a la mayoría del metajuego mientras queda inmune al granizo. El Ataque 113 con STAB de hielo en Chuzos y la cobertura de tierra de Fuerza Equina forman el núcleo ofensivo, y Esquirla Helada da prioridad +1 para rematar a objetivo en rango incluso si la nieve no está activa. Roca Helada alarga el clima nevado los ocho turnos para sostener el sweep. Es viable y no óptimo porque necesita usar un turno en Paisaje Nevado antes de barrer, cediendo iniciativa frente a leads rápidos; por eso se compensa con PS 170 y el volumen que permiten aguantar el turno de setup.',
      alternatives: [
        {
          slot: 'ability',
          value: 'SHEERFORCE',
          note: 'Potencia Bruta suma un 30% a los movimientos con efecto (hielo-filón), a cambio de anular sus efectos secundarios y de no necesita nieve.'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Evita el desgaste de Trampa Rocas al pivotar sin depender de la nieve, cediendo los ocho turnos de Roca Helada.'
        },
        {
          slot: 'move',
          value: 'BELLYDRUM',
          note: 'Tambor Bombo maximiza el Ataque a costa de la mitad de los PS, un all-in que exige curar y sufrir un golpe.',
          replaces: 'SNOWSCAPE'
        },
        {
          slot: 'move',
          value: 'EARTHQUAKE',
          note: 'Terremoto sustituye Fuerza Equina con más potencia en terrenos neutros y sin penalización de precisión, cediendo unos puntos de exactitud.',
          replaces: 'HIGHHORSEPOWER'
        }
      ]
    }
  ]
}

export default cetitan