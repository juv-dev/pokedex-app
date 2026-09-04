import type { PokemonTemplateSet } from '../../lib/types'

const inteleon: PokemonTemplateSet = {
  internalName: 'INTELEON',
  templates: [
    {
      role: 'breaker-special',
      isPrimary: true,
      confidence: 'optimo',
      ability: 'TORRENT',
      item: 'CHOICESPECS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['HYDROPUMP', 'DARKPULSE', 'ICEBEAM', 'UTURN'],
      justification:
        'Inteleon en Añil V4.13 es Agua/Siniestro, un cambio de tipo que le da STAB doble: Ataque Especial 125 con Velocidad 120 y Gafas Elección convierten a Hidrobomba (110, STAB Agua) en el golpe de poder del set. Pulso Umbrío (80, STAB Siniestro) es la segunda baza y pega supereficaz a Fantasma y Psíquico, que son precisamente los tipos que frenan al Agua puro; Rayo Hielo cubre Planta, Volador y Dragón. Ida y Vuelta es la ranura de pivote de los sets de elección: cuando el rival saca un muro especial, Inteleon cede el turno sin quedar bloqueado. Torrente es la habilidad correcta aquí: con las Gafas no hay críticos planeados, y el +50% a Agua por debajo de un tercio de PS convierte a Hidrobomba en un remate de 247 de potencia efectiva en el peor momento del rival. Miedosa con 252 At.Esp. / 252 Vel. es el reparto de rompemuros rápido.',
      alternatives: [
        {
          slot: 'move',
          value: 'SNIPESHOT',
          note: 'Disparo Certero (80, 100 de precisión, no redirigible) es el STAB Agua fiable cuando fallar Hidrobomba cuesta la partida.',
          replaces: 'HYDROPUMP'
        },
        {
          slot: 'item',
          value: 'HEAVYDUTYBOOTS',
          note: 'Botas Gruesas eliminan el 25% de Trampa Rocas y permiten pivotar con Ida y Vuelta más veces, sin el pico de las Gafas.'
        },
        {
          slot: 'ability',
          value: 'SNIPER',
          note: 'Francotirador solo aporta con golpes críticos: es la habilidad del set alternativo con Foco Energía y Periscopio.'
        }
      ]
    },
    {
      role: 'sweeper-special',
      isPrimary: false,
      confidence: 'viable',
      ability: 'SNIPER',
      item: 'SCOPELENS',
      nature: 'TIMID',
      evs: [0, 0, 0, 252, 4, 252],
      ivs: [31, 31, 31, 31, 31, 31],
      moves: ['FOCUSENERGY', 'SNIPESHOT', 'ICEBEAM', 'DARKPULSE'],
      justification:
        'Inteleon es de los pocos Pokémon capaces de garantizar críticos: Foco Energía sube dos niveles la tasa de crítico y el Periscopio añade uno más, de modo que los tres ataques del set golpean siempre en crítico. Francotirador multiplica entonces el daño de cada golpe por 2,25 en vez de 1,5 sin coste de objeto ni de turno extra, convirtiendo a Disparo Certero (80, STAB Agua) en un golpe de 180 efectivos que no puede ser redirigido, con Rayo Hielo y Pulso Umbrío como cobertura que también disfruta del multiplicador. La debilidad del set es el turno de Foco Energía y el desgaste de la velocidad 120 si el rival lo aprovecha para cambiar; por eso es la variante viable y no la primaria, aunque su pico de daño sostenido supera al de las Gafas Elección.',
      alternatives: [
        {
          slot: 'move',
          value: 'HYDROPUMP',
          note: 'Hidrobomba con crítico garantizado por Foco Energía en vez de Disparo Certero, a cambio de la precisión 80.',
          replaces: 'SNIPESHOT'
        },
        {
          slot: 'item',
          value: 'LIFEORB',
          note: 'Vidasfera suma un 30% al daño ya multiplicado por Francotirador, aceptando perder la garantía total de crítico del Periscopio.'
        },
        {
          slot: 'move',
          value: 'AGILITY',
          note: 'Agilidad sube la Velocidad dos niveles y consolida el rol de barredor, cediendo la cobertura de Hielo.',
          replaces: 'ICEBEAM'
        }
      ]
    }
  ]
}

export default inteleon