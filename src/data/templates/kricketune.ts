import type { PokemonTemplateSet } from '../../lib/types'

const kricketune: PokemonTemplateSet = {
  internalName: 'KRICKETUNE',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SHARPNESS',
      item: 'LIFEORB',
      nature: 'ADAMANT',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'XSCISSOR', 'AQUACUTTER', 'NIGHTSLASH'],
      justification:
        'Cortante (habilidad oculta) sube 50% los movimientos de corte: Tijera X pasa de 80 a 120, y Acuafilo y Tajo Umbrío de 70 a 105, ambos con alta probabilidad de crítico. Con STAB en Tijera X forman un núcleo ofensivo real. Danza Espada lleva el Ataque 105 a rango de rompedor; Acuafilo cubre Fuego, Roca y Tierra, y Tajo Umbrío pega a Psíquico y Fantasma y a lo que resiste Bicho. Vidasfera aporta el empujón que su Ataque, alto pero no altísimo, necesita para asegurar KO. La debilidad clara es la Velocidad 65: rinde mejor con Red Viscosa de apoyo o entrando tras un revenge. Experto no sirve porque ningún movimiento del set baja de 60 de potencia, y Enjambre solo actúa por debajo de 1/3 de PS.',
      alternatives: [
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Quita el objeto rival; Cortante no lo potencia, pero molesta más a los muros.',
          replaces: 'NIGHTSLASH'
        },
        {
          slot: 'move',
          value: 'STICKYWEB',
          note: 'Modo lead: coloca Red Viscosa y renuncia al setup; combina con Banda Aguante.',
          replaces: 'SWORDSDANCE'
        },
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Garantiza una acción contra un lead más rápido o más fuerte, sobre todo en la línea de Red Viscosa.'
        },
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Supera la franja de bases 65-80 sin depender tanto del apoyo de Red Viscosa.'
        }
      ]
    }
  ]
}

export default kricketune
