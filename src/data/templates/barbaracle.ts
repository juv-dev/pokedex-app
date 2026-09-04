import type { PokemonTemplateSet } from '../../lib/types'

const barbaracle: PokemonTemplateSet = {
  internalName: 'BARBARACLE',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TOUGHCLAWS',
      item: 'WHITEHERB',
      nature: 'ADAMANT',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHELLSMASH', 'STONEEDGE', 'LIQUIDATION', 'EARTHQUAKE'],
      justification:
        'Roca/Agua con Ataque 115 / Def 115 / At. Esp. 86 / Velocidad 54. Rompecoraza sube Ataque, At. Esp. y Velocidad dos niveles y baja Defensa y Def.Esp uno; la Hierba Blanca restaura esas bajadas al instante, así que Barbaracle queda +2 en ofensiva sin ceder solidez. Garra Dura en Añil sube un tercio la potencia de los movimientos de contacto: potencia Hidroariete. Roca Afilada es el STAB Roca de respaldo (no es de contacto, pero cierra el par ofensivo Roca+Agua que casi nada resiste), y Terremoto cubre Acero, Eléctrico y Veneno. La Velocidad base 54 exige el +2 de Rompecoraza para superar al tier; Firme para el pico de daño tras subir.',
      alternatives: [
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Asegura que el +1 de Velocidad de Rompecoraza supere a más usuarios de Pañuelo Elección, a cambio de potencia.'
        },
        {
          slot: 'item',
          value: 'LUMBERRY',
          note: 'Se cura un estado como parálisis o quemadura antes de montar Rompecoraza, a cambio de restaurar las bajadas de defensa.'
        },
        {
          slot: 'move',
          value: 'XSCISSOR',
          note: 'Ataque de contacto que sí potencia Garra Dura, para Psíquico, Siniestro y Planta, a cambio de la cobertura de Terremoto.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'move',
          value: 'CROSSCHOP',
          note: 'Lucha de contacto potenciado por Garra Dura para Acero y Normales muro, a cambio de la cobertura de Terremoto.',
          replaces: 'EARTHQUAKE'
        }
      ]
    }
  ]
}

export default barbaracle
