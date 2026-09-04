import type { PokemonTemplateSet } from '../../lib/types'

const celesteela: PokemonTemplateSet = {
  internalName: 'CELESTEELA',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'BEASTBOOST',
      item: 'POWERHERB',
      nature: 'MODEST',
      evs: [252, 0, 0, 252, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['METEORBEAM', 'FLAMETHROWER', 'GIGADRAIN', 'FLASHCANNON'],
      justification:
        'Rayo Meteórico con Hierba Única es el mismo truco del que vive Nihilego, y Celesteela lo aprovecha con la mitad del riesgo: su estadística más alta (107 de At. Esp., frente a 101 de Atk, 103 de Def, 101 de Def. Esp. y 61 de Velocidad) es la que Ultraimpulso sube con cada KO, así que el +1 del Rayo Meteórico y los +1 de Ultraimpulso hacen que cada golpe salga más fuerte que el anterior. Lanzallamas (90, STAB Fuego) rompe el Acero que resiste el set; Gigadrenado (75, STAB Hierba, cura la mitad del daño) es la recuperación del set; y Cañón Resplandor (80, STAB Acero) cierra la cobertura de Roca, Hada y Hielo. Modesta con EV en PS y At. Esp.: el perfil 97/101/103/107/101/61 no gana carreras de Velocidad y el EV de PS amplifica el resto del set, que depende de aguantar el switch-in y disparar.',
      alternatives: [
        {
          slot: 'move',
          value: 'FIREBLAST',
          note: 'Llamarada de máxima potencia (110) rompe los acero más duros, a cambio del 15% de errar.',
          replaces: 'FLAMETHROWER'
        },
        {
          slot: 'item',
          value: 'WEAKNESSPOLICY',
          note: 'Seguro Debilidad sube Ataque y At. Esp. al recibir un supereficaz (Fuego o Eléctrico doble), cediendo el pico instantáneo del Rayo Meteórico.',
          replaces: 'POWERHERB'
        }
      ]
    },
    {
      role: 'stall',
      isPrimary: false,
      confidence: 'viable',
      ability: 'BEASTBOOST',
      item: 'LEFTOVERS',
      nature: 'CAREFUL',
      evs: [252, 0, 128, 0, 128, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['LEECHSEED', 'PROTECT', 'SUBSTITUTE', 'AIRSLASH'],
      justification:
        'Variante stall viable: el perfil 97/103/101 y el tipo Acero/Volador (inmunidad a Tierra y Veneno, resistencias a Acero, Hada, Hielo, Bicho, Psíquico y Roca) hacen de Celesteela el mejor recipiente del ciclo Sustituto + Drenadoras + Protección, con Restos curando los 25% del Sustituto turno a turno. Drenadoras fija el drenaje rival, Protección acumula el drenaje y la curación de Restos, y Tajo Aéreo (80, STAB, con probabilidad de hacer cejar al objetivo) castiga a los que intentan romper el Sustituto. Cauta con EV en PS y un split defensivo 128/128: las defensas 103/101 piden reparto parejo y el PS máximo es la condición del ciclo de Sustituto. Viable y no óptima: el rol breaker con Rayo Meteórico aprovecha la misma estadística desde el primer turno, y un stall de una sola pieza sin otros muros de drenaje queda corto contra equipos que rompen el Sustituto con estados.',
      alternatives: [
        {
          slot: 'move',
          value: 'HEAVYSLAM',
          note: 'Cuerpo Pesado (100, STAB, escala con el peso 999.9 de Celesteela) es el golpe físico del set stall contra los muros ligeros, cediendo el STAB aéreo.',
          replaces: 'AIRSLASH'
        }
      ]
    }
  ]
}

export default celesteela