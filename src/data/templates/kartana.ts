import type { PokemonTemplateSet } from '../../lib/types'

const kartana: PokemonTemplateSet = {
  internalName: 'KARTANA',
  templates: [
    {
      role: 'sweeper-physical',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'BEASTBOOST',
      item: 'FOCUSSASH',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'LEAFBLADE', 'SACREDSWORD', 'SMARTSTRIKE'],
      justification:
        '181 de Ataque, 109 de Velocidad y la combinación más frágil del bloque (59/131/31): Kartana es el sweeper físico más eficiente por palanca. Danza Espada con Banda Aguante —"entrar, sobrevivir el primer golpe sí o sí, doblar el Ataque y barrer"— y de ahí en adelante Ultraimpulso sube su Ataque con cada KO, la estadística más alta: +2 de Ataque sin más inversión. Hoja Aguda (90, STAB) es el golpe principal; Espada Santa (90, STAB, ignora las subidas de Defensa y los EV rivales) rompe los muros que se esconden tras Corpulencia y Defensa Férrea; y Cuerno Certero (70, STAB, nunca falla) vuelve al set infalible contra los que suben Evasión, el único contraataque posible al barrido. Alegre con EV en Ataque y Velocidad (348 con 109 base): el golpe posterior a Danza Espada es Ataque 181 doblado y la Velocidad decide la carrera contra los muros.',
      alternatives: [
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera da el pico de daño sin necesidad del turno de set-up, cediendo la garantía de sobrevivir del primer golpe.',
          replaces: 'FOCUSSASH'
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme (65) arranca el Restos o la Baya del primer muro y castiga al que intenta el intercambio, cediendo el golpe que nunca falla.',
          replaces: 'SMARTSTRIKE'
        },
        {
          slot: 'move',
          value: 'XSCISSOR',
          note: 'Tijera X (80, STAB Bicho) pega 2x a Psíquico y Siniestro, cediendo la cobertura anti-evasión.',
          replaces: 'SMARTSTRIKE'
        }
      ]
    },
    {
      role: 'revenge-killer',
      isPrimary: false,
      confidence: 'viable',
      ability: 'BEASTBOOST',
      item: 'CHOICESCARF',
      nature: 'JOLLY',
      evs: [0, 252, 0, 0, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['LEAFBLADE', 'SACREDSWORD', 'SMARTSTRIKE', 'KNOCKOFF'],
      justification:
        'Variante de asesino viable: con Pañuelo Elección Kartana alcanza 522 de Velocidad (348 con Alegre x1.5), suficiente para interrumpir a cualquier barredor a +1, y con 181 de Ataque de base no necesita Danza Espada para liquidar a un rival herido. Hoja Aguda, Espada Santa y Cuerno Certero mantienen el cuerpo del set, y Desarme añade la utilidad de despojar del objeto al muro antes de que el equipo entre. No es óptima porque el Pañuelo bloquea el cambio de movimiento y condena el set a pivotar cada turno con la cobertura equivocada: si Kartana entra con Pañuelo, lo correcto es salir y volver a elegir, y para eso el rol de sweeper con Banda Aguante y su propia Danza Espada es más redondo. El Pañuelo no le da nada que no logre el +2 de Ultraimpulso tras el primer KO.',
      alternatives: [
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Banda Aguante recupera la garantía del primer golpe y permite el set-up, cediendo la velocidad del Pañuelo.',
          replaces: 'CHOICESCARF'
        }
      ]
    }
  ]
}

export default kartana