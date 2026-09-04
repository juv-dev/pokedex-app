import type { PokemonTemplateSet } from '../../lib/types'

const toedscruel: PokemonTemplateSet = {
  internalName: 'TOEDSCRUEL',
  templates: [
    {
      role: 'support',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MYCELIUMMIGHT',
      item: 'LEFTOVERS',
      nature: 'CAREFUL',
      evs: [252, 0, 0, 0, 252, 4],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SPORE', 'SPIKES', 'TOXICSPIKES', 'RAPIDSPIN'],
      justification:
        'Micelio Poderoso es el núcleo: sus movimientos de estado ignoran la habilidad del objetivo, así que Espora (100% de sueño) duerme siempre aunque el rival tenga Insomnio, Velo o Caparazón en general; el coste es actuar al final del turno, asumible para un soporte con PS 80 y Defensa Especial 120. Añade Púas y Púas Tóxicas para minar al rival, y Giro Rápido retira las trampas propias. La Velocidad 100 y la Defensa Especial 120 le permiten entrar con seguridad y colocar su utilidad antes que la mayoría de los soportes rivales. Naturaleza Cauta y reparto en PS y Defensa Especial maximizan justo la estadística que ya es alta, manteniendo el rol defensivo sin gastar en ataque.',
      alternatives: [
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme quita el objeto del rival y castiga a los switches, reemplazando Giro Rápido si el equipo ya tiene limpia de trampas.'
        },
        {
          slot: 'move',
          value: 'LEECHSEED',
          note: 'Drenadoras añade daño residual y recuperación al cambiarse, cediendo una capa de trampas.'
        }
      ]
    }
  ]
}

export default toedscruel
