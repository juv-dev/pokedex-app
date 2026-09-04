import type { PokemonTemplateSet } from '../../lib/types'

const sigilyph: PokemonTemplateSet = {
  internalName: 'SIGILYPH',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MAGICGUARD',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'STOREDPOWER', 'AIRSLASH', 'ROOST'],
      justification:
        'Muro Mágico en Añil anula todo el daño indirecto —trampas, retroceso de Vidasfera, quemadura, tóxico— y además impide que atrapen al Pokémon. Eso hace de Sigilyph un win condition muy difícil de desgastar: entra sin pagar Trampa Rocas, usa Paz Mental sin castigo y la Vidasfera potencia sin coste. Poder Reserva empieza en 20 pero escala con cada subida, así que tras dos o tres Paz Mental (que suman At. Esp., Def. Esp. y cuentan para Poder Reserva) se vuelve un golpe demoledor; Tajo Aéreo es la segunda vía ofensiva que pega neutro a los Siniestro, inmunes a Poder Reserva de tipo Psíquico. Aterrizaje recupera la mitad de los PS y es la razón por la que aguanta la partida. Velocidad 97 con Miedosa lo deja delante de buena parte de la ofensiva mientras sube.',
      alternatives: [
        {
          slot: 'move',
          value: 'PSYSHOCK',
          note: 'STAB Psíquico inmediato que golpea la Defensa física; mejor contra muros especiales y Blissey que contra los que aún no tienes subidas.',
          replaces: 'AIRSLASH'
        },
        {
          slot: 'item',
          value: 'FLAMEORB',
          note: 'Con Muro Mágico la quemadura no hace daño; habilita Cambio de Bando como quinto recurso mental para pasar el estado a un muro rival.'
        },
        {
          slot: 'move',
          value: 'PSYCHOSHIFT',
          note: 'Combinado con Toxisfera o Llamasfera transfiere el estado al rival; convierte a Sigilyph en un absorbe-estados ofensivo.',
          replaces: 'AIRSLASH'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'TINTEDLENS',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['PSYCHIC', 'AIRSLASH', 'HEATWAVE', 'ENERGYBALL'],
      justification:
        'Cromolente hace que los golpes poco eficaces peguen el doble, de modo que Sigilyph pasa a no tener cambios seguros: incluso los tipos que resisten Psíquico o Volador reciben daño casi neutro. Con At. Esp. 103 y Velocidad 97, más la cobertura de Onda Ígnea (Acero, Bicho, Planta) y Bola Energía (Agua, Tierra, Roca), rompe cores defensivos enteros sin necesidad de subir. Es secundario porque sin Muro Mágico vuelve a sufrir Trampa Rocas y el retroceso de la Vidasfera, así que rinde en equipos ofensivos que solo quieren su presión inmediata, no un win condition a largo plazo.',
      alternatives: [
        {
          slot: 'move',
          value: 'SHADOWBALL',
          note: 'Golpe Fantasma para el espejo y para otros Psíquico ofensivos, a cambio de la cobertura de Bola Energía.',
          replaces: 'ENERGYBALL'
        }
      ]
    }
  ]
}

export default sigilyph
