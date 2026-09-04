import type { PokemonTemplateSet } from '../../lib/types'

const mrrime: PokemonTemplateSet = {
  internalName: 'MRRIME',
  templates: [
    {
      role: 'support',
      isPrimary: true,
      confidence: 'viable',
      ability: 'PSYCHICSURGE',
      item: 'PSYCHICSEED',
      nature: 'TIMID',
      evs: [252, 0, 0, 4, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['EXPANDINGFORCE', 'RAPIDSPIN', 'SLACKOFF', 'FREEZEDRY'],
      justification:
        'Mr. Rime en Añil V4.13 tiene At. Esp. 110 / Def. Esp. 100 y acceso a Giro Rápido, lo que lo hace un soporte ofensivo de retirada de trampas con gestor de campo psicológico. Psicogénesis crea el Campo Psíquico al entrar, que potencia Vasta Fuerza (STAB Psíquico, 80 que golpea a ambos rivales con el doble de potencia bajo el campo) e impide movimientos de prioridad enemigos sobre aliados; la Semilla Psique sube la Def. Esp. gratis al entrar sobre su propio campo. Liofilización cubre a Planta y Volador y pega supereficaz a Agua, y Relajo restaura la mitad de los PS para mantenerse. Naturaleza Miedosa con reparto en PS y Def. Esp. porque el papel es entrar, limpiar trampas y pivotar apoyando, no romper muros. Es viable, no óptimo, porque su Velocidad 70 y su fragilidad física (Def 75) y su falta de un movimiento STAB de cierre lo limitan frente a equipos rápidos.',
      alternatives: [
        {
          slot: 'ability',
          value: 'SCREENCLEANER',
          note: 'Antibarrera anula Reflejo y Pantalla de Luz rivales al entrar, útil VS muros con pantallas pero pierde el Potencia de campo para Vasta Fuerza.'
        },
        {
          slot: 'move',
          value: 'TRICKROOM',
          note: 'Espacio Raro explota su Velocidad 70 en vez de superarla, cambiando la limpieza de trampas del set base.',
          replaces: 'RAPIDSPIN'
        }
      ]
    }
  ]
}

export default mrrime