import type { PokemonTemplateSet } from '../../lib/types'

const scrafty: PokemonTemplateSet = {
  internalName: 'SCRAFTY',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SHEDSKIN',
      item: 'LEFTOVERS',
      nature: 'CAREFUL',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['BULKUP', 'DRAINPUNCH', 'KNOCKOFF', 'ICEPUNCH'],
      justification:
        'Defensa y Def. Esp. 115 base con PS 65 hacen de Scrafty un win condition defensivo: Corpulencia sube Ataque y Defensa, y a partir de ahí Puño Drenaje se vuelve recuperación neta que lo mantiene arriba. Con la naturaleza Cauta y la inversión en Def. Esp. cubre el lado especial mientras Corpulencia se encarga del físico. Desarme es STAB y utilidad —quita objetos y pega a los Fantasma que intentarían frenar el Lucha— y Puño Hielo castiga a Volador, Tierra, Dragón y Planta. Mudar es la habilidad clave: un 30% por turno de curarse el estado neutraliza quemadura, tóxico y parálisis, que son los únicos recursos fiables contra un rompemuros que se cura solo. El tipo Siniestro/Lucha aporta la inmunidad a Psíquico y solo una debilidad relevante frecuente (Hada), así que aguanta muchas entradas.',
      alternatives: [
        {
          slot: 'move',
          value: 'IRONHEAD',
          note: 'Golpe Acero para las Hadas que frenan de raíz al doble STAB; a cambio se pierde la cobertura de Puño Hielo sobre Volador y Tierra.',
          replaces: 'ICEPUNCH'
        },
        {
          slot: 'move',
          value: 'HIGHJUMPKICK',
          note: 'Mucha más potencia inmediata que Puño Drenaje, a costa de la recuperación y del riesgo de daño por fallo.',
          replaces: 'DRAINPUNCH'
        },
        {
          slot: 'ability',
          value: 'MOXIE',
          note: 'Convierte cada presa en +1 de Ataque para transformar el setup en barrido, sacrificando la limpieza de estados de Mudar.'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'MOXIE',
      item: 'LUMBERRY',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRAGONDANCE', 'KNOCKOFF', 'DRAINPUNCH', 'ICEPUNCH'],
      justification:
        'Alternativa ofensiva: Danza Dragón sube Ataque y Velocidad a la vez, y con Autoestima cada presa añade otro nivel de Ataque, de modo que un par de bajas encadenan un barrido. Desarme y Puño Drenaje son el doble STAB, este último con recuperación para aguantar la prioridad rival mientras sube; Puño Hielo cubre Volador y Tierra. La Baya Ziuela absorbe un estado que arruinaría el intento. Es secundario porque Velocidad 58 base obliga a un par de subidas antes de superar al metajuego, y sin Corpulencia ni Restos aguanta peor los golpes durante ese proceso.',
      alternatives: [
        {
          slot: 'move',
          value: 'HIGHJUMPKICK',
          note: 'Cambia recuperación por potencia máxima de STAB Lucha una vez que el barrido ya está en marcha.',
          replaces: 'DRAINPUNCH'
        }
      ]
    }
  ]
}

export default scrafty
