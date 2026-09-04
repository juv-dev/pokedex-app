import type { PokemonTemplateSet } from '../../lib/types'

const torterra: PokemonTemplateSet = {
  internalName: 'TORTERRA',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'ROCKHEAD',
      item: 'WHITEHERB',
      nature: 'ADAMANT',
      evs: [4, 252, 0, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SHELLSMASH', 'WOODHAMMER', 'EARTHQUAKE', 'STONEEDGE'],
      justification:
        'Rompecoraza sube Ataque, At. Esp. y Velocidad dos niveles y baja Defensa y Def. Esp. uno, pero la Hierba Blanca restaura esas bajadas al instante, dejando una subida limpia de +2/+2/+2. La clave del set es Cabeza Roca (habilidad oculta), que anula el retroceso de Latigazo (Wood Hammer, 120 de potencia con RecoilThirdOfDamageDealt): así el STAB principal no le cuesta PS, algo vital para un cuerpo que tras romper la coraza queda con Defensa y Def. Esp. reducidas por debajo de su base 105/85. Terremoto y Roca Afilada forman la cobertura EdgeQuake casi perfecta. La Velocidad base 56 es lenta, pero tras Rompecoraza supera a todo el metajuego que no lleve Pañuelo Elección. Firme maximiza el poder porque el At. Esp. no se usa; Espesura solo actúa por debajo de 1/3 de PS y no aporta a esta línea.',
      alternatives: [
        {
          slot: 'nature',
          value: 'JOLLY',
          note: 'Asegura superar a más usuarios de Pañuelo Elección y a las bases 100+ tras la subida, a cambio de potencia.'
        },
        {
          slot: 'move',
          value: 'SWORDSDANCE',
          note: 'Línea más lenta pero repetible: +2 Ataque sin bajar defensas, aprovechando el volumen 95/105/85.',
          replaces: 'SHELLSMASH'
        },
        {
          slot: 'move',
          value: 'SYNTHESIS',
          note: 'Recuperación (variable según clima) para un perfil de tanque con Danza Espada en vez de Rompecoraza.',
          replaces: 'STONEEDGE'
        },
        {
          slot: 'move',
          value: 'HEADLONGRUSH',
          note: 'Más potencia (120) pero reduce tu Defensa y Def. Esp.; útil solo cuando buscás el KO inmediato.',
          replaces: 'EARTHQUAKE'
        }
      ]
    },
    {
      role: 'hazard-setter',
      isPrimary: false,
      confidence: 'viable',
      ability: 'ROCKHEAD',
      item: 'LEFTOVERS',
      nature: 'IMPISH',
      evs: [252, 0, 204, 0, 52, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'WOODHAMMER', 'EARTHQUAKE', 'SYNTHESIS'],
      justification:
        'El volumen 95/105/85 con Síntesis y Cabeza Roca sostiene un colocador de Trampa Rocas: Latigazo sin retroceso castiga a quien entra a quitar la trampa, Terremoto es el segundo STAB y Síntesis recupera. Agitada con inversión física porque su lado especial ya es aceptable y las respuestas ofensivas más comunes son físicas o mixtas. Es "viable" y no "óptimo" porque el tipo Planta/Tierra arrastra una debilidad x4 a Hielo: cualquier ataque de ese tipo lo tumba pese a la inversión, así que solo funciona como Rocero ofensivo, no como muro fiable.',
      alternatives: [
        {
          slot: 'move',
          value: 'STONEEDGE',
          note: 'Cobertura de Roca contra Volador y Fuego si el equipo no necesita la recuperación.',
          replaces: 'SYNTHESIS'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Castiga a los físicos de contacto que intentan forzar el cambio.'
        }
      ]
    }
  ]
}

export default torterra
