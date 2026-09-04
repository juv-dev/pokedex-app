import type { PokemonTemplateSet } from '../../lib/types'

const drampa: PokemonTemplateSet = {
  internalName: 'DRAMPA',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'BERSERK',
      item: 'LIFEORB',
      nature: 'MODEST',
      evs: [252, 0, 4, 252, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRACOMETEOR', 'HYPERVOICE', 'FLAMETHROWER', 'ROOST'],
      justification:
        'Drampa en Añil V4.13 tiene At. Esp. 135, el perfil de un rompemuros especial lento, y la habilidad Berserker: "aumenta el At. Especial en un nivel cuando los ataques del oponente le reduzcan los PS por debajo del 50%". Como su Defensa 85 y Def. Esp. 91 le dejan aguantar varios golpes, cuanto más lo dañan más Ataque Especial acumula, convirtiéndolo en un rompemuros que escala con la presión. Cometa Draco (130, STAB Dragón) es su golpe de cierre; Vozarrón (90, STAB Normal) evita el bajón de Cometa y pega limpio; Lanzallamas (90) cubre a los Acero que frenan al Dragón y a los tipos Planta. Pájaro Osado (Roost) restaura la mitad de los PS y sostiene el rol tras recibir el golpe que dispara Berserker. Modesta y 252 en At. Esp. maximizan el daño, y 252 en PS aguantan el primer golpe fuerte que necesita para activar Berserker sin caer.',
      alternatives: [
        {
          slot: 'move',
          value: 'DRAGONPULSE',
          note: 'Pulso Dragón (85, sin bajón) evita la reducción de Stat de Cometa Draco, a cambio de menos pico de daño.'
        },
        {
          slot: 'item',
          value: 'ASSAULTVEST',
          note: 'Chaleco Asalto convierte a Drampa en un tanque especial que rompe sin sufrir, cediendo la recuperación de Pájaro Osado.'
        },
        {
          slot: 'ability',
          value: 'SAPSIPPER',
          note: 'Absorbe los movimientos de Planta y sube Ataque, una herramienta anti-equipos de hierba, cediendo el escalado ofensivo de Berserker.'
        }
      ]
    }
  ]
}

export default drampa
