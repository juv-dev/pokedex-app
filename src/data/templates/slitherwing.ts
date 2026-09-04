import type { PokemonTemplateSet } from '../../lib/types'

const slitherwing: PokemonTemplateSet = {
  internalName: 'SLITHERWING',
  templates: [
    {
      role: 'revenge-killer',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PROTOSYNTHESIS',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FIRSTIMPRESSION', 'UTURN', 'FLAREBLITZ', 'HIGHHORSEPOWER'],
      justification:
        'Slither Wing es el revenidor físico por excelencia en Añil V4.13: Escaramuza es un STAB Bicho de 90 de potencia con prioridad +2 en el primer turno de entrada, y con Cinta Elección sobre el Ataque 135 se convierte en un remate ineludible contra cualquier objetivo ralentizado. Ida y Vuelta mantiene el momentum cuando no hay que atacar: Slither Wing pivotea sin quedar bloqueado de forma comprometedora. Envite Ígneo y Fuerza Equina aportan la cobertura Fuego y Tierra que su doble tipo Bicho/Dragón no ofrece. La naturaleza Firme y el reparto en PS y Ataque maximizan la potencia sin depender de la Velocidad 81, porque el golpe definitivo se resuelve por prioridad. PS 85 / Def.Esp 105 le permiten además absorber al menos una entrada.',
      alternatives: [
        {
          slot: 'item',
          value: 'BOOSTERENERGY',
          note: 'El Tanque de Energía Potenciadora activa Paleosíntesis y sube el Ataque, permitiendo cambiar de movimiento a costa de algo de pico respecto a la Cinta.',
          replaces: 'CHOICEBAND'
        },
        {
          slot: 'move',
          value: 'WILLOWISP',
          note: 'Fuego Fatuo quema a los muros físicos para desgastarlos, a cambio de un hueco de ataque, viable solo sin el bloqueo de Cinta Elección.',
          replaces: 'HIGHHORSEPOWER'
        },
        {
          slot: 'move',
          value: 'LEECHLIFE',
          note: 'Sifón Vital recupera la mitad del daño con STAB Bicho, alternativa de longevidad a Envite Ígneo que requiere quitar la Cinta.',
          replaces: 'FLAREBLITZ'
        }
      ]
    }
  ]
}

export default slitherwing
