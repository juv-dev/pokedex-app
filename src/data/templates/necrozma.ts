import type { PokemonTemplateSet } from '../../lib/types'

const necrozma: PokemonTemplateSet = {
  internalName: 'NECROZMA',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'PRISMARMOR',
      item: 'LIFEORB',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['PHOTONGEYSER', 'EARTHPOWER', 'HEATWAVE', 'MOONLIGHT'],
      justification:
        'Armadura Prisma reduce en una cuarta parte el daño de los golpes supereficaces: el 97/101/89 de Necrozma con la armadura activa lo vuelve un muro de verdad contra sus propios counters, y el set de breaker paga esa resistencia con el multiplicador de Vidasfera (+30% de daño) sobre un golpe de 127 de At. Esp. El golpe estrella es Géiser Fotónico (100, STAB, la categoría la decide la estadística más alta: con el At. Esp. mayor golpea especial) y encima ignora la habilidad del rival, quitándole a los demás su Disfraz, su Robustez y su Guardia Espectro. Tierra Viva (90) cubre Acero, Fuego y Eléctrico; Onda Ígnea (95) rompe Acero, Hielo y Bicho, y Luz Lunar (recupera la mitad, más en sol) cura el retroceso de la Vidasfera. Modesta con EV en PS y At. Esp.: la Velocidad 79 base sin EV se queda en 194 y Necrozma no gana carreras, así que el EV va a sobrevivir el switch-in que el breaker necesita.',
      alternatives: [
        {
          slot: 'move',
          value: 'METEORBEAM',
          note: 'Rayo Meteórico con Hierba Única da el pico instantáneo +1, cediendo la cobertura de Onda Ígnea.',
          replaces: 'HEATWAVE'
        },
        {
          slot: 'item',
          value: 'POWERHERB',
          note: 'Hierba Única adelanta el pico de Géiser Fotónico sin padecer retroceso, cediendo el +30% de daño sostenido de Vidasfera.',
          replaces: 'LIFEORB'
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme (65) arranca el objeto del muro y castiga los tanques, cediendo la cobertura de Onda Ígnea.',
          replaces: 'HEATWAVE'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'PRISMARMOR',
      item: 'LEFTOVERS',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'PHOTONGEYSER', 'EARTHPOWER', 'MOONLIGHT'],
      justification:
        'Variante de set-up viable: Paz Mental (+1 At. Esp., +1 Def. Esp.) con Armadura Prisma y Restos convierte a Necrozma en un muro que además acumula: después de dos pantallas su 89 de Def. Esp. se vuelve 178 y Géiser Fotónico multiplica su 127 de At. Esp. +2. Tierra Viva cubre el Acero que su STAB no toca y Luz Lunar cura el intercambio. Es viable y no óptima porque el rol breaker con Vidasfera decide las partidas desde el turno uno, mientras el set-up sufre el destino común de los acumuladores: un crítico o un Golpe Bajo en el turno de la danza lo deshace.',
      alternatives: [
        {
          slot: 'move',
          value: 'PSYSHOCK',
          note: 'Psicocarga ataca la Defensa física y rompe muros que la Paz Mental no alcanza, cediendo la curación de Luz Lunar.',
          replaces: 'MOONLIGHT'
        },
        {
          slot: 'item',
          value: 'WEAKNESSPOLICY',
          note: 'Seguro Debilidad convierte el supereficaz —que la Armadura Prisma ya mitiga— en +1 de Ataque y At. Esp., cediendo la recuperación de Restos.',
          replaces: 'LEFTOVERS'
        }
      ]
    }
  ]
}

export default necrozma