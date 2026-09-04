import type { PokemonTemplateSet } from '../../lib/types'

const onix: PokemonTemplateSet = {
  internalName: 'ONIX',
  templates: [
    {
      role: 'wall-physical',
      isPrimary: true,
      confidence: 'viable',
      ability: 'STURDY',
      item: 'EVIOLITE',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'BODYPRESS', 'EARTHQUAKE', 'ROAR'],
      justification:
        'Onix en Añil V4.13 tiene Defensa 160 y sigue sin evolucionar, así que Mineral Evolutivo multiplica por 1,5 esa Defensa y su Def. Esp., dándole una defensa física efectiva superior a la de casi cualquier muro plenamente evolucionado. Sobre esa base cumple dos funciones: colocar Trampa Rocas y frenar físicos. Plancha Corporal usa la Defensa como estadística de ataque, de modo que con Defensa 160 más Mineral Evolutivo pega de verdad pese a no tener STAB; Terremoto es el STAB de tipo Tierra; Rugido saca al rival y acumula daño de trampas contra equipos que intenten montar setup delante. Robustez actúa de red de seguridad contra un golpe que lo dejaría KO desde PS máximos. La limitación honesta es que no tiene recuperación instantánea (solo Descanso) y que sus PS 55 y Def. Esp. 45 lo hacen frágil ante ataques especiales, por lo que queda en viable: es un muro físico y colocador de trampas muy sólido, pero de nicho concreto. Naturaleza Agitada y reparto en PS y Defensa.',
      alternatives: [
        {
          slot: 'move',
          value: 'REST',
          note: 'Descanso da la única recuperación real del repertorio y alarga su vida como muro físico, a cambio del control de setup y la acumulación de trampas de Rugido.',
          replaces: 'ROAR'
        },
        {
          slot: 'move',
          value: 'DRAGONTAIL',
          note: 'Cola Dragón hace daño mientras fuerza el cambio, útil si el equipo quiere chip garantizado, a cambio de la fiabilidad de Rugido, que nunca falla ni tiene prioridad negativa condicionada por inmunidades.',
          replaces: 'ROAR'
        },
        {
          slot: 'ability',
          value: 'ROCKHEAD',
          note: 'Cabeza Roca solo aporta en un set ofensivo con Testarazo o Doble Filo y naturaleza física; para el muro con Mineral Evolutivo, Robustez es superior.'
        }
      ]
    }
  ]
}

export default onix
