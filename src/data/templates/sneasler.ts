import type { PokemonTemplateSet } from '../../lib/types'

const sneasler: PokemonTemplateSet = {
  internalName: 'SNEASLER',
  templates: [
    {
      role: 'setup-sweeper',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'UNBURDEN',
      item: 'WHITEHERB',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['SWORDSDANCE', 'ACROBATICS', 'CLOSECOMBAT', 'DIRECLAW'],
      justification:
        'Liviano duplica la Velocidad al usar o perder el objeto, y la Hierba Blanca se consume en el mismo turno en que A Bocajarro baja el Ataque y la Defensa propia: el golpe queda sin penalización y Sneasler pasa de Velocidad 120 a efectiva 240 en un solo turno. Desde ahí, Acróbata pasa de 55 a 110 de potencia al no llevar objeto y barre con Ataque 130. Danza Espada prepara el barrido cuando hay turno seguro, y Garra Nociva (STAB veneno de 80, 30% de envenenar, paralizar o dormir) es la firma del set: castiga a los cambios que quiere frenar el barrido. Alegre y 252 de Velocidad porque el tramo 120 ya es competitivo y el doble de Liviano no admite naturaleza lenta.',
      alternatives: [
        {
          slot: 'item',
          value: 'FOCUSSASH',
          note: 'Banda Aguante garantiza el turno de Danza Espada contra un rival más rápido y fuerte, asumiendo que Liviano no se activará.'
        },
        {
          slot: 'item',
          value: 'CHOICEBAND',
          note: 'Rompemuros directo con A Bocajarro y Lanzamugre a Ataque 130 potenciado, sin turnos de preparación y con bloqueo de movimiento.'
        },
        {
          slot: 'move',
          value: 'KNOCKOFF',
          note: 'Desarme quita el objeto rival y golpea Fantasma y Psíquico, cediendo la utilidad de estado de Garra Nociva.',
          replaces: 'DIRECLAW'
        },
        {
          slot: 'move',
          value: 'GUNKSHOT',
          note: 'Lanzamugre (120, 30% de envenenar) maximiza el STAB veneno a cambio de la precisión 90 y de la capacidad de estado aleatoria de Garra Nociva.',
          replaces: 'DIRECLAW'
        }
      ]
    },
    {
      role: 'hazard-lead',
      isPrimary: false,
      confidence: 'viable',
      ability: 'POISONTOUCH',
      item: 'FOCUSSASH',
      nature: 'JOLLY',
      evs: [0, 252, 4, 0, 0, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['TOXICSPIKES', 'TAUNT', 'CLOSECOMBAT', 'KNOCKOFF'],
      justification:
        'Sneasler de apertura: Velocidad 120 le permite colocar Púas Tóxicas antes que casi cualquier lead, y Mofa bloquea las trampas y la utilidad del rival en el duelo de apertura. Toque Tóxico añade un 30% de envenenar por contacto, de modo que tanto la trampa como A Bocajarro y Desarme castigan al que entra. Banda Aguante garantiza la primera acción incluso contra leads más rápidos o de prioridad. Es viable y no óptimo porque el rol de lead desperdicia el potencial ofensivo de Ataque 130, y la urna de daño sin púas es menor que la del set de Liviano.',
      alternatives: [
        {
          slot: 'ability',
          value: 'UNBURDEN',
          note: 'Si el lead sobrevive con la Banda consumida, la Velocidad se dobla para colocar la segunda capa o castigar al que cambia.'
        },
        {
          slot: 'move',
          value: 'UTURN',
          note: 'Ida y Vuelta conserva el momentum tras colocar la trampa, cediendo el daño del segundo STAB.',
          replaces: 'KNOCKOFF'
        }
      ]
    }
  ]
}

export default sneasler