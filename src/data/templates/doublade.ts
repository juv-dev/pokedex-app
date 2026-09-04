import type { PokemonTemplateSet } from '../../lib/types'

const doublade: PokemonTemplateSet = {
  internalName: 'DOUBLADE',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'LEVITATE',
      item: 'EVIOLITE',
      nature: 'ADAMANT',
      evs: [252, 252, 0, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'IRONHEAD', 'SACREDSWORD', 'SHADOWSNEAK'],
      justification:
        'Acero/Fantasma con Ataque 110 / Def 150 / Velocidad 35. El Mineral Evolutivo, legal por ser un estado sin evolucionar, sube Defensa y Def.Esp un 50%: sobre Def 150 lo lleva a un equivalente físico de ~225 y su floja Def.Esp 49 sube a ~73, aguantando golpes que ningún evolucionado del tier soporta. Levitación (su única habilidad) le da inmunidad a Tierra y le tapa una de las pocas grietas de su tipo. Con esa muralla, Danza Espada (+2 Ataque) se monta con calma: Cabeza de Hierro es el STAB Acero de 80 con opción a retroceso, Espada Santa (90) ignora las subidas de Defensa y rompe a los muros que suben esa estadística, y Sombra Vil es prioridad +1 STAB Fantasma para rematar a los más rápidos y frágiles pese a la Velocidad 35. Firme porque su juego es tanque-atacante, no barredor. Sin recuperación en su repertorio, el objetivo es romper tras uno o dos Danza Espada, no durar toda la partida.',
      alternatives: [
        {
          slot: 'move',
          value: 'SHADOWCLAW',
          note: 'STAB Fantasma fiable sin riesgo del retroceso de Cabeza de Hierro, a cambio de potencia y del daño a Hada.',
          replaces: 'IRONHEAD'
        },
        {
          slot: 'move',
          value: 'IRONDEFENSE',
          note: 'Vira a muro físico casi indestructible con el Mineral Evolutivo, a cambio del potencial ofensivo de Danza Espada.',
          replaces: 'SWORDSDANCE'
        },
        {
          slot: 'item',
          value: 'LUMBERRY',
          note: 'Cura un estado como quemadura o parálisis una vez, útil al no tener recuperación, a cambio de la enorme solidez del Mineral Evolutivo.'
        }
      ]
    }
  ]
}

export default doublade
