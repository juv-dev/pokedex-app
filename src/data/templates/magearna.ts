import type { PokemonTemplateSet } from '../../lib/types'

const magearna: PokemonTemplateSet = {
  internalName: 'MAGEARNA',
  templates: [
    {
      role: 'bulky-attacker',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'SOULHEART',
      item: 'ASSAULTVEST',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FLEURCANNON', 'FLASHCANNON', 'AURASPHERE', 'THUNDERBOLT'],
      justification:
        'Coránima sube el At. Esp. un nivel con cada KO de cualquier Pokémon —aliado o rival— en el campo: en un rol bulky, donde Magearna entra a aguantar y quedar viva, los KOs ajenos le llegan solos y cada uno la hace más letal. El Chaleco Asalto sube su Def. Esp. efectiva a ~399 (266 de stat sin inversión × 1.5) y el set se convierte en el bloque de Acero/Hada más redondo del bloque: Cañón Floral (130, STAB Hada, a costa de bajar el At. Esp. propio dos niveles) borra a los Dragones; Cañón Resplandor (80, STAB Acero) es el golpe de spam; Onda Certera (120) rompe Fuego, Acero, Siniestro y Normal; y Rayo cubre Volador y Agua. Modesta con EV en PS y At. Esp.: 65 de Velocidad base no gana carreras y el EV va a la supervivencia que el rol exige.',
      alternatives: [
        {
          slot: 'move',
          value: 'VOLTSWITCH',
          note: 'Voltiocambio mantiene el momentum del bulky, cediendo la cobertura de Onda Certera.',
          replaces: 'AURASPHERE'
        },
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Rayo Hielo cubre Tierra, Dragón y Volador con precisión total, cediendo la cobertura de Acero de Cañón Resplandor.',
          replaces: 'FLASHCANNON'
        }
      ]
    },
    {
      role: 'setup-sweeper',
      isPrimary: false,
      confidence: 'viable',
      ability: 'SOULHEART',
      item: 'LEFTOVERS',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHIFTGEAR', 'IRONHEAD', 'PLAYROUGH', 'ICESPINNER'],
      justification:
        'Variante física viable con el mismo motor: Cambio de Marcha (sube Ataque un nivel y Velocidad dos) y Coránima alimentan un barrido físico donde cada KO refuerza el siguiente golpe. Cabeza de Hierro (80, STAB, con probabilidad de hacer cejar) y Carantoña (90, STAB Hada) forman la STAB combinada que no deja escapatoria, y Pirueta Helada (80) corta el campo rival —el set llega con su propio anti-campo para los Tapu— y cubre Tierra, Dragón y Volador. Alegre con EV en Ataque y Velocidad: con Cambio de Marcha la Velocidad 251 (65 base con EV) se duplica —el movimiento la sube dos niveles— y el Ataque 289 (95 base con Alegre) no necesita más inversión. Viable y no óptima: el rol special con Chaleco dispara desde el primer turno y aprovecha Coránima en cada KO ajeno, mientras el set-up físico sacrifica el pico de Cañón Floral y pierde contra los muros físicos de Acero/Hada que el set special rompe con Onda Certera.',
      alternatives: [
        {
          slot: 'item',
          value: 'WEAKNESSPOLICY',
          note: 'Seguro Debilidad convierte el supereficaz (Fuego o Tierra) en +1 inmediato tras Cambio de Marcha, cediendo la recuperación de Restos.',
          replaces: 'LEFTOVERS'
        }
      ]
    }
  ]
}

export default magearna