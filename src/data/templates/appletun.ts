import type { PokemonTemplateSet } from '../../lib/types'

const appletun: PokemonTemplateSet = {
  internalName: 'APPLETUN',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'THICKFAT',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 0, 4, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DRACOMETEOR', 'GIGADRAIN', 'RECOVER', 'TOXIC'],
      justification:
        'Appletun tiene el perfil de un tanque lento: PS 110, Defensa 80 y Def. Esp. 80 con Velocidad 30 y Ataque Especial 100. La habilidad Sebo reduce a la mitad el daño de Fuego y Hielo, los dos tipos que más amenazan a un tipo Planta/Dragón: convierte el Fuego neutro a resistido y baja el Hielo de 4x a 2x, lo que le permite aguantar golpes que de otro modo lo borrarían. Restos cubre la curación pasiva por turno y, sumado a Recuperación (más Gigadrenado que devuelve la mitad del daño), le da triple vía de sustento para quedarse delante todo el partido. Cometa Draco es el STAB Dragón de 130 de potencia para hacer daño fuerte, y Tóxico desgasta a los muros Especiales o de tipo Acero que resisten su cobertura. Naturaleza Serena con reparto en PS y Def. Esp. refuerza justo el flanco que hace el trabajo de mantener la vida; su falta de velocidad no importa porque el set no depende de atacar primero.',
      alternatives: [
        {
          slot: 'move',
          value: 'LEECHSEED',
          note: 'Drenadoras aplica daño residual y cura un 25% de los PS en cada turno, otra fuente de sustento contra muros que inmunizan o resisten Tóxico.',
          replaces: 'TOXIC'
        },
        {
          slot: 'move',
          value: 'APPLEACID',
          note: 'Ácido Málico es un STAB Planta fiable (80) que baja la Def. Esp. del rival sin bajar la propia, ideal si se quiere presión constante sin el coste de Cometa Draco.',
          replaces: 'DRACOMETEOR'
        }
      ]
    }
  ]
}

export default appletun
