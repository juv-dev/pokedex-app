import type { PokemonTemplateSet } from '../../lib/types'

const graveler: PokemonTemplateSet = {
  internalName: 'GRAVELER',
  templates: [
    {
      role: 'hazard-lead',
      isPrimary: true,
      confidence: 'viable',
      ability: 'STURDY',
      item: 'EVIOLITE',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'BODYPRESS', 'EARTHQUAKE', 'COUNTER'],
      justification:
        'Graveler entra por el nicho verificado de muro físico con Mineral Evolutivo: al poder evolucionar todavía, el objeto le sube Defensa y Def. Esp. un 50%, dejando su Defensa 115 por encima de la de Golem. Con Robustez, que le hace sobrevivir a un golpe letal desde PS máximos, tiene garantizada al menos una acción, que dedica a Trampa Rocas. Plancha Corporal usa su Defensa como estadística de ataque, así que escala con la propia inversión del set y golpea a Acero, Normal, Roca, Hielo y Siniestro; Terremoto es el STAB que pega a Fuego, Eléctrico, Veneno y Acero; Contraataque convierte su enorme volumen físico en una herramienta de revenge contra los atacantes físicos que, gracias a Robustez, no logran el KO. Naturaleza Agitada y reparto en PS y Defensa. Es viable y no óptimo porque la Def. Esp. 45, incluso con el objeto, sigue siendo un agujero claro, no tiene recuperación y el set es unidimensional.',
      alternatives: [
        {
          slot: 'move',
          value: 'ROCKBLAST',
          note: 'Pedrada es un STAB que además rompe Sustituto, Banda Aguante y Robustez rivales, cediendo la opción de castigo físico.',
          replaces: 'COUNTER'
        },
        {
          slot: 'move',
          value: 'EXPLOSION',
          note: 'Explosión elimina una amenaza de inmediato una vez colocadas las rocas, aprovechando que Robustez garantiza el turno.',
          replaces: 'COUNTER'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado desgasta a cada atacante físico por contacto, a cambio del refuerzo especial que aporta Mineral Evolutivo.'
        }
      ]
    }
  ]
}

export default graveler
