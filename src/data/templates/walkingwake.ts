import type { PokemonTemplateSet } from '../../lib/types'

const walkingwake: PokemonTemplateSet = {
  internalName: 'WALKINGWAKE',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PROTOSYNTHESIS',
      item: 'BOOSTERENERGY',
      nature: 'TIMID',
      evs: [0, 0, 4, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HYDROSTEAM', 'DRACOMETEOR', 'FLAMETHROWER', 'FLIPTURN'],
      justification:
        'Walking Wake es un rompemuros especial con Ataque Especial 125 y Velocidad 109. Paleosíntesis, activada con Energía Potenciadora, sube su Ataque Especial sin depender del sol, y su firma Hidrovapor (80, STAB Agua) además gana potencia bajo el sol, lo que lo convierte en usuario natural de equipos soleados aunque aquí el set funciona con el impulso garantizado del tanque. Cometa Draco aporta el STAB Dragón de 130 para muros, Lanzallamas cubre a Planta y Acero que resisten Agua, y Viraje (prioridad de cambio) le permite salir al reponer sin quedar expuesto pese a su Defensa 91. Naturaleza Miedosa con reparto en At. Esp. y Velocidad para superar la franja de 105-110; PS 99 aguanta un golpe neutral, y al ser un rompedor no compromete slots con estados.',
      alternatives: [
        {
          slot: 'move',
          value: 'SCALD',
          note: 'Escaldar da un STAB Agua que quema al rival, a costa de la potencia superior de Cometa Draco en el slot de Dragón.',
          replaces: 'DRACOMETEOR'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera aporta poder sin bloquear, a cambio de que la Paleosíntesis quede sin fuente garantizada fuera del sol.'
        }
      ]
    }
  ]
}

export default walkingwake
