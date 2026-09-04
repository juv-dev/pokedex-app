import type { PokemonTemplateSet } from '../../lib/types'

const runerigus: PokemonTemplateSet = {
  internalName: 'RUNERIGUS',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'WANDERINGSPIRIT',
      item: 'LEFTOVERS',
      nature: 'RELAXED',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['BODYPRESS', 'EARTHQUAKE', 'WILLOWISP', 'STEALTHROCK'],
      justification:
        'Runerigus es una de las mejores paredes físicas de Añil V4.13 por Defensa 145 y un doble tipo Fantasma/Tierra con inmunidad a Normal y Lucha. Alma Errante roba la habilidad de cualquier rival que la toque, neutralizando Golpes, Levitación, Intimidación y setups, un efecto defensivo enorme que además se puede explotar para copiar habilidades útiles. Plancha Corporal (80, usa la Defensa 145 como Ataque) es su STAB físico directo, Terremoto cubre a Fuego y Acero pasándole por alto su propio tipo, Fuego Fatuo quema los atacantes físicos y Trampa Rocas coloca la trampa del equipo. Naturaleza Plácida (Defensa +, Velocidad -) con IV de Velocidad a 0 lo convierte además en un candidato natural de Espacio Raro. Reparto 252 Def / 252 PS porque es una pared pura; su At. Esp. 50 no merece inversión.',
      alternatives: [
        {
          slot: 'move',
          value: 'TOXIC',
          note: 'Tóxico derrite a muros y tanques pasivos con veneno tóxico, a cambio de la mengua del Ataque que da Fuego Fatuo.',
          replaces: 'WILLOWISP'
        },
        {
          slot: 'move',
          value: 'TOXICSPIKES',
          note: 'Púas Tóxicas añade una capa extra de presión por entrada, cedida la trampa Rocas por veneno en el suelo.',
          replaces: 'STEALTHROCK'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado paga a los atacantes de contacto y hace más doloroso tocar una pared de Defensa 145, a cambio de la cura pasiva.'
        }
      ]
    }
  ]
}

export default runerigus