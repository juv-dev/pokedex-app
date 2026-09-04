import type { PokemonTemplateSet } from '../../lib/types'

const polteageist: PokemonTemplateSet = {
  internalName: 'POLTEAGEIST',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'WEAKARMOR',
      item: 'FOCUSSASH',
      nature: 'MODEST',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHELLSMASH', 'SHADOWBALL', 'GIGADRAIN', 'PSYSHOCK'],
      justification:
        'Polteageist es un setup-sweeper de cristal: Ataque Esp. 134 con solo 60 de PS y 65 de Defensa, así que el plan es montar Rompecoraza (baja Def/Def. Esp. y sube At., At. Esp. y Velocidad en +2) con Banda Aguante garantizando el turno de setup ante un rival que lo haría KO. Armadura Frágil se activa al recibir cualquier golpe físico: ese mismo golpe que Banda Aguante le deja vivir sube aún más la Velocidad en +2, llevándolo a un tier de velocidad inalcanzable. Bola Sombra es el STAB Fantasma, Gigadrenado aporta STAB-neutro de tipo Planta con curación (clave para un mon de 60 PS), y Psicocarga golpea contra la Defensa del rival para romper muros que apilen Def. Esp. Naturaleza Modesta con 252 At. Esp. / 252 Vel.; aquí no se bajan los IV de velocidad porque el objetivo es barrer por delante, no jugar Espacio Raro.',
      alternatives: [
        {
          slot: 'item',
          value: 'WHITEHERB',
          note: 'Hierba Blanca borra la bajada de Def. Esp. de Rompecoraza y permite sobrevivir un chequeo débil especial sin perder el boost, a cambio de no garantizar el turno de setup frente a un KO.',
          replaces: 'FOCUSSASH'
        },
        {
          slot: 'move',
          value: 'STOREDPOWER',
          note: 'Poder Reserva escala con los múltiples boost de Rompecoraza y Armadura Frágil para un golpe de cierre enorme, cediendo la curación de Gigadrenado.',
          replaces: 'GIGADRAIN'
        },
        {
          slot: 'move',
          value: 'DARKPULSE',
          note: 'Pulso Umbrío cubre Fantasma y Psíquico que resisten Bola Sombra, a cambio de golpear contra la Def. Esp. en lugar de con Psicocarga.',
          replaces: 'PSYSHOCK'
        }
      ]
    }
  ]
}

export default polteageist
