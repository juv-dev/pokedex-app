import type { PokemonTemplateSet } from '../../lib/types'

const nihilego: PokemonTemplateSet = {
  internalName: 'NIHILEGO',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'BEASTBOOST',
      item: 'POWERHERB',
      nature: 'MODEST',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['METEORBEAM', 'SLUDGEWAVE', 'POWERGEM', 'THUNDERBOLT'],
      justification:
        'Rayo Meteórico en Añil es el movimiento de dos turnos que sube el At. Esp. del usuario en el primer turno y golpea en el segundo: con Hierba Única lo ejecuta al instante, y el +1 de At. Esp. ya está aplicado en el golpe. Así Nihilego entra, dispara un Rayo Meteórico (130, STAB Roca) con 127 de At. Esp. realmente efectivos y deja el siguiente turno acumulado en +1. Onda Tóxica (95, STAB Veneno) y Joya de Luz (80, STAB Roca de respaldo cuando la hierba se consume) son el cuerpo del set, y Rayo cubre los Volador y Agua que aguantan Roca y Veneno. Ultraimpulso sube su Def. Esp. 131 con cada KO —la estadística más alta del bicho—, así que cada baja refuerza su entrada en el siguiente intercambio y convierte al breaker en un voluminoso a medida que la partida avanza. Modesta con EV en At. Esp. (388 con 127 base) y Velocidad (305 base): el pico de daño ya está resuelto y la velocidad decide el orden frente a los tanques.',
      alternatives: [
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Trampa Rocas convierte a Nihilego en el lead de apoyo del breaker, cediendo la cobertura de Rayo.',
          replaces: 'THUNDERBOLT'
        },
        {
          slot: 'item',
          value: 'WHITEHERB',
          note: 'Hierba Blanca absorbe el -1 de At. Esp. que el rival intente (Onda Tóxica, Golpe Bajo) sin competir con la hierba del primer turno, cediendo el pico instantáneo.',
          replaces: 'POWERHERB'
        }
      ]
    },
    {
      role: 'hazard-lead',
      isPrimary: false,
      confidence: 'viable',
      ability: 'BEASTBOOST',
      item: 'FOCUSSASH',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'TOXICSPIKES', 'SLUDGEWAVE', 'CLEARSMOG'],
      justification:
        'Variante de lead viable: la Velocidad 335 con Alegre (103 base con EV) le gana la carrera de leads a la mayoría de los colocadores rivales, y Banda Aguante garantiza sobrevivir el primer golpe al máximo PS para colocar Trampa Rocas y Púas Tóxicas antes de caer. Niebla Clara (50, nunca falla, anula los aumentos del rival) lo convierte además en un antihol: el rival que intenta montar el set-up en el turno 1 se queda sin aumentos. Onda Tóxica mantiene el golpe para el turno extra que la Banda regala. No es óptima porque el rol de lead desperdicia la herramienta única de Nihilego —el Rayo Meteórico instantáneo— y su 109 de PS con 131 de Def. Esp. absorbe el intercambio inicial sin depender de la Banda.',
      alternatives: [
        {
          slot: 'move',
          value: 'VENOSHOCK',
          note: 'Carga Tóxica (130 contra envenenados, al activar las Púas) castiga a los que limpian las Púas, cediendo el antihol de Niebla Clara.',
          replaces: 'CLEARSMOG'
        },
        {
          slot: 'item',
          value: 'BLACKSLUDGE',
          note: 'Lodo Negro cura a Nihilego turno a turno y castiga al rival que lo robe, cediendo la garantía de supervivencia de la Banda.',
          replaces: 'FOCUSSASH'
        }
      ]
    }
  ]
}

export default nihilego