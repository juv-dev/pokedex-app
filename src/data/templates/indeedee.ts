import type { PokemonTemplateSet } from '../../lib/types'

const indeedee: PokemonTemplateSet = {
  internalName: 'INDEEDEE',
  templates: [
    {
      role: 'support',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PSYCHICSURGE',
      item: 'PSYCHICSEED',
      nature: 'TIMID',
      evs: [252, 0, 0, 4, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['EXPANDINGFORCE', 'TRICKROOM', 'HEALINGWISH', 'DAZZLINGGLEAM'],
      justification:
        'Indeedee en Añil V4.13 tiene At. Esp. 105, Velocidad 95 y el doble tipo Psíquico/Normal, y su nicho de Añil es la Psicogénesis en combinación con apoyo de campo y de equipo. Psicogénesis crea el Campo Psíquico al entrar, que potencia Vasta Fuerza (STAB Psíquico que dobla su potencia bajo el campo) e impide los movimientos de prioridad enemigos sobre aliados; la Semilla Psique sube gratis la Def. Esp. Espacio Raro es su ruptura de rol: con Velocidad 95 es rápido, así que lo reserva para equipos de Espacio Raro donde pasa a ser el colocador de zona para los lentos. Deseo Cura se auto-debilita para curar y quitarle el estado al reemplazante, un sacrificio de apoyo; y Brillo Mágico (80, STAB Hada lejano al Psíquico) da la cobertura con doble objetivo. Naturaleza Miedosa con reparto en PS y Def. Esp.: entra, monta el campo, pivota y entrega el turno. No rompe muros, apoya la estrategia.',
      alternatives: [
        {
          slot: 'ability',
          value: 'SYNCHRONIZE',
          note: 'Sincronía contagia quemadura, veneno o parálisis al que se la aplique, útil para disuadir el status, a costa de perder el Campo Psíquico.'
        },
        {
          slot: 'move',
          value: 'MYSTICALFIRE',
          note: 'Llama Embrujada cubre Acero resistente a Hada/Psíquico y baja el At. Esp. rival, a cambio de la cobertura de doble golpe de Brillo Mágico.',
          replaces: 'DAZZLINGGLEAM'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos dan cura pasiva en vez de la subida de Def. Esp. de la Semilla Psique, útil si el equipo necesita otro campo activo.'
        }
      ]
    }
  ]
}

export default indeedee