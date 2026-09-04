import type { PokemonTemplateSet } from '../../lib/types'

const kleavor: PokemonTemplateSet = {
  internalName: 'KLEAVOR',
  templates: [
    {
      role: 'hazard-lead',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SHARPNESS',
      item: 'FOCUSSASH',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STONEAXE', 'XSCISSOR', 'ACCELEROCK', 'UTURN'],
      justification:
        'Kleavor es el único lead de Añil V4.13 que coloca riesgos y pega con prioridad a la vez: Hachazo Pétreo (65, STAB Roca) además de infligir daño siembra Trampa Rocas en el campo rival, de modo que el primer turno cumple el trabajo de un hazard-lead sin ceder el impulso ofensivo. Cortante potencia un 50% los cortes, lo que eleva Hachazo Pétreo a 97 y Tijera X a 120 dentro del mismo set; Roca Veloz (40, prioridad +1) permite rematar a los leads adversarios antes de que actúen, y con la Banda Aguante Kleavor sobrevive al primer golpe para garantizar la siembra ante cualquier rival. Alegre maximiza los 85 de Velocidad base para ganar el duelo de leads por el mismo rango; el reparto 252 Ataque / 252 Velocidad con 4 en Defensa invierte en el golpe de apertura porque la Banda Aguante ya cubre el primer turno de vida.',
      alternatives: [
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Trampa Rocas libera el turno de daño de Hachazo Pétreo para otra acción, cediendo el STAB de Roca.',
          replaces: 'STONEAXE'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'SHARPNESS',
      item: 'CHOICEBAND',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['XSCISSOR', 'STONEAXE', 'CLOSECOMBAT', 'NIGHTSLASH'],
      justification:
        'Cortante potencia un 50% los movimientos que cortan: Tijera X (80 pasa a 120 antes de aplicar la Cinta), Hachazo Pétreo (65 a 97, y además siembra Trampa Rocas), Tajo Umbrío (70 a 105) y A Bocajarro (120) como golpe neutro. La Cinta Elección convierte a Kleavor en un rompemuros de cambio: 130 de Ataque con +50% de la Cinta y +50% de Cortante, y el beneficio pasivo de las Rocas de Hachazo Pétreo castiga cada entrada del rival. El set es viable y no óptimo porque el papel de lead con Banda Aguante resuelve mejor su rasgo más exclusivo: colocar Rocas con daño en el primer turno; la Cinta lo reduce a peleador de poderío, donde hay competencia.',
      alternatives: [
        {
          slot: 'move',
          value: 'SWORDSDANCE',
          note: 'Danza Espada no recibe Cortante pero mejora el daño de todos los cortes, cediendo la entrada limpia de la Cinta.',
          replaces: 'XSCISSOR'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera potencia sin bloqueo y mantiene el STAB de Roca de Hachazo Pétreo, a costa del 30% de PS por golpe.'
        }
      ]
    }
  ]
}

export default kleavor