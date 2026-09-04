import type { PokemonTemplateSet } from '../../lib/types'

const druddigon: PokemonTemplateSet = {
  internalName: 'DRUDDIGON',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'ROUGHSKIN',
      item: 'ROCKYHELMET',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'GLARE', 'DRAGONCLAW', 'FIREPUNCH'],
      justification:
        'Ataque 120 y un físico de 77/90/90 con Velocidad 48 apuntan a un colocador de trampas resistente que devuelve daño al ser golpeado, no a un atacante rápido. Piel Tosca y Casco Dentado se suman: cualquier rival que lo ataque por contacto pierde 1/16 por la habilidad y 1/6 por el objeto, castigo muy fuerte para los atacantes físicos que suelen forzar su entrada. Trampa Rocas monta el peligro de entrada aprovechando esa seguridad. Deslumbrar reparte parálisis y ayuda a compensar la Velocidad baja frenando a las amenazas ofensivas. Garra Dragón es la STAB fiable y Puño Fuego rompe a los tipos Acero y Hada que entran a bloquear el Dragón. Agitada maximiza el físico para que el ciclo de castigo por contacto rinda al máximo.',
      alternatives: [
        {
          slot: 'move',
          value: 'DRAGONTAIL',
          note: 'Cambia la parálisis por forzar cambios y acumular daño de trampas, a costa del control de velocidad.',
          replaces: 'GLARE'
        },
        {
          slot: 'move',
          value: 'EARTHQUAKE',
          note: 'Cobertura de Tierra contra Acero y Fuego si el equipo no teme a los muros de tipo Planta.',
          replaces: 'FIREPUNCH'
        },
        {
          slot: 'ability',
          value: 'MOLDBREAKER',
          note: 'Rompemoldes ignora habilidades como Levitación o Multiescama al atacar, útil en un rol más ofensivo.'
        }
      ]
    }
  ]
}

export default druddigon
