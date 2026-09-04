import type { PokemonTemplateSet } from '../../lib/types'

const krookodile: PokemonTemplateSet = {
  internalName: 'KROOKODILE',
  templates: [
    {
      role: 'revenge-killer',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MOXIE',
      item: 'CHOICESCARF',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['EARTHQUAKE', 'KNOCKOFF', 'CLOSECOMBAT', 'STONEEDGE'],
      justification:
        'Con Pañuelo Elección y naturaleza Alegre, Velocidad 92 pasa a superar a todo el metajuego base ofensivo, y Autoestima convierte cada presa en +1 de Ataque: un revenge kill bien elegido puede encadenarse en un barrido. Terremoto es el STAB principal y Desarme el segundo, con el valor añadido de quitar el objeto al entrante. A Bocajarro rompe a los Normal y Acero voluminosos y da el golpe supereficaz a Hielo y Roca; Roca Afilada castiga a los Volador que evaden Terremoto. Ataque 117 base ya pega fuerte sin Cinta, así que el Pañuelo prioriza el control de Velocidad sobre la potencia bruta. El reparto 252/252 y PS 95 le dan margen para entrar a un ataque neutro y devolver el golpe.',
      alternatives: [
        {
          slot: 'move',
          value: 'PURSUIT',
          note: 'Atrapa a los Fantasma y Psíquico que huyen; hace el doble de daño al que pide relevo, a cambio de la cobertura de Roca Afilada.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'move',
          value: 'SUPERPOWER',
          note: 'Más potencia inmediata que A Bocajarro sin bajar defensas físicas, aunque reduce Ataque tras usarlo.',
          replaces: 'CLOSECOMBAT'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Renuncia al control de Velocidad por potencia de rompemuros; combina bien con Autoestima si el equipo aporta prioridad o parálisis.'
        }
      ]
    },
    {
      role: 'hazard-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'INTIMIDATE',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'KNOCKOFF', 'EARTHQUAKE', 'TAUNT'],
      justification:
        'Intimidación más PS 95 y Defensa 80 con inversión completa hacen de Krookodile un colocador de Trampa Rocas sólido: baja el Ataque del rival al entrar y aguanta el intercambio. Desarme mantiene presión ofensiva y quita objetos, Terremoto es el STAB fiable y Mofa impide que un muro rival coloque sus propias trampas o se recupere delante. La inmunidad a Psíquico del tipo Siniestro y la resistencia a Roca ayudan a entrar. Es secundario porque el valor principal de Krookodile en Añil es el revenge kill con Pañuelo y Autoestima; esta versión encaja solo en equipos que necesitan el pivote defensivo con trampa.',
      alternatives: [
        {
          slot: 'move',
          value: 'DRAGONTAIL',
          note: 'Fuerza cambios para acumular daño de Trampa Rocas, a cambio de la utilidad de Mofa.',
          replaces: 'TAUNT'
        }
      ]
    }
  ]
}

export default krookodile
