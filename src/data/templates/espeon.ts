import type { PokemonTemplateSet } from '../../lib/types'

const espeon: PokemonTemplateSet = {
  internalName: 'ESPEON',
  templates: [
    {
      role: 'sweeper-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'MAGICBOUNCE',
      item: 'LIFEORB',
      nature: 'TIMID',
      evs: [4, 0, 0, 252, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['CALMMIND', 'PSYSHOCK', 'DAZZLINGGLEAM', 'SHADOWBALL'],
      justification:
        'Ataque Especial 130 y Velocidad 110 hacen de Espeon un sweeper especial de primera línea, y en Añil su habilidad oculta es Espejo Mágico, que le devuelve al rival Trampa Rocas, estados y Mofa: entra gratis sobre colocadores y aprovecha el turno para usar Paz Mental. Tras un par de subidas, Fuerza Psíquica golpea por el lado físico y revienta a muros especiales, Brillo Mágico cubre a Siniestro y Dragón, y Bola Sombra pega a los Fantasma y Psíquico que resistirían el STAB. Vidasfera sube cada golpe; su fragilidad 65/60/95 obliga a cerrar rápido. Naturaleza Miedosa y máxima Velocidad y Ataque Especial.',
      alternatives: [
        {
          slot: 'move',
          value: 'STOREDPOWER',
          note: 'Poder Reserva escala con cada subida de Paz Mental y llega a cifras enormes, a cambio de la cobertura inmediata de Bola Sombra.',
          replaces: 'SHADOWBALL'
        },
        {
          slot: 'move',
          value: 'MORNINGSUN',
          note: 'Sol Matinal aporta recuperación para un uso más de wincon prolongado, sacrificando cobertura.',
          replaces: 'DAZZLINGGLEAM'
        },
        {
          slot: 'ability',
          value: 'NEUROFORCE',
          note: 'Fuerza Cerebral sube un 25 % los golpes supereficaces para más pegada inmediata, renunciando a la utilidad de rebote de Espejo Mágico.'
        }
      ]
    },
    {
      role: 'screens-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'MAGICBOUNCE',
      item: 'LIGHTCLAY',
      nature: 'TIMID',
      evs: [252, 0, 0, 4, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['REFLECT', 'LIGHTSCREEN', 'DAZZLINGGLEAM', 'MORNINGSUN'],
      justification:
        'Con Velocidad 110 y Espejo Mágico, Espeon es un lead de pantallas muy fiable: entra a un colocador, le rebota Trampa Rocas y coloca Reflejo y Pantalla Luz antes de recibir daño. Arcilla Luz extiende ambas a ocho turnos. Brillo Mágico evita quedar como blanco pasivo de Mofa y da algo de presión, y Sol Matinal le permite seguir en pie para reinstalar pantallas más tarde. Reparto en PS y Velocidad para colocar primero y aguantar el golpe posterior.',
      alternatives: [
        {
          slot: 'move',
          value: 'TRICK',
          note: 'Truco entrega la Arcilla Luz a un muro rival tras gastar las pantallas, dejándolo con un objeto inútil.',
          replaces: 'DAZZLINGGLEAM'
        }
      ]
    }
  ]
}

export default espeon
