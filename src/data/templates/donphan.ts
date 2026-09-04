import type { PokemonTemplateSet } from '../../lib/types'

const donphan: PokemonTemplateSet = {
  internalName: 'DONPHAN',
  templates: [
    {
      role: 'hazard-removal',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'STURDY',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['EARTHQUAKE', 'RAPIDSPIN', 'STEALTHROCK', 'KNOCKOFF'],
      justification:
        'Defensa 120 con PS 90 y Ataque 120, y Velocidad 50, lo definen como tanque físico que hace de todo en el terreno de trampas: Giro Rápido limpia las propias y de paso pega, Trampa Rocas coloca las del rival, y Terremoto (100, tierra) es un STAB con el que castiga de verdad gracias a los 120 de Ataque sin necesidad de invertir en ofensiva. Desarme quita objetos y añade daño. Robustez le asegura sobrevivir a un golpe supereficaz para completar el giro o la colocación. El tipo Tierra puro solo teme a Agua, Planta y Hielo, y le da inmunidad a Eléctrico; Restos y el reparto 252/252 físicamente defensivo lo mantienen entrando una y otra vez a hacer su trabajo.',
      alternatives: [
        {
          slot: 'move',
          value: 'ICESHARD',
          note: 'Golpe Roca de hielo con prioridad para rematar a Dragón y Volador debilitados y a los sweepers a Tierra rápidos, a costa de la colocación de Trampa Rocas.',
          replaces: 'STEALTHROCK'
        },
        {
          slot: 'move',
          value: 'ICESPINNER',
          note: 'Giro Vil pega a Planta, Tierra y Dragón que resisten o ignoran Terremoto, si el equipo prioriza cobertura sobre Desarme.',
          replaces: 'KNOCKOFF'
        }
      ]
    },
    {
      role: 'bulky-attacker',
      isPrimary: false,
      confidence: 'viable',
      ability: 'STURDY',
      item: 'ASSAULTVEST',
      nature: 'ADAMANT',
      evs: [96, 252, 0, 0, 0, 160],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['EARTHQUAKE', 'ICESHARD', 'KNOCKOFF', 'STONEEDGE'],
      justification:
        'Variante ofensiva: Chaleco Asalto cubre la Def.Esp 60, que es el punto flojo, y deja a Donphan aguantando ataques especiales neutros mientras devuelve daño con Ataque 120. Terremoto es el STAB, Golpe Roca de hielo aporta prioridad para revenge kills, Desarme quita objetos y Roca Afilada cubre a Volador y Fuego. Sin recuperación ni utilidad, es un uso secundario, pero Robustez sigue garantizando un golpe de más y la inversión 96/252/160 le da un poco de PS y suficiente Velocidad para adelantar a la franja de base 50 lenta.',
      alternatives: [
        {
          slot: 'move',
          value: 'RAPIDSPIN',
          note: 'Giro Rápido si el equipo necesita limpieza de trampas también en este set, a cambio de la cobertura de Roca Afilada.',
          replaces: 'STONEEDGE'
        }
      ]
    }
  ]
}

export default donphan
