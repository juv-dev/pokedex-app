import type { PokemonTemplateSet } from '../../lib/types'

const vespiquen: PokemonTemplateSet = {
  internalName: 'VESPIQUEN',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'INTIMIDATE',
      item: 'HEAVYDUTYBOOTS',
      nature: 'IMPISH',
      evs: [248, 0, 208, 0, 52, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HEALORDER', 'UTURN', 'TOXIC', 'AIRSLASH'],
      justification:
        'El volumen 70/102/102 con Intimidación al entrar y Rescate (Heal Order, cura el 50% de forma limpia, sin perder el tipo como haría Malabarista) sostiene un pivote defensivo sólido. Ida y Vuelta reposiciona al equipo tras absorber un golpe con el Ataque rival ya bajado. Tóxico mina a los muros y rivales pasivos; Tajo Aéreo es el STAB fiable con posible amedrentar. Botas Gruesas porque el tipo Bicho/Volador sufre el doble de Trampa Rocas y Vespiquen entra y sale constantemente. Agitada con inversión física porque Intimidación ya la orienta a aguantar físicos, y su Def. Esp. 102 resiste sin inversión. Presión y Nerviosismo son nichos que no aportan al rol de pivote.',
      alternatives: [
        {
          slot: 'move',
          value: 'DEFOG',
          note: 'Convierte a Vespiquen en la retirada de trampas del equipo; pierde el desgaste de Tóxico.',
          replaces: 'TOXIC'
        },
        {
          slot: 'move',
          value: 'SPIKES',
          note: 'Coloca Púas aprovechando su volumen y los cambios forzados por Intimidación.',
          replaces: 'TOXIC'
        },
        {
          slot: 'move',
          value: 'ROOST',
          note: 'Misma recuperación con el movimiento estándar; Rescate es la opción principal por no perder el tipo Volador ese turno.',
          replaces: 'HEALORDER'
        },
        {
          slot: 'move',
          value: 'POWERGEM',
          note: 'Pega a Fuego, Volador y Bicho y a otros voladores sin depender de la precisión 95.',
          replaces: 'AIRSLASH'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Recuperación pasiva continua si el equipo aporta retirada de trampas.'
        }
      ]
    }
  ]
}

export default vespiquen
