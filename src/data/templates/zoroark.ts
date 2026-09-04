import type { PokemonTemplateSet } from '../../lib/types'

const zoroark: PokemonTemplateSet = {
  internalName: 'ZOROARK',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'ILLUSION',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['NASTYPLOT', 'DARKPULSE', 'FLAMETHROWER', 'FOCUSBLAST'],
      justification:
        'Ilusión hace que Zoroark entre con el aspecto del último Pokémon del equipo, y esa lectura errónea del rival es lo que vale un turno: el oponente juega contra quien cree que es y regala la ocasión de usar Tramas Oscuras. Con At. Esp. 120 base y Velocidad 105, un solo +2 lo pone a rango de barrer. Pulso Umbrío es el STAB, y Lanzallamas más A Bocajarro forman una cobertura casi sin resistencias compartidas: Acero y Hada caen a Fuego y Lucha, y los Normal y Roca a Lucha. El perfil 60/60/60 es de cristal, así que el plan es aprovechar el engaño de Ilusión para subir una vez y cerrar, no intercambiar golpes.',
      alternatives: [
        {
          slot: 'move',
          value: 'NIGHTDAZE',
          note: 'STAB Siniestro de 85 de potencia que puede bajar la precisión del rival; más pegada que Pulso Umbrío a cambio de 95 de precisión.',
          replaces: 'DARKPULSE'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Preserva la ilusión y el momentum saliendo antes de revelar el farol; sacrifica el turno de Tramas Oscuras.',
          replaces: 'NASTYPLOT'
        },
        {
          slot: 'move',
          value: 'SLUDGEBOMB',
          note: 'Golpe Veneno para las Hadas que aguantan Lanzallamas; útil si el equipo rival abusa de tipo Hada.',
          replaces: 'FOCUSBLAST'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'ILLUSION',
      item: 'CHOICESPECS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['DARKPULSE', 'FLAMETHROWER', 'FOCUSBLAST', 'UTURN'],
      justification:
        'Versión sin setup: Gafas Elección sobre At. Esp. 120 pega de salida lo bastante fuerte como para romper cores enteros aprovechando el turno que regala Ilusión. Pulso Umbrío, Lanzallamas y A Bocajarro dan la cobertura amplia y Ida y Vuelta permite salir para conservar el farol y volver a entrar más tarde con otra ilusión. Es secundario porque, sin Tramas Oscuras, un At. Esp. 120 con Gafas se queda corto para superar a los muros más gruesos y la fragilidad 60/60/60 limita cuántas veces puede repetir la jugada.',
      alternatives: [
        {
          slot: 'move',
          value: 'TRICK',
          note: 'Entrega las Gafas Elección a un muro y lo bloquea en un movimiento; buena salida cuando la ofensiva ya no rompe nada.',
          replaces: 'UTURN'
        }
      ]
    }
  ]
}

export default zoroark
