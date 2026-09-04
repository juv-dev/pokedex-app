import type { PokemonTemplateSet } from '../../lib/types'

const ferroseed: PokemonTemplateSet = {
  internalName: 'FERROSEED',
  templates: [
    {
      role: 'hazard-setter',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'IRONBARBS',
      item: 'EVIOLITE',
      nature: 'IMPISH',
      evs: [252, 0, 168, 0, 88, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'SPIKES', 'LEECHSEED', 'PROTECT'],
      justification:
        'Ferroseed es uno de los pocos sin evolucionar con un nicho real: Mineral Evolutivo multiplica por 1,5 sus defensas de partida (Def 91 / Def.Esp 86), llevándolas a valores de muro pleno, y su tipo Planta/Acero le da un puñado enorme de resistencias con una sola debilidad manejable a Fuego. Con esa base entra una y otra vez a colocar trampas: Trampa Rocas y Púas montan el daño de entrada del equipo, y Drenadoras más Protección forman su motor de recuperación, ganando un turno y curándose mientras el rival se desgasta. Punta Acero añade 1/8 de daño a cada atacante de contacto, castigo pasivo que se acumula con Drenadoras y las trampas. Naturaleza Agitada y reparto físico defensivo porque casi todo lo que amenaza a un Planta/Acero con Mineral Evolutivo pega por el lado físico. Es un colocador lento y difícil de eliminar, no una amenaza ofensiva.',
      alternatives: [
        {
          slot: 'move',
          value: 'GYROBALL',
          note: 'STAB de Acero que pega durísimo desde Velocidad 10 (requiere naturaleza Plácida e IV de Velocidad a 0); se pierde la sinergia Drenadoras + Protección.',
          replaces: 'PROTECT'
        },
        {
          slot: 'move',
          value: 'THUNDERWAVE',
          note: 'Control de velocidad para el equipo desde un cuerpo que casi nunca será atacado con éxito.',
          replaces: 'SPIKES'
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Retira objetos clave del rival; poca potencia pero utilidad constante.',
          replaces: 'SPIKES'
        },
        {
          slot: 'item',
          value: 'LEFTOVERS',
          note: 'Cura pasiva fiable en vez del volumen de Mineral Evolutivo, a costa de encajar mucho peor los golpes neutros.'
        }
      ]
    }
  ]
}

export default ferroseed
