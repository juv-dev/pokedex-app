import type { PokemonTemplateSet } from '../../lib/types'

const ironthorns: PokemonTemplateSet = {
  internalName: 'IRONTHORNS',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'QUARKDRIVE',
      item: 'BOOSTERENERGY',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONDANCE', 'STONEEDGE', 'EARTHQUAKE', 'WILDCHARGE'],
      justification:
        'Iron Thorns junta un Ataque 134 con una Defensa 110 y PS 100 en un Pokémon de Velocidad 72: Danza Dragón corrige esa velocidad con cada turno de setup y convierte la estadística de 134 en un remate de barrera. Carga Cuark, activada por el Tanque de Energía Potenciadora, eleva aún más el mayor ataque y maximiza el golpe tras un baile. Roca Afilada y Terremoto son la doble STAB Roca/Tierra de alta potencia y Voltio Cruel añade el tercer STAB Eléctrico. La naturaleza Firme y el reparto en PS y Ataque aprovechan la Defensa 110 para montar la Danza Dragón ante muros físicos, y la baja velocidad la absorbe el propio baile en lugar de EVs.',
      alternatives: [
        {
          slot: 'move',
          value: 'SMACKDOWN',
          note: 'Antiaéreo golpea a los Volador y los obliga a aterrizar para que Terremoto los alcance, a cambio de la precisión de Roca Afilada.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Plancha Corporal transforma la Defensa 110 en daño de tipo Lucha, ideal si el baile se bloquea, a cambio de un STAB de cobertura.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera da un pico de daño extra en lugar del refuerzo de Carga Cuark, asegurando KOs a costa de desgaste.'
        }
      ]
    },
    {
      role: 'hazard-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'QUARKDRIVE',
      item: 'HEAVYDUTYBOOTS',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'SPIKES', 'EARTHQUAKE', 'STONEEDGE'],
      justification:
        'Uso secundario de colocador: Trampa Rocas y Púas aprovechan la Defensa 110 y el Ataque 134 para poner entrada dañina y castigar a quienes intenten girarse, mientras Terremoto y Roca Afilada sostienen la presión física. Botas Gruesas protege su rol de entrada y salida. Es viable y no óptimo porque el incremento de daño del Danza Dragón y el refuerzo de Carga Cuark rinden más que dedicar turnos a trampas, aunque cubre una carencia real en equipos sin colocador.',
      alternatives: [
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Onda Trueno añade parálisis de apoyo, a cambio de la cobertura de Roca Afilada.',
          replaces: 'STONEEDGE'
        }
      ]
    }
  ]
}

export default ironthorns
