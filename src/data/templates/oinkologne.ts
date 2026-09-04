import type { PokemonTemplateSet } from '../../lib/types'

const oinkologne: PokemonTemplateSet = {
  internalName: 'OINKOLOGNE',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'THICKFAT',
      item: 'SITRUSBERRY',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STUFFCHEEKS', 'BELCH', 'BODYPRESS', 'EARTHQUAKE'],
      justification:
        'Oinkologne arma un turno 1 completo: Atiborramiento consume la Baya Zidra de inmediato (curación de golpe, sube la Defensa dos niveles y habilita Eructo, que falla si el usuario no ha consumido una baya). Con PS 110 y Defensa 100 potenciada por Osada y por el reparto, el set convierte ese arranque en una pared física con golpe: Plancha Corporal escala con la Defensa 100 +2 del primer turno y con el 252 de EVs, y Terremoto cubre Acero y Roca, los dos tipos que resisten el STAB Normal y a los que Plancha Corporal no alcanza. Sebo divide el daño de Fuego y Hielo, los dos tipos especiales de cobertura ofensiva comunes, y compensa la Defensa Especial media. Es el mejor uso del pool propio: ningún otro Normal del dex combina Atiborramiento, Eructo y Plancha Corporal con una baya de curación.',
      alternatives: [
        {
          slot: 'ability',
          value: 'GLUTTONY',
          note: 'Gula activa la Baya Zidra sola al 50% de PS, liberando el turno de Atiborramiento para Maldición o un ataque.'
        },
        {
          slot: 'move',
          value: 'YAWN',
          note: 'Bostezo fuerza cambios y regala turnos de ataque confirmado, a cambio del daño de Terremoto.',
          replaces: 'EARTHQUAKE'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Restos dan curación pasiva sin depender de la baya; exige renunciar a Eructo y a la subida doble de Defensa del primer turno.'
        }
      ]
    },
    {
      role: 'bulky-attacker',
      isPrimary: false,
      confidence: 'viable',
      ability: 'GLUTTONY',
      item: 'SITRUSBERRY',
      nature: 'CAREFUL',
      evs: [252, 0, 0, 0, 252, 4],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CURSE', 'BODYPRESS', 'BELCH', 'EARTHQUAKE'],
      justification:
        'Variante de acumulo defensivo: Gula hace que la Baya Zidra se consuma al 50% de PS, curando en el momento crítico y habilitando Eructo sin gastar el turno de Atiborramiento. Maldición sube Ataque y Defensa un nivel por uso a cambio de Velocidad, una estadística que Oinkologne (65) no necesita; Plancha Corporal escala con la Defensa acumulada, y Eructo y Terremoto escalan con el Ataque. Cauta con 252 de Defensa Especial porque Maldición ya cubre el lado físico. Es viable y no óptimo porque necesita dos o tres turnos de Maldición para igualar el arranque inmediato del set de Atiborramiento, y el rival puede castigar el acumulo con estados o cambios.',
      alternatives: [
        {
          slot: 'move',
          value: 'BODYSLAM',
          note: 'Golpe Cuerpo da STAB Normal con 30% de paralizar, sin depender del consumo de la baya, a cambio de la sinergia de Plancha Corporal con Maldición.',
          replaces: 'BODYPRESS'
        },
        {
          slot: 'move',
          value: 'REST',
          note: 'Descanso cura por completo y limpia estados a costa de un turno dormido; Sonámbulo lo acompaña en el cuarto hueco.',
          replaces: 'BELCH'
        }
      ]
    }
  ]
}

export default oinkologne