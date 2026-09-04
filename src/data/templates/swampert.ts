import type { PokemonTemplateSet } from '../../lib/types'

const swampert: PokemonTemplateSet = {
  internalName: 'SWAMPERT',
  templates: [
    {
      role: 'tank',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TORRENT',
      item: 'LEFTOVERS',
      nature: 'RELAXED',
      evs: [252, 0, 252, 0, 4, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'EARTHQUAKE', 'FLIPTURN', 'ICEBEAM'],
      justification:
        'Agua/Tierra sobre PS 100 / Def 90 / Def. Esp. 90 le da un perfil de tanque colocador con una sola debilidad (Planta) y muchas resistencias útiles, entre ellas la inmunidad efectiva a Eléctrico que le permite entrar gratis. Trampa Rocas es el trabajo de utilidad que justifica traerlo. Terremoto es el STAB fiable de daño constante. Viraje mantiene el momentum y saca a Swampert de un mal enfrentamiento castigando al rival. Rayo Hielo castiga a los Planta y Dragón que buscan entrar a su única debilidad y a los Vuelo y Tierra. Reparto físico defensivo con Plácida porque el flanco físico es el más presionado y su Velocidad 60 no compite igualmente. Restos sostiene los PS entre entradas.',
      alternatives: [
        {
          slot: 'move',
          value: 'SCALD',
          note: 'Escaldar da un STAB de Agua con 30% de quemadura para minar a los físicos, cediendo la cobertura de Rayo Hielo contra Planta.',
          replaces: 'ICEBEAM'
        },
        {
          slot: 'nature',
          value: 'IMPISH',
          note: 'Agitada si no se quiere sacrificar Velocidad y el equipo no juega con Espacio Raro.'
        },
        {
          slot: 'item',
          value: 'ROCKYHELMET',
          note: 'Casco Dentado castiga a los rompemuros físicos de contacto que lo tratan como cambio seguro.'
        },
        {
          slot: 'move',
          value: 'YAWN',
          note: 'Bostezo fuerza cambios y abre turnos para otro colocador si Swampert no es el encargado de Trampa Rocas.',
          replaces: 'STEALTHROCK'
        }
      ]
    },
    {
      role: 'breaker-physical',
      isPrimary: false,
      confidence: 'viable',
      ability: 'TORRENT',
      item: 'CHOICEBAND',
      nature: 'ADAMANT',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['EARTHQUAKE', 'LIQUIDATION', 'ICEPUNCH', 'FLIPTURN'],
      justification:
        'Uso ofensivo: Ataque 110 más Cinta Elección convierte el excelente STAB Agua/Tierra en un golpe de apertura difícil de aguantar. Terremoto e Hidroariete son el doble STAB, Puño Hielo pega a los Planta, Dragón y Vuelo, y Viraje evita quedar totalmente encerrado dejando pivotar tras el impacto. Firme maximiza el daño; los 252 en Velocidad solo sirven para adelantar a otras bases lentas, ya que la base 60 no accede al tier rápido aunque se invierta. Es "viable" y no "óptimo" porque el rol de tanque colocador aporta mucho más a lo largo de la partida y quedar bloqueado con esa Velocidad lo hace explotable.',
      alternatives: [
        {
          slot: 'move',
          value: 'STONEEDGE',
          note: 'Roca Afilada castiga a los Vuelo y Fuego que no temen al doble STAB, cediendo el golpe seguro a Planta y Dragón de Puño Hielo.',
          replaces: 'ICEPUNCH'
        },
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Pañuelo Elección lo lleva a revenge killer para amenazas debilitadas, aprovechando la cobertura casi perfecta del doble STAB.'
        }
      ]
    }
  ]
}

export default swampert
