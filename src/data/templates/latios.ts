import type { PokemonTemplateSet } from '../../lib/types'

const latios: PokemonTemplateSet = {
  internalName: 'LATIOS',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LEVITATE',
      item: 'SOULDEW',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRACOMETEOR', 'PSYSHOCK', 'AURASPHERE', 'ROOST'],
      justification:
        'Ataque Especial 130 con Velocidad 110 y el Rocío Bondad, que potencia Dragón y Psíquico un 20%, hacen de Latios un rompemuros especial inmediato. Cometa Draco es el disparo de máxima potencia, Psicocarga castiga a Blissey y compañía por el flanco físico, Esfera Aural es cobertura infalible contra Acero y Siniestro, y Respiro le da longevidad para romper varias veces por partida. Levitación aporta la inmunidad a Tierra. Miedosa a máxima Velocidad para no ceder la carrera a otros base 110 ni a usuarios moderados de Pañuelo Elección.',
      alternatives: [
        {
          slot: 'move',
          value: 'CALMMIND',
          note: 'Paz Mental reorienta el conjunto a wincon si el equipo necesita un cierre en lugar de un rompedor de un solo uso.',
          replaces: 'AURASPHERE'
        },
        {
          slot: 'move',
          value: 'MYSTICALFIRE',
          note: 'Nube Ígnea pega a los Acero tipo Planta y Hielo y baja el Ataque Especial rival, a cambio de la cobertura infalible de Esfera Aural.',
          replaces: 'AURASPHERE'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Gafas Elección suben la potencia inmediata a cambio de quedar bloqueado; obliga a cambiar Respiro por un cuarto ataque como Pulso Dragón.'
        }
      ]
    }
  ]
}

export default latios
