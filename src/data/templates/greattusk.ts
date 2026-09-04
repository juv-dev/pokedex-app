import type { PokemonTemplateSet } from '../../lib/types'

const greattusk: PokemonTemplateSet = {
  internalName: 'GREATTUSK',
  templates: [
    {
      role: 'hazard-removal',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PROTOSYNTHESIS',
      item: 'BOOSTERENERGY',
      nature: 'JOLLY',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['RAPIDSPIN', 'HEADLONGRUSH', 'KNOCKOFF', 'ICESPINNER'],
      justification:
        'Great Tusk es la pieza de control de campo definitiva del tier en Añil V4.13: Giro Rápido limpia Trampa Rocas, Púas y Telaraña del propio campo mientras golpea. El Tanque de Energía Potenciadora activa Paleosíntesis sin depender del sol y sube el Ataque 131, y la naturaleza Alegre con 252 en Velocidad (base 87) le permite barrer trampas antes de los muros rivales. Arremetida es el STAB Tierra de 120, Desarme quita los objetos de cambio y Giro Hielo añade cobertura contra Volador y planta mientras borra el campo. PS 115 / Def 131 le dan volumen para entrar varias veces y Ataque 131 evita que sea una mera fregona: despliega presión real al girar.',
      alternatives: [
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Trampa Rocas convierte a Great Tusk en un setter, a costa del control de velocidad de Giro Hielo; útil si el equipo no tiene otro colocador.',
          replaces: 'ICESPINNER'
        },
        {
          slot: 'move',
          value: 'BODYPRESS',
          note: 'Plancha Corporal aprovecha la Defensa 131 como daño de tipo Lucha, alternativa contra muros físicos a cambio de la cobertura de Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Botas Gruesas evitan el daño de entrada de Trampa Rocas en equipos ajenos a rotar, renunciando al refuerzo de Paleosíntesis activado.'
        }
      ]
    },
    {
      role: 'hazard-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'PROTOSYNTHESIS',
      item: 'HEAVYDUTYBOOTS',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'HEADLONGRUSH', 'KNOCKOFF', 'RAPIDSPIN'],
      justification:
        'Uso secundario de colocador de Trampa Rocas: el mismo perfil de PS 115 / Def 131 / Atq 131 convierte a Great Tusk en un setter que no se sacrifica al colocarlas. Botas Gruesas evita desgaste al cubrir el hueco que él mismo deja sin quitar las trampas rivales, y mantiene Giro Rápido como forma de despejar cuando hace falta. Arremetida y Desarme conservan la presión física. Es viable y no óptimo porque su mejor aportación al equipo competitivo es limpiar trampas y ganar momentum con Giro Rápido, más que dedicar el turno a colocarlas.',
      alternatives: [
        {
          slot: 'move',
          value: 'TAUNT',
          note: 'Mofa le da la salida del duel de leads para evitar trampas rivales, a cambio de la utilidad de limpieza de Giro Rápido.',
          replaces: 'RAPIDSPIN'
        }
      ]
    }
  ]
}

export default greattusk
