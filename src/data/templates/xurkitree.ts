import type { PokemonTemplateSet } from '../../lib/types'

const xurkitree: PokemonTemplateSet = {
  internalName: 'XURKITREE',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'BEASTBOOST',
      item: 'FOCUSSASH',
      nature: 'MODEST',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['TAILGLOW', 'THUNDERBOLT', 'ENERGYBALL', 'DAZZLINGGLEAM'],
      justification:
        'Luminicola triplica el At. Esp. en un solo turno y Xurkitree es uno de los pocos Pokémon con acceso a ella sin coste: partir de 173 de At. Esp. hace que el golpe posterior no necesite trucos. El set no depende de ningún campo: el campo eléctrico de Añil solo anula el sueño de los Pokémon en el suelo y no potencia los ataques, así que Xurkitree no necesita sostener terreno para barrer. La Banda Aguante garantiza el turno de set-up: sobrevive al primer golpe al máximo PS, dispara Luminicola y su siguiente Rayo (90, STAB) o Energibola (90, STAB, con 10% de bajar la Def. Esp. rival) borran lo que esté enfrente, y desde ahí Ultraimpulso sube su At. Esp.—la estadística más alta— con cada KO, cerrando la destrucción. Brillo Mágico (80, STAB Hada) rompe a los Siniestros que aguantan Rayo y da una segunda cobertura al pool de muros. Modesta con EV en At. Esp. (489 con 173 base) y Velocidad (265): el pico de daño ya está resuelto y la Velocidad 265 decide contra los acero y tanques lentos.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera da +30% de daño al Luminicola sin la garantía de supervivencia, y el retroceso lo paga el set-up frágil de 83/71/71.',
          replaces: 'FOCUSSASH'
        },
        {
          slot: 'move',
          value: 'RISINGVOLTAGE',
          note: 'Alto Voltaje (70, potencia doble contra el rival bajo campo eléctrico) es el golpe de campo propio si el equipo lo sostiene, cediendo la cobertura de Brillo Mágico.',
          replaces: 'THUNDERBOLT'
        },
        {
          slot: 'move',
          value: 'ELECTRICTERRAIN',
          note: 'Campo Eléctrico propio duplica Alto Voltaje y anula el sueño rival, cediendo el turno de set-up que la Banda compra.',
          replaces: 'DAZZLINGGLEAM'
        }
      ]
    }
  ]
}

export default xurkitree