import type { PokemonTemplateSet } from '../../lib/types'

const pincurchin: PokemonTemplateSet = {
  internalName: 'PINCURCHIN',
  templates: [
    {
      role: 'weather-setter',
      isPrimary: true,
      confidence: 'viable',
      ability: 'ELECTRICSURGE',
      item: 'TERRAINEXTENDER',
      nature: 'RELAXED',
      evs: [252, 0, 4, 252, 0, 0],
      ivs: [31, 31, 31, 31, 31, 0],
      moves: ['RISINGVOLTAGE', 'SPIKES', 'RECOVER', 'SUCKERPUNCH'],
      justification:
        'Pincurchin en Añil V4.13 es el único invocador de Campo Eléctrico de autosuficiencia en este rango y su Velocidad 15 lo hace ideal para Espacio Raro o para actuar de pivot lento. Electrogénesis crea el campo al entrar, el Cubresuelos alarga su duración, y Alto Voltaje (70, que se dobla bajo Campo Eléctrico a 140 efectivos de At. Esp. 91) es su STAB de cierre. Púas coloca la capa de trampa sobre el campo, Recuperación (mitad de PS) sostiene los 48 de PS base aprovechando la Def 95, y Golpe Bajo (prioridad +1) castiga a los barredores que entren. Reparto 252 PS / 252 At. Esp. con Plácida (Defensa +, Velocidad -) e IV 0 de velocidad consolida el puesto de Espacio Raro. Es viable en vez de óptimo porque depende del campo activo para competir y sin él su daño es flojo y su volumen limitado.',
      alternatives: [
        {
          slot: 'move',
          value: 'TOXICSPIKES',
          note: 'Púas Tóxicas añade veneno tóxico al suelo en lugar de Púas, otra capa de desgaste para el equipo rival.',
          replaces: 'SPIKES'
        },
        {
          slot: 'move',
          value: 'WILDCHARGE',
          note: 'Voltio Cruel (90) da un golpe físico de cierre contra muros especiales, a cambio de quedarse fijo con 101 Ataque.',
          replaces: 'RISINGVOLTAGE'
        },
        {
          slot: 'move',
          value: 'TOXIC',
          note: 'Tóxico derrite muros pasivos, cediendo la recuperación de Recuperación por daño residual tóxico.',
          replaces: 'RECOVER'
        }
      ]
    }
  ]
}

export default pincurchin