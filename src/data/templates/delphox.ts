import type { PokemonTemplateSet } from '../../lib/types'

const delphox: PokemonTemplateSet = {
  internalName: 'DELPHOX',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MAGICGUARD',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'FIREBLAST', 'PSYSHOCK', 'GRASSKNOT'],
      justification:
        'At. Esp. 114 y Velocidad 104 sostienen un rompemuros especial rápido, y Muro Mágico (habilidad oculta) es lo que lo convierte en Óptimo: en Añil solo recibe daño de ataques directos, así que anula el retroceso de Vidasfera y todo el daño indirecto, incluidas Trampa Rocas y Púas al entrar, la quemadura, el veneno y Drenadoras. Delphox reentra a la línea sin pagar peaje de trampas y usa Vidasfera sin desgaste. Maquinación (+2 At. Esp.) lo arma; Llamarada es el STAB de 110, Psicocarga golpea contra la Defensa física y castiga a los muros especiales, y Hierba Nudo cubre Agua, Roca y Tierra que si no lo frenan. Miedosa para aprovechar los 104 de Velocidad base.',
      alternatives: [
        {
          slot: 'move',
          value: 'DAZZLINGGLEAM',
          note: 'Cobertura de tipo Hada para Dragón y Siniestro, a cambio de perder el daño a los tipos Agua y Roca.',
          replaces: 'GRASSKNOT'
        },
        {
          slot: 'move',
          value: 'FOCUSBLAST',
          note: 'Rompe a los tipos Acero y a los muros especiales que resisten Fuego, a costa de la precisión de 70.',
          replaces: 'GRASSKNOT'
        },
        {
          slot: 'item',
          value: 'CHOICESPECS',
          note: 'Potencia inmediata sin subir; en ese caso se reemplaza Tántrum Mental por un cuarto ataque como Lanzallamas.'
        }
      ]
    }
  ]
}

export default delphox
