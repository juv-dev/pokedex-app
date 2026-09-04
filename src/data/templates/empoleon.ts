import type { PokemonTemplateSet } from '../../lib/types'

const empoleon: PokemonTemplateSet = {
  internalName: 'EMPOLEON',
  templates: [
    {
      role: 'defensive-pivot',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'COMPETITIVE',
      item: 'LEFTOVERS',
      nature: 'CALM',
      evs: [252, 4, 0, 0, 252, 0],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['STEALTHROCK', 'FLIPTURN', 'SCALD', 'FLASHCANNON'],
      justification:
        'El tipo Agua/Acero le da un repertorio defensivo enorme (resiste Normal, Volador, Roca, Bicho, Acero, Psíquico, Fuego, Hielo, Dragón, Hada, Fantasma; inmune a Veneno) y el volumen 84/88/101 lo sostiene como pivote que además pone Trampa Rocas. Voltiotorno (Flip Turn) reposiciona al equipo tras absorber un golpe; Escaldar quema; Foco Resplandor es el STAB de Acero con posible bajar Def. Esp. Tenacidad es la sinergia central: cuando un rival le baja una característica (Intimidación al entrar, Chirrido, Bilis, Pulso Umbrío, Encanto) sube dos niveles el At. Esp., convirtiendo esos intentos de presión en un boost ofensivo. Serena con inversión mixta en PS y Def. Esp. porque su lado físico ya resiste bien de forma natural.',
      alternatives: [
        {
          slot: 'move',
          value: 'ICEBEAM',
          note: 'Cobertura para Dragón, Tierra, Volador y Planta a cambio del STAB de Acero.',
          replaces: 'FLASHCANNON'
        },
        {
          slot: 'move',
          value: 'ROAR',
          note: 'Phazeo para frenar sweepers con setup, cediendo el rol de trampas.',
          replaces: 'STEALTHROCK'
        },
        {
          slot: 'item',
          value: 'ASSAULTVEST',
          note: 'Muro especial puro; obliga a cambiar Trampa Rocas por un cuarto ataque como Rayo Hielo.'
        },
        {
          slot: 'nature',
          value: 'BOLD',
          note: 'Si el equipo teme más a los atacantes físicos que a los especiales.'
        }
      ]
    },
    {
      role: 'breaker-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'COMPETITIVE',
      item: 'CHOICESPECS',
      nature: 'MODEST',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HYDROPUMP', 'FLASHCANNON', 'ICEBEAM', 'GRASSKNOT'],
      justification:
        'Con Gafas Elección el At. Esp. 111 y el STAB de Agua/Acero pegan a nivel de rompemuros. Hidrobomba es el golpe principal, Foco Resplandor y Rayo Hielo cubren Acero/Roca/Hada y Dragón/Tierra/Volador, Hierba Nudo castiga a los Agua y Tierra pesados. Tenacidad sigue castigando a los que entran a bajarle una estadística. Es "viable" y no "óptimo" porque la Velocidad 60 lo deja atrás de casi todo el tier ofensivo: Empoleon aporta más al equipo como pivote que pone trampas que como atacante bloqueado en un movimiento.',
      alternatives: [
        {
          slot: 'move',
          value: 'FLIPTURN',
          note: 'Salida de pivote para no quedar atrapado en el movimiento equivocado.',
          replaces: 'GRASSKNOT'
        },
        {
          slot: 'item',
          value: 'CHOICESCARF',
          note: 'Convierte los 60 de Velocidad en un control de amenazas debilitadas, a costa de potencia.'
        }
      ]
    }
  ]
}

export default empoleon
