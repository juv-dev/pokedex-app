import type { PokemonTemplateSet } from '../../lib/types'

const nidoking: PokemonTemplateSet = {
  internalName: 'NIDOKING',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SHEERFORCE',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['EARTHPOWER', 'SLUDGEWAVE', 'ICEBEAM', 'FLAMETHROWER'],
      justification:
        'Nidoking comparte con Nidoqueen la sinergia Potencia Bruta + Vidasfera, pero con Ataque 102 / At.Esp 85 / Velocidad 85 su reparto pide un uso más ofensivo. Potencia Bruta ("sube un 30% la potencia de los movimientos con efectos secundarios y anula el efecto") sube Tierra Viva, Onda Tóxica, Rayo Hielo y Lanzallamas, y al perder esos ataques la etiqueta de efecto secundario, Vidasfera no le quita PS al lanzarlos: pega con el multiplicador del objeto sin su retroceso. Tierra Viva y Onda Tóxica son el doble STAB; Rayo Hielo cubre a Dragón, Vuelo y Tierra; Lanzallamas rompe a Acero como Skarmory, Ferrothorn o Scizor que resisten los dos STAB. Miedosa y máxima Velocidad porque el sentido de usar a Nidoking sobre Nidoqueen es el tramo 85: con inversión completa supera a la Nidoqueen rival y a buena parte de las bases 80, y llega antes a colocar presión.',
      alternatives: [
        {
          slot: 'move',
          value: 'THUNDERBOLT',
          note: 'Rayo pega a Agua y Vuelo voluminosos como Gyarados o Mantine que aguantan el resto del set.',
          replaces: 'FLAMETHROWER'
        },
        {
          slot: 'move',
          value: 'STEALTHROCK',
          note: 'Trampa Rocas si el equipo necesita quien las coloque; se pierde cobertura contra Acero.',
          replaces: 'FLAMETHROWER'
        },
        {
          slot: 'move',
          value: 'SUCKERPUNCH',
          note: 'Golpe Bajo (prioridad +1) da una respuesta a barredores especiales más rápidos y debilitados, a costa de cobertura y solo si se ajusta el reparto hacia el Ataque.',
          replaces: 'ICEBEAM'
        }
      ]
    }
  ]
}

export default nidoking
