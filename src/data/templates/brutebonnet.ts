import type { PokemonTemplateSet } from '../../lib/types'

const brutebonnet: PokemonTemplateSet = {
  internalName: 'BRUTEBONNET',
  templates: [
    {
      role: 'breaker-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PROTOSYNTHESIS',
      item: 'BOOSTERENERGY',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SPORE', 'SEEDBOMB', 'CRUNCH', 'SUCKERPUNCH'],
      justification:
        'Brute Bonnet unifica dos herramientas letales en una pieza lenta pero voluminosa (PS 111 / Def 99): Espora con precisión 100 duerme garantizado al rival y regala turnos gratis, y Golpe Bajo con prioridad +1 cubre la Velocidad 55. El Tanque de Energía Potenciadora activa Paleosíntesis sin depender del sol y sube el Ataque 127, convirtiendo a Bomba Germen (STAB Planta) y Triturar (STAB Siniestro) en golpes realmente amenazantes frente a los muros del tier. El reparto 252 PS / 252 Atq con Firme aprovecha el volumen para aguantar el turno en que Espora pone a dormir y castiga luego con prioridad. Es un rompemuros, no un barredor: la Velocidad 55 hace que dependa de la espina y del Golpe Bajo para cerrar objeciones.',
      alternatives: [
        {
          slot: 'move',
          value: 'CLOSECOMBAT',
          note: 'A Bocajarro da cobertura Lucha contra Acero y Siniestro, a cambio del STAB de Bomba Germen.',
          replaces: 'SEEDBOMB'
        },
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Banda Aguante garantiza sobrevivir un golpe para colocar la Espora incluso contra enemigos más rápidos, a cambio del refuerzo de Paleosíntesis.',
          replaces: 'BOOSTERENERGY'
        },
        {
          slot: 'move',
          value: 'TRAILBLAZE',
          note: 'Abrecaminos sube la Velocidad un nivel al golpear, mitigando la debilidad 55 tras dormir al rival, a cambio de un ataque de cobertura.',
          replaces: 'CRUNCH'
        }
      ]
    }
  ]
}

export default brutebonnet
