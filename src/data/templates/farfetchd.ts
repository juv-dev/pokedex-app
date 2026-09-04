import type { PokemonTemplateSet } from '../../lib/types'

const farfetchd: PokemonTemplateSet = {
  internalName: 'FARFETCHD',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'viable',
      ability: 'DEFIANT',
      item: 'HEAVYDUTYBOOTS',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'BRAVEBIRD', 'CLOSECOMBAT', 'KNOCKOFF'],
      justification:
        'Farfetch’d en Añil V4.13 tiene Ataque 100, Velocidad 95 y un movimiento sorprendentemente amplio para su base stat total: Danza Espada, Pájaro Osado, A Bocajarro, Desarme, Primer Impacto y golpes de crítico alto. Danza Espada arregla el Ataque solo medio, y Pájaro Osado es el STAB de máxima potencia; A Bocajarro cubre a Roca, Acero y Normal, y Desarme quita el objeto y pega a los Fantasma inmunes al Normal. Competitivo es la habilidad diferencial: cuando Intimidación, Deshacer o Red Viscosa le bajan una característica, sube dos niveles el Ataque, de modo que muchos intentos de frenarlo por cambio terminan regalándole un impulso. Queda en viable y no en óptimo porque Ataque 100 sin objeto ofensivo es una cifra modesta y su bulk (PS 85 / Def 75) lo deja expuesto a prioridad y a revenge killers. Botas Gruesas es obligado en un tipo Volador con retroceso de Pájaro Osado: no puede permitirse el chip de Trampa Rocas cada entrada. Naturaleza Alegre para aprovechar la Velocidad 95 y presionar antes del golpe.',
      alternatives: [
        {
          slot: 'ability',
          value: 'SUPERLUCK',
          note: 'Afortunado con Periscopio y movimientos de crítico alto (Tajo Umbrío, Hoja Aguda) monta un set de pesca de críticos que ignora subidas defensivas, a cambio del castigo automático de Competitivo a las bajadas de estadística.'
        },
        {
          slot: 'move',
          value: 'ROOST',
          note: 'Respiro da recuperación propia y compensa el retroceso de Pájaro Osado en un rol más de atacante resistente, cediendo la cobertura de Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'move',
          value: 'FIRSTIMPRESSION',
          note: 'Primer Impacto (prioridad +2, 90 de potencia) le da un golpe inmediato contra amenazas más rápidas y frágiles el turno que entra, a cambio del potencial de barrido de Danza Espada.',
          replaces: 'SWORDSDANCE'
        }
      ]
    }
  ]
}

export default farfetchd
