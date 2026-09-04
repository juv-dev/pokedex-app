import type { PokemonTemplateSet } from '../../lib/types'

const irontreads: PokemonTemplateSet = {
  internalName: 'IRONTREADS',
  templates: [
    {
      role: 'hazard-removal',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'QUARKDRIVE',
      item: 'BOOSTERENERGY',
      nature: 'ADAMANT',
      evs: [252, 252, 4, 0, 0, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['RAPIDSPIN', 'EARTHQUAKE', 'IRONHEAD', 'VOLTSWITCH'],
      justification:
        'Iron Treads combina velocidad, volumen y utilidad en Añil V4.13: Velocidad 106, Defensa 120, Ataque 112 y PS 90. Giro Rápido limpia las trampas del propio campo con STAB y sin coste, y Terremoto y Cabeza de Hierro dan la doble STAB Tierra/Acero con cobertura casi sin huecos. Voltiocambio le permite pivotar tras girar y mantener el momentum, evitando quedar expuesto. El Tanque de Energía Potenciadora activa Carga Cuark y refuerza su mejor estadística, consiguiendo que un limpiador sea además un atacante voluminoso. Naturaleza Firme con reparto en PS y Ataque, apoyado en una velocidad 106 que supera a la mayoría de muros y sets defensivos.',
      alternatives: [
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Trampa Rocas lo convierte además en colocador, a cambio de la cobertura de una de sus STAB.',
          replaces: 'IRONHEAD'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Botas Gruesas evita el desgaste de trampas al reentrar en equipos que no rotan, renunciando al refuerzo de Carga Cuark.'
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
      moves: ['STEALTHROCK', 'EARTHQUAKE', 'IRONHEAD', 'RAPIDSPIN'],
      justification:
        'Uso secundario de colocador de Trampa Rocas con la misma pieza: PS 90 / Def 120 le permiten colocar la trampa con seguridad y seguir girando para mantener el campo limpio si hace falta. Botas Gruesas protege este rol más reentrante. Terremoto y Cabeza de Hierro conservan la presión física. Es viable y no óptimo porque el aporte diferencial de Iron Treads al equipo competitivo es limpiar trampas rápido, más que gastar turnos colocándolas.',
      alternatives: [
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme quita objetos a los cambiantes, a cambio de la STAB de Cabeza de Hierro.'
        }
      ]
    }
  ]
}

export default irontreads
