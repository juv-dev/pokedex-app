import type { PokemonTemplateSet } from '../../lib/types'

const cloyster: PokemonTemplateSet = {
  internalName: 'CLOYSTER',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SKILLLINK',
      item: 'WHITEHERB',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHELLSMASH', 'ICICLESPEAR', 'ROCKBLAST', 'DRILLRUN'],
      justification:
        'Cloyster en Añil V4.13 es el barredor de Rompecoraza de manual: Defensa 180 para sobrevivir el turno de setup y Encadenado para que todos sus movimientos múltiples golpeen siempre cinco veces. Rompecoraza sube dos niveles Ataque, At. Esp. y Velocidad, y Hierba Blanca restaura de inmediato las bajadas de Defensa y Def. Esp. que provoca. Con Encadenado, Carámbano (25 de potencia por golpe, STAB) rinde 125 de potencia garantizada e ignora Robustez, Banda Aguante y Sustituto; Pedrada añade otros cinco golpes contra Fuego, Volador y Bicho; Taladradora perfora a los Acero como Ferrothorn y a los Eléctrico que resisten el Hielo. Es su set óptimo con consenso claro: ninguna otra configuración aprovecha igual Defensa 180 más Encadenado. Naturaleza Firme y reparto en Ataque y Velocidad; tras Rompecoraza, la Velocidad 70 se dobla y basta para pasar por delante de casi todo el tier.',
      alternatives: [
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Banda Aguante garantiza al menos un Rompecoraza contra leads más rápidos o más fuertes, a cambio de la restauración de defensas de Hierba Blanca tras el setup.'
        },
        {
          slot: 'move',
          value: 'LIQUIDATION',
          note: 'Hidroariete es el segundo STAB con posibilidad de bajar la Defensa y castiga a lo que resiste Hielo y Roca, a cambio de la cobertura contra Acero de Taladradora.',
          replaces: 'DRILLRUN'
        },
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Alegre gana carreras de velocidad contra otros barredores con Rompecoraza y contra Pañuelo Elección base 80 tras el impulso, a cambio de potencia en Carámbano y Pedrada.'
        }
      ]
    }
  ]
}

export default cloyster
