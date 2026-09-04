import type { PokemonTemplateSet } from '../../lib/types'

const marshadow: PokemonTemplateSet = {
  internalName: 'MARSHADOW',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TECHNICIAN',
      item: 'LIFEORB',
      nature: 'JOLLY',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SPECTRALTHIEF', 'CLOSECOMBAT', 'SHADOWSNEAK', 'ICEPUNCH'],
      justification:
        'Marshadow en Añil V4.13 mantiene el perfil de barredor físico de élite: Ataque 125 y Velocidad 125 con PS 90 / Def 80 / Def.Esp 90 le permiten tomar un golpe y seguir. Experto es la habilidad que define el set: potencia un 50% los movimientos de 60 o menos de potencia, y Sombra Vil (40, prioridad +1) pasa a 60 efectivos como STAB de remate que además ignora el orden de velocidad. Robasombra (90, STAB Fantasma) roba los aumentos de estadísticas del rival y anula a los setup sweepers que intenten montar Danza Espada o Paz Mental. A Bocajarro (120, STAB Lucha) es el golpe de poder, y Puño Hielo cubre a Volador, Tierra y Dragón que resisten la doble STAB. Vidasfera eleva todo un 30% sin depender de predicciones; Alegre con reparto 252 At. / 252 Vel. maximiza el rango de barrido contra otros Pokémon de Velocidad 125 y los deja atrás a los de 120.',
      alternatives: [
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme pega supereficaz a Fantasma y Psíquico y quita el objeto del rival, a cambio de la cobertura de Hielo contra Tierra y Dragón.',
          replaces: 'ICEPUNCH'
        },
        {
          slot: 'move',
          value: 'ZENHEADBUTT',
          note: 'Cabezazo Zen es la única vía del set contra muros Veneno como Toxapex, que resisten el combo Lucha/Fantasma.',
          replaces: 'ICEPUNCH'
        },
        {
          slot: 'move',
          value: 'THUNDERPUNCH',
          note: 'Puño Trueno cubre Agua y Volador y paraliza con 20%, cediendo el golpe limpio a Garchomp y Landorus.',
          replaces: 'ICEPUNCH'
        },
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Banda Aguante garantiza al menos una acción de Robasombra o un Sombra Vil aun contra un rival más rápido, a costa del 30% de Vidasfera.'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'TECHNICIAN',
      item: 'CHOICEBAND',
      nature: 'JOLLY',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SPECTRALTHIEF', 'CLOSECOMBAT', 'SHADOWSNEAK', 'KNOCKOFF'],
      justification:
        'Variante de rompemuros con Cinta Elección: duplica el pico de daño de Robasombra y A Bocajarro y convierte a Sombra Vil, potenciado por Experto a 60 y con prioridad +1, en un remate de 60 x1,5 de STAB x1,5 de Cinta que no puede ser superado en velocidad. Desarme sustituye la cobertura de Hielo: pega supereficaz a Fantasma y Psíquico y castiga a los cambios quitando el objeto. Es viable y no óptimo porque la Cinta deja a Marshadow expuesto a quedar bloqueado en un movimiento que el rival resiste, y su rol de limpiador de final de partida pierde flexibilidad frente al set de Vidasfera. La velocidad no se sacrifica: Alegre mantiene el empate contra otros de Velocidad 125, que es donde Marshadow compite.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera permite alternar movimientos sin perder casi pico de daño y es la opción del set primario.'
        },
        {
          slot: 'move',
          value: 'ICEPUNCH',
          note: 'Puño Hielo recupera la cobertura contra Tierra, Dragón y Volador a costa del robo de objeto de Desarme.',
          replaces: 'KNOCKOFF'
        },
        {
          slot: 'nature',
          value: 'ADAMANT',
          note: 'Firme maximiza el daño de la Cinta aceptando perder el empate de velocidad contra otros de Velocidad 125.'
        }
      ]
    }
  ]
}

export default marshadow