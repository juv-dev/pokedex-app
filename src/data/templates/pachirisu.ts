import type { PokemonTemplateSet } from '../../lib/types'

const pachirisu: PokemonTemplateSet = {
  internalName: 'PACHIRISU',
  templates: [
    {
      role: 'pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'FURCOAT',
      item: 'LEFTOVERS',
      nature: 'TIMID',
      evs: [252, 0, 0, 4, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['VOLTSWITCH', 'NUZZLE', 'THUNDERBOLT', 'GRASSKNOT'],
      justification:
        'En Añil, Pachirisu sube a At. Esp. 90 / Def. Esp. 90 / Velocidad 115, y Pelaje Recio le reduce a la mitad el daño físico, dejando su Defensa 70 en un valor efectivo altísimo. Con eso es un pivote rápido y difícil de tumbar: Voltiocambio sale con ventaja de velocidad, Moflete paraliza de forma garantizada a lo que entra, Rayo es el STAB fiable y Hierba Nudo castiga a los Tierra pesados (Gastrodon, Hippowdon) que son inmunes al STAB eléctrico. Restos y máxima Velocidad para mantener el ciclo de pivoteo. Absorbe Elec. es la alternativa si el equipo prefiere una inmunidad eléctrica a la reducción física; Recogida no tiene uso competitivo.',
      alternatives: [
        {
          slot: 'ability',
          value: 'VOLTABSORB',
          note: 'Cambia la reducción física por inmunidad total al tipo Eléctrico y recuperación de 1/4 de PS.'
        },
        {
          slot: 'move',
          value: 'SUPERFANG',
          note: 'Corta a la mitad los PS de cualquier muro, útil contra objetivos que Hierba Nudo no cubre.',
          replaces: 'GRASSKNOT'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Pivoteo que no frena un Tierra ni un rival con Absorbe Elec. o Pararrayos.',
          replaces: 'VOLTSWITCH'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Parálisis a distancia sin contacto, si te preocupan Cuerpo Llama o Casco Dentado.',
          replaces: 'NUZZLE'
        },
        {
          slot: 'item',
          value: 'ASSAULTVEST',
          note: 'Más aguante especial manteniendo Voltiocambio; pierde Restos y no puede usar movimientos de estado.'
        }
      ]
    }
  ]
}

export default pachirisu
